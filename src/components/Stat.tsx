"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

export function Stat({ end, suffix, title }: { end: number; suffix: string; title: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, end, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toString();
      },
    });
    return () => controls.stop();
  }, [isInView, end]);

  return (
    <div ref={wrapperRef} className="flex flex-1 flex-col gap-4">
      <motion.p className="font-inter text-7xl font-medium leading-[1.05] tablet:text-8xl desktop:text-[112px]">
        <span ref={ref}>0</span>
        {suffix}
      </motion.p>
      <div className="h-px w-full bg-black" />
      <p className="text-sm text-gray-2">{title}</p>
    </div>
  );
}
