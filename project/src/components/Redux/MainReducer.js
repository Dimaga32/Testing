import {applyMiddleware, createStore} from "redux";
import { combineReducers } from "redux";
import { Loginreducer } from "./LoginReducer";
import { Registerreducer } from "./RegisterReducer";
import { composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import {UserDatereducer} from "./UserDataReducer";
import {Userreducer} from "./UserReducer";
const reducer = combineReducers({
    login: Loginreducer,
    register: Registerreducer,
    userdata:UserDatereducer,
    user: Userreducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export const ActionCreater=(type,payload=null)=>{return {type:type,payload:payload}};