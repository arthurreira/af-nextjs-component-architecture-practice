"use client";

import { type MotionStyle, motion, type Transition, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export interface BorderBeamProps {
  /**
   * The size of the border beam.
   */
  size?: number;
  /**
   * The duration of the border beam.
   */
  duration?: number;
  /**
   * The delay of the border beam.
   */
  delay?: number;
  /**
   * The color of the border beam from.
   */
  colorFrom?: string;
  /**
   * The color of the border beam to.
   */
  colorTo?: string;
  /**
   * The motion transition of the border beam.
   */
  transition?: Transition;
  /**
   * The class name of the border beam.
   */
  className?: string;
  /**
   * The style of the border beam.
   */
  style?: React.CSSProperties;
  /**
   * Whether to reverse the animation direction.
   */
  reverse?: boolean;
  /**
   * The initial offset position (0-100).
   */
  initialOffset?: number;
  /**
   * The border width of the beam.
   */
  borderWidth?: number;
}

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "var(--primary)",
  colorTo = "var(--accent)",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="border-(length:--border-beam-width) pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
      style={
        {
          "--border-beam-width": `${borderWidth}px`,
        } as React.CSSProperties
      }
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                offsetDistance: reverse
                  ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
                  : [`${initialOffset}%`, `${100 + initialOffset}%`],
              }
        }
        className={cn(
          "absolute aspect-square",
          "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
          className
        )}
        initial={{ offsetDistance: `${initialOffset}%` }}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            ...style,
          } as MotionStyle
        }
        transition={{
          repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
          ease: "linear",
          duration: shouldReduceMotion ? 0 : duration,
          delay: shouldReduceMotion ? 0 : -delay,
          ...transition,
        }}
      />
    </div>
  );
};
