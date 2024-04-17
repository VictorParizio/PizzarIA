import { Button } from "../Button";
import { Control } from "../Control";
import "./styles.css";
const pizza = "/src/assets/images/OIG3 (1).gif";

export const Cart = () => {
  return (
    <main>
      <h2>Meu pedido</h2>
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
            <Control variant={'small'}/>
            <p>subtotal</p>
            <Button variant={'small'}>x</Button>
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
                checked
              />
              <label for="dinheiro">Dinheiro</label>
              <br />
              <input
                type="radio"
                name="method-payment"
                id="cartao"
                value="cartao"
              />
              <label for="cartao">Cartão</label>
            </div>
            <button>
              <a href="./success.html">Finalizar Compra</a>
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};
