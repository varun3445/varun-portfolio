"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  {
    number: "01",
    step: "Discovery",
    description:
      "I combine desk research with primary fieldwork, interviews, surveys, and on-site observation to ground every decision in real behaviour rather than assumption.",
  },
  {
    number: "02",
    step: "Define",
    description:
      "I synthesise findings into clearly framed problem statements and user segments, ensuring the solution structure mirrors the actual problem before any design work begins.",
  },
  {
    number: "03",
    step: "Ideate",
    description:
      "I define the information architecture and system relationships first, using AI to rapidly stress-test structural variations so I can focus attention on the decisions that genuinely require design judgment.",
  },
  {
    number: "04",
    step: "Design & Prototype",
    description:
      "I move through lo-fi to hi-fi with clear iteration rationale at each stage. Every change is a direct response to a specific usability finding, not aesthetic preference.",
  },
  {
    number: "05",
    step: "Validate",
    description:
      "I test in the actual use environment, not a lab, and present outcomes directly to the stakeholders whose decisions will determine whether the solution reaches the people it was designed for.",
  },
];

export function Process() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);

  return (
    <section className="w-full bg-white px-[15px] pb-[30px] tablet:px-[30px] tablet:pb-[50px] desktop:px-[40px] desktop:pb-[60px]">
      <div className="w-full">
        <div className="h-px w-full bg-black" />
      </div>

      <div ref={wrapperRef} className="relative h-[300vh]">
        <div className="sticky top-16 flex w-full flex-col gap-[30px] overflow-hidden py-14 tablet:gap-[50px] desktop:gap-[60px]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            <h2 className="text-[16px] font-medium uppercase tracking-wide desktop:text-[18px]">
              Process
            </h2>
          </div>
          <h3 className="text-[36px] font-medium capitalize leading-[1.1] tablet:text-[68px] desktop:text-[84px] desktop-lg:text-[96px]">
            How I Work
          </h3>

          <motion.div style={{ x }} className="flex items-stretch gap-8">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex h-[420px] w-[320px] shrink-0 flex-col gap-4 rounded-[15px] border border-black p-8 tablet:h-[480px] md:w-[440px]"
              >
                <div className="flex min-h-[68px] items-start tablet:min-h-[88px] desktop:min-h-[108px]">
                  <h4 className="text-[28px] font-medium leading-[1.2] tablet:text-[36px] desktop:text-[44px]">
                    {step.step}
                  </h4>
                </div>
                <span className="text-6xl font-medium tablet:text-8xl desktop:text-[144px]">
                  {step.number}
                </span>
                <p className="text-sm leading-relaxed text-gray-2">{step.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
