import { CartProvider } from "../../context/cartContext";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { UserProvider } from "../../context/userAuthContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const Root = () => {
  return (
    <UserProvider>
      <CartProvider>
        <ScrollToTop />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </UserProvider>
  );
};
