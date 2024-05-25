import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { user } = useSelector((rootReducer) => rootReducer.userSlice);
  const usuarioLogado = user;

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

        <Link
          to={usuarioLogado ? "/menu" : "/login"}
          className="base-button large animation"
        >
          Faça já o seu Pedido
        </Link>
      </div>
    </section>
  );
};
