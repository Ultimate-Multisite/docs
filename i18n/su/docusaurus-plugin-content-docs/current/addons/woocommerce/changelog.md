---
title: WooCommerce Integrasi Catetan Parobahan
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Catetan Parobahan Integrasi WooCommerce {#woocommerce-integration-changelog}

Vérsi 2.2.0 - Dileupaskeun dina 2026-07-01
* Anyar: Jumlah pajeg Ultimate Multisite ayeuna mucunghul salaku baris biaya WooCommerce anu misah dina prosés mayar, ngajadikeun total pajeg leuwih écés sateuacan pamayaran.
* Anyar: Nambahkeun setélan opt-in "Tunda Kaanggotaan Langsung nalika Pembaruan Gagal" jeung filter `wu_woo_suspend_on_payment_failure` pikeun situs anu hoyong nunda kusabab pembaruan gagal salila jandéla coba deui WooCommerce Subscriptions.
* Perbaikan: Nyelaraskan deui status WooCommerce Subscription anu bisa tetep teu sinkron jeung kaanggotaan Ultimate Multisite sanggeus pembaruan gagal atawa pulih.
* Perbaikan: Nambahkeun mata uang toko WooCommerce kana daptar mata uang Ultimate Multisite nalika éta leungit.
* Perbaikan: Ngajaga rinci tagihan palanggan nalika ngalihkeun palanggan langganan ka prosés mayar WooCommerce.
* Ditingkatkeun: Nambahkeun kasaluyuan jeung Jetpack Autoloader 5.
* Ditingkatkeun: Ngabersihan generasi pakét rilis supaya zip GitHub jeung marketplace nyingkahan diréktori staging nyarang jeung berkas pamekaran.

Vérsi 2.0.6 - Dileupaskeun dina 2026-01-16
* Paningkatan: Ngawengku langganan inti dina addon. Teu deui merlukeun ekstensi Woocommerce Subscriptinos.

Vérsi 2.0.5 - Dileupaskeun dina 2026-01-09
* Paningkatan: Muat tarjamahan tina glotpress API.
* Perbaikan: Kasalahan fatal dina sababaraha page builder.
* perbaikan: Alihan teu aya tungtungna nalika palanggan mangrupa anggota situs utama.

Vérsi 2.0.4 - Dileupaskeun dina 2025-11-14
* Ditambahkeun: Tarjamahan pikeun leuwih loba basa.
* Dirobah: Diganti ngaran jadi Ultimate Multisite: Woocommerce Integration.
* Ditambahkeun: Kasaluyuan jeung Woocommerce 10.2.1.
* Ditambahkeun: Kasaluyuan jeung Woocommerce Subscriptions 7.7.0.
* Perbaikan: Kasaluyuan jeung PHP 8.4
* Perbaikan: Alihan tapi nalika euweuh kaca WC Account.

Vérsi 2.0.3 - Dileupaskeun dina 2025-08-13
* Dirobah: Ngaktipkeun pembaruan otomatis jeung marketplace anyar.

Vérsi 2.0.2 - Dileupaskeun dina 2025-07-05
* Dirobah: Diganti ngaran jadi Multisite Ultimate: Woocommerce Integration.
* Ditambahkeun: Kasaluyuan jeung Woocommerce 9.8.1.
* Ditambahkeun: Kasaluyuan jeung Woocommerce Subscriptions 7.3.0.
* Perbaikan: Ngabatalkeun langganan ku palanggan.
* Perbaikan: Kasalahan fatal nalika maké blok prosés mayar.
* Paningkatan: Ayeuna saluyu jeung tabel pesenan kustom kinerja luhur Woocommerce.
* Perbaikan: Ngabatalkeun dina prosés mayar WooCommerce masih bisa ningkatkeun kaanggotaan.

Vérsi 2.0.1 - Dileupaskeun dina 2023-08-09

* Ditambahkeun: Kasaluyuan jeung Woocommerce 7.9.0.
* Ditambahkeun: Kasaluyuan jeung Woocommerce Subscriptions 5.3.0.
* Ditambahkeun: Pangrojong pikeun pembaruan kaanggotaan.
* Ditambahkeun: Bewara ngeunaan uji coba jeung biaya setup dina Woocommerce.
* Ditambahkeun: Idéntifikasi produk Ultimate Multisite Woocommerce nganggo nilai meta.
* Ditambahkeun: Nyelapkeun perbaikan sakali pikeun nandaan sadaya produk Woocommerce anu patali jeung Ultimate Multisite.
* Ditambahkeun: Ngahapus produk anu dijieun ku Ultimate Multisite tina daptar Woocommerce.
* Paningkatan: Nyieun diskon Woocommerce non-berulang pikeun dilarapkeun kana karanjang.
* Paningkatan: Mulangkeun diskon berulang kana produk Woocommerce.
* Paningkatan: Nambahkeun labél diskon berulang kana produk Woocommerce.
* Paningkatan: Mastikeun jinis produk dina prosés mayar.
* Perbaikan: Ngajaga status kaanggotaan salila prosés downgrade.
* Perbaikan: Mariksa naha langganan aya pikeun nyingkahan kasalahan salila prosés pembatalan.
* Perbaikan: Nambahkeun tanggal mimiti langganan pikeun dipaké dina langganan Woocommerce.
* Internal: Nerapkeun prosés build PHP 8.1 anyar.

Vérsi 2.0.0 - Ditulis ulang lengkep.

* Ditambahkeun: Métode prosés pembatalan pikeun ngahapus langganan woo nalika ngarobah gateway atawa ngabatalkeun kaanggotaan;
* Ditambahkeun: Handler pikeun nurunkeun jeung ningkatkeun kaanggotaan;
* Paningkatan: Muat kagumantungan woocommerce dina formulir pembaruan palanggan di subsitus pikeun ngamungkinkeun pembaruan Account;
* Paningkatan: Muat karanjang Woocommerce anu leres lamun teu aya;
* Paningkatan: Mastikeun urang aya dina tabel situs utama nalika ngolah prosés mayar;
* Paningkatan: Nyieun pesenan pembaruan Ultimo dumasar kana nilai pesenan langganan Woocommerce sarta lain tina pamayaran panungtungan;
* Perbaikan: Tumbu tombol Pindah ka Kaanggotaan WU;
* Perbaikan: Nyetél pesenan Ultimo salaku dibayar nalika pembaruan langganan Woocommerce geus dibayar;
* Build: Nambahkeun MPB salaku builder;

Vérsi 2.0.0-beta-5 - Dileupaskeun dina 2022-01-21

* Internal: Nambahkeun generator hooks jeung filters;
* Internal: Nambahkeun stubs Ultimate Multisite pikeun ningkatkeun genah pamekar;
* Diperbaiki: Nyegah nyieun sababaraha produk nalika teu diperlukeun;

Vérsi 2.0.0-beta.4 - 2021-09-23

* Perbaikan: merlukeun WooCommerce aktip di jaringan tibatan ngan situs utama;
* Paningkatan: nambahkeun filter pikeun ngamungkinkeun add-on dipaké salaku mu-plugin;

Vérsi 2.0.0-beta.3 - 2021-05-28

* Perbaikan: kontrol aksés Dashboard teuing agrésif;
* Paningkatan: Nambahkeun tumbu pitulung WooCommerce kana top-menu Ultimate Multisite;

Vérsi 2.0.0-beta.2 - 2021-05-04

* Paningkatan: nyieun pamayaran pending dina Ultimo nalika nyieun pesenan pembaruan WCS;
* Paningkatan: ngeusian heula widang tagihan ku data palanggan Ultimate Multisite;
* Paningkatan: nambahkeun deui widang tagihan pikeun gateway;

Vérsi 2.0.0-beta.1 - 2021-05-04

* Rilis beta munggaran

-- Vérsi Warisan --

Vérsi 1.2.6 - 26/03/2020

* Diperbaiki: Kasaluyuan leutik jeung vérsi WooCommerce Subscriptions anu leuwih anyar;

Vérsi 1.2.5 - 26/08/2019

* Diperbaiki: Kasalahan dina rilis saméméhna;

Vérsi 1.2.4 - 22/08/2019

* Ditingkatkeun: Nambahkeun pilihan pikeun langsung ngalihkeun ka layar prosés mayar WooCommerce sanggeus integrasi;

Vérsi 1.2.3 - 26/05/2019

* Diperbaiki: Surélék pamayaran pikeun WooCommerce leungit dina sababaraha kasus sisi;

Vérsi 1.2.2 - 27/02/2019

* Ditambahkeun: Pangrojong pikeun biaya setup dina integrasi WooCommerce Subscription;

Vérsi 1.2.1 - 17/11/2018

* Diperbaiki: Masalah kasaluyuan jeung Ultimate Multisite vérsi 1.9.0;

Vérsi 1.2.0 - 10/09/2018

* Ditingkatkeun: URL pembaruan anyar pikeun add-on;
* Ditambahkeun: Pangrojong beta pikeun WooCommerce Subscription;

Vérsi 1.1.2 - 11/02/2018

* Diperbaiki: Tumbu ka Mayar dijieun sacara dinamis pikeun ngaréspon kana parobahan kana endpoint WooCommerce;
* Ditingkatkeun: Urang ayeuna maksa status réngsé pikeun pesenan urang nalika payment_completed disebut pikeun mastikeun hooks pembaruan urang jalan nalika kuduna;

Versi 1.1.1 - 24/01/2018

* Dibereskeun: Ayeuna ogé mariksa naha WooCommerce kakara diaktipkeun dina situs utama;
* Dibereskeun: Kaasup over-loadings pikeun ngamungkinkeun nyieun pesenan kaasup pajeg;

Versi 1.1.0 - 04/11/2017

* Dibereskeun: Ayeuna labél tombol integrasi bener-bener robah pikeun ngagambarkeun setélan. Merlukeun Ultimate Multisite 1.5.0;
* Dibereskeun: WooCommerce Integration ayeuna jalan sanajan WooCommerce henteu aktip dina jaringan sarta ngan diaktipkeun dina situs utama;

1.0.0 - Rilis Mimiti
