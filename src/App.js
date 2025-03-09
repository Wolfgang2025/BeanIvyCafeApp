import React, { useState } from "react";
import MenuItem from "../src/components2/MenuItem";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity },
      ]);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to Bean & Ivy Coffee Shop</h1>
      <MenuItem
        item={{
          id: 1,
          name: "Fresh Squeezed Juice (Orange/Apple/Guava)",
          price: 5.99,
          description: "Freshly squeezed juice made from organic fruits.",
        }}
        addToCart={addToCart}
      />
      <div className="cart">
        <h2>Cart</h2>
        {cartItems.map((cartItem) => (
          <div key={cartItem.id}>
            <p>
              {cartItem.name} - {cartItem.quantity} x £
              {cartItem.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
