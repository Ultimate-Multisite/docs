---
title: Menyediakan Pembayaran Manual
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Menyediakan Pembayaran Manual (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Pembayaran manual adalah cara untuk anda menawarkan kaedah pembayaran lain sekiranya **Stripe** atau **PayPal** tidak tersedia untuk pengguna anda. Ia boleh jadi pindahan kawat atau bank, atau apa-apa kaedah pembayaran lain yang tersedia untuk pengguna anda di kawasan mereka.

## Cara mengaktifkan Pembayaran Manual

Menyediakan pembayaran manual sangat mudah. Anda hanya perlu mengaktifkannya di bahagian payment gateway dan masukkan arahan terperinci tentang cara pengguna perlu menghantar pembayaran.

Pertama, pergi ke **Ultimate Multisite > Settings > Payments**. Di bawah **Payment Gateways**, togol **Manual** kepada aktif. Anda akan nampak kotak **Payment Instructions** akan muncul.

Masukkan maklumat yang pelanggan anda perlukan untuk membuat pembayaran di dalam kotak ini. Contohnya, ia boleh jadi butiran akaun bank anda dan emel anda supaya pelanggan boleh menghantar pengesahan pembayaran kepada anda.

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

Selepas menyediakannya, klik sahaja pada **Save Settings** dan selesai. Apabila pengguna mendaftar ke rangkaian anda, mereka akan melihat mesej yang memberitahu bahawa mereka akan menerima arahan anda untuk menyelesaikan pembelian.

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

Mereka juga akan menerima mesej di halaman **Thank You** anda dengan arahan pembayaran anda.

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## Mengesahkan pembayaran manual

Untuk mengesahkan pembayaran manual, pergi ke menu **Payments** di bar sebelah kiri. Di sana anda boleh melihat semua pembayaran di rangkaian anda beserta butiran mereka, termasuk **status** pembayaran. Pembayaran manual akan sentiasa mempunyai status **Pending** sehingga anda menukarnya secara manual.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Masuk ke halaman pembayaran dengan mengklik **reference code**. Di halaman ini anda mempunyai semua butiran pembayaran yang belum selesai, seperti reference ID, produk, cap masa dan banyak lagi.

![Payment details page with reference code and products](/img/admin/payments-list.png)

Di ruangan sebelah kanan, anda boleh menukar status pembayaran. Menukarnya kepada **Completed** dan **menogol pilihan Activate Membership** akan mengaktifkan laman pelanggan anda dan keahlian mereka akan menjadi aktif.

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)
