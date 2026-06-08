---
title: 'Pelajaran 5: Merancang Rencana Anda'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Pelajaran 5: Merancang Paket Anda

Tingkatan paket Anda bukan hanya sekadar level harga—tetapi cerminan bagaimana pelanggan spesifik Anda benar-benar beroperasi. Dalam pelajaran ini, Anda akan merancang tingkatan produk yang sesuai dengan kebutuhan nyata bisnis kebugaran di berbagai tahap.

## Di Mana Kita Berhenti

FitSite sudah memiliki tiga template siap pakai (Studio Essential, Gym Pro, Fitness Chain). Sekarang kita akan membuat paket yang menentukan apa yang dapat diakses pelanggan dan berapa yang harus mereka bayar.

## Berpikir dalam Segmen Pelanggan

Kesalahan yang paling sering dilakukan orang adalah merancang paket berdasarkan fitur teknis (penyimpanan, bandwidth, jumlah halaman). Pelanggan spesifik Anda tidak berpikir dengan istilah-istilah tersebut. Pemilik gym berpikir tentang apa yang mereka butuhkan untuk menjalankan bisnis mereka.

Untuk studio kebugaran, ada tiga segmen alami:

| Segmen | Siapa Mereka | Apa yang Mereka Butuhkan |
|---------|-------------|----------------|
| **Pelatih Solo / Studio Kecil** | 1-3 staf, satu lokasi, baru memulai | Situs profesional, info kelas, formulir kontak |
| **Gym Mapan** | 5-20 staf, satu lokasi, sedang berkembang | Semua yang di atas ditambah pemesanan, blog, galeri, domain kustom |
| **Rantai Kebugaran** | Banyak lokasi, merek sudah mapan | Semua yang di atas ditambah multi-site, halaman lokasi, direktori staf |

Paket Anda harus dipetakan ke segmen-segmen ini, bukan ke kumpulan fitur yang sembarangan.

## Membuat Paket FitSite

Arahkan ke **Ultimate Multisite > Products > Add Product** untuk setiap paket.

### Paket 1: FitSite Starter -- $49/bulan

**Target**: Pelatih solo dan studio kecil

**Tab Deskripsi**:
- Nama: FitSite Starter
- Deskripsi: "Semua yang dibutuhkan pelatih pribadi atau studio kecil agar terlihat profesional secara online."

**Tab Umum**:
- Tipe produk: Plan
- Peran pelanggan: Administrator

**Tab Template Situs**:
- Izinkan template situs: Enabled
- Template yang tersedia: Studio Essential saja

**Batasan**:
- Situs: 1
- Ruang disk: 1 GB
- Domain kustom: Disabled (menggunakan `studioname.fitsite.com`)

**Tab Plugin**:
- Plugin formulir kontak: Force Activate
- Plugin SEO: Force Activate
- Plugin pemesanan: Not Available (insentif peningkatan)

**Tab Tema**:
- Tema pilihan Anda: Force Activate
- Semua tema lainnya: Hidden

### Paket 2: FitSite Growth -- $99/bulan

**Target**: Gym satu lokasi yang sudah mapan

**Tab Deskripsi**:
- Nama: FitSite Growth
- Deskripsi: "Untuk gym mapan yang siap mengembangkan kehadiran online dan menarik anggota baru."

**Tab Template Situs**:
- Template yang tersedia: Studio Essential dan Gym Pro

**Batasan**:
- Situs: 1
- Ruang disk: 5 GB
- Domain kustom: Enabled

**Tab Plugin**:
- Semua yang ada di Starter, ditambah:
- Plugin pemesanan: Force Activate
- Plugin galeri: Force Activate
- Fungsionalitas blog: Available

**Tab Peningkatan & Penurunan (Up & Downgrades)**:
- Grup paket: FitSite Plans
- Urutan produk: 2

### Paket 3: FitSite Pro -- $199/bulan

**Target**: Rantai kebugaran multi-lokasi

**Tab Deskripsi**:
- Nama: FitSite Pro
- Deskripsi: "Platform lengkap untuk merek kebugaran dengan banyak lokasi."

**Tab Template Situs**:
- Template yang tersedia: Ketiga template

**Batasan**:
- Situs: 5 (satu per lokasi)
- Ruang disk: 20 GB
- Domain kustom: Enabled

**Tab Plugin**:
- Semua yang ada di Growth, ditambah:
- Semua plugin premium: Force Activate

**Tab Peningkatan & Penurunan (Up & Downgrades)**:
- Grup paket: FitSite Plans
- Urutan produk: 3

## Mengatur Grup Paket

Grup paket memastikan pelanggan hanya dapat meningkatkan atau menurunkan paket dalam keluarga paket FitSite. Di tab **Peningkatan & Penurunan (Up & Downgrades)** setiap paket:

1. Atur **Grup paket (Plan Group)** ke "FitSite Plans" untuk ketiga paket
2. Atur **Urutan produk (Product Order)** ke 1 (Starter), 2 (Growth), 3 (Pro)

Ini menciptakan jalur peningkatan yang jelas: Starter → Growth → Pro.

## Menambahkan Order Bumps

Order bumps adalah produk tambahan yang ditawarkan saat checkout. Untuk FitSite, pertimbangkan:

- **Paket Penyimpanan Ekstra** ($19/bulan) -- tambahan 5 GB ruang disk
- **Dukungan Prioritas** ($29/bulan) -- waktu respons yang lebih cepat
- **Situs Tambahan** ($39/bulan) -- untuk pelanggan yang membutuhkan lebih banyak situs daripada yang diizinkan paket mereka

Buat ini sebagai produk tipe **Package** di Ultimate Multisite dan kaitkan dengan paket yang relevan.

## Mengapa Struktur Ini Berhasil

- **Starter** menghilangkan hambatan masuk — harga rendah, penawaran sederhana, membuat pelatih online dengan cepat
- **Growth** menambahkan fitur yang benar-benar diminta oleh gym — pemesanan, galeri, domain kustom
- **Pro** melayani segmen bernilai tinggi yang membutuhkan dukungan multi-lokasi
- **Order bumps** memungkinkan pelanggan menyesuaikan tanpa memperumit paket inti
- **Jalur peningkatan yang jelas** berarti pelanggan tumbuh bersama Anda alih-alih pergi

## Jaringan FitSite Sejauh Ini

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (dikonfigurasi)
├── Hosting dengan wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → template Studio Essential
│   ├── FitSite Growth ($99/mo) → template Studio Essential + Gym Pro
│   ├── FitSite Pro ($199/mo) → Semua template
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Siap untuk konfigurasi checkout (pelajaran berikutnya)
```

## Apa yang Kita Bangun di Pelajaran Ini

- **Tiga tingkatan paket** yang dipetakan ke segmen bisnis kebugaran nyata
- **Pembatasan fitur (Feature gating)** menggunakan kontrol plugin dan template Ultimate Multisite
- **Grup paket** dengan jalur peningkatan yang jelas
- **Produk order bump** untuk pendapatan tambahan
- **Struktur harga** berdasarkan nilai pelanggan, bukan spesifikasi teknis

---

**Selanjutnya:** [Pelajaran 6: Pengalaman Pendaftaran](lesson-6-checkout) -- kita akan membangun alur checkout yang mengubah pemilik studio kebugaran menjadi pelanggan berbayar.
