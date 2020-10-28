import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link,Redirect } from "react-router-dom";

import Signup from "./components/signup";
import Login from "./components/login";
import AddFriend from "./components/addFriend";
import ListFriend from "./components/listFriend";
import UpdateFriend from "./components/updateFriend";

import 'bulma/css/bulma.css'
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="header">
            <h1>Welcome To Friend Manager!!!...</h1>
            <h3>You can manage your friends from here....</h3>
            <h3>Sign in / sign up to continue...</h3>
            {/* <div className="buttons">
              <Link to="/login">
                <button class="button is-primary is-inverted button1">SignIn</button>
              </Link>
              <Link to="/create-user">
                <button class="button is-primary is-inverted">Signup</button>
              </Link>
            </div> */}
          </div>
          <Route path="/login" component={Login}></Route>
          <Route path="/create-user" component={Signup}></Route>
          <Route path="/addFriend" component={AddFriend}></Route>
          <Route path="/list-friend" component={ListFriend}></Route>
          <Route path="/updateFriend" component={UpdateFriend}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
