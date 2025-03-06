import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CartProvider } from "./context2/CartContext.jsx"; // Import CartProvider
import NavBar from "./components2/Navbar.jsx"; // Ensure this path is correct
import MyRoutes from "./components2/routing2/MyRoutes.jsx";
import Footer from "./components2/routing2/Footer.jsx"; // Import Footer
//import HomePage from "../src/pages2/HomePage.jsx"//
import "./styles2/Oldstyles.css";

function App() {
  // useEffect(() => {
  //   // Initialize PayPal Buttons after the component mounts
  //   if (window.paypal) {
  //     window.paypal
  //       .Buttons({
  //         style: {
  //           shape: "pill",
  //           layout: "vertical",
  //           color: "gold",
  //           label: "checkout",
  //         },
  //         message: {
  //           amount: 100,
  //         },

  //         async createOrder() {
  //           try {
  //             const response = await fetch("/api/orders", {
  //               method: "POST",
  //               headers: {
  //                 "Content-Type": "application/json",
  //               },
  //               body: JSON.stringify({
  //                 cart: [
  //                   {
  //                     id: "YOUR_PRODUCT_ID",
  //                     quantity: "YOUR_PRODUCT_QUANTITY",
  //                   },
  //                 ],
  //               }),
  //             });

  //             const orderData = await response.json();

  //             if (orderData.id) {
  //               return orderData.id;
  //             }
  //             const errorDetail = orderData?.details?.[0];
  //             const errorMessage = errorDetail
  //               ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
  //               : JSON.stringify(orderData);

  //             throw new Error(errorMessage);
  //           } catch (error) {
  //             console.error(error);
  //             // resultMessage(`Could not initiate PayPal Checkout...<br><br>${error}`);
  //           }
  //         },

  //         async onApprove(data, actions) {
  //           try {
  //             const response = await fetch(
  //               `/api/orders/${data.orderID}/capture`,
  //               {
  //                 method: "POST",
  //                 headers: {
  //                   "Content-Type": "application/json",
  //                 },
  //               }
  //             );

  //             const orderData = await response.json();
  //             const errorDetail = orderData?.details?.[0];

  //             if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
  //               return actions.restart();
  //             } else if (errorDetail) {
  //               throw new Error(
  //                 `${errorDetail.description} (${orderData.debug_id})`
  //               );
  //             } else if (!orderData.purchase_units) {
  //               throw new Error(JSON.stringify(orderData));
  //             } else {
  //               const transaction =
  //                 orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
  //                 orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
  //               resultMessage(
  //                 `Transaction ${transaction.status}: ${transaction.id}<br>
  //                 <br>See console for all available details`
  //               );
  //               console.log(
  //                 "Capture result",
  //                 orderData,
  //                 JSON.stringify(orderData, null, 2)
  //               );
  //             }
  //           } catch (error) {
  //             console.error(error);
  //             resultMessage(
  //               `Sorry, your transaction could not be processed...<br><br>${error}`
  //             );
  //           }
  //         },
  //       })
  //       .render("#paypal-button-container");
  //   }
  // }, []);

  return (
    <CartProvider>
      {/* <PayPalScriptProvider
        options={{
          "client-id":
            "AdVsAfIiMWgcgtgQeyRX6l9o-cVckBXLJ-tgJS3m1HM7sodaLOLMiSqOw67V7K6h_eAcJxEg9nII_pYQ",
          currency: "GBP",
          "enable-funding": "venmo,paylater,card",
        }}
      > */}
      <Router>
        <div className="App">
          <NavBar />
          <div style={{ paddingTop: "60px" }}>
            <h1 className="text-center mb-4 cafe-name">Bean & Ivy Cafe</h1>
            <MyRoutes />
            {/* PayPal Button Container */}
            <div
              id="paypal-button-container"
              style={{ margin: "20px auto", maxWidth: "500px" }}
            ></div>
          </div>
          {/* Footer */}
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
      {/* </PayPalScriptProvider>  */}
    </CartProvider>
  );
}

export default App;
