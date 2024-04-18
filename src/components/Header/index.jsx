import { Link } from "react-router-dom";
import { Button } from "../Button";
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

      <Button variant={"login"}>
        <Link to="/login">Entrar</Link>
      </Button>
    </header>
  );
};
