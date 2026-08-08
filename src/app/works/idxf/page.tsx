import { CaseStudy } from "@/components/CaseStudy";
import { idxfBlocks, idxfSummary } from "@/data/idxf-content";

export const metadata = { title: "IDXF - Idea Forge — Varun Srivathsan" };

export default function IdxfPage() {
  return (
    <CaseStudy
      title="Idea Forge"
      heroImage="/images/iRDfKhqqfQU2r4FtqVqKwZpLCdY.png"
      summary={idxfSummary}
      appLink="https://idxf.netlify.app"
      blocks={idxfBlocks}
    />
  );
}
