---
title: Konsep Dasar
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Konsep Dasar {#basic-concepts}

Buat pengguna WordPress Multisite yang baru dan seseorang yang baru mulai pakai Ultimate Multisite, bisa banyak kata dan frasa baru yang harus dipelajari di awal. Belajarinya itu penting karena kamu perlu mengerti platformnya dan cara kerjanya secara keseluruhan.

Di artikel ini, kita akan coba mendefinisikan dan menjelaskan beberapa konsep utama di WordPress. Beberapa di antaranya lebih relevan untuk pengguna, ada yang untuk developer, dan ada juga buat keduanya.

## WordPress Multisite {#wordpress-multisite}

**Multisite** WordPress adalah jenis instalasi WordPress yang memungkinkan kamu membuat dan mengelola jaringan banyak website dari satu dashboard WordPress saja. Kamu bisa mengelola semuanya termasuk jumlah situs, fitur, tema, dan peran pengguna. Memungkinkan mengelola ratusan bahkan ribuan situs.

## Jaringan (Network) {#network}

Dalam istilah WordPress, jaringan multisite adalah tempat di mana sejumlah **subsite** bisa dikelola dari satu dashboard tunggal. Meskipun cara membuat jaringan multisite berbeda antar penyedia hosting, hasilnya biasanya cuma beberapa arahan tambahan di file **wp-config.php** supaya WordPress tahu bahwa dia sedang beroperasi dalam mode khusus ini.

Ada beberapa perbedaan yang jelas antara jaringan multisite dan instalasi WordPress biasa yang akan kita bahas sebentar.

## Database {#database}

Database itu adalah kumpulan data yang terstruktur dan terorganisir. Dalam istilah komputasi, database merujuk pada perangkat lunak yang digunakan untuk menyimpan dan mengorganisir data. Anggap saja seperti lemari arsip tempat kamu menyimpan data di bagian-bagian yang disebut tabel.

WordPress Multisite menggunakan satu database dan setiap subsite mendapatkan tabelnya sendiri dengan ID blog sebagai awalan (prefix), jadi setelah kamu instal instalasi jaringan, database dan buat subsite, kamu akan punya tabel-tabel ini:

_wp_1_options_ \- tabel opsi kanggo subsite kahiji

_wp_2_options_ \- tabel opsi kanggo subsite kadua

## Penyedia Hosting {#hosting-provider}

Penyedia hosting téh nyaéta perusahaan anu ngajadikeakeun bisnis jeung individu bisa ngajadikeun situs web maranéhna bisa dipidangkeun ka dunya leutik (World Wide Web). Layanan anu ditawarke ku penyedia hosting web bakal béda-béda, tapi biasana kaasup desain website, tempat penyimpanan di host, jeung konektivitas ka Internet.

## Domain {#domain}

Domain name téh nyaéta alamat anu dipaké jalma pikeun ngunjungkeun situs anjeun. Ieu nunjukkeun ka browser mana kudu nyari situs anjeun. Sarua jeung alamat jalan, domain téh cara jalma ngunjungkeun website anjeun online. Jeung siga aya papan pajangan di hareupe toko anjeun. Lamun anjeun hayang ngunjungkeun website urang, anjeun bakal kedah ngetik alamat web urang dina browser anjeun di bagian address anu nyaéta [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ di mana [**ultimatemultisite.com**](http://ultimatemultisite.com) téh domain name-na.

## Subdomain {#subdomain}

Subdomain téh mangrupa jenis hirarki website di handap domain utama, tapi alih-alih ngagunake folder pikeun ngatur konten dina hiji website, éta siga punya website sorangan. Ieu dipidangkeun salaku [**https://site1.domain.com/**](https://site1.domain.com/) di mana _site1_ téh nama subdomain jeung [_domain.com_](http://domain.com) nyaéta domain utama.

## Subdirektori {#subdirectory}

Subdirectory téh mangrupa jenis hirarki website di handap root domain anu ngagunake folder pikeun ngatur konten dina hiji website. Subdirectory téh sarua jeung subfolder, sarta nami bisa dipaké ganti-ganti. Ieu dipidangkeun salaku [**https://domain.com/site1**](https://domain.com/site1) di mana _site1_ téh nama subdirectory jeung [_domain.com_](http://domain.com) nyaéta domain utama.

## Subsite {#subsite}

Subsite téh nyaéta subsite anu anjeun jieun dina jaringan Multisite. Ieu bisa jadi **subdomain** atawa **subdirectory**, gumantung kumaha konfigurasi instalasi WordPress Multisite anjeun.

## Super Admin {#super-admin}

WordPress Super Admin téh mangrupa peran pengguna anu boga kaparigelan sapoe pikeun ngatur sakabéh subsite dina jaringan Multisite. Pikeun pangguna Multisite, éta téh **tingkat akses pangluhurna** anu bisa anjeun parantoskeun ka instalasi WordPress anjeun.

## Plugin {#plugin}

Umumna, plugin téh mangrupa susunan kode anu nambahan fungsi tambahan kana situs WordPress anjeun. Ieu bisa sakadar ngarobah logo login atawa sakumitna nambahan fungsi e-commerce anu rumit. _Woocommerce_ jeung _Contact Form_ nyaéta conto plugin.

Dina WordPress Multisite, plugin ngan bisa dipasang tina dashboard admin jaringan ku Super Admin. Admin subsite ngan bisa ngaktifkeun jeung ngalaksanakeun (deactivate) plugin di dalam subsite maranéhna sorangan.

## Theme {#themes}

WordPress theme téh mangrupa susunan file (_grafik, style sheet, jeung kode_) anu ngatur penampilan umum situs. Ieu nyadiake sadaya gaya *front-end* saperti gaya font, tata letak halaman, warna, jsb.

Sama saperti plugin, theme dina WordPress Multisite ngan bisa dipasang ku Super Admin sarta bisa diaktifkeun dina tingkat subsite ku admin subsite maranéhna sorangan.

## Site Template {#site-template}

**Site Template** téh mangrupa *boilerplate site* anu bisa dipaké salaku dasar nalika nyieun situs anyar dina jaringan anjeun.

Ieu hartina, anjeun bisa nyieun situs dasar, ngaktifkeun plugin nu béda-béda, ngatur theme aktif, jeung ngubahna sacara bebas. Terus, mun pelanggan anjeun nyieun akun anyar, alih-alih meunang situs WordPress *default* anu teu boga eusina anu bermakna di dalamnya, maranéhna bakal meunang salinan situs dasar anjeun kalayan sakabéh kustomisasi jeung eusi geus aya.

## Domain Mapping {#domain-mapping}

Pemetaan domain (Domain mapping) di WordPress itu cara buat ngarahkan pengunjung ke host yang bener, lewat alamat website. Di WordPress Multisite, subsites bisa dibuat pakai subdirektori atau subdomain. Pemetaan domain ini memungkinkan pengguna subsites pakai domain tingkat atas seperti [**joesbikeshop.com**](http://joesbikeshop.com) biar alamat situs mereka kelihatan lebih profesional.

## SSL {#ssl}

SSL itu singkatan dari **Secure Sockets Layer**. Ini adalah sertifikat digital yang ngesahkan identitas sebuah website dan memungkinkan koneksi terenkripsi (aman). Sekarang, ini udah jadi teknologi standar buat menjaga koneksi internet tetap aman dan melindungi data sensitif yang dikirim antara dua sistem. Ini mencegah penjahat baca atau ubah informasi apa pun yang ditransfer, termasuk detail pribadi. Browser modern butuh SSL, jadi ini penting banget pas bikin dan menjalankan website.

## Media {#media}

Media itu gambar, audio, video, dan file lainnya yang membuat sebuah website jadi hidup.

Situs jaringan (Network sites) berbagi satu database di WordPress Multisite, tapi mereka punya jalur (path) terpisah di sistem file buat file media. Lokasi standar WordPress (`wp-content/uploads`) tetap sama; cuma jalurnya diubah biar sesuai dengan ID unik dari situs jaringan tersebut. Akibatnya, file media untuk situs jaringan akan muncul di `wp-contents/uploads/site/[id]`.

## Permalinks {#permalinks}

Permalinks itu adalah URL permanen buat setiap postingan blog atau halaman individual di situs kamu. Permalinks juga disebut **pretty links**. Secara default, URL WordPress pakai format *query string* yang bentuknya kira-kira begini:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite téh plugin WordPress, digaweun pikeun instalasi WordPress Multisite, anu ngubah instalasi WordPress anjeun jadi jaringan situs premium – saperti [WordPress.com](https://WordPress.com) – ngidinan klien ngadamel situs ku bayaran bulanan, kuartalan, atawa tahunan (anjeun ogé bisa ngadamel rencana Gratis).

## Checkout Form {#checkout-form}

Checkout Form téh formulir pesenan tunggal atawa multi-langkah anu ngalibetkeun pembuatan subsite, keanggotaan, jeung akun pengguna ngaliwatan registrasi Ultimate Multisite. Ieu eusina aya sababaraha kolom jeung formulir pembayaran anu kudu dipasrahkeun ku pengguna nalika proses daftar.

## Webhook {#webhook}

Webhook (ogé disebut web callback atawa HTTP push API) téh cara pikeun aplikasi ngahasilkeun informasi *real-time* ka aplikasi séjén. Webhook ngirim data ka aplikasi séjén saperti lamun kajadian, hartina anjeun langsung meunang data éta.

**Ultimate Multisite webhooks** muka kasempetan anu teu aya watesna, ngidinan admin jaringan pikeun ngalakukeun sagala rupa integrasi anu gila tapi mantep dipaké, utamana lamun digabung jeung layanan saperti _Zapier_ jeung IFTTT_.

## Events {#events}

Event téh tindakan anu kajadian salaku akibat tina tindakan pengguna atawa sumber séjén, saperti klik mouse. Ultimate Multisite nyimpen catetan sadaya event jeung log anu keur lumangsung di sakuliah jaringan anjeun. Ieu ngitung sababaraha kagiatan anu kajadian dina multisite anjeun, saperti ganti rencana.
