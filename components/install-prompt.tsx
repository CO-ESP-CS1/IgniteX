"use client";

import { useEffect, useState } from "react";

export function InstallPrompt() {
  const [showIosHint, setShowIosHint] = useState(false);

  useEffect(() => {
    const isIos =
      /iphone|ipad|ipod/i.test(navigator.userAgent) &&
      !(window as Window & { MSStream?: unknown }).MSStream;
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      ("standalone" in navigator &&
        (navigator as Navigator & { standalone?: boolean }).standalone);

    if (isIos && !isStandalone) {
      setShowIosHint(true);
    }
  }, []);

  if (!showIosHint) return null;

  return (
    <div
      className="fixed z-40 mx-auto max-w-md rounded-2xl border border-border bg-surface-elevated/95 p-4 shadow-xl backdrop-blur-md dark:shadow-black/40 sm:left-auto"
      style={{
        bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
        left: "max(1rem, env(safe-area-inset-left, 0px))",
        right: "max(1rem, env(safe-area-inset-right, 0px))",
      }}
    >
      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
        Installer sur l&apos;écran d&apos;accueil
      </p>
      <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
        Appuyez sur{" "}
        <span className="inline-block rounded bg-surface px-1.5 py-0.5 font-mono text-zinc-800 dark:text-zinc-200">
          Partager
        </span>{" "}
        puis{" "}
        <span className="inline-block rounded bg-surface px-1.5 py-0.5 font-mono text-zinc-800 dark:text-zinc-200">
          Sur l&apos;écran d&apos;accueil
        </span>
        .
      </p>
      <button
        type="button"
        onClick={() => setShowIosHint(false)}
        className="mt-3 text-xs font-medium text-ignitex-600 dark:text-ignitex-400"
      >
        Fermer
      </button>
    </div>
  );
}
