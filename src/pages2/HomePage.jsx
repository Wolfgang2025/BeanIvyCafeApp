import React, { useEffect, useState } from "react";
import "../styles2/HomePage.css";

export default function HomePage() {
  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHello(true);
    }, 1000);
  }, []);

  return (
    <div className="page-container">
      <h1 className="cursive-heading"></h1>
      <div className="about-us">
        <h2 className="text-center mb-4 cursive-heading">Welcome to your perfect coffee escape!</h2>
        <p className="text-center mb-5 menu-intro">
          Where great memories begin with indulgent treats and brews. Our
          carefully curated selection of treats and brews each have a story as
          rich as their flavour. Enjoy our menu and make your selection.
        </p>
      </div>
      {showHello && (
        <div className="hello-message">
          Hello!
        </div>
      )}
    </div>
  );
}