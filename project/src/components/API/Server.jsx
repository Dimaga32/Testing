//сервер в отдельном компоненте
import { createServer } from "miragejs";
createServer({
    routes() {
        this.post("/api/execute", ( request) => {
            const { language, code } = JSON.parse(request.requestBody);
            if (code.includes("error")) {
                return {status: "success", output: "❌ Ошибка в коде!" };
            }
            return { status: "error",output: `✅ Код на ${language} выполнен успешно!` };
        });
    }
});