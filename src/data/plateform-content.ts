import type { CaseStudyBlock } from "@/components/CaseStudyBlocks";

export const plateformSummary =
  "Plateform is a community platform designed for the London Borough of Hounslow, built to connect residents with local resources, services, and each other. The project ran over 3 months and involved end-to-end UX and UI design, from initial discovery through to a live deployed product. The platform was designed around the needs of a diverse public user base where accessibility, clarity, and inclusivity were non-negotiable requirements.";

export const plateformBlocks: CaseStudyBlock[] = [
  { type: "heading", text: "Design Challenge And Responsibilities Overview" },
  {
    type: "columns",
    items: [
      {
        label: "Challenge",
        text: "Hounslow residents had no single digital space to discover local services, connect with community initiatives, or engage with their borough. Existing council tools were fragmented, outdated, and difficult to navigate.",
      },
      {
        label: "Opportunity",
        text: "Create an accessible, community-first platform that brings residents, local services, and the council together in one unified experience.",
      },
    ],
  },
  {
    type: "columns",
    items: [
      { label: "Timeline", text: "3 Months" },
      {
        label: "Disciplines",
        bullets: ["User Experience Design", "User Interface Design", "Accessibility Design"],
      },
      {
        label: "Responsibilities",
        bullets: ["UX Research", "Information Architecture", "UI Design", "Prototyping", "Live Development"],
      },
      { label: "Tools", bullets: ["Figma", "Replit", "Claude Code"] },
    ],
  },

  { type: "heading", text: "Our Vision" },
  {
    type: "paragraph",
    text: "To give every Hounslow resident a digital home — a place where finding support, discovering community events, and connecting with neighbours feels effortless and welcoming. The platform was built with the belief that good civic digital design should serve everyone, not just the digitally confident.",
  },

  { type: "heading", text: "The Process" },
  { type: "image", src: "/images/fuGEylkGK0InaMp6oYKlM7XCs8.png", aspect: 4318 / 1239 },

  { type: "heading", text: "Initial Problem Discovery" },
  {
    type: "paragraph",
    text: "Hounslow is one of London's most culturally diverse boroughs, with residents spanning a wide range of ages, backgrounds, and digital literacy levels. Existing digital touchpoints were fragmented — residents had to navigate multiple council pages, social media groups, and third-party sites to find basic community information. There was no single trusted space. Our objective was to design a platform that felt welcoming, easy to navigate, and genuinely useful for the full breadth of the community — not just the most digitally active residents.",
  },

  { type: "heading", text: "UI for Launch" },
  { type: "image", src: "/images/eV0jR6oDGXZYQtvGzLkzfarOHI.png", aspect: 3392 / 5424, widthPct: 64 },

  { type: "heading", text: "Post Designs Outcome" },
  {
    type: "columns",
    items: [
      {
        label: "Market Validation",
        bullets: [
          "Platform launched as a live web product accessible to Hounslow residents.",
          "Designed with WCAG accessibility standards at the core of every decision.",
          "Received recognition as a government-facing civic design project.",
        ],
      },
      {
        label: "Product Development",
        bullets: [
          "Built and deployed using Replit and Claude Code for rapid iteration.",
          "Information architecture designed to support future expansion of services and content.",
          "Component system built for consistency and ease of maintenance.",
        ],
      },
      {
        label: "Key Takeaways",
        bullets: [
          "Civic design requires a higher accessibility bar than most consumer products.",
          "Designing for diverse users means removing assumptions about digital confidence.",
          "A clean, calm visual language builds trust with users who may be sceptical of government digital tools.",
        ],
      },
      {
        label: "Next Steps",
        bullets: [
          "Expand service directory with deeper council integration.",
          "Add multilingual support to serve Hounslow's diverse linguistic communities.",
          "Conduct further usability testing with older and less digitally confident residents.",
        ],
      },
    ],
  },
];
