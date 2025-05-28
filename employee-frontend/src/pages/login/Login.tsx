import { useEffect, useRef, useState } from "react"
import Buttons from "../../components/button/Button"
import LogoImage from "../../components/image/LogoImage"
import Input from "../../components/input/Input"
import './Login.css'
import LoginLeft from "./LoginLeft"
import useMousePostion from "../../hooks/useMousePosition"
import LoginInput from "./LoginInput"
import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [usernameError, setUsernameError] = useState<string>("")

    const usernameRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    //const updatePostion = useMousePostion()

    useEffect(()=> {
        if (usernameRef.current)
            usernameRef.current.focus()
    },[])

    function handleSubmit (event : React.ChangeEvent<HTMLInputElement>) {
        console.log("Username ", username)
        console.log("Password ", password)
        if (username !== "hello") { 
            setUsernameError("Wrong username")
            setUsername("")
            setPassword("")
            return
        }
        if (password !== "hellohowareyou") { 
            setUsernameError("Wrong password")
            setPassword("")
            setPassword("")
            return
        }
        console.log("Reached here")
        localStorage.setItem("isLoggedIn", "true")
        navigate('/employee')
    }

    useEffect(()=> {
        if (username.length >10){
                setUsernameError("Value Of the username must be greater than 10 ")
                console.log("Greater than error occured")
            }
    }, [username])

    function showPassword (){

    }

    return(<div className="login-page">
        
        <LoginLeft/>
        
        <div className="login-div">
            <LogoImage />
            <div className="parent">
                {/* <Input id="username" 
                    classname="login" 
                    label="Username" 
                    placeholder="Username" 
                    type="text" 
                    value={username} 
                    onChange={(e)=> setUsername(e.target.value) } 
                    ref={usernameRef} 
                    endAdornment={
                        <button 
                            className="clear" 
                            type="reset" 
                            disabled={username.length===0} 
                            onClick={()=>{setUsername("")}}>
                            Clear
                        </button>} 
                    /> */}
                <LoginInput 
                    id="username" 
                    classname="login-input" 
                    label="Username" 
                    placeholder="Username" 
                    type="text" 
                    value={username} 
                    onChange={(e)=> setUsername(e.target.value) } 
                    ref={usernameRef} 
                    endAdornment={
                        <button 
                            className="clear" 
                            type="reset" 
                            disabled={username.length===0} 
                            onClick={()=>{setUsername("")}}>
                            Clear
                        </button>} 
                    />
            </div>       
            <p id="error">{usernameError? usernameError : ""}</p>

            <LoginInput 
                    id="password" 
                    classname="login-input" 
                    label="password" 
                    placeholder="Password" 
                    type="password" 
                    value={password} 
                    onChange={(e:any)=> setPassword(e.target.value) } 
                    endAdornment={
                        <button 
                            className="clear" 
                            type="reset" 
                            disabled={password.length===0} 
                            onClick={()=>{setPassword("")}}>
                            Clear
                        </button>} 
                    />         
            <Buttons value='Login' type="submit" onChange={handleSubmit}/>
            <Input id="showPassword" label="Show Password" type="checkbox" placeholder="" onChange={showPassword} />
        </div>
        
    </div>)

}

export default Login

// <Input id="username" classname="login-input" label="Username" placeholder="Username" type="text" value={username} onChange={(e)=> handleClick(e)} ref={usernameRef} />
            //    <Input id="password" classname="login-input" label="Password" placeholder="Password" type="password" value={username} onChange={(e)=> handleClick(e)}/>