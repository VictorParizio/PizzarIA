import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Signin } from "../pages/Signin";
import { Login } from "../pages/Login";
import { Menu } from "../pages/Menu";
import { Cart } from "../pages/Cart";
import { NotFound } from "../pages/NotFound";
import { Root } from "../components/Root";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signin", element: <Signin /> },
      { path: "/login", element: <Login /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
