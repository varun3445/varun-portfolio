import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function Work() {
  return (
    <section
      id="work"
      className="flex w-full flex-col gap-[30px] bg-white px-[15px] py-[40px] tablet:gap-[50px] tablet:px-[30px] tablet:py-[40px] desktop:gap-[60px] desktop:px-[40px] desktop:py-[40px]"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-black" />
          <h2 className="text-[16px] font-medium uppercase tracking-wide desktop:text-[18px]">
            Portfolio
          </h2>
        </div>
        <h3 className="text-[36px] font-medium capitalize leading-[1.1] tablet:text-[68px] desktop:text-[84px] desktop-lg:text-[96px]">
          Featured Works
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-x-[24px] gap-y-16 desktop:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.projectTitle} {...project} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button title="View All Projects" href="/works" />
      </div>
    </section>
  );
}
