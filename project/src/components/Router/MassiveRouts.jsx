import { Navigate } from "react-router-dom";
import Main from "../pages/Main";
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
];