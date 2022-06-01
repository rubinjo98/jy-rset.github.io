import React from "react";
import "../component-css/Gallery.css";
import Slider from "./Slider";
import { SliderData } from "./SliderData";

function Gallery() {
  return (
    <div className="gallery-page">
      <Slider slides={SliderData} />
    </div>
  );
}

export default Gallery;
