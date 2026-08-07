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
    <section id="work" className="w-full bg-white px-6 py-24 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            <h2 className="text-sm font-medium uppercase tracking-wide">Portfolio</h2>
          </div>
          <h3 className="font-clash text-3xl font-medium uppercase md:text-5xl">
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
      </div>
    </section>
  );
}
