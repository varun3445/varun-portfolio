import type { CaseStudyBlock } from "@/components/CaseStudyBlocks";

export const bbmpSummary =
  "A ride-sharing and micro-mobility platform developed in collaboration with the Bruhat Bengaluru Mahanagara Palike (BBMP) — the Bengaluru city government — over 6 months at Srishti Manipal Institute. The project encompassed the full design of a novel 3+1 micro-mobility vehicle alongside a suite of integrated digital interfaces for passengers and drivers. The case study focuses on the UI/UX of the digital systems: an exterior real-time display, a passenger ticketing and payment panel, and a minimalist driver cluster. The final product vision was presented at Bangalore Design Week and received recognition from Bengaluru government stakeholders.";

export const bbmpBlocks: CaseStudyBlock[] = [
  { type: "heading", text: "Challenges and Responsibilities" },
  {
    type: "columns",
    items: [
      {
        label: "Challenge",
        text: "Bengaluru's last-mile transportation is fragmented, analogue, and stressful for both riders and drivers. Passengers lack real-time access to route information and seamless payment options. Drivers are forced to navigate chaotic city traffic while managing distracting in-cabin systems that were never designed for the environment they operate in.",
      },
      {
        label: "Opportunity",
        text: "Design an integrated digital ecosystem within a purpose-built micro-mobility vehicle that reduces friction for passengers and cognitive load for drivers, while aligning with Bengaluru's broader smart city ambitions.",
      },
    ],
  },
  {
    type: "columns",
    items: [
      { label: "Timeline", text: "6 Months" },
      {
        label: "Disciplines",
        bullets: ["Transportation Design", "UX Research", "UI Design", "Service Design"],
      },
      {
        label: "Responsibilities",
        bullets: [
          "Urban mobility analysis and problem definition",
          "Experience mapping and service blueprinting",
          "Passenger interface design (exterior display and ticketing panel)",
          "Driver cluster UI design",
          "Physical vehicle design and 3D prototyping",
        ],
      },
      { label: "Tools", bullets: ["Figma", "SolidWorks", "Sketching", "3D Prototyping"] },
    ],
  },

  { type: "heading", text: "Our Vision" },
  {
    type: "paragraph",
    text: "To design a last-mile mobility experience that is as intuitive for a first-time rider as it is for a daily commuter, and as effortless for a driver navigating Bengaluru's streets as it is for one sitting at a standstill. Every interface decision was made with one question in mind: does this reduce friction or add it?",
  },

  { type: "heading", text: "The Process" },
  { type: "image", src: "/images/fuGEylkGK0InaMp6oYKlM7XCs8.png", aspect: 4318 / 1239 },

  { type: "heading", text: "Initial Problem Discovery" },
  {
    type: "paragraph",
    text: "Bengaluru is one of the world's most congested cities, yet its last-mile transportation options remain largely analogue and disconnected from the smart city infrastructure being built around them. Through urban mobility analysis and contextual research, two distinct user pain points emerged clearly.",
  },
  {
    type: "paragraph",
    text: "For passengers, the problem was information and trust. Without real-time visibility of route, availability, and cost, riders defaulted to familiar but inefficient alternatives. The absence of integrated digital payment created additional friction at exactly the moment a seamless experience was needed most.",
  },
  {
    type: "paragraph",
    text: "For drivers, the problem was cognitive overload. Existing in-cabin systems were designed without consideration for the realities of navigating Bengaluru's traffic — complex, distracting interfaces competing for attention in an already demanding environment. The result was unsafe and inefficient.",
  },
  {
    type: "paragraph",
    text: "The design response was a three-interface ecosystem: an exterior panel for real-time route and seat availability, a passenger ticketing panel with digital payment integration, and a stripped-back driver cluster focused entirely on navigation clarity.",
  },

  { type: "heading", text: "UI for Launch" },
  { type: "image", src: "/images/eV0jR6oDGXZYQtvGzLkzfarOHI.png", aspect: 3392 / 5424, widthPct: 64 },

  { type: "heading", text: "Post Designs Outcome" },
  {
    type: "columns",
    layout: "outcome",
    items: [
      {
        label: "Market Validation",
        bullets: [
          "Presented at Bangalore Design Week to an audience of government stakeholders and urban design professionals.",
          "Received official recognition from Bengaluru government representatives.",
          "Developed in direct collaboration with BBMP as a government-backed smart city initiative.",
        ],
      },
      {
        label: "Product Development",
        bullets: [
          "Three integrated digital interfaces designed and validated across passenger and driver contexts.",
          "Service blueprints and experience maps created to guide the full ecosystem design, not just individual screens.",
          "Physical vehicle designed and 3D prototyped in SolidWorks alongside the digital interface work.",
        ],
      },
      {
        label: "Key Takeaways",
        bullets: [
          "Transportation UI must account for environmental context — a driver interface in Bengaluru traffic has radically different requirements than a standard mobile screen.",
          "Service design and product design must happen in parallel — the digital interfaces only make sense in the context of the full journey.",
          "Government collaboration requires designing for institutional stakeholders as much as end users — clarity of vision and presentation is as important as the design itself.",
        ],
      },
      {
        label: "Next Steps",
        bullets: [
          "Pilot the exterior display and ticketing panel on existing Bengaluru transit routes.",
          "Integrate with Bengaluru's existing smart city payment infrastructure.",
          "Expand driver cluster to support multi-route and multi-shift operations.",
        ],
      },
    ],
  },
];
