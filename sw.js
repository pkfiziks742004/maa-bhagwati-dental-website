const CACHE_NAME = 'maa-bhagwati-v4';

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      const assets = [
        '/',
        '/logo.webp'
      ];

      for (const asset of assets) {
        try {
          const response = await fetch(asset, {
            cache: 'no-cache'
          });

          if (response.ok) {
            await cache.put(asset, response.clone());
          }
        } catch (error) {
          // Ignore optional asset failures.
        }
      }
    })()
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();

      await Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', event => {
  // Do not aggressively cache navigation or dynamic requests.
  // Preserve normal network behavior.

  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request).catch(async () => {
      const cached = await caches.match(event.request);

      if (cached) {
        return cached;
      }

      throw new Error('Network request failed');
    })
  );
});
