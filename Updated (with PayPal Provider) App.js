import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import NavBar from "./components/routing/NavBar";
import MyRoutes from "./components/routing/MyRoutes";
import "./styles.css";

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AdVsAfIiMWgcgtgQeyRX6l9o-cVckBXLJ-tgJS3m1HM7sodaLOLMiSqOw67V7K6h_eAcJxEg9nII_pYQ",
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
          </div>
        </div>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;
