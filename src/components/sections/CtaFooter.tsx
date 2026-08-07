"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";

const spring = { type: "spring" as const, stiffness: 200, damping: 30 };
const viewport = { once: true, amount: 0 as const, margin: "0px 0px 100px 0px" };

export function CtaFooter() {
  return (
    <section
      id="footer"
      className="w-full bg-white px-[15px] pt-[60px] tablet:px-[30px] tablet:pt-[80px] desktop:px-[40px] desktop:pt-[80px]"
    >
      <div className="flex w-full flex-col">
        <div className="h-px w-full bg-black" />

        <div className="flex flex-col items-center gap-10 py-24 text-center">
          <p className="text-[18px] font-medium uppercase tracking-wide text-gray-2 desktop:text-[20px] desktop-lg:text-[22px]">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...spring, delay: 0 }}
            >
              Have a project{" "}
            </motion.span>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...spring, delay: 0.3 }}
            >
              in mind?
            </motion.span>
          </p>
          <motion.h2
            className="text-[48px] font-medium uppercase leading-[1.2] tablet:text-[64px] desktop:text-[98px] desktop-lg:text-[118px]"
            initial={{ opacity: 0, y: 130 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...spring, delay: 0.6 }}
          >
            Let&apos;s Work Together
          </motion.h2>
          <Button
            title="Get In Touch"
            href="mailto:varun3445@gmail.com?subject=Reaching%20out%20to%20you%20regarding%20%3Csubject%3E&body=Hey%20Varun%2C%0A%0A%3CBody%3E%0A%0A%0ARegards%2C%0AYour%20Name"
          />
        </div>

        <footer className="flex flex-col items-center justify-between gap-6 border-t border-black py-10 md:flex-row">
          <p className="text-sm font-medium uppercase tracking-wide">© 2025 Varun Srivathsan</p>
          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/varun_srivathsan.design/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-2 hover:text-black"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/varun-srivathsan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-2 hover:text-black"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
