import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { user } = useSelector((rootReducer) => rootReducer.userSlice);
  const isLogged = user;

  return (
    <section
      className="hero-container"
      role="region"
      aria-label="Seção de destaque"
    >
      <div
        className="hero-background"
        role="banner"
        aria-label="Background da PizzarIA: uma mesa rústica de madeira com uma pizza em um suporte redondo e ingredientes ao redor."
      />
      <div className="hero-content">
        <h1>
          Bem-vindo à <strong>PizzarIA</strong>
        </h1>

        <p>
          Você já imaginou uma pizza criada por uma inteligência artificial?
          Bem, prepare-se para uma experiência gastronômica futurística!
        </p>

        <Link
          to={isLogged ? "/menu" : "/login"}
          className="base-button large animation"
          aria-label={isLogged ? "Acessar menu" : "Acessar página de login"}
        >
          Faça já o seu Pedido
        </Link>
      </div>
    </section>
  );
};
