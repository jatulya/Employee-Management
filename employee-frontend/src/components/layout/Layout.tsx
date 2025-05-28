import { Navigate, Outlet, useNavigate } from "react-router-dom"
import Sidebar from "../../pages/sidebar/Sidebar"

const Layout = () => {
    
     const navigate = useNavigate()

     const isLoggedIn = () => {
        const token = localStorage.getItem("isLoggedIn");
        console.log("token ", token)
        return token === "true" 
     }

     if (!isLoggedIn()){
        navigate('/')
     }

    return (<>
        <Sidebar />
        <div className="main-div"><Outlet /></div>
        
    </>)
}

export default Layout