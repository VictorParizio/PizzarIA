import { Control } from "../Control";

export const ResumeProduct = ({ cartItem }) => {
  return (
    <>
      <figure>
        <img src={cartItem.imagem} alt={cartItem.nome} />
        <h3>{cartItem.nome}</h3>
        <strong>{cartItem.preco}</strong>
      </figure>
      <div className="add-cart">
        <Control variant={"medium"} textBtn={"x"} cartItem={cartItem} />
      </div>
    </>
  );
};
