"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Button({ title, href }: { title: string; href: string }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const content = (
    <motion.span
      initial={{ backgroundColor: "rgb(10,10,12)" }}
      whileHover={{ backgroundColor: "rgb(40,40,44)" }}
      className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white"
    >
      {title}
      <span aria-hidden>→</span>
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
