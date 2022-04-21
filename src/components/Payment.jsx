import { Outlet } from "react-router-dom";
import Form from "./Form";

const Payment = () => {
    return (
       
           <Form title="Pagamento">


      <div className="payment">
      <label>
        Cartão de débito
      
        <input
          name="holder-name"
          type="radio"
          placeholder=""
          style={{textTransform: "uppercase"}}

          
        />
      </label>
      <label>
        Cartão de crédito
      
        <input
          name="holder-name"
          type="radio"
          placeholder=""
          style={{textTransform: "uppercase"}}

          
        />
      </label>
      <label>
        Boleto
      
        <input
          name="holder-name"
          type="radio"
          placeholder=""
          style={{textTransform: "uppercase"}}

          
        />
      </label>
      <label>
        Pix
      
        <input
          name="holder-name"
          type="radio"
          placeholder=""
          style={{textTransform: "uppercase"}}

          
        />
      </label>
      <div className="login-form__error"></div>
      </div>
      <Outlet />
      <button  className="login-form__button">
        <strong>Enviar</strong>
      </button>
     
    </Form> 
       
    )
}

export default Payment; 