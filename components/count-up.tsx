"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function CountUp({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1400,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(
    `${prefix}${(0).toFixed(decimals)}${suffix}`,
  );
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;

        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const value = target * easeOutCubic(progress);
          setDisplay(
            `${prefix}${value.toFixed(decimals)}${suffix}`,
          );
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, prefix, decimals, duration]);

  return (
    <span ref={ref} className={className} aria-live="polite">
      {display}
    </span>
  );
}
