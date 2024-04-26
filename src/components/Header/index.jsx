import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

import { ModalCart } from "../CartModal";

import "./styles.css";
import { CartContext } from "../../context/cartContext";
import { ResumeProduct } from "../ResumeProduct";

export const Header = () => {
  const location = useLocation();
  const token = sessionStorage.getItem("token");

  const [usuarioLogado, setUsuarioLogado] = useState(token != null);
  const [showModal, setShowModal] = useState(false);
  const { cart } = useContext(CartContext);

  const handleLogout = () => {
    sessionStorage.clear();
    setUsuarioLogado(false);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (token != null) {
      return setUsuarioLogado(true);
    }
    setUsuarioLogado(false);
  }, [token]);

  return (
    <header className="navigation">
      <Link to="/" className="logo">
        PizzarIA
      </Link>

      <nav>
        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <Link to="/menu">Cardápio</Link>
          </li>
          <li>
            <a href="#testimonials">Depoimentos</a>
          </li>
        </ul>
      </nav>

      <div className="member-area">
        {!usuarioLogado && location.pathname !== "/login" && (
          <>
            <Link to="/login">Entrar</Link>
          </>
        )}
        {!usuarioLogado && location.pathname === "/login" && (
          <>
            <Link to="/signup">Cadastrar</Link>
          </>
        )}
        {usuarioLogado && (
          <>
            <Link to="#" onClick={handleModalToggle}>
              <FaCartShopping />
            </Link>
            <Link to="/404">
              <FaUser />
            </Link>
            <Link to="/">
              <FiLogOut onClick={handleLogout} />
            </Link>
          </>
        )}
      </div>

      {showModal && (
        <ModalCart isOpen={handleModalToggle}>
          {cart.map((item) => (
            <li className="pizza-card" key={item.id}>
              <ResumeProduct cartItem={item} />
            </li>
          ))}
        </ModalCart>
      )}
    </header>
  );
};
