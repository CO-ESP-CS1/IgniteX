import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/data";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const isFooter = variant === "footer";

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
        className={`dark:hidden ${
          isFooter
            ? "h-10 w-auto max-w-[12rem] object-contain sm:h-11 sm:max-w-[13rem]"
            : "h-14 w-auto max-w-[15rem] object-contain sm:h-16 sm:max-w-[18rem]"
        }`}
        priority={!isFooter}
      />
      <Image
        src="/images/ignitex-logo-dark.png"
        alt=""
        aria-hidden="true"
        width={1024}
        height={682}
        className={`hidden dark:block ${
          isFooter
            ? "h-10 w-auto max-w-[12rem] object-contain sm:h-11 sm:max-w-[13rem]"
            : "h-14 w-auto max-w-[15rem] object-contain sm:h-16 sm:max-w-[18rem]"
        }`}
        priority={!isFooter}
      />
    </Link>
  );
}
