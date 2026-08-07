import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

const PROJECTS = [
  {
    mainImage: "/images/n6QvmvH1FO1AYmltWB2ffHNJIds.png",
    projectTitle: "IDXF - Idea Forge",
    services: ["Mobile App", "Networking Platform", "AI Powered"],
    link: "/works/idxf",
  },
  {
    mainImage: "/images/FTaIF6vN0dinKBMZ0o8rryptIwE.png",
    projectTitle: "Pupspot-AR",
    services: ["Mobile App", "Community Platform", "AR Experience"],
    link: "/works/pupspot-ar",
  },
  {
    mainImage: "/images/1Fbz3ZMDBgHq9zCQAHR9wL6zV9U.png",
    projectTitle: "Plateform - Hounslow",
    services: ["Mobile App", "Community Platform", "Government"],
    link: "/works/plateform",
  },
  {
    mainImage: "/images/AozA2pshbJnjHkHaRNwe98m77Y.png",
    projectTitle: "BBMP Ride-Share",
    services: ["Driver Interface", "Ticketing System", "Vehicle HMI"],
    link: "/works/bbmp",
  },
];

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

      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.projectTitle} delay={i * 0.05}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>

      <div className="flex justify-center">
        <Button title="View All Projects" href="/works" />
      </div>
    </section>
  );
}
