import { Reveal } from "@/components/reveal";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="stats-band w-full">
      <div className="site-container py-12 sm:py-14">
        <Reveal>
          <p className="mb-8 text-center text-sm font-medium text-white/90 sm:text-base">
            Plus de 29 projets livrés : applications, plateformes et systèmes
            métiers déjà en service
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <div className="text-center md:text-left">
                <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                  <span className="text-ignitex-200">{stat.suffix}</span>
                </p>
                <p className="mt-1 text-sm font-medium text-white/80">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
