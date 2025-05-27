import Sidebar from "../../pages/sidebar/Sidebar"

const Layout = (props : {children : React.ReactNode}) => {
    return (<>
        <Sidebar />
        {props.children}
    </>)
}

export default Layout