import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import { CartProvider } from "../context/cartContext";
import { MessageProvider } from "../context/modalContext";

import { Header } from "./Header";
import { Footer } from "./Footer";

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
      <Provider store={store}>
        <CartProvider>
          <ScrollToTop />
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </CartProvider>
      </Provider>
    </MessageProvider>
  );
};
