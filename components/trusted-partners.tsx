import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import type { TrustedPartnerLogo } from "@/lib/data";

type TrustedPartnersProps = {
  partners: TrustedPartnerLogo[];
  title?: string;
  description?: string;
  className?: string;
};

export function TrustedPartners({
  partners,
  title = "Ils nous font confiance",
  description = "Entreprises et organisations qui nous confient leurs projets numériques.",
  className = "",
}: TrustedPartnersProps) {
  return (
    <section
      id="partenaires-confiance"
      className={`section-py w-full border-y border-border bg-surface ${className}`}
      aria-label="Entreprises partenaires"
    >
      <div className="site-container">
        <Reveal>
          <SectionHeader
            label="Confiance"
            title={title}
            description={description}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap items-stretch justify-center gap-4 sm:gap-5">
          {partners.map((partner, index) => (
            <Reveal key={partner.id} delay={index * 60}>
              <TrustedPartnerTile partner={partner} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustedPartnerTile({ partner }: { partner: TrustedPartnerLogo }) {
  return (
    <div
      className="client-logo-tile client-logo-tile--partner flex min-h-[5.75rem] min-w-[9rem] max-w-[11.5rem] flex-1 basis-[calc(50%-0.5rem)] sm:basis-[calc(33.333%-0.85rem)] lg:basis-[calc(16.666%-1rem)]"
      title={partner.name}
    >
      {partner.image ? (
        <Image
          src={partner.image}
          alt={`Logo ${partner.name}`}
          width={180}
          height={112}
          className="h-full w-full object-contain"
          sizes="(max-width: 768px) 42vw, 180px"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-3 text-center">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-border bg-surface text-sm font-bold text-muted"
            aria-hidden="true"
          >
            {partner.name.charAt(0)}
          </span>
          <span className="text-[11px] font-medium leading-tight text-muted">
            Logo à venir
          </span>
        </div>
      )}
    </div>
  );
}
