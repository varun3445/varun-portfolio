export type Project = {
  mainImage: string;
  projectTitle: string;
  services: string[];
  link: string;
  status: "published" | "building";
  /** When true, this project is excluded from the homepage's Featured Works
   * section and only appears on the /works "View All Projects" listing. */
  hideFromHome?: boolean;
};

export const PROJECTS: Project[] = [
  {
    mainImage: "/images/n6QvmvH1FO1AYmltWB2ffHNJIds.png",
    projectTitle: "IDXF - Idea Forge",
    services: ["Mobile App", "Networking Platform", "AI Powered"],
    link: "/works/idxf",
    status: "published",
  },
  {
    mainImage: "/images/FTaIF6vN0dinKBMZ0o8rryptIwE.png",
    projectTitle: "Pupspot-AR",
    services: ["Mobile App", "Community Platform", "AR Experience"],
    link: "/works/pupspot-ar",
    status: "building",
  },
  {
    mainImage: "/images/1Fbz3ZMDBgHq9zCQAHR9wL6zV9U.png",
    projectTitle: "Plateform - Hounslow",
    services: ["Mobile App", "Community Platform", "Government"],
    link: "/works/plateform",
    status: "building",
  },
  {
    mainImage: "/images/AozA2pshbJnjHkHaRNwe98m77Y.png",
    projectTitle: "BBMP Ride-Share",
    services: ["Driver Interface", "Ticketing System", "Vehicle HMI"],
    link: "/works/bbmp",
    status: "building",
  },
  {
    mainImage: "/images/kaapu-ai-hero.png",
    projectTitle: "Kaapu AI",
    services: ["Mobile App", "Health Tech", "Voice AI"],
    link: "/works/kaapu-ai",
    status: "building",
    hideFromHome: true,
  },
];
