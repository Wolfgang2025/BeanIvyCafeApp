import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation

const Cart = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Sample cart items (replace with your real cart data)
  const [cartItems, setCartItems] = useState([
    { name: "Coffee", price: 500, quantity: 1 },
    { name: "Cake", price: 300, quantity: 2 },
  ]);

  const goToCheckout = () => {
    navigate("/checkout", { state: { cartItems } }); // Pass cart data using React Router state
  };

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

      {/* Navigate to checkout page */}
      <button onClick={goToCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
