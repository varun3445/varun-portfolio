import type { CaseStudyBlock } from "@/components/CaseStudyBlocks";

export const kaapuSummary =
  "Kaapu AI is the world's first voice-powered health intelligence app for people living alone with chronic illness. Built solo in 4 months and shipped on iOS and Android, Kaapu was born from a personal experience — a severe asthma attack at 2am as an international student, unable to speak or call for help. The app combines voice AI, 3D pain mapping, AI-generated health summaries, and real-time SOS alerts to emergency contacts into a single seamless experience. Kaapu was selected as an InnovationRCA finalist, invited to pitch at Apple, recognised by the Institute for Chronic Health and Pain, and ranked top 10 on PeerPush.";

export const kaapuBlocks: CaseStudyBlock[] = [
  { type: "heading", text: "Challenges and Responsibilities" },
  {
    type: "columns",
    items: [
      {
        label: "Challenge",
        text: "People living alone with chronic illness have no reliable way to communicate what they're experiencing during a health episode — especially when symptoms make speaking, typing, or thinking clearly impossible. Existing health apps require too much input at exactly the moment users have the least capacity.",
      },
      {
        label: "Opportunity",
        text: "Design a voice-first, low-friction health companion that captures pain and symptoms effortlessly, alerts the right people automatically, and gives clinicians and caregivers meaningful context without burdening the user.",
      },
    ],
  },
  {
    type: "columns",
    items: [
      { label: "Timeline", text: "4 Months, Solo" },
      {
        label: "Disciplines",
        bullets: ["Voice UX and Conversational Design", "iOS and Android UI Design", "3D Interaction Design", "Service Design"],
      },
      {
        label: "Responsibilities",
        bullets: [
          "End-to-end product design and development",
          "User research and clinical validation",
          "Conversational AI design",
          "GTM strategy and community outreach",
        ],
      },
      { label: "Tools", bullets: ["Figma", "React Native", "Claude AI", "Clay.com"] },
    ],
  },

  { type: "heading", text: "Our Vision" },
  {
    type: "paragraph",
    text: "To make health management effortless for the people who need it most. Kaapu exists for the moments when traditional apps fail — when you're in pain, scared, and alone. The product should require almost nothing from the user and give everything back in return.",
  },

  { type: "heading", text: "The Process" },
  { type: "image", src: "/images/fuGEylkGK0InaMp6oYKlM7XCs8.png", aspect: 4318 / 1239 },

  { type: "heading", text: "Initial Problem Discovery" },
  {
    type: "paragraph",
    text: "Chronic illness affects millions of people living alone globally, yet most health apps assume the user is well enough to engage with them. The core problem is not a lack of health data — it's a lack of effortless, context-aware capture at the moment it matters most. Early user research in care communities and chronic illness groups revealed a consistent theme: users didn't want to log their mood every day. They wanted a space to communicate when they were in pain. That single insight changed everything.",
  },
  {
    type: "paragraph",
    text: "The original product concept was a manual mood and symptom tracker. Within the first weeks of testing, retention dropped because daily logging felt irrelevant to users who weren't symptomatic. After speaking directly with users in online care communities, the product was pivoted entirely — from manual input to voice-triggered, symptom-led interaction. A conversational AI layer was added to help users describe what they were experiencing naturally, without clinical language or structured forms.",
  },

  { type: "heading", text: "Post Designs Outcome" },
  {
    type: "columns",
    layout: "outcome",
    items: [
      {
        label: "Market Validation",
        bullets: [
          "Live on iOS and Android with active users.",
          "Ranked top 10 products on PeerPush.",
          "Recognised by the Institute for Chronic Health and Pain.",
          "InnovationRCA finalist.",
          "Invited to pitch at Apple.",
          "Secured direct access to NHS GP practice to validate clinical workflows and study competitive tools firsthand.",
        ],
      },
      {
        label: "Product Development",
        bullets: [
          "Built entirely in React Native with Claude AI powering the conversational health layer.",
          "3D body map designed and built from scratch as a custom interaction model.",
          "Voice interaction flows designed for zero-friction input during high-stress health episodes.",
          "GTM executed through Clay.com targeting private GPs and healthcare companies, generating 42K+ impressions and 120+ supporters in 48 hours with zero budget.",
        ],
      },
      {
        label: "Key Takeaways",
        bullets: [
          "Designing for vulnerability requires removing every unnecessary step — if it requires effort, it will fail at the worst moment.",
          "User research must happen before building, not after — the pivot saved the product.",
          "Voice UX is fundamentally different from touch UX — silence, hesitation, and error states need as much design attention as the happy path.",
          "Clinical credibility is built through access and relationships, not just product features.",
        ],
      },
      {
        label: "Next Steps",
        bullets: [
          "Expand clinical partnerships with private GP practices and NHS trusts.",
          "Build Kaapu at Work — a B2B version for employers managing employees with chronic conditions.",
          "Pursue Class IIa MHRA certification to unlock clinical decision support capabilities.",
          "Scale voice AI layer with more nuanced symptom understanding and multi-language support.",
        ],
      },
    ],
  },
];
