import React, { useState } from "react";
import "./LoginScreen.css";
import HomeScreen from "./HomeScreen";
import SignUpScreen from "./SignUpScreen.js";
function LoginScreen() {
  const [SignIn, setSignIn] = useState(false);
  return (
    <div className="LoginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {SignIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited Movies,TV Programmes and more.</h1>
            <h2>Watch anywhere and cancel anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen_Input">
              <form>
                <input type="email" placeholder="Enter your email" />
                <button className="getStarted" onClick={() => setSignIn(true)}>
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
