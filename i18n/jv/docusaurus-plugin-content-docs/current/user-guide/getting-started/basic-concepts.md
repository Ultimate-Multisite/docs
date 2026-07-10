---
title: Konsep Dasar
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Konsep Dasar {#basic-concepts}

Kanggo kanggo pengguna WordPress Multisite sing anyar lan wong sing lagi mulai nggunakake Ultimate Multisite, ana akeh tembung lan frasa anyar sing kudu dipahami ing wiwitan. Sinau tembung-tembung iki penting banget amarga sampeyan bakal perlu ngerti platform kasebut lan kepiye carane makarya sacara keseluruhan.

Ing artikel iki, kita bakal nyoba ngrumati lan njelasake sawetara konsep utama ing WordPress. Sawetara saka iku luwih relevan kanggo pengguna, ana sing kanggo developer, lan ana uga kanggo loro-lorone.

## WordPress Multisite {#wordpress-multisite}

**Multisite** WordPress iku salah siji jenis instalasi WordPress sing ngidini sampeyan nggawe lan ngelola jaringan akeh website saka satu dashboard WordPress. Sampeyan bisa ngatur kabeh babagan kalebu jumlah situs, fitur, tema, lan peran pengguna. Bisa diatur ratusan lan ribuan situs.

## Jaringan (Network) {#network}

Ing istilah WordPress, jaringan multisite iku papan kanggo ngelola sawetara **subsite** saka satu dashboard. Sanajan nggawe jaringan multisite beda antarane penyedia hosting, hasil akhir biasane yaiku sawetara arahan tambahan ing file **wp-config.php** supaya WordPress ngerti yen lagi makarya ing mode khusus iki.

Ana sawetara perbedaan sing jelas antara jaringan multisite lan instalasi WordPress mandiri sing bakal kita bahas sacara ringkes.

## Database {#database}

Database iku kumpakan data sing terstruktur lan rapi. Ing istilah komputasi, database tegese perangkat lunak sing digunakake kanggo nyimpen lan ngatur data. Anggep wae kaya lemari arsip (file cabinet) nalika sampeyan nyimpen data ing bagian-bagian sing diarani tabel.

WordPress Multisite nggunakake satu database lan saben subsite bakal entuk tabel dhewe kanthi ID blog ing prefix, mula sawise sampeyan instalasi jaringan, database lan ngasilake subsite, sampeyan kudu duwe tabel-tabel iki:

_wp_1_options_ \- tabel opsi kanggo subsite kapisan

_wp_2_options_ \- tabel opsi kanggo subsite kapindho

## Penyedia Hosting {#hosting-provider}

Penyedia hosting kuwi perusahaan sing mbantu bisnis lan individu supaya bisa nggawe website-e dadi gampang diakses liwat World Wide Web. Layanan sing ditawari penyedia hosting kuwi bakal beda-beda, nanging biasane kalebu desain website, panggonan penyimpanan ing host, lan konektivitas menyang Internet.

## Domain {#domain}

Domain name kuwi alamat sing digunakake wong kanggo ngunjungi situsmu. Iki ngandharake browser web nang endi kudu nyari situsmu. Kaya alamat dalan, domain iku cara wong ngunjungi website-mu online. Lan kaya duwe papan pajangan ing ngarepe tokomu. Yen kowe arep ngunjungi website kita, kowe bakal kudu ngetik alamat web kita ing address browser-mu yaiku [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ sing ana [**ultimatemultisite.com**](http://ultimatemultisite.com) iku domain name-e.

## Subdomain {#subdomain}

Subdomain kuwi salah siji jenis tingkatan website ing ngisor domain utama, nanging alih-alih nggunakake folder kanggo ngorganisir konten ing website, iki kaya duwe website dhewe. Iki katon kaya [**https://site1.domain.com/**](https://site1.domain.com/) yaiku _site1_ iku nama subdomain lan [_domain.com_](http://domain.com) iku domain utama.

## Subdirektori {#subdirectory}

Subdirektori kuwi salah siji jenis tingkatan website ing ngisor root domain sing nggunakake folder kanggo ngorganisir konten ing website. Subdirektori iku padha karo subfolder lan jenenge bisa diganti-ganti. Iki katon kaya [**https://domain.com/site1**](https://domain.com/site1) yaiku _site1_ iku nama subdirektori lan [_domain.com_](http://domain.com) iku domain utama.

## Subsite {#subsite}

Subsite iku situs anak (child site) sing kokmu gawe ing jaringan Multisite. Iku bisa dadi **subdomain** utawa **subdirectory**, gumantung carane instalasi WordPress Multisite-mu diatur.

## Super Admin {#super-admin}

WordPress Super Admin kuwi peran pengguna kanthi kemampuan lengkap kanggo ngelola kabeh subsite ing jaringan Multisite. Kanggo user Multisite, iki **tingkat akses paling dhuwur** sing bisa kok paringake marang instalasi WordPress-mu.

## Plugin {#plugin}

Umume, plugin iku sekumpulan kode sing nambah fungsi tambahan kanggo situs WordPress-mu. Iki bisa sembuh kaya ganti logo login utawa rumit kaya nambah fungsi e-commerce. _Woocommerce_ lan _Contact Form_ iku conto plugin.

Ing WordPress Multisite, plugin mung bisa diinstal saka dashboard admin jaringan dening Super Admin. Admin subsite mung bisa ngaktifake lan nggawe plugin ing subsite dewe.

## Theme {#themes}

WordPress theme kuwi sekumpulan file (_grafis, style sheets, lan kode_) sing nentokake tampilan keseluruhan situs. Iki nyedhiyakake kabeh gaya depan kaya gaya font, tata letak halaman, warna, lsp.

Sama kaya plugin, theme ing WordPress Multisite mung bisa diinstal dening Super Admin lan bisa diaktifake ing level subsite dening admin subsite.

## Site Template {#site-template}

**Site Template** iku situs dasar (boilerplate site) sing bisa digunakake minangka pondasi nalika nggawe situs anyar ing jaringan-mu.

Iki tegese, kok bisa nggawe situs dasar, ngaktifake plugin sing beda, nentokake theme aktif, lan ngowahi nganggo cara apa wae. Terus, nalika pelangganmu nggawe akun anyar, tinimbang entuk situs WordPress standar tanpa isi sing bermakna, dheweke bakal entuk salinan situs dasar-mu kanthi kabeh penyesuaian lan konten wis ana ing kono.

## Domain Mapping {#domain-mapping}

Pemetaan domain dengan WordPress itu cara ngarahin pengunjung ke host yang bener lewat alamat website. Di WordPress Multisite, subsites dibuat pakai subdirektori atau subdomain. Pemetaan domain ini memungkinkan pengguna subsites buat pakai domain utama kayak [**joesbikeshop.com**](http://joesbikeshop.com) biar alamat situs mereka kelihatan lebih profesional.

## SSL {#ssl}

SSL itu singkatan dari **Secure Sockets Layer**. Ini adalah sertifikat digital yang ngesahkan identitas sebuah website dan memungkinkan koneksi terenkripsi. Sekarang, ini udah jadi teknologi standar buat jaga koneksi internet aman dan melindungi data sensitif yang dikirim antar dua sistem, mencegah penjahat baca atau ubah informasi apa pun yang ditransfer, termasuk detail pribadi. Browser modern butuh SSL, jadi ini penting banget pas bikin dan menjalankan website.

## Media {#media}

Media itu gambar, audio, video, dan file lain yang membuat sebuah website.

Situs jaringan (Network sites) berbagi satu database di WordPress Multisite, tapi mereka punya jalur (path) terpisah di filesystem untuk file media.

Lokasi standar WordPress (wp-content/uploads) tetap sama; cuma jalurnya diubah biar sesuai dengan ID unik dari situs jaringan tersebut. Akibatnya, file media untuk situs jaringan akan muncul di wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks itu URL permanen buat setiap postingan blog atau halaman kamu di dalam situsmu. Permalinks juga disebut **pretty links**. Secara default, URL WordPress pakai format query string yang bentuknya kira-kira begini:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite iku plugin WordPress, digawe kanggo instalasi WordPress Multisite, sing ngowahi instalasi WordPress sampeyan dadi jaringan situs premium – kaya [WordPress.com](https://WordPress.com) – ngidini klien nggawe situs kanthi bayaran bulanan, kuartalan, utawa taunan (sampeyan uga bisa nggawe paket Gratis).

## Checkout Form {#checkout-form}

Checkout Form iku formulir pesenan siji utawa multi-langkah sing nglibatake pembuatan subsite, keanggotaan, lan akun pengguna liwat registrasi Ultimate Multisite. Iku isine akeh kolom lan formulir pembayaran sing kudu diisi dening pengguna nalika proses daftar.

## Webhook {#webhook}

Webhook ( uga diarani web callback utawa HTTP push API) iku cara kanggo aplikasi ngirimake informasi real-time marang aplikasi liyane. Webhook ngirim data menyang aplikasi liyane nalika kedadeyan, tegese sampeyan bakal nampa data langsung.

**Ultimate Multisite webhooks** mbukak kemungkinan tanpa wates, ngidini admin jaringan nindakake macem-macem integrasi sing aneh nanging migunani, utamane yen digunakake bareng layanan kaya _Zapier_ lan IFTTT_.

## Events {#events}

Event iku tindakan sing kedadeyan minangka akibat saka aksi pengguna utawa sumber liyane, contone klik mouse. Ultimate Multisite nyimpen cathetan kabeh event lan log sing lagi kedadeyan ing sak jaringan sampeyan. Iku ngawasi kegiatan beda sing kedadeyan ing multisite sampeyan, kaya ganti paket.
