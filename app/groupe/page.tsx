import type { Metadata } from "next";
import { About } from "@/components/about";
import { PageBanner } from "@/components/page-banner";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: `Le groupe : ${brand.trademark}`,
  description: `Découvrez ${brand.trademark} : PEJOSOFT, JM TECHNOLOGIES et BKT Labs.`,
};

export default function GroupePage() {
  return (
    <>
      <PageBanner
        label="Le groupe"
        title={`Qui est ${brand.trademark} ?`}
        description="Trois entités complémentaires, une marque unifiée, au-delà des frontières."
      />
      <About />
    </>
  );
}
