---
title: Alat dan Konfigurasi
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Alat dan Konfigurasi

Theme Builder menggunakan serangkaian alat untuk menganalisis, merancang, dan membangun situs WordPress Anda. Dalam versi 1.16.0, **sd-ai-agent/site-scrape kini menjadi alat Tingkat 1**, sehingga tersedia secara default di Theme Builder. Superdav AI Agent v1.18.0 juga memperkenalkan paket pendamping Advanced yang didistribusikan secara terpisah untuk alur kerja developer tepercaya; alat-alat tersebut bukan bagian dari paket inti WordPress.org dan harus diinstal serta diotorisasi secara terpisah.

## Alat yang Tersedia {#available-tools}

### Alat Tingkat 1 (Selalu Tersedia) {#tier-1-tools-always-available}

Alat Tingkat 1 tersedia secara default di Theme Builder tanpa konfigurasi tambahan apa pun.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Tujuan:** Menganalisis situs web yang sudah ada untuk mengekstrak inspirasi desain, struktur konten, dan fungsionalitas.

**Kemampuan:**

- **Analisis situs web** — scrape dan analisis situs web pesaing atau inspirasi
- **Ekstraksi desain** — mengidentifikasi warna, font, dan pola tata letak
- **Struktur konten** — memahami organisasi dan hierarki halaman
- **Deteksi fitur** — mengidentifikasi plugin dan fungsionalitas
- **Analisis performa** — memeriksa kecepatan halaman dan optimisasi
- **Analisis SEO** — meninjau tag meta dan data terstruktur

**Penggunaan:**

```
Analisis desain example.com dan gunakan sebagai inspirasi untuk situs saya.
```

**Yang Diekstrak:**

- Palet warna dan penggunaan warna
- Tipografi (font dan ukuran)
- Struktur tata letak dan jarak
- Pola navigasi
- Organisasi konten
- Penggunaan gambar dan media
- Elemen interaktif
- Responsivitas seluler

**Batasan:**

- Tidak dapat scrape situs yang dilindungi kata sandi
- Menghormati robots.txt dan kebijakan situs
- Mungkin tidak menangkap konten dinamis
- Situs yang sangat bergantung pada JavaScript mungkin memiliki analisis terbatas
- Situs besar mungkin membutuhkan waktu lebih lama untuk dianalisis

### Alat Tingkat 2 (Opsional) {#tier-2-tools-optional}

Alat Tingkat 2 tersedia ketika diaktifkan secara eksplisit di pengaturan Theme Builder.

#### Analitik Lanjutan {#advanced-analytics}

Menyediakan metrik performa terperinci:

- Waktu pemuatan halaman
- Core Web Vitals
- Skor SEO
- Skor aksesibilitas
- Skor praktik terbaik

#### Pengoptimal Konten {#content-optimizer}

Menganalisis dan menyarankan peningkatan untuk:

- Keterbacaan
- Optimisasi SEO
- Penggunaan kata kunci
- Struktur konten
- Penempatan ajakan bertindak

### Alat Tingkat 3 (Premium) {#tier-3-tools-premium}

Alat Tingkat 3 memerlukan konfigurasi tambahan atau fitur premium.

#### Generator Konten AI {#ai-content-generator}

Menghasilkan konten untuk:

- Deskripsi produk
- Halaman layanan
- Postingan blog
- Deskripsi meta
- Teks ajakan bertindak

#### Alat Desain Lanjutan {#advanced-design-tools}

Menyediakan kemampuan desain lanjutan:

- Pembuatan CSS khusus
- Pembuatan animasi
- Desain elemen interaktif
- Teori warna lanjutan
- Optimisasi tipografi

### Alat Pendamping Advanced (Paket Terpisah) {#advanced-companion-tools-separate-package}

Paket pendamping Advanced didistribusikan secara terpisah dari rilis inti Superdav AI Agent. Paket ini ditujukan untuk lingkungan developer dan pemilik situs tepercaya, tempat administrator secara eksplisit mengizinkan agent menggunakan perkakas berdampak tinggi.

Kemampuan pendamping Advanced dapat mencakup:

- **Alat filesystem** — memeriksa dan memodifikasi file yang disetujui di lingkungan tepercaya
- **Alat database** — menjalankan query atau memperbarui data situs ketika diotorisasi secara eksplisit
- **Alat WP-CLI** — menjalankan perintah pemeliharaan dan inspeksi WordPress
- **Alat dispatcher REST** — memanggil endpoint REST terdaftar melalui alur kerja dispatch yang terkontrol
- **Alat pembuat plugin** — membuat scaffold dan melakukan iterasi pada kode plugin
- **Alat snapshot Git** — membuat snapshot sebelum operasi developer yang berisiko
- **Alat manajemen pengguna** — membantu meninjau atau menyesuaikan catatan pengguna jika diizinkan
- **Alat benchmark** — menjalankan benchmark performa atau kemampuan untuk tinjauan pengembangan

Jangan dokumentasikan alat-alat ini sebagai alat Theme Builder yang tersedia secara umum untuk setiap instalasi. Alat-alat ini hanya tersedia ketika paket pendamping Advanced diinstal, diaktifkan, dan dibatasi untuk administrator tepercaya.

## Konfigurasi Alat {#tool-configuration}

### Mengaktifkan Alat {#enabling-tools}

Untuk mengaktifkan alat tambahan di Theme Builder:

1. Buka **Gratis AI Agent → Settings**
2. Pergi ke **Theme Builder → Tools**
3. Aktifkan/nonaktifkan alat sesuai kebutuhan
4. Simpan pengaturan

### Izin Alat {#tool-permissions}

Beberapa alat memerlukan izin:

- **Scraping situs** — memerlukan akses internet
- **Analitik** — memerlukan integrasi Google Analytics
- **Pembuatan konten** — memerlukan API key
- **Fitur lanjutan** — mungkin memerlukan langganan premium
- **Alat pendamping Advanced** — memerlukan paket Advanced yang didistribusikan secara terpisah dan kepercayaan administrator yang eksplisit

### API Key dan Kredensial {#api-keys-and-credentials}

Konfigurasikan API key untuk alat yang memerlukannya:

1. Buka **Gratis AI Agent → Settings → API Keys**
2. Masukkan kredensial untuk setiap alat
3. Uji koneksi
4. Simpan dengan aman

### Menginstal Paket Pendamping Advanced {#installing-the-advanced-companion-package}

Paket pendamping Advanced dirilis secara terpisah dari ZIP inti WordPress.org. Instal hanya dari saluran distribusi proyek resmi untuk rilis tersebut, lalu batasi akses ke administrator tepercaya. Tinjau gerbang persetujuan manusia dan perilaku snapshot git sebelum mengaktifkan alat filesystem, database, WP-CLI, dispatcher REST, pembuat plugin, manajemen pengguna, atau benchmark di situs produksi.

## Menggunakan sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Penggunaan Dasar {#basic-usage}

Minta Theme Builder menganalisis sebuah situs web:

```
Analisis desain situs pesaing saya di competitor.com
dan sarankan peningkatan desain untuk situs saya.
```

### Analisis Spesifik {#specific-analysis}

Minta jenis analisis tertentu:

```
Ekstrak palet warna dari example.com dan gunakan sebagai inspirasi.
```

```
Analisis struktur navigasi example.com dan terapkan organisasi
serupa pada situs saya.
```

```
Periksa responsivitas seluler example.com dan pastikan situs saya
sama responsifnya.
```

### Analisis Perbandingan {#comparison-analysis}

Bandingkan beberapa situs:

```
Bandingkan desain site1.com dan site2.com lalu buat desain
yang menggabungkan elemen terbaik dari keduanya.
```

## Batasan dan Pertimbangan Alat {#tool-limitations-and-considerations}

### Pembatasan Laju {#rate-limiting}

- Scraping dibatasi lajunya untuk mencegah server kelebihan beban
- Beberapa permintaan ke site yang sama dapat dibatasi
- Site besar mungkin membutuhkan waktu lebih lama untuk dianalisis

### Akurasi Konten {#content-accuracy}

- Konten dinamis mungkin tidak tertangkap sepenuhnya
- Konten yang dirender JavaScript mungkin tidak lengkap
- Data real-time mungkin tidak tercermin
- Beberapa konten mungkin berada di balik paywall

### Pertimbangan Hukum dan Etika {#legal-and-ethical-considerations}

- Hormati robots.txt dan kebijakan site
- Jangan scrape konten berhak cipta untuk direproduksi
- Gunakan analisis sebagai inspirasi, bukan menyalin
- Verifikasi bahwa Anda memiliki hak untuk menggunakan konten yang diekstrak
- Ikuti terms of service dari site yang dianalisis

### Dampak Kinerja {#performance-impact}

- Scraping site besar mungkin memakan waktu
- Beberapa scrape simultan mungkin lebih lambat
- Konektivitas jaringan memengaruhi kecepatan
- Dataset besar mungkin memerlukan lebih banyak pemrosesan

## Praktik Terbaik {#best-practices}

### Menggunakan Analisis Site {#using-site-analysis}

1. **Analisis beberapa site** — kumpulkan inspirasi dari beberapa sumber
2. **Fokus pada struktur** — pelajari pola tata letak dan organisasi
3. **Ekstrak warna** — gunakan palet warna sebagai titik awal
4. **Pelajari tipografi** — identifikasi kombinasi font yang Anda sukai
5. **Tinjau navigasi** — pahami organisasi menu

### Scraping Etis {#ethical-scraping}

1. **Hormati robots.txt** — ikuti panduan site
2. **Jangan salin konten** — gunakan analisis hanya sebagai inspirasi
3. **Verifikasi hak** — pastikan Anda dapat menggunakan konten yang diekstrak
4. **Cantumkan sumber** — beri kredit pada sumber inspirasi
5. **Ikuti ketentuan** — patuhi terms of service site

### Memaksimalkan Efektivitas Alat {#maximizing-tool-effectiveness}

1. **Spesifiklah** — minta jenis analisis tertentu
2. **Berikan konteks** — jelaskan tujuan site Anda
3. **Tetapkan ekspektasi** — jelaskan tujuan desain Anda
4. **Iterasi** — sempurnakan berdasarkan hasil
5. **Gabungkan alat** — gunakan beberapa alat untuk analisis komprehensif

## Pemecahan Masalah {#troubleshooting}

### Site Tidak Dapat Di-scrape {#site-wont-scrape}

- Periksa apakah site dapat diakses publik
- Verifikasi robots.txt mengizinkan scraping
- Coba site lain
- Periksa koneksi internet
- Hubungi dukungan jika masalah berlanjut

### Analisis Tidak Lengkap {#incomplete-analysis}

- Site mungkin memiliki konten dinamis
- JavaScript mungkin tidak dirender sepenuhnya
- Site besar mungkin mengalami timeout
- Coba analisis halaman tertentu sebagai gantinya
- Minta jenis analisis tertentu

### Kinerja Lambat {#slow-performance}

- Site besar membutuhkan waktu lebih lama untuk dianalisis
- Beberapa scrape simultan lebih lambat
- Konektivitas jaringan memengaruhi kecepatan
- Coba selama jam sepi
- Analisis bagian yang lebih kecil terlebih dahulu

## Dokumentasi Terkait {#related-documentation}

- [Wawancara Penemuan](./discovery-interview.md) — kumpulkan informasi desain
- [Arah Desain](./design-direction.md) — sempurnakan desain Anda
- [Menu Hospitality](./hospitality-menus.md) — buat halaman menu
