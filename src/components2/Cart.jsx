import React, { useState } from "react";
import CheckoutPage from "./CheckoutPage"; // Import the Checkout Page

const Cart = () => {
  // Sample cart items (replace with your real cart data)
  const [cartItems, setCartItems] = useState([
    { name: "Coffee", price: 500, quantity: 1 },
    { name: "Cake", price: 300, quantity: 2 },
  ]);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price / 100} x {item.quantity}
          </li>
        ))}
      </ul>

      {/* Pass cart items to CheckoutPage */}
      <CheckoutPage cartItems={cartItems} />
    </div>
  );
};

export default Cart;
