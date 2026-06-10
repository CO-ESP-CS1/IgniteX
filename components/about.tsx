import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { brand, partners } from "@/lib/data";

export function About() {
  return (
    <section className="section-py w-full bg-background">
      <div className="site-container">
        <SectionHeader
          label="Le groupe"
          title="Trois entités, une vision"
          description={`${brand.trademark} est une marque déposée née de la collaboration entre trois entités complémentaires, unies par une vision commune : utiliser la technologie pour connecter les communautés ${brand.slogan.toLowerCase()}.`}
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.id}
              className="card card-accent flex flex-col overflow-hidden"
            >
              <div className="relative h-56 w-full border-b border-border bg-surface sm:h-72">
                <Image
                  src={partner.image}
                  alt={`${partner.name} — photo`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-base font-semibold text-foreground">
                  {partner.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-ignitex-600 dark:text-ignitex-400">
                  {partner.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {partner.description}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {partner.teaser}
                </p>
                <Link
                  href={`/groupe/${partner.id}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ignitex-600 transition-colors hover:text-ignitex-700 dark:text-ignitex-400 dark:hover:text-ignitex-300"
                >
                  En savoir plus
                  <svg
                    viewBox="0 0 16 16"
                    className="h-4 w-4"
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
                </Link>
              </div>
            </article>
          ))}
        </div>

        <blockquote className="card card-accent mx-auto mt-14 max-w-3xl border-l-4 border-l-ignitex-500 p-8 text-center sm:p-10">
          <p className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
            Trois entreprises, une vision, une marque. {brand.trademark} prouve
            que la collaboration transfrontalière produit des solutions
            d&apos;excellence.
          </p>
          <footer className="mt-4 text-sm font-medium text-ignitex-600 dark:text-ignitex-400">
            PEJOSOFT · JM TECHNOLOGIES · BKT Labs
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
