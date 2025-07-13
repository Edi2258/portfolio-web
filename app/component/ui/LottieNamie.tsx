"use client";

import React from "react";
import Lottie from "lottie-react";
import bolaa from "@/data/bolaa.json"
export const LottieAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <Lottie animationData={bolaa} loop autoplay className="w-full h-full max-h-60" />
    </div>
  );
};
