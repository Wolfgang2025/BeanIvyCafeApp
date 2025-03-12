import React, { useContext } from "react";
import { CartContext } from "./CartContext"; // Your global cart context

const CheckoutButton = () => {
  const { cartItems } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      const response = await fetch("/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }), // Send cart data to backend
      });

      const { url } = await response.json();
      window.location.href = url; // Redirect to Stripe payment link
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return <button onClick={handleCheckout}>Proceed to Payment</button>;
};

export default CheckoutButton;
