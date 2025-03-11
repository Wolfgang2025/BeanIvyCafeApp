import React from "react";
import { useCart } from "../context2/CartContext"; // Use your existing global cart context

const stripePromise = loadStripe(
  "pk_test_51R1Fk3QvE4dQz98ssrKWTzpenLP3pVy5lCEjduQ27FhRehh7HdZujgKh7UWGIHWgFXzKWj11L7gxLmyflOx6tZ1X00fxWYg01E"
);

const StripeCheckout = () => {
  const { cart } = useCart(); // Get cart items from your global state

  const handleCheckout = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    const { url } = await response.json();
    window.location.href = url; // Redirect to Stripe checkout
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout} disabled={cart.length === 0}>
        Pay with Stripe
      </button>
    </div>
  );
};

export default StripeCheckout;
