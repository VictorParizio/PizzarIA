import { useDispatch } from "react-redux";
import { Button } from "./Button";

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
              : dispatch({ type: "cart/reduceProduct", payload: cartItem });
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
            dispatch({ type: "cart/addProduct", payload: cartItem });
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};
