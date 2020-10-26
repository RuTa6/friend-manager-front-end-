import React, {useState} from "react";
import axios from "axios";
import config from "../config";
const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
const onSubmitLogin=(e)=>{
    const login={
        email:email,
        password:password
    }
     axios
      .post(`${config.baseUrl}/login-user`, login)
      .then(alert("data sent"));
}  
return(
    <div className="login">
    <h3>Login to continue</h3>
   
      <input
        type="email"
        name="txtEmail"
        id="txtEmail"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      ></input>
      <br></br>
      <input
        type="password"
        name="txtPassword"
        id="txtPassword"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      ></input>
      <br></br>
      <input
        type="submit"
        name="btnLogin"
        id="btnLogin"
        value="login"
        onClick={onSubmitLogin}
      ></input>
    
  </div>
)
}

export default Login;