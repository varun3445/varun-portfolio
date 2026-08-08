import { CaseStudy } from "@/components/CaseStudy";
import { idxfBlocks, idxfSummary } from "@/data/idxf-content";

export const metadata = { title: "BBMP Ride-Share — Varun Srivathsan" };

export default function BbmpPage() {
  return (
    <CaseStudy
      title="BBMP Ride-Share"
      heroImage="/images/AozA2pshbJnjHkHaRNwe98m77Y.png"
      summary={idxfSummary}
      blocks={idxfBlocks}
    />
  );
}
