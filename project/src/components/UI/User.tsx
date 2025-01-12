import {useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {UserLoader} from "../Redux/redux-thunk/UserLoader";
import {TypeDispatch, TypeReducerState} from "../Redux/MainReducer";

export default function User() {
    const dispatch:TypeDispatch = useDispatch();
    const user = useSelector((state:TypeReducerState) => state.user);
    useEffect(():void=>{
        void dispatch(UserLoader())
    },[dispatch])
    return (
        <div className="flex-column">
            {user ? (
                JSON.stringify(user)
            ) : (
                <div className="h1 text-center">Вы не авторизированы</div>
            )}
        </div>
    );
}
