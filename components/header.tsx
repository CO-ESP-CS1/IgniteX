import { Logo } from "@/components/logo";
import { HeaderDesktopNav, HeaderMobileNav } from "@/components/header-nav";
import { ThemeSwitcherNative } from "@/components/theme-switcher-native";

const MENU_ID = "ignitex-mobile-nav";

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  return (
    <>
      <input
        type="checkbox"
        id={MENU_ID}
        className="sr-only"
        aria-hidden="true"
      />

      <header className="site-header fixed inset-x-0 top-0 z-50">
        <div className="site-container flex h-full items-center justify-between gap-4">
          <Logo />

          <div className="hidden items-center lg:flex">
            <HeaderDesktopNav />
            <span className="header-divider" aria-hidden="true" />
            <ThemeSwitcherNative />
          </div>

          <label
            htmlFor={MENU_ID}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-ignitex-500 text-white shadow-md shadow-ignitex-500/25 transition-opacity hover:opacity-90 lg:hidden"
            style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
            aria-label="Ouvrir le menu"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
              <path d="M4 8h16M4 12h16M4 16h16" strokeLinecap="round" />
            </svg>
          </label>
        </div>
      </header>

      <div className="mobile-menu-overlay fixed inset-0 z-[200] lg:hidden" aria-hidden="true">
        <label
          htmlFor={MENU_ID}
          className="absolute inset-0 block bg-black/50"
          aria-label="Fermer le menu"
        />

        <div className="mobile-menu-panel mobile-menu-shell absolute inset-y-0 right-0 flex w-[min(88vw,320px)] flex-col">
          <div className="mobile-menu-shell-header flex h-14 items-center justify-between px-4">
            <Logo />
            <label
              htmlFor={MENU_ID}
              className="mobile-menu-close flex h-8 w-8 cursor-pointer items-center justify-center rounded-md"
              aria-label="Fermer le menu"
            >
              <CloseIcon />
            </label>
          </div>

          <HeaderMobileNav />

          <div className="mobile-menu-shell-footer p-4">
            <p className="mobile-menu-shell-label mb-2 text-[10px] font-medium uppercase tracking-[0.08em]">
              Apparence
            </p>
            <ThemeSwitcherNative variant="full" />
          </div>
        </div>
      </div>
    </>
  );
}
