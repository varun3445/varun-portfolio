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
      {/* Centered; sized per breakpoint purely for framing/zoom now that the
          watermark is masked separately below (see note there) rather than
          relying on oversizing this to push it past the crop edge. */}
      {/* pointer-events: none — this is a decorative background scene, not an
          interactive 3D viewer. Without this, Spline's own orbit/zoom drag
          handling captures wheel events and blocks page scroll entirely
          whenever the cursor is over it. */}
      {/* @ts-expect-error custom element */}
      <spline-viewer
        url={url}
        className="pointer-events-none absolute left-1/2 top-1/2 block h-[118%] w-[108%] origin-center -translate-x-1/2 -translate-y-1/2 scale-75 tablet:scale-100"
      />
      {/* Masks the "Built with Spline" watermark badge, which Spline anchors
          to this canvas's own bottom-right corner. Sizing the host to hide
          it via overflow-crop (the original approach) coupled the zoom level
          to the mask, so a dedicated opaque cover is used instead — this
          lets the canvas size above be tuned freely for framing. Sized
          generously since scale-75 shifts the badge inward from the corner. */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-64 bg-black tablet:h-12 tablet:w-40" />
    </div>
  );
}
