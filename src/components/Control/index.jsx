import { useCartContext } from "../../hooks/useCartContext";
import { Button } from "../Button";
import "./styles.css";

export const Control = ({ variant, textBtn, cartItem }) => {
  const { addProductCart, removeProduct, removeProductCart } = useCartContext();
  return (
    <div className="control">
      <div>
        <Button
          variant={variant}
          id="less"
          onClick={() => {
            removeProduct(cartItem.id);
          }}
        >
          -
        </Button>

        <input
          className={`${variant}-input`}
          type="number"
          value={cartItem.quantity || 0}
        />

        <Button
          variant={variant}
          id="more"
          onClick={() => {
            addProductCart(cartItem);
          }}
        >
          +
        </Button>
      </div>

      {textBtn && (
        <Button
          variant={"medium"}
          onClick={() => {
            removeProductCart(cartItem.id);
          }}
        >
          {textBtn}
        </Button>
      )}
    </div>
  );
};
