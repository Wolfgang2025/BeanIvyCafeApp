import React from "react";
import { useStripeCart } from "../context2/StripeContext";

const Checkout = () => {
  const { cart } = useStripeCart();

  const handleCheckout = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    const { url } = await response.json();
    window.location.href = url; // Redirect to Stripe checkout page
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout} disabled={cart.length === 0}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default Checkout;
