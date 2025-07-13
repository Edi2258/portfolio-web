import React from "react";
import { workExperience } from "@/data";
import { HoverBorderGradient } from "./ui/GradientBorder";
import { span } from "framer-motion/client";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-neutral-900 dark:text-white">
        My work <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-15">
        {workExperience.map((card) => (
          <HoverBorderGradient
            key={card.id}
            duration={Math.floor(Math.random() * 8000) + 6000} // between 6s–14s
            borderRadius="1.75rem"
            containerClassName="w-full h-full"
            className="flex lg:flex-row flex-col lg:items-center p-5 gap-2 w-full h-full"
          >
            <img
              src={card.thumbnail}
              alt={card.thumbnail}
              className="lg:w-24 md:w-20 w-16"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                {card.title}
              </h1>
              <p className="text-start text-white/80 mt-2 font-medium text-sm">
                {card.desc}
              </p>
            </div>
          </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
};

export default Experience;
