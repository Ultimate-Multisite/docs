---
title: 'Pelajaran 7: Menjadikannya Milikmu'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Pelajaran 7: Menjadikannya Milik Anda {#lesson-7-making-it-yours}

Pelanggan Anda tidak boleh merasa seperti mereka menggunakan "plugin WordPress sembarangan." Mereka harus merasa seperti menggunakan FitSite—sebuah platform yang dibangun khusus untuk industri mereka. Pelajaran ini akan membahas *branding*, *white-labeling*, dan cara membuat platform ini terasa seperti produk yang utuh.

## Di Mana Kita Berhenti {#where-we-left-off}

FitSite sudah memiliki alur *checkout* yang berfungsi, yang membawa pemilik studio kebugaran dari pemilihan paket hingga situs yang aktif. Sekarang, kita akan membuat seluruh pengalaman ini terasa seperti produk yang kohesif dan ber-*branding*.

## Domain Platform Anda {#your-platform-domain}

Fondasi dari *brand* Anda adalah domain Anda. Untuk FitSite:

- **Domain utama**: `fitsite.com` (situs pemasaran dan akar jaringan Anda)
- **Situs pelanggan**: `namastudio.fitsite.com` (subdomain)
- **Domain kustom**: Pelanggan dengan paket Growth dan Pro dapat memetakan domain mereka sendiri

### Mengatur Domain Anda {#setting-up-your-domain}

1. Daftarkan domain platform Anda
2. Arahkan domain tersebut ke penyedia *hosting* Anda
3. Konfigurasi DNS *wildcard* (`*.fitsite.com`) untuk subdomain pelanggan
4. Pastikan SSL *wildcard* aktif

Lihat [Cara Mengonfigurasi Pemetaan Domain](/user-guide/domain-mapping/how-to-configure-domain-mapping) untuk petunjuk terperinci.

## *White-Labeling* Pengalaman Admin {#white-labeling-the-admin-experience}

Ketika pemilik studio kebugaran masuk ke *dashboard* situs mereka, mereka harus melihat *brand* Anda, bukan *branding* WordPress atau Ultimate Multisite.

### Halaman Login Kustom {#custom-login-page}

Kustomisasi halaman login WordPress untuk menampilkan:

- Logo FitSite Anda
- Gambar latar belakang yang sesuai untuk kebugaran
- Warna *brand* Anda

### *Branding* Dashboard {#dashboard-branding}

Gunakan *addon* [Admin Page Creator](/addons/admin-page-creator) atau CSS kustom untuk:

- Mengganti logo WordPress dengan logo FitSite Anda
- Menyesuaikan skema warna admin agar sesuai dengan *brand* Anda
- Menambahkan *widget* *dashboard* kustom dengan tautan cepat dan sumber daya bantuan spesifik kebugaran

### Halaman Admin Kustom {#custom-admin-pages}

Pertimbangkan untuk membuat halaman admin kustom yang menampilkan tindakan yang paling relevan bagi pemilik studio kebugaran:

- "Edit Jadwal Kelas Anda"
- "Perbarui Profil Pelatih"
- "Lihat Situs Anda"

Ini mengurangi kurva belajar dengan menempatkan tindakan yang relevan dengan niche di bagian depan, alih-alih menyembunyikannya di menu standar WordPress.

## *Branding* Komunikasi Anda {#branding-your-communications}

Setiap email, faktur, dan notifikasi harus memperkuat *brand* Anda.

### Email Sistem {#system-emails}

Arahkan ke **Ultimate Multisite > Settings > Emails** dan kustomisasi semua email sistem:

- **Nama pengirim**: FitSite
- **Email pengirim**: hello@fitsite.com
- **Template email**: Gunakan warna dan logo *brand* Anda
- **Bahasa**: Spesifik kebugaran di seluruh bagian

Email penting yang perlu dikustomisasi:

| Email | Versi Umum | Versi FitSite |
|-------|----------------|-----------------|
| Selamat Datang | "Situs baru Anda sudah siap" | "Situs web studio kebugaran Anda sudah aktif" |
| Tanda Terima Pembayaran | "Pembayaran diterima" | "Pembayaran langganan FitSite dikonfirmasi" |
| Uji Coba Berakhir | "Uji coba Anda akan segera berakhir" | "Uji coba FitSite Anda berakhir dalam 3 hari—pertahankan situs web studio Anda tetap aktif" |

### Faktur {#invoices}

Kustomisasi template faktur dengan:

- Logo dan warna *brand* FitSite Anda
- Detail bisnis Anda
- Nama produk spesifik kebugaran (bukan ID paket umum)

## Situs yang Dilihat Pelanggan {#the-customer-facing-site}

Domain utama Anda (`fitsite.com`) memerlukan situs pemasaran yang menjual platform ini. Ini terpisah dari admin jaringan Ultimate Multisite—ini adalah wajah publik dari bisnis Anda.

Halaman-halaman penting:

- **Beranda**: Proposisi nilai yang jelas untuk bisnis kebugaran
- **Fitur**: Apa yang dilakukan FitSite, dalam istilah kebugaran
- **Harga**: Tiga paket Anda dengan perbandingan fitur spesifik niche
- **Contoh**: Menampilkan situs-situs yang dibangun di atas platform
- **Daftar**: Tautan ke formulir *checkout* Anda

:::tip Situs Pemasaran Anda Bisa Menjadi Situs Jaringan
Buat situs pemasaran Anda sebagai situs di dalam jaringan Anda sendiri. Ini memungkinkan Anda mengelolanya dari *dashboard* yang sama dan menunjukkan kemampuan platform Anda sendiri.
:::

## Domain Kustom untuk Pelanggan {#custom-domain-for-customers}

Untuk pelanggan dengan paket yang mencakup domain kustom, dokumentasikan prosesnya dengan jelas:

1. Pelanggan mendaftarkan atau mentransfer domain mereka ke registrar
2. Pelanggan memperbarui DNS untuk menunjuk ke platform Anda (sediakan catatan yang tepat)
3. Ultimate Multisite menangani pemetaan domain dan SSL

Buat artikel bantuan atau entri basis pengetahuan khusus untuk proses ini, ditulis untuk pemilik studio kebugaran yang tidak teknis.

## Jaringan FitSite Sejauh Ini {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (dikonfigurasi + ber-*brand*)
├── Domain Platform (fitsite.com + SSL wildcard)
├── Template Situs (Studio Essential, Gym Pro, Fitness Chain)
├── Produk (Starter, Growth, Pro + Order Bumps)
├── Alur Checkout (spesifik niche, sudah diuji)
├── Branding
│   ├── Halaman login kustom
│   ├── Dashboard admin ber-*brand*
│   ├── Email sistem spesifik niche
│   ├── Faktur ber-*brand*
│   └── Situs pemasaran di fitsite.com
└── Siap untuk alur *onboarding* (pelajaran berikutnya)
```

## Apa yang Kita Bangun di Pelajaran Ini {#what-we-built-this-lesson}

- **Domain platform dan DNS** dikonfigurasi untuk pengalaman ber-*brand*
- **Admin *white-label*** dengan *branding* FitSite di seluruh bagian
- **Komunikasi yang disesuaikan** — email, faktur, dan notifikasi semuanya ber-*brand*
- **Situs pemasaran** yang menjual FitSite kepada pemilik studio kebugaran
- **Dokumentasi domain kustom** untuk pelanggan yang menginginkan domain mereka sendiri

---

**Selanjutnya:** [Pelajaran 8: *Onboarding* Pelanggan](lesson-8-onboarding) — kita merancang pengalaman yang mengubah pendaftaran baru menjadi pelanggan yang aktif dan bahagia.
