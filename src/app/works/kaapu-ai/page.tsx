import { CaseStudy } from "@/components/CaseStudy";
import { plateformBlocks, plateformSummary } from "@/data/plateform-content";

export const metadata = { title: "Kaapu AI — Varun Srivathsan" };

export default function KaapuAiPage() {
  return (
    <CaseStudy
      title="Kaapu AI"
      heroImage="/images/1Fbz3ZMDBgHq9zCQAHR9wL6zV9U.png"
      summary={plateformSummary}
      blocks={plateformBlocks}
    />
  );
}
