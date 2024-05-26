import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import { Control } from "./Control";
import { Button } from "./Button";

import { formatCurrency } from "../utils/formatCurrency";
import { selectTotalPrice } from "../redux/cart/cart.selectors";
import { removeProductCart } from "../redux/cart/slice";

export const ModalCart = ({ isOpen }) => {
  const { cart } = useSelector((rootReducer) => rootReducer.cartSlice);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const [removingItemId, setRemovingItemId] = useState(null);
  const [isClosingModalCart, setIsClosingModalCart] = useState(false);

  const handleRemoveProduct = (id) => {
    setRemovingItemId(id);
    if (cart.length === 1) {
      setIsClosingModalCart(true);
    }
    setTimeout(() => {
      dispatch(removeProductCart(id));
      setRemovingItemId(null);
      setIsClosingModalCart(false);
    }, 600);
  };

  const closeModalCart = () => {
    setIsClosingModalCart(true);
    setTimeout(() => {
      isOpen();
      setIsClosingModalCart(false);
    }, 600);
  };

  return (
    <>
      {cart.length !== 0 && (
        <section
          className={`resume-cart ${isClosingModalCart ? "empty" : ""}`}
          role="region"
          aria-label="Modal do carrinho"
        >
          <div>
            <h2>Resumo do Pedido</h2>
            <div>
              <FiLogOut
                className="close cart-modal"
                onClick={closeModalCart}
                aria-label="Fechar modal do carrinho"
              />
            </div>

            <ul className="order-list">
              {cart.map((item) => (
                <li
                  className={`item-card ${
                    removingItemId === item.product_id ? "remove-item" : ""
                  }`}
                  key={item.product_id}
                >
                  <figure>
                    <img
                      src={item.product_image_url}
                      alt={`Pizza ${item.product_name} com vários ingredientes em volta.`}
                    />
                  </figure>
                  <div>
                    <div className="info">
                      <h3>{item.product_name}</h3>
                      <strong>{formatCurrency(item.product_price)}</strong>
                    </div>
                    <div className="controls">
                      <Control
                        variant={"small"}
                        cartItem={item}
                        remove={handleRemoveProduct}
                      />
                      <FaTrashAlt
                        className="trashIco"
                        onClick={() => handleRemoveProduct(item.product_id)}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p>
              Total <strong>{totalPrice}</strong>
            </p>
            <Link to="/cart" onClick={isOpen}>
              <Button variant={"large"}>Finalizar pedido</Button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};
