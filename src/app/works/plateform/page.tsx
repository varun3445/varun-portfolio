import { CaseStudy } from "@/components/CaseStudy";
import { idxfBlocksShort, idxfSummary } from "@/data/idxf-content";

export const metadata = { title: "Plateform — Varun Srivathsan" };

export default function PlateformPage() {
  return (
    <CaseStudy
      title="Plateform"
      heroImage="/images/1Fbz3ZMDBgHq9zCQAHR9wL6zV9U.png"
      summary={idxfSummary}
      appLink="https://plateform-hounslow.netlify.app"
      blocks={idxfBlocksShort}
    />
  );
}
