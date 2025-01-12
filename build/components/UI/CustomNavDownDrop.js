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
import { CSSTransition } from "react-transition-group";
import { NavDropdown } from "react-bootstrap";
import React, { useState, useRef, useEffect, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreater } from "../Redux/MainReducer";
export default function CustomNavDownDrop(props) {
    var _a = useState(false), showDropdown = _a[0], setShowDropdown = _a[1];
    var dropdownRef = useRef(null);
    var navDropdown = useRef("1px");
    var dispatch = useDispatch();
    var isShowRegister = useSelector(function (state) { return state.register.isShowRegister; });
    var isShowLogin = useSelector(function (state) { return state.login.isShowLogin; });
    var _b = useSelector(function (state) { return state.user; }), UserId = _b.UserId, isLoaded = _b.isLoaded, UserName = _b.UserName, UserEmail = _b.UserEmail;
    console.log("UserId from Redux:", UserId);
    return (_jsx(NavDropdown, __assign({ ref: navDropdown, className: "center flex-grow-1 fs-2 w-100 text-center", title: "User", id: "basic-nav-dropdown", show: showDropdown, onToggle: function (expanded) { return setShowDropdown(!showDropdown); }, menuVariant: "dropdown-center", onClick: function (e) { return e.stopPropagation(); } }, { children: _jsx(CSSTransition, __assign({ "in": showDropdown, timeout: 600, classNames: "nav-menu-part", unmountOnExit: true, nodeRef: dropdownRef, appear: true }, { children: _jsxs("div", __assign({ onClick: function (e) { return e.stopPropagation(); }, ref: dropdownRef, style: { width: navDropdown.current.offsetWidth } }, { children: [_jsx(NavDropdown.Item, __assign({ className: "center flex-grow-1 fs-2 w-100", onClick: function () {
                            dispatch(ActionCreater("ShowRegister"));
                            if (isShowLogin) {
                                dispatch(ActionCreater("HideLogin"));
                            }
                        } }, { children: "register" })), _jsx(NavDropdown.Item, __assign({ className: "center flex-grow-1 fs-2 w-100", onClick: function () {
                            dispatch(ActionCreater("ShowLogin"));
                            if (isShowRegister) {
                                dispatch(ActionCreater("HideRegister"));
                            }
                        } }, { children: "login" })), _jsx(NavDropdown.Item, __assign({ className: "center flex-grow-1 fs-2 w-100", href: "/Account#".concat(UserId ? UserId : "") }, { children: "personal" })), _jsx(NavDropdown.Divider, {}), _jsx(NavDropdown.Item, __assign({ className: "center flex-grow-1 fs-2 w-100", onClick: function () {
                            dispatch(ActionCreater("Logout"));
                            localStorage.removeItem('accessToken');
                            localStorage.removeItem('refreshToken');
                        } }, { children: "exit" }))] })) })) })));
}
//# sourceMappingURL=CustomNavDownDrop.js.map