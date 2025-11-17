import React from "react";
import "./MapSection.css";
import map from "../../assets/images/Map.png"

const MapSection = () => {
  return (
    <section className="map-section">
      <a
        href="https://www.google.com/maps/place/1309+Coffeen+Ave,+Sheridan,+WY+82801,+USA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src= {map}
          alt="WBF Steel Office Location Map"
          className="map-image"
        />
      </a>
    </section>
  );
};

export default MapSection;
