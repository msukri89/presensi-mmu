const CACHE_NAME = 'presensi-mmu-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Menyimpan aset utama aplikasi ke dalam memori HP saat pertama diinstal
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Mengambil tampilan langsung dari memori HP agar aplikasi terbuka super cepat
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
