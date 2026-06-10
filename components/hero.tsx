import Image from "next/image";
import { brand } from "@/lib/data";

const heroStats = [
  { n: "29+", l: "Projets réalisés" },
  { n: "489+", l: "Modules métier livrés" },
  { n: "920+", l: "Écrans & interfaces" },
  { n: "6.9", l: "IgniteX™ Platform" },
];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative w-full overflow-hidden border-b border-border bg-surface pt-[var(--header-height)]"
    >
      <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="site-container relative py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              <span className="section-label text-ignitex-700 dark:text-ignitex-300">
                {brand.trademark}, {brand.slogan}
              </span>
            </div>

            <h1 className="display-title mt-6">
              Des systèmes d&apos;information{" "}
              <span className="bg-gradient-to-r from-ignitex-600 to-ignitex-400 bg-clip-text text-transparent">
                qui performent
              </span>{" "}
              dès le premier jour
            </h1>

            <p className="prose-body mt-5 max-w-lg">
              Nous concevons, développons et déployons des plateformes
              technologiques sur mesure : communautaires, e-commerce, gestion
              scolaire, caisse intelligente, propulsées par{" "}
              <strong className="font-semibold text-foreground">
                IgniteX™ Platform
              </strong>
              .
            </p>

            <p className="mt-3 text-sm text-ignitex-600 dark:text-ignitex-400">
              {brand.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/realisations" className="btn-primary">
                Découvrir nos réalisations
              </a>
              <a href="/plateforme" className="btn-secondary">
                Notre moteur propriétaire
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-[0_20px_50px_rgba(0,174,239,0.12)]">
              <Image
                src="/images/hero-accueil.jpg"
                alt="Développement de systèmes d'information par IgniteX™"
                width={800}
                height={520}
                className="h-56 w-full object-cover object-center sm:h-72 lg:h-80"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent" />
            </div>
            <div
              className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-ignitex-400/30 to-ignitex-600/10"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {heroStats.map((item) => (
            <div
              key={item.l}
              className="card card-accent rounded-xl px-5 py-5 sm:px-6"
            >
              <p className="text-2xl font-semibold tracking-tight text-ignitex-600 dark:text-ignitex-400 sm:text-3xl">
                {item.n}
              </p>
              <p className="mt-1 text-sm text-muted">{item.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
