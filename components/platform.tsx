import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { platform } from "@/lib/data";

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M2.5 6l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Platform() {
  return (
    <section className="section-py w-full bg-surface">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              label="Plateforme"
              title={`IgniteX™ Platform v${platform.version}`}
              description={platform.description}
            />

            <p className="section-desc mt-4">
              {platform.subtitle}. Ce moteur réduit les cycles de développement
              tout en élevant performance, sécurité et scalabilité.
            </p>

            <p className="section-desc mt-3">{platform.history}</p>

            <ul className="mt-8 space-y-3">
              {platform.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ignitex-500 text-white">
                    <CheckIcon />
                  </span>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="section-label">Propulse nos systèmes</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {platform.powered.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-ignitex-200 bg-ignitex-50 px-3 py-1 text-sm font-medium text-ignitex-700 dark:border-ignitex-800 dark:bg-ignitex-950 dark:text-ignitex-300"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card overflow-hidden bg-surface shadow-[0_20px_50px_rgba(0,174,239,0.1)]">
            <Image
              src="/images/platform.png"
              alt="IgniteX™ Platform v6.9 — le moteur interne qui propulse l'excellence de vos systèmes"
              width={1200}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
