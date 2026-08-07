import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { CtaFooter } from "@/components/sections/CtaFooter";

export const metadata = { title: "Works — Varun Srivathsan" };

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
    projectTitle: "BBMP - RideShare",
    services: ["Driver Interface", "Ticketing System", "Vehicle HMI"],
    link: "/works/bbmp",
  },
];

export default function WorksPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="w-full px-6 pb-16 pt-40 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-clash text-5xl font-medium uppercase leading-tight md:text-7xl">
            Projects &amp;
            <br />
            Case Studies
          </h1>
        </div>
      </section>

      <section className="w-full px-6 pb-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
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
