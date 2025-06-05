'use client'

import { useEffect, useRef, useState } from "react"
import Buttons from "../../components/button/Button"
import './Login.css'

import Input from "@/components/input/Input"
import { login } from "@/actions/loginActions"
import { useRouter } from "next/navigation"


const LoginRight = () => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    // const [login, {isLoading}] = useLoginMutation()
    const [error, setError] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const usernameRef = useRef<HTMLInputElement>(null)
    const showPasswordRef = useRef<HTMLInputElement>(null)
    //const updatePostion = useMousePostion()

    const router = useRouter()

    useEffect(() => {
        if (usernameRef.current)
            usernameRef.current.focus()
    }, [])

    async function handleSubmit(e : any) {
        console.log("Username ", username)
        console.log("Password ", password)
        e.preventDefault()
        window.document.title = 'Logging in.'
        const response = await login(username, password)
        console.log("Login Response : ", response)  
        
        if (response.ok){
            router.push('/employee')
        }else{
            setError(response.error || "Login failed. Try again")
        }
    }

    useEffect(() => {
        if (username.length > 10) {
            setError("Username must be less than 20 characters ")
            console.log("Greater than error occured")
        }
    }, [username])

    function updateShowPassword() {
        if (showPasswordRef.current?.checked) {
            setShowPassword(true)
        } else (setShowPassword(false))

    }

    return (

        <div className="login-div">
            <img className="image" alt="kv-logo" src="../../assets/kv-logo.png" width="250px" />
            <div className="parent">
                <Input id="username"
                    classname="login"
                    label="Username"
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e: any) => setUsername(e.target.value)}
                    ref={usernameRef}
                    endAdornment={
                        <Buttons        
                        value='Clear'
                        type="reset"
                        disabled={username.length === 0}
                        onChange={() => { setPassword("") }} 
                        varient="ternary"
                        />}
                />
            </div>

            <Input
                id="password"
                classname="login"
                label="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                endAdornment={
                    <Buttons 
                        value='Clear'
                        type="reset"
                        disabled={password.length === 0}
                        onChange={() => { setPassword("") }} 
                        varient="ternary"
                        />
                    }
            />
            <p id="error">{error ? error : ""}</p>

            <Input
                id="showPassword" 
                label="Show Password" 
                type="checkbox" 
                placeholder="" 
                onChange={updateShowPassword} 
                ref={showPasswordRef} />

            <Buttons value='Login' type="submit" onChange={handleSubmit} disabled={false} />


        </div>
        )

}

export default LoginRight

