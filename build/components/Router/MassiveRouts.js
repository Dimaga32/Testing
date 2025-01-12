import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import Main from "../pages/Main";
import Python from "../pages/About";
import Account from "../pages/Account";
import MyData from "../pages/MyData";
import About from "../pages/About";
import Support from "../pages/Support";
export var publicRouts = [
    {
        path: "*",
        element: _jsx(Navigate, { to: "/Main" })
    },
    {
        path: "/Main",
        element: _jsx(Main, {})
    },
    {
        path: "/Account",
        element: _jsx(Account, {})
    },
    {
        path: "/MyData",
        element: _jsx(MyData, {})
    },
    {
        path: "/About",
        element: _jsx(About, {})
    },
    {
        path: "/Support",
        element: _jsx(Support, {})
    },
];
//# sourceMappingURL=MassiveRouts.js.map