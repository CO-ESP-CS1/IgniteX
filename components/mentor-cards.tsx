"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import type { MentorProfile } from "@/lib/data";

type MentorCardsProps = {
  mentors: MentorProfile[];
  title?: string;
  description?: string;
  showLink?: boolean;
  className?: string;
};

export function MentorCards({
  mentors,
  title = "Les visionnaires du groupe",
  description = "Trois fondateurs, une vision commune : livrer des systèmes d'excellence au-delà des frontières.",
  showLink = true,
  className = "",
}: MentorCardsProps) {
  return (
    <section
      id="visionnaires"
      className={`section-py w-full bg-background ${className}`}
      aria-labelledby="mentors-heading"
    >
      <div className="site-container">
        <Reveal>
          <SectionHeader
            label="Équipe"
            title={title}
            description={description}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {mentors.map((mentor, index) => (
            <Reveal key={mentor.id} delay={index * 90}>
              <MentorCard mentor={mentor} />
            </Reveal>
          ))}
        </div>

        {showLink && (
          <Reveal delay={200}>
            <p className="mt-10 text-center">
              <Link
                href="/groupe"
                className="text-sm font-semibold text-ignitex-600 transition-colors hover:text-ignitex-700 dark:text-ignitex-400 dark:hover:text-ignitex-300"
              >
                Découvrir les trois entités du groupe →
              </Link>
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function MentorCard({ mentor }: { mentor: MentorProfile }) {
  const [expanded, setExpanded] = useState(false);
  const shortBio =
    mentor.bio.length > 140 && !expanded
      ? `${mentor.bio.slice(0, 140).trim()}…`
      : mentor.bio;

  return (
    <article className="glass-card mentor-card card-hover h-full">
      <div className="mentor-avatar-ring">
        <Image
          src={mentor.image}
          alt={`Portrait de ${mentor.name}, ${mentor.role}`}
          width={124}
          height={124}
          className="mentor-avatar-img"
          sizes="124px"
          priority={mentor.id === "pejosoft"}
        />
        <span className="mentor-badge">Fondateur</span>
      </div>

      <h3 className="mt-5 text-base font-bold text-foreground">{mentor.name}</h3>
      <p className="mt-1 text-sm font-medium text-ignitex-600 dark:text-ignitex-400">
        {mentor.role}
      </p>
      <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-muted">
        {mentor.entity}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted">{shortBio}</p>

      {mentor.bio.length > 140 && (
        <button
          type="button"
          className="mt-3 text-xs font-semibold text-ignitex-600 hover:underline dark:text-ignitex-400"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      )}

      <Link
        href={`/groupe/${mentor.id}`}
        className="mt-4 text-sm font-semibold text-ignitex-600 hover:underline dark:text-ignitex-400"
      >
        Profil de l&apos;entité
      </Link>
    </article>
  );
}
