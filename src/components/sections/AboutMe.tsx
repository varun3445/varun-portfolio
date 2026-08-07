"use client";

import { motion } from "framer-motion";
import { SplineEmbed } from "@/components/SplineEmbed";
import { Stat } from "@/components/Stat";

const spring = { type: "spring" as const, stiffness: 300, damping: 40 };
const viewport = { once: true, amount: 0 as const, margin: "0px 0px 100px 0px" };

export function AboutMe() {
  return (
    <section
      id="about"
      className="flex w-full scroll-mt-[110px] flex-col gap-[30px] bg-white px-[15px] pb-[40px] tablet:gap-[50px] tablet:px-[30px] tablet:pb-[50px] desktop:gap-[60px] desktop:px-[40px] desktop:pb-[96px]"
    >
      <motion.div
        className="h-px w-full bg-black"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ ...spring, delay: 0 }}
      />

      <div className="flex flex-col gap-6 tablet:flex-row tablet:items-start tablet:justify-between">
        <motion.p
          className="text-base font-medium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...spring, delay: 0.15 }}
        >
          Based in London
          <br />
          and working worldwide.
        </motion.p>
        <motion.p
          className="text-base font-medium tablet:w-[65%] tablet:text-right desktop:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...spring, delay: 0.3 }}
        >
          Passionate Designer and Developer Crafting Visually Captivating Websites with
          No-Code Solutions
        </motion.p>
      </div>

      <motion.div
        className="relative -mx-[15px] h-[70vh] w-[calc(100%+30px)] overflow-hidden bg-black tablet:-mx-[30px] tablet:w-[calc(100%+60px)] desktop:-mx-[40px] desktop:h-screen desktop:w-[calc(100%+80px)]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ type: "tween", ease: [0.12, 0.23, 0.5, 1], duration: 0.6, delay: 0.45 }}
      >
        <SplineEmbed
          url="https://prod.spline.design/Z2S2CDeYF6K7Shzg/scene.splinecode"
          className="h-full w-full"
        />
      </motion.div>

      <div className="flex flex-col gap-6 desktop:flex-row desktop:items-start desktop:gap-[30px]">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-black" />
          <h2 className="text-[16px] font-medium uppercase tracking-wide desktop:text-[18px]">
            About Me
          </h2>
        </div>

        <div className="flex flex-col gap-[60px] tablet:gap-[80px] desktop:w-[49%] desktop:gap-[100px]">
          <p className="text-[20px] leading-snug tablet:text-[24px] desktop:text-[28px] desktop-lg:text-[32px]">
            I collaborate with global clients to Cultivate Compelling and Immersive Digital
            Experiences Through The Realms of Design and Development
          </p>
          <div className="flex gap-[50px]">
            <Stat end={40} suffix="+" title="Completed Projects" />
            <Stat end={3} suffix="+" title="Years of Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
