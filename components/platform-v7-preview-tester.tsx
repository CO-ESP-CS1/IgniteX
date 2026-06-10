import Link from "next/link";
import { brand } from "@/lib/data";

const TOGGLE_ID = "v7-preview-toggle";
const PREVIEW_EMAIL = "pejoofficiel@gmail.com";

export function PlatformV7PreviewTester() {
  return (
    <>
      <input
        type="checkbox"
        id={TOGGLE_ID}
        className="sr-only"
        aria-hidden="true"
      />

      <label htmlFor={TOGGLE_ID} className="btn-primary mt-8 cursor-pointer">
        Tester
      </label>

      <div className="v7-preview-modal" role="dialog" aria-modal="true" aria-labelledby="v7-preview-title">
        <label
          htmlFor={TOGGLE_ID}
          className="absolute inset-0 block bg-black/55"
          aria-label="Fermer la fenêtre"
        />

        <div className="v7-preview-dialog-panel">
          <label
            htmlFor={TOGGLE_ID}
            className="absolute right-4 top-4 cursor-pointer text-muted hover:text-foreground"
            aria-label="Fermer"
          >
            ✕
          </label>

          <h2 id="v7-preview-title" className="text-lg font-semibold text-foreground">
            Accès preview — Platform v7
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            Le Token ID est la clé d&apos;accès fournie par {brand.trademark} pour
            recevoir les fichiers de prévisualisation du moteur v7. Veuillez{" "}
            <Link
              href="/contact"
              className="font-medium text-ignitex-600 underline-offset-2 hover:underline dark:text-ignitex-400"
            >
              nous contacter
            </Link>{" "}
            pour obtenir le vôtre.
          </p>

          <form
            action={`mailto:${PREVIEW_EMAIL}`}
            method="POST"
            encType="text/plain"
            className="mt-6 space-y-4"
          >
            <input
              type="hidden"
              name="subject"
              value="IgniteX™ Platform v7 — Demande d'accès preview"
            />

            <div>
              <label htmlFor="platform-v7-token" className="text-sm font-medium text-foreground">
                Token ID
              </label>
              <input
                id="platform-v7-token"
                name="Token ID"
                type="text"
                required
                placeholder="Collez votre Token ID ici"
                autoComplete="off"
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ignitex-500"
              />
            </div>

            <p className="text-xs text-muted">
              En validant, votre client de messagerie s&apos;ouvrira pour envoyer
              votre demande à {PREVIEW_EMAIL} — le token ne transite pas par ce
              site.
            </p>

            <div className="flex flex-wrap gap-3">
              <button type="submit" className="btn-primary">
                Valider
              </button>
              <label htmlFor={TOGGLE_ID} className="btn-secondary cursor-pointer">
                Annuler
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
