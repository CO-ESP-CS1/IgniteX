import type { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";
import { PageBanner } from "@/components/page-banner";
import { brand } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Contactez ${brand.trademark} pour démarrer votre projet : applications, plateformes et systèmes sur mesure.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        label="Contact"
        title="Travaillons ensemble"
        description="Parlons de votre projet : nous concevons des systèmes sur mesure de bout en bout."
      />
      <ContactContent />
    </>
  );
}
