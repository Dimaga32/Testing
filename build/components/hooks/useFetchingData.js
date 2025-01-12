var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useEffect } from "react";
import axios from "axios";
export default function useFetchingData(server, setData, dep) {
    if (dep === void 0) { dep = []; }
    useEffect(function () {
        axios.get(server)
            .then(function (res) { setData(res.data); })["catch"](function (error) { return console.error("Ошибка:", error.message); });
    }, __spreadArray([server], dep, true));
}
//# sourceMappingURL=useFetchingData.js.map