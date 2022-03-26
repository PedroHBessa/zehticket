import React, { useState } from "react";
import "../styles/signup.scss";

//import { AiFillCloseSquare } from "react-icons/ai";


import { useNavigate } from "react-router-dom";

function Signup(props) {

  const [user, setUser] = useState(null);

  const [loginError, setLoginError] = useState("");

  const closeWindow = () => {
    console.log((document.querySelector(".login-form").style.opacity = "0"));
  
  };

  setTimeout(() => {
    document.querySelector(".signup-form").style.transform = "scale(1)";
  }, 50);

 

  

  const form = (
    <form className="signup-form" >
      <div className="close-btn" >
       
      </div>
      <h1>Cadastre-se</h1>
      <label>
        <input name="name" type="text" placeholder="nome" />
      </label>
      <label>
        <input name="email" type="text" placeholder="email" />
      </label>
      <label>
        <input name="password" type="password" placeholder="senha" />
      </label>
      <button className="signup-form__button" >
        <strong>Cadastrar</strong>
      </button>
    </form>
  );

  const feedback = (
    <div className="signup-feedback">
      <div className="close-btn" >
      
      </div>
      <p>Enviamos um link de confirmação para o seu email. =)</p>
    </div>
  );

  return <section>{form}</section>;
}

export default Signup;
