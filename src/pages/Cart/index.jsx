import { Button } from "../../components/Button";
import { Control } from "../../components/Control";
const pizza = "./src/assets/images/OIG3 (1).gif";
import "./styles.css";

export const Cart = () => {
  return (
    <section className="container-shopping">
      <section className="my-shopping-cart">
        <div className="th-product-card">
          <p>Produto</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Subtotal</p>
        </div>
        <div className="product-card">
          <div className="product">
            <img src={pizza} alt="" />
            <p>Pizza de Margherita</p>
          </div>
          <p>preço</p>
          <Control variant={"small"} />
          <p>subtotal</p>
          <Button variant={"small"}>x</Button>
        </div>
      </section>

      <section className="cart-total">
        <h3>Total do Carrinho</h3>

        <div className="cost-contain">
          <div>
            <p>Subtotal</p>
            <p>Envio</p>
            <p>Total</p>
          </div>

          <div className="cost">
            <p>70,00</p>
            <p>grátis</p>
            <strong>70,00</strong>
          </div>
        </div>

        <div className="payment">
          <h3>Forma de Pagamento</h3>
          <div>
            <input
              type="radio"
              name="method-payment"
              id="dinheiro"
              value="dinheiro"
            />
            <label htmlFor="dinheiro">Dinheiro</label>
            <br />
            <input
              type="radio"
              name="method-payment"
              id="cartao"
              value="cartao"
            />
            <label htmlFor="cartao">Cartão</label>
          </div>
          <Button variant={"medium"}>Finalizar Compra</Button>
        </div>
      </section>
    </section>
  );
};
