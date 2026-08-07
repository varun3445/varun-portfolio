import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { Process } from "@/components/sections/Process";
import { Work } from "@/components/sections/Work";
import { Timeline } from "@/components/sections/Timeline";
import { CtaFooter } from "@/components/sections/CtaFooter";

// Note: the "Service" section exists in the Framer project's data but is
// flagged visible:false there, so it does not render on the live site either.

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <AboutMe />
      <Process />
      <Work />
      <Timeline />
      <CtaFooter />
    </main>
  );
}
