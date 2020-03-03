import React from "react";
import "./portfolio.css";
import "../../index.css"
import Gallery from "../../components/Gallery";
import { portfolio } from "./data";

function Portfolio() {
  return (
    <div className="main mobile-12">
      <div className="content">
        <h1 className="heading">Portfolio</h1>
        <div className="gallery-main">
          {portfolio &&
            portfolio.map(project => <Gallery {...project} key={project.id} />)}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
