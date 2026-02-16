---
title: Menyiapkan Pembayaran Manual
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Mengatur Pembayaran Manual (v2)

_**CATATAN PENTING: Artikel ini mengacu pada Ultimate Multisite versi 2.x.**_

Pembayaran manual adalah cara bagi Anda untuk menawarkan metode pembayaran lain jika **Stripe** atau **PayPal** tidak tersedia untuk pengguna Anda. Bisa berupa transfer bank atau metode pembayaran lain yang tersedia secara lokal bagi pengguna Anda.

## Cara mengaktifkan Pembayaran Manual

Mengatur pembayaran manual sangat mudah. Anda hanya perlu mengaktifkannya di bagian payment gateway dan memasukkan instruksi detail tentang cara pengguna mengirimkan pembayaran.

Pertama, buka **Ultimate Multisite > Settings > Payments**. Di bawah **Payment Gateways**, aktifkan toggle **Manual**. Anda akan melihat kotak **Payment Instructions** muncul.

Tambahkan di kotak ini informasi yang dibutuhkan pelanggan untuk melakukan pembayaran. Misalnya, detail rekening bank Anda dan email agar pelanggan dapat mengirimkan konfirmasi pembayaran kepada Anda.

![Toggle payment gateway manual dan kotak instruksi pembayaran](/img/config/settings-payment-gateways.png)

Setelah selesai mengaturnya, cukup klik **Save Settings** dan selesai. Saat pengguna mendaftar ke jaringan Anda, mereka akan melihat pesan yang memberitahu bahwa mereka akan menerima instruksi dari Anda untuk menyelesaikan pembelian.

![Pesan pembayaran manual yang ditampilkan saat pendaftaran](/img/config/settings-payment-gateways.png)

Mereka juga akan menerima pesan di halaman **Thank You** Anda beserta instruksi pembayaran.

![Halaman Thank You yang menampilkan instruksi pembayaran](/img/config/settings-payment-gateways.png)

## Mengonfirmasi pembayaran manual

Untuk mengonfirmasi pembayaran manual, buka menu **Payments** di sidebar kiri. Di sana Anda dapat melihat semua pembayaran di jaringan Anda beserta detailnya, termasuk **status**-nya. Pembayaran manual akan selalu berstatus **Pending** sampai Anda mengubahnya secara manual.

![Daftar pembayaran yang menampilkan pembayaran manual pending](/img/admin/payments-list.png)

Masuk ke halaman pembayaran dengan mengklik **reference code**. Di halaman ini Anda dapat melihat semua detail pembayaran yang pending, seperti reference ID, produk, timestamp, dan lainnya.

![Halaman detail pembayaran dengan reference code dan produk](/img/admin/payments-list.png)

Di kolom sebelah kanan, Anda dapat mengubah status pembayaran. Mengubahnya menjadi **Completed** dan **mengaktifkan opsi Activate Membership** akan mengaktifkan situs pelanggan Anda dan keanggotaan mereka akan aktif.

![Perubahan status pembayaran ke Completed dengan toggle Activate Membership](/img/admin/payments-list.png)
