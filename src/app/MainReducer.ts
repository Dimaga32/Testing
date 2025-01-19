import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { Loginreducer } from "../features/Logination/LoginReducer";
import { Registerreducer } from "../features/Registration/RegisterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { UserDatereducer } from "../features/UserData/UserDataReducer";
import { UserReducer } from "../features/User/UserReducer";

type TypeActionCreater = {
   type: string;
   payload: object | null;
};

const MainReducer = combineReducers({
   login: Loginreducer,
   register: Registerreducer,
   userdata: UserDatereducer,
   user: UserReducer,
});
export type TypeDispatch = typeof store.dispatch;
export type TypeReducerState = ReturnType<typeof MainReducer>;
export const store = createStore(
   MainReducer,
   composeWithDevTools(applyMiddleware(thunk)),
);
export const ActionCreater = (
   type: string,
   payload: object | null = null,
): TypeActionCreater => {
   return { type: type, payload: payload };
};
