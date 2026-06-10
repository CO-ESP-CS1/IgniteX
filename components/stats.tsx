import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="stats-band w-full">
      <div className="site-container py-12 sm:py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
                <span className="text-ignitex-200">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-sm font-medium text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
