---
title: Menyediakan Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Menyediakan Gateway Stripe (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Anda boleh mengaktifkan sehingga empat kaedah pembayaran di halaman tetapan pembayaran kami: Stripe, Stripe Checkout, PayPal dan Manual. Dalam artikel ini, kita akan melihat cara mengintegrasikan dengan **Stripe**.

## Mengaktifkan Stripe

Untuk mengaktifkan Stripe sebagai gateway pembayaran yang tersedia di rangkaian anda, pergi ke **Ultimate Multisite > Settings > Payments** dan tandakan togol di sebelah **Stripe** atau **Stripe Checkout** di bahagian Active Payment Gateways.

![Mengaktifkan Stripe dalam active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Kaedah ini akan memaparkan ruang untuk memasukkan nombor kad kredit semasa checkout.

![Ruang kad kredit Stripe semasa checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Kaedah ini akan mengalihkan pelanggan ke halaman Stripe Checkout semasa checkout.

![Halaman redirect Stripe Checkout semasa checkout](/img/config/settings-payment-gateways.png)

Mendapatkan kunci API Stripe anda

Setelah Stripe diaktifkan sebagai gateway pembayaran, anda perlu mengisi ruangan untuk **Stripe Publishable Key** dan **Stripe Secret Key**. Anda boleh mendapatkan ini dengan log masuk ke akaun Stripe anda.

_**Nota:** anda boleh mengaktifkan **Sandbox mode** untuk menguji sama ada kaedah pembayaran berfungsi._

![Ruangan kunci API Stripe dan togol sandbox mode](/img/config/settings-payment-gateways.png)

Di dashboard Stripe anda, klik **Developers** di penjuru kanan atas, dan kemudian **API Keys** di menu sebelah kiri.

![Bahagian Developers dashboard Stripe dengan API Keys](/img/config/settings-payment-gateways.png)

Anda boleh sama ada menggunakan **Test Data** (untuk menguji sama ada integrasi berfungsi di laman produksi anda) atau tidak. Untuk menukar ini, togol suis **Viewing test data**.

![Togol Viewing test data Stripe](/img/config/settings-payment-gateways.png)

Salin nilai dari **Publishable key** dan **Secret key**, dari lajur **Token** dan tampal di ruangan Ultimate Multisite Stripe Gateway. Kemudian klik **Save Changes**.

![Nilai publishable dan secret key Stripe](/img/config/settings-payment-gateways.png)

![Menampal kunci Stripe dalam tetapan Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Menyediakan Stripe Webhook

Stripe menghantar event webhook yang memberitahu Ultimate Multisite setiap kali sesuatu event berlaku di **akaun stripe anda**.

Klik **Developers** dan kemudian pilih item **Webhooks** di menu sebelah kiri. Kemudian di sebelah kanan klik **Add endpoint**.

![Halaman Stripe Webhooks dengan butang Add endpoint](/img/config/settings-payment-gateways.png)

Anda memerlukan **Endpoint URL**. Ultimate Multisite menjana endpoint URL secara automatik yang boleh anda temui tepat di bawah ruangan **Webhook Listener URL** dalam bahagian **Ultimate Multisite Stripe Gateway**.

![Ruangan Webhook Listener URL dalam tetapan gateway Stripe](/img/config/settings-payment-gateways.png)

**Salin** endpoint URL dan **tampal** di ruangan **Endpoint URL** Stripe.

![Menampal endpoint URL dalam persediaan webhook Stripe](/img/config/settings-payment-gateways.png)

Seterusnya adalah memilih **Event**. Di bawah pilihan ini, anda hanya perlu tandakan kotak **Select all events** dan klik **Add events**. Selepas itu klik **Add Endpoint** untuk menyimpan perubahan.

![Memilih semua event dan menambah endpoint Stripe](/img/config/settings-payment-gateways.png)

Itu sahaja, integrasi pembayaran Stripe anda sudah lengkap!
