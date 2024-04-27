import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { menuPizzas } from "../../mocks/menu";
import { ModalCart } from "../../components/CartModal";
import { formatCurrency } from "../../utils/formatCurrency";
import { useCartContext } from "../../hooks/useCartContext";
import axios from "axios";

import "./styles.css";

export const Menu = () => {
  const [showModal, setShowModal] = useState(false);
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

  const handleAddToCart = (item) => {
    addProductCart(item, 1);
    setShowModal(true);
  };

  return (
    <>
      <div className="banner" />
      <section className="menu-container">
        <h2>Cardápio</h2>
        <ul className="menu-list">
          {menuData.map((item) => (
            <li className="pizza-card" key={item.id}>
              <figure>
                <img
                  src={item.imagem}
                  alt={`Pizza ${item.nome} com vários ingredientes em volta.`}
                />
                <h3>{item.nome}</h3>
                <figcaption>{item.descricao}</figcaption>
              </figure>
              <div className="add-cart">
                <strong>{formatCurrency(item.preco)}</strong>
                <Button
                  variant={"medium"}
                  onClick={() => handleAddToCart(item)}
                >
                  Adicionar
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {showModal && <ModalCart isOpen={() => setShowModal(false)} />}
    </>
  );
};
