import { Reveal } from "@/components/Reveal";

const SERVICES = [
  {
    name: "UI / UX DESIGN",
    items: [
      "App Design",
      "Website Design",
      "Landing Page Design",
      "Design Systems",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    name: "WEB DEVELOPMENT",
    items: [
      "Framer Development",
      "Webflow Development",
      "Wordpress Development",
      "Speed Optimization",
      "SEO Optimization",
      "Website Maintenance",
    ],
  },
  {
    name: "BRAND IDENTITY",
    items: [
      "Logo Design",
      "Brand Guidlines",
      "Label Design",
      "Packaging Design",
      "Visual Identity",
      "Brand Strategy",
    ],
  },
  {
    name: "DIGITAL DESIGN",
    items: [
      "Illustrations",
      "Animations",
      "Business Cards",
      "Flyers",
      "Banner Design",
      "Social Media",
    ],
  },
];

export function Service() {
  return (
    <section className="w-full bg-white px-6 py-24 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="h-px w-full bg-black" />

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            <h2 className="text-sm font-medium uppercase tracking-wide">Services</h2>
          </div>
          <h3 className="font-clash text-3xl font-medium uppercase md:text-5xl">What I Do</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-6 rounded-3xl bg-surface p-8">
                <h4 className="text-sm font-medium uppercase tracking-wide">{service.name}</h4>
                <ul className="flex flex-col gap-3">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-gray-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
