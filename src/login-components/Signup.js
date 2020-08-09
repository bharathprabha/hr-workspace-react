import React from "react";
import "./Signup.css";
import { Button } from "@material-ui/core";

function Login() {
  return (
    <div className="signup">
      <form className="signup__form">
        <label>Full Name</label>
        <input type="text" placeholder="username" required />
        <label>Email</label>
        <input type="email" placeholder="username" required />
        <label>Password</label>
        <input type="password" placeholder="password" required />
        <label>Confirm Password</label>
        <input type="password" placeholder="password" required />
        <div className="signup__button">
          <Button variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
