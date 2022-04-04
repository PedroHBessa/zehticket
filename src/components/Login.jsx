import React, { useState } from "react";
import "../styles/login.scss";
import verbs from "../server/axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

function Login(props) {
  const location = useNavigate();

  const [data, setData] = useState({});

  const [loginError, setLoginError] = useState("");



  const sendData = () => {
    console.log(data);
    console.log("loading...");
    verbs
      .post("login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        location("/", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form title="Login">
      <>
    <label>
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
        />
      </label>

      <label>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
        />
      </label>
      <div className="login-form__error">{loginError}</div>

      <button onClick={sendData} className="login-form__button">
        <strong>Login</strong>
      </button>
      </>
    </Form>
  );
}

export default Login;
