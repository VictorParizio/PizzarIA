import { useState, useEffect, useRef } from "react";

import { Button } from "../../components/Button";
import { Hero } from "../../components/Hero";
import { Link } from "react-router-dom";

import {
  addScrollListener,
  removeScrollListener,
} from "../../utils/scrollAnimation";

import sidebarIllustration from '../../assets/images/OIG3 (1).gif'
import pizzaMargherita from "../../assets/images/pizza1.jpeg"
import pizzaCalabresa from "../../assets/images/pizza2.jpeg"
import pizzaVegetariana from "../../assets/images/pizza3.jpeg"

import "./styles.css";

export const Home = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("./src/api/testimunial.json")
      .then((response) => response.json())
      .then((data) => setTestimonialsData(data))
      .catch((error) => console.log("Erro ao carregar Depoimentos:", error));
  }, []);

  useEffect(() => {
    addScrollListener();
    return () => {
      removeScrollListener();
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < testimonialsData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <Hero />
      <main>
        <section id="about">
          <h2>Pizzas feitas por IA!</h2>
          <p>
            Na PizzarIA, nossas pizzas são mais do que apenas uma combinação de
            queijo, molho de tomate e massa crocante. Elas são fruto do trabalho
            árduo de nossos talentosos algoritmos de IA, que aprenderam milhares
            de receitas de pizza para criar as combinações mais inovadoras e
            saborosas.
          </p>
        </section>

        <section id="how-it-works">
          <img
            className="pizza-image"
            src={sidebarIllustration}
            alt=""
          />
          <ol className="steps-list">
            <li className="step">
              <strong>01</strong>
              <p>
                Faça seu Pedido: Navegue pelo nosso cardápio virtual e escolha
                entre uma variedade de pizzas exclusivas, todas elaboradas pela
                nossa IA.
              </p>
            </li>
            <li className="step">
              <strong>02</strong>
              <p>
                Personalize sua Pizza: Quer adicionar ou remover algum
                ingrediente? Nossa IA está à sua disposição para criar a pizza
                perfeita para você.
              </p>
            </li>
            <li className="step">
              <strong>03</strong>
              <p>
                Entrega Rápida: Em um piscar de olhos, sua pizza estará pronta
                para ser entregue diretamente na sua porta.
              </p>
            </li>
          </ol>
        </section>

        <section id="menu">
          <h2>Destaques do Cardápio</h2>
          <div className="menu-list">
            <figure className="pizza-card">
              <img
                src={pizzaMargherita}
                alt="Pizza margherita, com molho de tomate,
                queijo mozarela fresco e manjericão"
              />
              <h3>Pizza Margherita</h3>
              <figcaption>
                Uma clássica e deliciosa pizza margherita, com molho de tomate,
                queijo mozarela fresco e manjericão.
              </figcaption>
            </figure>
            <figure className="pizza-card">
              <img
                src={pizzaCalabresa}
                alt="Pizza de calabresa com um toque especial da nossa IA, que
                garante a combinação perfeita de sabores"
              />
              <h3>Pizza Calabresa</h3>
              <figcaption>
                Uma pizza de calabresa com um toque especial da nossa IA, que
                garante a combinação perfeita de sabores.
              </figcaption>
            </figure>
            <figure className="pizza-card">
              <img
                src={pizzaVegetariana}
                alt="Pizza vegetariana com molho de tomate, mozarela, pimentão, cebola, tomate, azeitonas e ervilhas"
              />
              <h3>Pizza Vegetariana</h3>
              <figcaption>
                Para os amantes de vegetais, nossa pizza vegetariana é uma
                explosão de sabor e cores, com ingredientes frescos e
                selecionados.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="cta-section" id="cta-section">
          <p>
            Então, por que esperar? Entre na era das pizzas do futuro com a
            PizzarIA. Deixe-nos surpreendê-lo com sabores que desafiam a lógica
            e encantam o paladar. É hora de saborear o futuro - uma fatia de
            cada vez!
          </p>

          <Button variant={"large animation"}>
            <Link to="/menu">Quero pedir a minha Pizza</Link>
          </Button>
        </section>

        <section id="testimonials">
          <div className="control">
            <h2>Depoimentos</h2>
            <div>
              <button
                className="base-button"
                id="back"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                &lt;
              </button>
              <button
                className="base-button"
                id="next"
                onClick={handleNext}
                disabled={currentIndex === testimonialsData.length - 3}
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="testimonial-container" ref={containerRef}>
            {testimonialsData
              .slice(currentIndex, currentIndex + 3)
              .map((testimonial) => (
                <div className="testimonial-card" key={testimonial.id}>
                  <div className="testimonial-star">
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.rating}</span>
                  </div>
                  <p>{testimonial.review}</p>
                </div>
              ))}
          </div>
        </section>

        <section className="attention-section">
          <p>
            <strong>Atenção</strong>: As imagens exibidas são meramente
            ilustrativas, já que nossas pizzas são puramente digitais. Mas
            acredite em nós, elas são tão deliciosas quanto parecem e não
            precisam de guardanapos!
          </p>
        </section>
      </main>
    </>
  );
};
