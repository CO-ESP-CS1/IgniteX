import { IgniteXGlobeSvg } from "@/components/ignitex-globe-svg";
import { Reveal } from "@/components/reveal";
import { brand } from "@/lib/data";

export function VisionNetwork() {
  return (
    <section
      id="vision"
      className="section-py w-full border-b border-border bg-background"
      aria-labelledby="vision-heading"
    >
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="left">
            <div>
              <p className="section-label">Notre réseau</p>
              <h2
                id="vision-heading"
                className="section-title mt-2 text-2xl sm:text-3xl"
              >
                {brand.slogan} —{" "}
                <span className="text-gradient-primary">connectés au terrain</span>
              </h2>
              <p className="section-desc mt-4">
                {brand.trademark} relie les communautés africaines, les clients
                internationaux et les infrastructures cloud via des systèmes
                conçus pour durer : mobile, web, backend et IA en production.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Déploiements en Afrique centrale et francophone",
                  "Clients et partenaires en Europe (Paris, France)",
                  "Plateforme propriétaire IgniteX™ v6.9 en production",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ignitex-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <IgniteXGlobeSvg className="mx-auto lg:ml-auto" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
