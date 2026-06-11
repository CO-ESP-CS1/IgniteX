import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { brand } from "@/lib/data";

export function HomeCta() {
  return (
    <section className="section-py w-full bg-background">
      <div className="site-container">
        <Reveal>
          <div className="card card-accent relative overflow-hidden px-6 py-10 text-center sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,174,239,0.12),transparent_70%)]"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="section-label">Vous avez un projet ?</p>
              <h2 className="section-title mx-auto mt-3 max-w-xl">
                Parlons de votre application, site ou système métier
              </h2>
              <p className="section-desc mx-auto mt-3 max-w-lg">
                {brand.trademark} accompagne entreprises et institutions du
                cahier des charges à la mise en production, au Congo et à
                l&apos;international.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Demander un devis
                </Link>
                <Link href="/realisations" className="btn-secondary">
                  Voir nos réalisations
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
