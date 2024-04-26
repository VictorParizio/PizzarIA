import { Control } from "../Control";

export const ResumeProduct = ({ cartItem }) => {
  console.log(cartItem.id);
  return (
    <>
      <figure>
        <img src={cartItem.imagem} />
        <h3>{cartItem.nome}</h3>
        <strong>{cartItem.preco}</strong>
      </figure>
      <div className="add-cart">
        <Control
          variant={"medium"}
          quantity={cartItem.quantity}
          textBtn={"x"}
          onClick={false}
        />
      </div>
    </>
  );
};
