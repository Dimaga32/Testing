import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

export default defineConfig({
   base: "/", // Путь, по которому будет доступен ваш сайт (можно изменить, если сайт размещается не на корне)
   server: {
      port: 5173, // Порт, на котором будет запущен сервер
      open: true, // Автоматически открывать браузер при старте
      hmr: true, // Горячая перезагрузка (обновление при изменении файлов)
   },
   build: {
      outDir: "builtThePorject", // Папка, в которую будет собран проект
      sourcemap: true, // Генерация карт исходников для удобства отладки
      minify: "esbuild", // Использование esbuild для минификации (очень быстро)
   },
   optimizeDeps: {
      include: ["react", "react-dom"], // Явно указываем зависимости для оптимизации
      exclude: ["some-big-library"], // Исключаем библиотеку из оптимизации, если она не используется в проекте
   },
   publicPath: path.join(__dirname, "public"),
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "src"),
      },
   },
   plugins: [react()],
});
