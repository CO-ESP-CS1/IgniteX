"use client";

import { useEffect, useRef } from "react";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import type { StatItem } from "@/lib/data";

type StatsCounterProps = {
  items: StatItem[];
  variant?: "band" | "grid" | "inline";
  intro?: string;
  className?: string;
};

export function StatsCounter({
  items,
  variant = "band",
  intro,
  className = "",
}: StatsCounterProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const grid = (
    <div
      ref={gridRef}
      className={`stat-counters grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 ${
        variant === "inline" ? "gap-4" : ""
      }`}
    >
      {items.map((stat, index) => (
        <div
          key={stat.label}
          className="stat-counter-item"
          style={{ transitionDelay: `${index * 90}ms` }}
        >
          <p
            className={`stat-counter-value ${
              variant === "band"
                ? "text-3xl text-white sm:text-4xl"
                : "text-2xl text-gradient-primary sm:text-3xl"
            }`}
          >
            <CountUp
              target={stat.value}
              suffix={stat.suffix}
              decimals={stat.decimals ?? 0}
            />
          </p>
          <p
            className={`mt-1 text-sm font-medium ${
              variant === "band" ? "text-white/85" : "text-muted"
            }`}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );

  if (variant === "band") {
    return (
      <section className={`stats-band w-full ${className}`} aria-label="Chiffres clés">
        <div className="site-container py-12 sm:py-14">
          {intro && (
            <Reveal>
              <p className="mb-8 text-center text-sm font-medium text-white/90 sm:text-base">
                {intro}
              </p>
            </Reveal>
          )}
          {grid}
        </div>
      </section>
    );
  }

  if (variant === "grid") {
    return (
      <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${className}`}>
        {items.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 70}>
            <div className="card card-accent rounded-xl px-5 py-5 sm:px-6">
              <p className="stat-counter-value text-2xl text-ignitex-600 dark:text-ignitex-400 sm:text-3xl">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    );
  }

  return <div className={className}>{grid}</div>;
}
