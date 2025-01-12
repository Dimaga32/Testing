var jwt = require('jsonwebtoken');
function authMiddleware(req, res, next, secretKey, refreshSecretKey) {
    var _a;
    var accessToken = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    var refreshToken = req.headers['x-refresh-token'];
    if (!accessToken || !refreshToken) {
        return res.status(401).json({
            userId: null,
            success: false,
            accessToken: null
        });
    }
    try {
        // Проверяем accessToken
        var decodedAccess = jwt.verify(accessToken, secretKey);
        req.user = decodedAccess.userId; // Сохраняем userId в req
        res.locals.newAccessToken = accessToken;
        return next(); // Пропускаем запрос дальше
    }
    catch (error) {
        if (error.name === 'TokenExpiredError') {
            try {
                // Проверяем refreshToken
                var decodedRefresh = jwt.verify(refreshToken, refreshSecretKey);
                // Генерируем новый accessToken
                var newAccessToken = jwt.sign({ userId: decodedRefresh.userId }, secretKey, { expiresIn: '30m' });
                res.locals.newAccessToken = newAccessToken;
                req.user = decodedRefresh.userId;
                return next();
            }
            catch (refreshError) {
                return res.status(401).json({
                    userId: null,
                    success: false,
                    accessToken: null
                });
            }
        }
        return res.status(401).json({
            userId: null,
            success: false,
            accessToken: null
        });
    }
}
module.exports = authMiddleware;
//# sourceMappingURL=authMiddleware.ts.map