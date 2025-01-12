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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersDateLoader } from "../Redux/redux-thunk/UsersDateLoader";
export default function MyData(props) {
    var userData = useSelector(function (state) { return state.userdata.UserDate; });
    var dispatch = useDispatch();
    useEffect(function () { dispatch(UsersDateLoader()); }, [dispatch]);
    return (_jsxs("div", { children: [_jsx(NavigationBar, {}), _jsx("div", __assign({ style: { textAlign: "center" }, className: "h3" }, { children: "\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0430\u0439\u0442" })), userData ?
                _jsx("div", __assign({ className: "p text-center" }, { children: JSON.stringify(userData.data) }))
                : "", _jsx(Register, {}), _jsx(Login, {})] }));
}
//# sourceMappingURL=MyData.js.map