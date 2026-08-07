import { CaseStudy } from "@/components/CaseStudy";
import { idxfBlocks } from "@/data/idxf-content";

export const metadata = { title: "Pupspot-AR — Varun Srivathsan" };

export default function PupspotArPage() {
  return (
    <CaseStudy
      title="Pupspot-AR"
      heroImage="/images/FTaIF6vN0dinKBMZ0o8rryptIwE.png"
      appLink="https://pupspot-ar.netlify.app"
      blocks={idxfBlocks}
    />
  );
}
