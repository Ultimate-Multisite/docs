---
title: Menyediakan PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Menyediakan Gateway PayPal (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Anda boleh mengaktifkan sehingga empat kaedah pembayaran di halaman tetapan pembayaran kami: Stripe, Stripe Checkout, PayPal dan Manual. Dalam artikel ini, kita akan melihat cara untuk mengintegrasikan dengan **PayPal**.

Sama seperti Stripe, PayPal digunakan secara meluas untuk pembayaran dalam talian, terutamanya di laman web WordPress. Artikel ini akan membimbing anda tentang cara menggunakan PayPal sebagai kaedah pembayaran yang tersedia di rangkaian anda.

Perlu diingat bahawa anda memerlukan **akaun PayPal Business** untuk mendapatkan kelayakan API yang diperlukan bagi integrasi ini.

## Mengaktifkan PayPal di rangkaian anda

Untuk mengaktifkan PayPal sebagai kaedah pembayaran yang tersedia di rangkaian anda, pergi ke **Ultimate Multisite > Settings > Payments** tab dan tandakan kotak di sebelah PayPal.

![Mengaktifkan PayPal dalam gateway pembayaran aktif](/img/config/settings-payment-gateways.png)

## Mendapatkan kelayakan API PayPal

Setelah PayPal diaktifkan sebagai gateway pembayaran, anda perlu mengisi medan untuk PayPal API **Username**, PayPal API **Password** dan PayPal API **Signature**.

Anda boleh mendapatkan maklumat ini dengan log masuk ke akaun PayPal [Live](https://www.paypal.com/home) atau [Sandbox](https://www.sandbox.paypal.com/home) anda.

(Ingat bahawa anda boleh menggunakan **mod sandbox** untuk menguji pembayaran dan melihat sama ada gateway telah disediakan dengan betul. Cuma togol bahagian yang berkenaan.)

![Medan kelayakan API PayPal dan togol mod sandbox](/img/config/settings-payment-gateways.png)

Untuk meminta kelayakan API Signature atau Certificate bagi akaun PayPal anda:

  1. Pergi ke [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) anda.

  2. Dalam bahagian **API access**, klik **Update**.  
![Tetapan Akaun PayPal dengan bahagian API access](/img/config/settings-payment-gateways.png)

  3. Di bawah **NVP/SOAP API integration (Classic)**, klik **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Jika anda sudah menjana API Signature atau Certificate, anda akan dialihkan ke halaman di mana anda boleh mencari kelayakan anda.

     * _**Nota:** Jika anda diminta untuk mengesahkan akaun PayPal anda, ikuti arahan di skrin._

  4. Pilih _satu_ daripada pilihan berikut, kemudian klik **Agree and Submit**.

     * **Request API Signature** – Pilih untuk pengesahan API Signature.

     * **Request API Certificate** – Pilih untuk pengesahan API Certificate.

  5. PayPal akan menjana kelayakan API anda seperti berikut:  
![Kelayakan API PayPal yang dijana](/img/config/settings-payment-gateways.png)

     * **Kelayakan API Signature** termasuk API Username, API Password, dan Signature, yang tidak akan tamat tempoh. Nilai-nilai ini disembunyikan secara lalai untuk keselamatan tambahan. Klik **Show/Hide** untuk memaparkan atau menyembunyikannya. Apabila selesai, klik **Done**.

     * **Kelayakan API Certificate** termasuk API Username, API Password, dan Certificate, yang akan tamat tempoh secara automatik selepas tiga tahun. Klik **Download Certificate** untuk menyimpan API Certificate ke desktop anda.

Itu sahaja, integrasi pembayaran PayPal anda sudah lengkap!

Jika anda mempunyai sebarang soalan mengenai tetapan PayPal, anda boleh merujuk kepada [Pusat Bantuan](https://www.paypal.com/br/smarthelp/home) PayPal.
