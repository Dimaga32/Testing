import NavigationBar from "../UI/nav";
import Register from "../UI/register";
import Login from "../UI/login";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UsersDateLoader} from "../Redux/redux-thunk/UsersDateLoader";
import {TypeDispatch, TypeReducerState} from "../Redux/MainReducer";
export  default function MyData() {
    const userData = useSelector((state:TypeReducerState) => state.userdata.UserDate);
    const dispatch:TypeDispatch = useDispatch();
    useEffect(()=>{dispatch(UsersDateLoader())},[dispatch]);
    return (
        <div>
            <NavigationBar/>
            <div style={{textAlign:"center"}} className="h3">Демонстрационный сайт</div>
            {userData ?
                <div className="p text-center">
                    {JSON.stringify(userData.data)}
                </div>
                :""}
            <Register/>
            <Login/>
        </div>
    )
}