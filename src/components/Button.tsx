"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 500, damping: 50 };

export function Button({ title, href }: { title: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const content = (
    <motion.span
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        backgroundColor: hovered ? "rgb(10,10,12)" : "rgb(255,255,255)",
        color: hovered ? "rgb(255,255,255)" : "rgb(10,10,12)",
      }}
      transition={spring}
      className="inline-flex items-center gap-2 rounded-full border border-black px-6 py-3.5 text-sm font-medium"
    >
      {title}
      <motion.span
        aria-hidden
        animate={{ rotate: hovered ? -45 : 0 }}
        transition={spring}
        className="inline-block"
      >
        →
      </motion.span>
    </motion.span>
  );

  if (isExternal) {
    return (
      <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return <Link href={href}>{content}</Link>;
}
