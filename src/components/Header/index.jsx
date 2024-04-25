import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import "./styles.css";
import { FiLogOut } from "react-icons/fi";
import { ModalCart } from "../Modal";
import { Control } from "../Control";
import { Button } from "../Button";
import pepperoni from "../../assets/pizzas/Pepperoni (1).jpeg";

export const Header = () => {
  const location = useLocation();
  const token = sessionStorage.getItem("token");

  const [usuarioLogado, setUsuarioLogado] = useState(token != null);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    setUsuarioLogado(false);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (token != null) {
      return setUsuarioLogado(true);
    }
    setUsuarioLogado(false);
  }, [token]);

  return (
    <header className="navigation">
      <Link to="/" className="logo">
        PizzarIA
      </Link>

      <nav>
        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <Link to="/menu">Cardápio</Link>
          </li>
          <li>
            <a href="#testimonials">Depoimentos</a>
          </li>
        </ul>
      </nav>

      <div className="member-area">
        {!usuarioLogado && location.pathname !== "/login" && (
          <>
            <Link to="/login">Entrar</Link>
          </>
        )}
        {!usuarioLogado && location.pathname === "/login" && (
          <>
            <Link to="/signup">Cadastrar</Link>
          </>
        )}
        {usuarioLogado && (
          <>
            <Link to="#" onClick={handleModalToggle}>
              <FaCartShopping />
            </Link>
            <Link to="/login">
              <FaUser />
            </Link>
            <Link to="/">
              <FiLogOut onClick={handleLogout} />
            </Link>
          </>
        )}
      </div>

      {showModal && (
        <ModalCart isOpen={handleModalToggle}>
          <li className="pizza-card">
            <figure>
              <img src={pepperoni} />
              <h3>Camarão com Catupiry</h3>
              <strong>R$ 27,99</strong>
            </figure>
            <div className="add-cart">
              <Control variant={"medium"} />
              <Button variant={"medium"}>x</Button>
            </div>
          </li>

          <li className="pizza-card">
            <figure>
              <img src={pepperoni} />
              <h3>Pepperoni</h3>
              <strong>R$ 27,99</strong>
            </figure>
            <div className="add-cart">
              <Control variant={"medium"} />
              <Button variant={"medium"}>x</Button>
            </div>
          </li>

          <li className="pizza-card">
            <figure>
              <img src={pepperoni} />
              <h3>Pepperoni</h3>
              <strong>R$ 27,99</strong>
            </figure>
            <div className="add-cart">
              <Control variant={"medium"} />
              <Button variant={"medium"}>x</Button>
            </div>
          </li>
        </ModalCart>
      )}
    </header>
  );
};
