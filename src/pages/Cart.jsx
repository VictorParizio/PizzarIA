import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

import { MessageContext } from "../context/modalContext";
import { formatCurrency } from "../utils/formatCurrency";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { selectTotalPrice } from "../redux/cart/cart.selectors";

import { Control } from "../components/Control";
import { Button } from "../components/Button";

export const Cart = () => {
  const { showMessage } = useContext(MessageContext);
  const { cart } = useSelector((rootReducer) => rootReducer.cartReducer);
  const [removingItemId, setRemovingItemId] = useState(null);

  const totalPrice = useSelector(selectTotalPrice);
  const isMobile = useMediaQuery(568);
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    setRemovingItemId(id);
    setTimeout(() => {
      dispatch({ type: "cart/removeProductCart", payload: id });
      setRemovingItemId(null);
    }, 600);
  };

  const handleSubmit = () => {
    showMessage(
      "Pedido Finalizado com Sucesso",
      "Parabéns! Sua pizza está a caminho. Nossa IA preparou cuidadosamente sua pedido. Agradecemos por escolher a PizzarIA"
    );

    dispatch({ type: "cart/submitOrder" });
  };

  return (
    <section className="container-shopping">
      {!isMobile && (
        <section
          className={`my-shopping-cart ${cart.length > 0 ? "fit-content" : ""}`}
        >
          <div className={`th-product-card`}>
            <p>Produto</p>
            <p>Preço</p>
            <p>Quantidade</p>
            <p>Subtotal</p>
          </div>

          <ul>
            {cart.map((item) => (
              <li
                className={`product-card ${
                  removingItemId === item.product_id ? "remove-item" : ""
                }`}
                key={item.product_id}
              >
                <div className="product">
                  <img src={item.product_image_url} alt={item.product_name} />
                  <p>{item.product_name}</p>
                </div>
                <p>{formatCurrency(item.product_price)}</p>
                <Control
                  variant={"small"}
                  cartItem={item}
                  remove={handleRemoveProduct}
                />
                <p>{formatCurrency(item.product_price * item.quantity)}</p>
                <FaTrashAlt
                  onClick={() => handleRemoveProduct(item.product_id)}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {isMobile && (
        <section
          className={`my-shopping-cart ${cart.length === 0 ? "no-border" : ""}`}
        >
          <ul>
            {cart.map((item) => (
              <li
                className={`product-card ${
                  removingItemId === item.product_id ? "remove-item" : ""
                }`}
                key={item.product_id}
              >
                <img src={item.product_image_url} alt={item.product_name} />

                <div>
                  <p className="product-name">{item.product_name}</p>
                  <Control
                    variant={"small"}
                    cartItem={item}
                    remove={handleRemoveProduct}
                  />
                </div>

                <div className="price">
                  <p className="label">Preço</p>
                  <p>{formatCurrency(item.product_price)}</p>
                  <p className="label">Subtotal</p>
                  <p>{formatCurrency(item.product_price * item.quantity)}</p>
                </div>

                <FaTrashAlt
                  onClick={() => handleRemoveProduct(item.product_id)}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="cart-total">
        <h3>Total do Carrinho</h3>

        <div className="cost-contain">
          <div>
            <p>Subtotal</p>
            <p>Envio</p>
            <p>Total</p>
          </div>

          <div className="cost">
            <p>{formatCurrency(totalPrice)}</p>
            <p>grátis</p>
            <strong>{formatCurrency(totalPrice)}</strong>
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
