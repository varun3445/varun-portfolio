import type { CaseStudyBlock } from "@/components/CaseStudyBlocks";

export const idxfSummary =
  "IDXF — Idea Forge is a mobile platform designed to address fragmentation in the creative economy, where professionals waste over 10 hours a week across disconnected tools with no structured way to find collaborators. I led the end-to-end UX process from research through to a validated, developer-ready prototype, conducting user surveys, competitor analysis, and four live experiments with over 100 participants before committing to a single design direction. The core experience centres on AI-driven project matching, a gesture-based explore interface built around familiar interaction patterns, and a phygital NFC networking system that achieved a 98% success rate in testing. A rewards and contribution tracking system was introduced in response to direct user feedback, incentivising ongoing collaboration and community engagement. The final UI was delivered using Google's Material 3 components alongside a comprehensive design system, ensuring consistency and a clean handoff for Flutter development. Post-launch, the platform received over 42,000 social media impressions and 110 supporters, validating both the product direction and the design decisions made throughout the process.";

export const idxfBlocks: CaseStudyBlock[] = [
  { type: "heading", text: "Design Challenge And Responsibilities Overview" },
  {
    type: "columns",
    items: [
      {
        label: "Challenge",
        text: "The creative economy is fragmented, leading to creative isolation, inefficiency, and a struggle to launch new ideas.",
      },
      {
        label: "Opportunity",
        text: 'Create an "always-on" digital ecosystem that solves these problems by providing a flexible space for creatives to connect, collaborate, and co-create.',
      },
    ],
  },
  {
    type: "columns",
    items: [
      { label: "Timeline", text: "9 Months" },
      { label: "Disciplines", bullets: ["User Experience Design", "User Interface Design"] },
      { label: "Responsibilities", bullets: ["UX Research", "UX/UI Mobile Design", "Prototyping", "Content"] },
      { label: "Tools", bullets: ["Figma", "Replit"] },
    ],
  },

  { type: "heading", text: "Our Vision" },
  {
    type: "paragraph",
    text: "To provide some background on our vision, we believe the creative economy is evolving into a truly **collaborative ecosystem**. Through our platform, we aim to facilitate a future where creatives can accomplish several key objectives. These include **overcoming isolation and inefficiency, discovering new ideas and partners, managing projects** from concept to completion, and **cultivating genuine, team-based relationships** within a single, integrated platform.",
  },

  { type: "heading", text: "The Process" },
  { type: "image", src: "/images/fuGEylkGK0InaMp6oYKlM7XCs8.png", aspect: 4318 / 1239 },

  { type: "heading", text: "Initial Problem Discovery" },
  {
    type: "paragraph",
    text: "The creative industry is a thriving **$124 billion economy** that is fragmented and isolating for many of its participants. While platforms like LinkedIn and Fiverr offer a space for visibility and transactional work, they often fail to foster the meaningful connections and long-term collaborations that are crucial for growth. This leaves a significant void for a true “third space” where creatives can **connect, co-create, and thrive together**.",
  },
  {
    type: "paragraph",
    text: "This disconnect is a significant barrier to success. Research indicates that over **50% of freelancers struggle to find local work opportunities**, and networking is often perceived as impersonal and transactional. Furthermore, a “pay-to-win” model on many platforms makes it difficult for emerging talent to gain visibility, leading to creative isolation and inefficiency.",
  },
  {
    type: "paragraph",
    text: "Our objective is to design a solution that bridges this gap. The goal is to create an always-on digital ecosystem that not only provides tools for ideation and project management but also empowers creatives to build a supportive community. By blending digital convenience with the power of **real-world human connection**, we aim to turn daily creative challenges into collaborative opportunities.",
  },
  {
    type: "imageRow",
    images: [
      { src: "/images/JQkWdeQoQ34rC2hqO6UfefeZ2cg.png", aspect: 1968 / 1568 },
      { src: "/images/5SfZ7EJp5F8wYdP0318vhNuRf0.png", aspect: 1968 / 1568 },
    ],
  },
  {
    type: "paragraph",
    text: "So, the **core problem** is that the **creative economy** is **fragmented** and existing platforms are **transactional**, **failing** to provide a space for **meaningful**, **long-term collaboration**.",
  },

  { type: "heading", text: "Desk Research" },
  {
    type: "paragraph",
    text: "Before diving into designs, I wanted to first look at websites and articles from Google’s Search Engine that mentioned key statistics to be mindful of from both the consumer and the brand perspective.",
  },
  {
    type: "columns",
    items: [
      {
        label: "User’s Perspective",
        bullets: [
          "Fragmentation: Creatives use at least 5 different apps to manage their projects.",
          "Cost: They spend over £25 each month on disconnected tools.",
          "Wasted Time: More than 10 hours a week wasted on app switching and manual searching.",
          "Ineffective Networking: Traditional platforms require 5+ hours per week of manual searching.",
        ],
      },
      {
        label: "Brand’s Perspective",
        bullets: [
          "Platform Fragmentation: No single platform serves as an all-in-one solution.",
          "Collaboration Gap: Existing platforms focus on showcasing finished work, not on the collaborative process of creating new ideas.",
          "Inefficient Workflows: Creatives' use of multiple, disconnected tools presents a major market opportunity for a unified platform.",
        ],
      },
    ],
  },
  { type: "image", src: "/images/kJQy9RPHs2VpxzrO02ypS9QMcX8.png", aspect: 3996 / 1364 },

  { type: "heading", text: "Competitor Analysis" },
  {
    type: "paragraph",
    text: "While **IDXF** is a unique platform, we analysed competitors to understand how they approach **creative collaboration**. Existing platforms focus on **portfolio visibility**, **professional networking**, and **transactional freelance services**. Our analysis shows that these models often fall short in fostering true **co-creation** and **community**, which validates the need for **IDXF's** unique, **integrated approach** to meet the **holistic needs** of creatives.",
  },
  { type: "image", src: "/images/S0ATRs1YhkKOia9Mm01114qZE.png", aspect: 4800 / 984 },

  { type: "heading", text: "User Pain Points" },
  { type: "paragraph", text: "And after these 4 experiments with over 100 users, we can conclude that:" },
  { type: "image", src: "/images/yZHO28T97k6tuBc4g9Z5oc6XltM.png", aspect: 4096 / 2536 },

  { type: "heading", text: "User Persona" },
  {
    type: "paragraph",
    text: "I wanted to create a user persona to **embody the ideal IDXF - Idea Forge** user based on the full research process I conducted, incorporating insights from the problem discovery, user surveys, competitor analysis, and major pain points. By synthesizing the gathered data, my aim is to **represent the user's preferences**, **pain points**, and **behaviours**, allowing for a more focused and effective redesign for our ideal user.",
  },
  { type: "image", src: "/images/nrKGlDMPXDTn8vXfaxNYjdKs.png", aspect: 4200 / 1488 },

  { type: "heading", text: "User Journey" },
  {
    type: "paragraph",
    text: "I created a user journey to **map out** how Carlos, our ideal IDXF user, would **navigate his current situation**, aiming to **understand the highs and lows of his emotions** while trying to meet with new people to collaborate with. This comprehensive visualisation provides valuable insights into Carlos’ experience, enabling a **targeted redesign** to optimize user engagement for and satisfaction.",
  },
  { type: "image", src: "/images/il92vJUVhbOWUlDLAfalzyU6bhM.png", aspect: 4074 / 2472 },

  { type: "heading", text: "Developing a Solution" },
  {
    type: "paragraph",
    text: "With IDXF's AI-driven matchmaking and 'phygital' technology, creatives can transform isolated ideas into collaborative projects. This means that through the IDXF platform and its physical networking tools, creatives can find ideal partners, access structured ideation guidance, and manage their projects seamlessly. This process ultimately leads to the efficient launch of high-impact, tangible projects.",
  },
  { type: "image", src: "/images/kuCLlKjcDd7iIiyCPhNLy6iBl3M.png", aspect: 4800 / 3051, widthPct: 69 },

  { type: "heading", text: "Redesign Goals" },
  {
    type: "list",
    items: [
      "Project Creation: Use AI to match collaborators and spark new project ideas.",
      "Collaboration: Incentivise teamwork with a points and reward system.",
      "In-Person Collaboration: Host real-world events to strengthen creative partnerships.",
      "Positive Impact: Build a loyal community by acting on user feedback.",
      "Efficient Workflow: Streamline creative workflows to save time and money.",
    ],
  },

  { type: "heading", text: "Low/Mid-Fidelity" },
  {
    type: "paragraph",
    text: "Here are some of my **initial thought processes** regarding our research and the goals for our app. The user flows and user type mapping provided us with the **first glimpse** of how our app could potentially work, with all the key functionalities implemented.",
  },
  { type: "image", src: "/images/0LQ30J1Q7lA25abUdnR9QJjx4r0.png", aspect: 4072 / 3016 },
  {
    type: "paragraph",
    text: "Our “Ugly Duckling” stage was dedicated to ensuring that the UX of our app **aligns with the users'** needs in terms of **usability and functionality**. Here are some of the wireframes:",
  },
  { type: "image", src: "/images/SHr1TVDgVm2TYaZKW4oOkF55g.png", aspect: 4200 / 13072 },

  { type: "heading", text: "Major Improvements + Design Decisions" },
  {
    type: "paragraph",
    text: "In terms of the actual high fidelities for launch, we **conducted user testing** throughout the process with **my team**, potential investors, brands, and customers. I'll be discussing the **three major improvements/design decisions** we implemented to satisfy the user needs and brand identity.",
  },

  { type: "heading", text: "Gesture introduction" },
  {
    type: "paragraph",
    text: "After thorough user testing throughout the process with my team, potential innovators, explorers, and collaborators, here was one of the biggest areas I **improved to satisfy user needs and wants**.",
  },
  {
    type: "imageText",
    image: "/images/IsYX9m8ZmWtcJspTmyb3ZpmCVJk.png",
    aspect: 2456 / 2148,
    imageFirst: true,
    label: "The navigation system from IDXF’s explore page screens",
    bullets: [
      "We added gestures to the explore page based on familiarity demands of the users. Swipe to like, skip, and know more.",
      "Swipe right to like a project, left to skip, swipe up to see the projects you follow.",
      "Users wanted something that made them feel like they “matched” with the project/creator.",
    ],
  },

  { type: "heading", text: "Design Decision" },
  {
    type: "paragraph",
    text: "The next major design decision was **deciding on the colour scheme**. After conducting colour theory research, we learned that the colour yellow represents **“warmth, optimism and energy”**, and we wanted to move towards that path. Another crucial aspect we had to consider was **designing for accessibility**.",
  },
  { type: "image", src: "/images/czW0ELXLSroGFbhVuQfVWxEJEM.png", aspect: 4004 / 968 },

  { type: "heading", text: "Rewards system" },
  {
    type: "paragraph",
    text: "Recognizing the importance of **calculating contribution** in our app, the last major improvement involved exploring how **other successful companies handle rewarding users**.",
  },
  {
    type: "imageText",
    image: "/images/Qfndx7t79pyrGpTLTIP2m45mc.png",
    aspect: 2456 / 2148,
    imageFirst: true,
    label: "The new rewards system and impact measurement for users",
    bullets: [
      "We added a rewards system through which users could earn coins for every task, project or collaboration.",
      "Users could earn coins and redeem them for purchasing other creative platform subscriptions.",
      "Users could track how much time they have spent towards creating a positive impact and go up ranks, as well as rise on the leader board.",
    ],
  },

  { type: "heading", text: "Design System" },
  {
    type: "paragraph",
    text: "With the creation, iteration, and completion of thousands (yes, thousands!) of wireframes, I successfully finalized the UI Designs for our Pilot phase. To achieve this, I utilized **Google's Material 3 UI Components** to create the final wireframes. With assistance from another UI Designer, we created a detailed **Design System/Style Guide** page, which significantly improved **consistency in terms of white space, balance, and unity** within my designs. This allowed the developers to have easy access to all our design specifications and begin implementing them in the TestFlight app using Flutter.",
  },
  { type: "image", src: "/images/VS6nQtENZfHzAX1S6azVYQNQ0.png", aspect: 3996 / 4978 },

  { type: "heading", text: "UI for Launch" },
  { type: "image", src: "/images/eV0jR6oDGXZYQtvGzLkzfarOHI.png", aspect: 3392 / 5424, widthPct: 64 },

  { type: "heading", text: "Post Designs Outcome" },
  {
    type: "imageColumns",
    image: "/images/SgotnR3tJfqnsSdvjpB56843C4s.png",
    aspect: 675 / 500,
    imageFirst: false,
    items: [
      {
        label: "Market Validation",
        bullets: [
          "Initial social media outreach garnered over 42,000 views and 110+ supporters, confirming strong demand.",
          "The final exhibit was highly effective for user acquisition.",
          "Testing with RCA students provided valuable early feedback.",
        ],
      },
      {
        label: "Product Development",
        bullets: [
          "The platform's features, including AI matchmaking and NFC-enabled wearables, are validated by data-driven experiments.",
          "The neobrutalistic design emphasises functionality over ornamentation.",
          "The platform is built on four core sections: Explore, Search, Create, and Ideate.",
        ],
      },
      {
        label: "My Key Takeaways",
        bullets: [
          "Traditional platforms underperform, validating the need for a dedicated creative matching system.",
          "User tests showed a need for structured guidance during ideation, leading to the inclusion of planning tools.",
          "A colour-coded wearable system boosted user confidence.",
        ],
      },
      {
        label: "Next Steps",
        bullets: [
          "Further develop the app for real-time collaborations and mentorship.",
          "Prototype the physical tag with enhanced NFC capabilities.",
          "Conduct pilot tests in dedicated networking spaces to refine the user experience.",
        ],
      },
    ],
  },
  { type: "image", src: "/images/1IsBewAuoSpXqAP0beZnju8k6Ng.png", aspect: 1360 / 500 },
];
