const EXPERIENCE = [
  {
    companyName: "WQA (UK) Limited",
    position: "Product Designer",
    timeline: "Oct 2025 - Present",
    description:
      "Designed and maintained scalable design systems for leading billion-dollar clients using component-based architecture and tokenisation, supported by UX research and pathway mapping. Managed developer handoffs and created PRDs, while maintaining Storybook and Figma Code Connect files. Ensured WCAG-compliant, accessible designs and validated decisions through usability testing and A/B testing.",
  },
  {
    companyName: "IDXF - Idea Forge",
    position: "Founder | Product Innovator",
    timeline: "Sep 2024 - Sep 2025",
    description:
      "Led the end-to-end product development lifecycle for a new digital platform, defining user journeys and delivering core features such as profile creation, skill matching, and community engagement. Achieved strong early traction with 42K+ impressions, 120+ supporters, and 10 core contributors within 48 hours.",
  },
  {
    companyName: "Havells India Ltd",
    position: "Product Owner - Capstone",
    timeline: "Jan 2024 - May 2024",
    description:
      "Designed an AI-powered smart refrigerator featuring animated feedback, custom iconography, and high-fidelity interfaces with micro-animations to enhance accessibility and user experience. Developed a strategic roadmap for Havells' 2030 entry into the $1.9B mini-refrigerator market.",
  },
  {
    companyName: "Bruhat Bengaluru Mahanagara Palike",
    position: "Product Owner - Capstone",
    timeline: "Aug 2023 - Dec 2023",
    description:
      "Designed an efficient micro-mobility vehicle tailored for Bengaluru's traffic, integrating exterior information panels and a driver interface. Developed experience maps and service blueprints to support the concept, which was later presented at Bangalore Design Week and received accolades from the Bengaluru government.",
  },
  {
    companyName: "Ashok Leyland",
    position: "Transportation Design Intern",
    timeline: "Jun 2023 - Jul 2023",
    description:
      "Developed a sustainable vehicle using recycled materials, improving fuel efficiency and increasing legroom by 30%. Optimised the vehicle's interaction design to achieve 90% user satisfaction through intuitive controls and UIs, and created a 10-year forecast map to anticipate future trends.",
  },
];

const EDUCATION = [
  {
    companyName: "Royal College of Art",
    position: "M.A. Design Products",
    timeline: "Masters",
  },
  {
    companyName: "Srishti Manipal Institute",
    position: "B.Des Industrial Arts and Design Practices",
    timeline: "Bachelors",
  },
];

function TimelineCard({
  companyName,
  position,
  timeline,
  description,
}: {
  companyName: string;
  position: string;
  timeline: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-6 py-10">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-black" />
        <span className="text-sm text-gray-2">{timeline}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-[32px] font-medium tablet:text-[36px] desktop:text-[40px] desktop-lg:text-[44px]">
          {companyName}
        </h4>
        <p className="text-base text-gray-2">{position}</p>
      </div>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-gray-2">{description}</p>
      )}
      <div className="h-px w-full bg-black" />
    </div>
  );
}

export function Timeline() {
  return (
    <section className="flex w-full flex-col gap-[30px] bg-white px-[15px] py-[60px] tablet:gap-[50px] tablet:px-[30px] tablet:py-[50px] desktop:gap-[60px] desktop:px-[40px] desktop:py-[60px]">
      <div className="flex flex-col gap-8">
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            <h2 className="text-[16px] font-medium uppercase tracking-wide desktop:text-[18px]">
              Excperience
            </h2>
          </div>
          <h3 className="text-[36px] font-medium capitalize leading-[1.1] tablet:text-[68px] desktop:text-[84px] desktop-lg:text-[96px]">
            My Journey
          </h3>
        </div>
        <div className="flex flex-col">
          {EXPERIENCE.map((item) => (
            <TimelineCard key={item.companyName} {...item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            <h2 className="text-[16px] font-medium uppercase tracking-wide desktop:text-[18px]">
              Education
            </h2>
          </div>
          <h3 className="text-[36px] font-medium capitalize leading-[1.1] tablet:text-[68px] desktop:text-[84px] desktop-lg:text-[96px]">
            Where I Studied
          </h3>
        </div>
        <div className="flex flex-col">
          {EDUCATION.map((item) => (
            <TimelineCard key={item.companyName} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
