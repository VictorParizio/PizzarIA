import { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

import { useCartContext } from "../hooks/useCartContext";
import { CartContext } from "../context/cartContext";

import { ModalCart } from "./CartModal";
import { MenuMobile } from "./MenuMobile";

import { useMediaQuery } from "../hooks/useMediaQuery";

export const Header = () => {
  const location = useLocation();

  const { cart } = useContext(CartContext);
  const { totalItems } = useCartContext();
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  const usuarioLogado = user;
  const dispatch = useDispatch();

  const isMobile = useMediaQuery(500);
  const [showModalCart, setShowModalCart] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch({ type: "user/logout" });
  };

  const handleModalToggle = () => {
    setShowModalCart(!showModalCart);
  };

  return (
    <>
      <header className="navigation">
        <Link to="/" className="logo">
          PizzarIA
        </Link>

        {!usuarioLogado && (
          <div className="member-area">
            {!usuarioLogado && location.pathname !== "/login" && (
              <Link to="/login">Entrar</Link>
            )}

            {!usuarioLogado && location.pathname === "/login" && (
              <Link to="/signup">Cadastrar</Link>
            )}
          </div>
        )}

        {!isMobile && (
          <>
            {usuarioLogado && (
              <nav>
                <ul>
                  <li>
                    <NavLink to="/menu">Cardápio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart">Carrinho</NavLink>
                  </li>
                </ul>
              </nav>
            )}

            {usuarioLogado && (
              <div className="member-area">
                <Link to="/404">
                  <FaUser title="Perfil do usuário" />
                </Link>
                <Link to="/">
                  <FiLogOut
                    className="close"
                    title="Sair"
                    onClick={handleLogout}
                  />
                </Link>
              </div>
            )}
          </>
        )}

        {showModalCart && <ModalCart isOpen={handleModalToggle} />}

        {isMobile && usuarioLogado && (
          <MenuMobile handleLogout={handleLogout} />
        )}

        {usuarioLogado && (
          <Link to="#" className="cart" onClick={handleModalToggle}>
            <FaCartShopping title="Carrinho suspenso" />
            <strong title="Total de itens no carrinho">
              {totalItems(cart)}
            </strong>
          </Link>
        )}
      </header>
    </>
  );
};