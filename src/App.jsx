import { useState } from "react";
import "./App.css";

import email_icon from "./assets/Form/email.png";
import password_icon from "./assets/Form/password.png";
import user_icon from "./assets/Form/person.png";

function App() {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div> </div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="user-icon" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="user-icon" />
          <input type="email" placeholder="Email" autoComplete="off" />
        </div>
        <div className="input">
          <img src={password_icon} alt="user-icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forget_password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit_container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default App;
