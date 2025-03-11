import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckOutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setMessage(error.message);
    } else {
      // Send payment details to backend
      const response = await fetch(
        "http://localhost:5000/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            amount: 500,
          }), // Example: $5.00
        }
      );

      const { clientSecret } = await response.json();
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret);

      if (confirmError) {
        setMessage(confirmError.message);
      } else if (paymentIntent.status === "succeeded") {
        setMessage("✅ Payment successful! 🎉");
      }
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Checkout Page</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default CheckOutPage;
