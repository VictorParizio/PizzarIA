import { useState, useEffect } from "react";
import { Control } from "../../components/Control";
import { menuPizzas } from "../../api/menu";
import { formatCurrency } from "../../utils/formatCurrency";
import { ResumeProduct } from "../../components/ResumeProduct";
import axios from "axios";

import "./styles.css";

export const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    setMenuData(menuPizzas);
    // axios
    //   .get("url/da/api")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => setMenuData(data))
    //   .catch((error) => {
    //     console.error("Erro ao carregar os dados do menu:", error);
    //   });
  }, []);

  const handleAddProduct = (pizzaData, quantity) => {
    if (quantity > 0) {
      <ResumeProduct pizzaData={pizzaData} quantity={quantity} />;
    }
  };

  return (
    <>
      <div className="banner"></div>
      <section className="menu-container">
        <h2>Cardápio</h2>
        <ul className="menu-list">
          {menuData.map((item) => (
            <li className="pizza-card" key={item.id}>
              <figure>
                <img src={item.imagem} alt={item.nome} />
                <h3>{item.nome}</h3>
                <figcaption>{item.descricao}</figcaption>
                <strong>{formatCurrency(item.preco)}</strong>
              </figure>
              <div className="add-cart">
                <Control
                  variant={"medium"}
                  textBtn={"adicionar"}
                  onAdd={(quantity) => handleAddProduct(item, quantity)}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
