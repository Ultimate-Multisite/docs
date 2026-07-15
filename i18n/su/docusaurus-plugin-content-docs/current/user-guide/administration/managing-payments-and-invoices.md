---
title: Ngatur Pembayaran je Tagihan
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Ngatur Pembayaran je Invoice

## Pengaturan Pembayaran {#payment-settings}

Samémé anjeun mulai nampa pembayaran, anjeun kudu ngatur pengaturan anu aya patalina jeung pembayaran. Pindah ka **Ultimate Multisite → Settings** terus klik tab **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Ieu mangrupake tampilan lengkap halaman pengaturan pembayaran:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Pilihan Pembayaran Umum {#general-payment-options}

Di pengaturan umum, anjeun bisa ngatur:

- **Currency** — Mata uang saperti anu biasana dipaké pikeun transaksi
- **Currency Position** — Di mana simbol mata uangna muncul (samémé/sang tukang jumlahna)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Payment Gateways {#payment-gateways}

Ultimate Multisite ngadukung sababaraha payment gateway. Anjeun bisa ngaktifkeun jeung ngatur masing-masing tina tab Pengaturan Pembayaran (Payment settings).

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Gateway anu aya nyaéta:

- **Stripe** — Pembayaran kartu kredit via Stripe
- **PayPal** — Pembayaran PayPal
- **Manual** — Pikeun pemrosesan pembayaran offline atawa kustom

Unggal gateway miboga bagian pengaturan sorangan di mana anjeun ngaganti API keys jeung pengaturan séjénna.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

Anjeun bisa ngaktifkeun **Sandbox Mode** pikeun nguji integrasi pembayaran samémé diluncurkeun (going live). Lamun sandbox mode aktif, teu aya tagihan nyata anu bakal dipotong.

## Ngajak Nélak Pembayaran {#viewing-payments}

Pindah ka halaman **Payments** di bawah Ultimate Multisite pikeun ningali sakabé transaksi di sakulawarga anjeun.

![Payments list](/img/admin/payments-list.png)

Anjeun bisa ngfilter pembayaran dumasar statusna (completed, pending, failed, refunded) sarta nyari transaksi anu spesifik.

Klik di pembayaran untuk melihat detail lengkapnya termasuk item-item yang dibeli, keanggotaan terkait, informasi pelanggan, dan data gateway pembayaran.

## Faktur (Invoices) {#invoices}

Ultimate Multisite bisa otomatis bikin faktur buat pembayaran. Anda bisa kustom template faktur dan format penomoran dari pengaturan Pembayaran (Payment settings).

Pilihan kustomisasi faktur meliputi:

- **Nama dan alamat perusahaan** yang ditampilkan di faktur
- Format dan urutan **penomoran faktur**
- **Logo** yang ditampilkan di bagian atas faktur (header)
- **Teks footer khusus** untuk syarat, catatan, atau informasi hukum

Untuk mengkustom template faktur, buka **Ultimate Multisite → Settings → Payment** lalu cari pengaturan yang berhubungan dengan faktur.
