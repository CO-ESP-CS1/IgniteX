import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/page-banner";
import { PartnerDetail } from "@/components/partner-detail";
import { brand, getPartnerById, partners } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartnerById(slug);
  if (!partner) return { title: brand.trademark };

  return {
    title: `${partner.name} — ${brand.trademark}`,
    description: partner.teaser,
  };
}

export default async function PartnerPage({ params }: Props) {
  const { slug } = await params;
  const partner = getPartnerById(slug);
  if (!partner) notFound();

  return (
    <>
      <PageBanner
        label="Le groupe"
        title={partner.name}
        description={partner.teaser}
      />
      <PartnerDetail partner={partner} />
    </>
  );
}
