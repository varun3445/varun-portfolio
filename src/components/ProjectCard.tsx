"use client";

import Image from "next/image";
import Link from "next/link";
import { useCursor } from "./CustomCursor";

type ProjectCardProps = {
  mainImage: string;
  projectTitle: string;
  services: string[];
  link?: string;
  status?: "published" | "building";
  /** Overrides the default status label ("Case Study" / "Deliverable"). */
  statusLabel?: string;
  /** "grid" cards use a stacked title/status row at the tablet breakpoint
   * only (mobile and desktop match "pinned" exactly). Defaults to "pinned". */
  variant?: "pinned" | "grid";
};

export function ProjectCard({
  mainImage,
  projectTitle,
  services,
  link,
  status = "published",
  statusLabel,
  variant = "pinned",
}: ProjectCardProps) {
  const { setVariant: setCursorVariant } = useCursor();
  const content = (
    <div
      data-cursor="work"
      onMouseEnter={() => setCursorVariant("work")}
      onMouseLeave={() => setCursorVariant("default")}
      className="group flex flex-col gap-6"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-surface">
        <Image
          src={mainImage}
          alt={projectTitle}
          fill
          sizes="(min-width: 1200px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div
        className={
          variant === "grid"
            ? "flex items-baseline justify-between gap-4 tablet:flex-col tablet:items-start tablet:justify-start tablet:gap-1 desktop:flex-row desktop:items-baseline desktop:justify-between desktop:gap-4"
            : "flex items-baseline justify-between gap-4"
        }
      >
        <h3 className="text-[22px] font-medium tablet:text-[28px] desktop-lg:text-[32px]">
          {projectTitle}
        </h3>
        <span className="shrink-0 text-[14px] text-gray-2 desktop:text-[16px]">
          {statusLabel ?? (status === "published" ? "Case Study" : "Deliverable")}
        </span>
      </div>
      <div className="h-px w-full bg-black" />
      <p className="text-[14px] text-gray-2 desktop:text-[16px]">
        {services.filter(Boolean).join(" • ")}
      </p>
    </div>
  );

  if (!link) return content;
  const isExternal = link.startsWith("http");
  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return <Link href={link}>{content}</Link>;
}
