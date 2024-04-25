import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Control } from "../../components/Control";
import { menuPizzas } from "../../api/menu";
import axios from "axios";

import "./styles.css";

export const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    setMenuData(menuPizzas);
    axios
      .get("url/da/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setMenuData(data))
      .catch((error) => {
        console.error("Erro ao carregar os dados do menu:", error);
      });
  }, []);

  return (
    <main>
      <div className="banner"></div>
      <section className="menu-container">
        <h2>Cardápio</h2>
        <ul className="menu-list">
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
                  <Button variant={"medium"}>adicionar</Button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
