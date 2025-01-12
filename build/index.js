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
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/Style/main.scss';
import { Provider } from 'react-redux';
import { store } from './components/Redux/MainReducer';
var rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Root element not found");
}
var root = ReactDOM.createRoot(rootElement);
// @ts-ignore
root.render(_jsx(Provider, __assign({ store: store }, { children: _jsx(App, {}) })));
//# sourceMappingURL=index.tsx.map