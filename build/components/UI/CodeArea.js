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
import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { goLanguage } from "./help/Go_lang";
import { pythonLanguage } from "./help/Python";
import { Button, Stack } from "react-bootstrap";
function CodeArea(props) {
    var _a = useState('// Напишите ваш код здесь...'), code = _a[0], setCode = _a[1];
    var _b = useState(''), output = _b[0], setOutput = _b[1]; // Для вывода результата
    // Функция для выбора языка подсветки
    var getLanguageExtension = function () {
        switch (props.lang) {
            case 'javascript':
                return javascript();
            case 'go':
                return goLanguage();
            case 'python':
                return pythonLanguage();
            default:
                return javascript();
        }
    };
    //запрос к мок серверу и получение ответа
    var executeCode = function () {
        fetch('/api/execute', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ language: props.lang, code: code })
        })
            .then(function (res) { return res.json(); })
            .then(function (data) { return setOutput(data.output); })["catch"](function (err) { return setOutput("Ошибка выполнения кода"); });
    };
    return (_jsxs(Stack, __assign({ direction: "vertical", gap: 3 }, { children: [_jsx("div", __assign({ style: { textAlign: "center", userSelect: "none" }, className: "fs-2" }, { children: "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0431\u0443\u0434\u0435\u0442 \u043F\u0438\u0441\u0430\u0442\u044C \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438 \"\u041F\u0440\u0438\u0432\u0435\u0442 '\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F'!\"" })), _jsx(CodeMirror, { value: code, minHeight: "300px", height: "max-content", extensions: [getLanguageExtension()], onChange: function (value) { setCode(value); }, className: "fs-3" }), _jsx(Button, __assign({ className: "mx-auto w-auto fs-2", onClick: executeCode }, { children: "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C" })), _jsx("div", __assign({ style: { textAlign: "center", userSelect: "none" }, className: "fs-2" }, { children: output }))] })));
}
;
export default CodeArea;
//# sourceMappingURL=CodeArea.js.map