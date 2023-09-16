"use client";
import React from "react";
import { Review } from "./Review";

export const Reviews = () => {
  const slides = [1, 2, 3, 4];
  const [slide, setSlide] = React.useState(1);
  return (
    <section className="my-16">
      <div>
        <h3 className="text-4xl font-bold text-center">Customer feedback</h3>
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          {/* <Review /> */}
          <p>1</p>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          {/* <Review /> */}
          <p>2</p>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          {/* <Review /> */}
          <p>3</p>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          {/* <Review /> */}
          <p>4</p>
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <a
          href={`#slide${slide}`}
          onClick={() => {
            console.log(slide);
            setSlide(slide == 1 ? 4 : slide - 1);
          }}
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href={`#slide${slide}`}
          onClick={() => {
            console.log(slide);
            setSlide(slide == 4 ? 1 : slide + 1);
          }}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </section>
  );
};
