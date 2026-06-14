---
title: Ngirim Email sareng Broadcast
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Ngirim Email jeung Broadcast (v2)

_**CATATAN PENTING: Artikel ieu merujuk kana Ultimate Multisite versi 2.x.**_

Ultimate Multisite miboga fitur anu bakal ngajadikeun anjeun bisa komunikasi jeung pelanggan ku ngirim email ka user tartamtu atawa kelompok user, sarta ngirim patokan dina dashboard admin maranéhna pikeun ngabohongkeun pengumuman.

## Tambah patokan admin kana dashboard pelanggan jeung Broadcasts

Ngagunake fitur broadcast Ultimate Multisite, anjeun bisa nambahan **admin notices** ka dashboard admin subsite user anjeun.

Ieu kacida gampangnya lamun anjeun butuh ngabohongkeun hiji hal saperti pemeliharaan sistem atawa nawarkeun produk atawa jasa anyar ka user anu geus aya. Ieu mangrupa tampilan patokan admin dina dashboard user anjeun.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Kanggo ngamimitian patokan admin, mindah ka dashboard admin jaringan anjeun sarta di handap menu **Ultimate Multisite**, anjeun bakal manggihan pilihan **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Anjeun ogé bisa ngedit broadcast anu geus aya:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Ti halaman ieu, klik tombol **Add Broadcast** di luhur.

Ieu bakal ngabuka jendela modal Add broadcast di mana anjeun bisa milih jenis broadcast naon anu dipikahkeun pikeun dikirim.

Lanjut waé sareng pilih **Message** tuluy klik tombol **Next Step**.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Jendela salajengna bakal nanya anjeun milih antara **Target customer** atawa **Target product**. Perhatosan, anjeun bisa milih leuwih ti hiji user atawa leuwih ti hiji produk.

Munkeun pikeun nyari akun pengguna atawa produk, anjeun kudu mimiti ngetik kata kunci di dina kolom éta.

Di handap kolom **Message type**, anjeun bisa milih warna notifikasina. Ieu bakal nguatkeun pentingna pesen anjeun.

Terus anjeun bisa klik **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Jendela salajengna nyaéta tempat anjeun bisa mimiti nyusun pesen ku cara ngagih subjek jeung konten/pesen anu dipikahokeun ka para pengguna.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Sanggeus ngadamel pesen anjeun, anjeun bisa neken tombol **Send**.

Jeung éta waé. Notifikasi admin bakal langsung muncul di dashboard pengguna anjeun.

## Kirim email ka pelanggan anjeun

Ngagunake fitur broadcast Ultimate Multisite, anjeun bisa ngirim email ka para pengguna. Anjeun boga pilihan pikeun ngirim email ngan ka pengguna tartamtu atawa ngarancang kelompok pengguna tartamtu dumasar kana produk atawa rencana anu keur dipaké ku maranéhna.

Kanggo mimiti broadcast email, mindah ka dashboard admin jaringan anjeun jeung di handap menu Ultimate Multisite, anjeun bakal nempo pilihan Broadcast.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Ti halaman ieu, klik tombol **Add broadcast** di luhur.

Ieu bakal ngabuka jendela modal Add broadcast di mana anjeun bisa milih jenis broadcast naon anu dipikahokeun pikeun dikirim. Terus pilih **Email** tuluy klik tombol **Next Step**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Jendela salajengna bakal nanya ka anjeun **Target customer** atawa **Target product**. Perhatosan, anjeun bisa milih leuwih ti hiji pengguna atawa leuwih ti hiji produk.

Supaya bisa nyari akun pengguna atau produk, kamu perlu mulai mengetik kata kunci di dalam kolomnya.

Setelah audiens targetmu terpilih, kamu bisa klik **Next Step**.

![Pemilihan pelanggan target dan produk target untuk siaran email](/img/admin/broadcast-email-targets.png)

Jendela berikutnya adalah tempat kamu bisa mulai menyusun email dengan memasukkan subjek dan isi/pesan yang ingin kamu kirim ke pengguna.

<!-- Screenshot unavailable: Editor subjek dan konten siaran email pada langkah susun -->

Setelah membuat pesannya, kamu bisa menekan tombol **Send**.

Dan begitulah mudahnya mengirim email ke pengguna akhirmu menggunakan fitur broadcast.

## Email sistem (System emails)

Email sistem di Ultimate Multisite itu adalah **notifikasi otomatis** yang dikirim oleh sistem setelah tindakan tertentu seperti pendaftaran, pembayaran, pemetaan domain, dan lain-lain. Email ini bisa diedit atau dimodifikasi dari pengaturan Ultimate Multisite. Fitur ini juga dilengkapi dengan fitur yang memungkinkan kamu mengatur ulang dan mengimpor pengaturan yang sudah ada dari instalasi Ultimate Multisite lain.

### Mengatur Ulang & Mengimpor (Resetting & Importing)

Versi Ultimate Multisite yang baru, begitu juga add-onnya, kadang bisa mendaftarkan email baru dari waktu ke waktu.

Untuk mencegah konflik dan masalah lainnya, **kami tidak akan menambahkan template email baru sebagai Email Sistem di instalasi kamu secara otomatis**, kecuali jika itu sangat penting untuk fungsi fitur tertentu.

Namun, super admin dan agen bisa mengimpor email yang baru terdaftar ini melalui alat importer. Proses ini akan membuat email sistem baru dengan konten dan konfigurasi dari template email baru tersebut, sehingga super admin bisa melakukan modifikasi apa pun yang mereka mau atau membiarkannya seperti itu saja.

#### Cara mengimpor email sistem

Pindah ka halaman Pengaturan Ultimate Multisite anjeun, teruskeun ka tab **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Terus, di sidebar, klik tombol **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Di halaman System Emails, anjeun bakal nempo tombol aksi **Reset & Import** di bagian atas. Klik tombol éta mah bakal buka jendela modal import je reset.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Terus, anjeun bisa nyalakan opsi Import Emails pikeun nempo email sistem mana waé anu bisa diimpor.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Ngreset System Emails

Kadang-kadang, anjeun bakal sadar yén perubahan anu geus dipikahokeun dina template email tertentu geus teu cocog deui jeung anjeun, terus hayang ngresetna ka **status default**na.

Lamun kitu, anjeun boga dua pilihan: anjeun bisa langsung hapus email sistem éta terus import deui (ngagunake panduan di luhur) - tapi cara ieu bakal ngapus metrik kirim je hal-hal séjén, jadi cara ieu paling teu dipikaresep.

Atau anjeun bisa nganggo **Reset & Import tool** pikeun ngreset template email éta.

Kanggo ngreset template email, anjeun bisa ikuti langkah di luhur nepi ka nempo Reset & Import tool, terus, nyalakan opsi **Reset** je pilih email-email anu hayang direset deui ka konten defaultna.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
