import {createStore} from "redux";
import {combineReducers} from "redux";
import {Loginreducer} from "./LoginReducer";
import {Registerreducer} from "./RegisterReducer";

const reducer=combineReducers({
    login:Loginreducer,
    register:Registerreducer})
export const store= createStore(reducer);
