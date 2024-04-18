import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Signin } from "../pages/Signin";
import { Login } from "../pages/Login";
import { Menu } from "../pages/Menu";
import { Footer } from "../components/Footer";
import { NotFound } from "../pages/NotFound"; 

export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
};
