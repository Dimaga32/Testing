import NavigationBar from "../UI/nav";
import {useState} from "react";
import useFetchingData from "../hooks/useFetchingData";
import Register from "../UI/register";
import Login from "../UI/login";
export  default function About(props) {
    const [persons,setPersons]=useState(null);
    useFetchingData("http://localhost:5000/api/users",setPersons)
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div style={{textAlign:"center"}} className="h3">Демонстрационный сайт</div>
            <div className="p">

                <Register/>
                <Login/>
            </div>
        </div>
    )
}