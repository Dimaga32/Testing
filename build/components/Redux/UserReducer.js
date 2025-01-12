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
    UserId: null,
    isLoaded: false,
    UserName: null,
    UserEmail: null
};
var LoadUser = "LoadUser";
var DeleteUser = "DeleteUser";
export var UserReducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case LoadUser:
            return __assign(__assign({}, state), { UserId: action.payload.userid, isLoaded: true, UserName: action.payload.username, UserEmail: action.payload.useremail });
        case DeleteUser:
            return __assign(__assign({}, state), { UserId: null, isLoaded: false, UserName: null, UserEmail: null });
        default:
            return state;
    }
};
//# sourceMappingURL=UserReducer.js.map