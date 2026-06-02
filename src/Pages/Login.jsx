import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <form className="login-form">
        <h3>please Login </h3>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
       <button className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;