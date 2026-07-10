---
title: Halaman Account Klien
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Halaman Account Klien Anda (v2) {#your-clients-account-page-v2}

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Ketika pelanggan berlangganan sebuah paket di jaringan Anda, mereka mendapatkan akses ke sebuah situs web dan Dashboard-nya dengan informasi penting mengenai pembayaran, keanggotaan, domain, batasan paket, dll...

Dalam tutorial ini, kami akan memandu Anda melalui halaman Account pelanggan dan Anda akan melihat apa yang dapat dilihat dan dilakukan pelanggan Anda di dalamnya.

## Halaman Account {#the-account-page}

Halaman Account dapat diakses dengan mengeklik **Account** di dalam Dashboard pelanggan Anda.

![Menu Account di Dashboard pelanggan](/img/account-page/account-menu.png)

Pada jaringan tenant berdaulat, Ultimate Multisite v2.13.0 mempertahankan pengalaman pengelolaan pelanggan ini di situs utama. Jika pelanggan membuka tindakan Account, checkout, penagihan, faktur, pengelolaan situs, pergantian template, atau pemetaan domain dari tenant berdaulat, tindakan tersebut mengarah kembali ke panel pelanggan situs utama sehingga catatan penagihan jaringan dan keanggotaan tetap menjadi sumber otoritatif.

Ketika pelanggan datang dari tenant berdaulat, panel pelanggan situs utama dapat menyertakan tautan kembali ke situs tenant. Tautan kembali hanya ditampilkan ketika Ultimate Multisite dapat memvalidasi target kembali sebagai salah satu situs milik pelanggan, yang mencegah pengalihan sembarang sambil mempertahankan alur kerja tenant.

![Ikhtisar halaman Account pelanggan](/img/account-page/overview.png)

Setelah pelanggan mengekliknya, mereka akan melihat ikhtisar keanggotaan, alamat penagihan, faktur, domain, batasan situs, dan juga akan dapat mengubah ****Template Situs** (jika diizinkan di jaringan Anda)**.

Mereka juga dapat mengubah keanggotaan ke paket lain, atau membeli paket atau layanan lain yang Anda tawarkan. Mari kita lihat setiap bagian secara terpisah.

### Ikhtisar Keanggotaan Anda: {#your-membership-overview}

Blok pertama tepat di bawah nama situs web pelanggan Anda menampilkan ikhtisar paket saat ini dan layanan/paket yang dibeli bersamanya. Blok ini juga menampilkan nomor keanggotaan, jumlah awal yang dibayarkan untuknya, berapa biaya paket dan layanan/paket apa pun, serta berapa kali mereka ditagih untuk keanggotaan ini. Mereka juga dapat melihat apakah keanggotaan tersebut **Aktif** , **Kedaluwarsa** atau **Dibatalkan**.

![Ikhtisar keanggotaan yang menampilkan paket, jumlah, dan detail penagihan](/img/account-page/membership-card.png)

Tepat di bawah blok ini, pelanggan Anda dapat melihat blok **Tentang Situs Ini** dan **Batas Situs**. Blok-blok ini menampilkan semua batasan yang berlaku pada paket mereka: ruang disk, pos, halaman, kunjungan, dll... Batasan ini dapat dikonfigurasi di setiap halaman paket pada **Ultimate Multisite > Produk**.

![Blok Tentang Situs Ini dan Batas Situs yang menampilkan batasan paket](/img/account-page/site-limits.png)

Di sisi kanan **Keanggotaan Anda** , pelanggan dapat mengeklik **Ubah**. Ini akan menampilkan semua paket dan paket/layanan yang tersedia. Jika mereka memilih paket lain, batasan untuk paket tersebut akan berlaku menggantikan batasan keanggotaan saat ini - tidak peduli apakah mereka menurunkan atau meningkatkan paketnya.

Sekarang, jika pelanggan Anda memilih untuk membeli paket atau layanan untuk keanggotaan saat ini - seperti lebih banyak ruang disk atau kunjungan - keanggotaan saat ini tidak akan diubah, tetapi hanya paket baru yang akan ditambahkan ke dalamnya.

Perhatikan bahwa kode kupon tidak dapat ditambahkan di halaman perubahan keanggotaan ini. Jika pelanggan menggunakan kode kupon pada pembelian keanggotaan pertama, kode tersebut juga akan berlaku untuk keanggotaan baru ini.

### Memperbarui Alamat Penagihan: {#updating-the-billing-address}

Pada halaman Account, pelanggan Anda juga dapat memperbarui alamat penagihan mereka. Mereka hanya perlu mengeklik **Perbarui** di sebelah _Alamat Penagihan_.

![Bagian Alamat Penagihan dengan tombol Perbarui](/img/account-page/billing-address.png)

Jendela baru akan muncul untuk pelanggan Anda. Yang perlu ia lakukan hanyalah mengisi alamat baru dan mengeklik _Simpan Perubahan_.

![Formulir pembaruan alamat penagihan](/img/account-page/billing-address-form.png)

### Mengubah Template Situs: {#changing-the-site-template}

Untuk mengizinkan pelanggan Anda mengubah template situs mereka, Anda perlu membuka **Ultimate Multisite > Pengaturan > Situs** dan mengaktifkan opsi **Izinkan Pergantian Template**.

Selain itu, pada **Ultimate Multisite > Produk**, pilih paket Anda dan buka tab **Template Situs**. Pastikan opsi **Izinkan Template Situs** diaktifkan dan pada **Mode Pemilihan Template Situs** , opsi **Pilih Template Situs yang Tersedia** dipilih.

![Tab template situs produk dengan mode pemilihan template](/img/config/product-site-templates.png)

Anda akan dapat melihat semua template situs yang tersedia di situs web Anda. Pilih mana yang ingin Anda sediakan dan mana yang tidak ingin Anda sediakan untuk pelanggan yang berlangganan paket ini. Perhatikan bahwa opsi ini juga memengaruhi formulir checkout, sehingga template apa pun yang dipilih sebagai **Tidak Tersedia** tidak akan muncul di halaman pendaftaran untuk paket ini.

Sekarang pelanggan Anda dapat mengeklik **Ubah Template Situs** di dalam halaman Account mereka.

![Tombol Ubah Template Situs pada halaman Account](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 menampilkan panel pergantian template yang didesain ulang. Panel ini dimulai dengan **kartu template saat ini** sehingga pelanggan dapat melihat template mana yang aktif sebelum mereka memilih pengganti.

Grid template situs yang tersedia tetap terlihat secara persisten saat pelanggan meninjau pilihan mereka. Ini membantu mereka membandingkan template yang diizinkan untuk paket mereka tanpa kehilangan pandangan terhadap pilihan saat ini.

![Daftar template situs yang tersedia untuk paket](/img/config/site-templates-list.png)

Setelah memilih template yang ingin mereka gunakan untuk beralih, mereka akan diminta untuk mengonfirmasi perubahan.

![Dialog konfirmasi pergantian template situs](/img/account-page/template-switch-confirm.png)

Setelah mengaktifkan konfirmasi dan mengeklik **Proses Pergantian** , template situs baru akan digunakan di situs web pelanggan Anda.

Pelanggan juga dapat menggunakan **Reset current template** dari panel ini ketika mereka perlu mengatur ulang situs kembali ke template yang saat ini ditetapkan. Seperti beralih ke template lain, mengatur ulang template dapat menimpa konten situs, jadi pelanggan hanya boleh mengonfirmasinya ketika mereka memahami tindakan reset tersebut.

### Menambahkan Domain Kustom: {#adding-custom-domains}

Pelanggan Anda juga akan memiliki opsi untuk menambahkan domain kustom untuk paket ini di halaman Account mereka. Untuk mengizinkan pelanggan Anda menggunakan domain kustom, buka **Ultimate Multisite > Settings >** **Domain Mapping**.

Aktifkan opsi **Enable Domain Mapping**. Ini akan memungkinkan pelanggan Anda menggunakan domain kustom pada tingkat jaringan.

Jangan lupa juga untuk memeriksa apakah domain mapping diaktifkan berdasarkan produk - karena Anda dapat membatasi produk agar tidak mengizinkan pelanggan Anda menggunakan domain kustom.

Buka **Ultimate Multisite > Products**. Pilih paket yang Anda inginkan dan buka tab **Custom Domains**. Aktifkan opsi **Allow Custom Domains**.

![Tab Custom Domains dengan toggle Allow Custom Domains](/img/config/product-custom-domains.png)

Ini akan memungkinkan semua pelanggan yang berlangganan paket spesifik ini untuk menggunakan domain kustom. Sekarang, pada halaman Account, pelanggan Anda dapat menambahkan domain kustom dengan mengklik **Add Domain**.

![Tombol Add Domain di halaman account](/img/account-page/add-domain-button.png)

Jendela pertama yang terbuka akan menampilkan pesan kepada pelanggan Anda yang menginstruksikan mereka tentang cara memperbarui catatan DNS mereka agar domain kustom ini dapat berfungsi di jaringan Anda.

![Instruksi DNS yang ditampilkan saat menambahkan domain kustom](/img/account-page/add-domain-dns.png)

Pesan ini dapat diedit (oleh Anda) di **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Pengaturan Add New Domain Instructions di Domain Mapping](/img/config/settings-domain-mapping.png)

Berikut tampilan lengkap halaman pengaturan domain mapping:

![Halaman lengkap pengaturan domain mapping](/img/config/settings-domain-mapping-full.png)

Setelah mengklik **Next Step** , pelanggan Anda dapat menambahkan nama domain kustom mereka dan memilih apakah domain kustom ini akan menjadi yang utama. Perhatikan bahwa pelanggan Anda dapat menggunakan lebih dari satu domain kustom untuk situs web mereka, sehingga mereka dapat memilih mana yang akan menjadi yang utama.

![Entri nama domain kustom dengan opsi domain utama](/img/account-page/add-domain-primary.png)

Setelah mengklik **Add Domain** , domain tersebut akan ditambahkan ke akun pelanggan Anda. Yang perlu mereka lakukan sekarang adalah mengubah catatan DNS domain kustom ini di registrar domain mereka.

### Mengubah Kata Sandi: {#changing-password}

Di dalam Dashboard account, pelanggan Anda juga dapat mengubah kata sandi mereka dengan mengklik **Change Password**.

![Tombol Change Password di halaman account](/img/account-page/change-password-button.png)

Ini akan menampilkan jendela baru tempat pelanggan Anda perlu mengisi kata sandi mereka saat ini lalu mengisi kata sandi baru yang ingin mereka gunakan.

![Formulir ubah kata sandi dengan bidang kata sandi saat ini dan baru](/img/account-page/change-password-form.png)

### Danger Zone: {#danger-zone}

Kami juga memiliki dua opsi yang ditampilkan di bagian **Danger Zone**: **Delete Site** dan **Delete Account**. Keduanya berada di bagian Danger Zone karena dua tindakan ini tidak dapat dibatalkan. Jika pelanggan Anda menghapus situs web mereka atau akun mereka, mereka tidak dapat memulihkannya kembali.

![Danger Zone dengan opsi Delete Site dan Delete Account](/img/account-page/danger-zone.png)

Jika pelanggan Anda mengklik salah satu dari dua opsi ini, mereka akan ditampilkan jendela tempat mereka perlu mengaktifkan opsi untuk menghapus situs web atau akun dan mereka akan diperingatkan bahwa tindakan ini tidak dapat dibatalkan.

![Dialog konfirmasi Delete Site](/img/account-page/delete-site-confirm.png)

![Dialog konfirmasi Delete Account](/img/account-page/delete-account-confirm.png)

Jika mereka menghapus situs web mereka, akun dan membership mereka akan tetap tidak tersentuh. Mereka hanya akan kehilangan semua konten di situs web mereka. Jika mereka menghapus akun mereka, semua situs web, membership, dan informasi terkait akun ini akan hilang.
