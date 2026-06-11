import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeaderScrollEffect } from "@/components/header-scroll-effect";
import { JsonLd } from "@/components/json-ld";
import { CookieConsent } from "@/components/cookie-consent";
import { InstallPrompt } from "@/components/install-prompt";
import { SplashLoader } from "@/components/splash-loader";
import { brand } from "@/lib/data";
import { siteJsonLd } from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${brand.trademark} · Applications et plateformes sur mesure`,
    template: `%s · ${brand.trademark}`,
  },
  description: brand.pitch,
  keywords: [
    "IgniteX",
    "développement logiciel",
    "applications mobiles",
    "plateformes métiers",
    "NestJS",
    "React Native",
    "Flutter",
    "Next.js",
    "Afrique",
    "Congo",
    "PWA",
    "full-stack",
    "ERP sur mesure",
  ],
  authors: [{ name: brand.trademark, url: brand.url }],
  creator: brand.trademark,
  publisher: brand.trademark,
  metadataBase: new URL(brand.url),
  alternates: {
    canonical: brand.url,
    languages: { "fr-FR": brand.url },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${brand.trademark} · Applications et plateformes sur mesure`,
    description: brand.pitch,
    url: brand.url,
    siteName: brand.trademark,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 240,
        alt: `${brand.trademark} — studio de développement`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.trademark} · Applications et plateformes sur mesure`,
    description: brand.pitch,
    images: ["/images/logo.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: brand.name,
  },
  formatDetection: {
    telephone: false,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00AEEF" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} scroll-smooth h-full w-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={siteJsonLd} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function setTheme(t){var d=document.documentElement;if(t==='dark')d.classList.add('dark');else d.classList.remove('dark');try{localStorage.setItem('ignitex-theme',t)}catch(e){}document.querySelectorAll('[data-theme-set]').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-theme-set')===t?'true':'false')})}try{var t=localStorage.getItem('ignitex-theme');if(t!=='light'&&t!=='dark')t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';setTheme(t)}catch(e){setTheme('light')}document.addEventListener('click',function(e){var b=e.target&&e.target.closest?e.target.closest('[data-theme-set]'):null;if(b){e.preventDefault();setTheme(b.getAttribute('data-theme-set'))}});if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(x){x.unregister()})})}if(window.caches){caches.keys().then(function(k){k.forEach(function(c){caches.delete(c)})})}})()`,
          }}
        />
      </head>
      <body className="flex min-h-full w-full min-w-0 flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-ignitex-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu principal
        </a>
        <SplashLoader />
        <Header />
        <HeaderScrollEffect />
        <main id="main-content" className="w-full min-w-0 flex-1">
          {children}
        </main>
        <Footer />
        <InstallPrompt />
        <CookieConsent />
      </body>
    </html>
  );
}
