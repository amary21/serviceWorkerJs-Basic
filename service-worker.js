const CACHE_NAME = "movie-v1";
var urlsToCache = [
    "/",
    "/nav.html",
    "/index.js",
    "/index.html",
    "/styles/main.css",
    "/styles/item.css",
    "/scripts/main.js",
    "/scripts/views/view-item.js",
    "/scripts/views/view-home.js",
    "/scripts/data/data-marvel.js",
    "/scripts/data/data-home.js",
    "/scripts/data/data-disney.js",
    "/scripts/data/data-dc.js",
    "/pages/movie-marvel.html",
    "/pages/movie-disney.html",
    "/pages/movie-dc.html",
    "/pages/home.html",
    "/materialize/js/materialize.min.js",
    "/materialize/js/jquery-2.1.1.min.js",
    "/materialize/css/materialize.min.css",
    "/images/marvel/avenger.jpg",
    "/images/marvel/civilwar.jpg",
    "/images/marvel/marvel.jpg",
    "/images/marvel/spiderman.jpg",
    "/images/marvel/thor.jpg",
    "/images/home/background3.jpg",
    "/images/home/background2.jpg",
    "/images/home/background1.jpg",
    "/images/disney/mulan.jpg",
    "/images/disney/maleficent.jpg",
    "/images/disney/lionking.jpg",
    "/images/disney/frozen2.jpg",
    "/images/disney/aladin.jpg",
    "/images/dc/wonderwoman.jpg",
    "/images/dc/justiceleague.jpg",
    "/images/dc/joker.jpg",
    "/images/dc/darkknight.jpg",
    "/images/dc/birdsofprey.jpg"
];

self.addEventListener("install", function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            return cache.addAll(urlsToCache)
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches
        .match(event.request, { cacheName: CACHE_NAME })
        .then(function(response) {
          if (response) {
            console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
            return response;
          }
   
          console.log(
            "ServiceWorker: Memuat aset dari server: ",
            event.request.url
          );
          return fetch(event.request);
        })
    );
});

self.addEventListener("activate", function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName != CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
});
  