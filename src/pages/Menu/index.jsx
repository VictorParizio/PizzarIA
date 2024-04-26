import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { menuPizzas } from "../../mocks/menu";
import { formatCurrency } from "../../utils/formatCurrency";
import { useCartContext } from "../../hooks/useCartContext";
import axios from "axios";

import "./styles.css";

export const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const { addProductCart } = useCartContext();

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
                <Button
                  variant={"medium"}
                  onClick={() => addProductCart(item, 1)}
                >
                  Adicionar
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
