import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaFooter } from "@/components/sections/CtaFooter";
import { PROJECTS } from "@/data/projects";

export const metadata = { title: "Works — Varun Srivathsan" };

export default function WorksPage() {
  const [pinned1, pinned2, ...rest] = PROJECTS;

  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="w-full px-[15px] pb-16 pt-40 tablet:px-[30px] desktop:px-[64px]">
        <h1 className="text-[36px] font-medium capitalize leading-[1.1] tablet:text-[68px] desktop:text-[84px] desktop-lg:text-[96px]">
          Projects &amp;
          <br />
          Case Studies
        </h1>
      </section>

      <section className="flex w-full flex-col gap-16 px-[15px] pb-24 tablet:px-[30px] desktop:px-[64px]">
        {/* Pinned: 1 up top on mobile/tablet, 2 up top on desktop */}
        <div className="grid grid-cols-1 gap-x-[24px] gap-y-16 desktop:grid-cols-2">
          <ProjectCard key={pinned1.projectTitle} {...pinned1} />
          {pinned2 && (
            <div className="hidden desktop:block">
              <ProjectCard key={pinned2.projectTitle} {...pinned2} />
            </div>
          )}
        </div>

        {/* Grid: 2x2 on mobile/tablet (folds in the 2nd pinned project), 3x3 on desktop */}
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-16 desktop:grid-cols-3">
          {pinned2 && (
            <div className="desktop:hidden">
              <ProjectCard key={pinned2.projectTitle} {...pinned2} />
            </div>
          )}
          {rest.map((project) => (
            <ProjectCard key={project.projectTitle} {...project} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            title="View Resume"
            href="https://drive.google.com/file/d/1h4GxjXbm25vT-1h7ctCv5guxaAEIwwup/view?usp=share_link"
          />
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
