var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import '../Style/main.scss';
import CustomNavDownDrop from "./CustomNavDownDrop";
var NavigationBar = /** @class */ (function (_super) {
    __extends(NavigationBar, _super);
    function NavigationBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showDropdown: false
        };
        return _this;
    }
    NavigationBar.prototype.render = function () {
        return (_jsx(Navbar, __assign({ expand: "lg", className: "bg-primary" }, { children: _jsxs(Container, __assign({ fluid: true }, { children: [_jsx(Navbar.Brand, __assign({ href: "/Main" }, { children: _jsx("img", { src: "/logo.png", width: "30vw", className: "d-inline-block align-top", alt: "React-Bootstrap logo" }) })), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsx(Navbar.Collapse, __assign({ id: "basic-navbar-nav" }, { children: _jsx("div", __assign({ className: "flex-container" }, { children: _jsxs(Nav, __assign({ className: "lg-part-navigation" }, { children: [_jsx(Nav.Link, __assign({ className: "center flex-grow-1 fs-2 w-100", href: "/About" }, { children: "About" })), _jsx(Nav.Link, __assign({ className: "center flex-grow-1 fs-2 w-100", href: "MyData" }, { children: "My data" })), _jsx(Nav.Link, __assign({ className: "center flex-grow-1 fs-2 w-100", href: "/Support" }, { children: "Support" })), _jsx(CustomNavDownDrop, {})] })) })) }))] })) })));
    };
    return NavigationBar;
}(React.Component));
export default NavigationBar;
//# sourceMappingURL=nav.js.map