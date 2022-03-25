import React, { useState } from "react";
import "../styles/login.scss";




function Login(props) {
  const [user, setUser] = useState(null);

  const [loginError, setLoginError] = useState("");

  const closeWindow = () => {
    console.log((document.querySelector(".login-form").style.opacity = "0"));
  
  };

  setTimeout(() => {
    document.querySelector(".login-form").style.transform = "scale(1)";
  }, 50);

 
    
  return (
    <div>
      <section>
        <form className="login-form">
          <div className="close-btn" onClick={closeWindow}>
           icon
          </div>
          <h1>Welcome</h1>

          <label>
            <input name="email" type="text" placeholder="email" />
          </label>

          <label>
            <input name="password" type="password" placeholder="password" />
          </label>
          <div className="login-form__error">{loginError}</div>

          <button className="login-form__button">
            <strong>Login</strong>
          </button>
        </form>
      </section>
      
    </div>
  );
}

export default Login;
