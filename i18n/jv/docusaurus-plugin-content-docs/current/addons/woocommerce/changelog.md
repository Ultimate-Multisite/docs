---
title: Cathetan Owah-owahan Integrasi WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Changelog Integrasi WooCommerce

Versi 2.2.0 - Dirilis ing 2026-07-01
* Anyar: Jumlah pajak Ultimate Multisite saiki katon minangka baris biaya WooCommerce kapisah ing checkout, nggawe total pajak luwih cetha sadurunge pembayaran.
* Anyar: Nambah setelan opt-in "Tundha Memberships Sanalika Nalika Renewals Gagal" lan filter `wu_woo_suspend_on_payment_failure` kanggo situs sing pengin penundaan amarga failed-renewal sajrone jendhela retry WooCommerce Subscriptions.
* Didandani: Nyelarasaké status WooCommerce Subscription sing bisa tetep ora sinkron karo memberships Ultimate Multisite sawisé renewals gagal utawa pulih.
* Didandani: Nambah mata uang toko WooCommerce menyang dhaptar mata uang Ultimate Multisite nalika durung ana.
* Didandani: Njaga rincian tagihan pelanggan nalika ngalihaké subscribers menyang checkout WooCommerce.
* Ditingkataké: Nambah kompatibilitas karo Jetpack Autoloader 5.
* Ditingkataké: Ngresiki generasi paket rilis supaya zip GitHub lan marketplace ngindhari direktori staging bertingkat lan berkas pangembangan.

Versi 2.0.6 - Dirilis ing 2026-01-16
* Peningkatan: Nyakup subscriptions inti ing addon. Ora perlu maneh ekstensi Woocommerce Subscriptinos.

Versi 2.0.5 - Dirilis ing 2026-01-09
* Peningkatan: Muat terjemahan saka glotpress API.
* Didandani: Kesalahan fatal ing sawetara page builders.
* didandani: Redirect tanpa wates nalika pelanggan dadi anggota saka situs utama.

Versi 2.0.4 - Dirilis ing 2025-11-14
* Ditambahaké: Terjemahan kanggo luwih akèh basa.
* Diowahi: Dijenengi manèh dadi Ultimate Multisite: Woocommerce Integration.
* Ditambahaké: Kompatibilitas karo Woocommerce 10.2.1.
* Ditambahaké: Kompatibilitas karo Woocommerce Subscriptions 7.7.0.
* Didandani: Kompatibilitas karo PHP 8.4
* Didandani: Redirect nanging nalika ora ana kaca Account WC.

Versi 2.0.3 - Dirilis ing 2025-08-13
* Diowahi: Ngaktifaké pembaruan otomatis nganggo marketplace anyar.

Versi 2.0.2 - Dirilis ing 2025-07-05
* Diowahi: Dijenengi manèh dadi Multisite Ultimate: Woocommerce Integration.
* Ditambahaké: Kompatibilitas karo Woocommerce 9.8.1.
* Ditambahaké: Kompatibilitas karo Woocommerce Subscriptions 7.3.0.
* Didandani: Mbatalaké subscription dening pelanggan.
* Didandani: Kesalahan fatal nalika nggunakake checkout block.
* Peningkatan: Saiki kompatibel karo tabel pesenan kustom kinerja dhuwur Woocommerce.
* Didandani: Pembatalan ing checkout WooCommerce isih bisa nganyari membership.

Versi 2.0.1 - Dirilis ing 2023-08-09

* Ditambahaké: Kompatibilitas karo Woocommerce 7.9.0.
* Ditambahaké: Kompatibilitas karo Woocommerce Subscriptions 5.3.0.
* Ditambahaké: Dhukungan kanggo pembaruan membership.
* Ditambahaké: Kabar babagan trials lan biaya setup ing Woocommerce.
* Ditambahaké: Identifikasi produk Ultimate Multisite Woocommerce nganggo nilai meta.
* Ditambahaké: Nyisipaké perbaikan sepisan kanggo nandhani kabèh produk Woocommerce sing gegandhengan karo Ultimate Multisite.
* Ditambahaké: Mbusak produk sing digawé Ultimate Multisite saka dhaptar Woocommerce.
* Peningkatan: Nggawe diskon Woocommerce ora berulang kanggo ditrapaké menyang cart.
* Peningkatan: Mulihaké diskon berulang menyang produk Woocommerce.
* Peningkatan: Nambah label diskon berulang menyang produk Woocommerce.
* Peningkatan: Mesthekaké jinis produk ing checkout.
* Didandani: Njaga status membership sajrone proses downgrade.
* Didandani: Mriksa apa subscription ana kanggo ngindhari kesalahan sajrone proses pembatalan.
* Didandani: Nambah tanggal wiwitan subscription kanggo digunakaké ing subscriptions Woocommerce.
* Internal: Nerapaké proses build PHP 8.1 anyar.

Versi 2.0.0 - Ditulis ulang sakabèhé.

* Ditambahaké: Cara proses pembatalan kanggo mbusak woo subscription nalika ngganti gateway utawa mbatalaké membership;
* Ditambahaké: Handler kanggo downgrade lan upgrade memberships;
* Peningkatan: Muat dependensi woocommerce ing formulir pembaruan pelanggan ing subsites kanggo ngidini pembaruan account;
* Peningkatan: Mbeneraké muatan cart Woocommerce yen ora ana;
* Peningkatan: Mesthekaké kita ana ing tabel situs utama nalika ngolah checkout;
* Peningkatan: Nggawe pesenan renewal Ultimo adhedhasar nilai pesenan subscription Woocommerce lan dudu saka pembayaran pungkasan;
* Didandani: Link tombol Menyang WU Membership;
* Didandani: Setel pesenan Ultimo minangka wis dibayar nalika renewal Woocommerce subscriptions wis dibayar;
* Build: Nambah MPB minangka builder;

Versi 2.0.0-beta-5 - Dirilis ing 2022-01-21

* Internal: Nambah generator hooks lan filters;
* Internal: Nambah stubs Ultimate Multisite kanggo kualitas urip developer;
* Didandani: Nyegah nggawe pirang-pirang produk nalika ora perlu;

Versi 2.0.0-beta.4 - 2021-09-23

* Didandani: mbutuhaké WooCommerce supaya aktif jaringan tinimbang mung situs utama;
* Peningkatan: nambah filter kanggo ngidini add-on digunakaké minangka mu-plugin;

Versi 2.0.0-beta.3 - 2021-05-28

* Didandani: kontrol akses dashboard kakehan agresif;
* Peningkatan: Nambah link pitulung WooCommerce menyang top-menu Ultimate Multisite;

Versi 2.0.0-beta.2 - 2021-05-04

* Peningkatan: nggawe pembayaran pending ing Ultimo nalika nggawe pesenan renewal WCS;
* Peningkatan: ngisi dhisik fields tagihan nganggo data pelanggan Ultimate Multisite;
* Peningkatan: nambahaké manèh fields tagihan kanggo gateways;

Versi 2.0.0-beta.1 - 2021-05-04

* Rilis beta wiwitan

-- Versi Warisan --

Versi 1.2.6 - 26/03/2020

* Didandani: Inkompatibilitas cilik karo versi WooCommerce Subscriptions sing luwih anyar;

Versi 1.2.5 - 26/08/2019

* Didandani: Kesalahan ing rilis sadurungé;

Versi 1.2.4 - 22/08/2019

* Ditingkataké: Nambah opsi kanggo langsung ngalih menyang layar checkout WooCommerce sawisé integrasi;

Versi 1.2.3 - 26/05/2019

* Didandani: Email pembayaran kanggo WooCommerce ilang ing sawetara kasus pinggir;

Versi 1.2.2 - 27/02/2019

* Ditambahaké: Dhukungan kanggo biaya setup ing integrasi WooCommerce Subscription;

Versi 1.2.1 - 17/11/2018

* Didandani: Masalah kompatibilitas karo Ultimate Multisite versi 1.9.0;

Versi 1.2.0 - 10/09/2018

* Ditingkataké: URL pembaruan anyar kanggo add-ons;
* Ditambahaké: Dhukungan beta kanggo WooCommerce Subscription;

Versi 1.1.2 - 11/02/2018

* Didandani: Link kanggo Mbayar digawe kanthi dinamis kanggo nanggapi owah-owahan ing endpoints WooCommerce;
* Ditingkataké: Saiki kita meksa status rampung kanggo pesenan kita nalika payment_completed diundang kanggo mesthekaké hooks renewal kita mlaku nalika kuduné;

Versi 1.1.1 - 24/01/2018

* Didandani: Saiki uga mriksa apa WooCommerce lagi wae diaktifake ing situs utama;
* Didandani: Nglibatake over-loadings supaya nggawe pesenan bisa nyakup pajak;

Versi 1.1.0 - 04/11/2017

* Didandani: Saiki label tombol integrasi bener-bener owah kanggo nggambarake setelan. Mbutuhake Ultimate Multisite 1.5.0;
* Didandani: Integrasi WooCommerce saiki bisa mlaku sanadyan WooCommerce ora aktif ing jaringan lan mung diaktifake ing t^he situs utama;

1.0.0 - Rilis Wiwitan
