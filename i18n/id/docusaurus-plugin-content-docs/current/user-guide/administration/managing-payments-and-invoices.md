---
title: Mengelola Pembayaran dan Faktur
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Mengelola Pembayaran dan Invoice

## Pengaturan Pembayaran

Sebelum mulai menerima pembayaran, Anda perlu mengatur pengaturan terkait pembayaran. Buka **Ultimate Multisite → Settings** dan klik tab **Payment**.

![Tab pengaturan pembayaran](/img/admin/settings-payments-top.png)

### Opsi Pembayaran Umum

Di pengaturan umum, Anda dapat mengatur:

- **Currency** — Mata uang default yang digunakan untuk transaksi
- **Currency Position** — Posisi simbol mata uang (sebelum/sesudah nominal)

![Pengaturan gateway pembayaran](/img/admin/settings-payments-options.png)

### Gateway Pembayaran

Ultimate Multisite mendukung berbagai gateway pembayaran. Anda dapat mengaktifkan dan mengatur masing-masing gateway dari tab pengaturan Payment.

![Konfigurasi gateway pembayaran](/img/admin/settings-payments-gateways.png)

Gateway yang tersedia meliputi:

- **Stripe** — Pembayaran kartu kredit melalui Stripe
- **PayPal** — Pembayaran via PayPal
- **Manual** — Untuk pemrosesan pembayaran offline atau kustom

Setiap gateway memiliki bagian konfigurasi tersendiri untuk memasukkan API key dan pengaturan lainnya.

![Pengaturan gateway tambahan](/img/admin/settings-payments-gateways-2.png)

### Mode Sandbox

Anda dapat mengaktifkan **Sandbox Mode** untuk menguji integrasi pembayaran sebelum digunakan secara live. Saat mode sandbox aktif, tidak ada tagihan sungguhan yang akan diproses.

## Melihat Pembayaran

Buka halaman **Payments** di bawah Ultimate Multisite untuk melihat semua transaksi di seluruh jaringan Anda.

![Daftar pembayaran](/img/admin/payments-list.png)

Anda dapat memfilter pembayaran berdasarkan status (completed, pending, failed, refunded) dan mencari transaksi tertentu.

Klik pada pembayaran untuk melihat detail lengkapnya termasuk item-item yang dibeli, membership terkait, informasi pelanggan, dan data gateway pembayaran.

## Invoice

Ultimate Multisite dapat membuat invoice secara otomatis untuk setiap pembayaran. Anda dapat menyesuaikan template invoice dan format penomoran dari pengaturan Payment.

Opsi kustomisasi invoice meliputi:

- **Nama dan alamat perusahaan** yang ditampilkan di invoice
- **Format dan urutan penomoran** invoice
- **Logo** yang ditampilkan di header invoice
- **Teks footer kustom** untuk syarat & ketentuan, catatan, atau informasi legal

Untuk menyesuaikan template invoice, buka **Ultimate Multisite → Settings → Payment** dan cari pengaturan terkait invoice.
