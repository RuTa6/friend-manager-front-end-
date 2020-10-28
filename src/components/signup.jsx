import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    <div className="signup ">
     <div className="modal is-active">
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Create an account for free.. </p>
      <button className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
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
    </section>
    <footer className="modal-card-foot">
      <button className="button is-success" 
      name="btnSignup"
      id="btnSignup"
      value="SignUp"
      onClick={onSubmitSignUp}>Create</button>
      <Link to="/login">
        <button className="button">Login</button>
      </Link>
      
    </footer>
  </div>
</div>
    </div>
  );
};

export default Signup;
