import Link from "next/link";
import { Logo } from "@/components/logo";
import { brand, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer w-full border-t text-zinc-400">
      <div className="site-container py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div>
            <Logo variant="footer" />
            <p className="mt-4 text-sm text-ignitex-300">{brand.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500">
              {brand.trademark} conçoit et déploie des systèmes numériques sur
              mesure pour des institutions, communautés et entreprises.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <nav className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-ignitex-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="text-zinc-600">E-mail :</span>{" "}
                <a
                  href={`mailto:${brand.email}`}
                  className="text-ignitex-300 hover:underline"
                >
                  {brand.email}
                </a>
              </p>
              <p>
                <span className="text-zinc-600">Tél. :</span>{" "}
                <a
                  href={`tel:${brand.phoneTel}`}
                  className="text-ignitex-300 hover:underline"
                >
                  {brand.phone}
                </a>
                <span className="text-zinc-600">, disponible en appel ou sur </span>
                <a
                  href={brand.whatsapp}
                  className="text-ignitex-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </p>
            </div>

            <Link href="/contact" className="btn-primary mt-6">
              Démarrer un projet
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © {year} {brand.trademark}. Tous droits réservés.
          </p>
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <p className="text-xs text-zinc-600">
              PEJOSOFT · JM TECHNOLOGIES · BKT Labs
            </p>
            <Link
              href="/cookies"
              className="text-xs text-zinc-500 transition-colors hover:text-ignitex-300"
            >
              Politique de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
