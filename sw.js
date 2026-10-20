/* Respira Quest – service worker (offline + pembaruan otomatis) */
const VERSION='dev'; // diganti otomatis oleh GitHub Actions dengan kode commit
const CACHE='respira-quest-'+VERSION;
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png','og-image.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n.startsWith('respira-quest-')&&n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  if(r.mode==='navigate'){ // halaman: ambil versi terbaru, jika offline pakai salinan tersimpan
    e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put('index.html',cp))}return res})
      .catch(()=>caches.match('index.html').then(h=>h||caches.match('./'))));return}
  if(u.origin===location.origin||/(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){ // aset: cepat dari cache, perbarui di latar
    e.respondWith(caches.match(r).then(hit=>{
      const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res}).catch(()=>hit);
      return hit||net}))}
});
