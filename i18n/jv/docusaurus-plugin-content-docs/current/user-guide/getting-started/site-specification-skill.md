---
title: Spesifikasi Situs Keterampilan
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Keterampilan Spesifikasi Situs

**Keterampilan Spesifikasi Situs (Site Specification skill)** iku cara terstruktur kanggo nangkep tujuan situsmu, audiensmu, lan identitas brand-mu. Informasi iki disimpen ing memori **site_brief**-mu, sing diacu dening agen saben sesi supaya bisa menehi bantuan sing konsisten lan ngerti konteks.

## Apa Iku Site Specification?

Site Specification iku proses nulis dokumen babagan:

- **Tujuan situs (Site purpose)**: Apa sing ditindakake situsmu lan kenapa situs kuwi ana
- **Audiens sasaran (Target audience)**: Sapa sing mampir nang situsmu lan apa sing dibutuhake dheweke
- **Identitas brand (Brand identity)**: Warna, nada (tone), lan gaya visualmu
- **Tujuan bisnis (Business goals)**: Kepiye wujud sukses kanggo situsmu
- **Struktur konten (Content structure)**: Kepiye cara situsmu diatur

Spesifikasi iki bakal dadi **site_brief**-mu, memori sing tetep ana sing digunakake agen kanggo ngerti konteks situsmu.

## Kenapa Nganggo Site Specification?

### Konsisten Antar Sesi

Tanpa site_brief, kowe kudu nerangake tujuan situsmu saben wiwitan sesi anyar. Kanthi duwe site_brief, agen langsung ngerti:

- Tujuan lan audiens situsmu
- Warna lan nada brand-mu
- Struktur kontenmu
- Tujuan bisnis-mu

### Rekomendasi sing Luwih Apik

Agen nggunakake site_brief-mu kanggo:

- Ngusul fitur sing sejalan karo tujuan situsmu
- Ngeneni struktur konten sing cocog karo tujuanmu
- Nguwuh desain sing konsisten karo brand-mu
- Ngindari ngusul fitur sing ora cocok

### Onboarding Luwih Cepet

Agen anyar (utawa agen ing sesi anyar) bisa cepet mangerti kanthi maca site_brief-mu tinimbang nanya pitakon panjelas.

## Nggawiti Site Specification

### Nalika Onboarding Theme Builder

Keterampilan Site Specification otomatis diwiwiti nalika **alur onboarding Theme Builder**. Agen Setup Assistant bakal nanyani pitakon lan mbangun site_brief-mu.

### Inisiasi Manual

Sampe Spesifikasi Situs bisa dimulai kapan saja:

```
"Ayo kita tentukan spesifikasi situs saya"
```

atau

```
"Bantu saya membuat ringkasan situs (site brief)"
```

## Proses Spesifikasi Situs

### Langkah 1: Tujuan Situs

Agen akan bertanya:

```
Apa tujuan utama situs Anda?
- Toko e-commerce
- Blog atau situs konten
- Portofolio atau pajangan karya
- Aplikasi SaaS
- Komunitas atau forum
- Lainnya: [jelaskan]
```

Anda bisa memilih kategori atau jelaskan tujuan Anda sendiri.

### Langkah 2: Target Audiens

```
Siapa audiens utama Anda?
- Konsumen / masyarakat umum
- Profesional bisnis
- Developer / pengguna teknis
- Pelajar / pendidik
- Lainnya: [jelaskan]

Apa kebutuhan utama mereka?
```

### Langkah 3: Identitas Merek (Brand Identity)

```
Apa warna merek Anda?
- Warna utama: [pemilih warna atau kode hex]
- Warna sekunder: [pemilih warna atau kode hex]
- Warna aksen: [opsional]

Bagaimana Anda mendeskripsikan nada merek Anda?
- Profesional / korporat
- Kreatif / artistik
- Santai / kasual
- Minimal / modern
- Hangat / ramah
```

### Langkah 4: Tujuan Bisnis (Business Goals)

```
Seperti apa kesuksesan bagi situs Anda?
- Menghasilkan prospek (leads)
- Menjual produk
- Membangun komunitas
- Berbagi ilmu/pengetahuan
- Membangun otoritas
- Lainnya: [jelaskan]

Apa metrik utama Anda?
- Pendapatan (Revenue)
- Keterlibatan pengguna (User engagement)
- Jangkauan konten (Content reach)
- Konversi (Conversions)
- Lainnya
```

### Langkah 5: Struktur Konten

```
Bagaimana konten Anda diorganisir?
- Datar (semua konten di level yang sama)
- Hierarkis (kategori dan subkategori)
- Kronologis (gaya blog)
- Berbasis produk (katalog)
- Lainnya: [jelaskan]

Jenis konten apa yang Anda gunakan?
- Postingan blog
- Halaman produk
- Studi kasus (Case studies)
- Dokumentasi
- Video
- Lainnya
```

## Memori site_brief Anda

Setelah menyelesaikan Spesifikasi Situs, informasi Anda akan disimpan sebagai **site_brief** di memori agen Anda. Ini adalah catatan terstruktur yang berisi:

## Melihat dan Memperbarui site_brief Anda

### Lihat site_brief Anda

Tanya agen ini:

```
"Tunjukkan saya site brief saya"
```

atau

```
"Apa yang kamu tahu tentang situs saya?"
```

Agen akan menampilkan spesifikasi yang sudah disimpan.

### Perbarui site_brief Anda

Kalau situs kamu berkembang, kamu bisa memperbaruinya:

```
"Perbarui site brief saya: sekarang kita menargetkan pelanggan B2B"
```

atau

```
"Segarkan spesifikasi situs saya"
```

Ini akan menjalankan kembali skill Site Specification dengan informasi yang sudah ada sebagai titik awal.

## Bagaimana Agen Menggunakan site_brief

### Rekomendasi Desain

Saat kamu minta perubahan desain, agen akan merujuk ke site_brief kamu:

```
Kamu: "Rancang ulang halaman utama saya"
Agen: "Berdasarkan site brief Anda, Anda menargetkan wanita usia 25-45 tahun dengan nada yang hangat dan artisanal. Saya akan membuat desain yang menekankan perhiasan buatan tangan dan nilai keberlanjutan Anda."
```

### Saran Fitur

Agen akan menyarankan fitur yang sesuai dengan tujuan kamu:

```
Kamu: "Fitur apa yang harus saya tambahkan?"
Agen: "Untuk toko e-commerce yang fokus pada loyalitas pelanggan, saya sarankan: program loyalitas, ulasan pelanggan, buletin email, dan rekomendasi produk."
```

### Struktur Konten

Agen akan mengusulkan pengaturan konten berdasarkan struktur kamu:

Anda: "Gimana ya cara saya ngatur blog saya?"
Agen: "Karena Anda pakai product catalog dengan blog, saya sarankan untuk mengelompokkan postingan berdasarkan kategori produk dan membuat 'panduan gaya' yang menampilkan beberapa produk sekaligus."

## Praktik Terbaik (Best Practices)

### Jadi Spesifik

Daripada bilang "audiens umum", jelaskan audiens Anda yang sebenarnya:

- ✓ "Wanita usia 25-45 tahun, tertarik pada fashion berkelanjutan"
- ✗ "Semua orang"

### Perbarui Secara Rutin

Seiring situs Anda berkembang, perbarui `site_brief` Anda:

- Saat Anda beralih ke audiens baru
- Saat Anda menambahkan lini produk baru
- Saat identitas merek Anda berubah
- Saat tujuan bisnis Anda bergeser

### Gunakan Istilah yang Konsisten

Gunakan istilah yang sama di semua sesi:

- ✓ Selalu sebut "perhiasan berkelanjutan" (bukan "perhiasan ramah lingkungan" dan "produk hijau")
- ✓ Selalu merujuk audiens Anda dengan cara yang sama

### Sertakan Konteks

Berikan latar belakang yang membantu agen memahami keputusan Anda:

- "Kita menargetkan profesional yang menghargai kualitas di atas harga"
- "Audiens kita melek teknologi dan mengharapkan desain modern"
- "Kita adalah startup yang modalnya terbatas, jadi kita butuh solusi yang hemat biaya"

## Hubungan dengan Onboarding Theme Builder

Skill Site Specification digabung ke dalam **alur onboarding Theme Builder**. Ketika Anda menyelesaikan onboarding, `site_brief` Anda akan otomatis dibuat dengan informasi yang sudah Anda berikan.

Anda juga bisa menjalankan Site Specification secara mandiri kalau Anda mau:

- Menyempurnakan spesifikasi Anda setelah pengaturan awal
- Memperbarui site brief Anda seiring situs Anda berkembang
- Membuat spesifikasi detail sebelum memulai Theme Builder

## Pemecahan Masalah (Troubleshooting)

**site_brief saya tidak terpakai**
- Pastikan agen punya akses ke memori (`memory`)
- Minta agen untuk "mengingat site brief saya" (`recall my site brief`)
- Cek apakah memori sudah diaktifkan di pengaturan Anda

**Aku mau mulai dari awal dengan site\_brief yang baru**
- Tanyakan ke agen: "Clear my site brief and start fresh" (Bersihkan site brief saya dan mulai dari awal)
- Lalu jalankan Site Specification lagi

**Agennya kasih rekomendasi yang nggak cocok sama site\_brief saya**
- Minta agen untuk "review my site brief" (tinjau site brief saya)
- Perbarui site\_brief kamu kalau sudah kedaluwarsa
- Beri konteks tambahan dalam permintaanmu

## Langkah Selanjutnya

Setelah kamu menentukan spesifikasi situsnya:

1. **Gunakan Theme Builder**: Buat tema kustom berdasarkan site\_brief kamu
2. **Perbaiki Desain**: Gunakan skill Design System Aesthetics untuk pekerjaan desain yang lebih detail
3. **Rencanakan Konten**: Minta rekomendasi struktur konten dari agen-agen lain
4. **Bangun Fitur**: Minta fitur yang sesuai dengan tujuan bisnis kamu
