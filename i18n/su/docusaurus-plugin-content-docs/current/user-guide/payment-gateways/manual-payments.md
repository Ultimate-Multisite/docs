---
title: Ngatur Pembayaran Manual
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Ngatur Pembayaran Manual (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Pembayaran manual itu cara buat kamu nawarin metode pembayaran lain kalau **Stripe** atau **PayPal** nggak tersedia buat pengguna kamu. Bisa berupa transfer kawat, transfer bank, atau metode pembayaran lain yang tersedia di tempat lokal pengguna kamu.

## Cara Mengaktifkan Pembayaran Manual

Ngatur pembayaran manual itu gampang pisan. Cukup aktifkan di bawah payment gateways (gerbang pembayaran) dan masukkan instruksi detail tentang cara pengguna harus mengirim pembayarannya.

Pertama, buka **Ultimate Multisite > Settings > Payments**. Di bawah **Payment Gateways**, nyalakan (toggle on) **Manual**. Kamu akan lihat kotak **Payment Instructions** akan muncul buat kamu.

Masukkan informasi yang dibutuhkan pelanggan untuk melakukan pembayaran di kotak ini. Bisa berupa detail rekening bank kamu dan email kamu supaya pelanggan bisa kirim konfirmasi pembayaran ke kamu, misalnya.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Ini tampilan pengaturan manual gateway:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Setelah diatur, tinggal klik **Save Settings** dan selesai. Pas pengguna daftar ke jaringan kamu, mereka akan lihat pesan yang kasih tahu bahwa mereka akan menerima instruksi dari kamu untuk menyelesaikan pembelian.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Dan mereka juga akan menerima pesan di halaman **Thank You** kamu dengan instruksi pembayarannya.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Mengonfirmasi pembayaran manual

Kanggo ngabuktian pembayaran manual, mindah di menu **Payments** di bar kiri. Di dinya anjeun bisa ningali sadaya pembayaran dina jaringan anjeun jeung rincianna, kaasup **status**na. Pembayaran manual bakal salawasna aya status **Pending** nepi ka anjeun ngarobah sorangan.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Asupkeun halaman pembayaran ku klik **reference code**. Di halaman ieu anjeun bakal ningali sadaya rincian pembayaran anu masih Pending, saperti reference ID, produk, timestamp, jeung loba deui.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Di kolom katuhu, anjeun bisa ngarobah status pembayaran éta. Ngarobah jadi **Completed** sarta ngalawan opsi **Activate Membership** bakal ngaktifkeun situs pelanggan jeung keanggotaanna bakal aktif.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
