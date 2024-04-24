import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import "./styles.css";
import { FiLogOut } from "react-icons/fi";

export const Header = () => {
  const location = useLocation();
  const token = sessionStorage.getItem("token");

  const [usuarioLogado, setUsuarioLogado] = useState(token != null);

  const handleLogout = () => {
    sessionStorage.clear();
    setUsuarioLogado(false);
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
            <Link to="/cart">
              <FaCartShopping />
            </Link>
            <Link to="/login">
              <FaUser />
            </Link>
            <Link to="/">
              <FiLogOut onClick={handleLogout} />
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
