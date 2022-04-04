import React, { useState } from "react";
import "../styles/signup.scss";
import verbs from "../server/axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

function Signup(props) {

  const location = useNavigate();

  const [data, setData] = useState({});


 
  const sendData = () => {
    console.log(data);
    console.log("loading...");
    verbs
      .post("register", data)
      .then((response) => {
        
        location("/", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form title={"Cadastre-se"}>
      <><label>
    <input name="name" type="text" placeholder="nome" onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }/>
  </label>
  <label>
    <input name="email" type="text" placeholder="email" onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }/>
  </label>
  <label>
    <input name="password" type="password" placeholder="senha" onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          } />
  </label>
  <button onClick={sendData} className="signup-form__button" >
    <strong>Cadastrar</strong>
  </button></>
    </Form>)
}

export default Signup;
