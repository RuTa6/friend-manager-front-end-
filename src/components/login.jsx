import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLogin = (e) => {
    const login = {
      email: email,
      password: password,
    };
    axios.post(`${config.baseUrl}/login-user`, login).then((res) => {
      console.log("User logged in succesfully");
      localStorage.setItem("loginToken", res.data.data.token);
    });
  };
  return (
    <div className="login">
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Login to continue</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
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
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              name="btnLogin"
              id="btnLogin"
              value="login"
              onClick={onSubmitLogin}
            >
              Login
            </button>
            <Link to="/create-user">
              <button className="button">SignUp</button>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
