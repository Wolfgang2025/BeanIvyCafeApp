import React from "react";
import { CartProvider } from "./context2/CartContext.jsx"; // Import CartProvider
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./components2/routing2/MyRoutes.jsx"; // MyRoutes now handles routing
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
          <MyRoutes /> {/* MyRoutes now handles all routing */}
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
