import React from "react";
import "./Signup.css";
import { Button } from "@material-ui/core";

function Signup() {
  return (
    <div className="signup">
      <form className="signup__form">
        <label>First Name</label>
        <input type="text" placeholder="first name" required />
        <label>second Name</label>
        <input type="text" placeholder="second name" required />
        <label>Email</label>
        <input type="email" placeholder="username" required />
        <label>Password</label>
        <input type="password" placeholder="password" required />
        <label>Confirm Password</label>
        <input type="password" placeholder="password" required />
        <div className="signup__button">
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
