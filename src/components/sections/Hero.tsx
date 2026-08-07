"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white px-[15px] pb-[30px] pt-[120px] tablet:px-[30px] tablet:pb-[50px] tablet:pt-[120px] desktop:px-[40px] desktop:pb-[60px] desktop:pt-[160px]" style={{ minHeight: "100vh" }}>
      <div className="w-full">
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 60, delay: 0.2 }}
          className="font-clash text-[40px] font-medium capitalize leading-[1.1] tablet:text-[52px] desktop:text-[72px]"
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
