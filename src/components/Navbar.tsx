"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

const LINKS = [
  { title: "HOME", href: "/" },
  { title: "WORK", href: "/works" },
  { title: "ABOUT", href: "/#journey" },
];

const RESUME_LINK =
  "https://drive.google.com/file/d/1h4GxjXbm25vT-1h7ctCv5guxaAEIwwup/view?usp=share_link";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="fixed inset-x-0 top-0 z-50 bg-white"
    >
      <div className="relative mx-auto flex max-w-[1280px] items-center justify-between px-[15px] py-6 tablet:px-[30px]">
        <Logo size={45} />

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <NavLink key={link.href} title={link.title} href={link.href} />
          ))}
          <NavLink title="RESUME" href={RESUME_LINK} variant="fill" />
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="relative flex h-8 w-8 items-center justify-center md:hidden"
        >
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: -6 }}
            className="absolute h-0.5 w-5 rounded-full bg-black"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute h-0.5 w-5 rounded-full bg-black"
          />
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 6 }}
            className="absolute h-0.5 w-5 rounded-full bg-black"
          />
        </button>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-1 rounded-3xl bg-white p-3 shadow-lg shadow-black/20 md:hidden"
          >
            {LINKS.map((link) => (
              <NavLink key={link.href} title={link.title} href={link.href} />
            ))}
            <NavLink title="RESUME" href={RESUME_LINK} variant="fill" />
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
