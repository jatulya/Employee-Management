import { useNavigate } from 'react-router-dom'
import LogoImage from '../../components/image/LogoImage'
import './Sidebar.css'

const Sidebar = () => {
    const navigate = useNavigate()

    function handleClick () {

        localStorage.removeItem("token")
        navigate('/')
    }
    return (<>
        <div className="left-bar">
        <header className="logo">
            <a href="https://www.keyvalue.systems/" target="_blank"> 
                <LogoImage />
            </a>
        </header>
        
        <nav >
            <ul>
                <li className="side-list nav-item" onClick={()=>navigate('/employee')}>
                    <img alt="icon" src="../../assets/icon.svg" /> 
                    <b>Employee List </b>
                </li>   
                <li className="side-list nav-item" onClick={handleClick}>
                    <img alt="icon" src="../../assets/icon.svg" />  
                    <b>Log out </b>           
                </li>   
            </ul>        
        </nav>        
    </div>
    </>)
}

export default Sidebar