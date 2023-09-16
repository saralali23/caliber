import Image from "next/image";
import { Animate } from "./animate";

const services = [
  {
    name: "Personal training for male and female",
    image: "/service/trainer.webp",
  },
  {
    name: " Fitness program",
    image: "/service/fitness-program.webp",
  },
  {
    name: "Aerobic/Yoga",
    image: "/service/yoga.webp",
  },
  {
    name: "Cross fit",
    image: "/service/cross-fit.webp",
  },
  {
    name: "obesity management",
    image: "/service/obesity.webp",
  },
  {
    name: "Body building",
    image: "/service/body-building.webp",
  },
  {
    name: "Weight training",
    image: "/service/weight-training.webp",
  },
  {
    name: "Steam bath",
    image: "/service/steam-bath.webp",
  },
  {
    name: "Diet counselling",
    image: "/service/diet.webp",
  },
  {
    name: "Physiotherapy advice",
    image: "/service/physiotherapy.webp",
  },
  {
    name: "Zumba classes",
    image: "/service/zumba.webp",
  },
];

export const Services = () => {
  return (
    <section className="w-full h-full mt-16" id="services">
      <div>
        <h3 className="text-4xl font-bold text-center">Services</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {services.map(({ name, image }) => (
          <Animate name={name} image={image} />
        ))}
      </div>
    </section>
  );
};
