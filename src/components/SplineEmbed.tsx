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
      {/* Oversized + centered so the composition stays centered while the
          bottom-right "Built with Spline" watermark badge (anchored to the
          scaled host's own corner) gets pushed outside the visible crop,
          matching how the original Framer embed hides it. */}
      {/* pointer-events: none — this is a decorative background scene, not an
          interactive 3D viewer. Without this, Spline's own orbit/zoom drag
          handling captures wheel events and blocks page scroll entirely
          whenever the cursor is over it. */}
      {/* @ts-expect-error custom element */}
      <spline-viewer
        url={url}
        style={{
          display: "block",
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "108%",
          height: "118%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
