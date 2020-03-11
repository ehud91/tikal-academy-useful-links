import React from "react";
import Link from "../components/Link/Link";

/**
 * Display single link
 */
export default function generateLink(ind, url, desc, title, tag) {
  return <Link id={++ind} url={url} desc={desc} title={title} tag={tag} />;
}
