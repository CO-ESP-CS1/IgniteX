import { SectionHeader } from "@/components/section-header";
import { pillars, techStack } from "@/lib/data";

export function Expertise() {
  return (
    <section className="section-py w-full bg-surface">
      <div className="site-container">
        <SectionHeader
          label="Expertise"
          title="Ce qui nous distingue"
          align="center"
          className="mx-auto mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <article key={pillar.title} className="card card-accent p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ignitex-500 text-xs font-bold text-white">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <div className="card card-accent mt-12 p-8 sm:p-10">
          <SectionHeader
            title="Stack technologique"
            description="Technologies et frameworks utilisés sur nos projets en production."
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
