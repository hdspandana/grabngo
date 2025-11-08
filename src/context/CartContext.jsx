import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setIsCartOpen(true);
  };

  return (
    <CartContext.Provider value={{ isCartOpen, toggleCart, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
