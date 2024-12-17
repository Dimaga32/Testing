import { Navigate } from "react-router-dom";
import JS from "../pages/js";
import Main from "../pages/Main";
import Go from "../pages/Go";
import Python from "../pages/Python";

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
        path: "/Python",
        element: <Python/>,
    },
    {
        path: "/Go",
        element: <Go/>,
    },
    {
        path: "/JS",
        element: <JS/>,
    },
];