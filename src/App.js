import React from "react";
import { CartProvider } from "./context2/CartContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./components2/routing2/MyRoutes.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cart from "../src/components2/Cart.jsx";
import "./styles2/styles.css";

// Load Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51R1Fk3QvE4dQz98ssrKWTzpenLP3pVy5lCEjduQ27FhRehh7HdZujgKh7UWGIHWgFXzKWj11L7gxLmyflOx6tZ1X00fxWYg01E"
);

function App() {
  return (
    <CartProvider>
      <Elements stripe={stripePromise}>
        <Router>
          <div className="App">
            <div style={{ paddingTop: "150px", paddingLeft: "80px" }}>
              <MyRoutes /> {/* This will render CheckOutPage inside routing */}
            </div>
          </div>
        </Router>
      </Elements>
    </CartProvider>
  );
}

export default App;
