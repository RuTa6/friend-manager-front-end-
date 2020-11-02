import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Signup from "./components/signup";
import Login from "./components/login";
import AddFriend from "./components/addFriend";
import ListFriend from "./components/listFriend";
import UpdateFriend from "./components/updateFriend";

import "bulma/css/bulma.css";
import "./App.css";

const App = () => {
  const [token, setToken] = useState(null);
  const [isActive, setisActive] =useState(false);
  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    setToken(loginToken);
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="header">
            <h1>Welcome To Friend Manager!!!...</h1>

            {token ? (
              <div>
                <h2>Hello {localStorage.getItem("userName")}</h2>
                <h3>You can manage your friends from here....</h3>
                <div>
                  <nav class="navbar is-info">
                    <div class="navbar-brand">
                   
                      <div
                        className="navbar-burger burger"
                        onClick={() => {
                          setisActive(!isActive);
                        }}
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarExampleTransparentExample"
                      
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>

                    <div
                      id="navbarExampleTransparentExample"
                      className={`navbar-menu ${isActive ? "is-active" : ""}`}
                     
                    >
                      <div class="navbar-start">
                        <a class="navbar-item" href="/addFriend">
                          Add a Friend
                        </a>
                        <a class="navbar-item" href="/listFriend">
                          Friends List
                        </a>
                      </div>

                      <div class="navbar-end">
                        <div class="navbar-item">
                          <div class="field is-grouped">
                            <p class="control">
                              <button
                                class="button is-primary"
                                onClick={() => {
                                  setToken(null);
                                  localStorage.clear();
                                }}
                              >
                                <span class="icon">
                                  <i class="fas fa-download"></i>
                                </span>
                                <span>SignOut</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            ) : (
              <div>
                <h3>Sign in / sign up to continue...</h3>
                <div className="buttons">
                  <Link to="/login">
                    <button className="button is-primary is-inverted button1">
                      SignIn
                    </button>
                  </Link>
                  <Link to="/createUser">
                    <button className="button is-primary is-inverted">
                      Signup
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Route
            path="/listFriend"
            component={() => <ListFriend token={token} />}
            exact
          ></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/createUser" component={Signup} exact></Route>
          <Route path="/addFriend" component={AddFriend} exact></Route>
          <Route path="/updateFriend" component={UpdateFriend} exact></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
