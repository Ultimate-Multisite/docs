---
title: Mengelola Pembayaran dan Faktur
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Mengelola Pembayaran dan Faktur {#managing-payments-and-invoices}

## Pengaturan Pembayaran {#payment-settings}

Sebelum Anda mulai menerima pembayaran, Anda perlu mengonfigurasi pengaturan terkait pembayaran. Buka **Ultimate Multisite → Settings** dan klik tab **Payment**.

![Tab pengaturan pembayaran](/img/admin/settings-payments-top.png)

Berikut tampilan lengkap halaman pengaturan pembayaran:

![Halaman lengkap pengaturan pembayaran](/img/admin/settings-payments-full.png)

### Opsi Pembayaran Umum {#general-payment-options}

Dalam pengaturan umum Anda dapat mengonfigurasi:

- **Mata Uang** — Mata uang default yang digunakan untuk transaksi
- **Posisi Mata Uang** — Tempat simbol mata uang muncul (sebelum/sesudah jumlah)

![Pengaturan gateway pembayaran](/img/admin/settings-payments-options.png)

### Gateway Pembayaran {#payment-gateways}

Ultimate Multisite mendukung beberapa gateway pembayaran. Anda dapat mengaktifkan dan mengonfigurasi masing-masing dari tab pengaturan Payment.

![Konfigurasi gateway pembayaran](/img/admin/settings-payments-gateways.png)

Gateway yang tersedia meliputi:

- **Stripe** — Pembayaran kartu kredit melalui Stripe
- **PayPal** — Pembayaran PayPal
- **Manual** — Untuk pemrosesan pembayaran offline atau khusus

Setiap gateway memiliki bagian konfigurasinya sendiri tempat Anda memasukkan API key dan pengaturan lainnya.

![Pengaturan gateway tambahan](/img/admin/settings-payments-gateways-2.png)

### Mode Sandbox {#sandbox-mode}

Anda dapat mengaktifkan **Mode Sandbox** untuk menguji integrasi pembayaran Anda sebelum ditayangkan. Saat mode sandbox aktif, tidak ada tagihan nyata yang akan dibuat.

## Melihat Pembayaran {#viewing-payments}

Buka halaman **Payments** di bawah Ultimate Multisite untuk melihat semua transaksi di seluruh jaringan Anda.

![Daftar pembayaran](/img/admin/payments-list.png)

Anda dapat memfilter pembayaran berdasarkan status (selesai, tertunda, gagal, dikembalikan dana) dan mencari transaksi tertentu.

Klik pembayaran untuk melihat detail lengkapnya termasuk item baris, membership terkait, informasi pelanggan, dan data gateway pembayaran.

## Faktur {#invoices}

Ultimate Multisite dapat secara otomatis membuat faktur untuk pembayaran. Anda dapat menyesuaikan template faktur dan format penomoran dari pengaturan Payment.

Opsi penyesuaian faktur meliputi:

- **Nama dan alamat perusahaan** yang ditampilkan pada faktur
- **Penomoran faktur** format dan urutan
- **Logo** yang ditampilkan pada header faktur
- **Teks footer khusus** untuk ketentuan, catatan, atau informasi hukum

Untuk menyesuaikan template faktur, buka **Ultimate Multisite → Settings → Payment** dan cari pengaturan terkait faktur.
