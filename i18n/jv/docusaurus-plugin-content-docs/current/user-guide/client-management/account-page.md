---
title: Halaman Akun Klien
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Halaman Akun Klien Anda (v2) {#your-clients-account-page-v2}

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Ketika pelanggan berlangganan paket di jaringan Anda, mereka akan mendapatkan akses ke sebuah website dan dasbornya dengan informasi penting mengenai pembayaran, keanggotaan, domain, batasan paket, dan lain-lain...

Dalam tutorial ini, kami akan memandu Anda melalui halaman akun pelanggan dan Anda akan melihat apa yang bisa dilihat dan dilakukan pelanggan di dalamnya.

## Halaman Akun (The Account Page) {#the-account-page}

Halaman akun bisa diakses dengan mengklik **Account** di dalam dasbor pelanggan Anda.

![Menu Akun di dasbor pelanggan](/img/account-page/account-menu.png)

Pada jaringan tenant kedaulatan (*sovereign tenant networks*), Ultimate Multisite v2.13.0 mempertahankan pengalaman manajemen pelanggan ini di situs utama (*main site*). Jika pelanggan membuka akun, *checkout*, penagihan (*billing*), faktur (*invoice*), manajemen situs (*site-management*), penggantian templat (*template-switching*), atau pemetaan domain dari tenant kedaulatan, tindakan tersebut akan mengarah kembali ke panel pelanggan situs utama sehingga catatan penagihan dan keanggotaan jaringan tetap menjadi yang paling berwibawa.

Ketika pelanggan datang dari tenant kedaulatan, panel pelanggan situs utama bisa menyertakan tautan kembali (*return link*) ke situs tenant. Tautan kembali ini hanya ditampilkan ketika Ultimate Multisite dapat memvalidasi target kembalinya sebagai salah satu situs pelanggan, yang mencegah pengalihan acak sambil tetap mempertahankan alur kerja tenant.

![Tampilan umum halaman akun pelanggan](/img/account-page/overview.png)

Setelah pelanggan mengkliknya, mereka akan melihat gambaran umum tentang keanggotaan mereka, alamat penagihan (*billing address*), faktur (*invoices*), domain, batasan situs, dan juga bisa mengubah ****Site Template** (jika diizinkan di jaringan Anda).

Mereka juga bisa mengubah keanggotaan ke paket lain, atau membeli paket atau layanan lain yang Anda tawarkan. Mari kita lihat setiap bagian secara terpisah.

### Tinjauan Keanggotaan Sampeyan: {#your-membership-overview}

Blok pertama tepat di bawah nama website pelanggan nun bakal ngeni ringkasan rencana dan layanan/paket sing wis dibeli bareng karo itu. Blok kuwi uga nuduhake nomor keanggotaan, jumlah awal sing wis dibayar kanggo keanggotaan kuwi, piye rega rencana lan layanan/paket kasebut, lan berapa kali pembayaran kanggo keanggotaan iki. Pelanggan uga bisa weruh yen keanggotaan kuwi **Aktif**, **Kedaluwarsa** utawa **Dibatalkan**.

![Tinjauan keanggotaan ngeni rencana, jumlah, lan detail penagihan](/img/account-page/membership-card.png)

Tepat di bawah blok iki, pelanggan bisa weruh blok **Tentang Situs Ini** lan **Batas Situs**. Blok-blok iki nuduhake kabeh batasan sing ana ing rencana kuwi: ruang disk, postingan, halaman, kunjungan, lsp... Batasan-batasan iki bisa diatur ing saben halaman rencana ing **Ultimate Multisite > Products**.

![Blok Tentang Situs Ini lan Batas Situs ngeni batasan rencana](/img/account-page/site-limits.png)

Ing sisi kanan **Keanggotaan Sampeyan**, pelanggan bisa klik **Ubah**. Iki bakal nuduhake kabeh rencana lan paket/layanan sing wis ana. Yen dheweke milih rencana liyane, batasan kanggo rencana kuwi bakal diganti karo batasan keanggotaan saiki - ora masalah yen lagi *downgrade* utawa *upgrade*.

Saiki, yen pelanggan milih kanggo tuku paket utawa layanan kanggo keanggotaan saiki iki - kaya ruang disk luwih akeh utawa kunjungan luwih akeh - keanggotaan saiki ora bakal diubah nanging mung paket anyar sing bakal ditambahi.

Cathetan, kode kupon ora bisa ditambah ing halaman perubahan keanggotaan iki. Yen pelanggan wis nganggo kode kupon nalika tuku keanggotaan pertama, kode kupon kasebut uga bakal berlaku kanggo keanggotaan anyar iki.

### Ngupdate Alamat Penagihan: {#updating-the-billing-address}

Ing halaman akun, pelangganmu uga bisa ngubah alamat penagihan (billing address). Mereka cukup klik **Update** di sebelah _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Jendela baru akan muncul ke pelangganmu. Yang perlu mereka lakukan cuma mengisi alamat baru dan klik _Save Changes_.

![Update billing address form](/img/account-page/billing-address-form.png)

### Mengubah Template Situs: {#changing-the-site-template}

Supaya pelanggan bisa ganti template situsnya, kamu perlu masuk ke **Ultimate Multisite > Settings > Sites** terus nyalakan opsi **Allow Template Switching**.

Terus, di **Ultimate Multisite > Products**, pilih paketmu dan pergi ke tab **Site Templates**. Pastikan opsi **Allow Site Templates** sudah dinyalakan dan di **Site Template Selection Mode**, opsi **Choose Available Site Templates** sudah terpilih.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Kamu akan bisa lihat semua template situs yang tersedia di website kamu. Pilih mana saja yang mau kamu sediakan dan mana yang tidak mau tersedia buat pelanggan yang berlangganan paket ini. Perlu diingat, opsi ini juga memengaruhi formulir checkout, jadi template yang dipilih sebagai **Not Available** tidak akan muncul di halaman registrasi untuk paket ini.

Sekarang pelangganmu bisa klik **Change Site Template** di dalam halaman akun mereka.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 menampilkan panel ganti template yang sudah didesain ulang. Panel ini dimulai dengan kartu **current-template card** supaya pelanggan bisa lihat template mana yang sedang aktif sebelum mereka memilih penggantinya.

Sebuah grid template situs yang tersedia akan tetap terlihat terus saat pelanggan melihat pilihan mereka. Ini membantu mereka membandingkan template yang diizinkan untuk paket mereka tanpa kehilangan pandangan terhadap pilihan yang sedang mereka lihat.

![Daftar template situs yang tersedia untuk paket tersebut](/img/config/site-templates-list.png)

Setelah memilih yang ingin diubah, mereka akan diminta untuk mengonfirmasi perubahan tersebut.

![Dialog konfirmasi peralihan template situs](/img/account-page/template-switch-confirm.png)

Setelah Anda menyalakan konfirmasi dan mengklik **Process Switch**, template situs baru akan digunakan di website pelanggan Anda.

Pelanggan juga bisa menggunakan **Reset current template** dari panel ini ketika mereka perlu mengatur ulang situs kembali ke template yang saat ini ditetapkan. Seperti saat beralih ke template lain, mereset template bisa menimpa konten situs, jadi pelanggan hanya boleh mengonfirmasinya jika mereka mengerti tindakan reset tersebut.

### Menambahkan Domain Kustom: {#adding-custom-domains}

Pelanggan Anda juga akan punya pilihan untuk menambahkan domain kustom untuk paket ini di halaman akun mereka. Untuk mengizinkan pelanggan Anda menggunakan domain kustom, buka **Ultimate Multisite > Settings >** **Domain Mapping**.

Aktifkan opsi **Enable Domain Mapping**. Ini akan memungkinkan pelanggan Anda menggunakan domain kustom di tingkat jaringan.

Jangan lupa juga untuk memeriksa apakah pemetaan domain sudah aktif berdasarkan produk - karena Anda bisa membatasi suatu produk agar tidak mengizinkan pelanggan Anda menggunakan domain kustom.

Buka **Ultimate Multisite > Products**. Pilih paket pilihan Anda dan buka tab **Custom Domains**. Aktifkan opsi **Allow Custom Domains**.

![Tab Domain Kustom dengan tombol Allow Custom Domains](/img/config/product-custom-domains.png)

Iki bakal ngidini kabeh pelanggan sing wis langganan paket khusus iki bisa nggunakake domain kustom. Saiki, ing halaman Akun (Account page), pelangganmu bisa nambah domain kustom kanthi klik **Add Domain**.

![Tombol Add Domain di halaman akun](/img/account-page/add-domain-button.png)

Jendela kapisan sing mbukak bakal nuduhake pesen marang pelangganmu babagan carane ngowahi catatan DNS supaya domain kustom iki bisa kerja ing jaringan sampeyan.

![Instruksi DNS ditunjukkan saat menambahkan domain kustom](/img/account-page/add-domain-dns.png)

Pesen iki bisa diubah (dening sampeyan) ing **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Pengaturan Add New Domain Instructions di Domain Mapping](/img/config/settings-domain-mapping.png)

Iki tampilan lengkap saka halaman pengaturan domain mapping:

![Tampilan penuh pengaturan domain mapping](/img/config/settings-domain-mapping-full.png)

Sawise klik **Next Step**, pelangganmu bisa nambah nama domain kustom lan milih yen domain kustom iki bakal dadi sing utama (primary). Cathet, pelangganmu bisa nggunakake luwih saka siji domain kustom kanggo website-website dewe, mula dheweke bisa milih sing arep dadi sing utama.

![Entri nama domain kustom dengan opsi domain utama](/img/account-page/add-domain-primary.png)

Sawise klik **Add Domain**, domain bakal ditambahi ing akun pelangganmu. Kabeh sing kudu ditindakake saiki yaiku ngowahi catatan DNS saka domain kustom iki ing registrar domain dewe.

### Ngowahi Password: {#changing-password}

Ing dashboard akun, pelangganmu uga bisa ngowahi password kanthi klik **Change Password**.

![Tombol Change Password di halaman akun](/img/account-page/change-password-button.png)

Iki bakal nampilake jendela anyar sing kudu diisi dening pelanggan sampeyan kanthi password saiki lan banjur ngisi password anyar sing arep digunakake.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Zona Bahaya: {#danger-zone}

Kita uga duwe rong pilihan sing ditunjuka ing bagian **Danger Zone**: **Hapus Situs** lan **Hapus Akun**. Keduanya ana ing bagian Danger Zone amarga tindakan iki ora bisa diulangi maneh. Yen pelanggan ngapus situs utawa akuné, dhewe ora bakal bisa bali maneh.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Yen pelanggan klik salah siji saka rong pilihan iki, bakal ditunjuka jendela sing kudu diaktifake kanggo ngapus situs utawa akun lan bakal diwenehi peringatan yen tindakan iki ora bisa dibatalkan maneh.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Yen dhewe ngapus situsé, akun lan keanggotane tetep ora kena diubah. Dhewe mung bakal kehilangan kabeh konten ing situsé. Yen dhewe ngapus akuné, kabeh situs, keanggotaan, lan informasi babagan akun iki bakal ilang.
