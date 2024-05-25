import { formatCurrency } from "../../utils/formatCurrency";

export const selectTotalItems = (rootReducer) => {
  return rootReducer.cartReducer.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
};

export const selectTotalPrice = (rootReducer) => {
  const price = rootReducer.cartReducer.cart.reduce(
    (total, item) => total + item.product_price * item.quantity,
    0
  );
  return formatCurrency(price)
};
