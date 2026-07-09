---
title: Menyiapkan PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Menyiapkan Gateway PayPal (v2)

_**CATATAN PENTING: Artikel ini mengacu pada Ultimate Multisite versi 2.x.**_

Anda dapat mengaktifkan hingga empat metode pembayaran di halaman pengaturan pembayaran kami: Stripe, Stripe Checkout, PayPal, dan Manual. Dalam artikel ini, kita akan melihat cara mengintegrasikan dengan **PayPal**.

Sama seperti Stripe, PayPal banyak digunakan untuk pembayaran online, terutama di situs web WordPress. Artikel ini akan memandu Anda tentang cara menggunakan PayPal sebagai metode pembayaran yang tersedia di jaringan Anda.

Perhatikan bahwa Anda perlu memiliki **akun PayPal Business** untuk mendapatkan kredensial API yang diperlukan untuk integrasi ini.

## Mengaktifkan PayPal di jaringan Anda

Untuk mengaktifkan PayPal sebagai metode pembayaran yang tersedia di jaringan Anda, buka tab **Ultimate Multisite > Pengaturan > Pembayaran** dan centang kotak di sebelah PayPal.

![Mengaktifkan PayPal di gateway pembayaran aktif](/img/config/settings-payment-gateways.png)

## Menggunakan wizard penyiapan terpandu

Ultimate Multisite 2.10.0 menambahkan wizard penyiapan PayPal terpandu ke pengaturan gateway pembayaran. Setelah Anda mengaktifkan PayPal, gunakan wizard di **Ultimate Multisite > Pengaturan > Pembayaran** untuk memilih bagaimana Anda ingin menghubungkan gateway dan mengonfirmasi kredensial mana yang masih diperlukan sebelum menyimpan.

Wizard mendukung dua jalur penyiapan:

* **Entri kredensial manual**: Gunakan jalur ini ketika Anda sudah memiliki kredensial API PayPal, ketika penyiapan OAuth tidak tersedia untuk akun Anda, atau ketika Anda lebih suka menyalin kredensial dari PayPal sendiri. Masukkan API Username, API Password, dan API Signature di bidang PayPal, lalu simpan pengaturan pembayaran.
* **Gerbang koneksi OAuth**: Gunakan jalur ini hanya ketika opsi OAuth tersedia dan diaktifkan untuk instalasi Anda. Wizard menampilkan alur OAuth di balik flag fitur, sehingga jaringan tanpa flag tersebut tetap menggunakan bidang entri kredensial manual.

Jika Anda tidak melihat opsi OAuth di wizard, selesaikan alur entri kredensial manual di bawah. Gateway bekerja dengan kredensial API PayPal Business yang sama seperti rilis Ultimate Multisite 2.x sebelumnya.

## Mendapatkan kredensial API PayPal

Setelah PayPal diaktifkan sebagai gateway pembayaran, Anda perlu mengisi bidang untuk PayPal API **Username** , PayPal API **Password** dan PayPal API **Signature**.

Anda bisa mendapatkannya dengan masuk ke akun PayPal [Live](https://www.paypal.com/home) atau [Sandbox](https://www.sandbox.paypal.com/home) Anda.

(Ingat bahwa Anda dapat menggunakan **mode sandbox** untuk menguji pembayaran dan melihat apakah gateway sudah disiapkan dengan benar. Cukup aktifkan bagian yang sesuai.)

![Bidang kredensial API PayPal dan toggle mode sandbox](/img/config/settings-payment-gateways.png)

Untuk meminta kredensial API Signature atau Certificate untuk akun PayPal Anda:

  1. Buka [Pengaturan Account](https://www.paypal.com/businessmanage/account/accountAccess) Anda.

  2. Di bagian **akses API**, klik **Perbarui**.
![Pengaturan Account PayPal dengan bagian akses API](/img/config/settings-payment-gateways.png)

  3. Di bawah **integrasi API NVP/SOAP (Klasik)** , klik **Kelola kredensial API**.
![Integrasi API NVP/SOAP PayPal Kelola kredensial API](/img/config/settings-payment-gateways.png)

     * Jika Anda sudah membuat API Signature atau Certificate, Anda akan dialihkan ke halaman tempat Anda dapat menemukan kredensial Anda.

     * _**Catatan:** Jika Anda diminta untuk memverifikasi akun PayPal Anda, ikuti instruksi di layar._

  4. Pilih _salah satu_ dari opsi berikut, lalu klik **Setuju dan Kirim**.

     * **Minta API Signature** – Pilih untuk autentikasi API Signature.

     * **Minta API Certificate** – Pilih untuk autentikasi API Certificate.

  5. PayPal membuat kredensial API Anda sebagai berikut:
![Kredensial API yang dibuat PayPal](/img/config/settings-payment-gateways.png)

     * **Kredensial API Signature** mencakup API Username, API Password, dan Signature, yang tidak kedaluwarsa. Nilai-nilai ini disembunyikan secara default untuk keamanan tambahan. Klik **Tampilkan/Sembunyikan** untuk mengaktifkan dan menonaktifkan tampilannya. Setelah selesai, klik **Selesai**.

     * **Kredensial API Certificate** mencakup API Username, API Password, dan Certificate, yang kedaluwarsa secara otomatis setelah tiga tahun. Klik **Unduh Certificate** untuk menyimpan API Certificate ke desktop Anda.

Selesai, integrasi pembayaran PayPal Anda lengkap!

Jika Anda memiliki pertanyaan apa pun mengenai pengaturan PayPal, Anda dapat merujuk ke [Pusat Bantuan](https://www.paypal.com/br/smarthelp/home) PayPal.
