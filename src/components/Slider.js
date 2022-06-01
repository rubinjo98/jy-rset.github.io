import React, { useState } from "react";
import "../component-css/Slider.css";
import { SliderData } from "./SliderData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //   console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="team-page">
      <section className="slider">
        <FaAngleLeft className="left-arrow" onClick={prevSlide} />
        <FaAngleRight className="right-arrow" onClick={nextSlide} />

        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  className="slider-img"
                  src={slide.image}
                  alt="team-slides"
                />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Slider;
