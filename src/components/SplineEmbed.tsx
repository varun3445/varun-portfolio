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
    <div className={className}>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.72/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      {/* @ts-expect-error custom element */}
      <spline-viewer
        url={url}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
