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
    UserDate: null
};
var LoadUserDate = "LoadUserDate";
var UpdateUserDate = "UpdateUserDate";
var PutUserDate = "PutUserDate";
var DeleteUserDate = "DeleteUserDate";
export var UserDatereducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case LoadUserDate:
            return __assign(__assign({}, state), { UserDate: action.payload });
        case DeleteUserDate:
            return __assign(__assign({}, state), { UserDate: null });
        default:
            return state;
    }
};
//# sourceMappingURL=UserDataReducer.js.map