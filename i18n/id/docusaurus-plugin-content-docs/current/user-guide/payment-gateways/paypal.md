---
title: Menyiapkan PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Mengatur Gateway PayPal (v2)

_**CATATAN PENTING: Artikel ini mengacu pada Ultimate Multisite versi 2.x.**_

Anda dapat mengaktifkan hingga empat metode pembayaran di halaman pengaturan pembayaran kami: Stripe, Stripe Checkout, PayPal, dan Manual. Dalam artikel ini, kita akan membahas cara mengintegrasikan dengan **PayPal**.

Sama seperti Stripe, PayPal banyak digunakan untuk pembayaran online, terutama di situs WordPress. Artikel ini akan memandu Anda cara menggunakan PayPal sebagai metode pembayaran yang tersedia di jaringan Anda.

Perlu diketahui bahwa Anda harus memiliki **akun PayPal Business** untuk mendapatkan kredensial API yang diperlukan untuk integrasi ini.

## Mengaktifkan PayPal di jaringan Anda

Untuk mengaktifkan PayPal sebagai metode pembayaran yang tersedia di jaringan Anda, buka **Ultimate Multisite > Settings > Payments** tab dan centang kotak di samping PayPal.

![Mengaktifkan PayPal di gateway pembayaran aktif](/img/config/settings-payment-gateways.png)

## Mendapatkan kredensial API PayPal

Setelah PayPal diaktifkan sebagai gateway pembayaran, Anda perlu mengisi kolom untuk **Username** API PayPal, **Password** API PayPal, dan **Signature** API PayPal.

Anda bisa mendapatkannya dengan masuk ke akun PayPal [Live](https://www.paypal.com/home) atau [Sandbox](https://www.sandbox.paypal.com/home) Anda.

(Ingat bahwa Anda dapat menggunakan **sandbox mode** untuk menguji pembayaran dan melihat apakah gateway sudah diatur dengan benar. Cukup aktifkan toggle pada bagian yang sesuai.)

![Kolom kredensial API PayPal dan toggle sandbox mode](/img/config/settings-payment-gateways.png)

Untuk meminta kredensial API Signature atau Certificate untuk akun PayPal Anda:

  1. Buka [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) Anda.

  2. Di bagian **API access**, klik **Update**.  
![PayPal Account Settings dengan bagian API access](/img/config/settings-payment-gateways.png)

  3. Di bawah **NVP/SOAP API integration (Classic)**, klik **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Jika Anda sudah pernah membuat API Signature atau Certificate, Anda akan diarahkan ke halaman tempat Anda dapat menemukan kredensial Anda.

     * _**Catatan:** Jika Anda diminta untuk memverifikasi akun PayPal Anda, ikuti petunjuk yang ada di layar._

  4. Pilih _salah satu_ dari opsi berikut, lalu klik **Agree and Submit**.

     * **Request API Signature** – Pilih untuk autentikasi API Signature.

     * **Request API Certificate** – Pilih untuk autentikasi API Certificate.

  5. PayPal akan membuat kredensial API Anda sebagai berikut:  
![Kredensial API PayPal yang telah dibuat](/img/config/settings-payment-gateways.png)

     * **Kredensial API Signature** mencakup API Username, API Password, dan Signature, yang tidak memiliki masa kedaluwarsa. Nilai-nilai ini disembunyikan secara default untuk keamanan tambahan. Klik **Show/Hide** untuk menampilkan atau menyembunyikannya. Setelah selesai, klik **Done**.

     * **Kredensial API Certificate** mencakup API Username, API Password, dan Certificate, yang akan kedaluwarsa secara otomatis setelah tiga tahun. Klik **Download Certificate** untuk menyimpan API Certificate ke desktop Anda.

Selesai, integrasi pembayaran PayPal Anda sudah lengkap!

Jika Anda memiliki pertanyaan mengenai pengaturan PayPal, Anda dapat merujuk ke [Help Center](https://www.paypal.com/br/smarthelp/home) PayPal.
