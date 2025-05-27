import { useEffect, useRef, useState } from "react"
import Buttons from "../../components/button/Button"
import LogoImage from "../../components/image/LogoImage"
import Input from "../../components/input/Input"
import './Login.css'
import LoginLeft from "./LoginLeft"
import useMousePostion from "../../hooks/useMousePosition"
import LoginInput from "./LoginInput"

const Login = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [usernameError, setUsernameError] = useState<string>("")

    const usernameRef = useRef<HTMLInputElement>(null)

    const endAdornment : React.ReactNode = ``
    //const updatePostion = useMousePostion()

    useEffect(()=> {
        if (usernameRef.current)
            usernameRef.current.focus()
    },[])

    function handleClick (event : React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    useEffect(()=> {
        if (username.length >10){
                setUsernameError("Value Of the username must be greater than 10 ")
                console.log("Greater than error occured")
            }
    }, [username])

    return(<div className="login-page">
        
        <LoginLeft/>

        
        <div clasnpsName="login-div">
            <LogoImage />
            <div className="parent"><LoginInput id="username" classname="login-input" label="Username" placeholder="Username" type="text" value={username} onChange={(e)=> handleClick(e)} ref={usernameRef} endAdornment={<button className="clear" type="reset" disabled={username.length===0} onClick={()=>{setUsername("")}}>Clear</button>} /></div>
            

            <p id="error">{usernameError? usernameError : ""}</p>
            <Input id="password" classname="login-input" label="Password" placeholder="Password" type="password" value={username} onChange={(e)=> handleClick(e)}/>
            <Buttons value='Login' type="submit" onChange={()=> {}}/>
        </div>
        
    </div>)

}

export default Login

// <Input id="username" classname="login-input" label="Username" placeholder="Username" type="text" value={username} onChange={(e)=> handleClick(e)} ref={usernameRef} />
            