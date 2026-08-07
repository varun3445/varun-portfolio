export type Project = {
  mainImage: string;
  projectTitle: string;
  services: string[];
  link: string;
  status: "published" | "building";
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
];
