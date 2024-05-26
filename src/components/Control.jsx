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
          aria-label="Remover um item do carrinho"
        >
          -
        </Button>

        <input
          className={`${variant}-input`}
          type="number"
          value={cartItem.quantity || 0}
          onChange={(e) => {}}
          aria-label="Quantidade do produto no carrinho"
        />

        <Button
          variant={variant}
          id="more"
          onClick={() => {
            dispatch(addProduct(cartItem));
          }}
          aria-label="Adicionar um item ao carrinho"
        >
          +
        </Button>
      </div>
    </div>
  );
};
