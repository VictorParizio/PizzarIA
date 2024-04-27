import { formatCurrency } from "../../utils/formatCurrency";
import { Control } from "../Control";

export const ResumeProduct = ({ cartItem }) => {
  const preco = formatCurrency(cartItem.preco);
  return (
    <>
      <figure>
        <img src={cartItem.imagem} alt={cartItem.nome} />
        <h3>{cartItem.nome}</h3>
        <strong>{preco}</strong>
      </figure>
      <div className="add-cart">
        <Control variant={"medium"} textBtn={"x"} cartItem={cartItem} />
      </div>
    </>
  );
};
