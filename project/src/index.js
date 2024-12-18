import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer } from "miragejs";
import './components/Style/main.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
//создаём моковый сервер
createServer({
    routes() {
        this.post("/api/execute", (schema, request) => {
            const { language, code } = JSON.parse(request.requestBody);
            if (code.includes("error")) {
                return { output: "❌ Ошибка в коде!" };
            }
            return { output: `✅ Код на ${language} выполнен успешно!` };
        });
    }
});

root.render(
    <App />
);
