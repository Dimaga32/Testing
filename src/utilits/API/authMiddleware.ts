import jwt from 'jsonwebtoken'
import  { Request, Response, NextFunction } from "express";
const refreshSecretKey = "JHKLGMBJKLJ&^*()9767890GCBNJKIOUVNB"
export default function createAuthMiddleware(secret_key: string) {
    return  function(req: Request, res: Response, next: NextFunction) {
        const accessToken: string | null = req.headers['authorization']?.replace('Bearer ', '');
        const refreshToken = req.headers['x-refresh-token'] as string | null;
        type TypeData = {
            userId: number | null,
            success: boolean,
            accessToken: string | null,
        }
        const ErrorData: TypeData = {
            userId: null,
            success: false,
            accessToken: null,
        }
        if (!accessToken || !refreshToken) {
            return res.status(401).json(ErrorData);
        }

        try {
            // Проверяем accessToken
            const decodedAccess: TypeData = jwt.verify(accessToken, secret_key);
            req.user = decodedAccess.userId; // Сохраняем userId в req
            res.locals.newAccessToken = accessToken;
            return next(); // Пропускаем запрос дальше
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                try {
                    // Проверяем refreshToken
                    const decodedRefresh: TypeData = jwt.verify(refreshToken, refreshSecretKey);

                    // Генерируем новый accessToken
                    const newAccessToken: string = jwt.sign(
                        {userId: decodedRefresh.userId},
                        secret_key,
                        {expiresIn: '30m'}
                    );

                    res.locals.newAccessToken = newAccessToken;
                    req.user = decodedRefresh.userId;
                    return next();
                } catch (refreshError) {
                    return res.status(401).json(ErrorData);
                }
            }
            return res.status(401).json(ErrorData);
        }
    }
}
