import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import NavBar from "./components/routing/NavBar";
import MyRoutes from "./components/routing/MyRoutes";
import "./styles.css";

function App() {
  useEffect(() => {
    // Initialize PayPal Buttons after the component mounts
    if (window.paypal) {
      window.paypal
        .Buttons({
          style: {
            shape: "pill",
            layout: "vertical",
            color: "gold",
            label: "checkout",
          },
          message: {
            amount: 100,
          },

          async createOrder() {
            try {
              const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  cart: [
                    {
                      id: "YOUR_PRODUCT_ID",
                      quantity: "YOUR_PRODUCT_QUANTITY",
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
              // resultMessage(`Could not initiate PayPal Checkout...<br><br>${error}`);
            }
          },

          async onApprove(data, actions) {
            try {
              const response = await fetch(
                `/api/orders/${data.orderID}/capture`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              const orderData = await response.json();
              const errorDetail = orderData?.details?.[0];

              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                return actions.restart();
              } else if (errorDetail) {
                throw new Error(
                  `${errorDetail.description} (${orderData.debug_id})`
                );
              } else if (!orderData.purchase_units) {
                throw new Error(JSON.stringify(orderData));
              } else {
                const transaction =
                  orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
                  orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
                resultMessage(
                  `Transaction ${transaction.status}: ${transaction.id}<br>
                  <br>See console for all available details`
                );
                console.log(
                  "Capture result",
                  orderData,
                  JSON.stringify(orderData, null, 2)
                );
              }
            } catch (error) {
              console.error(error);
              resultMessage(
                `Sorry, your transaction could not be processed...<br><br>${error}`
              );
            }
          },
        })
        .render("#paypal-button-container");
    }
  }, []);

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AdVsAfIiMWgcgtgQeyRX6l9o-cVckBXLJ-tgJS3m1HM7sodaLOLMiSqOw67V7K6h_eAcJxEg9nII_pYQ",
        currency: "GBP",
        "enable-funding": "venmo,paylater,card",
      }}
    >
      <Router>
        <div className="App">
          <NavBar />
          <div style={{ paddingTop: "60px" }}>
            <h1 className="text-center mb-4 cafe-name">Bean & Ivy Cafe</h1>
            <MyRoutes />
            <div id="paypal-button-container"></div>
          </div>
        </div>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;
