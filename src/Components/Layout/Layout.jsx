import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";

const Layout = ()=>{
     return(
          <section className="layout">
               <Nav/>
               <Outlet/>
               <Footer/>
          </section>
     )
}
export default Layout;
