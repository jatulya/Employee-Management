import "./uncontrolled.css";
import LoginInput from "./LoginInput";
import { useRef, useEffect } from "react";
import Button from "../../components/button/Button";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const clearButtonRef = useRef<HTMLButtonElement | null>(null)

  const clearUsername = () => {
    if (usernameRef?.current){
        if (clearButtonRef.current) {
            console.log("in c")
            clearButtonRef.current.disabled = true
        }
     usernameRef.current.value = ""}
  }

  const updateClearButton = () => {
    if(!clearButtonRef.current) return;
    if (usernameRef.current){
        if (usernameRef.current.value.length >0){
            clearButtonRef.current.disabled = false 
            clearButtonRef.current.onclick = clearUsername  } 
    else{
            clearButtonRef.current.disabled = true
        }
    }
  }
  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  const handleNativeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formdata = new FormData(form);
    const username = formdata.get("username") as string;
    console.log("Username: ", username);
    const password = formdata.get("password") as string;
    console.log("Password: ", password);
  };

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src="../../assets/kv-login.jpeg" alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src="../../assets/kv-logo.png" alt="KV Logo" />
          <form onSubmit={handleNativeSubmit}>
            {/* <LoginInput
              id="login-username-input"
              onChange={updateClearButton}
              label="Username"
              ref={usernameRef}
              endAdornment={<button className="clear" type="reset" disabled={true} ref={clearButtonRef}>Clear</button>}
            /> */}

            {/* <LoginInput id="login-password-input" name="password" label="Password" />

           <Button type="submit" className="login-button" > Log in </Button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;