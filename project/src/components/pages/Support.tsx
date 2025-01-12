import NavigationBar from "../UI/nav";
import Register from "../UI/register";
import Login from "../UI/login";
export  default function Support() {
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