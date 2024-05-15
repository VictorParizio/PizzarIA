import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { UserAuthContext } from "../../context/userAuthContext";

import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

import { ModalCart } from "../CartModal";

import { useCartContext } from "../../hooks/useCartContext";
import { CartContext } from "../../context/cartContext";

import "./styles.css";

export const Header = () => {
  const location = useLocation();

  const { cart } = useContext(CartContext);
  const { totalItems } = useCartContext();
  const { usuarioLogado, setUsuarioLogado } = useContext(UserAuthContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [showModalCart, setShowModalCart] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClose, setIsClose] = useState(false);

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

  const ToggleMode = () => {
    setActiveMenu(!activeMenu);
    setTimeout(() => {
      setIsClose(!isClose);
    }, 1000);
  };

  return (
    <>
      {" "}
      <header className="navigation">
        <Link to="/" className="logo">
          PizzarIA
        </Link>

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
              {!usuarioLogado && location.pathname !== "/login" && (
                <Link to="/login">Entrar</Link>
              )}

              {!usuarioLogado && location.pathname === "/login" && (
                <Link to="/signup">Cadastrar</Link>
              )}

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

            {showModalCart && <ModalCart isOpen={handleModalToggle} />}
          </>
        )}

        {isMobile && usuarioLogado && (
          <>
            <div
              className={activeMenu ? "icon iconActive" : "icon"}
              onClick={ToggleMode}
            >
              <div className="hamburger hamburgerIcon" />
            </div>

            <div
              className={
                activeMenu ? "menu menuOpen" : `menu menuClose ${!isClose}`
              }
            >
              <nav className="list">
                <ul className="listItems">
                  <li>
                    <NavLink to="/menu" onClick={ToggleMode}>
                      Cardápio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart" onClick={ToggleMode}>
                      Carrinho
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/404" onClick={ToggleMode}>
                      Perfil
                    </NavLink>
                  </li>
                  <li>
                    <Link to="/">Sair</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        )}
      </header>
      {usuarioLogado && (
        <Link to="#" className="cart" onClick={handleModalToggle}>
          <FaCartShopping title="Carrinho suspenso" />
          <strong title="Total de itens no carrinho">{totalItems(cart)}</strong>
        </Link>
      )}
    </>
  );
};
