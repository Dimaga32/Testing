import express, { Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import { Pool } from "pg";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import createAuthMiddleware from "./authMiddleware";
const app = express();
const port: number = 5000;
const secret_key: string = "HG&^TYghjkijgtcr^CTIYUHO*&G*&Cryg";
declare global {
   namespace Express {
      export interface Request {
         user?: number; // Добавляем свойство user
      }
   }
}

const hashString = (input: string): string => {
   return crypto
      .createHash("sha256") // Указываем алгоритм хэширования
      .update(input) // Обновляем хэш с входной строкой
      .digest("hex"); // Возвращаем хэш в виде строки (hex)
};

// type TypePool={
//     user: string,
//     host: string,
//     database: string,
//     password: string,
//     port: number,
//     options: string,
// }

type TypeMetadata = {
   success: boolean;
   userId: number | null;
   accessToken: string | null;
};
type TypeData = {
   userid: number | null;
   username: string | null;
   useremail: string | null;
};
const pool: Pool = new Pool({
   user: "user",
   host: "localhost",
   database: "postgres",
   password: "d16141614",
   port: 5432,
   options: "-c search_path=user_schema", // Указание схемы
});
type TypeResult = {
   id?: number;
   email?: string;
   name?: string;
   password?: string;
   name_or_email?: string;
};

const corsOptions: CorsOptions = {
   origin: "http://localhost:5173", // Локальный адрес фронтенда
};
app.use(cors(corsOptions));
app.use(express.json());

const userRouter = express.Router();
userRouter.use(createAuthMiddleware(secret_key));
app.use("/api/user", userRouter);

app.get(
   "/api/user/usersDate",
   async (req: Request, res: Response): Promise<object | void> => {
      if (res.locals.newAccessToken) {
         res.setHeader("x-new-access-token", res.locals.newAccessToken);
      }

      try {
         const result: { rows: TypeData[] } = await pool.query(
            "SELECT * FROM user_schema.users",
         ); // Явное указание схемы
         const metadata: TypeMetadata = {
            success: true,
            userId: req.user,
            accessToken: res.locals.newAccessToken || null,
         };
         const data: TypeData[] = result.rows;
         return res.json({
            metadata,
            data,
         });
      } catch (error) {
         console.error(error.message);
         const metadata: TypeMetadata = {
            success: false,
            userId: req.user || null,
            accessToken: res.locals.newAccessToken || null,
         };
         return res.status(500).json({
            metadata,
            error: "Ошибка сервера",
         });
      }
   },
);

// app.post("/api/user/usersDate", async (req, res) => {
//     const { name, email } = req.body;
//     try {
//         await pool.query("INSERT INTO user_schema.users (name, email) VALUES ($1, $2)", [name, email]); // Явное указание схемы
//         res.status(201).send("Пользователь добавлен");
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Ошибка сервера");
//     }
// });

app.post(
   "/api/registers_persons",
   async (req: Request, res: Response): Promise<void> => {
      const { name, email, password }: TypeResult = req.body;
      const hash_password: string = hashString(password);
      try {
         await pool.query(
            "INSERT INTO user_schema.registers_persons (name, email,password) VALUES ($1, $2,$3)",
            [name, email, hash_password],
         ); // Явное указание схемы
         res.status(201).send("Пользователь добавлен");
      } catch (error) {
         console.error(error.message);
         res.status(500).send("Ошибка сервера");
      }
   },
);

app.post(
   "/api/login_persons",
   async (req: Request, res: Response): Promise<object | void> => {
      const { name_or_email, password }: TypeResult = req.body;
      const hash_password: string = hashString(password);
      try {
         const queryResult: { rows: TypeResult[] } = await pool.query(
            "SELECT * FROM user_schema.registers_persons WHERE name = $1 OR email = $1",
            [name_or_email],
         );

         if (queryResult.rows.length === 0) {
            return res.status(404).send("Пользователь не найден");
         }

         const result: TypeResult = queryResult.rows[0];
         if (result.password === hash_password) {
            const accessToken: string = jwt.sign(
               { userId: result.id },
               secret_key,
               { expiresIn: "30m" },
            );
            const refreshToken: string = jwt.sign(
               { userId: result.id },
               secret_key,
               { expiresIn: "30d" }, // 7 дней
            );
            const id = result.id;
            const email = result.email;
            const name = result.name;
            return res
               .status(200)
               .json({ accessToken, refreshToken, id, name, email });
         } else {
            return res.status(401).send("Неверный пароль");
         }
      } catch (error) {
         console.error(error.message);
         return res.status(500).send("Пользователь не найден");
      }
   },
);

app.get(
   "/api/user/AccountInfo",
   async (req: Request, res: Response): Promise<object | void> => {
      if (res.locals.newAccessToken) {
         res.setHeader("x-new-access-token", res.locals.newAccessToken);
      }
      try {
         const result: { rows: TypeData } = await pool.query(
            "SELECT * FROM user_schema.registers_persons WHERE id = $1",
            [req.user],
         );
         const user: TypeResult = result.rows[0];
         const metadata: TypeMetadata = {
            success: true,
            accessToken: res.locals.newAccessToken || null,
            userId: user.id,
         };
         const redirectUrl: string = `/Account#${req.user}`;
         return res.json({
            data: {
               userid: user.id,
               username: user.name,
               useremail: user.email,
            },
            metadata: metadata,
            redirectUrl: redirectUrl,
         });
      } catch (error) {
         console.error(error.message);
         return res.status(500).json({
            metadata: {
               success: false,
               accessToken: res.locals.newAccessToken || null,
            },
            error: "Ошибка сервера",
         });
      }
   },
);

app.listen(port, () => {
   console.log(`Сервер работает на http://localhost:${port}`);
});
