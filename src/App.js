import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StripeProvider } from "./context2/StripeContext.jsx";
import MyRoutes from "./components2/routing2/MyRoutes.jsx"; // MyRoutes now handles routing
import Checkout from "./pages2/CheckoutPage.jsx";
import MenuItem from "../src/components2/MenuItem.jsx";
import "./styles2/styles.css";

const App = () => {
  return (
    <StripeProvider>
      <Router>
        <div className="App">
          <div style={{ paddingTop: "150px", paddingLeft: "80px" }}>
            {/* <h1 className="text-center mb-4 cafe-name">Bean & Ivy Cafe</h1> */}
            <MyRoutes /> {/* MyRoutes now handles all routing */}
          </div>
        </div>
      </Router>
    </StripeProvider>
  );
};

export default App;
