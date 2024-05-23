import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const nav = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Cardápio",
    to: "/menu",
  },
  {
    name: "Carinho",
    to: "/cart",
  },
  {
    name: "Perfil",
    to: "/404",
  },
];

export const MenuMobile = ({ handleLogout }) => {
  const [toggle, setToggle] = useState(false);

  const btnMobile = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`mobile ${toggle ? "active" : ""}`}>
      <button className="btn-mobile" onClick={btnMobile}>
        <span className="hamburguer"></span>
      </button>

      <ul className="menu">
        {nav.map((route) => (
          <li key={route.name}>
            <NavLink to={route.to} onClick={btnMobile}>
              {route.name}
            </NavLink>
          </li>
        ))}

        <li>
          <Link to="/" title="Sair" onClick={handleLogout}>
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
};
