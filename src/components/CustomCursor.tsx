"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "work" | "cta";

const CursorContext = createContext<{
  setVariant: (v: CursorVariant) => void;
}>({ setVariant: () => {} });

export function useCursor() {
  return useContext(CursorContext);
}

const VARIANT_STYLES: Record<
  CursorVariant,
  { size: number; className: string; label?: string; blend?: boolean }
> = {
  default: { size: 30, className: "border-2 border-[rgb(201,201,201)]" },
  work: {
    size: 125,
    className:
      "border-2 border-transparent bg-white/15 backdrop-blur-sm shadow-[inset_0_0_3px_rgba(255,255,255,0.25)]",
    label: "View",
    blend: true,
  },
  cta: { size: 125, className: "border-2 border-transparent bg-transparent", blend: true },
};

export function CustomCursorProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 40, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40, mass: 1 });
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch.current) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY, visible]);

  const style = VARIANT_STYLES[variant];

  return (
    <CursorContext.Provider value={{ setVariant }}>
      {children}
      {!isTouch.current && (
        <motion.div
          aria-hidden
          className={`pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full md:flex ${style.blend ? "mix-blend-difference" : ""} ${style.className}`}
          style={{
            x: springX,
            y: springY,
            width: style.size,
            height: style.size,
            opacity: visible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 60 }}
        >
          {style.label && (
            <span className="text-lg font-semibold text-white">{style.label}</span>
          )}
        </motion.div>
      )}
    </CursorContext.Provider>
  );
}
