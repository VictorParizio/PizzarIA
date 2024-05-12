import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "../../context/cartContext";
import { useMessage } from "../../context/modalContext";
import { useCartContext } from "../../hooks/useCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { Control } from "../../components/Control";
import { Button } from "../../components/Button";

import "./styles.css";

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { removeProductCart, totalCart } = useCartContext();
  const { showMessage } = useMessage();

  const handleSubmit = () => {
    showMessage(
      "Pedido Finalizado com Sucesso",
      "Parabéns! Sua pizza está a caminho. Nossa IA preparou cuidadosamente sua pedido. Agradecemos por escolher a PizzarIA"
    );

    setCart([]);
  };

  return (
    <section className="container-shopping">
      <section className="my-shopping-cart">
        <div className="th-product-card">
          <p>Produto</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Subtotal</p>
        </div>
        <ul>
          {cart.map((item) => (
            <li className="product-card" key={item.product_id}>
              <div className="product">
                <img src={item.product_image_url} alt={item.product_name} />
                <p>{item.product_name}</p>
              </div>
              <p>{formatCurrency(item.product_price)}</p>
              <Control variant={"small"} cartItem={item} />
              <p>{formatCurrency(item.product_price * item.quantity)}</p>
              <FaTrashAlt onClick={() => removeProductCart(item.product_id)} />
            </li>
          ))}
        </ul>
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
            <p>{totalCart(cart)}</p>
            <p>grátis</p>
            <strong>{totalCart(cart)}</strong>
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

          <Button
            variant={"medium"}
            onClick={handleSubmit}
            disabled={cart.length === 0}
          >
            Finalizar Compra
          </Button>
        </div>
      </section>
    </section>
  );
};
