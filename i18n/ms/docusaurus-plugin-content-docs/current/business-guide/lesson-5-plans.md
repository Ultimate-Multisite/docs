---
title: 'Pelajaran 5: Merancang Pelan Anda'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Pelajaran 5: Mereka Bentuk Pelan Anda

Tahap pelan anda bukan sekadar penetapan harga—ia adalah cerminan bagaimana pelanggan khusus anda benar-benar beroperasi. Dalam pelajaran ini, anda akan mereka bentuk tahap produk yang menepati keperluan sebenar perniagaan kecergasan pada peringkat yang berbeza.

## Di Mana Kita Berhenti {#where-we-left-off}

FitSite sudah mempunyai tiga templat sedia (Studio Essential, Gym Pro, Fitness Chain). Sekarang kita cipta pelan yang menentukan akses apa yang diterima pelanggan dan apa yang mereka bayar.

## Berfikir Mengikut Segmen Pelanggan {#thinking-in-customer-segments}

Kesilapan yang paling kerap dilakukan oleh kebanyakan orang ialah mereka bentuk pelan berdasarkan ciri teknikal (storan, lebar jalur, bilangan halaman). Pelanggan khusus anda tidak berfikir dalam istilah tersebut. Pemilik gim fikirkan apa yang mereka perlukan untuk mengendalikan perniagaan mereka.

Untuk studio kecergasan, tiga segmen semula jadi wujud:

| Segmen | Siapa Mereka | Apa Yang Mereka Perlukan |
|---------|-------------|----------------|
| **Jurulatih Solo / Studio Kecil** | 1-3 kakitangan, lokasi tunggal, baru bermula | Laman web profesional, info kelas, borang hubungan |
| **Gim Berkemuka** | 5-20 kakitangan, lokasi tunggal, sedang berkembang | Semua yang di atas ditambah tempahan, blog, galeri, domain tersuai |
| **Rantaian Kecergasan** | Pelbagai lokasi, jenama yang mantap | Semua yang di atas ditambah multi-site, halaman lokasi, direktori kakitangan |

Pelan anda harus dipetakan kepada segmen-segmen ini, bukan kepada pakej ciri yang rawak.

## Mencipta Pelan FitSite {#creating-the-fitsite-plans}

Navigasi ke **Ultimate Multisite > Products > Add Product** untuk setiap pelan.

### Pelan 1: FitSite Starter -- $49/bulan {#plan-1-fitsite-starter----49month}

**Sasaran**: Jurulatih solo dan studio kecil

**Tab Description**:
- Nama: FitSite Starter
- Penerangan: "Semua yang diperlukan oleh jurulatih peribadi atau studio kecil untuk kelihatan profesional secara dalam talian."

**Tab General**:
- Jenis produk: Plan
- Peranan pelanggan: Administrator

**Tab Site Templates**:
- Benarkan templat laman: Enabled
- Templat tersedia: Studio Essential sahaja

**Batasan (Limitations)**:
- Laman web: 1
- Ruang cakera: 1 GB
- Domain tersuai: Disabled (menggunakan `studioname.fitsite.com`)

**Tab Plugins**:
- Plugin borang hubungan: Force Activate
- Plugin SEO: Force Activate
- Plugin tempahan: Not Available (insentif peningkatan)

**Tab Themes**:
- Tema pilihan anda: Force Activate
- Semua tema lain: Hidden

### Pelan 2: FitSite Growth -- $99/bulan {#plan-2-fitsite-growth----99month}

**Sasaran**: Gim lokasi tunggal yang sudah mantap

**Tab Description**:
- Nama: FitSite Growth
- Penerangan: "Untuk gim yang sudah mantap dan bersedia mengembangkan kehadiran dalam talian serta menarik ahli baharu."

**Tab Site Templates**:
- Templat tersedia: Studio Essential dan Gym Pro

**Batasan (Limitations)**:
- Laman web: 1
- Ruang cakera: 5 GB
- Domain tersuai: Enabled

**Tab Plugins**:
- Semua dalam Starter, ditambah:
- Plugin tempahan: Force Activate
- Plugin galeri: Force Activate
- Fungsi blog: Available

**Tab Up & Downgrades**:
- Kumpulan pelan: FitSite Plans
- Susunan produk: 2

### Pelan 3: FitSite Pro -- $199/bulan {#plan-3-fitsite-pro----199month}

**Sasaran**: Rantaian kecergasan pelbagai lokasi

**Tab Description**:
- Nama: FitSite Pro
- Penerangan: "Platform lengkap untuk jenama kecergasan dengan pelbagai lokasi."

**Tab Site Templates**:
- Templat tersedia: Ketiga-tiga templat

**Batasan (Limitations)**:
- Laman web: 5 (satu untuk setiap lokasi)
- Ruang cakera: 20 GB
- Domain tersuai: Enabled

**Tab Plugins**:
- Semua dalam Growth, ditambah:
- Semua plugin premium: Force Activate

**Tab Up & Downgrades**:
- Kumpulan pelan: FitSite Plans
- Susunan produk: 3

## Menetapkan Kumpulan Pelan {#setting-up-the-plan-group}

Kumpulan pelan memastikan pelanggan hanya boleh menaik taraf atau menurunkan taraf dalam keluarga pelan FitSite. Pada **Tab Up & Downgrades** setiap pelan:

1. Tetapkan **Plan Group** kepada "FitSite Plans" untuk ketiga-tiga pelan
2. Tetapkan **Product Order** kepada 1 (Starter), 2 (Growth), 3 (Pro)

Ini mewujudkan laluan peningkatan yang jelas: Starter → Growth → Pro.

## Menambah Peningkatan Pesanan (Order Bumps) {#adding-order-bumps}

Peningkatan pesanan adalah produk tambahan yang ditawarkan semasa pembayaran. Untuk FitSite, pertimbangkan:

- **Pakej Storan Tambahan** ($19/bulan) -- tambahan 5 GB ruang cakera
- **Sokongan Keutamaan** ($29/bulan) -- masa respons yang lebih pantas
- **Laman Web Tambahan** ($39/bulan) -- untuk pelanggan yang memerlukan lebih banyak laman web daripada yang dibenarkan pelan mereka

Cipta ini sebagai produk jenis **Package** dalam Ultimate Multisite dan kaitkannya dengan pelan yang berkaitan.

## Mengapa Struktur Ini Berfungsi {#why-this-structure-works}

- **Starter** menghapuskan halangan kemasukan -- harga rendah, tawaran ringkas, membolehkan jurulatih online dengan pantas
- **Growth** menambah ciri yang sebenarnya diminta oleh gim -- tempahan, galeri, domain tersuai
- **Pro** melayani segmen bernilai tinggi yang memerlukan sokongan pelbagai lokasi
- **Peningkatan pesanan** membolehkan pelanggan menyesuaikan tanpa merumitkan pelan teras
- **Laluan peningkatan yang jelas** bermakna pelanggan berkembang bersama anda dan bukannya meninggalkan anda

## Rangkaian FitSite Setakat Ini {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Apa Yang Kita Bina Dalam Pelajaran Ini {#what-we-built-this-lesson}

- **Tiga tahap pelan** dipetakan kepada segmen perniagaan kecergasan sebenar
- **Pengawal ciri (Feature gating)** menggunakan kawalan plugin dan templat Ultimate Multisite
- **Kumpulan pelan** dengan laluan peningkatan yang jelas
- **Produk peningkatan pesanan** untuk pendapatan tambahan
- **Struktur harga** berdasarkan nilai pelanggan, bukan spesifikasi teknikal

---

**Seterusnya:** [Pelajaran 6: Pengalaman Pendaftaran](lesson-6-checkout) -- kita bina aliran pembayaran yang menukar pemilik studio kecergasan menjadi pelanggan berbayar.
