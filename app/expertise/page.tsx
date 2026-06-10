import type { Metadata } from "next";
import { Expertise } from "@/components/expertise";
import { PageBanner } from "@/components/page-banner";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: `Expertise : ${brand.trademark}`,
  description:
    "Full-stack maison, terrain africain, sécurité et livraison vérifiable.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageBanner
        label="Expertise"
        title="Ce qui nous distingue"
        description="Une approche full-stack, une connaissance du terrain africain et un engagement sur chaque livraison."
      />
      <Expertise />
    </>
  );
}
