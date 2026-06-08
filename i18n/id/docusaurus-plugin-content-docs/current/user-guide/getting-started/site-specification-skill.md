---
title: Keahlian Spesifikasi Situs
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Keahlian Spesifikasi Situs

**Keahlian Spesifikasi Situs** adalah pendekatan terstruktur untuk menangkap tujuan situs, audiens, dan identitas merek Anda. Informasi ini disimpan dalam memori **site_brief** Anda, yang dirujuk oleh agen di berbagai sesi untuk memberikan bantuan yang konsisten dan sesuai konteks.

## Apa itu Spesifikasi Situs?

Spesifikasi Situs adalah proses mendokumentasikan:

- **Tujuan situs**: Apa yang dilakukan situs Anda dan mengapa situs itu ada
- **Audiens target**: Siapa yang mengunjungi situs Anda dan apa yang mereka butuhkan
- **Identitas merek**: Warna, nada, dan gaya visual Anda
- **Tujuan bisnis**: Seperti apa kesuksesan bagi situs Anda
- **Struktur konten**: Bagaimana situs Anda diorganisasi

Spesifikasi ini menjadi **site_brief** Anda, memori persisten yang digunakan agen untuk memahami konteks situs Anda.

## Mengapa Menggunakan Spesifikasi Situs?

### Konsistensi Antar Sesi

Tanpa site_brief, Anda harus menjelaskan kembali tujuan situs Anda setiap kali memulai sesi baru. Dengan adanya site_brief, agen akan langsung memahami:

- Tujuan dan audiens situs Anda
- Warna dan nada merek Anda
- Struktur konten Anda
- Tujuan bisnis Anda

### Rekomendasi yang Lebih Baik

Agen menggunakan site_brief Anda untuk:

- Menyarankan fitur yang selaras dengan tujuan situs Anda
- Merekomendasikan struktur konten yang sesuai dengan tujuan Anda
- Mengusulkan desain yang konsisten dengan merek Anda
- Menghindari saran fitur yang tidak kompatibel

### Orientasi (Onboarding) yang Lebih Cepat

Agen baru (atau agen dalam sesi baru) dapat dengan cepat memahami konteks dengan membaca site_brief Anda, alih-alih harus mengajukan pertanyaan klarifikasi.

## Memulai Spesifikasi Situs

### Selama Orientasi Theme Builder

Keahlian Spesifikasi Situs secara otomatis dimulai selama alur **Orientasi Theme Builder**. Agen Setup Assistant akan mengajukan pertanyaan dan membangun site_brief Anda.

### Inisiasi Manual

Anda dapat memulai Spesifikasi Situs kapan saja:

```
"Mari kita definisikan spesifikasi situs saya"
```

atau

```
"Bantu saya membuat site brief"
```

## Proses Spesifikasi Situs

### Langkah 1: Tujuan Situs

Agen akan bertanya:

```
Apa tujuan utama situs Anda?
- Toko e-commerce
- Blog atau situs konten
- Portofolio atau etalase
- Aplikasi SaaS
- Komunitas atau forum
- Lainnya: [deskripsikan]
```

Anda dapat memilih kategori atau mendeskripsikan tujuan Anda sendiri.

### Langkah 2: Audiens Target

```
Siapa audiens utama Anda?
- Konsumen / masyarakat umum
- Profesional bisnis
- Pengembang / pengguna teknis
- Pelajar / pendidik
- Lainnya: [deskripsikan]

Apa kebutuhan utama mereka?
```

### Langkah 3: Identitas Merek

```
Apa warna merek Anda?
- Warna utama: [pemilih warna atau kode hex]
- Warna sekunder: [pemilih warna atau kode hex]
- Warna aksen: [opsional]

Bagaimana Anda mendeskripsikan nada merek Anda?
- Profesional / korporat
- Kreatif / artistik
- Ceria / kasual
- Minimalis / modern
- Hangat / ramah
```

### Langkah 4: Tujuan Bisnis

```
Seperti apa kesuksesan bagi situs Anda?
- Menghasilkan prospek (leads)
- Menjual produk
- Membangun komunitas
- Berbagi pengetahuan
- Membangun otoritas
- Lainnya: [deskripsikan]

Apa metrik utama Anda?
- Pendapatan (Revenue)
- Keterlibatan pengguna (User engagement)
- Jangkauan konten (Content reach)
- Konversi (Conversions)
- Lainnya
```

### Langkah 5: Struktur Konten

```
Bagaimana konten Anda diorganisasi?
- Datar (semua konten pada tingkat yang sama)
- Hierarkis (kategori dan subkategori)
- Kronologis (gaya blog)
- Berbasis produk (katalog)
- Lainnya: [deskripsikan]

Jenis konten apa yang Anda gunakan?
- Postingan blog
- Halaman produk
- Studi kasus
- Dokumentasi
- Video
- Lainnya
```

## Memori site_brief Anda

Setelah menyelesaikan Spesifikasi Situs, informasi Anda disimpan sebagai **site_brief** di memori agen Anda. Ini adalah catatan terstruktur yang berisi:

```json
{
  "site_purpose": "Toko e-commerce perhiasan buatan tangan",
  "target_audience": "Wanita usia 25-45 tahun, tertarik pada fashion berkelanjutan",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Hangat, artisanal, berkelanjutan",
  "business_goals": ["Menghasilkan penjualan", "Membangun loyalitas merek"],
  "primary_metric": "Pendapatan",
  "content_structure": "Katalog produk dengan blog",
  "content_types": ["Halaman produk", "Postingan blog", "Kisah pelanggan"]
}
```

## Melihat dan Memperbarui site_brief Anda

### Melihat site_brief Anda

Tanyakan kepada agen:

```
"Tunjukkan site brief saya"
```

atau

```
"Apa yang Anda ketahui tentang situs saya?"
```

Agen akan menampilkan spesifikasi yang tersimpan.

### Memperbarui site_brief Anda

Jika situs Anda berkembang, Anda dapat memperbaruinya:

```
"Perbarui site brief saya: kami sekarang menargetkan pelanggan B2B"
```

atau

```
"Segarkan spesifikasi situs saya"
```

Ini akan menjalankan kembali keahlian Spesifikasi Situs dengan informasi Anda yang sudah ada sebagai titik awal.

## Cara Agen Menggunakan site_brief

### Rekomendasi Desain

Ketika Anda meminta perubahan desain, agen merujuk site_brief Anda:

```
Anda: "Desain ulang halaman beranda saya"
Agen: "Berdasarkan site brief Anda, Anda menargetkan wanita usia 25-45 tahun
dengan nada hangat dan artisanal. Saya akan membuat desain yang menekankan
perhiasan buatan tangan dan nilai-nilai berkelanjutan Anda."
```

### Saran Fitur

Agen menyarankan fitur yang selaras dengan tujuan Anda:

```
Anda: "Fitur apa yang harus saya tambahkan?"
Agen: "Untuk toko e-commerce yang berfokus pada loyalitas pelanggan,
saya sarankan: program loyalitas, ulasan pelanggan, buletin email,
dan rekomendasi produk."
```

### Struktur Konten

Agen mengusulkan organisasi konten berdasarkan struktur Anda:

```
Anda: "Bagaimana saya harus mengatur blog saya?"
Agen: "Karena Anda menggunakan katalog produk dengan blog, saya sarankan
mengatur postingan berdasarkan kategori produk dan membuat 'panduan gaya'
yang menampilkan beberapa produk sekaligus."
```

## Praktik Terbaik

### Bersikap Spesifik

Daripada "audiens umum," deskripsikan audiens Anda yang sebenarnya:

- ✓ "Wanita usia 25-45 tahun, tertarik pada fashion berkelanjutan"
- ✗ "Semua orang"

### Perbarui Secara Teratur

Seiring perkembangan situs Anda, perbarui site_brief Anda:

- Ketika Anda beralih ke audiens baru
- Ketika Anda menambahkan lini produk baru
- Ketika identitas merek Anda berubah
- Ketika tujuan bisnis Anda bergeser

### Gunakan Terminologi yang Konsisten

Gunakan istilah yang sama di berbagai sesi:

- ✓ Selalu katakan "perhiasan berkelanjutan" (bukan "perhiasan ramah lingkungan" dan "produk hijau")
- ✓ Selalu merujuk audiens Anda dengan cara yang sama

### Sertakan Konteks

Berikan latar belakang yang membantu agen memahami keputusan Anda:

- "Kami menargetkan profesional yang menghargai kualitas di atas harga"
- "Audiens kami melek teknologi dan mengharapkan desain modern"
- "Kami adalah startup yang didanai sendiri, jadi kami membutuhkan solusi yang hemat biaya"

## Hubungan dengan Orientasi Theme Builder

Keahlian Spesifikasi Situs terintegrasi ke dalam alur orientasi Theme Builder. Ketika Anda menyelesaikan orientasi, site_brief Anda secara otomatis dibuat dengan informasi yang Anda berikan.

Anda juga dapat menjalankan Spesifikasi Situs secara mandiri jika Anda ingin:

- Menyempurnakan spesifikasi Anda setelah pengaturan awal
- Memperbarui site brief saat situs Anda berkembang
- Membuat spesifikasi terperinci sebelum memulai Theme Builder

## Pemecahan Masalah

**site_brief saya tidak digunakan**
- Pastikan agen memiliki akses ke memori
- Minta agen untuk "mengingat site brief saya"
- Periksa bahwa memori telah diaktifkan di pengaturan Anda

**Saya ingin memulai dari awal dengan site_brief baru**
- Minta agen: "Hapus site brief saya dan mulai dari awal"
- Kemudian jalankan Spesifikasi Situs lagi

**Agen membuat rekomendasi yang tidak sesuai dengan site_brief saya**
- Minta agen untuk "meninjau site brief saya"
- Perbarui site_brief Anda jika sudah usang
- Berikan konteks tambahan dalam permintaan Anda

## Langkah Selanjutnya

Setelah mendefinisikan spesifikasi situs Anda:

1. **Gunakan Theme Builder**: Buat tema kustom berdasarkan site_brief Anda
2. **Sempurnakan Desain**: Gunakan keahlian Design System Aesthetics untuk pekerjaan desain terperinci
3. **Rencanakan Konten**: Minta agen rekomendasi struktur konten
4. **Bangun Fitur**: Minta fitur yang selaras dengan tujuan bisnis Anda
