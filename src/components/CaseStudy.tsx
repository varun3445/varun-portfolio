import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CaseStudyBlocks, type CaseStudyBlock } from "@/components/CaseStudyBlocks";
import { CtaFooter } from "@/components/sections/CtaFooter";

type CaseStudyProps = {
  title: string;
  subtitle?: string;
  heroImage: string;
  appLink?: string;
  blocks: CaseStudyBlock[];
};

export function CaseStudy({ title, subtitle, heroImage, appLink, blocks }: CaseStudyProps) {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="flex w-full flex-col items-center gap-8 px-6 pb-16 pt-40 text-center md:px-10">
        <h1 className="font-clash text-5xl font-medium md:text-7xl">{title}</h1>
        {subtitle && <p className="text-lg text-gray-2">{subtitle}</p>}
        {appLink && (
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black bg-[rgb(232,255,186)] px-7 py-4 text-sm font-medium"
          >
            View app build
            <span aria-hidden>↗</span>
          </a>
        )}
        <Reveal className="relative mt-8 aspect-video w-full max-w-5xl overflow-hidden rounded-3xl bg-surface">
          <Image src={heroImage} alt={title} fill sizes="1024px" className="object-cover" />
        </Reveal>
      </section>

      <section className="w-full px-6 py-16 md:px-10">
        <CaseStudyBlocks blocks={blocks} />
      </section>

      <CtaFooter />
    </main>
  );
}
