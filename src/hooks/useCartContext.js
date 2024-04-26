import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const useCartContext = () => {
  const { cart, setCart } = useContext(CartContext);

  const editQuantity = (id, quantity) => {
    return cart.map((cartItem) => {
      if (cartItem.id === id) {
        cartItem.quantity += quantity;
      }
      return cartItem;
    });
  };

  const addProductCart = (pizzaData) => {
    const hasProduct = cart.some((cartItem) => {
      return cartItem.id === pizzaData.id;
    });

    if (!hasProduct) {
      pizzaData.quantity = 1;
      return setCart((oldCart) => [...oldCart, pizzaData]);
    }

    const updatedCart = editQuantity(pizzaData.id, 1);

    setCart([...updatedCart]);
  };

  const removeProduct = (id) => {
    const product = cart.find((cartItem) => cartItem.id === id);

    const decrease = product.quantity === 1;

    if (decrease) {
      return setCart((oldCart) => {
        return oldCart.filter((cartItem) => cartItem.id !== id);
      });
    }

    const updatedCart = editQuantity(id, -1);

    setCart([...updatedCart]);
  };

  function removeProductCart(id) {
    const product = cart.filter((cartItem) => cartItem.id !== id);
    setCart(product);
  }

  return {
    cart,
    setCart,
    addProductCart,
    removeProduct,
    removeProductCart,
  };
};
