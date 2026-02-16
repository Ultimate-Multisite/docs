---
title: Menerima Pembayaran
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# Menerima Pembayaran (v2)

_**CATATAN PENTING: Artikel ini mengacu pada Ultimate Multisite versi 2.x.**_

Ultimate Multisite memiliki sistem keanggotaan dan penagihan bawaan. Agar sistem penagihan kami dapat berfungsi, kami telah mengintegrasikan payment gateway yang paling umum digunakan dalam e-commerce. Payment gateway bawaan di Ultimate Multisite adalah _Stripe_, _PayPal_, dan Pembayaran Manual. Anda juga dapat menggunakan _WooCommerce_, _GoCardless_, dan _Payfast_ untuk menerima pembayaran dengan menginstal add-on masing-masing.

## Pengaturan Dasar

Anda dapat mengonfigurasi payment gateway mana pun di pengaturan pembayaran Ultimate Multisite. Anda dapat menemukannya dengan membuka **menu Ultimate Multisite > Settings > Payments.**

![Halaman pengaturan pembayaran di Ultimate Multisite](/img/config/settings-payment-gateways.png)

Sebelum Anda menyiapkan payment gateway, silakan lihat pengaturan pembayaran dasar yang dapat Anda konfigurasi:

**Force auto-renew:** Pengaturan ini akan memastikan bahwa pembayaran akan berulang secara otomatis di akhir setiap siklus penagihan, tergantung pada frekuensi penagihan yang dipilih pengguna.

![Pengaturan toggle force auto-renew](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** Dengan opsi ini diaktifkan, klien Anda tidak perlu menambahkan informasi keuangan apa pun selama proses pendaftaran. Ini hanya akan diperlukan setelah periode uji coba berakhir.

![Toggle izinkan uji coba tanpa metode pembayaran](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** Opsi ini memberi Anda pilihan apakah akan mengirim invoice setelah pembayaran atau tidak. Perlu diketahui bahwa pengguna akan memiliki akses ke riwayat pembayaran mereka di dashboard subsite mereka. Opsi ini tidak berlaku untuk Manual Gateway.

![Toggle kirim invoice saat konfirmasi pembayaran](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** Di sini, Anda dapat memilih skema kode referensi pembayaran atau nomor berurutan. Jika Anda memilih menggunakan kode referensi pembayaran untuk invoice Anda, Anda tidak perlu mengonfigurasi apa pun. Jika Anda memilih menggunakan skema nomor berurutan, Anda perlu mengonfigurasi **next invoice number** (Nomor ini akan digunakan sebagai nomor invoice untuk invoice berikutnya yang dibuat di sistem. Nomor ini bertambah satu setiap kali invoice baru dibuat. Anda dapat mengubah dan menyimpannya untuk mengatur ulang nomor urut invoice ke nilai tertentu) dan **invoice number prefix.**

![Pemilihan skema penomoran invoice](/img/config/settings-payment-gateways.png)

![Pengaturan nomor invoice berurutan dan prefix](/img/config/settings-payment-gateways.png)

## Di Mana Menemukan Gateway:

Anda dapat menyiapkan payment gateway di halaman yang sama (**Ultimate Multisite > Settings > Payments**). Tepat di bawah **active payment gateways**, Anda akan dapat melihat: _Stripe_, _Stripe Checkout_, _PayPal_, dan _Manual_.

![Daftar payment gateway aktif](/img/config/settings-payment-gateways.png)

Kami memiliki artikel khusus untuk setiap payment gateway yang akan memandu Anda melalui langkah-langkah penyiapannya, yang dapat Anda temukan di tautan di bawah ini.

**Menyiapkan gateway Stripe**

**Menyiapkan gateway PayPal**

**Menyiapkan pembayaran manual**

Sekarang, jika Anda ingin menggunakan _WooCommerce_, _GoCardless_, atau _Payfast_ sebagai payment gateway Anda, Anda perlu **menginstal dan mengonfigurasi add-on mereka**.

### Cara menginstal add-on WooCommerce:

Kami memahami bahwa _Stripe_ dan _PayPal_ tidak tersedia di beberapa negara, yang membatasi atau menghalangi pengguna Ultimate Multisite untuk menggunakan plugin kami secara efektif. Jadi kami membuat add-on untuk mengintegrasikan _WooCommerce_, yang merupakan plugin e-commerce yang sangat populer. Developer di seluruh dunia membuat add-on untuk mengintegrasikan berbagai payment gateway ke dalamnya. Kami memanfaatkan ini untuk memperluas payment gateway yang dapat Anda gunakan dengan sistem penagihan Ultimate Multisite.

_**PENTING:** Ultimate Multisite: WooCommerce Integration memerlukan WooCommerce untuk diaktifkan setidaknya di situs utama Anda._

Pertama, silakan buka halaman add-on. Anda dapat menemukannya dengan membuka **Ultimate Multisite > Settings**. Anda akan melihat tabel **Add-ons**. Klik **Check our Add-ons**.

![Halaman pengaturan dengan bagian add-on](/img/config/settings-general.png)

Setelah mengklik **Check our Add-ons**, Anda akan diarahkan ke halaman add-on. Di sini Anda dapat menemukan semua add-on Ultimate Multisite. Klik add-on **Ultimate Multisite: WooCommerce Integration**.

![Halaman add-on yang menampilkan daftar add-on yang tersedia](/img/config/settings-general.png)

Sebuah jendela akan muncul dengan detail add-on. Cukup klik **Install Now**.

![Dialog instal add-on WooCommerce](/img/config/settings-general.png)

Setelah instalasi selesai, Anda akan diarahkan ke halaman plugin. Di sini, cukup klik **Network Activate** dan add-on WooCommerce akan diaktifkan di jaringan Anda.

![Network Activate add-on WooCommerce](/img/config/settings-general.png)

Setelah mengaktifkannya, jika Anda masih belum menginstal dan mengaktifkan plugin WooCommerce di situs web Anda, Anda akan menerima pengingat.

![Pemberitahuan pengingat aktivasi WooCommerce](/img/config/settings-general.png)

Untuk membaca lebih lanjut tentang add-on WooCommerce Integration, **klik di sini**.

### Cara menginstal add-on GoCardless:

Langkah-langkah untuk menginstal add-on _GoCardless_ hampir sama dengan add-on _WooCommerce_. Silakan buka halaman add-on dan pilih add-on **Ultimate Multisite: GoCardless Gateway**.

![Halaman add-on yang menampilkan daftar add-on yang tersedia](/img/config/settings-general.png)

Jendela add-on akan muncul. Klik **Install Now**.

![Dialog instal add-on GoCardless](/img/config/settings-general.png)

Setelah instalasi selesai, Anda akan diarahkan ke halaman plugin. Di sini, cukup klik **Network Activate** dan add-on _GoCardless_ akan diaktifkan di jaringan Anda.

![Network Activate add-on GoCardless](/img/config/settings-general.png)

Untuk mempelajari cara memulai dengan gateway _GoCardless_, **baca artikel ini**.

### Cara menginstal add-on Payfast:

Buka halaman add-on dan pilih add-on **Ultimate Multisite: Payfast Gateway**.

![Halaman add-on yang menampilkan daftar add-on yang tersedia](/img/config/settings-general.png)

Jendela add-on akan muncul. Klik **Install Now.**

![Dialog instal add-on Payfast](/img/config/settings-general.png)

Setelah instalasi selesai, Anda akan diarahkan ke halaman plugin. Di sini, cukup klik **Network Activate** dan add-on _Payfast_ akan diaktifkan di jaringan Anda.

![Network Activate add-on Payfast](/img/config/settings-general.png)
