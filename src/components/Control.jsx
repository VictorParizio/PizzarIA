import { useDispatch } from "react-redux";
import { Button } from "./Button";
import { addProduct, reduceProduct } from "../redux/cart/slice";

export const Control = ({ variant, cartItem, remove }) => {
  const dispatch = useDispatch();

  return (
    <div className="control">
      <div>
        <Button
          variant={variant}
          id="less"
          onClick={() => {
            cartItem.quantity === 1
              ? remove(cartItem.product_id)
              : dispatch(reduceProduct(cartItem));
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
            dispatch(addProduct(cartItem));
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};
