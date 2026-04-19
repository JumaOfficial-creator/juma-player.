const cacheName = 'juma-sharif-v1';
const assets = [
  'index.html',
  'manifest.json',
  'music/modar.mp3',
  'music/padar.mp3',
  'music/afsus.mp3'
];

// Сабт кардани файлҳо дар кэш (хотираи барнома)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Гирифтани файлҳо аз кэш ҳангоми набудани интернет
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});