import React, { useEffect, useState } from "react";
//Use useEffect when you need to perform side effects (e.g., fetching data, updating the DOM, or managing subscriptions).
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//Use BrowserRouter, Routes, and Route when you need to set up routing in your app (e.g., navigating between pages).
import { CartProvider } from "./context2/CartContext.jsx"; // Import CartProvider
import MyRoutes from "./components2/routing2/MyRoutes.jsx";
import "./styles2/styles.css";

function App() {
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
      <div className="App">
        <div style={{ paddingTop: "150px", paddingLeft: "80px" }}>
          {/* <h1 className="text-center mb-4 cafe-name">Bean & Ivy Cafe</h1> */}
          <MyRoutes />
          {/* PayPal Button Container */}
          <div
            id="paypal-button-container"
            style={{ margin: "20px auto", maxWidth: "500px" }}
          ></div>
        </div>
      </div>
      {/* </PayPalScriptProvider>  */}
    </CartProvider>
  );
}

export default App;
