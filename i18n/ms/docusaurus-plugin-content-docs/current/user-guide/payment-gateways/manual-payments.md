---
title: Menyediakan Pembayaran Manual
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Menyediakan Pembayaran Manual (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Pembayaran manual ialah cara untuk anda menawarkan kaedah pembayaran lain sekiranya **Stripe** atau **PayPal** tidak tersedia untuk pengguna anda. Ia boleh berupa pindahan kawat atau pindahan bank, atau sebarang kaedah pembayaran lain yang tersedia kepada pengguna anda secara tempatan.

## Cara mengaktifkan Pembayaran Manual

Menyediakan pembayaran manual sangat mudah. Anda hanya perlu mengaktifkannya di bawah gerbang pembayaran dan memasukkan arahan terperinci tentang cara pengguna harus menghantar pembayaran.

Pertama, pergi ke **Ultimate Multisite > Settings > Payments**. Di bawah **Payment Gateways**, hidupkan **Manual**. Anda akan melihat bahawa kotak **Payment Instructions** akan dipaparkan untuk anda.

Tambahkan ke dalam kotak ini maklumat yang diperlukan oleh pelanggan anda untuk membuat pembayaran. Contohnya, ia boleh berupa butiran akaun bank anda dan e-mel anda supaya pelanggan boleh menghantar pengesahan pembayaran kepada anda.

![Togol gerbang pembayaran manual dengan kawasan teks Payment Instructions](/img/config/manual-gateway-expanded.png)

Berikut ialah antara muka tetapan gerbang manual:

![Tetapan gerbang manual](/img/config/manual-gateway-settings.png)

Selepas menyediakannya, klik sahaja **Save Settings** dan ia selesai. Apabila pengguna mendaftar ke rangkaian anda, mereka akan melihat mesej yang memberitahu mereka bahawa mereka akan menerima arahan anda untuk melengkapkan pembelian.

![Mesej pengesahan pendaftaran yang memberitahu pengguna bahawa mereka akan menerima arahan pembayaran](/img/frontend/registration-manual-notice.png)

Dan mereka juga akan menerima mesej pada halaman **Thank You** anda bersama arahan pembayaran anda.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Mengesahkan pembayaran manual

Untuk mengesahkan pembayaran manual, pergi ke menu **Payments** pada bar kiri. Di sana anda boleh melihat semua pembayaran dalam rangkaian anda dan butirannya, termasuk **status** mereka. Pembayaran manual akan sentiasa mempunyai status **Pending** sehingga anda mengubahnya secara manual.

![Senarai Payments yang menunjukkan pembayaran manual tertunda](/img/admin/payments-list.png)

Masuk ke halaman pembayaran dengan mengklik **kod rujukan**. Pada halaman ini anda mempunyai semua butiran pembayaran tertunda, seperti ID rujukan, produk, cap masa dan banyak lagi.

![Halaman butiran pembayaran yang menunjukkan kod rujukan, produk dan jumlah](/img/admin/payment-edit.png)

Pada lajur kanan, anda boleh mengubah status pembayaran. Menukarnya kepada **Completed** dan **menghidupkan pilihan Activate Membership** akan mengaktifkan tapak pelanggan anda dan keahlian mereka akan menjadi aktif.

![Halaman sunting pembayaran dengan Status ditetapkan kepada Completed dan togol Activate Membership](/img/admin/payment-activate-membership.png)
