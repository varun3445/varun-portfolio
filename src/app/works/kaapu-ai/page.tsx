import { CaseStudy } from "@/components/CaseStudy";
import { kaapuBlocks, kaapuSummary } from "@/data/kaapu-content";

export const metadata = { title: "Kaapu AI — Varun Srivathsan" };

export default function KaapuAiPage() {
  return (
    <CaseStudy
      title="Kaapu AI"
      heroImage="/images/kaapu-ai-hero.png"
      summary={kaapuSummary}
      blocks={kaapuBlocks}
    />
  );
}
