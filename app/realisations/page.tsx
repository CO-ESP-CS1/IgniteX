import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { Projects } from "@/components/projects";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: `Réalisations : ${brand.trademark}`,
  description:
    "Plus de 29 projets réalisés : SOS JOB, L'Harmathon Congo, MOPESI® USSD, CCB Connect, Soleil d'Afrik, Loatékombo ONG, boutique Paris, école, zoo de Brazzaville, IgniteX™ Platform v7 et plus.",
};

export default function RealisationsPage() {
  return (
    <>
      <PageBanner
        label="Portfolio"
        title="Nos réalisations"
        description="Des systèmes en production et en développement : emploi et réseau professionnel (SOS JOB), communauté, culture et édition (L'Harmathon Congo), ONG, librairie numérique, e-commerce à Paris, éducation, restauration, parc zoologique. La v6.9 équipe nos systèmes en production ; la v7 est en cours de développement. Et bien d'autres projets encore."
      />
      <Projects />
    </>
  );
}
