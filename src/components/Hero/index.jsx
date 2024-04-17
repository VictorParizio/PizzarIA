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

        <Button variant={"primary-button animation"}>
          <a href="./src/pages/menu.html">Faça já o seu Pedido</a>
        </Button>
      </div>
    </>
  );
};
