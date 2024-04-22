import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import "./styles.css";

export const Header = () => {
  const token = sessionStorage.getItem("token");
  const [usuarioLogado, setUsuarioLogado] = useState(token != null);

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
        {!usuarioLogado && (
          <>
            <Link to="/login">
              <FaUser />
            </Link>
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
          </>
        )}
      </div>
    </header>
  );
};
