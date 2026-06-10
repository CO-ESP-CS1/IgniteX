import Image from "next/image";
import Link from "next/link";
import { PlatformV7PreviewTester } from "@/components/platform-v7-preview-tester";
import { platformVersion } from "@/lib/data";
import type { Project, ProjectStatus } from "@/lib/data";

const statusStyles: Record<ProjectStatus, string> = {
  production: "bg-emerald-500/90 text-white",
  "en-cours": "bg-amber-500/90 text-white",
  proposition: "bg-sky-500/90 text-white",
};

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="section-py w-full bg-background">
      <div className="site-container">
        <Link
          href="/realisations"
          className="text-sm font-medium text-ignitex-600 hover:underline dark:text-ignitex-400"
        >
          ← Retour aux réalisations
        </Link>

        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <div className="relative h-48 sm:h-56">
            <Image
              src={project.image ?? "/images/placeholder.jpg"}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-md px-2.5 py-1 text-xs font-semibold ${statusStyles[project.status]}`}
            >
              {project.statusLabel}
            </span>
            <span className="rounded-md border border-ignitex-200 bg-ignitex-50 px-2.5 py-1 text-xs font-medium text-ignitex-700 dark:border-ignitex-800 dark:bg-ignitex-950 dark:text-ignitex-300">
              IgniteX™ Platform v
              {project.id === "ignitex-platform-v7" ? "7" : platformVersion}
            </span>
          </div>

          {project.client && (
            <p className="mt-3 text-sm font-medium text-ignitex-600 dark:text-ignitex-400">
              {project.client}
            </p>
          )}

          <h1 className="display-title mt-2">{project.name}</h1>
          <p className="mt-2 text-sm text-muted">{project.tagline}</p>

          <p className="prose-body mt-6 text-[15px]">{project.description}</p>

          <h2 className="mt-8 text-xs font-semibold uppercase tracking-wider text-foreground">
            Ce que ce système apporte
          </h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ignitex-500" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="card px-3 py-4 text-center">
                <p className="text-base font-semibold text-ignitex-600 dark:text-ignitex-400">
                  {m.value}
                </p>
                <p className="mt-1 text-xs text-muted">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.id === "ignitex-platform-v7" && <PlatformV7PreviewTester />}
        </div>
      </div>
    </article>
  );
}
