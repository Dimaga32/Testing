import NavigationBar from "../UI/nav";
import {useState} from "react";
import useFetchingData from "../hooks/useFetchingData";
import Register from "../UI/register";
import Login from "../UI/login";
import User from "../UI/User";
export  default function Account(props) {
    const [persons,setPersons]=useState(null);
    useFetchingData("http://localhost:5000/api/users",setPersons)
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="p">
                <User/>
                <Register/>
                <Login/>
            </div>
        </div>
    )
}