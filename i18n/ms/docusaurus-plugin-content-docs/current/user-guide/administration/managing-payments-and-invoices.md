---
title: Menguruskan Pembayaran dan Invois
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Menguruskan Pembayaran dan Invois

## Tetapan Pembayaran

Sebelum anda mula menerima pembayaran, anda perlu mengkonfigurasi tetapan berkaitan pembayaran. Pergi ke **Ultimate Multisite → Settings** dan klik pada tab **Payment**.

![Tab tetapan pembayaran](/img/admin/settings-payments-top.png)

### Pilihan Pembayaran Am

Dalam tetapan am, anda boleh mengkonfigurasi:

- **Currency** — Mata wang lalai yang digunakan untuk transaksi
- **Currency Position** — Kedudukan simbol mata wang (sebelum/selepas jumlah)

![Tetapan payment gateway](/img/admin/settings-payments-options.png)

### Payment Gateway

Ultimate Multisite menyokong pelbagai payment gateway. Anda boleh mengaktifkan dan mengkonfigurasi setiap satu daripada tab tetapan Payment.

![Konfigurasi payment gateway](/img/admin/settings-payments-gateways.png)

Gateway yang tersedia termasuk:

- **Stripe** — Pembayaran kad kredit melalui Stripe
- **PayPal** — Pembayaran PayPal
- **Manual** — Untuk pemprosesan pembayaran luar talian atau tersuai

Setiap gateway mempunyai bahagian konfigurasi tersendiri di mana anda memasukkan kunci API dan tetapan lain.

![Tetapan gateway tambahan](/img/admin/settings-payments-gateways-2.png)

### Mod Sandbox

Anda boleh mengaktifkan **Sandbox Mode** untuk menguji integrasi pembayaran anda sebelum dilancarkan secara langsung. Apabila mod sandbox aktif, tiada caj sebenar akan dikenakan.

## Melihat Pembayaran

Pergi ke halaman **Payments** di bawah Ultimate Multisite untuk melihat semua transaksi di seluruh rangkaian anda.

![Senarai pembayaran](/img/admin/payments-list.png)

Anda boleh menapis pembayaran mengikut status (selesai, tertunda, gagal, dikembalikan) dan mencari transaksi tertentu.

Klik pada sesuatu pembayaran untuk melihat butiran penuhnya termasuk item baris, keahlian berkaitan, maklumat pelanggan, dan data payment gateway.

## Invois

Ultimate Multisite boleh menjana invois secara automatik untuk pembayaran. Anda boleh menyesuaikan templat invois dan format penomboran daripada tetapan Payment.

Pilihan penyesuaian invois termasuk:

- **Nama dan alamat syarikat** yang dipaparkan pada invois
- **Format dan urutan penomboran invois**
- **Logo** yang dipaparkan pada pengepala invois
- **Teks footer tersuai** untuk terma, nota, atau maklumat undang-undang

Untuk menyesuaikan templat invois, pergi ke **Ultimate Multisite → Settings → Payment** dan cari tetapan berkaitan invois.
