import LogoImage from '../../components/image/LogoImage'
import './Sidebar.css'

const Sidebar = () => {
    return (<>
        <div className="left-bar">
        <header className="logo">
            <a href="https://www.keyvalue.systems/" target="_blank"> 
                <LogoImage />
            </a>
        </header>
        
        <nav className="employee-list">
            <ul className="nav-item">
                <img alt="icon" src="../../assets/icon.svg" /> 
                <b>Employee List </b>      
            </ul>          
        </nav>
    </div>
    </>)
}

export default Sidebar