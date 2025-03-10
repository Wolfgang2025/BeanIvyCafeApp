import React from "react";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "../../pages2/HomePage";
import MenuPage from "../../pages2/MenuPage";
import ProductPage from "../../pages2/ProductPage";
import CheckoutPage from "../../pages2/CheckoutPage";
import AboutUs from "../../pages2/AboutUs";
import Contact from "../../pages2/Contact";
import OrderingTCs from "../../pages2/OrderingTCs";
import PrivacyPolicy from "../../pages2/PrivacyPolicy";
import Footer from "./Footer";
import "../../styles2/styles.css";

const MyRoutes = () => {
  return (
    <>
      <Router>
        <div className="nav-routes-container">
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/MenuPage" element={<MenuPage />} />
            {/* TBR - is the ProductPage still needed and if so, is the path correct? */}
            <Route path="/product/:id/" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/orderingtcs" element={<OrderingTCs />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default MyRoutes;
