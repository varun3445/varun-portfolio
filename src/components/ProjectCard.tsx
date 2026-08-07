"use client";

import Image from "next/image";
import Link from "next/link";
import { useCursor } from "./CustomCursor";

type ProjectCardProps = {
  mainImage: string;
  projectTitle: string;
  services: string[];
  link?: string;
};

export function ProjectCard({ mainImage, projectTitle, services, link }: ProjectCardProps) {
  const { setVariant } = useCursor();
  const content = (
    <div
      onMouseEnter={() => setVariant("work")}
      onMouseLeave={() => setVariant("default")}
      className="group flex flex-col gap-6"
    >
      <div className="relative aspect-[2.2/1] w-full overflow-hidden rounded-3xl bg-surface">
        <Image
          src={mainImage}
          alt={projectTitle}
          fill
          sizes="(min-width: 768px) 90vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-clash text-3xl font-medium">{projectTitle}</h3>
      <div className="h-px w-full bg-black" />
      <p className="text-sm text-gray-2">
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
