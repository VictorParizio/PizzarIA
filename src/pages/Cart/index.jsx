import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Control } from "../../components/Control";
import { Button } from "../../components/Button";
import { CartContext } from "../../context/cartContext";
import { useCartContext } from "../../hooks/useCartContext";
import { formatCurrency } from "../../utils/formatCurrency";

import "./styles.css";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const { removeProductCart, totalCart } = useCartContext();
  // console.log("Cart:", JSON.stringify(cart, null, 2));

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
              checked={true}
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
