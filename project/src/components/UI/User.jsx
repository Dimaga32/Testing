import React, { useState, useEffect } from "react";
import useFetchingData from "../hooks/useFetchingData";
import {jwtDecode} from "jwt-decode"; // Именованный экспорт

export default function User(props) {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    const refreshToken = localStorage.getItem("refreshToken");

    // Проверяем, истёк ли токен
    const isTokenExpired = (token) => {
        try {
            const { exp } = jwtDecode(token);
            return Date.now() >= exp * 1000; // exp в секундах, преобразуем в миллисекунды
        } catch (error) {
            return true; // Если токен некорректен, считаем его истёкшим
        }
    };

    // Обновляем accessToken с помощью refreshToken
    const handlePost = async (newData, url) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newData),
            });

            if (response.ok) {
                const data = await response.json(); // Парсим тело ответа
                localStorage.setItem("accessToken", data.accessToken);
                setAccessToken(data.accessToken); // Обновляем accessToken
            } else {
                const error = await response.text();
                console.error("Ошибка:", error);
            }
        } catch (error) {
            console.error("Ошибка при запросе:", error);
        }
    };

    // Логика для вызова useFetchingData
    const shouldFetchAccountInfo = !isTokenExpired(accessToken);
    const fetchUrl = shouldFetchAccountInfo ? "http://localhost:5000/AccountInfo" : null;

    useEffect(() => {
        const fetchData = async () => {
            if (isTokenExpired(accessToken) && refreshToken) {
                await handlePost(refreshToken, "http://localhost:5000/api/refresh_token");
            }
        };

        fetchData();
    }, [accessToken, refreshToken]);

    // Вызов useFetchingData на верхнем уровне компонента
    useFetchingData(fetchUrl, setUser);

    return (
        <div className="flex-column">
            {user ? (
                user
            ) : (
                <div className="h1 text-center">Вы не авторизированы</div>
            )}
        </div>
    );
}
