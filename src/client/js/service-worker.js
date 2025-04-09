const CACHE_NAME = 'travel-app-cache-v1';
const urlsToCache = [
    '/index.html',
    '/main.bundle.js',
    '/main.css',
];

// Install event: Cache files
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Service Worker: Caching files:', urlsToCache);
            return cache.addAll(urlsToCache);
        }).catch((error) => {
            console.error('Service Worker: Failed to cache files:', error);
        })
    );
});

// Fetch event: Serve cached files
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching:', event.request.url);

    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log('Service Worker: Serving from cache:', event.request.url);
                return response;
            }

            // Handle navigation requests (e.g., "/")
            if (event.request.mode === 'navigate') {
                console.log('Service Worker: Serving cached index.html for navigation request');
                return caches.match('/index.html');
            }

            console.log('Service Worker: Fetching from network:', event.request.url);
            return fetch(event.request);
        }).catch((error) => {
            console.error('Service Worker: Fetch failed:', error);
            throw error;
        })
    );
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});