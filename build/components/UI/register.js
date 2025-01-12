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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { ActionCreater } from "../Redux/MainReducer";
export default function Register() {
    var _this = this;
    var formData = useRef({
        name: "",
        email: "",
        password: ""
    });
    var handlePostClick = function (NewData, url) { return __awaiter(_this, void 0, void 0, function () {
        var response, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(NewData)
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 2];
                    window.location.reload();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, response.text()];
                case 3:
                    error = _a.sent();
                    console.log(error); // Показывает сообщение об ошибке
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error("Ошибка при запросе:", error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var RegistrationElement = useRef(null);
    var _a = useState({
        name: "more 5, less 20 simb",
        email: "contains @",
        password: "more than 6 simbols"
    }), checkerForm = _a[0], setCheckerForm = _a[1];
    var handleChange = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        formData.current = __assign(__assign({}, formData.current), (_a = {}, _a[name] = value, _a));
    };
    var dispatch = useDispatch();
    var isShowRegister = useSelector(function (state) { return state.register.isShowRegister; });
    var handleClick = function (e) {
        if (RegistrationElement.current && !RegistrationElement.current.contains(e.target)) {
            dispatch(ActionCreater("HideRegister"));
        }
    };
    useEffect(function () {
        if (isShowRegister) {
            document.addEventListener("click", handleClick);
        }
        return function () {
            document.removeEventListener("click", handleClick);
        };
    }, [isShowRegister]);
    return (_jsx(CSSTransition, __assign({ "in": isShowRegister, timeout: 1000, classNames: "register-animation", unmountOnExit: true, nodeRef: RegistrationElement, appear // Анимация при первом рендере
        : true }, { children: _jsxs("div", __assign({ ref: RegistrationElement, className: "MyReg flex-column align-items-center justify-content-center" }, { children: [_jsx("span", __assign({ className: "X", onClick: function () {
                        dispatch(ActionCreater("HideRegister")); // Устанавливаем состояние в Redux
                        console.log(isShowRegister); // Для проверки состояния
                    } }, { children: "\u274C" })), _jsxs("form", __assign({ action: "POST", className: "flex-column align-items-center justify-content-center" }, { children: [_jsx("label", __assign({ htmlFor: "nameInput", className: "fs-4" }, { children: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F" })), _jsx("input", { type: "text", className: "form-control fs-4", id: "nameInput", name: "name", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", onChange: handleChange, autoComplete: "off" }), checkerForm.name.length > 20 ? (_jsx("span", __assign({ className: "fs-6" }, { children: "\u0418\u043C\u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0434\u043B\u0438\u043D\u043D\u043E\u0435" }))) : checkerForm.name.length < 5 ? (_jsx("span", __assign({ className: "fs-6" }, { children: "\u0418\u043C\u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435" }))) : (""), _jsx("label", __assign({ htmlFor: "emailInput", className: "fs-4" }, { children: "Email" })), _jsx("input", { type: "text", className: "form-control fs-4", id: "emailInput", name: "email", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email", onChange: handleChange, autoComplete: "off" }), !checkerForm.email.includes("@") ? (_jsx("span", __assign({ className: "fs-6" }, { children: "\u041F\u043E\u0447\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0441\u0438\u043C\u0432\u043E\u043B \"@\"" }))) : (""), _jsx("label", __assign({ htmlFor: "passwordInput", className: "fs-4" }, { children: "\u041F\u0430\u0440\u043E\u043B\u044C" })), _jsx("input", { type: "password", className: "form-control fs-4", id: "passwordInput", name: "password", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", onChange: handleChange, autoComplete: "off" }), checkerForm.password.length < 6 ? (_jsx("span", __assign({ className: "fs-6" }, { children: "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" }))) : (""), _jsx(Button, __assign({ className: "btn fs-4 text-center d-flex justify-content-center align-items-center sub_btn", type: "submit", onClick: function (e) {
                                e.preventDefault();
                                setCheckerForm(formData.current); // Обновление checkerForm
                                console.log(formData.current);
                                handlePostClick(formData.current, "http://localhost:5000/api/registers_persons");
                            } }, { children: "click" }))] }))] })) })));
}
//# sourceMappingURL=register.js.map