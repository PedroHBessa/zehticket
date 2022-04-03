import React, { useState } from "react";
import "../styles/login.scss";
import axios from "axios"
import { useNavigate } from "react-router-dom"






function Login(props) {


  const location = useNavigate()

  const [user, setUser] = useState(null);


  const [data, setData] = useState({
    email: 'sharanga@xxx.com', 
    password: '123456'
  })

  const [token, setToken] = useState(null)

  const [loginError, setLoginError] = useState("");




 


const req = ()=> {

  axios.get('https://api.zehticket.com.br/sanctum/csrf-cookie').then(response => {
    axios.post("https://api.zehticket.com.br/api/login", data)
  .then(response => {
    localStorage.setItem('token',response.data.token)
    location("/", {replace: true})

  });
});
  

}

  const closeWindow = () => {
    console.log((document.querySelector(".login-form").style.opacity = "0"));
  
  };

  setTimeout(() => {
    document.querySelector(".login-form").style.transform = "scale(1)";
  }, 50);



 
    
  return (
    <div>
      <section>
        <div className="login-form">
          <div className="close-btn" onClick={closeWindow}>
           icon
          </div>
          <h1>Welcome</h1>

          <label>
            <input name="email" type="text" placeholder="email"  /* onChange={setEmail(this)} *//>
          </label>

          <label>
            <input name="password" type="password" placeholder="password" /* onChange={setPassword(this)} *//>
          </label>
          <div className="login-form__error">{loginError}</div>

          <button onClick={()=>{req()}} className="login-form__button">
            <strong>Login</strong>
          </button>

          <p>{token}</p>
        </div>
      </section>
      
    </div>
  );
}

export default Login;
