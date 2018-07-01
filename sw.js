/**
 * This is a service worker.
 */
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    )
});

/**
 * Enable caching
 */
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('currency-converter')
        .then(cache => {
            return cache.addAll(
                [
                    '/',
                    '/index.html',
                    '/manifest.json',
                    '/javascript/functions.js',
                    '/icons/money.png',
                    '/css/style.css',
                ]
            )
        })
    )
})