import Register from "../../features/Registration";
import Login from "../../features/Logination";
import User from "../../features/User";
import Header from "../../widgets/Header";
export default function AccountContent() {
   return (
      <div>
         <Header />
         <div className="p">
            <User />
            <Register />
            <Login />
         </div>
      </div>
   );
}
