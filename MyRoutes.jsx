import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import HomePage from "../../pages2/HomePage";
import MenuPage from "../../pages2/MenuPage";
import ProductPage from "../../pages2/ProductPage";
import CheckoutPage from "../../pages2/CheckoutPage";
import AboutUs from "../../pages2/AboutUs";
import Contact from "../../pages2/Contact";
import OrderingTCs from "../../pages2/OrderingTCs";
import PrivacyPolicy from "../../pages2/PrivacyPolicy";
import Footer from "./Footer";

const MyRoutes = ({ cartItems, addToCart, updateQuantity, removeItem }) => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/menu"
            element={<MenuPage cartItems={cartItems} addToCart={addToCart} />}
          />
          <Route path="/product/:id/" element={<ProductPage />} />
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orderingtcs" element={<OrderingTCs />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default MyRoutes;