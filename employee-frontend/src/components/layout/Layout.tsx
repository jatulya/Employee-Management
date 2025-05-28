import { Navigate, Outlet } from "react-router-dom"
import Sidebar from "../../pages/sidebar/Sidebar"

const Layout = () => {
    
   //initially, isLoggedIn was in app.tsx. we render path Employee only when isLoggedIn is true. but the  problem is, router is created when the app is mounted, which is the initial stage. So after correct log in, app is unaware of the change in the local storage. Therefore, we check the local storage here and renders login page directly from here in case user is not logged in
     const isLoggedIn = () => {
        const token = localStorage.getItem("isLoggedIn");
        console.log("token ", token)
        return token === "true" 
     }

     if (!isLoggedIn()){
      //when directly rendering, it is better to use navigate component
        return <Navigate to="/"/>
     }

    return (<>
        <Sidebar />
        <div className="main-div"><Outlet /></div>
        
    </>)
}

export default Layout