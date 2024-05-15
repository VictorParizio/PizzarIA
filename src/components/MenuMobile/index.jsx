import { Link, NavLink } from "react-router-dom";

import "./styles.css";

export const MenuMobile = ({
  activeMenu,
  ToggleMode,
  isClose,
  handleLogout,
}) => {
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

  return (
    <>
      <div
        className={activeMenu ? "icon iconActive" : "icon"}
        onClick={ToggleMode}
      >
        <div className="hamburger hamburgerIcon" />
      </div>

      <div
        className={activeMenu ? "menu menuOpen" : `menu menuClose ${!isClose}`}
      >
        <nav className="list">
          <ul className="listItems">
            {nav.map((route) => (
              <li>
                <NavLink to={route.to} onClick={ToggleMode}>
                  {route.name}
                </NavLink>
              </li>
            ))}

            <li>
              <Link
                to="/"
                className="close"
                title="Sair"
                onClick={handleLogout}
              >
                Sair
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
