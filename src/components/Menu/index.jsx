import { useState, useEffect } from "react";
import { Button } from "../Button";
import { Control } from "../Control";
import "./styles.css";

export const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error("Erro ao carregar o menu:", error));
  }, []);

  return (
    <main>
      <div className="banner"></div>
      <section className="menu-container" id="menu">
        <h2>Cardápio</h2>
        <ul className="menu-list" id="menu-list">
          {menuData.map((item) => {
            let preco = item.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            });

            return (
              <li className="pizza-card" key={item.id}>
                <figure>
                  <img src={item.imagem} alt={item.nome} />
                  <h3>{item.nome}</h3>
                  <figcaption>{item.descricao}</figcaption>
                  <strong>{preco}</strong>
                </figure>
                <div className="add-cart">
                  <Control variant={"medium"} />
                  <Button variant={"base-button"}>adicionar</Button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
