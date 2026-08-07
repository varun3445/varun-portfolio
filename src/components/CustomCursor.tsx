"use client";

import { createContext, useContext, useEffect, useState } from "react";
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
  { size: number; className: string; label?: string }
> = {
  // None of these use mix-blend-difference in the source - that was a mistaken
  // addition that produced a harsh inverted "xray" look instead of the soft
  // frosted-glass circle the real site has.
  default: { size: 30, className: "border-2 border-[rgb(201,201,201)]" },
  work: {
    size: 125,
    className:
      "border-2 border-transparent bg-white/15 backdrop-blur-sm shadow-[inset_0_0_3px_rgba(255,255,255,0.25)]",
    label: "View",
  },
  cta: { size: 125, className: "border-2 border-transparent bg-transparent" },
};

export function CustomCursorProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 40, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40, mass: 1 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    // Scrolling moves content under a stationary pointer without firing any
    // mouseenter/mouseleave events, so a variant set by hovering a card can
    // get stuck after the page scrolls the card away. Re-check what's
    // actually under the pointer after each scroll and reset if it's no
    // longer a cursor-target element.
    const rescan = () => {
      const el = document.elementFromPoint(mouseX.get(), mouseY.get());
      if (!el?.closest("[data-cursor]")) setVariant("default");
    };

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    window.addEventListener("scroll", rescan, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      window.removeEventListener("scroll", rescan);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = VARIANT_STYLES[variant];

  return (
    <CursorContext.Provider value={{ setVariant }}>
      {children}
      <motion.div
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full md:flex ${style.className}`}
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
    </CursorContext.Provider>
  );
}
