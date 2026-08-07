import Image from "next/image";

export type CaseStudyBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt?: string }
  | { type: "note"; text: string }
  | { type: "meta"; items: { label: string; value: string | string[] }[] };

export function CaseStudyBlocks({ blocks }: { blocks: CaseStudyBlock[] }) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h3 key={i} className="mt-6 font-clash text-2xl font-medium md:text-3xl">
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={i} className="text-base leading-relaxed text-gray-2">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="flex flex-col gap-2 pl-5">
                {block.items.map((item) => (
                  <li key={item} className="list-disc text-base leading-relaxed text-gray-2">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "note":
            return (
              <p key={i} className="text-sm italic text-gray-1">
                {block.text}
              </p>
            );
          case "meta":
            return (
              <div key={i} className="grid grid-cols-2 gap-6 rounded-3xl bg-surface p-8 md:grid-cols-4">
                {block.items.map((m) => (
                  <div key={m.label} className="flex flex-col gap-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-1">
                      {m.label}
                    </span>
                    {Array.isArray(m.value) ? (
                      <div className="flex flex-col gap-1">
                        {m.value.map((v) => (
                          <span key={v} className="text-sm">
                            {v}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-sm">{m.value}</span>
                    )}
                  </div>
                ))}
              </div>
            );
          case "image":
            return (
              <div key={i} className="relative my-4 aspect-video w-full overflow-hidden rounded-3xl bg-surface">
                <Image
                  src={block.src}
                  alt={block.alt ?? ""}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
