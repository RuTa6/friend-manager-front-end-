import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link} from "react-router-dom";

import Signup from "./components/signup";
import Login from "./components/login";
import AddFriend from "./components/addFriend";
import ListFriend from "./components/listFriend";
import UpdateFriend from "./components/updateFriend";

import 'bulma/css/bulma.css'
import "./App.css";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    setToken(loginToken)
  }, [])

  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="header">
            <h1>Welcome To Friend Manager!!!...</h1>

            {
              token ? (
                <div>
                  <h2>Hello {localStorage.getItem("userName")}</h2>
                  <h3>You can manage your friends from here....</h3>
                  
                  <div className="buttons">
                    {/* <div>User logged in</div> */}
                    <button
                      className="button is-primary is-inverted button1"
                      onClick={() => {
                        setToken(null);
                        localStorage.clear()
                      }}
                    >SignOut</button>
                  </div>
                </div>
              ) : (
                  <div>
                    <h3>Sign in / sign up to continue...</h3>
                    <div className="buttons">
                      <Link to="/login">
                        <button className="button is-primary is-inverted button1">SignIn</button>
                      </Link>
                      <Link to="/createUser">
                        <button className="button is-primary is-inverted">Signup</button>
                      </Link>
                    </div>
                  </div>
                )
            }
          </div>

          <Route path="/listFriend" component={() => <ListFriend token={token} />} exact></Route>
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
