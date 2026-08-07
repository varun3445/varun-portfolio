"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export function Stat({ end, suffix, title }: { end: number; suffix: string; title: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 30, stiffness: 90 });

  useEffect(() => {
    if (isInView) motionValue.set(end);
  }, [isInView, end, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString();
    });
  }, [spring]);

  return (
    <div className="flex flex-1 flex-col gap-4">
      <motion.p className="font-inter text-7xl font-medium leading-[1.05] tablet:text-8xl desktop:text-[112px]">
        <span ref={ref}>0</span>
        {suffix}
      </motion.p>
      <div className="h-px w-full bg-black" />
      <p className="text-sm text-gray-2">{title}</p>
    </div>
  );
}
