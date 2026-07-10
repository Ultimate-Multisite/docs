---
title: Mlaku-mlaku ing Admin Panel
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Ngelilingi Panel Admin {#touring-the-admin-panel}

Ultimate Multisite tujuane supaya gampang lan ngerti dhewe, nanging karo alat sing kuat iki, bisa mbantu kanggo duwe tur panduan. Ayo kita mlaku-mlaku menyang halaman admin kanggo mbantu sampeyan ngrasakake kahanan.

## Dashboard {#dashboard}

**Dashboard** Ultimate Multisite nuduh laporan dasar lan analisis kalebu pendapatan, aktivitas situs, pertumbuhan anggota, jumlah pengunjung, lan data geografis.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Iki tampilan lengkap dashboard:

![Ultimate Multisite Dashboard full page](/img/admin/um-dashboard-full.png)

Lan bagian paling ngisor dashboard:

![Ultimate Multisite Dashboard bottom section](/img/admin/um-dashboard-bottom.png)

Iki uga tampilan lengkap dashboard jaringan:

![Network Dashboard full page](/img/admin/network-dashboard-full-page.png)

## Formulir Checkout {#checkout-forms}

**Checkout Forms** menehi sampeyan fleksibilitas kanggo nggawe halaman registrasi kustom. Sampeyan bisa ngowahi field, nyisip kelas lan skrip kustom, lan ngatur akses adhedhasar negara utawa lokasi pengunjung.

![Checkout Forms list](/img/admin/checkout-forms-list.png)

## Produk {#products}

Bagian **Products** yaiku papan kanggo nggawe rencana, paket, lan layanan sing beda kanggo jaringan sampeyan. Tentukan rega, frekuensi penagihan, lan batasan & kuota ing tingkat produk.

![Products list](/img/admin/products-list.png)

## Keanggotaan {#memberships}

Halaman **Memberships** nuduh kabeh langganan ing jaringan sampeyan. Tinjau lan edit rincian langganan kalebu rencana, produk, jumlah penagihan lan frekuensi, riwayat pembayaran, lan stempel waktu (timestamps).

![Memberships list](/img/admin/memberships-list.png)

## Pembayaran {#payments}

Halaman **Payments** nawakake tampilan ringkes riwayat pembayaran sakabeh jaringan sampeyan, karo informasi transaksi rinci kalebu produk lan jumlahé.

![Payments list](/img/admin/payments-list.png)

## Customers {#customers}

Halaman **Customers** nuduh kabeh anggota sing wis daftar ing jaringan sampeyan kanthi informasi dasar kaya jeneng, alamat email, kapan terakhir mlebu (last login), lan link "switch to" kanggo mlebu menyang subsite-e.

![Customers list](/img/admin/customers-list.png)

## Sites {#sites}

Halaman **Sites** nuduh kabeh subsite ing jaringan sampeyan kalebu template situs lan situs sing duwe pelanggan. Gampang ngatur domain sing wis dipet, batasan & quota, plugin lan theme, lan thumbnail situs.

![Sites list](/img/admin/sites-list.png)

## Domains {#domains}

Halaman **Domains** khusus kanggo domain kustom sing dipet menyang subsite. Minangka super admin, sampeyan bisa nambah utawa map domain kustom manual lan ndelok DNS records lan logé.

![Domains list](/img/admin/domains-list.png)

## Discount Codes {#discount-codes}

**Discount Codes** ngidini sampeyan nggawe kode kupon kanggo nawakake diskon marang end-user sampeyan. Tentukan nilai diskon lan targetkan user utawa kelompok tartamtu.

![Discount Codes list](/img/admin/discount-codes-list.png)

## Broadcasts {#broadcasts}

**Broadcasts** iku alat kanggo ngedukasi pengumuman utawa ngirim pesan pribadi marang user subsite sampeyan. Targetkan kelompok user tartamtu adhedhasar rencana utawa produk sing wis diresapi (subscribed).

![Broadcasts list](/img/admin/broadcasts-list.png)

## Settings {#settings}

Halaman **Settings** iku papan kanggo ngatur Ultimate Multisite — pengaturan registrasi, pembayaran, API lan webhooks, pemetaan domain, lan integrasi liyane.

Pengaturan konektor AI mencantumkan kumpulan penyedia OAuth yang didukung saat ini: Anthropic Max, OpenAI ChatGPT/Codex, dan Google AI Pro. Setiap kartu penyedia memungkinkan super admin untuk menghubungkan akun, menyegarkan akun yang tersimpan, menghapus akun berdasarkan email, dan menggunakan *manual OAuth fallback* ketika lingkungan yang terisolasi memblokir pengalihan browser. Opsi pengaturan *Cursor Pro setup* telah dihapus dari panel admin.

Akun ChatGPT/Codex mendukung penggunaan alat berbasis konektor di mana operasi mengizinkan alat (*tools*), jadi alur kerja admin yang bergantung pada operasi yang didukung oleh konektor dapat menggunakan perilaku alat Codex setelah akun OpenAI terhubung.

![Settings page](/img/admin/settings-general.png)

Berikut adalah tampilan lengkap halaman pengaturan umum:

![Settings general full page](/img/admin/settings-general-full.png)

Dan halaman pengaturan email:

![Settings emails full page](/img/admin/settings-emails-full.png)

Dan halaman pengaturan pembayaran:

![Settings payments full page](/img/admin/settings-payments-full.png)

Dan bagian bawah pengaturan pembayaran:

![Settings payments bottom section](/img/admin/settings-payments-bottom.png)

Dan halaman pengaturan situs:

![Settings sites full page](/img/admin/settings-sites-full.png)

## Events (Peristiwa) {#events}

Halaman **Events** menyimpan catatan semua peristiwa dan log di jaringan Anda. Ini melacak aktivitas seperti perubahan rencana (*plan changes*), pendaftaran, dan pergerakan lainnya — berguna untuk memantau *multisite* Anda.

![Events list](/img/admin/events-list.png)

## Webhooks {#webhooks}

**Webhooks** memungkinkan Anda mengirim data ke aplikasi lain. Berguna untuk mengirim data dari Ultimate Multisite ke platform seperti Zapier.

![Webhooks list](/img/admin/webhooks-list.png)
