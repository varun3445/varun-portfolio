"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavLinkProps = {
  title: string;
  href: string;
  variant?: "line" | "fill";
};

export function NavLink({ title, href, variant = "line" }: NavLinkProps) {
  const isExternal = href.startsWith("http");

  if (variant === "fill") {
    return (
      <motion.a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        initial={{ backgroundColor: "rgb(212, 250, 135)" }}
        whileHover={{ backgroundColor: "rgb(182, 255, 36)", scale: 1.03 }}
        className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wide text-black"
      >
        {title}
      </motion.a>
    );
  }

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden px-4 py-2 text-xs font-medium uppercase tracking-wide text-black"
    >
      <span className="relative block h-[14px] overflow-hidden">
        <motion.span
          className="block"
          initial={{ y: 0 }}
          whileHover={{ y: "-14px" }}
          transition={{ duration: 0.3, ease: [0.12, 0.23, 0.5, 1] }}
        >
          <span className="block h-[14px] leading-[14px]">{title}</span>
          <span className="block h-[14px] leading-[14px]">{title}</span>
        </motion.span>
      </span>
      <span className="absolute inset-x-4 bottom-1.5 h-px origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}
