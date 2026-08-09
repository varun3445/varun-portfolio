import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
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

        {/* Grid: single column on mobile, 2x2 on tablet (folds in the 2nd pinned project), 3x3 on desktop */}
        <div className="grid grid-cols-1 gap-x-[24px] gap-y-16 tablet:grid-cols-2 desktop:grid-cols-3">
          {pinned2 && (
            <div className="desktop:hidden">
              <ProjectCard key={pinned2.projectTitle} {...pinned2} variant="grid" />
            </div>
          )}
          {rest.map((project) => (
            <ProjectCard key={project.projectTitle} {...project} variant="grid" />
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col gap-6 px-[15px] pb-24 tablet:px-[30px] desktop:px-[64px]">
        <h2 className="text-[16px] font-medium uppercase tracking-wide desktop:text-[18px]">
          Just a bit more visuals.
        </h2>
        <div className="grid grid-cols-1 gap-[24px] tablet:grid-cols-2 desktop:grid-cols-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface tablet:col-span-2 desktop:col-span-3">
            <Image
              src="/images/dt-pro-bento.png"
              alt=""
              fill
              sizes="(min-width: 1200px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface tablet:aspect-square desktop:aspect-[4/3] desktop:col-span-3">
            <Image
              src="/images/vsxbs-bento.png"
              alt=""
              fill
              sizes="(min-width: 1200px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-3xl bg-surface desktop:col-span-2">
            <iframe
              className="block h-full w-full border-0"
              src="https://embed.figma.com/proto/LHPdKBgES63041Ijjs9fJJ/IDXF---24-Steps?node-id=74-5&p=f&viewport=-382%2C-548%2C0.14&scaling=contain&content-scaling=fixed&page-id=0%3A1&embed-host=share&footer=false&hide-ui=1"
              allowFullScreen
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface desktop:col-span-2">
            <Image
              src="/images/p5-port-bento.png"
              alt=""
              fill
              sizes="(min-width: 1200px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface desktop:col-span-2">
            <Image
              src="/images/p4-port-bento.png"
              alt=""
              fill
              sizes="(min-width: 1200px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
