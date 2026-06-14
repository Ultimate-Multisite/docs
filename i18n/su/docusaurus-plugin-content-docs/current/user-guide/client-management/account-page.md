---
title: Halaman Akun Klien
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Halaman Akun Klien Anda (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Lamun pelanggan berlangganan paket di jaringan Anda, mereka bakal dapat akses ke sebuah website dan dashboard-na dengan informasi penting soal pembayaran, keanggotaan, domain, batasan paket, dll...

Di tutorial ini, kami akan pandu kamu lewat halaman akun pelanggan dan kamu bisa lihat apa saja yang bisa dilihat dan dilakukan pelanggan di dalamnya.

## Halaman Akun

Halaman akun bisa diakses dengan klik **Account** di dalam dashboard pelanggan Anda.

![Menu Akun di dashboard pelanggan](/img/account-page/account-menu.png)

Di jaringan tenant kedaulatan (sovereign tenant networks), Ultimate Multisite v2.13.0 mempertahankan pengalaman manajemen pelanggan ini di situs utama. Lamun pelanggan buka akun, checkout, penagihan (billing), invoice, manajemen situs (site-management), ganti template (template-switching), atau pemetaan domain dari tenant kedaulatan, aksi tersebut akan kembali ke panel pelanggan situs utama supaya catatan penagihan dan keanggotaan jaringan tetap jadi yang paling benar.

Lamun pelanggan datang dari tenant kedaulatan, panel pelanggan situs utama bisa menyertakan tautan kembali ke situs tenant tersebut. Tautan kembali ini cuma bakal muncul lamun Ultimate Multisite bisa memvalidasi target kembalinya sebagai salah satu situs pelanggan, yang mencegah pengalihan acak sambil tetap menjaga alur kerja tenant.

![Tampilan umum halaman akun pelanggan](/img/account-page/overview.png)

Setelah pelanggan klik di sana, mereka akan lihat gambaran keanggotaan mereka, alamat penagihan (billing address), invoice, domain, batasan situs, dan juga bisa mengubah ****Site Template** (lamun diizinkan di jaringan Anda).

Mereka juga bisa mengubah keanggotaan ke paket lain, atau membeli paket/layanan lain yang Anda tawarkan. Mari kita lihat setiap bagiannya satu per satu.

### Gambaran Keanggotaan Anjeun:

Blok kahiji di handapkeun ngaran situs pelanggan anjeun nunjukkeun gambaran umum rencana je layanan/paket anu geus dibeli bareng éta. Blok éta ogé nunjukkeun nomer keanggotaan, jumlah awal anu dibayar pikeun éta, sabaraha harga rencana je layanan/paketna, sarta sabaraha kali manéhna ditagih kanggo keanggotaan éta. Maranéhna ogé bisa ningali upami keanggotaan éta **Aktif**, **Kedaluwarsa** atawa **Dibatalkan**.

![Gambaran umum keanggotaan nunjukkeun rencana, jumlah, je rincian tagihan](/img/account-page/membership-card.png)

Di handap blok ieu, pelanggan anjeun bisa ningali blok **Tentang Situs Ieu** je **Batasan Situs**. Blok-blok ieu nunjukkeun sagala batasan anu aya dina rencana maranéhna: ruang disk, postingan, halaman, kunjungan, jsb. Batasan ieu bisa diatur dina saban halaman rencana di **Ultimate Multisite > Products**.

![Blok Tentang Situs je Batasan Situs nunjukkeun batasan rencana](/img/account-page/site-limits.png)

Di sisi kiwarana **Keanggotaan Anjeun**, pelanggan bisa klik **Ubah**. Ieu bakal nunjukkeun sagala rencana je paket/layanan anu aya. Upami maranéhna milih rencana séjén, batasan pikeun rencana éta bakal ngaganti batasan keanggotaan ayeuna - teu penting upami maranéhna ngubah jadi leuwih rendah (downgrading) atawa leuwih luhur (upgrading).

Ayeuna, upami pelanggan anjeun milih pikeun meuli paket atawa layanan kanggo keanggotaan ayeuna - saperti ruang disk leuwih atawa kunjungan leuwih loba - keanggotaan ayeuna moal dirobah tapi ngan ukur paket anyar anu bakal ditambihan.

Catetan yén kode kupon teu bisa ditambah dina halaman ganti keanggotaan ieu. Upami pelanggan geus ngagunake kode kupon dina pembelian keanggotaan kahiji, kode éta ogé bakal berlaku pikeun keanggotaan anyar ieu.

### Ngabaharui Alamat Tagihan:

Di halaman akun, pelanggan Anda juga bisa memperbarui alamat penagihan mereka. Mereka hanya perlu mengklik **Update** di sebelah _Billing Address_.

![Bagian Alamat Penagihan dengan tombol Update](/img/account-page/billing-address.png)

Sebuah jendela baru akan muncul untuk pelanggan Anda. Yang perlu mereka lakukan hanyalah mengisi alamat baru dan mengklik _Save Changes_.

![Form Perubahan Alamat Penagihan](/img/account-page/billing-address-form.png)

### Mengubah Template Situs:

Supaya pelanggan Anda bisa mengubah template situs, Anda perlu masuk ke **Ultimate Multisite > Settings > Sites** dan nyalakan opsi **Allow Template Switching**.

Juga, di **Ultimate Multisite > Products**, pilih paket Anda dan buka tab **Site Templates**. Pastikan opsi **Allow Site Templates** sudah dinyalakan dan pada **Site Template Selection Mode**, opsi **Choose Available Site Templates** sudah terpilih.

![Tab template situs produk dengan mode pemilihan template](/img/config/product-site-templates.png)

Anda akan bisa melihat semua template situs yang tersedia di website Anda. Pilih mana yang ingin Anda sediakan dan mana yang tidak ingin tersedia untuk pelanggan yang berlangganan paket ini. Perlu diingat bahwa opsi ini juga memengaruhi formulir checkout, jadi setiap template yang dipilih sebagai **Not Available** tidak akan muncul di halaman pendaftaran untuk paket ini.

Sekarang pelanggan Anda bisa mengklik **Change Site Template** di dalam halaman akun mereka.

![Tombol Ganti Template Situs di halaman akun](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 menampilkan panel ganti template yang sudah didesain ulang. Panel ini dimulai dengan kartu **current-template card** sehingga pelanggan bisa melihat template mana yang sedang aktif sebelum mereka memilih penggantinya.

Sababaraha template situs anu aya kanggo rencana éta bakal tetep katingali nalika pelanggan ngabédake pilihan maranéhna. Ieu ngabantosan maranéhna bisa mawa bandingkeun template anu diidinan pikeun rencana maranéhna tanpa hilap ningali pilihan ayeuna.

![Daftar template situs anu aya pikeun rencana éta](/img/config/site-templates-list.png)

Sanggeus milih nu rék diganti, maranéhna bakal dipénta pikeun ngabuktikeun ganti éta.

![Dialog konfirmasi ganti template situs](/img/account-page/template-switch-confirm.png)

Sanggeus nyaluykeun (toggle on) konfirmasi jeung klik **Process Switch**, template situs anyar bakal digunake dina situs pelanggan anjeun.

Pelanggan ogé bisa ngagunake **Reset current template** tina panel ieu lamun maranéhna butuh ngabalikeun situs ka template anu ayeuna ditugaskeun. Saperti ganti ka template séjén, ngreset template bisa nulis ulang konten situs, jadi pelanggan ngan ukur kudu ngabuktikeun éta nalika maranéhna ngarti tindakan resetna.

### Nambah Domain Kustom:

Pelanggan anjeun ogé bakal boga pilihan pikeun nambahan domain kustom pikeun rencana ieu dina halaman akun maranéhna. Pikeun ngidinan pelanggan anjeun ngagunake domain kustom, ka **Ultimate Multisite > Settings >** **Domain Mapping**.

Nyalahkeun (toggle on) pilihan **Enable Domain Mapping**. Ieu bakal ngidinan pelanggan anjeun ngagunake domain kustom dina tingkat jaringan.

Ulah poho ogé pikeun ngcek upami pemetaan domain geus diaktifkeun dumasar produk - sabab anjeun bisa ngabatas hiji produk supaya teu ngidinan pelanggan anjeun ngagunake domain kustom.

Ka **Ultimate Multisite > Products**. Pilih rencana anu dipikacinta jeung ka tab **Custom Domains**. Nyalahkeun (toggle on) pilihan **Allow Custom Domains**.

![Tab Domain Kustom jeung toggle Allow Custom Domains](/img/config/product-custom-domains.png)

Ieu bakal ngajak sadayana pelanggan anu langganan paket khusus ieu bisa nganggo domain kustom. Ayeuna, di halaman Account, pelanggan anjeun bisa nambahan domain kustom ku klik **Add Domain**.

![Tombol Add Domain di halaman account](/img/account-page/add-domain-button.png)

Jendela kahiji anu dibuka bakal nunjukkeun pesan ka pelanggan anjeun kumaha cara ngarobah DNS record supados domain kustom ieu bisa dipaké dina jaringan anjeun.

![Instruksi DNS ditunjukeun nalika nambahan domain kustom](/img/account-page/add-domain-dns.png)

Pesan ieu bisa diubah (ku anjeun) di **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Pengaturan Add New Domain Instructions dina Domain Mapping](/img/config/settings-domain-mapping.png)

Ieu pandangan lengkap halaman pengaturan domain mapping:

![Halaman pengaturan domain mapping lengkap](/img/config/settings-domain-mapping-full.png)

Sanggeus klik **Next Step**, pelanggan anjeun bisa nambahan nama domain kustomna jeung milih upami domain kustom ieu bakal jadi anu utama. Perhatosan, pelanggan anjeun bisa nganggo leuwih ti hiji domain kustom pikeun website maranéhna, jadi maranéhna bisa milih mana anu bakal jadi anu utama.

![Pemasukan nama domain kustom jeung pilihan domain utama](/img/account-page/add-domain-primary.png)

Sanggeus klik **Add Domain**, domain éta bakal ditambahan ka akun pelanggan anjeun. Sagala nu kudu dilakukeun ayeuna nyaéta ngarobah DNS record domain kustom ieu dina registrar domain maranéhna.

### Ngarobah Password:

Di dalam dashboard account, pelanggan anjeun ogé bisa ngarobah passwordna ku klik **Change Password**.

![Tombol Change Password di halaman account](/img/account-page/change-password-button.png)

Ieu bakal nunjukkeun jendela anyar di mana pelanggan kudu ngisi sandi anu ayeuna jeung sandi anyar anu dipikahoyongna.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Zona Bahaya:

Kami ogé miboga dua pilihan anu ditunjukeun dina bagian **Danger Zone**: **Hapus Situs** jeung **Hapus Akun**. Dua tindakan ieu aya di bagian Danger Zone sabab tindakan iki teu bisa dibalikkeun deui. Upami pelanggan ngahapus situs atawa akunna, maranéhna moal bisa balik deui.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Upami pelanggan klik salah sahiji tina dua pilihan ieu, bakal ditunjukeun jendela di mana maranéhna kudu ngaktifkeun pilihan pikeun ngahapus situs atawa akun jeung bakal ditepikeun peringatan yén tindakan ieu teu bisa dibalikkeun deui.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Upami maranéhna ngahapus situsna, akun jeung keanggotaan maranéhna tetep teu diubah. Maranéhna ngan bakal kehilangan sadaya konten dina situsna. Upami maranéhna ngahapus akunna, sadaya situs, keanggotaan, jeung informasi ngeunaan akun ieu bakal ilang.
