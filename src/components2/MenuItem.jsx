import React from "react";
import { useCart } from "../context2/CartContext"; // Import global cart context

const MenuItem = ({ item }) => {
  const { cartItems, setCartItems } = useCart();

  const addToCart = () => {
    setCartItems([...cartItems, item]); // ✅ Add item to global cart
  };

  return (
    <div>
      <h3>
        {item.name} - £{(item.price / 100).toFixed(2)}
      </h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
