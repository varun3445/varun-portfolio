"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const DURATION_MS = 1600;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function Stat({ end, suffix, title }: { end: number; suffix: string; title: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!isInView) return;
    let frameId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const value = Math.round(easeOutCubic(progress) * end);
      if (ref.current) ref.current.textContent = value.toString();
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, end]);

  return (
    <div ref={wrapperRef} className="flex flex-1 flex-col gap-4">
      <p className="font-inter text-7xl font-medium leading-[1.05] tablet:text-8xl desktop:text-[112px]">
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <div className="h-px w-full bg-black" />
      <p className="text-[14px] text-gray-2 desktop:text-[16px]">{title}</p>
    </div>
  );
}
