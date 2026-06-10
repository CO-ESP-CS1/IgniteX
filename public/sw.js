const CACHE_NAME = "ignitex-v2-static";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Ne jamais mettre en cache les pages HTML ni le JS Next.js
  if (
    request.mode === "navigate" ||
    url.pathname.startsWith("/_next") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".json")
  ) {
    return;
  }

  // Cache uniquement les images statiques
  if (!url.pathname.startsWith("/images/")) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);
      if (cached) return cached;

      try {
        const response = await fetch(request);
        if (response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      } catch {
        return cached || Response.error();
      }
    })
  );
});
