import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./styles.css";

export const Hero = () => {
  return (
    <>
      <div className="hero-container"></div>
      <div className="hero-content">
        <h1>
          Bem-vindo à <strong>PizzarIA</strong>
        </h1>

        <p>
          Você já imaginou uma pizza criada por uma inteligência artificial?
          Bem, prepare-se para uma experiência gastronômica futurística!
        </p>

        <Button variant={"large animation"}>
          <Link to="/menu">Faça já o seu Pedido</Link>
        </Button>
      </div>
    </>
  );
};
