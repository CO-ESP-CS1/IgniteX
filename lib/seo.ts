import type { Metadata } from "next";
import { brand } from "@/lib/data";

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${brand.url}/#organization`,
      name: brand.trademark,
      url: brand.url,
      logo: {
        "@type": "ImageObject",
        url: `${brand.url}/images/logo.png`,
      },
      description: brand.pitch,
      email: brand.email,
      telephone: brand.phoneTel,
      slogan: brand.slogan,
      areaServed: ["Afrique", "Europe", "International"],
      knowsAbout: [
        "Développement mobile",
        "Plateformes web",
        "Systèmes métiers",
        "ERP",
        "DevOps",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${brand.url}/#website`,
      url: brand.url,
      name: brand.trademark,
      publisher: { "@id": `${brand.url}/#organization` },
      inLanguage: "fr-FR",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${brand.url}/#service`,
      name: brand.trademark,
      url: brand.url,
      image: `${brand.url}/images/logo.png`,
      description: brand.pitch,
      provider: { "@id": `${brand.url}/#organization` },
      areaServed: "Worldwide",
      serviceType: "Développement logiciel sur mesure",
    },
  ],
};

export function pageMetadata({
  title,
  description,
  path = "",
  image = "/images/logo.png",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${brand.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${brand.trademark}`,
      description,
      url,
      type: "website",
      locale: "fr_FR",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${brand.trademark}`,
      description,
      images: [image],
    },
  };
}
