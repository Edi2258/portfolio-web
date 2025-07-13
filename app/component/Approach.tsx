"use client"
import React from "react"
import { EvervaultCard, Icon } from "./ui/EverCard"

const Approach = () => {
  return (

      <div className="py-20 w-full" id="approach">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-neutral-900 dark:text-white">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Approach</span>
          </h1>
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] mt-20">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <EvervaultCard text="Thrive" />
 
      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        Building, collaborating, and embracing challenges to keep growing as a programmer..
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Programmer
      </p>
    </div>
    </div>
  )
}

export default Approach