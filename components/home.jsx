import Image from "next/image";
import React from "react";

export const Home = () => {
  return (
    <div className="w-full bg-no-repeat bg-[url('/home2.png')] bg-cover h-full">
      <div className="max-w-6xl mx-auto flex md:flex-row flex-col items-center min-h-[80vh] md:gap-5 justify-center h-full text-white w-full px-3 py-4 gap-2">
        <div className=" w-full md:w-[50%]">
          <Image
            src="/logo-500.png"
            alt="Caliber Fitness"
            width={500}
            height={500}
            className="rounded-md w-full"
          />
        </div>
        <div className="w-full md:w-[50%] text-lg">
          <h1 className="text-4xl md:text-6xl mb-4 font-bold">
            Caliber Fitness
          </h1>
          <p>
            Caliber fitness Center is a unisex fitness center that focuses on a
            holistic approach to the mind and body. Our inclusive approach
            ensures that we cater to all levels of fitness enthusiasts. Whether
            you're a beginner or an experienced fitness enthusiast, we have
            something for everyone.
          </p>
          <p className="mt-3">
            Our fitness center is spread 4000 square feet, and has separate
            floors for strengthening, cardiac and other fitness activities.
          </p>
          <p className="mt-3">
            Our State-of-the-art equipment, expert trainers and a variety of
            classes including CrossFit, Yoga, and Zumba make us the perfect
            place to achieve your fitness goals. Join us today and become a part
            of our fitness community.
          </p>
        </div>
      </div>
    </div>
  );
};
