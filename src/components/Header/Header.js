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
      <div className="header ">
        <span className="link-count-desc">
          Currently updated to:{" "}
          <span className="link-count link-count">
            &nbsp;{source.length} links
          </span>
        </span>
      </div>
    </div>
  );
};

export default HeaderDisplay;
