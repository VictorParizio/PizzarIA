import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { formatCurrency } from "../utils/formatCurrency";

export const useCartContext = () => {
  const { cart, setCart } = useContext(CartContext);

  const updateCart = (productId, quantityDelta) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + quantityDelta };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const addProductCart = (productData) => {
    const existingProduct = cart.find((item) => item.id === productData.id);
    if (existingProduct) {
      updateCart(productData.id, 1);
    } else {
      setCart([...cart, { ...productData, quantity: 1 }]);
    }
  };

  const removeProduct = (productId) => {
    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      updateCart(productId, -1);
    }
  };

  const removeProductCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const totalCart = (cart) => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.quantity * item.preco,
      0
    );
    return formatCurrency(totalPrice);
  };

  const totalItems = (cart) => {
    const total = cart.reduce((total, item) => total + item.quantity, 0);
    return total;
  };

  return {
    cart,
    setCart,
    addProductCart,
    removeProduct,
    removeProductCart,
    totalCart,
    totalItems,
  };
};
