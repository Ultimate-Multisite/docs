---
title: Alat dan Konfigurasi
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Alat dan Konfigurasi {#tools-and-configuration}

Theme Builder menggunakan satu set alat untuk menganalisis, mereka bentuk, dan membina tapak WordPress anda. Dalam versi 1.16.0, **sd-ai-agent/site-scrape kini ialah alat Tahap 1**, menjadikannya tersedia secara lalai dalam Theme Builder. Superdav AI Agent v1.18.0 juga memperkenalkan pakej pendamping Advanced yang diedarkan secara berasingan untuk aliran kerja pembangun yang dipercayai; alat tersebut bukan sebahagian daripada pakej teras WordPress.org dan mesti dipasang serta dibenarkan secara berasingan.

## Alat Tersedia {#available-tools}

### Alat Tahap 1 (Sentiasa Tersedia) {#tier-1-tools-always-available}

Alat Tahap 1 tersedia secara lalai dalam Theme Builder tanpa sebarang konfigurasi tambahan.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Tujuan:** Menganalisis laman web sedia ada untuk mengekstrak inspirasi reka bentuk, struktur kandungan, dan fungsi.

**Keupayaan:**

- **Analisis laman web** — mengikis dan menganalisis laman web pesaing atau inspirasi
- **Pengekstrakan reka bentuk** — mengenal pasti warna, fon, dan corak tataletak
- **Struktur kandungan** — memahami organisasi dan hierarki halaman
- **Pengesanan ciri** — mengenal pasti plugin dan fungsi
- **Analisis prestasi** — menyemak kelajuan halaman dan pengoptimuman
- **Analisis SEO** — menyemak tag meta dan data berstruktur

**Penggunaan:**

```
Analisis reka bentuk example.com dan gunakannya sebagai inspirasi untuk tapak saya.
```

**Apa yang Diekstrak:**

- Palet warna dan penggunaan warna
- Tipografi (fon dan saiz)
- Struktur tataletak dan jarak
- Corak navigasi
- Organisasi kandungan
- Penggunaan imej dan media
- Elemen interaktif
- Responsif mudah alih

**Batasan:**

- Tidak boleh mengikis tapak yang dilindungi kata laluan
- Menghormati robots.txt dan dasar tapak
- Mungkin tidak menangkap kandungan dinamik
- Tapak yang berat JavaScript mungkin mempunyai analisis terhad
- Tapak besar mungkin mengambil masa lebih lama untuk dianalisis

### Alat Tahap 2 (Pilihan) {#tier-2-tools-optional}

Alat Tahap 2 tersedia apabila didayakan secara jelas dalam tetapan Theme Builder.

#### Analitik Lanjutan {#advanced-analytics}

Menyediakan metrik prestasi terperinci:

- Masa muat halaman
- Core Web Vitals
- Skor SEO
- Skor kebolehcapaian
- Skor amalan terbaik

#### Pengoptimum Kandungan {#content-optimizer}

Menganalisis dan mencadangkan penambahbaikan untuk:

- Kebolehbacaan
- Pengoptimuman SEO
- Penggunaan kata kunci
- Struktur kandungan
- Peletakan seruan tindakan

### Alat Tahap 3 (Premium) {#tier-3-tools-premium}

Alat Tahap 3 memerlukan konfigurasi tambahan atau ciri premium.

#### Penjana Kandungan AI {#ai-content-generator}

Menjana kandungan untuk:

- Penerangan produk
- Halaman perkhidmatan
- Catatan blog
- Penerangan meta
- Salinan seruan tindakan

#### Alat Reka Bentuk Lanjutan {#advanced-design-tools}

Menyediakan keupayaan reka bentuk lanjutan:

- Penjanaan CSS tersuai
- Penciptaan animasi
- Reka bentuk elemen interaktif
- Teori warna lanjutan
- Pengoptimuman tipografi

### Alat Pendamping Advanced (Pakej Berasingan) {#advanced-companion-tools-separate-package}

Pakej pendamping Advanced diedarkan secara berasingan daripada keluaran teras Superdav AI Agent. Ia bertujuan untuk persekitaran pembangun dan pemilik tapak yang dipercayai, di mana pentadbir secara jelas membenarkan agent menggunakan alat berimpak tinggi.

Keupayaan pendamping Advanced boleh termasuk:

- **Alat sistem fail** — memeriksa dan mengubah suai fail yang diluluskan dalam persekitaran dipercayai
- **Alat pangkalan data** — membuat pertanyaan atau mengemas kini data tapak apabila dibenarkan secara jelas
- **Alat WP-CLI** — menjalankan arahan penyelenggaraan dan pemeriksaan WordPress
- **Alat penghantar REST** — memanggil endpoint REST berdaftar melalui aliran kerja penghantaran terkawal
- **Alat pembina plugin** — membina rangka dan mengulang pada kod plugin
- **Alat petikan Git** — mencipta petikan sebelum operasi pembangun yang berisiko
- **Alat pengurusan pengguna** — membantu menyemak atau melaraskan rekod pengguna jika dibenarkan
- **Alat penanda aras** — menjalankan penanda aras prestasi atau keupayaan untuk semakan pembangunan

Jangan dokumentasikan alat ini sebagai alat Theme Builder yang tersedia secara umum untuk setiap pemasangan. Alat ini hanya tersedia apabila pakej pendamping Advanced dipasang, didayakan, dan dihadkan kepada pentadbir yang dipercayai.

## Konfigurasi Alat {#tool-configuration}

### Mendayakan Alat {#enabling-tools}

Untuk mendayakan alat tambahan dalam Theme Builder:

1. Navigasi ke **Gratis AI Agent → Tetapan**
2. Pergi ke **Theme Builder → Alat**
3. Togol alat hidup/mati mengikut keperluan
4. Simpan tetapan

### Kebenaran Alat {#tool-permissions}

Sesetengah alat memerlukan kebenaran:

- **Pengikisan tapak** — memerlukan akses internet
- **Analitik** — memerlukan integrasi Google Analytics
- **Penjanaan kandungan** — memerlukan kunci API
- **Ciri lanjutan** — mungkin memerlukan langganan premium
- **Alat pendamping Advanced** — memerlukan pakej Advanced yang diedarkan secara berasingan dan kepercayaan pentadbir yang jelas

### Kunci API dan Kelayakan {#api-keys-and-credentials}

Konfigurasikan kunci API untuk alat yang memerlukannya:

1. Pergi ke **Gratis AI Agent → Tetapan → Kunci API**
2. Masukkan kelayakan untuk setiap alat
3. Uji sambungan
4. Simpan dengan selamat

### Memasang Pakej Pendamping Advanced {#installing-the-advanced-companion-package}

Pakej pendamping Advanced dikeluarkan secara berasingan daripada ZIP teras WordPress.org. Pasangnya hanya daripada saluran pengedaran projek rasmi untuk keluaran tersebut, kemudian hadkan akses kepada pentadbir yang dipercayai. Semak pagar kelulusan manusia dan tingkah laku petikan git sebelum mendayakan alat sistem fail, pangkalan data, WP-CLI, penghantar REST, pembina plugin, pengurusan pengguna, atau penanda aras pada tapak produksi.

## Menggunakan sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Penggunaan Asas {#basic-usage}

Minta Theme Builder menganalisis laman web:

```
Analisis reka bentuk tapak pesaing saya di competitor.com
dan cadangkan penambahbaikan reka bentuk untuk tapak saya.
```

### Analisis Khusus {#specific-analysis}

Minta jenis analisis khusus:

```
Ekstrak palet warna daripada example.com dan gunakannya sebagai inspirasi.
```

```
Analisis struktur navigasi example.com dan gunakan organisasi
yang serupa pada tapak saya.
```

```
Semak responsif mudah alih example.com dan pastikan tapak saya
sama responsif.
```

### Analisis Perbandingan {#comparison-analysis}

Bandingkan berbilang tapak:

```
Bandingkan reka bentuk site1.com dan site2.com dan cipta reka bentuk
yang menggabungkan elemen terbaik daripada kedua-duanya.
```

## Batasan dan Pertimbangan Alat {#tool-limitations-and-considerations}

### Pengehadan Kadar {#rate-limiting}

- Scraping dihadkan kadar untuk mengelakkan beban berlebihan pada pelayan
- Pelbagai permintaan ke laman yang sama mungkin diperlahankan
- Laman besar mungkin mengambil masa lebih lama untuk dianalisis

### Ketepatan Kandungan {#content-accuracy}

- Kandungan dinamik mungkin tidak ditangkap sepenuhnya
- Kandungan yang dirender JavaScript mungkin tidak lengkap
- Data masa nyata mungkin tidak dipaparkan
- Sesetengah kandungan mungkin berada di sebalik paywall

### Pertimbangan Undang-undang dan Etika {#legal-and-ethical-considerations}

- Hormati robots.txt dan dasar laman
- Jangan scrape kandungan berhak cipta untuk diterbitkan semula
- Gunakan analisis untuk inspirasi, bukan menyalin
- Sahkan anda mempunyai hak untuk menggunakan kandungan yang diekstrak
- Patuhi terma perkhidmatan laman yang dianalisis

### Kesan Prestasi {#performance-impact}

- Scraping laman besar mungkin mengambil masa
- Pelbagai scrape serentak mungkin lebih perlahan
- Kesambungan rangkaian mempengaruhi kelajuan
- Dataset besar mungkin memerlukan lebih banyak pemprosesan

## Amalan Terbaik {#best-practices}

### Menggunakan Analisis Laman {#using-site-analysis}

1. **Analisis pelbagai laman** — kumpulkan inspirasi daripada beberapa sumber
2. **Fokus pada struktur** — pelajari corak susun atur dan organisasi
3. **Ekstrak warna** — gunakan palet warna sebagai titik permulaan
4. **Kaji tipografi** — kenal pasti gabungan fon yang anda suka
5. **Semak navigasi** — fahami organisasi menu

### Scraping Beretika {#ethical-scraping}

1. **Hormati robots.txt** — ikuti garis panduan laman
2. **Jangan salin kandungan** — gunakan analisis untuk inspirasi sahaja
3. **Sahkan hak** — pastikan anda boleh menggunakan kandungan yang diekstrak
4. **Nyatakan sumber** — beri kredit kepada sumber inspirasi
5. **Ikuti terma** — patuhi terma perkhidmatan laman

### Memaksimumkan Keberkesanan Alat {#maximizing-tool-effectiveness}

1. **Jadi spesifik** — minta jenis analisis tertentu
2. **Berikan konteks** — jelaskan tujuan laman anda
3. **Tetapkan jangkaan** — huraikan matlamat reka bentuk anda
4. **Ulang kaji** — perhalusi berdasarkan hasil
5. **Gabungkan alat** — gunakan pelbagai alat untuk analisis menyeluruh

## Penyelesaian Masalah {#troubleshooting}

### Laman Tidak Dapat Di-scrape {#site-wont-scrape}

- Semak sama ada laman boleh diakses secara awam
- Sahkan robots.txt membenarkan scraping
- Cuba laman lain
- Semak sambungan internet
- Hubungi sokongan jika isu berterusan

### Analisis Tidak Lengkap {#incomplete-analysis}

- Laman mungkin mempunyai kandungan dinamik
- JavaScript mungkin tidak dirender sepenuhnya
- Laman besar mungkin tamat masa
- Cuba analisis halaman tertentu sebaliknya
- Minta jenis analisis tertentu

### Prestasi Perlahan {#slow-performance}

- Laman besar mengambil masa lebih lama untuk dianalisis
- Pelbagai scrape serentak lebih perlahan
- Kesambungan rangkaian mempengaruhi kelajuan
- Cuba semasa waktu luar puncak
- Analisis bahagian yang lebih kecil dahulu

## Dokumentasi Berkaitan {#related-documentation}

- [Temu Bual Penemuan](./discovery-interview.md) — kumpulkan maklumat reka bentuk
- [Arah Reka Bentuk](./design-direction.md) — perhalusi reka bentuk anda
- [Menu Hospitaliti](./hospitality-menus.md) — cipta halaman menu
