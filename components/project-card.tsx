import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectStatus } from "@/lib/data";

const statusStyles: Record<ProjectStatus, string> = {
  production:
    "bg-emerald-500/90 text-white",
  "en-cours":
    "bg-amber-500/90 text-white",
  proposition:
    "bg-sky-500/90 text-white",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/realisations/${project.id}`}
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={project.image ?? "/images/placeholder.jpg"}
          alt={`${project.name} — aperçu`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
        <span
          className={`absolute right-3 top-3 rounded-md px-2.5 py-1 text-xs font-semibold ${statusStyles[project.status]}`}
        >
          {project.statusLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {project.client && (
          <p className="text-xs font-semibold uppercase tracking-wider text-ignitex-500">
            {project.client}
          </p>
        )}
        <h3 className="mt-1 text-lg font-semibold text-foreground group-hover:text-ignitex-600 dark:group-hover:text-ignitex-400">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        <p className="mt-2 line-clamp-2 text-xs font-medium text-ignitex-600 dark:text-ignitex-400">
          {project.id === "ignitex-platform-v7"
            ? "IgniteX™ Platform v7 — en développement"
            : "IgniteX™ Platform v6.9"}
        </p>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <span className="mt-5 text-sm font-semibold text-ignitex-600 dark:text-ignitex-400">
          Voir le détail →
        </span>
      </div>
    </Link>
  );
}
