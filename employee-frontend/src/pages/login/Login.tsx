import { useEffect, useRef, useState } from "react"
import Buttons from "../../components/button/Button"
import LogoImage from "../../components/image/LogoImage"
import Input from "../../components/input/Input"
import './Login.css'
import LoginLeft from "./LoginLeft"
import LoginInput from "./LoginInput"
import {  useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../api-service/auth/login.api"

const Login = () => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [login, {isLoading}] = useLoginMutation()
    const [error, setError] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const usernameRef = useRef<HTMLInputElement>(null)
    const showPasswordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate() //when using in handlers, use useNavigate
    //const updatePostion = useMousePostion()

    useEffect(()=> {
        if (usernameRef.current)
            usernameRef.current.focus()
    },[])

    async function handleSubmit () {
        console.log("Username ", username)
        console.log("Password ", password)
        login({email : username, password : password})
        .unwrap()
        .then((response) => {
            localStorage.setItem("token", response.accessToken)
            const token = localStorage.getItem("token")
            console.log("Token : ", token)
            navigate('/employee')
        }).catch((error) => {
            setError(error.data.message)
        })        
    }

    useEffect(()=> {
        if (username.length >10){
                setError("Username must be less than 20 characters ")
                console.log("Greater than error occured")
            }
    }, [username])

    function updateShowPassword(){
        if (showPasswordRef.current?.checked){
            setShowPassword(true)
        }else(setShowPassword(false))

    }

    return(<div className="login-page">
        
        <LoginLeft/>
        
        <div className="login-div">
            <LogoImage />
            <div className="parent">
                <Input id="username" 
                    variant="login" 
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

                <Input 
                    id="password" 
                    variant="login" 
                    label="Password" 
                    placeholder="password" 
                    type={showPassword ? "text" : "password"} 
                    value={password} 
                    onChange={(e)=> setPassword(e.target.value) } 
                    endAdornment={
                        <button 
                            className="clear" 
                            type="reset" 
                            disabled={password.length===0} 
                            onClick={()=>{setPassword("")}}>
                            Clear
                        </button>
                        } 
                />
            </div>         
                 
            <p id="error">{error? error : ""}</p>

            <Input 
                id="showPassword" 
                label="Show Password" 
                type="checkbox" 
                placeholder="" 
                onChange={updateShowPassword} 
                ref={showPasswordRef} 
            />

            <Buttons 
                value='Login' 
                type="submit" 
                varient="primary"
                onChange={handleSubmit} 
                disabled={isLoading}
            />           
        </div>       
    </div>)

}

export default Login


