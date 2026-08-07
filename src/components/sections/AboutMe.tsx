import { SplineEmbed } from "@/components/SplineEmbed";
import { Stat } from "@/components/Stat";

export function AboutMe() {
  return (
    <section id="about" className="w-full bg-white pb-24 pt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 md:px-10">
        <div className="h-px w-full bg-black" />

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <p className="max-w-xs text-base font-medium">
            Based in London
            <br />
            and working worldwide.
          </p>
          <p className="max-w-sm text-right text-base font-medium md:text-left">
            Passionate Designer and Developer Crafting Visually Captivating Websites with
            No-Code Solutions
          </p>
        </div>
      </div>

      <div className="relative my-14 h-[400px] w-full overflow-hidden bg-black md:h-[700px]">
        <SplineEmbed
          url="https://prod.spline.design/Z2S2CDeYF6K7Shzg/scene.splinecode"
          className="h-full w-full"
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-black" />
          <h2 className="text-sm font-medium uppercase tracking-wide">About Me</h2>
        </div>

        <div className="flex flex-col gap-16">
          <p className="max-w-2xl text-2xl leading-snug md:text-3xl">
            I collaborate with global clients to Cultivate Compelling and Immersive Digital
            Experiences Through The Realms of Design and Development
          </p>
          <div className="flex gap-12 md:gap-24">
            <Stat end={40} suffix="+" title="Completed Projects" />
            <Stat end={3} suffix="+" title="Years of Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
