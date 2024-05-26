import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Provider } from "react-redux";

import { MessageProvider } from "../context/modalContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { store } from "../redux/store";

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
        <ScrollToTop />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Provider>
    </MessageProvider>
  );
};
