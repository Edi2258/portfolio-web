"use client"
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { GiClick } from 'react-icons/gi'
import Lottie from 'lottie-react'
import heroAnimation from "@/data/lottiee.json"
import { TextGenerateEffect } from './ui/TextGenerateEfect'
import Buttons from './ui/Buttons'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        gradientFirst="radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, #232D3F 40%, rgba(35, 45, 63, 0.2) 80%, transparent 100%)"
        gradientSecond="radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 0%, #232D3F 60%, transparent 100%)"
        gradientThird="radial-gradient(circle at center, rgba(255, 255, 255, 0.06) 0%, #232D3F 80%, transparent 100%)"
        width={180}            // Semakin kecil, semakin lurus
        smallWidth={80}
        height={1000}          // Semakin tinggi, makin seperti lampu sorot
        xOffset={30}           // Gerakan kiri-kanannya kecil
        translateY={-200}      // Mulai dari lebih atas
        duration={7}
        />
      <div>
        <div className="flex h-[50rem] w-full items-center justify-center bg-white dark:bg-darkBlue absolute top-0 left-0">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:60px_60px]",
              "[background-image:radial-gradient(#d4d4d4_2px,transparent_2px)]",
              "dark:[background-image:radial-gradient(#404040_2px,transparent_2px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-darkBlue" />
        </div>
      </div>
       <div className='flex flex-col md:flex-row items-center justify-center relative my-20 z-10 gap-10'>
        {/* Lottie animation */}
        <div className="w-48 md:w-72 lg:w-96">
          <Lottie animationData={heroAnimation} loop={true} />
        </div>

        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            My Portfolio
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px]"
            words="HALLO EVERYONE!, WELCOME TO MY PORTFOLIO"
            duration={5}
            filter
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white'>
            I&apos;am Edi Junaedi, a Junior Programmer.
          </p>
          <a href="#about">
            <Buttons title="Show my work" icon={<GiClick />} position='right' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero