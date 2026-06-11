import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";

const offerings = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" strokeLinecap="round" />
      </svg>
    ),
    title: "Applications mobiles",
    description:
      "Apps Android et iOS pour communautés, boutiques, écoles ou services publics, utilisables au quotidien, même avec une connexion limitée.",
    examples: "CCB Connect, Soleil d'Afrik, GMS School",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8M12 18v2" strokeLinecap="round" />
      </svg>
    ),
    title: "Sites & plateformes web",
    description:
      "Sites vitrines, boutiques en ligne, portails d'administration et tableaux de bord pour piloter votre activité depuis un navigateur.",
    examples: "La Boutique Parisienne, Loatékombo ONG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M4 7h16M4 12h10M4 17h14" strokeLinecap="round" />
        <circle cx="19" cy="17" r="2" />
      </svg>
    ),
    title: "Systèmes métiers complets",
    description:
      "Caisse, gestion interne, automatisation et intégrations sur mesure, du premier cahier des charges jusqu'à la mise en production.",
    examples: "Restaurant POS, SOS JOB, MOPESI® USSD",
  },
];

export function HomeWhatWeDo() {
  return (
    <section className="section-py w-full border-b border-border bg-background">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            label="Ce que nous faisons"
            title="Un studio de développement, pas juste un site vitrine"
            description="IgniteX™ conçoit, développe et déploie des solutions numériques complètes pour entreprises, ONG, écoles et institutions, du téléphone au serveur."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {offerings.map((item, index) => (
            <Reveal key={item.title} delay={index * 100} className="h-full">
              <article className="card card-accent card-hover flex h-full flex-col p-6 sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ignitex-50 text-ignitex-600 dark:bg-ignitex-950 dark:text-ignitex-400">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <p className="mt-4 text-xs font-medium text-ignitex-600 dark:text-ignitex-400">
                  Exemples : {item.examples}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
