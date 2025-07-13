import { companies } from "@/data";
import React from "react";
import { FaNodeJs, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { Vortex } from "./ui/Vortex";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-white p-4 relative overflow-hidden mt-30">
      {/* Headline */}
      <h1 className="text-2xl md:text-4xl font-light text-center">
        I&apos;m passionate about programming and looking for an opportunity to work{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
          with a cross-functional
        </span>{" "}
         team
      </h1>
      <p className="text-sm md:text-base mt-2 text-center">
       that values accessibility and creates technology with a positive impact
      </p>

      I’m passionate about programming and looking for an opportunity to work with a cross-functional team that values accessibility and creates technology with a positive impact.
        
      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <TbBrandCSharp size={40} />
        <FaNodeJs size={40} />
        <FaJs size={40} />
        <SiTypescript size={40} />
        <SiTailwindcss size={40} />
        <SiMongodb size={40} />
        <SiExpress size={40} />
        
        
        {/* Tambahkan ikon lain jika perlu */}
      </div>

      {/* Planet with glow and orbit */}
     <div 
  className="relative flex items-center justify-center mt-100"
>
  {/* Orbit (vortex) di belakang */}
  <div className="absolute w-[300px] h-[300px] border border-purple-500/30 rounded-full animate-spin-slow"></div>
  <div className="absolute w-[500px] h-[500px] border border-purple-500/30 rounded-full animate-spin-slow"></div>
  <div className="absolute w-[800px] h-[800px] border border-purple-500/30 rounded-full animate-spin-slow"></div>

  {/* Planet (Σ) di atas */}
  <Vortex 
  className="relative z-10 w-40 h-40 bg-purple-700/50 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.6)] animate-pulse text-6xl"
   backgroundColor="transparent"
  >
    Σ
  </Vortex>
</div>

      

       <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-100">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
    </section>
  );
}
