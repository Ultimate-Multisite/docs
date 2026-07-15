---
title: Ngatur Pembayaran lan Faktur
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Ngelola Pembayaran lan Faktur

## Pengaturan Pembayaran {#payment-settings}

Saben sampeyan arep mulai nampa pembayaran, sampeyan kudu ngatur pengaturan sing ana gandheng karo pembayaran. Tindakake **Ultimate Multisite → Settings** lan klik tab **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Iki tampilan lengkap saka halaman pengaturan pembayaran:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Opsi Pembayaran Umum {#general-payment-options}

Ing pengaturan umum sampeyan bisa ngatur:

- **Currency** — Mata uang baku sing digunakake kanggo transaksi
- **Currency Position** — Papan simbol mata uang ana ing ngendi (sadurunge/sawise jumlah)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Payment Gateways {#payment-gateways}

Ultimate Multisite ndukung pirang-pirang payment gateway. Sampeyan bisa ngaktifake lan ngatur saben salah siji saka tab Pengaturan Pembayaran.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Gateway sing ana kalebu yaiku:

- **Stripe** — Pembayaran kartu kredit liwat Stripe
- **PayPal** — Pembayaran PayPal
- **Manual** — Kanggo pemrosesan pembayaran offline utawa kustom

Sabowah gateway duwe bagian konfigurasi dhewe kanggo mlebu API keys lan pengaturan liyane.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

Sampeyan bisa ngaktifake **Sandbox Mode** kanggo nyoba integrasi pembayaran sampeyan sadurunge diwenehake (live). Nalika sandbox mode aktif, ora bakal ana dhuwit nyata sing ditagih.

## Melihat Pembayaran {#viewing-payments}

Tindakake menyang halaman **Payments** ing bawah Ultimate Multisite kanggo ndeleng kabeh transaksi ing jaringan sampeyan.

![Payments list](/img/admin/payments-list.png)

Sampeyan bisa filter pembayaran miturut status (selesai, pending, gagal, dibalik) lan nggoleki transaksi tartamtu.

Klik pada pembayaran untuk melihat detail lengkapnya termasuk barang yang dibeli, keanggotaan terkait, informasi pelanggan, dan data payment gateway.

## Invoice {#invoices}

Ultimate Multisite bisa otomatis bikin invoice buat pembayaran. Kamu bisa sesuaikan template invoice dan format penomoran dari pengaturan Payment.

Pilihan kustomisasi invoice meliputi:

- **Nama perusahaan dan alamat** yang ditampilkan di invoice
- **Format dan urutan penomoran invoice**
- **Logo** yang ditampilkan di bagian atas invoice
- **Teks footer kustom** untuk syarat, catatan, atau informasi hukum

Untuk menyesuaikan template invoice, buka **Ultimate Multisite → Settings → Payment** lalu cari pengaturan yang berhubungan dengan invoice.
