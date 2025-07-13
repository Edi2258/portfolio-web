"use client";
import React from "react";
import { projects } from "@/data";
import { GlareCard } from "./ui/GlareCard";

const Project = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 text-white" id="projects">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-1">
        A small selection of{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">recent projects</span>
      </h1>

      <div className="flex flex-wrap justify-center">
        {projects.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:w-96 w-[80vw]"
          >
            <GlareCard
              containerClassName="lg:min-h-[25.5rem] h-[25rem] w-full flex items-center justify-center mt-10"
              className="flex flex-col items-center justify-center gap-5 text-center p-4 hover:opacity-90 transition-opacity"
            >
              <h2 className="text-xl font-semibold text-white text-center">
                {item.title}
              </h2>

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="text-white/70 text-sm">{item.des}</p>
              <div className="flex gap-3 flex-wrap justify-center">
                {item.iconLists.map((icon, i) => (
                  <img key={i} src={icon} alt="tech" className="w-6 h-6" />
                ))}
              </div>
            </GlareCard>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
