import React from "react";
import { CartProvider } from "./context2/CartContext"; // ✅ Import CartProvider
import MyRoutes from "./components2/routing2/MyRoutes"; // ✅ Routing Component
import Navbar from "./components2/routing2/NavBar"; // ✅ Include Navbar
import "./styles2/styles.css";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar /> {/* ✅ Ensure NavBar is included */}
        <div style={{ marginLeft: "250px", padding: "20px" }}>
          <MyRoutes /> {/* ✅ Ensure MyRoutes contains Router */}
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
