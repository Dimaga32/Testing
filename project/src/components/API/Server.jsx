const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 5000;

const pool = new Pool({
    user: "user",
    host: "localhost",
    database: "postgres",
    password: "d16141614",
    port: 5432,
    options: "-c search_path=user_schema" // Указание схемы
});

app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM user_schema.users"); // Явное указание схемы
        res.json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Ошибка сервера");
    }
});

app.post("/api/users", async (req, res) => {
    const { name, email } = req.body;
    try {
        await pool.query("INSERT INTO user_schema.users (name, email) VALUES ($1, $2)", [name, email]); // Явное указание схемы
        res.status(201).send("Пользователь добавлен");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Ошибка сервера");
    }
});

app.listen(port, () => {
    console.log(`Сервер работает на http://localhost:${port}`);
});
