type ThemeSwitcherNativeProps = {
  variant?: "compact" | "full";
  lightOnly?: boolean;
};

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeSwitcherNative({
  variant = "compact",
  lightOnly = false,
}: ThemeSwitcherNativeProps) {
  const shellClass = lightOnly
    ? "border-zinc-200 bg-zinc-50"
    : "border-border bg-surface";

  if (variant === "full") {
    return (
      <div
        className={`ignitex-theme-switch flex w-full gap-0.5 rounded-md border p-0.5 ${shellClass}`}
        role="group"
        aria-label="Choisir le thème"
      >
        <button
          type="button"
          data-theme-set="light"
          className="ignitex-theme-btn flex flex-1 items-center justify-center gap-1.5 rounded-[5px] px-3 py-2 text-xs font-medium text-zinc-600"
        >
          <SunIcon className="h-3.5 w-3.5 shrink-0" />
          Clair
        </button>
        <button
          type="button"
          data-theme-set="dark"
          className="ignitex-theme-btn flex flex-1 items-center justify-center gap-1.5 rounded-[5px] px-3 py-2 text-xs font-medium text-zinc-600"
        >
          <MoonIcon className="h-3.5 w-3.5 shrink-0" />
          Sombre
        </button>
      </div>
    );
  }

  return (
    <div
      className={`ignitex-theme-switch flex rounded-md border p-0.5 ${shellClass}`}
      role="group"
      aria-label="Choisir le thème"
    >
      <button
        type="button"
        data-theme-set="light"
        aria-label="Mode clair"
        title="Mode clair"
        className="ignitex-theme-btn flex h-7 w-7 items-center justify-center rounded-[5px] text-muted"
      >
        <SunIcon className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        data-theme-set="dark"
        aria-label="Mode sombre"
        title="Mode sombre"
        className="ignitex-theme-btn flex h-7 w-7 items-center justify-center rounded-[5px] text-muted"
      >
        <MoonIcon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
