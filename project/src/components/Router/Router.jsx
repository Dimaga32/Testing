import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouts } from "./MassiveRouts.jsx";
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRouts.map((el) => (
                    <Route element={el.element} path={el.path} key={el.path} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;