import React from "react";
import "./gallery.css";

function Gallery({ title, url, image, ghUrl }) {
  return (
    <div className="gallery">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={`/${image}`}
          className= "image"
          alt={`${title} screenshot`}
        />
      </a>
      <div className="text">
        <a
          href={ghUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
    </div>
  );
}

export default Gallery;