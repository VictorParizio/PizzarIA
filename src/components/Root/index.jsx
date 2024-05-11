import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CartProvider } from "../../context/cartContext";
import { UserProvider } from "../../context/userAuthContext";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { MessageProvider } from "../../context/modalContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const Root = () => {
  return (
    <MessageProvider>
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
    </MessageProvider>
  );
};
