import { useEffect, useState } from "react";
import pizzaMargherita from "../../assets/images/pizza1.jpeg";
import pizzaCalabresa from "../../assets/images/pizza2.jpeg";
import pizzaVegetariana from "../../assets/images/pizza3.jpeg";

export const MenuHighlights = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 568);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 568);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="menu">
      <h2>Destaques do Cardápio</h2>
      <div className={isMobile ? "menu-list mobile" : "menu-list"}>
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
            Para os amantes de vegetais, nossa pizza vegetariana é uma explosão
            de sabor e cores, com ingredientes frescos e selecionados.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
