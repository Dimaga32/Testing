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
import { useState } from "react";
import useFetchingData from "../hooks/useFetchingData";
import Register from "../UI/register";
import Login from "../UI/login";
import User from "../UI/User";
export default function Account(props) {
    var _a = useState(null), persons = _a[0], setPersons = _a[1];
    useFetchingData("http://localhost:5000/api/users", setPersons);
    return (_jsxs("div", { children: [_jsx(NavigationBar, {}), _jsxs("div", __assign({ className: "p" }, { children: [_jsx(User, {}), _jsx(Register, {}), _jsx(Login, {})] }))] }));
}
//# sourceMappingURL=Account.js.map