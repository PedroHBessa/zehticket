import Form from "./Form";

const Payment = () => {
    return (
       
           <Form title="Pagamento">
      <>
      <label>
        NOME DO TITULAR
      
        <input
          name="holder-name"
          type="text"
          placeholder=""
          style={{textTransform: "uppercase"}}

          
        />
      </label>
    <label>
        NÚMERO DO CARTÃO
        <input
          name="card-number"
          type="text"
          placeholder=""
        
        />
      </label>

      <label>
        <input
          name="credit-validity"
          type="text"
          placeholder=""
         
           
        />
      </label>
      <div className="login-form__error"></div>

      <button  className="login-form__button">
        <strong>Enviar</strong>
      </button>
      </>
    </Form> 
       
    )
}

export default Payment; 