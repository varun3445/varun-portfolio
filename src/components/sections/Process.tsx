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
    <section className="w-full bg-white px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="h-px w-full bg-black" />
      </div>

      <div ref={wrapperRef} className="relative h-[300vh]">
        <div className="sticky top-16 mx-auto flex max-w-6xl flex-col gap-10 overflow-hidden py-14">
          <div className="flex items-center gap-2 px-6 md:px-0">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            <h2 className="text-sm font-medium uppercase tracking-wide">Process</h2>
          </div>
          <h3 className="px-6 font-clash text-3xl font-medium uppercase md:px-0 md:text-5xl">
            How I Work
          </h3>

          <motion.div style={{ x }} className="flex items-start gap-8 px-6 md:px-0">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex w-[320px] shrink-0 flex-col gap-4 rounded-[15px] border border-black p-8 md:w-[440px]"
              >
                <h4 className="text-[28px] font-medium tablet:text-[36px] desktop:text-[44px]">
                  {step.step}
                </h4>
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
