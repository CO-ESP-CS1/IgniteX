"use client";

import { useCallback, useId, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import type { FaqGroup } from "@/lib/data";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const DURATION_MS = 280;

type FaqSectionProps = {
  groups: FaqGroup[];
  title?: string;
  description?: string;
  className?: string;
};

function FaqAccordionItem({
  question,
  answer,
  defaultOpen = false,
  groupId,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  groupId: string;
}) {
  const contentId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(defaultOpen);
  const animating = useRef(false);

  const toggle = useCallback(() => {
    const panel = panelRef.current;
    if (!panel || animating.current) return;

    animating.current = true;

    if (open) {
      const start = panel.scrollHeight;
      panel.style.height = `${start}px`;
      panel.style.overflow = "hidden";
      panel.style.transition = `height ${DURATION_MS}ms ${EASE}`;
      requestAnimationFrame(() => {
        panel.style.height = "0px";
      });
      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== "height") return;
        panel.removeEventListener("transitionend", onEnd);
        panel.style.height = "";
        panel.style.overflow = "";
        panel.style.transition = "";
        setOpen(false);
        animating.current = false;
      };
      panel.addEventListener("transitionend", onEnd);
    } else {
      setOpen(true);
      requestAnimationFrame(() => {
        const end = panel.scrollHeight;
        panel.style.height = "0px";
        panel.style.overflow = "hidden";
        panel.style.transition = `height ${DURATION_MS}ms ${EASE}`;
        requestAnimationFrame(() => {
          panel.style.height = `${end}px`;
        });
        const onEnd = (e: TransitionEvent) => {
          if (e.propertyName !== "height") return;
          panel.removeEventListener("transitionend", onEnd);
          panel.style.height = "auto";
          panel.style.overflow = "";
          panel.style.transition = "";
          animating.current = false;
        };
        panel.addEventListener("transitionend", onEnd);
      });
    }
  }, [open]);

  return (
    <div className={`faq-accordion-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="faq-accordion-trigger"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={toggle}
        id={`${groupId}-${contentId}-trigger`}
      >
        <span>{question}</span>
        <span className="faq-accordion-icon" aria-hidden="true">
          +
        </span>
      </button>
      <div
        ref={panelRef}
        id={contentId}
        role="region"
        aria-labelledby={`${groupId}-${contentId}-trigger`}
        className="faq-accordion-panel"
        style={{
          height: open ? "auto" : "0px",
          overflow: open ? "visible" : "hidden",
        }}
      >
        <div className="faq-accordion-content">{answer}</div>
      </div>
    </div>
  );
}

export function FaqSection({
  groups,
  title = "Questions fréquentes",
  description = "Tout ce qu'il faut savoir avant de nous contacter.",
  className = "",
}: FaqSectionProps) {
  return (
    <section
      id="faq"
      className={`section-py w-full bg-background ${className}`}
      aria-labelledby="faq-heading"
    >
      <div className="site-container">
        <Reveal>
          <SectionHeader
            label="FAQ"
            title={title}
            description={description}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {groups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 80}>
              <div className="glass-card p-5 sm:p-6">
                <h3 className="mb-4 text-base font-bold sm:text-lg">
                  <span
                    className={
                      group.accent === "primary"
                        ? "text-gradient-primary"
                        : "text-ignitex-600 dark:text-ignitex-400"
                    }
                  >
                    {group.title}
                  </span>
                </h3>
                <div className="space-y-2.5">
                  {group.items.map((item, ii) => (
                    <FaqAccordionItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                      defaultOpen={gi === 0 && ii === 0}
                      groupId={group.id}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
