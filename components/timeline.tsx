"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import type { TimelineEvent } from "@/lib/data";

type TimelineProps = {
  events: TimelineEvent[];
  label?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function Timeline({
  events,
  label = "Parcours",
  title = "Notre évolution",
  description = "Des premiers systèmes terrain à IgniteX™ Platform v7.",
  className = "",
}: TimelineProps) {
  const fillRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const steps = stepsRef.current.filter(Boolean) as HTMLDivElement[];
    const fill = fillRef.current;
    if (!steps.length || !fill) return;

    const active = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = steps.indexOf(entry.target as HTMLDivElement);
          if (index < 0) return;

          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            active.add(index);
          }
        });

        if (active.size > 0) {
          const max = Math.max(...active);
          const percent =
            max === 0 ? 18 : max === events.length - 1 ? 100 : 50;
          fill.style.height = `${percent}%`;
        }
      },
      { rootMargin: "-18% 0px -18% 0px", threshold: 0.2 },
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, [events.length]);

  return (
    <section
      id="parcours"
      className={`section-py w-full bg-surface ${className}`}
      aria-labelledby="timeline-heading"
    >
      <div className="site-container">
        <Reveal>
          <SectionHeader
            label={label}
            title={title}
            description={description}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="timeline-shell mt-12">
          <div className="timeline-rail" aria-hidden="true" />
          <div ref={fillRef} className="timeline-fill" aria-hidden="true" />

          {events.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => {
                stepsRef.current[index] = el;
              }}
              className="timeline-step"
            >
              <div className="timeline-dot" aria-hidden="true" />

              <div className="timeline-step-card-wrap">
                <article className="glass-card timeline-step-card">
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    <span className="text-gradient-primary">{event.title}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {event.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {event.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <svg
                          viewBox="0 0 16 16"
                          className="mt-0.5 h-4 w-4 shrink-0 text-ignitex-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 8l3 3 7-7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <div className="timeline-step-meta flex flex-col justify-center">
                <span className="timeline-phase" aria-hidden="true">
                  {event.phase}
                </span>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
