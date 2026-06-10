import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/data";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const isFooter = variant === "footer";

  if (!isFooter) {
    return (
      <Link
        href="/"
        className={`group inline-flex min-w-0 items-center ${className}`}
        aria-label={`${brand.trademark}, accueil`}
      >
        <Image
          src="/images/ignitex-logo.png"
          alt={brand.trademark}
          width={1024}
          height={682}
          className="h-12 w-auto max-w-[14rem] object-contain sm:h-14 sm:max-w-[17rem]"
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex min-w-0 items-center gap-2.5 ${className}`}
      aria-label={`${brand.trademark}, accueil`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-ignitex-500 to-ignitex-600 shadow-md shadow-ignitex-500/25">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="M16 4L18 12H26L20.5 17L22.5 26L16 21L9.5 26L11.5 17L6 12H14L16 4Z"
            stroke="white"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-tight text-white">
          Ignite<span className="text-ignitex-500">X</span>
          <span className="text-[0.55em] align-super text-ignitex-500">™</span>
        </span>
      </span>
    </Link>
  );
}
