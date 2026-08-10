import { CaseStudy } from "@/components/CaseStudy";
import { pupspotBlocks, pupspotSummary } from "@/data/pupspot-content";

export const metadata = { title: "Pupspot-AR — Varun Srivathsan" };

export default function PupspotArPage() {
  return (
    <CaseStudy
      title="Pupspot-AR"
      heroImage="/images/FTaIF6vN0dinKBMZ0o8rryptIwE.png"
      summary={pupspotSummary}
      blocks={pupspotBlocks}
    />
  );
}
