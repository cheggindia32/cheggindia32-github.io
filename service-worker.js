const CACHE_NAME = "pwa-cache-v6";
const urlsToCache = [
  "index.html",
  "styles.css",
  "script.js",
  "icon.png",
  "manifest.json",
  "background.jpg" // Add the image here
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
