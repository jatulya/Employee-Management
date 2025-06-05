


import './Login.css'
import LoginLeft from "./LoginLeft"
import LoginRight from "./LoginRight"


const LoginForm = () => {
    console.log("Login Form rendered")
    return (<div className="login-page">

        <LoginLeft />
        <LoginRight />  
    </div>)

}

export default LoginForm

