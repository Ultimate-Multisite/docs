---
title: Cathetan Owah-owahan Panggawe Kaca Admin
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Cathetan Owah-owahan Panggawe Kaca Admin {#admin-page-creator-changelog}

### Versi 1.9.0 - Dirilis tanggal 2026-01-18 {#version-190---released-on-2026-01-18}

* Didandani: Kasalahan fatal nalika ngaktifake.
* Direfaktor: Kelas sumber konten supaya nggunakake trait Singleton kanthi inisialisasi konstruktor induk sing bener
* Didandani: Kasalahan kompilasi template Vue.js sing nyegah pamilih jinis konten supaya ora dirender
* Didandani: Properti data Vue sing ilang (template_id, external_link_url_embedable, external_link_url_checking)
* Didandani: Editor TinyMCE ora miwiti kanthi bener nalika muatan kaca
* Didandani: Berkas dhukungan Divi ora dimuat otomatis liwat Composer
* Didandani: Sintaks PHP rusak ing kelas dhukungan Divi
* Ditambah apik: Pangaturan lan minifikasi aset JavaScript
* Ditambah apik: Kompatibilitas karo versi WordPress lan page builder paling anyar

= Versi: 1.8.8 - Dirilis tanggal 2025-09-28

* Ganti jeneng prefiks dadi ultimate-multisite; nganyari text domain; mundhakake versi.

### Versi 1.8.7 - 04/10/2023 {#version-187---04102023}

* Didandani: Kasalahan fatal nalika nyoba nambah kaca admin anyar;
* Didandani: Konflik karo prefiks stylesheet Oxygen;

### Versi 1.8.6 - 09/08/2023 {#version-186---09082023}

* Ditambah: Nambah opsi kanggo nampilake data saka situs utama utawa sub-situs saiki.
* Ditambah: Nambah dhukungan kanggo WordPress Block Editor (Gutenberg).
* Didandani: Ndandani masalah aset kaca Brizy sing ora kamuat.

### Versi 1.8.5 - 09/12/2020 {#version-185---09122020}

* Didandani: Masalah karo Screen Options kanggo ndhelikake menu sing ora ilang;

### Versi 1.8.4 - 11/11/2020 {#version-184---11112020}

* Didandani: Dhukungan kanggo Multisite Ultimate v2;

### Versi 1.8.3 - 01/10/2020 {#version-183---01102020}

* Didandani: Ora kompatibel karo Beaver Builder saka build sadurunge;
* Didandani: Ora konsistene margin karo WP 5.5;

### Versi 1.8.2 - 21/09/2020 {#version-182---21092020}

* Didandani: Ora kompatibel cilik karo WP 5.5;

### Versi 1.8.1 - 05/08/2020 {#version-181---05082020}

* Didandani: Ora kompatibel karo Brizy 2.0;
* Didandani: Masalah kinerja cilik nalika mbangun dhaptar menu;

### Versi 1.8.0 - 27/04/2020 {#version-180---27042020}

* Didandani: Kabar sing didhelikake ing sangisore top-bar nalika ora ana mode margin sing dipilih;
* Ditambah: Kaca kustom saiki bisa ngganti pirang-pirang kaca tingkat ndhuwur lan sub-kaca admin WordPress bebarengan;
* Ditambah: Admin saiki bisa ndhelikake kaca admin nganggo WP Admin Pages PRO;

### Versi 1.7.9 - 01/04/2020 {#version-179---01042020}

* Didandani: Brizy 1.10.118 lan luwih anyar ngrusak dhukungan SVG ing kaca admin;

### Versi 1.7.8 - 26/03/2020 {#version-178---26032020}

* Didandani: Kasalahan escaping sing ngrusak kaca Editor nalika nggunakake basa Prancis;

### Versi 1.7.7 - 04/03/2020 {#version-177---04032020}

* Didandani: Ora kompatibel cilik karo Brizy Builder;
* Ditambah apik: Nganyari Freemius SDK menyang 2.3.2;

### Versi 1.7.6 - 10/02/2020 {#version-176---10022020}

* Didandani: Tombol sunting Admin Page ing pojok tengen-ngisor ora bisa digunakake ing Dashboard Widgets;
* Didandani: Ora kompatibel cilik karo Astra;
* Didandani: Versi anyar Brizy ngrusak kompatibilitas;

### Versi 1.7.5 - 14/12/2019 {#version-175---14122019}

* Didandani: Nambah handler edge-case anyar kanggo ngisi item menu ing opsi Replace Page;
* Didandani: Font Elementor ora bisa digunakake;
* Ditambah apik: Nganyari Freemius SDK kanggo ndhukung ndhelikake info sensitif saka kaca Account;

### Versi 1.7.4 - 29/11/2019 {#version-174---29112019}

* Didandani: Ora kompatibel karo WooCommerce Memberships;
* Didandani: Komponen tab Oxygen Builder ora bisa digunakake;
* Didandani: Beaver Themer ora bisa digunakake;

### Versi 1.7.3 - 12/07/2019 {#version-173---12072019}

* Didandani: Kaca ilang nalika induke dikonversi dadi jinis kaca admin liyane;
* Ditambah apik: Pemisah tabel dhaptar sing luwih apik antarane jinis Admin Page;
* Ditambah apik: Tinjauan keamanan kanggo kabèh codebase plugin;
* Ditambah apik: Cathetan ing bebaya tab Separator nalika fitur ora kasedhiya kanggo jinis sumber menu/konten tartamtu;

### Versi 1.7.2 - 01/07/2019 {#version-172---01072019}

* Didandani: Nganyari versi Freemius SDK menyang 2.3.0;
* Didandani: Masalah ora kompatibel karo Flywheel;

### Versi 1.7.1 - 27/06/2019 {#version-171---27062019}

* Didandani: Welcome Widget saiki ditampilake kanggo kabeh peran;
* Didandani: Screen Option kanggo ndhelikake/nampilake menu Admin Pages ora ditambahake yen menu lagi didhelikake liwat filter sing didokumentasikake ing https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Ditambah apik: Ndhelikake menu Admin Pages saiki uga ndhelikake template sing digawe saka dhaptar template simpenan Beaver Builder ing UI builder;
* Ditambah: Opsi kanggo ngaktifake lan mateni kaca admin sacara massal;
* Ditambah: Opsi kanggo nampilake kaca ing situs utama uga;
* Ditambah: Opsi kanggo ngganti jeneng label menu tingkat ndhuwur lan sub-level ing mode Replace;

### Versi 1.7.0 - 04/06/2019 {#version-170---04062019}

* Didandani: Masalah template Oxygen sing ora katon;
* Ditambah: Dhukungan kanggo Panggawéan Widget!

### Versi 1.6.1 - 22/05/2019 {#version-161---22052019}

* Didandani: Salah ketik;
* Didandani: Kaca sub-menu nimpa item sub-menu sadurunge kanthi nilai urutan sing padha;
* Didandani: Duplikasi saiki ngreset slug kaca sing diduplikasi;
* Ditambah apik: Nganyari berkas po pt_BR lan es_ES;
* Ditambah apik: Tabel dhaptar saiki uga nyantumake jeneng kaca kustom minangka kaca induk;

### Versi 1.6.0 - 21/05/2019 {#version-160---21052019}

* Ditambah: External Links saiki uga ndhukung muatan iframe;

### Versi 1.5.5 - 17/05/2019 {#version-155---17052019}

* Didandani: Pesen bebaya sing muncul nalika kaca dibusak utawa diduplikasi;
* Didandani: Setelan idin ora ditrapake marang Admin;

### Versi 1.5.4 - 08/05/2019 {#version-154---08052019}

* Didandani: Ora kompatibel karo Sliced Invoices;
* Didandani: Masalah cilik karo Oxygen;
* Didandani: Placeholder ing kolom judhul kaca admin anyar ora ilang nalika key-up;

### Versi 1.5.3 - 03/05/2019 {#version-153---03052019}

* Didandani: Ora kompatibel karo kaca opsi Advanced Custom Field;
* Ditambah: Opsi kanggo nambah pangguna tartamtu minangka target kaca admin kustom;

### Versi 1.5.2 - 30/04/2019 {#version-152---30042019}

* Didandani: Ora kompatibel karo versi Brizy sing luwih anyar;
* Ditambah: Terjemahan Spanyol ditambahake - saka kabecikan John Rozzo. Matur nuwun, John!
* Ditambah: Dhukungan beta kanggo Oxygen Builder;

### Versi 1.5.1 - 15/04/2019 {#version-151---15042019}

* Didandani: Masalah karo placeholder ing editor Normal lan HTML;
* Didandani: Admin Pages ora katon ing Tools -> Export;
* Didandani: Muat skrip lan gaya mung ing kaca duwé awake dhewe;
* Ditambah: Super Admin saiki bisa nduplikasi Admin Pages;

### Versi 1.5.0 - 29/03/2019 {#version-150---29032019}

* Didandani: Bug cilik sing kecekel dening Sentry;
* Didandani: Tombol Delete ora bisa digunakake ing layar kaca Edit Admin;
* Ditambah apik: Tombol BeaverBuilder diganti supaya cetha yen lisensi Standard BB uga didhukung;
* Ditambah: Admin bisa nyetel urutan submenu uga;
* Ditambah: Mode ngganti kaca saiki nduweni dhukungan kanggo kabeh item menu sing kasedhiya;

### Versi 1.4.0 - 14/02/2019 (mandiri) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Ditambah: Diluncurake minangka plugin mandiri ing https://wpadminpagespro.com
* Ditambah: Opsi kanggo mbusak item menu Admin Pages saka menu sawise proses nggawe kaca rampung;
* Ditambah: Opsi kanggo mbusak kabar admin saka kaca admin;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Ditambah: Inline Editor;
* Ditambah: Kelas induk sumber konten sing digabungake kanggo nggawe nambah Page Builders/Content Sources anyar gampang ing mangsa ngarep;
* Ditambah: Dhukungan kanggo External URLs;

### Versi 1.3.0 - 15/01/2019 {#version-130---15012019}

* Didandani: Admin Pages ora katon ing main-site ing lingkungan multisite;
* Ditambah apik: Jinis post kustom Multisite Ultimate dibusak saka layar ekspor subsites;
* Ditambah: Top-bar kanthi tumindak cepet kanggo admin jaringan ing kaca nggawe;
* Ditambah: GEDHE! Dhukungan Elementor!
* Ditambah: GEDHE! Dhukungan Brizy!

### Versi 1.2.1 - 17/11/2018 {#version-121---17112018}

* Didandani: Nggawe plugin kompatibel karo Multisite Ultimate 1.9.0;

### Versi 1.2.0 - 10/09/2018 {#version-120---10092018}

* Ditambah: Dhukungan PHP ditambah yen WU_APC_ALLOW_PHP_PROCESSING disetel dadi true ing wp-config.php. Iki ora nggunakake eval duweke PHP, nanging isih bisa nyebabake bolongan keamanan. Gunakake iki kanthi ati-ati;
* Ditambah apik: Panganyari plugin add-on;
* Ditambah apik: URL anyar kanggo server pembaruan;

### Versi 1.1.2 - 16/08/2018 {#version-112---16082018}

* Didandani: Masalah cilik karo WP Engine;

### Versi 1.1.1 - 16/08/2018 {#version-111---16082018}

* Didandani: Idin ora ditrapake kanthi bener kanggo kaca panggantos;

### Versi 1.1.0 - 15/08/2018 {#version-110---15082018}

* Ditambah: Cithakan Beaver Builder saiki didhukung! Sampeyan bisa nggunakake page builder favorit kanggo nggawe kaca admin kustom;
* Ditambah: Saiki bisa ngganti konten saka kaca admin baku WordPress uga;
* Ditambah: Saiki bisa nambah konten sing digawe menyang ndhuwur utawa ngisor kaca admin baku WordPress uga;

### 0.0.1 {#001}
- Rilis Wiwitan
