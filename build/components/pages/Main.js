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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NavigationBar from "../UI/nav";
import Register from "../UI/register";
import Login from "../UI/login";
export default function Main(props) {
    return (_jsxs("div", { children: [_jsx(NavigationBar, {}), _jsx("h1", __assign({ className: "h3 text-center" }, { children: "\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0430\u0439\u0442" })), _jsx(Register, {}), _jsx(Login, {})] }));
}
//# sourceMappingURL=Main.js.map