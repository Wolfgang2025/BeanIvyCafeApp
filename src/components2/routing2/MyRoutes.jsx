import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../routing2/NavBar"; //The Navbar is rendered above the <Routes> component, so it appears on all pages.
import HomePage from "../../pages2/HomePage";
import MenuPage from "../../pages2/MenuPage";
import ProductPage from "../../pages2/ProductPage";
import CheckoutPage from "../../pages2/CheckoutPage"; // Adjust the import path as needed
import AboutUs from "../../pages2/AboutUs";
import Contact from "../../pages2/Contact";
import OrderingTCs from "../../pages2/OrderingTCs";
import PrivacyPolicy from "../../pages2/PrivacyPolicy";
import Footer from "./Footer";

const MyRoutes = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          {/* The path="/menu" matches the to="/menu" in the NavLink.
              The element={<MenuPage />} specifies that the MenuPage component should be rendered when the /menu path is accessed. */}
          {/* TBR - is the ProductPage still needed and if so, is the path correct? */}
          <Route path="/product/:id/" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
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
