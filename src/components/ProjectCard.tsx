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
};

export function ProjectCard({
  mainImage,
  projectTitle,
  services,
  link,
  status = "published",
}: ProjectCardProps) {
  const { setVariant } = useCursor();
  const content = (
    <div
      data-cursor="work"
      onMouseEnter={() => setVariant("work")}
      onMouseLeave={() => setVariant("default")}
      className="group flex flex-col gap-6"
    >
      <div className="relative aspect-[2.2/1] w-full overflow-hidden rounded-3xl bg-surface desktop-lg:aspect-[1.38/1]">
        <Image
          src={mainImage}
          alt={projectTitle}
          fill
          sizes="(min-width: 1200px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[22px] font-medium tablet:text-[28px] desktop-lg:text-[32px]">
          {projectTitle}
        </h3>
        <span className="shrink-0 text-[14px] text-gray-2 desktop:text-[16px]">
          {status === "published" ? "Case Study" : "Building..."}
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
