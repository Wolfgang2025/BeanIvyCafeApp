import React from "react";

const HomePage = () => {
  return (
    <>
      {/* Welcome Section */}
      <div className="welcome-section text-center mb-6">
        <h1 className="cursive-heading">
          ☕Welcome to Bean & Ivy: Where Every Cup Tells a Story🌿
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

      {/* Eclectic Offerings Section */}
      <div className="text-center mb-4">
        <h2 className="cursive-heading">✨ Our Eclectic Offerings ✨</h2>
        <p className="menu-intro">
          <strong>Indulge</strong> in our carefully curated selection of artisan
          coffee, handcrafted teas, and irresistible treats—each with a story as
          rich as its flavour. From bold espresso blends to delicate pastries,
          every sip and bite is a journey worth savouring.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section text-center">
        <p className="menu-intro">
          <strong>Come in, take a seat</strong>, and let the warm ambience,
          friendly smiles, and exceptional brews turn your visit into a moment
          of pure joy.
        </p>
        <p className="menu-intro">
          <strong>☕ Your perfect cup is waiting at Bean & Ivy!</strong>
        </p>
      </div>
    </>
  );
};

export default HomePage;
