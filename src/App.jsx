import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
// import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
// import { Cart } from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Menu />
      {/* <Cart /> */}
      <Footer />
    </>
  );
}

export default App;
