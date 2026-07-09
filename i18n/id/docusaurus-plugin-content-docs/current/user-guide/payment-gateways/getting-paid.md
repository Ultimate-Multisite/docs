---
title: Menerima Pembayaran
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Mendapatkan Pembayaran (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Ultimate Multisite memiliki sistem membership dan penagihan bawaan. Agar sistem penagihan kami berfungsi, kami telah mengintegrasikan gateway pembayaran paling umum yang digunakan dalam e-commerce. Gateway pembayaran default di Ultimate Multisite adalah _Stripe_ , _PayPal_ , dan Pembayaran Manual. Anda juga dapat menggunakan _WooCommerce_ , _GoCardless_ dan _Payfast_ untuk menerima pembayaran dengan menginstal add-on masing-masing.

## Pengaturan Dasar

Anda dapat mengonfigurasi salah satu gateway pembayaran ini di pengaturan pembayaran Ultimate Multisite. Anda dapat menemukannya dengan membuka **menu Ultimate Multisite > Pengaturan > Pembayaran.**

![Halaman pengaturan pembayaran di Ultimate Multisite yang menampilkan panel Pembayaran](/img/config/payments-settings-page.png)

Sebelum Anda menyiapkan gateway pembayaran, silakan lihat pengaturan pembayaran dasar yang dapat Anda konfigurasi:

**Paksa perpanjangan oto** **matis:** Ini akan memastikan bahwa pembayaran akan berulang secara otomatis pada akhir setiap siklus penagihan tergantung pada frekuensi penagihan yang dipilih pengguna.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 memeriksa apakah gateway aktif memiliki kredensial perpanjangan yang dapat digunakan kembali sebelum menyimpan membership berulang dengan auto-renewal diaktifkan. Kredensial perpanjangan dapat berupa subscription gateway, perjanjian penagihan, token vault tersimpan, atau metode pembayaran setara yang dapat digunakan kembali. Jika gateway melaporkan bahwa tidak ada kredensial yang dapat digunakan, Ultimate Multisite menyimpan membership tetapi menonaktifkan auto-renewal dan mencatat status kredensial yang hilang sehingga administrator atau alur dukungan dapat meminta pelanggan untuk mengotorisasi ulang pembayaran sebelum tanggal perpanjangan.

Ini mencegah membership terlihat akan auto-renew ketika gateway hanya dapat menagih pembayaran satu kali. Add-on gateway harus memastikan bahwa checkout berulang menyimpan kredensial yang dapat digunakan kembali, terutama ketika gateway mendukung mode pembayaran penangkapan satu kali dan vaulted/subscription.

**Izinkan uji coba tanpa metode pemba** **yaran:** Dengan opsi ini diaktifkan, klien Anda tidak perlu menambahkan informasi keuangan apa pun selama proses pendaftaran. Ini hanya akan diperlukan setelah masa uji coba berakhir.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Kirim invoice pada konfirmasi pembayaran:** Ini memberi Anda opsi apakah akan mengirim invoice setelah pembayaran atau tidak. Perhatikan bahwa pengguna akan memiliki akses ke riwayat pembayaran mereka di dashboard subsite mereka. Opsi ini tidak berlaku untuk Gateway Manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skema penomoran invoice:** Di sini, Anda dapat memilih antara kode referensi pembayaran atau skema nomor berurutan. Jika Anda memilih untuk menggunakan kode referensi pembayaran untuk invoice Anda, Anda tidak perlu mengonfigurasi apa pun. Jika Anda memilih untuk menggunakan skema nomor berurutan, Anda perlu mengonfigurasi **nomor invoice berikutnya** (Nomor ini akan digunakan sebagai nomor invoice untuk invoice berikutnya yang dihasilkan di sistem. Nomor ini bertambah satu setiap kali invoice baru dibuat. Anda dapat mengubahnya dan menyimpannya untuk mengatur ulang nomor berurutan invoice ke nilai tertentu) dan **prefiks nomor invoice.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Di mana menemukan gateway:

Anda dapat menyiapkan gateway pembayaran di halaman yang sama ( **Ultimate Multisite > Pengaturan > Pembayaran**). Tepat di bawah **gateway pembayaran aktif** , Anda akan dapat melihat: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ dan _Manual_.

![Bagian Gateway Pembayaran Aktif yang mencantumkan Stripe, Stripe Checkout, PayPal, dan Manual](/img/config/payments-active-gateways.png)

Kami memiliki artikel khusus untuk setiap gateway pembayaran yang akan memandu Anda melalui langkah-langkah penyiapannya, yang dapat Anda temukan pada tautan di bawah ini.

Anda dapat melihat dan mengedit detail pembayaran:

![Antarmuka edit pembayaran](/img/admin/payment-edit.png)

Berikut tampilan penuh halaman edit pembayaran:

![Antarmuka penuh edit pembayaran](/img/admin/payment-edit-full.png)

Berikut juga tampilan penuh pengaturan gateway pembayaran:

![Halaman penuh pengaturan gateway pembayaran](/img/config/settings-payments-gateways-full.png)

**Menyiapkan gateway Stripe**

**Menyiapkan gateway PayPal**** **

**Menyiapkan pembayaran manual**

Sekarang, jika Anda ingin menggunakan _WooCommerce_ , _GoCardless_ atau _Payfast_ sebagai gateway pembayaran Anda, Anda perlu **menginstal dan mengonfigurasi add-on mereka**.

### Cara menginstal add-on WooCommerce:

Kami memahami bahwa _Stripe_ dan _PayPal_ tidak tersedia di beberapa negara, yang membatasi atau menghambat pengguna Ultimate Multisite untuk menggunakan plugin kami secara efektif. Jadi kami membuat add-on untuk mengintegrasikan _WooCommerce,_ yang merupakan plugin e-commerce yang sangat populer. Pengembang di seluruh dunia membuat add-on untuk mengintegrasikan berbagai gateway pembayaran ke dalamnya. Kami memanfaatkan hal ini untuk memperluas gateway pembayaran yang dapat Anda gunakan dengan sistem penagihan Ultimate Multisite.

_**PENTING:** Ultimate Multisite: WooCommerce Integration mengharuskan WooCommerce diaktifkan setidaknya di situs utama Anda._

Pertama, silakan buka halaman add-on. Anda dapat menemukannya dengan membuka **Ultimate Multisite > Pengaturan**. Anda akan melihat tabel **Add-ons**. Klik **Periksa Add-ons Kami**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Setelah mengklik **Periksa Add-ons Kami** , Anda akan diarahkan ke halaman add-on. Di sini Anda dapat menemukan semua add-on Ultimate Multisite. Klik add-on **Ultimate Multisite: WooCommerce Integration**.

![Halaman add-on yang mencantumkan add-on Ultimate Multisite termasuk WooCommerce Integration](/img/addons/addons-page.png)

Sebuah jendela akan muncul dengan detail add-on. Cukup klik **Install Now**.

<!-- Tangkapan layar tidak tersedia: dialog detail add-on Ultimate Multisite WooCommerce Integration dengan tombol Install Now -->

Setelah instalasi selesai, Anda akan diarahkan ke halaman plugin. Di sini, cukup klik **Network Activate** dan add-on WooCommerce akan diaktifkan di jaringan Anda.

<!-- Tangkapan layar tidak tersedia: Halaman plugin dengan tautan Network Activate untuk add-on WooCommerce Integration -->

Setelah mengaktifkannya, jika Anda masih belum memasang dan mengaktifkan plugin WooCommerce di situs web Anda, Anda akan menerima pengingat.

<!-- Tangkapan layar tidak tersedia: Pemberitahuan admin yang mengingatkan administrator untuk memasang dan mengaktifkan plugin WooCommerce -->

Untuk membaca lebih lanjut tentang add-on WooCommerce Integration, **klik di sini**.

### Cara memasang add-on GoCardless:

Langkah-langkah untuk memasang add-on _GoCardless_ kurang lebih sama seperti add-on _WooCommerce_. Silakan buka halaman add-on dan pilih add-on **Ultimate Multisite: GoCardless Gateway**.

<!-- Tangkapan layar tidak tersedia: Halaman add-on dengan add-on Ultimate Multisite GoCardless Gateway disorot -->

Jendela add-on akan muncul. Klik **Install Now**.

<!-- Tangkapan layar tidak tersedia: dialog detail add-on Ultimate Multisite GoCardless Gateway dengan tombol Install Now -->

Setelah instalasi selesai, Anda akan diarahkan ke halaman plugin. Di sini, cukup klik **Network Activate** dan add-on _GoCardless_ akan diaktifkan di jaringan Anda.

<!-- Tangkapan layar tidak tersedia: Halaman plugin dengan tautan Network Activate untuk add-on GoCardless Gateway -->

Untuk mempelajari cara memulai dengan gateway _GoCardless_, **baca artikel ini**.

### Cara memasang add-on Payfast:

Buka halaman add-on dan pilih add-on **Ultimate Multisite: Payfast Gateway**.

<!-- Tangkapan layar tidak tersedia: Halaman add-on dengan add-on Ultimate Multisite Payfast Gateway disorot -->

Jendela add-on akan muncul. Klik **Install Now.**

<!-- Tangkapan layar tidak tersedia: dialog detail add-on Ultimate Multisite Payfast Gateway dengan tombol Install Now -->

Setelah instalasi selesai, Anda akan diarahkan ke halaman plugin. Di sini, cukup klik **Network Activate** dan add-on _Payfast_ akan diaktifkan di jaringan Anda.

<!-- Tangkapan layar tidak tersedia: Halaman plugin dengan tautan Network Activate untuk add-on Payfast Gateway -->
