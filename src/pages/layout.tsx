import { Outlet } from "react-router-dom"
import Navbar from "../layout/navbar"
import Footer from "../layout/footer"
import FixedComponent from "../components/fixedComponent"

const Layout = ()=>{
  return (<div>
        <FixedComponent/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
)
}
export default Layout