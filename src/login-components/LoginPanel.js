import React from "react";
import "./LoginPanel.css";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function LoginPanel() {
  return (
    <div className="loginpanel">
      <Router>
        <div className="loginpanel__header">
          <Link to="/login">
            <div className="loginpanel__login">LogIn</div>
          </Link>
          <Link to="/signup">
            <div className="loginpanel__signup">Sign Up</div>
          </Link>
        </div>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default LoginPanel;
