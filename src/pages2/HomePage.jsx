import React from "react";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Welcome Section */}
      <div className="welcome-section text-center mb-6">
        <h1 className="cursive-heading">
          ☕ Welcome to Bean & Ivy: Where Every Cup Tells a Story 🌿
        </h1>
        <p className="menu-intro">
          Step into <strong>Bean & Ivy</strong>, a haven where flavours, aromas,
          and stories intertwine to create a{" "}
          <strong>one-of-a-kind coffee experience</strong>. Whether you're here
          for a perfectly brewed espresso, a comforting cup of tea, or a sweet
          treat to brighten your day,{" "}
          <strong>
            our menu is thoughtfully crafted to delight your senses
          </strong>
          .
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section text-center">
        <p className="menu-intro">
          <strong>Come in, take a seat</strong>, and let the warm ambience,
          friendly smiles, and exceptional brews turn your visit into a moment
          of pure joy.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
