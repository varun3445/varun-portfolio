import Image from "next/image";

export type CaseStudyColumn = { label: string; text?: string; bullets?: string[] };

export type CaseStudyBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string; large?: boolean }
  | { type: "note"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; aspect: number; widthPct?: number }
  | { type: "imageRow"; images: { src: string; aspect: number }[] }
  | { type: "columns"; items: CaseStudyColumn[] }
  | {
      type: "imageText";
      image: string;
      aspect: number;
      label?: string;
      text?: string;
      bullets?: string[];
      imageFirst?: boolean;
    }
  | { type: "imageColumns"; image: string; aspect: number; items: CaseStudyColumn[]; imageFirst?: boolean };

function SectionHeading({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-black" />
      <h3 className="text-[20px] font-medium tablet:text-[24px] desktop:text-[32px] desktop-lg:text-[24px]">
        {text}
      </h3>
    </div>
  );
}

export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-black">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function ColumnItem({ item }: { item: CaseStudyColumn }) {
  return (
    <div className="flex min-w-0 flex-col gap-2.5">
      <p className="break-words text-[18px] tablet:text-[20px] desktop:text-[23px] desktop-lg:text-[25px]">
        {item.label}
      </p>
      {item.text && (
        <p className="text-[12px] leading-relaxed text-gray-2 tablet:text-[18px] desktop:text-[20px] desktop-lg:text-[22px]">
          <Rich text={item.text} />
        </p>
      )}
      {item.bullets && (
        <ul className="flex flex-col gap-1 pl-4">
          {item.bullets.map((b) => (
            <li key={b} className="list-disc text-[12px] leading-relaxed text-gray-2 tablet:text-[18px] desktop:text-[20px] desktop-lg:text-[22px]">
              <Rich text={b} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CaseStudyBlocks({ blocks }: { blocks: CaseStudyBlock[] }) {
  return (
    <div className="flex flex-col">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <div key={i} className="py-[30px] first:pt-0">
                <SectionHeading text={block.text} />
              </div>
            );
          case "paragraph":
            return (
              <p
                key={i}
                className={
                  block.large
                    ? "text-[18px] leading-relaxed tablet:text-[20px] desktop:text-[23px] desktop-lg:text-[25px]"
                    : "text-[12px] leading-relaxed tablet:text-[18px] desktop:text-[20px] desktop-lg:text-[22px]"
                }
              >
                <Rich text={block.text} />
              </p>
            );
          case "note":
            return (
              <p key={i} className="text-[12px] text-gray-1 tablet:text-[16px] desktop:text-[16px] desktop-lg:text-[18px]">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="flex flex-col gap-2 pl-5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="list-disc text-[12px] leading-relaxed text-gray-2 tablet:text-[18px] desktop:text-[20px] desktop-lg:text-[22px]"
                  >
                    <Rich text={item} />
                  </li>
                ))}
              </ul>
            );
          case "columns": {
            const cols = Math.min(block.items.length, 4);
            const gridClass =
              cols >= 4
                ? "grid-cols-2 tablet:grid-cols-4"
                : cols === 3
                  ? "grid-cols-2 tablet:grid-cols-3"
                  : "grid-cols-2";
            return (
              <div key={i} className={`grid ${gridClass} gap-x-6 gap-y-8 py-[30px] first:pt-0`}>
                {block.items.map((item) => (
                  <ColumnItem key={item.label} item={item} />
                ))}
              </div>
            );
          }
          case "image":
            return (
              <div
                key={i}
                className="relative my-4 overflow-hidden rounded-[15px]"
                style={{ aspectRatio: block.aspect, width: `${block.widthPct ?? 100}%`, marginLeft: "auto", marginRight: "auto" }}
              >
                <Image
                  src={block.src}
                  alt=""
                  fill
                  sizes="(min-width: 1200px) 1120px, 100vw"
                  className="object-cover"
                />
              </div>
            );
          case "imageRow":
            return (
              <div key={i} className="my-4 flex flex-col gap-5 tablet:flex-row">
                {block.images.map((img) => (
                  <div
                    key={img.src}
                    className="relative w-full overflow-hidden rounded-[15px]"
                    style={{ aspectRatio: img.aspect }}
                  >
                    <Image src={img.src} alt="" fill sizes="(min-width: 1200px) 560px, 100vw" className="object-cover" />
                  </div>
                ))}
              </div>
            );
          case "imageText":
            return (
              <div
                key={i}
                className={`flex flex-col gap-6 py-[30px] first:pt-0 tablet:gap-8 desktop:flex-row desktop:items-center ${
                  block.imageFirst ? "" : "desktop:flex-row-reverse"
                }`}
              >
                <div
                  className="relative w-full shrink-0 overflow-hidden rounded-[15px] desktop:w-1/2"
                  style={{ aspectRatio: block.aspect }}
                >
                  <Image src={block.image} alt="" fill sizes="(min-width: 1200px) 560px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  {block.label && <p className="text-[14px] font-medium desktop:text-[16px]">{block.label}</p>}
                  {block.text && (
                    <p className="text-[12px] leading-relaxed text-gray-2 tablet:text-[18px] desktop:text-[20px] desktop-lg:text-[22px]">
                      <Rich text={block.text} />
                    </p>
                  )}
                  {block.bullets && (
                    <ul className="flex flex-col gap-1 pl-4">
                      {block.bullets.map((b) => (
                        <li
                          key={b}
                          className="list-disc text-[12px] leading-relaxed text-gray-2 tablet:text-[18px] desktop:text-[20px] desktop-lg:text-[22px]"
                        >
                          <Rich text={b} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          case "imageColumns":
            return (
              <div
                key={i}
                className={`flex flex-col gap-8 py-[30px] first:pt-0 desktop:items-start desktop:gap-10 ${
                  block.imageFirst ? "desktop:flex-row" : "desktop:flex-row-reverse"
                }`}
              >
                <div
                  className="relative w-full shrink-0 overflow-hidden rounded-[15px] desktop:w-1/2"
                  style={{ aspectRatio: block.aspect }}
                >
                  <Image src={block.image} alt="" fill sizes="(min-width: 1200px) 560px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-8">
                  {block.items.map((item) => (
                    <ColumnItem key={item.label} item={item} />
                  ))}
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
