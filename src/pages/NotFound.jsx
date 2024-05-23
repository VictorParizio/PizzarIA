import { Link } from "react-router-dom";
import img404 from "../assets/images/404.jpeg";

export const NotFound = () => {
  return (
    <section className="container-404">
      <img src={img404} alt="página não encontrada" className="img404" />
      <div>
        <h2>Ops! Nenhuma fatia por aqui</h2>
        <p>A página que você está procurando não existe ou foi movida.</p>
        <p>
          Enquanto isso, por que não dar uma olhada no nosso delicioso cardápio
          de pizzas feitas por inteligência artificial? Temos uma variedade de
          sabores que certamente irão satisfazer seu apetite.
        </p>
        <Link to="/menu" className="base-button large animation">
          Quero pedir a minha Pizza
        </Link>
      </div>
    </section>
  );
};
