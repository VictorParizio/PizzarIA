const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/addProduct":
      const existingProduct = state.cart.find(
        (item) => item.product_id === action.payload.product_id
      );

      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product_id === action.payload.product_id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "cart/removeProductCart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product_id !== action.payload),
      };

    case "cart/reduceProduct":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.product_id === action.payload.product_id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };

    case "cart/submitOrder":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
