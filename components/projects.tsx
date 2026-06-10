import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { brand, projects } from "@/lib/data";

export function Projects() {
  return (
    <section className="section-py w-full bg-background">
      <div className="site-container">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="card card-accent mx-auto mt-16 max-w-2xl p-8 text-center sm:p-10">
          <SectionHeader
            title="Et bien d'autres projets"
            description={`Le portfolio ci-dessus n'est qu'un aperçu. ${brand.trademark} a réalisé plus de 29 projets — applications mobiles, systèmes métiers, portails web et outils sur mesure — tous portés par la même exigence de qualité et, pour la grande majorité, par IgniteX™ Platform v6.9.`}
            align="center"
            className="mx-auto"
          />
          <Link href="/contact" className="btn-primary mt-6">
            Discuter de votre projet
          </Link>
        </div>
      </div>
    </section>
  );
}
