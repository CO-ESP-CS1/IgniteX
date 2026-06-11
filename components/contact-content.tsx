import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { SectionHeader } from "@/components/section-header";
import { brand, faqGroups } from "@/lib/data";

export function ContactContent() {
  return (
    <section className="section-py w-full bg-background">
      <div className="site-container">
        <div className="mx-auto max-w-xl">
          <div className="card card-accent p-8 sm:p-10">
            <SectionHeader
              title="Parlons de votre projet"
              description={`${brand.trademark} conçoit des systèmes sur mesure, de l'analyse du besoin jusqu'au déploiement en production.`}
            />

            <ContactForm />

            <div className="mt-10 border-t border-border pt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Coordonnées directes
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <span className="text-muted">E-mail :</span>{" "}
                  <a
                    href={`mailto:${brand.email}`}
                    className="font-semibold text-ignitex-600 hover:underline dark:text-ignitex-400"
                  >
                    {brand.email}
                  </a>
                </p>
                <p>
                  <span className="text-muted">Téléphone :</span>{" "}
                  <a
                    href={`tel:${brand.phoneTel}`}
                    className="font-semibold text-ignitex-600 hover:underline dark:text-ignitex-400"
                  >
                    {brand.phone}
                  </a>
                  <span className="text-muted">, disponible en </span>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ignitex-600 hover:underline dark:text-ignitex-400"
                  >
                    WhatsApp
                  </a>
                  <span className="text-muted"> ou appel normal</span>
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-muted">
            PEJOSOFT CORPORATION · JM TECHNOLOGIES · BKT Labs
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <FaqSection
            groups={faqGroups}
            title="Avant de nous écrire"
            description="Réponses aux questions les plus fréquentes sur nos projets et notre façon de travailler."
            className="!py-0"
          />
        </div>
      </div>
    </section>
  );
}
