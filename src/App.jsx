import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
// import { Home } from "./components/Home";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Menu />
      <Footer />
    </>
  );
}

export default App;
