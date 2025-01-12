var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require("express");
var cors = require("cors");
var Pool = require("pg").Pool;
var crypto = require("crypto");
var app = express();
var authMiddleware = require("./authMiddleware.js");
var port = 5000;
var secret_key = "HG&^TYghjkijgtcr^CTIYUHO*&G*&Cryg";
var jwt = require('jsonwebtoken');
var hashString = function (input) {
    return crypto.createHash("sha256") // Указываем алгоритм хэширования
        .update(input) // Обновляем хэш с входной строкой
        .digest("hex"); // Возвращаем хэш в виде строки (hex)
};
var pool = new Pool({
    user: "user",
    host: "localhost",
    database: "postgres",
    password: "d16141614",
    port: 5432,
    options: "-c search_path=user_schema" // Указание схемы
});
var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());
var userRouter = express.Router();
userRouter.use(function (req, res, next) { return authMiddleware(req, res, next, secret_key); });
app.use('/api/user', userRouter);
app.get("/api/user/usersDate", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (res.locals.newAccessToken) {
                    res.setHeader('x-new-access-token', res.locals.newAccessToken);
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, pool.query("SELECT * FROM user_schema.users")];
            case 2:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        metadata: { success: true,
                            userId: req.user,
                            accessToken: res.locals.newAccessToken || null },
                        data: result.rows
                    })];
            case 3:
                error_1 = _a.sent();
                console.error(error_1.message);
                return [2 /*return*/, res.status(500).json({
                        metadata: { success: false,
                            userId: req.user || null,
                            accessToken: res.locals.newAccessToken || null },
                        error: "Ошибка сервера"
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); });
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
app.post("/api/registers_persons", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, name, email, password, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                hash_password = hashString(password);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, pool.query("INSERT INTO user_schema.registers_persons (name, email,password) VALUES ($1, $2,$3)", [name, email, hash_password])];
            case 2:
                _b.sent(); // Явное указание схемы
                res.status(201).send("Пользователь добавлен");
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                console.error(error_2.message);
                res.status(500).send("Ошибка сервера");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/login_persons", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, name_or_email, password, hash_password, queryResult, result, accessToken, refreshToken, id, email, name_1, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name_or_email = _a.name_or_email, password = _a.password;
                hash_password = hashString(password);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, pool.query("SELECT * FROM user_schema.registers_persons WHERE name = $1 OR email = $1", [name_or_email])];
            case 2:
                queryResult = _b.sent();
                if (queryResult.rows.length === 0) {
                    return [2 /*return*/, res.status(404).send("Пользователь не найден")];
                }
                result = queryResult.rows[0];
                if (result.password === hash_password) {
                    accessToken = jwt.sign({ userId: result.id }, secret_key, { expiresIn: '30m' });
                    refreshToken = jwt.sign({ userId: result.id }, secret_key, { expiresIn: '30d' } // 7 дней
                    );
                    id = result.id;
                    email = result.email;
                    name_1 = result.name;
                    res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, id: id, name: name_1, email: email });
                }
                else {
                    return [2 /*return*/, res.status(401).send("Неверный пароль")];
                }
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                console.error(error_3.message);
                res.status(500).send("Пользователь не найден");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/api/user/AccountInfo", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var result, user, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (res.locals.newAccessToken) {
                    res.setHeader('x-new-access-token', res.locals.newAccessToken);
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, pool.query("SELECT * FROM user_schema.registers_persons WHERE id = $1", [req.user])];
            case 2:
                result = _a.sent();
                user = result.rows[0];
                return [2 /*return*/, res.json({
                        data: { userid: user.id, username: user.name, useremail: user.email },
                        metadata: { success: true,
                            accessToken: res.locals.newAccessToken || null },
                        redirectUrl: "/Account#".concat(req.user)
                    })];
            case 3:
                error_4 = _a.sent();
                console.error(error_4.message);
                return [2 /*return*/, res.status(500).json({
                        metadata: {
                            success: false,
                            accessToken: res.locals.newAccessToken || null
                        },
                        error: "Ошибка сервера"
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () {
    console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 http://localhost:".concat(port));
});
//# sourceMappingURL=Server.ts.map