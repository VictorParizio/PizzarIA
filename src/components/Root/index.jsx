import { Outlet } from "react-router-dom";
import { CartProvider } from "../../context/cartContext";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Root = () => {
  return (
    <CartProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
  );
};
