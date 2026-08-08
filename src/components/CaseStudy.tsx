import Image from "next/image";
import { CaseStudyBlocks, Rich, type CaseStudyBlock } from "@/components/CaseStudyBlocks";
import { CtaFooter } from "@/components/sections/CtaFooter";

type CaseStudyProps = {
  title: string;
  heroImage: string;
  summary: string;
  appLink?: string;
  blocks: CaseStudyBlock[];
};

export function CaseStudy({ title, heroImage, summary, appLink, blocks }: CaseStudyProps) {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section
        className="flex w-full flex-col items-center gap-[10px] px-4 pb-[24px] pt-[100px] tablet:px-[40px] tablet:pb-[60px] tablet:pt-[100px] desktop:px-[64px]"
        style={{ minHeight: "90vh" }}
      >
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-[30px]">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4">
            <h1 className="font-clash text-[36px] font-medium capitalize leading-[1.1] tablet:text-[68px] desktop:text-[84px] desktop-lg:text-[96px]">
              {title}
            </h1>
            {appLink && (
              <a
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-black px-4 py-2 text-[14px] font-medium tablet:px-7 tablet:py-4 tablet:text-[16px] desktop-lg:text-[18px]"
                style={{ backgroundColor: "rgb(232,255,186)" }}
              >
                View app build
                <span aria-hidden>→</span>
              </a>
            )}
          </div>

          <div
            className="flex flex-col gap-4 rounded-[24px] p-6 tablet:gap-[30px] tablet:p-[24px]"
            style={{ backgroundColor: "rgba(0,0,0,0.03)" }}
          >
            <div className="h-[2px] w-full bg-black" />
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-black" />
              <h2 className="text-[20px] font-medium tablet:text-[24px] desktop:text-[32px] desktop-lg:text-[24px]">
                Executive Summary
              </h2>
            </div>
            <p className="text-[18px] leading-relaxed tablet:text-[20px] desktop:text-[23px] desktop-lg:text-[25px]">
              <Rich text={summary} />
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-[60px] tablet:px-[40px] desktop:px-[64px]">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-[40px]">
          <div className="h-[2px] w-full bg-black" />
          <div className="flex flex-col gap-[60px]">
            <div className="relative h-[400px] w-full overflow-hidden rounded-[24px] bg-surface tablet:h-[550px] desktop:h-[750px]">
              <Image src={heroImage} alt={title} fill sizes="1500px" className="object-cover" />
            </div>

            <CaseStudyBlocks blocks={blocks} />
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
