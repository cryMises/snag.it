const CACHE = 'snagit-v1';
const SHELL = [
  'index.html',
  'snag-it.html',
  'site.webmanifest',
  'images/apple-touch-icon.png',
  'images/favicon-32x32.png',
  'images/favicon-16x16.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap',
];

// Install: cache the app shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL))
  );
  self.skipWaiting();
});

// Activate: clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for shell, network-only for webhook API
self.addEventListener('fetch', e => {
  // Always hit the network for the webhook data
  if (e.request.url.includes('ngrok') || e.request.url.includes('webhook')) {
    return; // fall through to network
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
