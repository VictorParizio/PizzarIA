import { Link } from "react-router-dom";
import "./styles.css";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-background" />
      <div className="hero-content">
        <h1>
          Bem-vindo à <strong>PizzarIA</strong>
        </h1>

        <p>
          Você já imaginou uma pizza criada por uma inteligência artificial?
          Bem, prepare-se para uma experiência gastronômica futurística!
        </p>

          <Link to="/menu" className="base-button large animation" >Faça já o seu Pedido</Link>
      </div>
    </section>
  );
};
