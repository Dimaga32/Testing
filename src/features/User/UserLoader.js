export function UserLoader() {
   return async function (dispatch) {
      try {
         const accessToken = localStorage.getItem("accessToken");
         const refreshToken = localStorage.getItem("refreshToken");

         if (!accessToken || !refreshToken) {
            console.error("Отсутствуют токены авторизации");
            return;
         }

         const response = await fetch(
            "http://localhost:5000/api/user/AccountInfo",
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${accessToken}`,
                  "x-refresh-token": refreshToken,
               },
            },
         );

         if (!response.ok) {
            if (response.status === 401) {
               console.error(
                  "Неавторизован. Перенаправление на страницу входа.",
               );
               localStorage.removeItem("accessToken");
               localStorage.removeItem("refreshToken");
            } else {
               throw new Error("Ошибка сервера");
            }
            return;
         }

         const newAccessToken = response.headers.get("x-new-access-token");

         if (newAccessToken) {
            localStorage.setItem("accessToken", newAccessToken);
         }

         // Парсим данные
         const data = await response.json();

         if (data.metadata.success) {
            dispatch({ type: "LoadUser", payload: data.data });
         } else {
            console.log("ошибка загрзки данных");
         }
      } catch (err) {
         console.error("Ошибка загрузки данных:", err);
      }
   };
}
