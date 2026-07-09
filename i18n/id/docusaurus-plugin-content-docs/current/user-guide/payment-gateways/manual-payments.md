---
title: Menyiapkan Pembayaran Manual
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Menyiapkan Pembayaran Manual (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Pembayaran manual adalah cara bagi Anda untuk menawarkan metode pembayaran lain jika **Stripe** atau **PayPal** tidak tersedia untuk pengguna Anda. Ini bisa berupa transfer kawat atau transfer bank, atau metode pembayaran lain apa pun yang tersedia secara lokal untuk pengguna Anda.

## Cara mengaktifkan Pembayaran Manual

Menyiapkan pembayaran manual sangat mudah. Anda hanya perlu mengaktifkannya di bawah gateway pembayaran dan memasukkan instruksi terperinci tentang bagaimana pengguna harus mengirim pembayaran.

Pertama, buka **Ultimate Multisite > Settings > Payments**. Di bawah **Payment Gateways** , aktifkan **Manual**. Anda akan melihat bahwa kotak **Payment Instructions** akan muncul untuk Anda.

Tambahkan ke kotak ini informasi yang diperlukan pelanggan Anda untuk melakukan pembayaran. Misalnya, ini bisa berupa detail rekening bank Anda dan email Anda agar pelanggan dapat mengirimkan konfirmasi pembayaran kepada Anda.

![Toggle gateway pembayaran manual dengan area teks Payment Instructions](/img/config/manual-gateway-expanded.png)

Berikut adalah antarmuka pengaturan gateway manual:

![Pengaturan gateway manual](/img/config/manual-gateway-settings.png)

Setelah menyiapkannya, cukup klik **Save Settings** dan selesai. Saat pengguna mendaftar ke jaringan Anda, mereka akan melihat pesan yang memberi tahu bahwa mereka akan menerima instruksi Anda untuk menyelesaikan pembelian.

![Pesan konfirmasi pendaftaran yang memberi tahu pengguna bahwa mereka akan menerima instruksi pembayaran](/img/frontend/registration-manual-notice.png)

Dan mereka juga akan menerima pesan di halaman **Thank You** Anda dengan instruksi pembayaran Anda.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Mengonfirmasi pembayaran manual

Untuk mengonfirmasi pembayaran manual, buka menu **Payments** di bilah kiri. Di sana Anda dapat melihat semua pembayaran di jaringan Anda beserta detailnya, termasuk **status** mereka. Pembayaran manual akan selalu memiliki status **Pending** sampai Anda mengubahnya secara manual.

![Daftar pembayaran yang menampilkan pembayaran manual pending](/img/admin/payments-list.png)

Masuk ke halaman pembayaran dengan mengklik **kode referensi**. Di halaman ini Anda memiliki semua detail pembayaran yang tertunda, seperti ID referensi, produk, stempel waktu, dan lainnya.

![Halaman detail pembayaran yang menampilkan kode referensi, produk, dan total](/img/admin/payment-edit.png)

Di kolom kanan, Anda dapat mengubah status pembayaran. Mengubahnya menjadi **Completed** dan **mengaktifkan opsi Activate Membership** akan mengaktifkan situs pelanggan Anda dan membership mereka akan aktif.

![Halaman edit pembayaran dengan Status diatur ke Completed dan toggle Activate Membership](/img/admin/payment-activate-membership.png)
