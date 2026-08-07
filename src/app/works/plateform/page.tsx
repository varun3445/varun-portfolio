import { CaseStudy } from "@/components/CaseStudy";
import { idxfBlocks } from "@/data/idxf-content";

export const metadata = { title: "Plateform — Varun Srivathsan" };

export default function PlateformPage() {
  return (
    <CaseStudy
      title="Plateform"
      subtitle="London - Borough of Hounslow"
      heroImage="/images/1Fbz3ZMDBgHq9zCQAHR9wL6zV9U.png"
      appLink="https://plateform-hounslow.netlify.app"
      blocks={idxfBlocks}
    />
  );
}
