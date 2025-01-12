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
    isShowRegister: false
};
var ShowRegister = "ShowRegister";
var HideRegister = "HideRegister";
export var Registerreducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case ShowRegister:
            return __assign(__assign({}, state), { isShowRegister: true });
        case HideRegister:
            return __assign(__assign({}, state), { isShowRegister: false });
        default:
            return state;
    }
};
//# sourceMappingURL=RegisterReducer.js.map