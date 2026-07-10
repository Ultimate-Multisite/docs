---
title: Menyediakan PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Menyediakan PayPal Gateway (v2) {#setting-up-the-paypal-gateway-v2}

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Anda boleh mengaktifkan sehingga empat kaedah pembayaran pada halaman tetapan pembayaran kami: Stripe, Stripe Checkout, PayPal dan Manual. Dalam artikel ini, kita akan melihat cara berintegrasi dengan **PayPal**.

Sama seperti Stripe, PayPal digunakan secara meluas untuk pembayaran dalam talian, terutamanya pada laman web WordPress. Artikel ini akan membimbing anda tentang cara menggunakan PayPal sebagai kaedah pembayaran yang tersedia pada rangkaian anda.

Perhatikan bahawa anda perlu mempunyai **Account PayPal Business** untuk mendapatkan kelayakan API yang diperlukan untuk integrasi ini.

## Mengaktifkan PayPal pada rangkaian anda {#enabling-paypal-on-your-network}

Untuk mengaktifkan PayPal sebagai kaedah pembayaran yang tersedia pada rangkaian anda, pergi ke tab **Ultimate Multisite > Settings > Payments** dan tandakan kotak di sebelah PayPal.

![Mengaktifkan PayPal dalam payment gateway aktif](/img/config/settings-payment-gateways.png)

## Menggunakan wizard persediaan berpandu {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 menambah wizard persediaan PayPal berpandu pada tetapan payment gateway. Selepas anda mengaktifkan PayPal, gunakan wizard pada **Ultimate Multisite > Settings > Payments** untuk memilih cara anda mahu menyambungkan gateway dan mengesahkan kelayakan mana yang masih diperlukan sebelum menyimpan.

Wizard menyokong dua laluan persediaan:

* **Kemasukan kelayakan manual**: Gunakan laluan ini apabila anda sudah mempunyai kelayakan API PayPal, apabila persediaan OAuth tidak tersedia untuk Account anda, atau apabila anda lebih suka menyalin kelayakan daripada PayPal sendiri. Masukkan API Username, API Password, dan API Signature dalam medan PayPal, kemudian simpan tetapan pembayaran.
* **Gerbang sambungan OAuth**: Gunakan laluan ini hanya apabila pilihan OAuth tersedia dan diaktifkan untuk pemasangan anda. Wizard memaparkan aliran OAuth di sebalik feature flag, jadi rangkaian tanpa flag tersebut terus menggunakan medan kemasukan kelayakan manual.

Jika anda tidak melihat pilihan OAuth dalam wizard, lengkapkan aliran kemasukan kelayakan manual di bawah. Gateway berfungsi dengan kelayakan API PayPal Business yang sama seperti keluaran Ultimate Multisite 2.x sebelumnya.

## Mendapatkan kelayakan API PayPal {#getting-the-paypal-api-credentials}

Setelah PayPal diaktifkan sebagai payment gateway, anda perlu mengisi medan untuk PayPal API **Username** , PayPal API **Password** dan PayPal API **Signature**.

Anda boleh mendapatkannya dengan log masuk ke Account PayPal [Live](https://www.paypal.com/home) atau [Sandbox](https://www.sandbox.paypal.com/home) anda.

(Ingat bahawa anda boleh menggunakan **sandbox mode** untuk menguji pembayaran dan melihat sama ada gateway disediakan dengan betul. Hanya aktifkan bahagian yang sepadan.)

![Medan kelayakan API PayPal dan togol sandbox mode](/img/config/settings-payment-gateways.png)

Untuk meminta kelayakan API Signature atau Certificate untuk Account PayPal anda:

  1. Pergi ke [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) anda.

  2. Dalam bahagian **API access**, klik **Update**.
![PayPal Account Settings dengan bahagian API access](/img/config/settings-payment-gateways.png)

  3. Di bawah **NVP/SOAP API integration (Classic)** , klik **Manage API credentials**.
![Integrasi API NVP/SOAP PayPal Urus kelayakan API](/img/config/settings-payment-gateways.png)

     * Jika anda sudah menjana API Signature atau Certificate, anda akan dialihkan ke halaman di mana anda boleh menemui kelayakan anda.

     * _**Nota:** Jika anda diminta untuk mengesahkan Account PayPal anda, ikut arahan pada skrin._

  4. Pilih _satu_ daripada pilihan berikut, kemudian klik **Agree and Submit**.

     * **Request API Signature** – Pilih untuk pengesahan API Signature.

     * **Request API Certificate** – Pilih untuk pengesahan API Certificate.

  5. PayPal menjana kelayakan API anda seperti berikut:
![Kelayakan API yang dijana PayPal](/img/config/settings-payment-gateways.png)

     * **Kelayakan API Signature** termasuk API Username, API Password, dan Signature, yang tidak tamat tempoh. Nilai ini disembunyikan secara lalai untuk keselamatan tambahan. Klik **Show/Hide** untuk menghidupkan dan mematikannya. Apabila selesai, klik **Done**.

     * **Kelayakan API Certificate** termasuk API Username, API Password, dan Certificate, yang tamat tempoh secara automatik selepas tiga tahun. Klik **Download Certificate** untuk menyimpan API Certificate ke desktop anda.

Itu sahaja, integrasi pembayaran PayPal anda telah lengkap!

Jika anda mempunyai sebarang soalan mengenai tetapan PayPal, anda boleh merujuk kepada [Help Center](https://www.paypal.com/br/smarthelp/home) PayPal.
