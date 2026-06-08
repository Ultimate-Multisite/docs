---
title: 'Pelajaran 6: Pengalaman Pendaftaran'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Pelajaran 6: Pengalaman Pendaftaran

Alur checkout adalah tempat minat berubah menjadi pendapatan. Proses pendaftaran yang membingungkan atau terlalu umum akan membuat pelanggan kabur. Alur yang spesifik untuk ceruk pasar mereka, yang menggunakan bahasa mereka, dan terasa mudah digunakan akan mengubah mereka menjadi pelanggan yang membayar.

## Di Mana Kita Berhenti

FitSite sudah memiliki template dan rencana yang dikonfigurasi. Sekarang kita akan membangun pengalaman pendaftaran dan checkout yang mengubah pemilik studio kebugaran menjadi pelanggan yang membayar.

## Memahami Alur Pendaftaran

Formulir checkout Ultimate Multisite adalah formulir multi-langkah yang sepenuhnya dapat disesuaikan. Untuk FitSite, kita menginginkan alur yang:

1. Terasa dibuat khusus untuk bisnis kebugaran
2. Hanya mengumpulkan informasi yang benar-benar dibutuhkan
3. Mengarahkan pelanggan ke situs yang berfungsi secepat mungkin

Lihat [The Registration Flow](/user-guide/configuration/the-registration-flow) untuk referensi teknis lengkap.

## Mendesain Checkout FitSite

Arahkan ke **Ultimate Multisite > Checkout Forms** dan buat formulir baru.

### Langkah 1: Pemilihan Rencana

Hal pertama yang harus dilihat pemilik studio kebugaran adalah rencana-rencana tersebut, disajikan dalam istilah yang mereka pahami.

- Tambahkan bidang **Pricing Table**
- Konfigurasikan untuk menampilkan ketiga rencana FitSite
- Deskripsi rencana yang Anda tulis di Pelajaran 5 akan muncul di sini — pastikan deskripsi tersebut berbicara tentang kebutuhan bisnis kebugaran, bukan fitur teknis

:::tip Bahasa Ceruk Pasar Itu Penting
"Penyimpanan 1 GB" tidak berarti apa-apa bagi pemilik gym. "Semua yang Anda butuhkan untuk situs web studio profesional" berarti segalanya. Tulis deskripsi rencana menggunakan bahasa pelanggan Anda.
:::

### Langkah 2: Pemilihan Template

Setelah memilih rencana, pelanggan akan memilih template awal mereka.

- Tambahkan bidang **Template Selection**
- Template yang tersedia akan difilter berdasarkan rencana yang mereka pilih (dikonfigurasi di Pelajaran 5)
- Setiap template harus memiliki gambar pratinjau yang menampilkan desain spesifik kebugaran

### Langkah 3: Pembuatan Akun

Jaga ini tetap minimal. Hanya kumpulkan:

- Alamat email
- Kata sandi
- Nama studio/bisnis (ini akan menjadi nama situs mereka)

Jangan meminta informasi yang tidak Anda butuhkan saat pendaftaran. Setiap bidang tambahan akan mengurangi konversi.

### Langkah 4: Pengaturan Situs

- **Site title**: Isi otomatis dari nama studio yang dimasukkan di Langkah 3
- **Site URL**: Dihasilkan otomatis dari nama studio (misalnya, `ironworks.fitsite.com`)

### Langkah 5: Pembayaran

- Tambahkan bidang **Payment**
- Konfigurasikan payment gateway Anda ([Stripe](/user-guide/payment-gateways/stripe) direkomendasikan untuk penagihan langganan)
- Jika Anda membuat *order bumps* di Pelajaran 5, tambahkan bidang **Order Bump** sebelum langkah pembayaran

### Langkah 6: Konfirmasi

- Sesuaikan pesan konfirmasi dengan bahasa spesifik kebugaran
- Contoh: "Situs web studio kebugaran Anda sedang dibuat. Anda akan diarahkan ke situs baru Anda dalam beberapa detik."

## Menambahkan Toggle Pemilihan Periode

Jika Anda mengatur variasi harga dalam rencana Anda (bulanan vs. tahunan), tambahkan bidang **Period Selection** ke formulir checkout agar pelanggan dapat beralih antara periode penagihan. Lihat [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) untuk petunjuknya.

## Mengonfigurasi Pembayaran

Jika Anda belum mengatur payment gateway:

1. Arahkan ke **Ultimate Multisite > Settings > Payment Gateways**
2. Ikuti [panduan pengaturan Stripe](/user-guide/payment-gateways/stripe) atau gateway pilihan Anda
3. Uji alur checkout lengkap dengan pembayaran uji coba

Lihat [Getting Paid](/user-guide/payment-gateways/getting-paid) untuk detail tentang bagaimana pembayaran masuk ke akun Anda.

## Menguji Alur

Sebelum melanjutkan, selesaikan uji pendaftaran penuh:

1. Buka formulir checkout di jendela browser incognito/pribadi
2. Pilih rencana
3. Pilih template
4. Buat akun
5. Selesaikan pembayaran (gunakan mode uji coba)
6. Verifikasi bahwa situs dibuat dengan template yang benar

Periksa bahwa:

- [ ] Deskripsi rencana jelas dan spesifik ceruk pasar
- [ ] Pratinjau template menampilkan desain yang sesuai untuk kebugaran
- [ ] URL situs dihasilkan dengan benar dari nama studio
- [ ] Pembayaran diproses dengan sukses
- [ ] Pelanggan mendarat di situs yang berfungsi dengan template yang dipilih
- [ ] Email konfirmasi menggunakan bahasa spesifik kebugaran

## Jaringan FitSite Sejauh Ini

```
FitSite Network
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (dikonfigurasi)
├── Hosting dengan wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Pemilihan rencana dengan deskripsi spesifik ceruk pasar
│   ├── Pemilihan template dengan pratinjau kebugaran
│   ├── Pembuatan akun minimal
│   ├── Pembayaran via Stripe
│   └── Konfirmasi spesifik kebugaran
└── Siap untuk branding (pelajaran berikutnya)
```

## Apa yang Kita Bangun di Pelajaran Ini

- **Formulir checkout multi-langkah** yang disesuaikan untuk pemilik studio kebugaran
- **Bahasa spesifik ceruk pasar** di seluruh alur pendaftaran
- **Gesekan minimal** — hanya bidang penting, jalur cepat menuju situs yang berfungsi
- **Integrasi pembayaran** dengan verifikasi uji coba
- **Alur ujung-ke-ujung yang teruji** mulai dari pemilihan rencana hingga situs yang berfungsi

---

**Selanjutnya:** [Lesson 7: Making It Yours](lesson-7-branding) — kita akan melakukan *white-label* platform dan menjadikan FitSite sebagai merek.
