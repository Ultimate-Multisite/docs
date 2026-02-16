---
title: Menyiapkan Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Menyiapkan Gateway Stripe (v2)

_**CATATAN PENTING: Artikel ini mengacu pada Ultimate Multisite versi 2.x.**_

Anda dapat mengaktifkan hingga empat metode pembayaran di halaman pengaturan pembayaran kami: Stripe, Stripe Checkout, PayPal, dan Manual. Dalam artikel ini, kita akan membahas cara mengintegrasikan **Stripe**.

## Mengaktifkan Stripe

Untuk mengaktifkan Stripe sebagai gateway pembayaran yang tersedia di jaringan Anda, buka **Ultimate Multisite > Settings > Payments** dan centang toggle di samping **Stripe** atau **Stripe Checkout** pada bagian Active Payment Gateways.

![Mengaktifkan Stripe di active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Metode ini akan menampilkan kolom untuk memasukkan nomor kartu kredit saat checkout.

![Kolom kartu kredit inline Stripe saat checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Metode ini akan mengarahkan pelanggan ke halaman Stripe Checkout saat proses checkout.

![Halaman redirect Stripe Checkout saat checkout](/img/config/settings-payment-gateways.png)

Mendapatkan API key Stripe Anda

Setelah Stripe diaktifkan sebagai gateway pembayaran, Anda perlu mengisi kolom **Stripe Publishable Key** dan **Stripe Secret Key**. Anda bisa mendapatkannya dengan login ke akun Stripe Anda.

_**Catatan:** Anda dapat mengaktifkan **Sandbox mode** untuk menguji apakah metode pembayaran berfungsi._

![Kolom API key Stripe dan toggle sandbox mode](/img/config/settings-payment-gateways.png)

Di dashboard Stripe Anda, klik **Developers** di pojok kanan atas, lalu klik **API Keys** di menu sebelah kiri.

![Bagian Developers di dashboard Stripe dengan API Keys](/img/config/settings-payment-gateways.png)

Anda dapat menggunakan **Test Data** (untuk menguji apakah integrasi berfungsi di situs produksi Anda) atau tidak. Untuk mengubahnya, aktifkan toggle **Viewing test data**.

![Toggle Viewing test data di Stripe](/img/config/settings-payment-gateways.png)

Salin nilai dari **Publishable key** dan **Secret key**, dari kolom **Token** dan tempel di kolom Stripe Gateway Ultimate Multisite. Kemudian klik **Save Changes**.

![Nilai publishable dan secret key Stripe](/img/config/settings-payment-gateways.png)

![Menempel key Stripe di pengaturan Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Menyiapkan Stripe Webhook

Stripe mengirimkan event webhook yang memberi tahu Ultimate Multisite setiap kali terjadi event di **akun Stripe Anda**.

Klik **Developers** lalu pilih item **Webhooks** di menu sebelah kiri. Kemudian di sisi kanan, klik **Add endpoint**.

![Halaman Webhooks Stripe dengan tombol Add endpoint](/img/config/settings-payment-gateways.png)

Anda memerlukan **Endpoint URL**. Ultimate Multisite secara otomatis membuat endpoint URL yang dapat Anda temukan tepat di bawah kolom **Webhook Listener URL** di bagian **Ultimate Multisite Stripe Gateway**.

![Kolom Webhook Listener URL di pengaturan Stripe gateway](/img/config/settings-payment-gateways.png)

**Salin** endpoint URL dan **tempel** di kolom **Endpoint URL** Stripe.

![Menempel endpoint URL di pengaturan webhook Stripe](/img/config/settings-payment-gateways.png)

Selanjutnya adalah memilih **Event**. Di opsi ini, Anda cukup mencentang kotak **Select all events** dan klik **Add events**. Setelah itu klik **Add Endpoint** untuk menyimpan perubahan.

![Memilih semua event dan menambahkan endpoint Stripe](/img/config/settings-payment-gateways.png)

Selesai, integrasi pembayaran Stripe Anda sudah lengkap!
