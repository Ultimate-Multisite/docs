---
title: Alat dan Konfigurasi
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Alat dan Konfigurasi

Theme Builder menggunakan serangkaian alat untuk menganalisis, merancang, dan membangun situs WordPress Anda. Pada versi 1.16.0, **sd-ai-agent/site-scrape kini menjadi alat Tingkat 1**, sehingga tersedia secara bawaan di Theme Builder.

## Alat yang Tersedia

### Alat Tingkat 1 (Selalu Tersedia)

Alat Tingkat 1 tersedia secara bawaan di Theme Builder tanpa konfigurasi tambahan.

#### sd-ai-agent/site-scrape

**Tujuan:** Menganalisis situs web yang sudah ada untuk mengekstrak inspirasi desain, struktur konten, dan fungsionalitas.

**Kemampuan:**

- **Analisis Situs Web** — merayapi dan menganalisis situs web kompetitor atau sumber inspirasi
- **Ekstraksi Desain** — mengidentifikasi warna, font, dan pola tata letak
- **Struktur Konten** — memahami organisasi dan hierarki halaman
- **Deteksi Fitur** — mengidentifikasi plugin dan fungsionalitas
- **Analisis Kinerja** — memeriksa kecepatan dan optimasi halaman
- **Analisis SEO** — meninjau meta tags dan structured data

**Penggunaan:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**Apa yang Diekstrak:**

- Palet warna dan penggunaan warna
- Tipografi (font dan ukuran)
- Struktur tata letak dan spasi
- Pola navigasi
- Organisasi konten
- Penggunaan gambar dan media
- Elemen interaktif
- Responsivitas seluler

**Keterbatasan:**

- Tidak dapat merayapi situs yang dilindungi kata sandi
- Menghormati robots.txt dan kebijakan situs
- Mungkin tidak menangkap konten dinamis
- Situs yang berat dengan JavaScript mungkin memiliki analisis terbatas
- Situs besar mungkin memerlukan waktu lebih lama untuk dianalisis

### Alat Tingkat 2 (Opsional)

Alat Tingkat 2 tersedia saat diaktifkan secara eksplisit di pengaturan Theme Builder.

#### Advanced Analytics

Menyediakan metrik kinerja terperinci:

- Waktu pemuatan halaman
- Core Web Vitals
- Skor SEO
- Skor Aksesibilitas
- Skor praktik terbaik

#### Content Optimizer

Menganalisis dan menyarankan perbaikan untuk:

- Keterbacaan
- Optimasi SEO
- Penggunaan kata kunci
- Struktur konten
- Penempatan ajakan bertindak (Call-to-action)

### Alat Tingkat 3 (Premium)

Alat Tingkat 3 memerlukan konfigurasi tambahan atau fitur premium.

#### AI Content Generator

Menghasilkan konten untuk:

- Deskripsi produk
- Halaman layanan
- Postingan blog
- Meta deskripsi
- Teks ajakan bertindak (Call-to-action copy)

#### Advanced Design Tools

Menyediakan kemampuan desain tingkat lanjut:

- Pembuatan CSS kustom
- Pembuatan animasi
- Desain elemen interaktif
- Teori warna tingkat lanjut
- Optimasi tipografi

## Konfigurasi Alat

### Mengaktifkan Alat

Untuk mengaktifkan alat tambahan di Theme Builder:

1. Arahkan ke **Gratis AI Agent → Settings**
2. Buka **Theme Builder → Tools**
3. Aktifkan/nonaktifkan alat sesuai kebutuhan
4. Simpan pengaturan

### Izin Alat

Beberapa alat memerlukan izin:

- **Site scraping** — memerlukan akses internet
- **Analytics** — memerlukan integrasi Google Analytics
- **Content generation** — memerlukan API keys
- **Advanced features** — mungkin memerlukan langganan premium

### API Keys dan Kredensial

Konfigurasikan API keys untuk alat yang membutuhkannya:

1. Buka **Gratis AI Agent → Settings → API Keys**
2. Masukkan kredensial untuk setiap alat
3. Uji koneksi
4. Simpan dengan aman

## Menggunakan sd-ai-agent/site-scrape

### Penggunaan Dasar

Minta Theme Builder untuk menganalisis situs web:

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

Membandingkan beberapa situs:

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Keterbatasan dan Pertimbangan Alat

### Rate Limiting

- Scraping dibatasi laju (rate-limited) untuk mencegah kelebihan beban server
- Permintaan ganda ke situs yang sama mungkin dibatasi (throttled)
- Situs besar mungkin memerlukan waktu lebih lama untuk dianalisis

### Akurasi Konten

- Konten dinamis mungkin tidak tertangkap sepenuhnya
- Konten yang dirender oleh JavaScript mungkin tidak lengkap
- Data real-time mungkin tidak tercermin
- Beberapa konten mungkin berada di balik paywall

### Pertimbangan Hukum dan Etika

- Menghormati robots.txt dan kebijakan situs
- Jangan merayapi konten berhak cipta untuk direproduksi
- Gunakan analisis untuk inspirasi, bukan untuk menjiplak
- Pastikan Anda memiliki hak untuk menggunakan konten yang diekstrak
- Ikuti syarat layanan dari situs yang dianalisis

### Dampak Kinerja

- Merayapi situs besar mungkin memakan waktu
- Beberapa scraping simultan mungkin lebih lambat
- Konektivitas jaringan memengaruhi kecepatan
- Dataset besar mungkin memerlukan pemrosesan lebih banyak

## Praktik Terbaik

### Menggunakan Analisis Situs

1. **Analisis beberapa situs** — kumpulkan inspirasi dari beberapa sumber
2. **Fokus pada struktur** — pelajari pola tata letak dan organisasi
3. **Ekstrak warna** — gunakan palet warna sebagai titik awal
4. **Pelajari tipografi** — identifikasi kombinasi font yang Anda sukai
5. **Tinjau navigasi** — pahami organisasi menu

### Scraping Etis

1. **Hormati robots.txt** — ikuti panduan situs
2. **Jangan menyalin konten** — gunakan analisis hanya untuk inspirasi
3. **Verifikasi hak** — pastikan Anda dapat menggunakan konten yang diekstrak
4. **Atribusi sumber** — berikan kredit pada sumber inspirasi
5. **Ikuti syarat** — patuhi syarat layanan situs

### Memaksimalkan Efektivitas Alat

1. **Bersikap spesifik** — minta jenis analisis tertentu
2. **Berikan konteks** — jelaskan tujuan situs Anda
3. **Tetapkan ekspektasi** — jelaskan tujuan desain Anda
4. **Iterasi** — perbaiki berdasarkan hasil
5. **Gabungkan alat** — gunakan beberapa alat untuk analisis komprehensif

## Pemecahan Masalah

### Situs Tidak Bisa Direkayapi (Scrape)

- Periksa apakah situs dapat diakses publik
- Verifikasi robots.txt mengizinkan scraping
- Coba situs yang berbeda
- Periksa koneksi internet
- Hubungi dukungan jika masalah berlanjut

### Analisis Tidak Lengkap

- Situs mungkin memiliki konten dinamis
- JavaScript mungkin tidak dirender sepenuhnya
- Situs besar mungkin mengalami *timeout*
- Coba analisis halaman tertentu saja
- Minta jenis analisis spesifik

### Kinerja Lambat

- Situs besar membutuhkan waktu lebih lama untuk dianalisis
- Beberapa scraping simultan lebih lambat
- Konektivitas jaringan memengaruhi kecepatan
- Coba saat jam sepi
- Analisis bagian yang lebih kecil terlebih dahulu

## Dokumentasi Terkait

- [Discovery Interview](./discovery-interview.md) — kumpulkan informasi desain
- [Design Direction](./design-direction.md) — sempurnakan desain Anda
- [Hospitality Menus](./hospitality-menus.md) — buat halaman menu
