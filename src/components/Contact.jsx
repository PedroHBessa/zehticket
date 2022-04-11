import React, { useState } from "react";

import verbs from "../server/axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

function Contact(props) {

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
    <Form title={"Contato"}>
      <><label>Nome
    <input name="name" type="text" onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }/>
  </label>
  <label>E-mail
    <input name="email" type="text" onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }/>
  </label>
  <label>Mensagem</label>
    <textarea name="text" type="text" onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          } />
  
  <button onClick={sendData} className="signup-form__button" >
    <strong>Enviar</strong>
  </button></>
    </Form>)
}

export default Contact;
