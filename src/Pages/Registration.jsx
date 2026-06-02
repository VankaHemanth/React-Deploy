import React from 'react';
import "./Registration.css";

function Registration() {
  return (
    <div className="login-page">
      <form className="login-form">
        <h3>Please Register</h3>
        
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">
            Name
          </label>
        </div>
        
        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">
            Phone Number
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">
            Email address
          </label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="password"
          />
          <label htmlFor="floatingPassword">
            Password
          </label>
        </div>

        <button className="login-btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;