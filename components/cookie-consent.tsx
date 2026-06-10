"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { brand } from "@/lib/data";

const CONSENT_KEY = "ignitex-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(CONSENT_KEY) === "accepted";
      if (!accepted) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 z-50 border-t border-border bg-surface-elevated/95 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md dark:shadow-[0_-8px_30px_rgba(0,0,0,0.35)]"
      style={{ bottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="site-container flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-5">
        <div className="min-w-0 flex-1">
          <p
            id="cookie-consent-title"
            className="text-sm font-semibold text-foreground"
          >
            Ce site utilise des cookies
          </p>
          <p
            id="cookie-consent-desc"
            className="mt-1 text-sm leading-relaxed text-muted"
          >
            {brand.trademark} utilise des cookies essentiels pour mémoriser vos
            préférences (thème, consentement) et assurer le bon fonctionnement du
            site. En cliquant sur « Accepter », vous acceptez leur utilisation.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Link
            href="/cookies"
            className="btn-secondary px-4 py-2 text-sm"
          >
            En savoir plus
          </Link>
          <button
            type="button"
            onClick={accept}
            className="btn-primary px-4 py-2 text-sm"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
