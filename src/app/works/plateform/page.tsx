import { CaseStudy } from "@/components/CaseStudy";
import { plateformBlocks, plateformSummary } from "@/data/plateform-content";

export const metadata = { title: "Plateform — Varun Srivathsan" };

export default function PlateformPage() {
  return (
    <CaseStudy
      title="Plateform"
      heroImage="/images/1Fbz3ZMDBgHq9zCQAHR9wL6zV9U.png"
      summary={plateformSummary}
      appLink="https://plateform-hounslow.netlify.app"
      blocks={plateformBlocks}
    />
  );
}
