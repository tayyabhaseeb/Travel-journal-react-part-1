import React from "react";

export default function Main() {
  return (
    <div className="main-container">
      <img
        src="https://source.unsplash.com/WLxQvbMyfas"
        className="largeImage"
      />
      <div className="child-two">
        <div className="location-cont">
          <i className="fa-solid fa-location-dot loco-icon"></i>
          <p className="country">J A P A N</p>
          <a className="google-maps" href="#">
            View on Google Maps
          </a>
        </div>
        <h2 className="mount">Mount Fauji</h2>
        <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="desc">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
