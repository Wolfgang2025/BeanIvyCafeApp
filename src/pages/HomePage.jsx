import React from "react";
import MenuItems from "../components/MenuItems";

export default function HomePage() {
  return (
    <div className="home-page">
      <h2 className="text-center mb-4 cursive-heading">
        Our Eclectic Offerings
      </h2>
      <p className="text-center mb-5 menu-intro">
        Indulge in our carefully curated selection of treats and brews, each
        with a story as rich as its flavour.
      </p>
      <MenuItems />
    </div>
  );
}
