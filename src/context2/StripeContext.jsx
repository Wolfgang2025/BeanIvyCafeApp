import { createContext, useContext, useState } from "react";

const StripeContext = createContext();

export const StripeProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <StripeContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </StripeContext.Provider>
  );
};

export const useStripeCart = () => useContext(StripeContext);
