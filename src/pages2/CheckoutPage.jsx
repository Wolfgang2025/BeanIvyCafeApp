import React from "react";
import { useCart } from "../context2/CartContext"; // Replace with your actual cart context import

const CheckoutPage = () => {
  const { cart } = useCart(); // Fetch cart from your global cart management

  const handleCheckout = async () => {
    try {
      const response = await fetch("/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });

      const { url } = await response.json();
      window.location.href = url; // Redirect to Stripe checkout
    } catch (error) {
      console.error("Checkout Error:", error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h2>Your Cart Items</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - £{item.price.toFixed(2)} (x{item.quantity})
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout} disabled={cart.length === 0}>
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
