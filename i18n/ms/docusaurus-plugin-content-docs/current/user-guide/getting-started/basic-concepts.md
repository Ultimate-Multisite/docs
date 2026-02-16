---
title: Konsep Asas
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Konsep Asas

Bagi pengguna baharu WordPress Multisite dan mereka yang baru mula menggunakan Ultimate Multisite, mungkin terdapat banyak istilah dan frasa baharu yang perlu dipelajari pada awalnya. Mempelajari istilah ini adalah penting kerana anda perlu memahami platform dan cara keseluruhannya berfungsi.

Dalam artikel ini, kami akan cuba mentakrifkan dan menerangkan beberapa konsep utama dalam WordPress. Sesetengahnya lebih relevan untuk pengguna, yang lain untuk pembangun, dan ada juga untuk kedua-duanya.

## WordPress Multisite

WordPress **Multisite** adalah sejenis pemasangan WordPress yang membolehkan anda mencipta dan mengurus rangkaian pelbagai laman web dari satu dashboard WordPress. Anda boleh mengurus segala-galanya termasuk bilangan laman, ciri-ciri, tema, dan peranan pengguna. Anda boleh mengurus beratus-ratus malah beribu-ribu laman.

## Rangkaian

Dalam konteks WordPress, rangkaian multisite adalah tempat di mana beberapa **sublaman** boleh diurus dari satu dashboard. Walaupun cara mencipta rangkaian multisite berbeza antara penyedia hosting, hasilnya biasanya beberapa arahan tambahan dalam fail **wp-config.php** untuk memberitahu WordPress bahawa ia beroperasi dalam mod khusus ini.

Terdapat beberapa perbezaan ketara antara rangkaian multisite dan pemasangan WordPress biasa yang akan kita bincangkan secara ringkas.

## Pangkalan Data

Pangkalan data adalah satu set data yang tersusun dan teratur. Dalam istilah pengkomputeran, pangkalan data merujuk kepada perisian yang digunakan untuk menyimpan dan menyusun data. Bayangkan ia seperti kabinet fail di mana anda menyimpan data dalam bahagian berbeza yang dipanggil jadual.

WordPress Multisite menggunakan satu pangkalan data dan setiap sublaman mendapat jadual tersendiri dengan id blog dalam awalan, jadi sebaik sahaja anda memasang pemasangan rangkaian dan mencipta sublaman, anda sepatutnya mempunyai jadual-jadual ini:

_wp_1_options_ \- jadual options untuk sublaman pertama

_wp_2_options_ \- jadual options untuk sublaman kedua

## Penyedia Hosting

Penyedia hosting adalah syarikat yang membolehkan perniagaan dan individu menjadikan laman web mereka boleh diakses melalui World Wide Web. Perkhidmatan yang ditawarkan oleh penyedia hosting berbeza-beza tetapi biasanya termasuk reka bentuk laman web, ruang storan pada hos, dan sambungan ke Internet.

## Domain

Nama domain adalah alamat yang digunakan orang untuk melawat laman anda. Ia memberitahu pelayar web di mana untuk mencari laman anda. Sama seperti alamat jalan, domain adalah cara orang melawat laman web anda dalam talian. Dan, seperti mempunyai papan tanda di hadapan kedai anda. Jika anda ingin melawat laman web kami, anda perlu menaip alamat web kami pada pelayar anda iaitu [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ di mana [**ultimatemultisite.com**](http://ultimatemultisite.com) adalah nama domain.

## Subdomain

Subdomain adalah sejenis hierarki laman web di bawah domain utama, tetapi berbeza dengan menggunakan folder untuk menyusun kandungan pada laman web, ia mendapat laman web tersendiri. Ia dipersembahkan sebagai [**https://site1.domain.com/**](https://site1.domain.com/) di mana _site1_ adalah nama subdomain dan [_domain.com_](http://domain.com) adalah domain utama.

## Subdirektori

Subdirektori adalah sejenis hierarki laman web di bawah domain utama yang menggunakan folder untuk menyusun kandungan pada laman web. Subdirektori adalah sama dengan subfolder dan kedua-dua nama boleh digunakan secara bersilih ganti. Ia dipersembahkan sebagai [**https://domain.com/site1**](https://domain.com/site1) di mana _site1_ adalah nama subdirektori dan [_domain.com_](http://domain.com) adalah domain utama.

## Sublaman

Sublaman adalah laman anak yang anda cipta pada rangkaian Multisite. Ia boleh menjadi **subdomain** atau **subdirektori** bergantung kepada cara pemasangan WordPress Multisite anda dikonfigurasi.

## Super Admin

WordPress Super Admin adalah peranan pengguna dengan keupayaan penuh untuk mengurus semua sublaman pada rangkaian Multisite. Bagi pengguna Multisite, ia adalah **tahap akses tertinggi** yang boleh anda berikan kepada pemasangan WordPress anda.

## Plugin

Secara umum, plugin adalah satu set kod yang menambah fungsi tambahan kepada laman WordPress anda. Ini boleh semudah menukar logo log masuk atau sekompleks menambah fungsi e-dagang. _Woocommerce dan Contact Form_ adalah contoh plugin.

Pada WordPress Multisite, plugin hanya boleh dipasang dari dashboard admin rangkaian oleh Super Admin. Admin Sublaman hanya boleh mengaktifkan dan menyahaktifkan plugin dalam sublaman mereka.

## Tema

Tema WordPress adalah sekumpulan fail (_grafik, helaian gaya, dan kod_) yang menentukan penampilan keseluruhan laman. Ia menyediakan semua penggayaan bahagian hadapan seperti gaya fon, susun atur halaman, warna, dan sebagainya.

Sama seperti plugin, tema dalam WordPress Multisite hanya boleh dipasang oleh Super Admin dan boleh diaktifkan pada peringkat sublaman oleh admin sublaman.

## Templat Laman

**Templat Laman** adalah laman asas yang boleh digunakan sebagai tapak apabila mencipta laman baharu dalam rangkaian anda.

Ini bermakna anda boleh mencipta laman asas, mengaktifkan plugin yang berbeza, menetapkan tema aktif, dan menyesuaikannya mengikut kehendak anda. Kemudian, apabila pelanggan anda mencipta akaun baharu, bukannya mendapat laman WordPress lalai tanpa kandungan bermakna di dalamnya, mereka akan mendapat salinan laman asas anda dengan semua penyesuaian dan kandungan yang sudah tersedia.

## Pemetaan Domain

**Pemetaan domain** dengan WordPress adalah cara untuk mengalihkan pengguna ke hos yang betul, melalui alamat laman web. Dalam WordPress Multisite, sublaman dicipta menggunakan sama ada subdirektori atau subdomain. Apa yang dilakukan oleh pemetaan domain ialah ia membenarkan pengguna sublaman menggunakan domain peringkat atas seperti [**joesbikeshop.com**](http://joesbikeshop.com) untuk menjadikan alamat laman mereka kelihatan lebih profesional.

## SSL

SSL bermaksud **Secure Sockets Layer**. Ia adalah sijil digital yang mengesahkan identiti laman web dan membolehkan sambungan yang disulitkan. Pada masa kini ia digunakan sebagai teknologi standard untuk memastikan sambungan internet selamat dan melindungi sebarang data sensitif yang dihantar antara dua sistem, menghalang penjenayah daripada membaca dan mengubah suai sebarang maklumat yang dipindahkan, termasuk butiran peribadi yang berpotensi. Pelayar moden memerlukan SSL yang menjadikannya penting semasa mencipta dan menjalankan laman web.

## Media

Media adalah imej, audio, video, dan fail lain yang membentuk laman web.

Laman rangkaian berkongsi satu pangkalan data dalam WordPress Multisite, tetapi mereka mengekalkan laluan berasingan pada sistem fail untuk fail media.

Lokasi WordPress standard (wp-content/uploads) kekal; walau bagaimanapun, laluannya diubah untuk mencerminkan ID unik laman rangkaian. Oleh itu, fail media untuk laman rangkaian muncul sebagai wp-contents/uploads/site/[id].

## Pautan Kekal

Pautan kekal adalah URL tetap bagi catatan blog atau halaman individu dalam laman anda. Pautan kekal juga dirujuk sebagai **pretty links**. Secara lalai, URL WordPress menggunakan format query string yang kelihatan seperti ini:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite adalah plugin WordPress, dibuat untuk pemasangan WordPress Multisite, yang mengubah pemasangan WordPress anda menjadi rangkaian laman premium – seperti [WordPress.com](https://WordPress.com) – membolehkan pelanggan mencipta laman melalui yuran bulanan, suku tahunan, atau tahunan (anda juga boleh mencipta pelan Percuma).

## Borang Checkout

Borang Checkout adalah borang pesanan satu langkah atau berbilang langkah yang melibatkan penciptaan sublaman, keahlian, dan akaun pengguna melalui pendaftaran Ultimate Multisite. Ia terdiri daripada medan dan borang pembayaran yang berbeza yang perlu dihantar oleh pengguna semasa proses pendaftaran.

## Webhook

Webhook (juga dipanggil web callback atau HTTP push API) adalah cara untuk aplikasi menyediakan aplikasi lain dengan maklumat masa nyata. Webhook menghantar data kepada aplikasi lain apabila ia berlaku, bermakna anda mendapat data dengan serta-merta.

**Webhook Ultimate Multisite** membuka kemungkinan tanpa had, membolehkan admin rangkaian melakukan pelbagai integrasi yang luar biasa tetapi berguna, terutamanya jika digunakan bersama dengan perkhidmatan seperti _Zapier dan IFTTT_.

## Peristiwa

Peristiwa adalah tindakan yang berlaku hasil daripada tindakan pengguna atau sumber lain, seperti klik tetikus. Ultimate Multisite menyimpan rekod semua peristiwa dan log yang berlaku dalam keseluruhan rangkaian anda. Ia menjejaki aktiviti berbeza yang berlaku dalam multisite anda, seperti perubahan pelan.
