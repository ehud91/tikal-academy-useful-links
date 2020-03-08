import React from "react";
import Filters from "../Filters/Filters";
import "./header.css";

/**
 * Display Header component
 */
const HeaderDisplay = ({ source, handleClick }) => {
  return (
    <div>
      <h1>Tikal Academy Useful Links</h1>
      <h2>Links from the Course: </h2>
      <div>
        <Filters source={source} clickTag={handleClick} />
      </div>
    </div>
  );
};

export default HeaderDisplay;
