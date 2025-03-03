import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  const createOrder = async (data, actions) => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: [
            {
              id: "YOUR_PRODUCT_ID", // Replace with your product ID
              quantity: "YOUR_PRODUCT_QUANTITY", // Replace with your product quantity
            },
          ],
        }),
      });

      const orderData = await response.json();

      if (orderData.id) {
        return orderData.id;
      }

      const errorDetail = orderData?.details?.[0];
      const errorMessage = errorDetail
        ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
        : JSON.stringify(orderData);

      throw new Error(errorMessage);
    } catch (error) {
      console.error(error);
      alert("Could not initiate PayPal Checkout. Please try again.");
    }
  };

  const onApprove = async (data, actions) => {
    try {
      const response = await fetch(`/api/orders/${data.orderID}/capture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const orderData = await response.json();
      const errorDetail = orderData?.details?.[0];

      if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
        // Recoverable INSTRUMENT_DECLINED -> call actions.restart()
        return actions.restart();
      } else if (errorDetail) {
        // Non-recoverable error
        throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
      } else if (!orderData.purchase_units) {
        throw new Error(JSON.stringify(orderData));
      } else {
        // Successful transaction
        const transaction =
          orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
          orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
        alert(`Transaction ${transaction.status}: ${transaction.id}`);
        console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
      }
    } catch (error) {
      console.error(error);
      alert("Sorry, your transaction could not be processed. Please try again.");
    }
  };

  const onError = (error) => {
    console.error("PayPal error:", error);
    alert("An error occurred during the payment process. Please try again.");
  };

  return (
    <div id="paypal-button-container">
      <PayPalButtons
        style={{
          shape: "pill",
          layout: "vertical",
          color: "gold",
          label: "paypal",
        }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </div>
  );
};

export default PayPalButton;
