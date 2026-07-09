---
title: 'Pelajaran 6: Pengalaman Pendaftaran'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Pelajaran 6: Pengalaman Pendaftaran {#lesson-6-the-signup-experience}

Proses pembayaran adalah titik di mana minat bertukar menjadi pendapatan. Proses pendaftaran yang mengelirukan atau terlalu umum akan menyebabkan kehilangan pelanggan. Alur yang khusus untuk niche tertentu, yang menggunakan bahasa mereka dan terasa mudah, akan meningkatkan kadar penukaran mereka.

## Di Mana Kita Berhenti {#where-we-left-off}

FitSite sudah mempunyai templat dan pelan yang dikonfigurasi. Kini, kita akan membina pengalaman pendaftaran dan pembayaran yang akan mengubah pemilik studio kecergasan menjadi pelanggan berbayar.

## Memahami Alur Pendaftaran {#understanding-the-registration-flow}

Borang pembayaran Ultimate Multisite adalah borang multi-langkah yang boleh disesuaikan sepenuhnya. Untuk FitSite, kita mahukan alur yang:

1. Terasa seperti dibina khas untuk perniagaan kecergasan
2. Hanya mengumpul maklumat yang diperlukan
3. Membawa pelanggan ke laman web yang berfungsi secepat mungkin

Lihat [Alur Pendaftaran](/user-guide/configuration/the-registration-flow) untuk rujukan teknikal penuh.

## Mereka Bentuk Pembayaran FitSite {#designing-the-fitsite-checkout}

Navigasi ke **Ultimate Multisite > Checkout Forms** dan cipta borang baharu.

### Langkah 1: Pemilihan Pelan {#step-1-plan-selection}

Perkara pertama yang dilihat oleh pemilik studio kecergasan mestilah pelan-pelan tersebut, yang dipersembahkan dalam istilah yang mereka fahami.

- Tambah medan **Pricing Table**
- Konfigurasikan ia untuk memaparkan ketiga-tiga pelan FitSite
- Penerangan pelan yang anda tulis dalam Pelajaran 5 akan muncul di sini -- pastikan ia merujuk kepada keperluan perniagaan kecergasan, bukan ciri teknikal

:::tip Bahasa Niche Itu Penting
"Storan 1 GB" tidak bermakna apa-apa kepada pemilik gim. "Semua yang anda perlukan untuk laman web studio profesional" bermakna segalanya. Tulis penerangan pelan dalam bahasa pelanggan anda.
:::

### Langkah 2: Pemilihan Templat {#step-2-template-selection}

Selepas memilih pelan, pelanggan akan memilih templat permulaan mereka.

- Tambah medan **Template Selection**
- Templat yang tersedia akan ditapis mengikut pelan yang mereka pilih (dikonfigurasi dalam Pelajaran 5)
- Setiap templat harus mempunyai imej pratonton yang menunjukkan reka bentuk khusus kecergasan

### Langkah 3: Penciptaan Akaun {#step-3-account-creation}

Pastikan ini ringkas. Hanya kumpul:

- Alamat e-mel
- Kata laluan
- Nama studio/perniagaan (ini akan menjadi nama laman web mereka)

Jangan minta maklumat yang anda tidak perlukan semasa pendaftaran. Setiap medan tambahan akan mengurangkan kadar penukaran.

### Langkah 4: Persediaan Laman Web {#step-4-site-setup}

- **Site title**: Isi secara automatik daripada nama studio yang dimasukkan dalam Langkah 3
- **Site URL**: Jana secara automatik daripada nama studio (cth., `ironworks.fitsite.com`)

### Langkah 5: Pembayaran {#step-5-payment}

- Tambah medan **Payment**
- Konfigurasikan *payment gateway* anda ([Stripe](/user-guide/payment-gateways/stripe) disyorkan untuk bil langganan)
- Jika anda mencipta *order bumps* dalam Pelajaran 5, tambahkan medan **Order Bump** sebelum langkah pembayaran

### Langkah 6: Pengesahan {#step-6-confirmation}

- Sesuaikan mesej pengesahan dengan bahasa khusus kecergasan
- Contoh: "Laman web studio kecergasan anda sedang dicipta. Anda akan dialihkan ke laman web baharu anda dalam beberapa saat."

## Menambah Toggle Pemilihan Tempoh {#adding-a-period-selection-toggle}

Jika anda menetapkan variasi harga dalam pelan anda (bulanan vs. tahunan), tambahkan medan **Period Selection** pada borang pembayaran supaya pelanggan boleh menukar antara tempoh bil. Lihat [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) untuk arahan.

## Mengkonfigurasi Pembayaran {#configuring-payment}

Jika anda belum menetapkan *payment gateway*:

1. Navigasi ke **Ultimate Multisite > Settings > Payment Gateways**
2. Ikuti [panduan persediaan Stripe](/user-guide/payment-gateways/stripe) atau *gateway* pilihan anda
3. Uji alur pembayaran lengkap dengan pembayaran ujian

Lihat [Getting Paid](/user-guide/payment-gateways/getting-paid) untuk butiran tentang bagaimana pembayaran masuk ke akaun anda.

## Menguji Alur {#testing-the-flow}

Sebelum meneruskan, lengkapkan ujian pendaftaran penuh:

1. Buka borang pembayaran dalam tetingkap pelayar sulit/peribadi
2. Pilih pelan
3. Pilih templat
4. Cipta akaun
5. Lengkapkan pembayaran (gunakan mod ujian)
6. Sahkan laman web dicipta dengan templat yang betul

Periksa sama ada:

- [ ] Penerangan pelan jelas dan khusus niche
- [ ] Pratonton templat menunjukkan reka bentuk yang sesuai untuk kecergasan
- [ ] URL laman web dijana dengan betul daripada nama studio
- [ ] Pembayaran diproses dengan jayanya
- [ ] Pelanggan mendarat di laman web yang berfungsi dengan templat yang dipilih
- [ ] E-mel pengesahan menggunakan bahasa khusus kecergasan

## Rangkaian FitSite Setakat Ini {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (dikonfigurasi)
├── Hosting dengan wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Pemilihan pelan dengan penerangan khusus niche
│   ├── Pemilihan templat dengan pratonton kecergasan
│   ├── Penciptaan akaun minimum
│   ├── Pembayaran melalui Stripe
│   └── Pengesahan khusus kecergasan
└── Sedia untuk penjenamaan (pelajaran seterusnya)
```

## Apa Yang Kita Bina Dalam Pelajaran Ini {#what-we-built-this-lesson}

- **Borang pembayaran multi-langkah** yang disesuaikan untuk pemilik studio kecergasan
- **Bahasa khusus niche** di seluruh alur pendaftaran
- **Geseran minimum** -- hanya medan penting, laluan pantas ke laman web yang berfungsi
- **Integrasi pembayaran** dengan pengesahan ujian
- **Alur hujung-ke-hujung yang diuji** dari pemilihan pelan ke laman web yang berfungsi

---

**Seterusnya:** [Pelajaran 7: Menjadikannya Milik Anda](lesson-7-branding) -- kita akan *white-label* platform dan menetapkan FitSite sebagai jenama.
