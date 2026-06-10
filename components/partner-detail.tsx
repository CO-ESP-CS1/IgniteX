import Image from "next/image";
import Link from "next/link";
import type { Partner } from "@/lib/data";
import { brand } from "@/lib/data";

export function PartnerDetail({ partner }: { partner: Partner }) {
  return (
    <article className="section-py w-full bg-background">
      <div className="site-container">
        <Link
          href="/groupe"
          className="text-sm font-medium text-ignitex-600 hover:underline dark:text-ignitex-400"
        >
          ← Retour au groupe
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-xl border border-border">
            <div className="relative h-56 sm:h-72">
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <p className="section-label">Entité IgniteX™</p>
            <h1 className="display-title mt-2">{partner.name}</h1>
            <p className="mt-2 text-sm font-medium text-ignitex-600 dark:text-ignitex-400">
              {partner.role}
            </p>
            <p className="prose-body mt-5">{partner.about}</p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-foreground">
              {partner.mission}
            </p>
          </div>
        </div>

        <div className="card card-accent mx-auto mt-14 max-w-2xl p-6 sm:p-7">
          <h2 className="text-base font-semibold text-foreground">
            Apports aux projets IgniteX™
          </h2>
          <ul className="mt-4 space-y-2">
            {partner.contributions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ignitex-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card card-accent mx-auto mt-8 max-w-3xl overflow-hidden">
          <div className="grid sm:grid-cols-[minmax(10rem,12rem)_1fr]">
            <div className="relative h-56 border-b border-border sm:h-auto sm:min-h-[18rem] sm:border-b-0 sm:border-r">
              <Image
                src={partner.visionary.image}
                alt={`${partner.visionary.name} — ${partner.name}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 12rem"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-ignitex-600 dark:text-ignitex-400">
                Le visionnaire
              </p>
              <h2 className="mt-2 text-lg font-semibold text-foreground">
                {partner.visionary.name}
              </h2>
              <p className="text-sm text-muted">{partner.visionary.title}</p>
              <blockquote className="mt-4 border-l-2 border-ignitex-500 pl-4 text-sm leading-relaxed text-muted italic">
                {partner.visionary.thoughts}
              </blockquote>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-xs text-muted">
          {partner.name} agit au sein de {brand.trademark} aux côtés de PEJOSOFT,
          JM TECHNOLOGIES et BKT SOLUTIONS — trois entités, une marque, une
          exigence commune.
        </p>
      </div>
    </article>
  );
}
