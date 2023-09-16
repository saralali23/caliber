"use client";
import React from "react";
import { Review } from "./Review";

const reviews = [
  {
    name: "Vivek.S",
    review: `I personally fell this gym has enough space and equipment are really suitable for the workout`,
  },
  {
    name: "senthil murugan",
    review: `Fully Air Conditioned Fitness center with nominal price. I noticed flexible membership options available. Definitely recommend this fitness center for all genders. Brand New Fitness Center, very well equipped and user friendly trainer.`,
  },
  {
    name: "jagan nathan",
    review: `One of the best gym in pondicherry, all equipments are brand new. Trainers are very friendly and there training schedule are good.`,
  },
  {
    name: "Radhika Senthil",
    review: `The Gym looks neat and clean especially it’s Spacious. I loved the separate floor for Cardio workouts. It’s located in prime location nearby to reach out there easily. Loved the overall experience`,
  },
];

export const Reviews = () => {
  const slides = [1, 2, 3, 4];
  const [slide, setSlide] = React.useState(1);
  return (
    <section className="my-16">
      <div>
        <h3 className="text-4xl font-bold text-center">Customer feedback</h3>
      </div>
      <div className="carousel w-full gap-5 mt-10">
        <div id="slide1" className="carousel-item relative w-full">
          <Review {...reviews[0]} />
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Review {...reviews[1]} />
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Review {...reviews[2]} />
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Review {...reviews[3]} />
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-5">
        <a
          href={`#slide${slide}`}
          onClick={() => {
            console.log(slide);
            setSlide(slide == 1 ? 4 : slide - 1);
          }}
          className="btn btn-circle btn-primary"
        >
          ❮
        </a>
        <a
          href={`#slide${slide}`}
          onClick={() => {
            console.log(slide);
            setSlide(slide == 4 ? 1 : slide + 1);
          }}
          className="btn btn-circle btn-primary"
        >
          ❯
        </a>
      </div>
    </section>
  );
};
