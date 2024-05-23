import { useCartContext } from "../../hooks/useCartContext";
import { Button } from "../Button";

export const Control = ({ variant, cartItem, remove }) => {
  const { addProductCart, reduceProduct } = useCartContext();

  return (
    <div className="control">
      <div>
        <Button
          variant={variant}
          id="less"
          onClick={() => {
            cartItem.quantity === 1
              ? remove(cartItem.product_id)
              : reduceProduct(cartItem.product_id);
          }}
        >
          -
        </Button>

        <input
          className={`${variant}-input`}
          type="number"
          value={cartItem.quantity || 0}
          onChange={(e) => {}}
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
