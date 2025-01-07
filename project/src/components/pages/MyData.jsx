import NavigationBar from "../UI/nav";
import Register from "../UI/register";
import Login from "../UI/login";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UsersDateLoader} from "../Redux/redux-thunk/UsersDateLoader";
export  default function MyData(props) {
    const userData = useSelector(state => state.userdata.UserDate);
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(UsersDateLoader())},[dispatch]);
    return (
        <div>
            <NavigationBar></NavigationBar>
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