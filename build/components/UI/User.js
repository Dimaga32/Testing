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
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLoader } from "../Redux/redux-thunk/UserLoader";
export default function User(props) {
    var dispatch = useDispatch();
    var user = useSelector(function (state) { return state.user; });
    useEffect(function () {
        dispatch(UserLoader());
    }, [dispatch]);
    return (_jsx("div", __assign({ className: "flex-column" }, { children: user ? (JSON.stringify(user)) : (_jsx("div", __assign({ className: "h1 text-center" }, { children: "\u0412\u044B \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u044B" }))) })));
}
//# sourceMappingURL=User.js.map