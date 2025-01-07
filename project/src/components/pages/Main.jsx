import NavigationBar from "../UI/nav";
import Register from "../UI/register";
import Login from "../UI/login";
export  default function Main(props) {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1 className="h3 text-center">Демонстрационный сайт</h1>
            <Register/>
            <Login/>
        </div>
    )
}