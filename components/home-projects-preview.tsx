import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";

const previewProjects = projects
  .filter((p) => p.featured && p.status === "production")
  .slice(0, 4);

export function HomeProjectsPreview() {
  return (
    <section className="section-py w-full bg-surface">
      <div className="site-container">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              label="Preuves concrètes"
              title="Des applications déjà utilisées en production"
              description="Pas de concepts flous : voici des projets réels livrés par le groupe IgniteX™ et utilisés par des milliers de personnes."
            />
            <Link href="/realisations" className="btn-secondary shrink-0 self-start sm:self-auto">
              Toutes les réalisations
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80} className="h-full">
              <Link
                href={`/realisations/${project.id}`}
                className="card card-hover group flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={project.image ?? "/images/placeholder.jpg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-emerald-500/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                    En production
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-ignitex-600 dark:group-hover:text-ignitex-400">
                    {project.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">
                    {project.tagline}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
