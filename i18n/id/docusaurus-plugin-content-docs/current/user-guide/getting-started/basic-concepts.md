---
title: Konsep Dasar
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Konsep Dasar

Bagi pengguna baru WordPress Multisite dan mereka yang baru mulai menggunakan Ultimate Multisite, mungkin ada banyak istilah dan frasa baru yang perlu dipahami. Mempelajari istilah-istilah ini adalah tugas penting karena Anda perlu memahami platform dan cara kerjanya secara keseluruhan.

Dalam artikel ini, kami akan mencoba mendefinisikan dan menjelaskan beberapa konsep utama di WordPress. Beberapa di antaranya lebih relevan untuk pengguna, yang lain untuk developer, dan sebagian lagi untuk keduanya.

## WordPress Multisite

WordPress **Multisite** adalah jenis instalasi WordPress yang memungkinkan Anda membuat dan mengelola jaringan beberapa situs web dari satu dashboard WordPress. Anda dapat mengelola semuanya termasuk jumlah situs, fitur, tema, dan peran pengguna. Anda bisa mengelola ratusan hingga ribuan situs.

## Network

Dalam konteks WordPress, network multisite adalah tempat di mana sejumlah **subsite** dapat dikelola dari satu dashboard. Meskipun cara membuat network multisite berbeda-beda tergantung penyedia hosting, hasil akhirnya biasanya berupa beberapa direktif tambahan di file **wp-config.php** untuk memberi tahu WordPress bahwa ia beroperasi dalam mode khusus ini.

Ada beberapa perbedaan mendasar antara network multisite dan instalasi WordPress mandiri yang akan kita bahas secara singkat.

## Database

Database adalah kumpulan data yang terstruktur dan terorganisir. Dalam istilah komputasi, database mengacu pada perangkat lunak yang digunakan untuk menyimpan dan mengorganisir data. Bayangkan seperti lemari arsip tempat Anda menyimpan data di berbagai bagian yang disebut tabel.

WordPress Multisite menggunakan satu database dan setiap subsite mendapatkan tabel-tabelnya sendiri dengan blog id pada prefiks, jadi setelah Anda menginstal instalasi network dan membuat subsite, Anda akan memiliki tabel-tabel berikut:

_wp_1_options_ \- tabel options untuk subsite pertama

_wp_2_options_ \- tabel options untuk subsite kedua

## Penyedia Hosting

Penyedia hosting adalah perusahaan yang memungkinkan bisnis dan individu untuk membuat situs web mereka dapat diakses melalui World Wide Web. Layanan yang ditawarkan penyedia hosting bervariasi, tetapi biasanya mencakup desain situs web, ruang penyimpanan di server, dan konektivitas ke Internet.

## Domain

Nama domain adalah alamat yang digunakan orang untuk mengunjungi situs Anda. Nama domain memberi tahu browser web di mana harus mencari situs Anda. Sama seperti alamat jalan, domain adalah cara orang mengunjungi situs web Anda secara online. Dan, seperti memiliki papan nama di depan toko Anda. Jika Anda ingin mengunjungi situs web kami, Anda harus mengetikkan alamat web kami di browser Anda yaitu [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ di mana [**ultimatemultisite.com**](http://ultimatemultisite.com) adalah nama domain.

## Subdomain

Subdomain adalah jenis hierarki situs web di bawah domain utama, tetapi alih-alih menggunakan folder untuk mengorganisir konten di situs web, subdomain seperti mendapatkan situs webnya sendiri. Formatnya adalah [**https://site1.domain.com/**](https://site1.domain.com/) di mana _site1_ adalah nama subdomain dan [_domain.com_](http://domain.com) adalah domain utama.

## Subdirektori

Subdirektori adalah jenis hierarki situs web di bawah root domain yang menggunakan folder untuk mengorganisir konten di situs web. Subdirektori sama dengan subfolder dan kedua nama ini dapat digunakan secara bergantian. Formatnya adalah [**https://domain.com/site1**](https://domain.com/site1) di mana _site1_ adalah nama subdirektori dan [_domain.com_](http://domain.com) adalah domain utama.

## Subsite

Subsite adalah situs turunan yang Anda buat di network Multisite. Subsite bisa berupa **subdomain** atau **subdirektori** tergantung pada bagaimana instalasi WordPress Multisite Anda dikonfigurasi.

## Super Admin

WordPress Super Admin adalah peran pengguna dengan kemampuan penuh untuk mengelola semua subsite di network Multisite. Bagi pengguna Multisite, ini adalah **tingkat akses tertinggi** yang dapat Anda berikan pada instalasi WordPress Anda.

## Plugin

Secara umum, plugin adalah sekumpulan kode yang menambahkan fungsionalitas ekstra ke situs WordPress Anda. Ini bisa sesederhana mengubah logo login atau serumit menambahkan fungsionalitas e-commerce. _Woocommerce dan Contact Form_ adalah contoh plugin.

Di WordPress Multisite, plugin hanya dapat diinstal dari dashboard network admin oleh Super Admin. Admin Subsite hanya dapat mengaktifkan dan menonaktifkan plugin dalam subsite mereka.

## Tema

Tema WordPress adalah sekumpulan file (_grafis, style sheet, dan kode_) yang menentukan tampilan keseluruhan situs. Tema menyediakan semua styling tampilan depan seperti styling font, tata letak halaman, warna, dan lain-lain.

Sama seperti plugin, tema di WordPress Multisite hanya dapat diinstal oleh Super Admin dan dapat diaktifkan di tingkat subsite oleh admin subsite.

## Site Template

**Site Template** adalah situs boilerplate yang dapat digunakan sebagai dasar saat membuat situs baru di network Anda.

Artinya Anda dapat membuat situs dasar, mengaktifkan berbagai plugin, mengatur tema aktif, dan menyesuaikannya sesuka Anda. Kemudian, saat pelanggan Anda membuat akun baru, alih-alih mendapatkan situs WordPress default tanpa konten yang berarti di dalamnya, mereka akan mendapatkan salinan situs dasar Anda dengan semua penyesuaian dan konten yang sudah tersedia.

## Domain Mapping

**Domain mapping** dengan WordPress adalah cara untuk mengarahkan pengguna ke host yang benar, melalui alamat situs web. Di WordPress Multisite, subsite dibuat menggunakan subdirektori atau subdomain. Yang dilakukan domain mapping adalah memungkinkan pengguna subsite menggunakan domain tingkat atas seperti [**joesbikeshop.com**](http://joesbikeshop.com) agar alamat situs mereka terlihat lebih profesional.

## SSL

SSL adalah singkatan dari **Secure Sockets Layer**. SSL adalah sertifikat digital yang mengautentikasi identitas situs web dan memungkinkan koneksi terenkripsi. Saat ini SSL digunakan sebagai teknologi standar untuk menjaga keamanan koneksi internet dan melindungi data sensitif yang dikirim antara dua sistem, mencegah penjahat siber membaca dan memodifikasi informasi yang ditransfer, termasuk potensi data pribadi. Browser modern memerlukan SSL yang membuatnya penting saat membuat dan menjalankan situs web.

## Media

Media adalah gambar, audio, video, dan file lain yang membentuk situs web.

Situs-situs dalam network berbagi satu database di WordPress Multisite, namun mereka mempertahankan jalur terpisah pada filesystem untuk file media.

Lokasi WordPress standar (wp-content/uploads) tetap ada; namun, jalurnya diubah untuk mencerminkan ID unik situs network. Akibatnya file media untuk situs network muncul sebagai wp-contents/uploads/site/[id].

## Permalink

Permalink adalah URL permanen dari postingan blog atau halaman individual dalam situs Anda. Permalink juga disebut sebagai **pretty links**. Secara default, URL WordPress menggunakan format query string yang terlihat seperti ini:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite adalah plugin WordPress, dibuat untuk instalasi WordPress Multisite, yang mengubah instalasi WordPress Anda menjadi network situs premium – seperti [WordPress.com](https://WordPress.com) – yang memungkinkan klien membuat situs melalui biaya bulanan, kuartalan, atau tahunan (Anda juga dapat membuat paket Gratis).

## Checkout Form

Checkout Form adalah formulir pemesanan satu langkah atau multi-langkah yang melibatkan pembuatan subsite, keanggotaan, dan akun pengguna melalui pendaftaran Ultimate Multisite. Formulir ini terdiri dari berbagai field dan formulir pembayaran yang harus diisi pengguna selama proses pendaftaran.

## Webhook

Webhook (juga disebut web callback atau HTTP push API) adalah cara bagi aplikasi untuk menyediakan informasi real-time ke aplikasi lain. Webhook mengirimkan data ke aplikasi lain saat peristiwa terjadi, yang berarti Anda mendapatkan data secara langsung.

**Webhook Ultimate Multisite** membuka kemungkinan tak terbatas, memungkinkan admin network melakukan berbagai integrasi yang unik namun berguna, terutama jika digunakan bersama layanan seperti _Zapier dan IFTTT_.

## Event

Event adalah tindakan yang terjadi sebagai hasil dari aksi pengguna atau sumber lain, seperti klik mouse. Ultimate Multisite menyimpan catatan semua event dan log yang terjadi di seluruh network Anda. Fitur ini melacak berbagai aktivitas yang terjadi di multisite Anda, seperti perubahan paket.
