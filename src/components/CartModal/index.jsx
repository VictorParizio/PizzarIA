import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useCartContext } from "../../hooks/useCartContext";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { ResumeProduct } from "../ResumeProduct";

import "./styles.css";

export const ModalCart = ({ isOpen }) => {
  const { cart } = useContext(CartContext);
  const { totalCart } = useCartContext();

  const displayedCart = cart.slice(0, 3);

  return (
    <section className="resume-cart">
      <header>
        <h2>Resumo do Pedido</h2>
        <Button variant={"small"} onClick={isOpen}>
          x
        </Button>
      </header>

      <div className="order-list">
        {displayedCart.map((item) => (
          <li className="pizza-card" key={item.id}>
            <ResumeProduct cartItem={item} />
          </li>
        ))}
      </div>

      {cart.length > 3 && <p>Para ver a lista completa acesse o carrinho</p>}

      {cart.length !== 0 && (
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
