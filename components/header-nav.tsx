"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavLinkActive } from "@/lib/nav-utils";
import { navLinks } from "@/lib/data";

const mainLinks = navLinks.filter((l) => l.href !== "/contact");

export function HeaderDesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-stretch lg:flex" aria-label="Navigation principale">
      {mainLinks.map((link) => {
        const active = isNavLinkActive(pathname, link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`nav-link ${active ? "is-active" : ""}`}
          >
            {link.label}
          </Link>
        );
      })}
      <Link
        href="/contact"
        aria-current={isNavLinkActive(pathname, "/contact") ? "page" : undefined}
        className={`nav-cta self-center ${
          isNavLinkActive(pathname, "/contact") ? "is-active" : ""
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}

export function HeaderMobileNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 space-y-0.5 overflow-y-auto p-3" aria-label="Navigation mobile">
      {mainLinks.map((link) => {
        const active = isNavLinkActive(pathname, link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`mobile-nav-link ${active ? "is-active" : ""}`}
          >
            {link.label}
          </Link>
        );
      })}
      <Link
        href="/contact"
        aria-current={isNavLinkActive(pathname, "/contact") ? "page" : undefined}
        className={`mobile-nav-link ${isNavLinkActive(pathname, "/contact") ? "is-active" : ""}`}
      >
        Contact
      </Link>
    </nav>
  );
}
