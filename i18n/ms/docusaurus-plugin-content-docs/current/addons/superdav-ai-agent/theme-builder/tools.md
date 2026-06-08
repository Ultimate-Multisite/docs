---
title: Alat dan Konfigurasi
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Alat dan Konfigurasi

Theme Builder menggunakan set alat untuk menganalisis, mereka bentuk, dan membina laman web WordPress anda. Dalam versi 1.16.0, **sd-ai-agent/site-scrape kini adalah alat Tier 1**, menjadikannya tersedia secara lalai dalam Theme Builder.

## Alat yang Tersedia

### Alat Tier 1 (Sentiasa Tersedia)

Alat Tier 1 tersedia secara lalai dalam Theme Builder tanpa sebarang konfigurasi tambahan.

#### sd-ai-agent/site-scrape

**Tujuan:** Menganalisis laman web sedia ada untuk mengekstrak inspirasi reka bentuk, struktur kandungan, dan kefungsian.

**Keupayaan:**

- **Analisis laman web** — mengikis dan menganalisis laman web pesaing atau sumber inspirasi
- **Pengekstrakan reka bentuk** — mengenal pasti warna, fon, dan corak susun atur
- **Struktur kandungan** — memahami organisasi dan hierarki halaman
- **Pengesanan ciri** — mengenal pasti plugin dan kefungsian
- **Analisis prestasi** — menyemak kelajuan dan pengoptimuman halaman
- **Analisis SEO** — menyemak meta tags dan structured data

**Cara Penggunaan:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**Apa yang Diekstrak:**

- Palet warna dan penggunaan warna
- Tipografi (fon dan saiz)
- Struktur susun atur dan jarak
- Corak navigasi
- Organisasi kandungan
- Penggunaan imej dan media
- Elemen interaktif
- Kebolehcapaian mudah alih (Mobile responsiveness)

**Batasan:**

- Tidak boleh mengikis laman web yang dilindungi kata laluan
- Menghormati robots.txt dan polisi laman web
- Mungkin tidak menangkap kandungan dinamik
- Laman web yang berat dengan JavaScript mungkin mempunyai analisis terhad
- Laman web yang besar mungkin mengambil masa lebih lama untuk dianalisis

### Alat Tier 2 (Pilihan)

Alat Tier 2 tersedia apabila diaktifkan secara eksplisit dalam tetapan Theme Builder.

#### Advanced Analytics

Menyediakan metrik prestasi terperinci:

- Masa muat halaman
- Core Web Vitals
- Skor SEO
- Skor Kebolehcapaian (Accessibility score)
- Skor amalan terbaik (Best practices score)

#### Content Optimizer

Menganalisis dan mencadangkan penambahbaikan untuk:

- Kebolehbacaan
- Pengoptimuman SEO
- Penggunaan kata kunci
- Struktur kandungan
- Penempatan Call-to-action

### Alat Tier 3 (Premium)

Alat Tier 3 memerlukan konfigurasi tambahan atau ciri premium.

#### AI Content Generator

Menjana kandungan untuk:

- Penerangan produk
- Halaman perkhidmatan
- Pos blog
- Meta descriptions
- Teks Call-to-action

#### Advanced Design Tools

Menyediakan keupayaan reka bentuk lanjutan:

- Penjanaan CSS tersuai
- Penciptaan animasi
- Reka bentuk elemen interaktif
- Teori warna lanjutan
- Pengoptimuman tipografi

## Konfigurasi Alat

### Mengaktifkan Alat

Untuk mengaktifkan alat tambahan dalam Theme Builder:

1. Navigasi ke **Gratis AI Agent → Settings**
2. Pergi ke **Theme Builder → Tools**
3. Tukar alat pada/mati mengikut keperluan
4. Simpan tetapan

### Kebenaran Alat

Sesetengah alat memerlukan kebenaran:

- **Site scraping** — memerlukan akses internet
- **Analytics** — memerlukan integrasi Google Analytics
- **Content generation** — memerlukan API keys
- **Advanced features** — mungkin memerlukan langganan premium

### API Keys dan Kredensial

Konfigurasikan API keys untuk alat yang memerlukannya:

1. Pergi ke **Gratis AI Agent → Settings → API Keys**
2. Masukkan kredensial untuk setiap alat
3. Uji sambungan
4. Simpan dengan selamat

## Menggunakan sd-ai-agent/site-scrape

### Penggunaan Asas

Minta Theme Builder untuk menganalisis laman web:

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### Analisis Spesifik

Meminta jenis analisis tertentu:

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### Analisis Perbandingan

Membandingkan pelbagai laman web:

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Batasan dan Pertimbangan Alat

### Had Kadar (Rate Limiting)

- Scraping dihadkan kadarnya untuk mengelakkan beban berlebihan pada pelayan
- Permintaan berulang ke laman web yang sama mungkin dihadkan
- Laman web yang besar mungkin mengambil masa lebih lama untuk dianalisis

### Ketepatan Kandungan

- Kandungan dinamik mungkin tidak ditangkap sepenuhnya
- Kandungan yang dirender oleh JavaScript mungkin tidak lengkap
- Data masa nyata mungkin tidak dipantulkan
- Sesetengah kandungan mungkin berada di sebalik paywall

### Pertimbangan Undang-undang dan Etika

- Hormati robots.txt dan polisi laman web
- Jangan mengikis kandungan berhak cipta untuk tujuan penggandaan
- Gunakan analisis untuk inspirasi, bukan untuk menyalin
- Sahkan anda mempunyai hak untuk menggunakan kandungan yang diekstrak
- Ikuti terma perkhidmatan laman web yang dianalisis

### Impak Prestasi

- Mengikis laman web yang besar mungkin mengambil masa
- Scraping serentak yang banyak mungkin lebih perlahan
- Sambungan rangkaian mempengaruhi kelajuan
- Set data yang besar mungkin memerlukan pemprosesan yang lebih banyak

## Amalan Terbaik

### Menggunakan Analisis Laman Web

1. **Analisis pelbagai laman web** — kumpulkan inspirasi dari beberapa sumber
2. **Fokus pada struktur** — pelajari corak susun atur dan organisasi
3. **Ekstrak warna** — gunakan palet warna sebagai titik permulaan
4. **Kaji tipografi** — kenal pasti gabungan fon yang anda suka
5. **Semak navigasi** — fahami organisasi menu

### Scraping Beretika

1. **Hormati robots.txt** — ikuti garis panduan laman web
2. **Jangan salin kandungan** — gunakan analisis hanya untuk inspirasi
3. **Sahkan hak** — pastikan anda boleh menggunakan kandungan yang diekstrak
4. **Atribusi sumber** — berikan kredit kepada sumber inspirasi
5. **Ikuti terma** — patuhi terma perkhidmatan laman web

### Memaksimumkan Keberkesanan Alat

1. **Bersikap spesifik** — minta jenis analisis tertentu
2. **Berikan konteks** — jelaskan tujuan laman web anda
3. **Tetapkan jangkaan** — huraikan matlamat reka bentuk anda
4. **Ulangkaji** — perhalusi berdasarkan keputusan
5. **Gabungkan alat** — gunakan pelbagai alat untuk analisis yang komprehensif

## Penyelesaian Masalah

### Laman Web Tidak Boleh Discrape

- Semak sama ada laman web boleh diakses secara awam
- Sahkan robots.txt membenarkan scraping
- Cuba laman web yang berbeza
- Semak sambungan internet
- Hubungi sokongan jika masalah berterusan

### Analisis Tidak Lengkap

- Laman web mungkin mempunyai kandungan dinamik
- JavaScript mungkin tidak dirender sepenuhnya
- Laman web yang besar mungkin tamat masa (timeout)
- Cuba analisis halaman tertentu pula
- Minta jenis analisis yang spesifik

### Prestasi Perlahan

- Laman web yang besar mengambil masa lebih lama untuk dianalisis
- Scraping serentak yang banyak lebih perlahan
- Sambungan rangkaian mempengaruhi kelajuan
- Cuba semasa waktu kurang sibuk
- Analisis bahagian yang lebih kecil dahulu

## Dokumentasi Berkaitan

- [Discovery Interview](./discovery-interview.md) — kumpulkan maklumat reka bentuk
- [Design Direction](./design-direction.md) — perhalusi reka bentuk anda
- [Hospitality Menus](./hospitality-menus.md) — cipta halaman menu
