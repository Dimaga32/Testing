const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const crypto = require("crypto");
const app = express();
const authMiddleware = require("./authMiddleware.js");
const port = 5000;
const secret_key = "HG&^TYghjkijgtcr^CTIYUHO*&G*&Cryg";
const jwt = require('jsonwebtoken');
const hashString = (input) => {
    return crypto.createHash("sha256") // Указываем алгоритм хэширования
        .update(input)                 // Обновляем хэш с входной строкой
        .digest("hex");                // Возвращаем хэш в виде строки (hex)
};

const pool = new Pool({
    user: "user",
    host: "localhost",
    database: "postgres",
    password: "d16141614",
    port: 5432,
    options: "-c search_path=user_schema" // Указание схемы
});

const corsOptions = {
    origin: "http://localhost:3000", // Локальный адрес фронтенда
};
app.use(cors(corsOptions));
app.use(express.json());

const userRouter = express.Router();
userRouter.use((req, res, next) => authMiddleware(req, res, next, secret_key));
app.use('/api/user', userRouter);

app.get("/api/user/usersDate", async (req, res) => {
    if (res.locals.newAccessToken) {
        res.setHeader('x-new-access-token', res.locals.newAccessToken);
    }

    try {
        const result = await pool.query("SELECT * FROM user_schema.users"); // Явное указание схемы

        return res.json({
            metadata:{success: true,
                      userId: req.user,
                      accessToken: res.locals.newAccessToken || null},
            data: result.rows,
        });
    } catch (error) {
        console.error(error.message);

        return res.status(500).json({
            metadata:{  success: false,
                        userId: req.user || null,
                        accessToken: res.locals.newAccessToken || null},
            error: "Ошибка сервера",
        });
    }
});



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

app.post("/api/registers_persons", async (req, res) => {
    const { name, email, password } = req.body;
    hash_password=hashString(password)
    try {
        await pool.query("INSERT INTO user_schema.registers_persons (name, email,password) VALUES ($1, $2,$3)", [name, email,hash_password]); // Явное указание схемы
        res.status(201).send("Пользователь добавлен");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Ошибка сервера");
    }
});

app.post("/api/login_persons", async (req, res) => {
    const { name_or_email, password } = req.body;
    const hash_password=hashString(password)
    try {
        const queryResult = await pool.query(
            "SELECT * FROM user_schema.registers_persons WHERE name = $1 OR email = $1",
            [name_or_email]
        );

        if (queryResult.rows.length === 0) {
            return res.status(404).send("Пользователь не найден");
        }

        const result = queryResult.rows[0];
        if (result.password===hash_password){
            const accessToken = jwt.sign(
                { userId: result.id },
                secret_key,
                { expiresIn: '30m' }
            );
            const refreshToken = jwt.sign(
                { userId: result.id },
                secret_key,
                { expiresIn: '30d' } // 7 дней
            );
            const id=result.id
            const email=result.email;
            const name=result.name;
            res.status(200).json({ accessToken, refreshToken,id ,name,email});
        }
        else {
            return res.status(401).send("Неверный пароль");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Пользователь не найден");
    }
});

app.get("/api/user/AccountInfo", async (req, res) => {
    if (res.locals.newAccessToken) {
        res.setHeader('x-new-access-token', res.locals.newAccessToken);
    }
    try {
        const result = await pool.query("SELECT * FROM user_schema.registers_persons WHERE id = $1",[req.user]);
        const user = result.rows[0];
        return res.json({
            data:{userid:user.id,username:user.name,useremail:user.email},
            metadata:{  success: true,
                        accessToken: res.locals.newAccessToken || null},
            redirectUrl: `/Account#${req.user}`})
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
                     metadata:{
                     success: false,
                     accessToken: res.locals.newAccessToken || null},
            error: "Ошибка сервера",
        });
    }
});

app.listen(port, () => {
    console.log(`Сервер работает на http://localhost:${port}`);
});
