import { createServer } from "miragejs";

createServer({
    routes() {
        this.post("/api/execute", (schema, request) => {
            const { language, code } = JSON.parse(request.requestBody);

            // Простой обработчик: возвращает результат на основе языка
            if (code.includes("error")) {
                return { output: "❌ Ошибка в коде!" };
            }

            return { output: `✅ Код на ${language} выполнен успешно!` };
        });
    }
});