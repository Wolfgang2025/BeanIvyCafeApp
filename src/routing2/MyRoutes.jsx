import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CheckoutPage from "../../pages/CheckoutPage";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import OrderingTCs from "../pages/OrderingTCs";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/orderingtcs" element={<OrderingTCs />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default MyRoutes;
