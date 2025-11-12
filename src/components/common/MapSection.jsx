import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <a
        href="https://www.google.com/maps/place/1309+Coffeen+Ave,+Sheridan,+WY+82801,+USA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../../public/assets/images/Map.png"
          alt="WBF Steel Office Location Map"
          className="map-image"
        />
      </a>
    </section>
  );
};

export default MapSection;
