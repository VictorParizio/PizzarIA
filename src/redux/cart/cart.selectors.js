export const selectTotalItems = (rootReducer) => {
  return rootReducer.cartReducer.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
};

export const selectTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.cart.reduce(
    (total, item) => total + item.product_price * item.quantity,
    0
  );
};
