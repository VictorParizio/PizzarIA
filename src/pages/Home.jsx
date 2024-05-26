import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { MenuHighlights } from "../components/MenuHighlights";
import { Testimonial } from "../components/Testimonial";
import { Hero } from "../components/Hero";

import sidebarIllustration from "../assets/images/OIG3.gif";

import {
  addScrollListener,
  removeScrollListener,
} from "../utils/scrollAnimation";

export const Home = () => {
  const { user } = useSelector((rootReducer) => rootReducer.userSlice);
  const isLogged = user;

  useEffect(() => {
    addScrollListener();
    return () => {
      removeScrollListener();
    };
  }, []);

  return (
    <>
      <Hero />

      <section id="about" role="region" aria-label="Sobre">
        <h2>Pizzas feitas por IA!</h2>
        <p>
          Na PizzarIA, nossas pizzas são mais do que apenas uma combinação de
          queijo, molho de tomate e massa crocante. Elas são fruto do trabalho
          árduo de nossos talentosos algoritmos de IA, que aprenderam milhares
          de receitas de pizza para criar as combinações mais inovadoras e
          saborosas.
        </p>
      </section>

      <section id="how-it-works" role="region" aria-label="Como funciona">
        <img
          className="pizza-image"
          src={sidebarIllustration}
          alt="Imagem de uma pizza feita por IA"
        />
        <ol className="steps-list" role="list">
          <li className="step" role="listitem">
            <strong>01</strong>
            <p>
              Faça seu Pedido: Navegue pelo nosso cardápio virtual e escolha
              entre uma variedade de pizzas exclusivas, todas elaboradas pela
              nossa IA.
            </p>
          </li>
          <li className="step" role="listitem">
            <strong>02</strong>
            <p>
              Personalize sua Pizza: Quer adicionar ou remover algum
              ingrediente? Nossa IA está à sua disposição para criar a pizza
              perfeita para você.
            </p>
          </li>
          <li className="step" role="listitem">
            <strong>03</strong>
            <p>
              Entrega Rápida: Em um piscar de olhos, sua pizza estará pronta
              para ser entregue diretamente na sua porta.
            </p>
          </li>
        </ol>
      </section>

      <MenuHighlights />

      <section className="cta-section" id="cta-section">
        <p>
          Então, por que esperar? Entre na era das pizzas do futuro com a
          PizzarIA. Deixe-nos surpreendê-lo com sabores que desafiam a lógica e
          encantam o paladar. É hora de saborear o futuro - uma fatia de cada
          vez!
        </p>

        <Link
          to={isLogged ? "/menu" : "/login"}
          className="base-button large animation"
          aria-label={isLogged ? "Acessar menu" : "Acessar página de login"}
        >
          Quero pedir a minha Pizza
        </Link>
      </section>

      <Testimonial />

      <section className="attention-section">
        <p>
          <strong>Atenção</strong>: As imagens exibidas são meramente
          ilustrativas, já que nossas pizzas são puramente digitais. Mas
          acredite em nós, elas são tão deliciosas quanto parecem e não precisam
          de guardanapos!
        </p>
      </section>
    </>
  );
};
