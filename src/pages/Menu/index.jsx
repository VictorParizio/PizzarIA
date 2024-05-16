import { useState, useEffect } from "react";

import { useCartContext } from "../../hooks/useCartContext";
import { formatCurrency } from "../../utils/formatCurrency";

import { ModalCart } from "../../components/CartModal";
import { Button } from "../../components/Button";
import { getAPI } from "../../http";

import "./styles.css";

export const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const { addProductCart } = useCartContext();

  useEffect(() => {
    (async function () {
      const dataAPI = await getAPI("produto");
      setMenuData(dataAPI);

      window.scrollTo({
        top: window.innerHeight * 0.8,
        behavior: "smooth",
      });
    })();
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
            <li className="pizza-card" key={item.product_id}>
              <figure>
                <img
                  src={item.product_image_url}
                  alt={`Pizza ${item.product_name} com vários ingredientes em volta.`}
                />
                <h3>{item.product_name}</h3>
                <figcaption>{item.product_description}</figcaption>
              </figure>
              <div className="add-cart">
                <strong>{formatCurrency(item.product_price)}</strong>
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
