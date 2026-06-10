import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IgniteX™, au delà des frontières",
    short_name: "IgniteX",
    description:
      "IgniteX™ conçoit et déploie des systèmes d'information sur mesure : plateformes communautaires, e-commerce, gestion scolaire et plus.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#00AEEF",
    lang: "fr",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
