import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <label>Username/Email</label>
        <input type="text" placeholder="username" required />
        <label>Password</label>
        <input type="password" placeholder="password" required />
        <div className="login__button">
          <Button variant="contained" color="primary">
            Login
          </Button>
          <Button variant="contained" color="secondary">
            Forgot Password
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
