import {useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {UserLoader} from "./UserLoader";
import {TypeDispatch, TypeReducerState} from "../../app/MainReducer";

export default function UserContent() {
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
