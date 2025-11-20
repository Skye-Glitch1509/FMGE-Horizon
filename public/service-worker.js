const CACHE_NAME = 'fmge-planner-v5'; // bump this version every time you deploy!
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  // Add other static files if needed
];

// Install event - cache static assets and activate new SW instantly
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(err => {
        console.log('Caching error:', err);
      });
    })
  );
  self.skipWaiting(); // Forces new SW to activate immediately
});

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control without refresh
});

// Fetch event - serve from cache, fallback to network and update cache
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;

      // Fallback to network
      return fetch(event.request).then(networkResponse => {
        if (
          !networkResponse ||
          networkResponse.status !== 200 ||
          networkResponse.type === 'error'
        ) {
          return networkResponse;
        }

        // Update cache with new files
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Optional: fallback to homepage for navigation requests on error
        return caches.match('/');
      });
    })
  );
});

// Push notification event (leave for future use)
self.addEventListener('push', event => {
  console.log('Push notification received:', event);
  if (!event.data) return;

  const data = event.data.json();
  const options = {
    body: data.body || 'FMGE Planner Reminder',
    icon: '/icon-192.png',
    badge: '/badge-72.png',
    tag: data.tag || 'fmge-reminder',
    requireInteraction: true,
    actions: [
      { action: 'open', title: 'Open App' },
      { action: 'close', title: 'Dismiss' },
    ],
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'FMGE Planner', options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'close') return;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

/* Extra: In your main app (index.js/ts), to force reload on SW change */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    window.location.reload();
  });
}
