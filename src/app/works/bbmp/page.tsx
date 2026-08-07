import { CaseStudy } from "@/components/CaseStudy";
import { idxfBlocks } from "@/data/idxf-content";

export const metadata = { title: "BBMP Ride-Share — Varun Srivathsan" };

export default function BbmpPage() {
  return (
    <CaseStudy
      title="BBMP Ride-Share"
      heroImage="/images/AozA2pshbJnjHkHaRNwe98m77Y.png"
      blocks={idxfBlocks}
    />
  );
}
