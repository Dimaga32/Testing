import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouts } from "./MassiveRouts.jsx";
function Router() {
    return (_jsx(BrowserRouter, { children: _jsx(Routes, { children: publicRouts.map(function (el) { return (_jsx(Route, { element: el.element, path: el.path }, el.path)); }) }) }));
}
export default Router;
//# sourceMappingURL=Router.js.map