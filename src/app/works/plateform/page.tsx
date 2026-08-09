import { CaseStudy } from "@/components/CaseStudy";
import { plateformBlocks, plateformSummary } from "@/data/plateform-content";

export const metadata = { title: "Plateform — Varun Srivathsan" };

export default function PlateformPage() {
  return (
    <CaseStudy
      title="Plateform"
      heroImage="/images/plateform-hero.png"
      summary={plateformSummary}
      appLink="https://plateform-hounslow.netlify.app"
      blocks={plateformBlocks}
    />
  );
}
