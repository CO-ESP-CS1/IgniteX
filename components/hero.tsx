import Image from "next/image";
import { Reveal } from "@/components/reveal";
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
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-ignitex-400/10 blur-3xl motion-safe:animate-hero-glow"
        aria-hidden="true"
      />

      <div className="site-container relative py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <Reveal direction="none" delay={0}>
              <div className="eyebrow">
                <span className="eyebrow-dot motion-safe:animate-pulse-soft" aria-hidden="true" />
                <span className="section-label text-ignitex-700 dark:text-ignitex-300">
                  {brand.pitchShort} · Congo &amp; international
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display-title mt-6">
                Des applications et plateformes{" "}
                <span className="bg-gradient-to-r from-ignitex-600 to-ignitex-400 bg-clip-text text-transparent">
                  sur mesure
                </span>
                , livrées en production
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="prose-body mt-5 max-w-lg">
                <strong className="font-semibold text-foreground">
                  {brand.trademark}
                </strong>{" "}
                est un groupe de développement qui crée des apps mobiles, des
                sites web, des outils d&apos;automatisation, des plateformes
                métiers, des ERP et des systèmes complets pour entreprises, ONG,
                écoles et institutions, du premier brief jusqu&apos;à la mise en
                ligne.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-4 rounded-lg border border-border bg-surface-elevated/80 px-4 py-3 text-sm leading-relaxed text-foreground">
                <span className="font-semibold">En bref :</span> nous
                développons des logiciels utiles au quotidien, comme{" "}
                <span className="text-ignitex-600 dark:text-ignitex-400">
                  CCB Connect
                </span>
                ,{" "}
                <span className="text-ignitex-600 dark:text-ignitex-400">
                  Soleil d&apos;Afrik
                </span>{" "}
                ou{" "}
                <span className="text-ignitex-600 dark:text-ignitex-400">
                  GMS School
                </span>
                .
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/realisations" className="btn-primary">
                  Voir nos applications
                </a>
                <a href="/contact" className="btn-secondary">
                  Demander un devis
                </a>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <p className="mt-4 text-xs text-muted italic">
                {brand.tagline}
              </p>
            </Reveal>
          </div>

          <Reveal direction="right" delay={120}>
            <div className="relative motion-safe:animate-hero-float">
              <div className="relative overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-[0_20px_50px_rgba(0,174,239,0.12)]">
                <Image
                  src="/images/hero-accueil.jpg"
                  alt="Équipe IgniteX™ développant une application mobile et une plateforme web"
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
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {heroStats.map((item, index) => (
            <Reveal key={item.l} delay={index * 70}>
              <div className="card card-accent rounded-xl px-5 py-5 sm:px-6">
                <p className="text-2xl font-semibold tracking-tight text-ignitex-600 dark:text-ignitex-400 sm:text-3xl">
                  {item.n}
                </p>
                <p className="mt-1 text-sm text-muted">{item.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
