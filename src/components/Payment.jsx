import { Outlet } from "react-router-dom";
import Form from "./Form";

const Payment = () => {
  return (
    <Form title="Pagamento">
      <div className="payment">
        <div className="payment__info">
          <h3>Informações de contato</h3>
          <form action="">
            <label>
              <input name="name" type="text" placeholder="Nome" />
            </label>
            <label>
              <input name="email" type="text" placeholder="E-mail" />
            </label>
            <label>
              <input
                name="confirm-email"
                type="text"
                placeholder="Confirmar E-mail"
              />
            </label>
          </form>
        </div>
        <div className="payment__checkout">
          <h3>Ingressos</h3>
          <div>Informações do ingresso</div>
          <div>evento x</div>
          <div>2 ingressos</div>
          <div>total a pagar: R$45,00</div>
          <div>---------------------------------</div>
        </div>
      </div>

      <div className="payment__data">
        <h3>Selecione a forma de pagamento</h3>
        <div className="payment__data__select">
          <label>
            Cartão de crédito
            <input
              name="holder-name"
              type="radio"
              placeholder=""
              style={{ textTransform: "uppercase" }}
            />
          </label>
          <label>
            Cartão de débito
            <input
              name="holder-name"
              type="radio"
              placeholder=""
              style={{ textTransform: "uppercase" }}
            />
          </label>

          <label>
            Boleto
            <input
              name="holder-name"
              type="radio"
              placeholder=""
              style={{ textTransform: "uppercase" }}
            />
          </label>
          <label>
            Pix
            <input
              name="holder-name"
              type="radio"
              placeholder=""
              style={{ textTransform: "uppercase" }}
            />
          </label>
        </div>
      </div>

      <div className="payment">
        <div className="login-form__error"></div>
      </div>

      <Outlet />

      <label>
        <input name="card-name" type="text" placeholder="NOME NO CARTÃO" />
      </label>
      <label>
        <input name="card-number" type="text" placeholder="NÚMERO DO CARTÃO" />
      </label>
      <label>
        <input name="expiring-date" type="text" placeholder="VAL. MM/AA" />
      </label>
      <label>
        <input name="cvv" type="text" placeholder="CVV" />
      </label>

      <button className="login-form__button">
        <strong>Finalizar Compra</strong>
      </button>
    </Form>
  );
};

export default Payment;
