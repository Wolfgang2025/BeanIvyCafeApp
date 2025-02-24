import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { menuItems } from "../data/menuData";

const MenuItems = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="row">
      {menuItems.map((item, index) => (
        <div key={item.id} className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={item.image}
              alt={item.name}
              className="card-img-top menu-image"
              onClick={() => {
                setPhotoIndex(index);
                setLightboxOpen(true);
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text menu-price">£{item.price.toFixed(2)}</p>
              <p className="card-text menu-description">{item.description}</p>
              <Link
                to={`/product/${item.id}`}
                className="btn btn-primary order-button"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      ))}
      {lightboxOpen && (
        <Lightbox
          mainSrc={menuItems[photoIndex].image}
          nextSrc={menuItems[(photoIndex + 1) % menuItems.length].image}
          prevSrc={
            menuItems[(photoIndex + menuItems.length - 1) % menuItems.length]
              .image
          }
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + menuItems.length - 1) % menuItems.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % menuItems.length)
          }
        />
      )}
    </div>
  );
};

export default MenuItems;
