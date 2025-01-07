export function UsersDateLoader() {
    return async function (dispatch, getState) {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');

            if (!accessToken || !refreshToken) {
                console.error('Отсутствуют токены авторизации');
                return;
            }

            const response = await fetch('http://localhost:5000/api/user/usersDate', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                    'x-refresh-token': refreshToken,
                },
            });

            const newAccessToken = response.headers.get('x-new-access-token');

            if (newAccessToken) {
                localStorage.setItem('accessToken', newAccessToken);
            }

            if (!response.ok) {
                if (response.status === 401) {
                    console.error('Неавторизован. Перенаправление на страницу входа.');
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                } else {
                    throw new Error('Ошибка сервера');
                }
                return;
            }

            // Парсим данные
            const data = await response.json();

            // Диспатчим данные в Redux
            dispatch({ type: 'LoadUserDate', payload: data });
        } catch (err) {
            console.error('Ошибка загрузки данных:', err);
        }
    };
}
