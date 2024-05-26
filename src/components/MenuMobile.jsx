import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const nav = [
  {
    name: "Home",
    to: "/",
    label: "Ir para página inicial",
  },
  {
    name: "Cardápio",
    to: "/menu",
    label: "Ir para o cadápio",
  },
  {
    name: "Carinho",
    to: "/cart",
    label: "Ir para o carrinho",
  },
  {
    name: "Perfil",
    to: "/404",
    label: "Ir para página de perfil",
  },
];

export const MenuMobile = ({ handleLogout }) => {
  const [toggle, setToggle] = useState(false);

  const btnMobile = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`mobile ${toggle ? "active" : ""}`}>
      <button
        className="btn-mobile"
        onClick={btnMobile}
        aria-label={toggle ? "Fechar menu" : "Abrir menu"}
      >
        <span className="hamburguer"></span>
      </button>

      <ul className="menu">
        {nav.map((route) => (
          <li key={route.name}>
            <NavLink to={route.to} onClick={btnMobile} aria-label={route.label}>
              {route.name}
            </NavLink>
          </li>
        ))}

        <li>
          <Link
            to="/"
            title="Encerrar sessão"
            onClick={handleLogout}
            aria-label="Encerrar sessão"
          >
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
};
