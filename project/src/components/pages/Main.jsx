import NavigationBar from "../UI/nav";
import {useState} from "react";
import useFetchingData from "../hooks/useFetchingData";
import Register from "../UI/register";
import Login from "../UI/login";
import {useSelector} from "react-redux";
export  default function Main(props) {
    const [persons,setPersons]=useState(null);
    useFetchingData("http://localhost:5000/api/users",setPersons)
    const state = useSelector((state) => state)
    console.log(state)
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div style={{textAlign:"center"}} className="h3">Демонстрационный сайт</div>
            <div className="p">
                {persons ? <div style={{width:"100vw",height:"auto", overflow:"scroll"}}>{JSON.stringify(persons)}</div>  : `error`}
                <Register/>
                <Login/>
            </div>
        </div>
    )
}