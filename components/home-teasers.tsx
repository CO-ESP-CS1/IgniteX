import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const teasers = [
  {
    href: "/groupe",
    title: "Le groupe",
    description:
      "Trois entités, une marque. PEJOSOFT, JM TECHNOLOGIES et BKT Labs.",
    accent: "01",
  },
  {
    href: "/plateforme",
    title: "IgniteX™ Platform",
    description:
      "Moteur propriétaire v6.9 qui accélère chaque système d'information.",
    accent: "02",
  },
  {
    href: "/realisations",
    title: "Réalisations",
    description:
      "Communauté, librairie, éducation, zoo : plus de 29 projets livrés.",
    accent: "03",
  },
  {
    href: "/expertise",
    title: "Expertise",
    description:
      "Full-stack, terrain africain, sécurité et livraison vérifiable.",
    accent: "04",
  },
];

export function HomeTeasers() {
  return (
    <section className="section-py w-full bg-background">
      <div className="site-container">
        <SectionHeader
          label="Navigation"
          title="Explorez IgniteX™"
          description="Un site complet : chaque section a sa propre page."
          align="center"
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {teasers.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card card-accent card-hover group p-6 sm:p-7"
            >
              <span className="text-xs font-semibold text-ignitex-500">
                {item.accent}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-ignitex-600 dark:group-hover:text-ignitex-400">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ignitex-600 dark:text-ignitex-400">
                En savoir plus
                <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
