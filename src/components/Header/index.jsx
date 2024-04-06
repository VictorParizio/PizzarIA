import { Button } from "../Button";
import "./styles.css";

export const Header = () => {
  return (
    <header className="navigation">
      <a href="" className="logo">
        PizzarIA
      </a>

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

      <Button styleType={"primary-button login"}>
        <a href="">Entrar</a>
      </Button>
    </header>
  );
};
