import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CookieConsent } from "@/components/cookie-consent";
import { InstallPrompt } from "@/components/install-prompt";
import { brand } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${brand.trademark} : ${brand.slogan}`,
  description:
    "IgniteX™ conçoit et déploie des systèmes d'information sur mesure : plateformes communautaires, e-commerce, gestion scolaire et plus. Propulsés par IgniteX™ Platform.",
  keywords: [
    "IgniteX",
    "développement",
    "NestJS",
    "React Native",
    "Afrique",
    "PWA",
    "full-stack",
  ],
  authors: [{ name: brand.trademark }],
  creator: brand.trademark,
  metadataBase: new URL(brand.url),
  openGraph: {
    title: `${brand.trademark} : ${brand.slogan}`,
    description: brand.tagline,
    url: brand.url,
    siteName: brand.trademark,
    locale: "fr_FR",
    type: "website",
    images: [
      { url: "/images/logo.png", width: 800, height: 240, alt: brand.trademark },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.trademark} : ${brand.slogan}`,
    description: brand.tagline,
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
    <html lang="fr" className={`${inter.variable} h-full w-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function setTheme(t){var d=document.documentElement;if(t==='dark')d.classList.add('dark');else d.classList.remove('dark');try{localStorage.setItem('ignitex-theme',t)}catch(e){}document.querySelectorAll('[data-theme-set]').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-theme-set')===t?'true':'false')})}try{var t=localStorage.getItem('ignitex-theme');if(t!=='light'&&t!=='dark')t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';setTheme(t)}catch(e){setTheme('light')}document.addEventListener('click',function(e){var b=e.target&&e.target.closest?e.target.closest('[data-theme-set]'):null;if(b){e.preventDefault();setTheme(b.getAttribute('data-theme-set'))}});if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(x){x.unregister()})})}if(window.caches){caches.keys().then(function(k){k.forEach(function(c){caches.delete(c)})})}})()`,
          }}
        />
      </head>
      <body className="flex min-h-full w-full min-w-0 flex-col bg-background text-foreground">
        <Header />
        <main className="w-full min-w-0 flex-1">{children}</main>
        <Footer />
        <InstallPrompt />
        <CookieConsent />
      </body>
    </html>
  );
}
