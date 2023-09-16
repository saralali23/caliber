"use client";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 75 },
};

export const Animate = ({ name, image }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    //  else {
    //   control.start("hidden");
    // }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className={`w-full min-h-[300px] max-h-[400px] h-full text-white bg-cover bg-center flex justify-center items-end rounded-md`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h3 className="text-xl font-bold w-[80%] text-center mb-2 capitalize">
        {name}
      </h3>
    </motion.div>
  );
};
