import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import NavBar from "./components/routing/NavBar";
import MyRoutes from "./components/routing/MyRoutes";
import PayPalButton from "./components/PayPalButton"; // Import the PayPalButton component
import "./styles.css";

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AdVsAfIiMWgcgtgQeyRX6l9o-cVckBXLJ-tgJS3m1HM7sodaLOLMiSqOw67V7K6h_eAcJxEg9nII_pYQ", // Replace with your actual PayPal client ID
        currency: "GBP", // Set currency to GBP
        "enable-funding": "venmo,paylater,card", // Enable additional funding sources
      }}
    >
      <Router>
        <div className="App">
          <NavBar />
          <div style={{ paddingTop: "60px" }}>
            <h1 className="text-center mb-4 cafe-name">Bean & Ivy Cafe</h1>
            <MyRoutes />
            {/* Add the PayPalButton component */}
            <div style={{ margin: "20px auto", maxWidth: "500px" }}>
              <PayPalButton />
            </div>
          </div>
        </div>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;
