import React from "react";
import "./link.css";

/**
 * Display Links component
 */
const LinkDisplay = info => {
  const { id, url, title, desc, tag } = info;
  return (
    <div key={id} className="link-item">
      <div key={id}>
        <span className="number">
          <b>{id}.</b>&nbsp;
        </span>
        <a href={url} target="_blank" className="a-link">
          {title}
        </a>{" "}
        <br />
        <br />
        <span className="a-link-desc">
          <b className="desc-title">Link</b>
        </span>
        <span className="a-link-desc-url">
          <a href={url} target="_blank" className="a-link-desc-url">
            {url}
          </a>
        </span>
        <br />
        <br />
        <div style={{ width: "50%" }}>
          <span className="desc">
            <b className="desc-title">Description</b>
            <br />
            <br />
          </span>
          <span className="desc-info">{desc}</span>
        </div>
        <div style={{ width: "50%" }}>
          <br />
          <span className="desc-tag-title">
            <b>Tag</b>
          </span>
          <br />
          <br />
          <span className="desc-tag">{tag}</span>
        </div>
      </div>
    </div>
  );
};

export default LinkDisplay;
