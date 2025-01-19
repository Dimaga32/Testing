import Header from "../../widgets/Header";
import Register from "../../features/Registration";
import Login from "../../features/Logination";
export default function AboutContent() {
   return (
      <div>
         <Header />
         <div style={{ textAlign: "center" }} className="h3">
            Демонстрационный сайт
         </div>
         <div className="p">
            <Register />
            <Login />
         </div>
      </div>
   );
}
