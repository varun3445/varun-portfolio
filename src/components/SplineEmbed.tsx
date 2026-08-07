"use client";

import Script from "next/script";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url?: string }, HTMLElement>;
    }
  }
}

export function SplineEmbed({ url, className }: { url: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.72/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      {/* Oversized + absolutely positioned so the bottom-right "Built with Spline"
          watermark badge gets cropped outside the visible container, matching
          how the original Framer embed crops it via a wider canvas. */}
      {/* @ts-expect-error custom element */}
      <spline-viewer
        url={url}
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "115%",
          height: "115%",
        }}
      />
    </div>
  );
}
