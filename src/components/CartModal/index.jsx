import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./styles.css";

export const ModalCart = ({ isOpen, children }) => {
  return (
    <section className="resume-cart">
      <header>
        <h2>Resumo do Pedido</h2>
        <Button variant={"small"} onClick={isOpen}>
          x
        </Button>
      </header>
      <div className="order-list">{children}</div>
      {children.length !== 0 && (
        <Link to="/cart" onClick={isOpen}>
          <Button variant={"large"}>Finalizar pedido</Button>
        </Link>
      )}
    </section>
  );
};
