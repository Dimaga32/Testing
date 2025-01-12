import NavigationBar from "../UI/nav";
import Register from "../UI/register";
import Login from "../UI/login";
import User from "../UI/User";
export  default function Account() {
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