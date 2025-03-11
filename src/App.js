import React, { useState } from "react";
import { CartProvider } from "./context2/CartContext.jsx"; // Import CartProvider
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./components2/routing2/MyRoutes.jsx"; // MyRoutes now handles routing
import MenuItem from "../src/components2/MenuItem.jsx";

import "./styles2/styles.css";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div style={{ paddingTop: "150px", paddingLeft: "80px" }}>
          <MyRoutes />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
