import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: `Politique de cookies : ${brand.trademark}`,
  description: `Informations sur l'utilisation des cookies sur le site ${brand.trademark}.`,
};

const sections = [
  {
    title: "1. Qu'est-ce qu'un cookie ?",
    body: `Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou smartphone) lors de la consultation d'un site web. Il permet au site de mémoriser certaines informations pendant une durée limitée ou d'assurer des fonctions techniques indispensables.`,
  },
  {
    title: "2. Qui est responsable ?",
    body: `Le site ${brand.url.replace("https://", "")} est édité par ${brand.trademark}. Pour toute question relative aux cookies ou à vos données, vous pouvez nous contacter à l'adresse ${brand.email} ou par téléphone au ${brand.phone}.`,
  },
  {
    title: "3. Cookies utilisés sur ce site",
    body: `Ce site vitrine n'utilise pas de cookies publicitaires ni de traceurs à des fins de profilage. Nous limitons notre usage aux cookies strictement nécessaires au confort de navigation et au fonctionnement du site.`,
    list: [
      {
        name: "ignitex-cookie-consent",
        purpose:
          "Mémorise votre choix concernant l'acceptation des cookies afin de ne pas réafficher la bannière à chaque visite.",
        duration: "12 mois",
        type: "Essentiel",
      },
      {
        name: "ignitex-theme",
        purpose:
          "Enregistre votre préférence d'affichage (mode clair ou sombre) pour une expérience cohérente entre les pages.",
        duration: "Persistant (jusqu'à suppression)",
        type: "Fonctionnel",
      },
    ],
  },
  {
    title: "4. Cookies tiers",
    body: `Lorsque vous cliquez sur un lien vers WhatsApp, une messagerie ou un réseau social, vous quittez notre site et les politiques de confidentialité de ces services s'appliquent. ${brand.trademark} ne dépose pas de cookies tiers de mesure d'audience (type Google Analytics) sur ce site à ce jour.`,
  },
  {
    title: "5. Base légale",
    body: `Les cookies essentiels et fonctionnels listés ci-dessus reposent sur notre intérêt légitime à proposer un site stable, accessible et conforme à vos préférences d'affichage. Votre consentement est recueilli via la bannière affichée lors de votre première visite.`,
  },
  {
    title: "6. Gérer ou supprimer les cookies",
    body: `Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies ou les supprimer. Attention : bloquer les cookies essentiels peut dégrader certaines fonctionnalités (mémorisation du thème, bannière de consentement).`,
    steps: [
      "Chrome : Paramètres → Confidentialité et sécurité → Cookies",
      "Firefox : Paramètres → Vie privée et sécurité → Cookies",
      "Safari : Réglages → Confidentialité → Gestion des cookies",
      "Edge : Paramètres → Cookies et autorisations de site",
    ],
  },
  {
    title: "7. Vos droits",
    body: `Conformément à la réglementation applicable en matière de protection des données personnelles, vous disposez d'un droit d'accès, de rectification et d'effacement des informations vous concernant. Pour exercer ces droits, contactez-nous à ${brand.email}.`,
  },
  {
    title: "8. Mise à jour",
    body: `La présente politique peut être modifiée pour refléter l'évolution du site ou de la réglementation. Dernière mise à jour : juin 2026.`,
  },
];

export default function CookiesPage() {
  return (
    <>
      <PageBanner
        label="Confidentialité"
        title="Politique de cookies"
        description="Transparence sur les cookies utilisés par notre site vitrine et sur la manière de les gérer."
      />

      <section className="section-py w-full bg-background">
        <div className="site-container">
          <article className="prose-body mx-auto max-w-3xl space-y-10 text-[15px] leading-relaxed text-muted">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-base font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-3">{section.body}</p>

                {"list" in section && section.list && (
                  <div className="mt-4 overflow-x-auto rounded-xl border border-border">
                    <table className="w-full min-w-[32rem] text-left text-sm">
                      <thead className="border-b border-border bg-surface text-xs font-semibold uppercase tracking-wider text-foreground">
                        <tr>
                          <th className="px-4 py-3">Cookie</th>
                          <th className="px-4 py-3">Finalité</th>
                          <th className="px-4 py-3">Durée</th>
                          <th className="px-4 py-3">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.list.map((cookie) => (
                          <tr
                            key={cookie.name}
                            className="border-b border-border last:border-0"
                          >
                            <td className="px-4 py-3 font-mono text-xs text-ignitex-600 dark:text-ignitex-400">
                              {cookie.name}
                            </td>
                            <td className="px-4 py-3">{cookie.purpose}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              {cookie.duration}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              {cookie.type}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {"steps" in section && section.steps && (
                  <ul className="mt-4 space-y-2">
                    {section.steps.map((step) => (
                      <li
                        key={step}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ignitex-500" />
                        {step}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="text-sm font-medium text-foreground">
                Une question sur vos données ?
              </p>
              <p className="mt-2 text-sm">
                Écrivez-nous à{" "}
                <a
                  href={`mailto:${brand.email}`}
                  className="font-semibold text-ignitex-600 hover:underline dark:text-ignitex-400"
                >
                  {brand.email}
                </a>{" "}
                ou consultez notre page{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-ignitex-600 hover:underline dark:text-ignitex-400"
                >
                  Contact
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
