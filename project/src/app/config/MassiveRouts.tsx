import { Navigate } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Account from "../../pages/Account/Account";
import MyData from "../../pages/MyData/MyData";
import About from "../../pages/About/About";
import Support from "../../pages/Support/Support";

export const publicRouts = [
    {
        path: "*",
        element: <Navigate to="/Main" />,
    },
    {
        path: "/Main",
        element: <Main/>,
    },
    {
        path: "/Account",
        element: <Account/>,
    },
    {
        path: "/MyData",
        element: <MyData/>,
    },
    {
        path: "/About",
        element: <About/>,
    },
    {
        path: "/Support",
        element: <Support/>,
    },
];