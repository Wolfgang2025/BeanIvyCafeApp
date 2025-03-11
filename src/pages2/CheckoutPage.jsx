import React from "react";
import { useCart } from "../context2/CartContext"; // Ensure correct cart context import
import { loadStripe } from "@stripe/stripe-js"; // ✅ Fix import issue

const stripePromise = loadStripe(
  "pk_test_51R1Fk3QvE4dQz98ssrKWTzpenLP3pVy5lCEjduQ27FhRehh7HdZujgKh7UWGIHWgFXzKWj11L7gxLmyflOx6tZ1X00fxWYg01E"
); // Replace with your actual key

const CheckoutPage = () => {
  const { cart = [] } = useCart() || {}; // Ensure cart is an array

  // Calculate total order value
  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

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
          <h3>Total: £{total}</h3>
          <button onClick={handleCheckout} disabled={cart.length === 0}>
            Pay with Stripe
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
