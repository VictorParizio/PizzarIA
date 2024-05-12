import { useCartContext } from "../../hooks/useCartContext";
import { Button } from "../Button";
import "./styles.css";

export const Control = ({ variant, cartItem }) => {
  const { addProductCart, reduceProduct } = useCartContext();
  
  return (
    <div className="control">
      <div>
        <Button
          variant={variant}
          id="less"
          onClick={() => {
            reduceProduct(cartItem.product_id);
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
    </div>
  );
};
