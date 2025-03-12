import React, { useState } from "react";
import MyRoutes from "./components2/routing2/MyRoutes.jsx"; // MyRoutes handles routing
import "./styles2/styles.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If the item already exists, update its quantity
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      // If the item doesn't exist, add it to the cart
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
  };

  // Function to remove an item from the cart
  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <div style={{ paddingTop: "150px", paddingLeft: "80px" }}>
        <MyRoutes
          cartItems={cartItems}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      </div>
    </div>
  );
}

export default App;
