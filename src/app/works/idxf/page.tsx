import { CaseStudy } from "@/components/CaseStudy";
import { idxfBlocks } from "@/data/idxf-content";

export const metadata = { title: "IDXF - Idea Forge — Varun Srivathsan" };

export default function IdxfPage() {
  return (
    <CaseStudy
      title="Idea Forge"
      heroImage="/images/n6QvmvH1FO1AYmltWB2ffHNJIds.png"
      appLink="https://idxf.netlify.app"
      blocks={idxfBlocks}
    />
  );
}
