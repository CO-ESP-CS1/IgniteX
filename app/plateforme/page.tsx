import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { Platform } from "@/components/platform";
import { brand, platform } from "@/lib/data";

export const metadata: Metadata = {
  title: `${platform.title} — ${brand.trademark}`,
  description: platform.description,
};

export default function PlateformePage() {
  return (
    <>
      <PageBanner
        label="Moteur propriétaire"
        title={platform.title}
        description={platform.subtitle}
      />
      <Platform />
    </>
  );
}
