var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defaultState = {
    isShowLogin: false,
    isLogin: { name_or_email: "", password: "" }
};
var ShowLogin = "ShowLogin";
var HideLogin = "HideLogin";
var Login = "Login";
export var Loginreducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case ShowLogin:
            return __assign(__assign({}, state), { isShowLogin: true });
        case HideLogin:
            return __assign(__assign({}, state), { isShowLogin: false });
        case Login:
            if (!action.payload) {
                return state;
            }
            return __assign(__assign({}, state), { isLogin: { name_or_email: action.payload.name_or_email, password: action.payload.password } });
        default:
            return state;
    }
};
//# sourceMappingURL=LoginReducer.js.map