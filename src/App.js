import React, { useState } from "react";
import "./styles.css";
import Link from "./logic/links";
import Tags from "./logic/tags";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Source from "../data/mock";

/**
 * App Main Component
 */
export default function App() {
  const [tag, setTag] = useState("");

  // Tags handle clicks
  const clickbtn = tag => {
    Tags().changeTag(tag, setTag);
  };

  return (
    <div className="App">
      <Header source={Source} handleClick={clickbtn} />
      {tag &&
        Source.filter(src => src.tag === "#" + tag).map((src, ind) => {
          return Link(ind, src.url, src.desc, src.title, src.tag);
        })}
      {!tag &&
        Source.map((src, ind) => {
          return Link(ind, src.url, src.desc, src.title, src.tag);
        })}
      <Footer />
    </div>
  );
}
