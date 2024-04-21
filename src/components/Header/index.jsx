import { Link } from "react-router-dom";
import "./styles.css";

export const Header = () => {
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
            <a href="#menu">Cardápio</a>
          </li>
          <li>
            <a href="#testimonials">Depoimentos</a>
          </li>
        </ul>
      </nav>

      <div>
        <Link to="/cart">Carrinho</Link>
        <Link to="/login">Entrar</Link>
      </div>
    </header>
  );
};
