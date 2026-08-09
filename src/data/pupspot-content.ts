import type { CaseStudyBlock } from "@/components/CaseStudyBlocks";

export const pupspotSummary =
  "PupSpot AR is a community augmented reality platform designed to connect students and animal welfare communities through shared digital and physical spaces. Built and shipped independently as part of a broader initiative to use AR as a tool for community building, the platform explores how emerging technology can make everyday interactions with local animal welfare causes more engaging, accessible, and meaningful.";

export const pupspotBlocks: CaseStudyBlock[] = [
  { type: "heading", text: "Challenges and Responsibilities" },
  {
    type: "columns",
    items: [
      {
        label: "Challenge",
        text: "Animal welfare organisations and student communities operate in parallel but rarely intersect in a meaningful way. Existing platforms lack the spatial, context-aware layer that makes community engagement feel immediate and real rather than transactional.",
      },
      {
        label: "Opportunity",
        text: "Use augmented reality to create a lightweight, location-aware community layer that connects students with animal welfare causes in their physical environment.",
      },
    ],
  },
  {
    type: "columns",
    items: [
      { label: "Timeline", text: "Shipped as part of 7 products in 12 months" },
      {
        label: "Disciplines",
        bullets: ["UX Research", "AR Interaction Design", "User Interface Design", "Community Design"],
      },
      {
        label: "Responsibilities",
        bullets: [
          "End-to-end product design",
          "AR experience design",
          "Prototyping and live development",
          "Community engagement strategy",
        ],
      },
      { label: "Tools", bullets: ["Figma", "Replit", "Claude Code"] },
    ],
  },

  { type: "heading", text: "Our Vision" },
  {
    type: "paragraph",
    text: "To make animal welfare feel local, visible, and participatory. PupSpot AR uses augmented reality to bring community causes into the spaces students already occupy — campuses, parks, high streets — making engagement feel natural rather than effortful.",
  },

  { type: "heading", text: "The Process" },
  { type: "image", src: "/images/fuGEylkGK0InaMp6oYKlM7XCs8.png", aspect: 4318 / 1239 },

  { type: "heading", text: "Initial Problem Discovery" },
  {
    type: "paragraph",
    text: "Student communities are highly motivated but time-poor. Animal welfare organisations struggle to reach younger audiences through traditional channels. The gap isn't interest — it's accessibility and relevance. By anchoring the experience in physical locations students already frequent, PupSpot AR reduces the barrier to participation from “I should do something” to “I can do something right here.”",
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
          "Live platform deployed and accessible to student and animal welfare communities.",
          "AR layer successfully integrated into a community-first mobile experience.",
          "Part of a portfolio of 7 independently shipped products in under 12 months.",
        ],
      },
      {
        label: "Product Development",
        bullets: [
          "Built and deployed using Replit and Claude Code for rapid iteration.",
          "AR interaction patterns designed from first principles given limited precedent in community-focused AR.",
          "Lightweight, accessible UI designed for a diverse student user base.",
        ],
      },
      {
        label: "Key Takeaways",
        bullets: [
          "AR works best when it reduces friction rather than adding novelty.",
          "Community platforms need a clear reason to return — PupSpot solves this through location-based discovery.",
          "Designing for student users means optimising for speed, simplicity, and social proof.",
        ],
      },
      {
        label: "Next Steps",
        bullets: [
          "Expand to additional campuses and animal welfare organisations.",
          "Add user-generated AR content to deepen community ownership.",
          "Explore partnership model with student unions and local shelters.",
        ],
      },
    ],
  },
];
