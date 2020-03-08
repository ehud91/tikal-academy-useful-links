import React, { useState, useEffect } from "react";
import Tags from "../../logic/tags";
import "./filters.css";

/**
 * Display Filters Buttons component
 */
const FiltersDisplay = ({ source, clickTag }) => {
  const [tagLinks, setTagLinks] = useState([]);

  // In the initialization time, build tags filters buttons from source
  useEffect(() => {
    const tags = Tags().getTagsMap(source);
    setTagLinks(Tags().headerLinks(tags, setTagLinks));
  }, [source]);

  return (
    <div className="tagLinks">
      <ul>
        <li
          key={0}
          value="all"
          className="button"
          onClick={e => clickTag("all")}
        >
          All
        </li>
        {tagLinks.map(lnk => {
          return (
            <li
              id={lnk.id}
              key={lnk.id}
              value={lnk.tag}
              className="button"
              onClick={e => clickTag(lnk.tag)}
            >
              {lnk.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FiltersDisplay;
