import React from "react";
import "./LogingPopup.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const LogingPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Loging"); // or "Sign Up"

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            alt="close"
            className="close-icon"
            onClick={() => setShowLogin(false)}
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Loging" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Log In"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
        {currState === "Loging" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrState("Loging")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LogingPopup;
