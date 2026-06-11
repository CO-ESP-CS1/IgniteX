import type { Metadata } from "next";
import { Expertise } from "@/components/expertise";
import { PageBanner } from "@/components/page-banner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Expertise",
  description:
    "Full-stack maison, terrain africain, sécurité et livraison vérifiable — NestJS, React Native, Flutter, Next.js.",
  path: "/expertise",
});

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
