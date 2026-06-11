"use client";

import { useEffect, useState } from "react";
import { LoadingPage } from "@/components/loading-page";

const MIN_DISPLAY_MS = 1400;
const FADE_MS = 450;

export function SplashLoader() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">("visible");

  useEffect(() => {
    const startedAt = Date.now();

    const finish = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      window.setTimeout(() => {
        setPhase("fading");
        window.setTimeout(() => setPhase("hidden"), FADE_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  if (phase === "hidden") return null;

  return (
    <LoadingPage
      className={`fixed inset-0 z-[500] transition-opacity duration-[450ms] ease-out ${
        phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    />
  );
}
