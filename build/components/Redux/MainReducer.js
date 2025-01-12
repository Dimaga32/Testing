import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { Loginreducer } from "./LoginReducer";
import { Registerreducer } from "./RegisterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { UserDatereducer } from "./UserDataReducer";
import { UserReducer } from "./UserReducer";
var MainReducer = combineReducers({
    login: Loginreducer,
    register: Registerreducer,
    userdata: UserDatereducer,
    user: UserReducer
});
export var store = createStore(MainReducer, composeWithDevTools(applyMiddleware(thunk)));
export var ActionCreater = function (type, payload) {
    if (payload === void 0) { payload = null; }
    return { type: type, payload: payload };
};
//# sourceMappingURL=MainReducer.js.map