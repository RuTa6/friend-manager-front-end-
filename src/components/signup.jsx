import React, { useState } from "react";
import axios from "axios";
import config from "../config";
const Signup = () => {
  const [uName, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword,setCPassword]=useState("")

 

  const onSubmitSignUp = (ev) => {
    if (password===cPassword){
    const account = {
      userName: uName,
      email: email,
      password: cPassword,
    };
    axios
      .post(`${config.baseUrl}/create-user`, account)
      .then(alert("data sent"));
} else{
    alert("passwords did not match!!!...")
}
  };
  return (
    <div className="signup">
      <h3>Sign Up Free...</h3>
        <input
          type="text"
          name="txtUName"
          id="txtUName"
          placeholder="User Name"
          value={uName}
          onChange={(e) => setUName(e.target.value)}
        ></input>
        <br></br>
        <input
          type="email"
          name="txtEmail"
          id="txtEmail"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <input
          type="password"
          name="txtPassword"
          id="txtPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
         <input 
        type="password" 
        name="cpwd" 
        id="cpwd"
        placeholder="Confirm your Password"
        value={cPassword}
        onChange={
            (e)=> {
                    setCPassword(e.target.value)
        }}
        ></input> 
        <br></br>
        <input
          type="submit"
          name="btnSignup"
          id="btnSignup"
          value="SignUp"
          onClick={onSubmitSignUp}
        ></input>
     
    </div>
  );
};

export default Signup;
