"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  once?: boolean;
};

export function Reveal({ children, className, y = 60, delay = 0, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0, margin: "0px 0px 200px 0px" }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 1, delay }}
    >
      {children}
    </motion.div>
  );
}
