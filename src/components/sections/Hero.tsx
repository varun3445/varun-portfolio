"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-6 pb-16 pt-40 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 60, delay: 0.2 }}
          className="font-clash text-4xl font-medium capitalize leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="text-gray-1">I am Varun, </span>
          <span className="text-black">
            a multidisciplinary designer specialising in end-to-end product creation{" "}
          </span>
          <span className="text-gray-1">
            through prototyping, MVP development, and motion design.
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
