"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  borderRadius = "1.75rem",
  containerClassName,
  className,
  duration = 2000,
  as: Component = "button",
  borderClassName,
  ...props
}: {
  children: React.ReactNode;
  borderRadius?: string;
  containerClassName?: string;
  className?: string;
  duration?: number;
  borderClassName?: string;
  as?: any;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{ borderRadius }}
      {...props}
    >
      {/* Animated SVG Border */}
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#3275F8_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      {/* Content box */}
      <div
        className={cn(
          "relative bg-darkBlue border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength?.();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
