import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { CtaFooter } from "@/components/sections/CtaFooter";
import { PROJECTS } from "@/data/projects";

export const metadata = { title: "Works — Varun Srivathsan" };

export default function WorksPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="w-full px-[15px] pb-16 pt-40 tablet:px-[30px] desktop:px-[40px]">
        <h1 className="text-[36px] font-medium capitalize leading-[1.1] tablet:text-[68px] desktop:text-[84px] desktop-lg:text-[96px]">
          Projects &amp;
          <br />
          Case Studies
        </h1>
      </section>

      <section className="w-full px-[15px] pb-24 tablet:px-[30px] desktop:px-[40px]">
        <div className="grid grid-cols-1 gap-x-[24px] gap-y-16 desktop:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.projectTitle} delay={i * 0.05}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
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
