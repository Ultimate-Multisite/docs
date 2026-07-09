---
title: Mengurus Pembayaran dan Invois
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Mengurus Pembayaran dan Invois

## Tetapan Pembayaran

Sebelum anda mula menerima pembayaran, anda perlu mengkonfigurasi tetapan berkaitan pembayaran. Navigasi ke **Ultimate Multisite → Settings** dan klik pada tab **Payment**.

![Tab tetapan pembayaran](/img/admin/settings-payments-top.png)

Berikut ialah paparan penuh halaman tetapan pembayaran:

![Halaman penuh tetapan pembayaran](/img/admin/settings-payments-full.png)

### Pilihan Pembayaran Umum

Dalam tetapan umum, anda boleh mengkonfigurasi:

- **Currency** — Mata wang lalai yang digunakan untuk transaksi
- **Currency Position** — Tempat simbol mata wang dipaparkan (sebelum/selepas amaun)

![Tetapan payment gateway](/img/admin/settings-payments-options.png)

### Payment Gateways

Ultimate Multisite menyokong berbilang payment gateway. Anda boleh mendayakan dan mengkonfigurasi setiap satu daripada tab tetapan Payment.

![Konfigurasi payment gateway](/img/admin/settings-payments-gateways.png)

Gateway yang tersedia termasuk:

- **Stripe** — Pembayaran kad kredit melalui Stripe
- **PayPal** — Pembayaran PayPal
- **Manual** — Untuk pemprosesan pembayaran luar talian atau tersuai

Setiap gateway mempunyai bahagian konfigurasinya sendiri tempat anda memasukkan API key dan tetapan lain.

![Tetapan gateway tambahan](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode

Anda boleh mendayakan **Sandbox Mode** untuk menguji integrasi pembayaran anda sebelum dilancarkan secara langsung. Apabila sandbox mode aktif, tiada caj sebenar akan dibuat.

## Melihat Pembayaran

Navigasi ke halaman **Payments** di bawah Ultimate Multisite untuk melihat semua transaksi merentas rangkaian anda.

![Senarai pembayaran](/img/admin/payments-list.png)

Anda boleh menapis pembayaran mengikut status (selesai, belum selesai, gagal, dibayar balik) dan mencari transaksi tertentu.

Klik pada pembayaran untuk melihat butiran penuhnya termasuk item baris, membership yang berkaitan, maklumat pelanggan, dan data payment gateway.

## Invois

Ultimate Multisite boleh menjana invois secara automatik untuk pembayaran. Anda boleh menyesuaikan templat invois dan format penomboran daripada tetapan Payment.

Pilihan penyesuaian invois termasuk:

- **Company name and address** yang dipaparkan pada invois
- **Invoice numbering** format dan urutan
- **Logo** dipaparkan pada pengepala invois
- **Custom footer text** untuk terma, nota, atau maklumat undang-undang

Untuk menyesuaikan templat invois, pergi ke **Ultimate Multisite → Settings → Payment** dan cari tetapan berkaitan invois.
