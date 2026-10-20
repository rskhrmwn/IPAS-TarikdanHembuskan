# Respira Quest – Misi Penyelamatan Sistem Pernapasan

Game petualangan edukasi IPAS (kelas 6): 10 level, 86 soal, boss Raja Kuman, power-up, mode 1 atau 2 pemain.
Berjalan di browser (HP, tablet, komputer, layar IFP) dan bisa dipasang seperti aplikasi serta dimainkan offline.

## Cara memasang di GitHub Pages (± 5 menit)

1. Buat repositori baru di GitHub, beri nama **respira-quest** (publik).
2. Unggah **semua isi folder ini** ke repositori, termasuk folder `.github` dan file `.nojekyll`.
   - Cara termudah: *Add file → Upload files*, lalu seret semua file.
   - Jika folder `.github` tidak ikut terunggah (karena tersembunyi), pilih *Add file → Create new file*, ketik nama
     `.github/workflows/pages.yml`, lalu salin isi file `pages.yml` dari paket ini.
3. Buka **Settings → Pages**, pada **Source** pilih **GitHub Actions**.
4. Buka tab **Actions**, tunggu proses "Deploy Respira Quest ke GitHub Pages" bertanda hijau (± 1 menit).
5. Alamat game: `https://NAMA-GITHUB-ANDA.github.io/respira-quest/`

Alamat situs pada tag pratinjau WhatsApp dan versi cache terisi **otomatis** saat deploy, jadi tidak perlu mengedit apa pun.

> Jika Anda memilih *Deploy from a branch* (bukan GitHub Actions), cari dan ganti teks
> `https://USERNAME.github.io/respira-quest` di `index.html` dengan alamat situs Anda yang sebenarnya.

## Menguji pratinjau WhatsApp

- Kirim tautan ke chat sendiri atau grup uji. Pratinjau memuat gambar `og-image.jpg`, judul, dan deskripsi.
- WhatsApp menyimpan pratinjau lama. Jika masih kosong atau lama, tambahkan `?v=2` di ujung tautan.
- Gambar pratinjau harus tetap bisa dibuka di `https://.../og-image.jpg`.

## Memasang sebagai aplikasi

- **Android/Chrome:** muncul tombol "Pasang" di bagian bawah layar, atau menu ⋮ → *Pasang aplikasi*.
- **iPhone/iPad (Safari):** tombol Bagikan → *Tambah ke Layar Utama*.
- **Komputer (Chrome/Edge):** ikon pasang di kolom alamat.

## Isi paket

| File | Fungsi |
|---|---|
| `index.html` | Game |
| `manifest.webmanifest` | Data aplikasi (nama, ikon, layar penuh, lanskap) |
| `sw.js` | Service worker: offline + pembaruan otomatis |
| `og-image.jpg` | Gambar pratinjau 1200×630 untuk WhatsApp |
| `icon-*.png`, `apple-touch-icon.png` | Ikon aplikasi |
| `.github/workflows/pages.yml` | Deploy otomatis + pengisian alamat situs |
| `.nojekyll` | Mencegah GitHub memproses file dengan Jekyll |

Setiap kali Anda mengubah `index.html` dan melakukan *commit*, situs diperbarui otomatis. Pemain mendapat versi baru saat membuka ulang game.
