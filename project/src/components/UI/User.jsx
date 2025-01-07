import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {UserLoader} from "../Redux/redux-thunk/UserLoader";

export default function User(props) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    useEffect(()=>{
        dispatch(UserLoader())
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
