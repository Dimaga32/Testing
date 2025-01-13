import Register from "../../features/Registration";
import Login from "../../features/Logination";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UsersDateLoader} from "../../features/UserData/UsersDateLoader";
import {TypeDispatch, TypeReducerState} from "../../app/MainReducer";
import Header from "../../widgets/Header";
export  default function MyDataContent() {
    const userData = useSelector((state:TypeReducerState) => state.userdata.UserDate);
    const dispatch:TypeDispatch = useDispatch();
    useEffect(()=>{dispatch(UsersDateLoader())},[dispatch]);
    return (
        <div>
            <Header/>
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