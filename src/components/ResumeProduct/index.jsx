import { Control } from "../Control";

export const ResumeProduct = ({ pizzaData, quantity }) => {
  const { imagem, nome, preco } = pizzaData;

  return (
    <li className="pizza-card">
      <figure>
        <img src={imagem} />
        <h3>{nome}</h3>
        <strong>{preco}</strong>
      </figure>
      <div className="add-cart">
        <Control
          variant={"medium"}
          quantity={quantity}
          textBtn={"x"}
          onClick={false}
        />
      </div>
    </li>
  );
};
