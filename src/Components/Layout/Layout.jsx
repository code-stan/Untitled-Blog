import Footer from "./Footer/Footer";
// import Header from "../../pages/Home/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = ()=>{
     return(
          <section className="layout">
               {/* <Header/> */}
               <Outlet/>
               <Footer/>
          </section>
     )
}
export default Layout;
