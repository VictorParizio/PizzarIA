import { Button } from "../Button";
import { Hero } from "../Hero";
import "./styles.css";

export const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <section className="about-section">
          <div id="about">
            <h2>Pizzas feitas por IA!</h2>
            <p>
              Na PizzarIA, nossas pizzas são mais do que apenas uma combinação
              de queijo, molho de tomate e massa crocante. Elas são fruto do
              trabalho árduo de nossos talentosos algoritmos de IA, que
              aprenderam milhares de receitas de pizza para criar as combinações
              mais inovadoras e saborosas.
            </p>
          </div>
        </section>

        <section id="how-it-works">
          <img
            className="pizza-image"
            src="src/assets/images/OIG3 (1).gif"
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
              <img src="./src/assets/images/pizza1.jpeg" alt="Pizza margherita, com molho de tomate,
                queijo mozarela fresco e manjericão" />
              <h3>Pizza Margherita</h3>
              <figcaption>
                Uma clássica e deliciosa pizza margherita, com molho de tomate,
                queijo mozarela fresco e manjericão.
              </figcaption>
            </figure>
            <figure className="pizza-card">
              <img src="./src/assets/images/pizza2.jpeg" alt="Pizza de calabresa com um toque especial da nossa IA, que
                garante a combinação perfeita de sabores" />
              <h3>Pizza Calabresa</h3>
              <figcaption>
                Uma pizza de calabresa com um toque especial da nossa IA, que
                garante a combinação perfeita de sabores.
              </figcaption>
            </figure>
            <figure className="pizza-card">
              <img src="./src/assets/images/pizza3.jpeg" alt="Pizza vegetariana com molho de tomate, mozarela, pimentão, cebola, tomate, azeitonas e ervilhas" />
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

          <Button styleType={"primary-button animation"}>
            <a href="./src/pages/menu.html">Quero pedir a minha Pizza</a>
          </Button>
        </section>

        <section id="testimonials">
          <div className="control">
            <h2>Depoimentos</h2>
            <div>
              <button className="control-button" id="back" disabled>
                &lt;
              </button>
              <button className="control-button" id="next">&gt;</button>
            </div>
          </div>

          <div className="testimonial-container">
            <div className="testimonial-card">
              <div className="testimonial-star">
                <h3>Maria Silva</h3>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p>
                A PizzarIA realmente superou minhas expectativas! Nunca imaginei
                que uma inteligência artificial pudesse criar pizzas tão
                saborosas.
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-star">
                <h3>João Oliveira</h3>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p>
                Como um entusiasta de tecnologia, fiquei intrigado quando ouvi
                falar da PizzarIA. As pizzas são incrivelmente criativas e
                deliciosas.
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-star">
                <h3>Ana Souza</h3>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p>
                Sou vegetariana e sempre tive dificuldade em encontrar boas
                opções de pizza. Mas isso mudou com a PizzarIA!
              </p>
            </div>

            {/* <!-- <div className="depoimento">
        <h3>Carlos Santos</h3>
        <p>
          Como um aficionado por pizzas, estou sempre em busca da próxima
          grande novidade. E encontrei isso na PizzarIA.
        </p>
      </div>

      <div className="depoimento">
        <h3>Juliana Ferreira</h3>
        <p>
          A PizzarIA é simplesmente revolucionária! Eu e meus amigos estamos
          maravilhados com a qualidade e a originalidade das pizzas.
        </p>
      </div>

      <div className="depoimento">
        <h3>Rafael Oliveira</h3>
        <p>
          Depois de experimentar suas criações, fiquei impressionado! Estou
          completamente satisfeito e vou recomendar a todos os meus amigos!"
        </p>
      </div> --> */}
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
