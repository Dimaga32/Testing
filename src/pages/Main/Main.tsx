import Header from "../../widgets/Header";
import Register from "../../features/Registration";
import Login from "../../features/Logination";
export default function MainContent() {
   return (
      <div>
         <Header />
         <h1 className="h3 text-center">Демонстрационный сайт</h1>
         <Register />
         <Login />
      </div>
   );
}
