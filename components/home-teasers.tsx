import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";

const teasers = [
  {
    href: "/groupe",
    title: "Qui sommes-nous ?",
    description:
      "Trois studios techniques réunis sous une marque : backend, mobile, web, DevOps et IA.",
    accent: "01",
  },
  {
    href: "/plateforme",
    title: "Notre moteur interne",
    description:
      "IgniteX™ Platform accélère chaque projet avec un socle technique éprouvé en production.",
    accent: "02",
  },
  {
    href: "/realisations",
    title: "Nos applications livrées",
    description:
      "Communauté, e-commerce, éducation, emploi : découvrez ce que nous avons déjà construit.",
    accent: "03",
  },
  {
    href: "/expertise",
    title: "Comment nous travaillons",
    description:
      "Sécurité, terrain africain, livraison vérifiable : notre méthode pour des projets qui durent.",
    accent: "04",
  },
];

export function HomeTeasers() {
  return (
    <section className="section-py w-full border-t border-border bg-background">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            label="Aller plus loin"
            title="Comprendre IgniteX™ en quelques clics"
            description="Chaque section répond à une question concrète : qui nous sommes, ce que nous livrons et comment nous travaillons."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <div className="grid items-stretch gap-5 sm:grid-cols-2">
          {teasers.map((item, index) => (
            <Reveal key={item.href} delay={index * 90} className="h-full min-h-0">
              <Link
                href={item.href}
                className="card card-accent card-hover group flex h-full min-h-[11rem] flex-col p-6 sm:min-h-[12rem] sm:p-7"
              >
                <span className="text-xs font-semibold text-ignitex-500">
                  {item.accent}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-ignitex-600 dark:group-hover:text-ignitex-400">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ignitex-600 dark:text-ignitex-400">
                  En savoir plus
                  <svg
                    viewBox="0 0 16 16"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
