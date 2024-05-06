import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Control } from "../Control";
import { CartContext } from "../../context/cartContext";
import { useCartContext } from "../../hooks/useCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { FaTrashAlt } from "react-icons/fa";

import "./styles.css";
import { FiLogOut } from "react-icons/fi";

export const ModalCart = ({ isOpen }) => {
  const { cart } = useContext(CartContext);
  const { removeProductCart, totalCart } = useCartContext();

  const displayedCart = cart.slice(-3).slice().reverse();

  return (
    <section className="resume-cart">
      <h2>Resumo do Pedido</h2>
      <div>
        <FiLogOut className="close cart-modal" onClick={isOpen} />
      </div>

      <ul className="order-list">
        {displayedCart.map((item) => (
          <li className="pizza-card" key={item.product_id}>
            <figure>
              <img
                src={item.product_image_url}
                alt={`Pizza ${item.product_name} com vários ingredientes em volta.`}
              />
              <h3>{item.product_name}</h3>
              <strong>{formatCurrency(item.product_price)}</strong>
            </figure>
            <div className="add-cart">
              <Control variant={"medium"} cartItem={item} />
              <FaTrashAlt
                className="trashIco"
                onClick={() => removeProductCart(item.product_id)}
              />
            </div>
          </li>
        ))}
      </ul>

      {cart.length > 3 && <p>Para ver a lista completa acesse o carrinho</p>}

      {cart.length === 0 ? (
        isOpen()
      ) : (
        <>
          <p>
            Total <strong>{totalCart(cart)}</strong>
          </p>
          <Link to="/cart" onClick={isOpen}>
            <Button variant={"large"}>
              {cart.length < 4 ? "Finalizar pedido" : "Acessar Carrinho"}
            </Button>
          </Link>
        </>
      )}
    </section>
  );
};
