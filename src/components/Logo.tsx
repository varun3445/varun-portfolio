import Image from "next/image";
import Link from "next/link";

export function Logo({ size = 45 }: { size?: number }) {
  return (
    <Link href="/" aria-label="Home" style={{ width: size, height: size }} className="relative block shrink-0">
      <Image
        src="/images/G6Wwzo6CcM9xMHX6yhmhXidQKdE.png"
        alt="Varun Srivathsan logo"
        fill
        sizes={`${size}px`}
        className="object-contain"
      />
    </Link>
  );
}
