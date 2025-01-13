import Register from "../../features/Registration";
import Login from "../../features/Logination";
import Header from "../../widgets/Header";
export  default function SupportContet() {
    return (
        <div>
            <Header/>
            <div style={{textAlign:"center"}} className="h3">Демонстрационный сайт</div>
            <div className="p">

                <Register/>
                <Login/>
            </div>
        </div>
    )
}