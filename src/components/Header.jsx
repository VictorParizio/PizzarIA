import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

import { ModalCart } from "./CartModal";
import { MenuMobile } from "./MenuMobile";

import { useMediaQuery } from "../hooks/useMediaQuery";
import { selectTotalItems } from "../redux/cart/cart.selectors";
import { logout } from "../redux/user/slice";

export const Header = () => {
  const [showModalCart, setShowModalCart] = useState(false);

  const { cart } = useSelector((rootReducer) => rootReducer.cartSlice);
  const { user } = useSelector((rootReducer) => rootReducer.userSlice);

  const usuarioLogado = user;
  const totalItems = useSelector(selectTotalItems);
  const dispatch = useDispatch();
  const location = useLocation();
  const isMobile = useMediaQuery(500);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(logout());
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
            <strong title="Total de itens no carrinho">{totalItems}</strong>
          </Link>
        )}
      </header>
    </>
  );
};
