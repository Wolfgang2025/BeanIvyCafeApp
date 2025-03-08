import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPayment = () => {
  // PayPal configuration options
  const initialOptions = {
    "client-id":
      "AdVsAfIiMWgcgtgQeyRX6l9o-cVckBXLJ-tgJS3m1HM7sodaLOLMiSqOw67V7K6h_eAcJxEg9nII_pYQ", // Replace with your PayPal Client ID
    currency: "GBP", // Currency code (e.g., GBP, USD, EUR)
    intent: "capture", // Payment intent (capture or authorize)
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          // Create an order on the server or client side
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "10.00", // Replace with your order amount
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          // Capture the payment after approval
          return actions.order.capture().then((details) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
            console.log("Payment details:", details);
          });
        }}
        onError={(error) => {
          // Handle payment errors
          console.error("PayPal error:", error);
          alert("An error occurred during the payment process.");
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
