const CACHE_NAME = 'maa-bhagwati-v4';

self.addEventListener('install', (event) => {
  self.skipWaiting();

  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      const assets = [
        '/',
        '/manifest.webmanifest',
        '/icon-192x192.png',
        '/icon-512x512.png',
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
          // Do not allow one failed optional asset to break SW installation.
        }
      }
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
    .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 1. Bypass cache for POST requests (Contact, Appointment forms)
  if (request.method !== 'GET') {
    return; // browser handles normally
  }

  // 2. Bypass external dynamic APIs or unnecessary caching
  if (!url.protocol.startsWith('http') || url.pathname.includes('/api/')) {
    return;
  }

  // 3. Static Assets (Next.js CSS, JS, Images in public/) -> Cache First
  if (url.pathname.startsWith('/_next/') || url.pathname.match(/\.(png|jpg|jpeg|svg|webp|gif|woff2?|css)$/)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return networkResponse;
        }).catch(() => {
          // If image fails, you could return a fallback image here
        });
      })
    );
    return;
  }

  // 4. HTML/Navigation Requests -> Network First, fallback to cache, then offline page
  if (request.mode === 'navigate' || request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request).then((networkResponse) => {
        // If network succeeds, update the cache for this page
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(async () => {
        // Network failed (offline). Try cache for this specific page.
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }
        // If page is not in cache, return the offline fallback
        const offlineResponse = await caches.match('/offline/');
        if (offlineResponse) {
          return offlineResponse;
        }
        // Last resort
        return new Response('You are offline.', {
          status: 503,
          headers: { 'Content-Type': 'text/plain' }
        });
      })
    );
    return;
  }

  // 5. Default Fallback -> Network first for anything else
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
