import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

import { UserAuthContext } from "../../context/userAuthContext";
import { useCartContext } from "../../hooks/useCartContext";
import { CartContext } from "../../context/cartContext";

import { ModalCart } from "../CartModal";
import { MenuMobile } from "../MenuMobile";

import "./styles.css";

export const Header = () => {
  const location = useLocation();

  const { cart } = useContext(CartContext);
  const { totalItems } = useCartContext();
  const { usuarioLogado, setUsuarioLogado } = useContext(UserAuthContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [showModalCart, setShowModalCart] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUsuarioLogado(false);
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

            <div className="member-area">
              {usuarioLogado && (
                <>
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
                </>
              )}
            </div>
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
