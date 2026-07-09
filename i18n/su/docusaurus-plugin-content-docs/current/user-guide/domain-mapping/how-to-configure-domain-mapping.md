---
title: Kumaha Ngonpigurasikeun Pemetaan Domain
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Kumaha Ngonpigurasikeun Pemetaan Domain (v2)

_**CATETAN PENTING: Artikel ieu ngarujuk kana Ultimate Multisite vérsi 2.x.**_

Salah sahiji fitur pangkuatna tina jaringan premium nyaéta kamampuhan pikeun nawarkeun ka klién urang kasempetan pikeun ngaitkeun domain tingkat luhur kana situs maranéhna. Barina ogé, mana nu katingalina leuwih profésional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) atawa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ku sabab éta Ultimate Multisite nawarkeun fitur éta sacara bawaan, tanpa kudu ngagunakeun plugin pihak katilu.

## Naon ari pemetaan domain?

Sakumaha ngaranna, pemetaan domain nyaéta kamampuhan anu ditawarkeun ku Ultimate Multisite pikeun narima pamundut pikeun domain custom sarta ngapetakeun pamundut éta ka situs anu saluyu dina jaringan anu geus dikaitkeun jeung domain husus éta.

### Kumaha nyetél pemetaan domain dina Jaringan Ultimate Multisite anjeun

Pemetaan domain merlukeun sababaraha setélan ti pihak anjeun sangkan jalan. Untungna, Ultimate Multisite ngaotomatiskeun pagawéan beurat pikeun anjeun jadi anjeun bisa gampang nyumponan saratna.

Salila pamasangan Ultimate Multisite, wizard bakal otomatis nyalin jeung masang **sunrise.php** kana polder anu ditangtukeun. **Wizard moal ngidinan anjeun neruskeun nepi ka léngkah ieu réngsé**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Ieu hartina sanggeus wizard pamasangan Ultimate Multisite réngsé nyetél jaringan anjeun, anjeun bisa langsung ngamimitian ngapetakeun domain custom.

Catet yén pemetaan domain dina Ultimate Multisite henteu wajib. Anjeun boga pilihan pikeun ngagunakeun fungsi pemetaan domain asli WordPress Multisite atawa solusi pemetaan domain séjénna.

Lamun anjeun perlu mareuman pemetaan domain Ultimate Multisite pikeun méré jalan ka solusi pemetaan domain séjén, anjeun bisa mareuman fitur ieu dina **Ultimate Multisite > Setélan > Pemetaan Domain**.

![Kaca setélan Pemetaan Domain anu némbongkeun alihan admin, pesen pemetaan, jeung pilihan DNS](/img/config/domain-mapping-settings.png)

Pas di handapeun pilihan ieu, anjeun ogé bisa ningali pilihan **Paksakeun Alihan Admin**. Pilihan ieu ngamungkinkeun anjeun ngadalikeun naha palanggan anjeun bakal bisa ngaksés Dashboard admin maranéhna boh dina domain custom jeung subdomain maranéhna, atawa ngan dina salah sahijina.

Lamun anjeun milih **Paksakeun alihkeun ka domain anu dipetakeun** , palanggan anjeun ngan bakal bisa ngaksés Dashboard admin maranéhna dina domain custom maranéhna.

Pilihan **Paksakeun alihkeun ka** **domain jaringan** bakal ngalakukeun sabalikna - palanggan anjeun ngan bakal diidinan ngaksés Dashboard maranéhna dina subdomain maranéhna, sanajan nyobian asup dina domain custom maranéhna.

Jeung pilihan **Idinan aksés ka admin ku domain anu dipetakeun jeung domain jaringan** ngamungkinkeun maranéhna ngaksés Dashboard admin maranéhna boh dina subdomain boh dina domain custom.

![Dropdown Alihan Admin dimekarkeun anu némbongkeun tilu pilihan alihan](/img/config/domain-mapping-redirect-options.png)

Aya dua cara pikeun ngapetakeun domain custom. Anu kahiji nyaéta ku ngapetakeun ngaran domain tina Dashboard admin jaringan anjeun salaku super admin jeung anu kadua nyaéta ngaliwatan Dashboard admin subsitus dina kaca Account.

Tapi saméméh anjeun ngamimitian ngapetakeun domain custom ka salah sahiji subsitus dina jaringan anjeun, anjeun kudu mastikeun yén **setélan DNS** tina ngaran domain geus dikonpigurasikeun kalayan bener.

###

### Mastikeun setélan DNS domain geus dikonpigurasikeun kalayan bener

Supaya pemetaan bisa jalan, anjeun kudu mastikeun domain anu rék dipetakeun nujul ka alamat IP Jaringan anjeun. Catet yén anjeun peryogi alamat IP Jaringan - alamat IP tina domain tempat Ultimate Multisite dipasang - lain alamat IP tina domain custom anu rék anjeun petakeun. Pikeun néangan alamat IP tina domain husus, kami nyarankeun muka [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), contona.

Pikeun ngapetakeun domain kalayan bener, anjeun kudu nambahkeun **A RECORD** dina konfigurasi **DNS** anjeun anu nujul ka **alamat IP** éta. Pangaturan DNS béda pisan antara registrar domain anu béda, tapi aya loba tutorial online anu ngabahas éta lamun anjeun néangan " _Nyieun A Record dina XXXX_ " dimana XXXX nyaéta registrar domain anjeun (conto: " _Nyieun A Record dina_ _GoDaddy_ ").

Lamun anjeun manggihan kasulitan sangkan ieu jalan, **taroskeun ka dukungan registrar domain anjeun** sarta maranéhna bakal bisa ngabantu anjeun dina bagian ieu.

Lamun anjeun ngarencanakeun ngidinan klién anjeun ngapetakeun domain sorangan, maranéhna kudu ngalakukeun pagawéan dina bagian ieu sorangan. Arahkeun maranéhna ka sistem dukungan registrar maranéhna lamun maranéhna teu bisa nyieun A Record.

### Ngapetakeun ngaran domain custom salaku Super Admin

Nalika anjeun asup salaku super admin dina jaringan anjeun, anjeun bisa gampang nambahkeun jeung ngatur ngaran domain custom ku muka **Ultimate Multisite > Domain**.

![Kaca daptar Domain dina Ultimate Multisite](/img/admin/domains-list.png)

Dina kaca ieu, anjeun bisa ngaklik tombol **Tambah Domain** di luhur sarta ieu bakal muka jandéla modal tempat anjeun bisa nyetél jeung ngeusian **ngaran domain custom** , **subsitus** anu rék anjeun terapkeun ngaran domain custom éta, sarta mutuskeun naha rék nyetél éta salaku ngaran **domain utama** atawa henteu (catet yén anjeun bisa ngapetakeun **sababaraha ngaran domain ka hiji subsitus**).

![Modal Tambah Domain jeung ngaran domain, pamilih situs, jeung toggle domain utama](/img/admin/domain-add-modal.png)

Sanggeus ngalebetkeun sadaya inpormasi, anjeun teras bisa ngaklik tombol **Tambah Domain Anu Geus Aya** di handap.

Ieu bakal ngamimitian prosés verifikasi jeung nyokot inpormasi DNS tina domain custom. Anjeun ogé bakal ningali log di handapeun kaca pikeun nuturkeun prosés anu keur dijalankeun. Prosés ieu bisa merlukeun sababaraha menit pikeun réngsé.

Ultimate Multisite v2.13.0 ogé nyieun rékaman domain internal sacara otomatis nalika situs anyar dijieun dina host anu kudu dianggap minangka domain per-situs. Lamun host nyaéta domain utama jaringan, atawa salah sahiji domain dasar formulir checkout babarengan anu dikonfigurasi dina widang **URL Situs**, rékaman mapped-domain otomatis bakal diliwatan supaya domain dasar babarengan éta tetep sadia pikeun unggal situs anu makéna.

Nalika palanggan ngadaptarkeun domain anyar ngaliwatan Domain Seller v1.3.0 atawa nu leuwih anyar, Ultimate Multisite sacara standar otomatis ngamapkeun domain anu kadaptar ka situs jaringan palanggan. Administrator henteu deui kudu nambahkeun rékaman mapped-domain misah sanggeus pendaptaran hasil, iwal lamun maranéhna hayang nyaluyukeun pilihan saperti tanda domain utama, kaayaan aktivasina, atawa pangaturan SSL.

**Tahap** atawa statusna kudu robah tina **Mariksa DNS** jadi **Siap** lamun sagalana geus disetél kalayan bener.

<!-- Screenshot teu sadia: Baris domain némbongkeun tahap Mariksa DNS dina daptar domain -->

<!-- Screenshot teu sadia: Baris domain némbongkeun tahap Siap kalayan indikator status héjo -->

Lamun anjeun ngaklik ngaran domain, anjeun bakal bisa ningali sababaraha pilihan di jerona. Hayu urang tingali sakedapan:

![Kaca rinci domain kalayan toggle tahap, situs, aktip, utama jeung SSL](/img/admin/domain-edit.png)

**Tahap:** Ieu nyaéta tahap tempat domain ayeuna aya. Nalika anjeun mimiti nambahkeun domain, kamungkinan éta bakal aya dina tahap **Mariksa DNS**. Prosésna bakal mariksa éntri DNS sarta mastikeun yén éta bener. Teras, domain bakal ditempatkeun dina tahap **Mariksa SSL**. Ultimate Multisite bakal mariksa naha domain miboga SSL atawa henteu sarta bakal ngagolongkeun domain anjeun salaku **Siap** atawa **Siap (tanpa SSL)**.

**Situs:** Subdomain anu pakait jeung domain ieu. Domain anu dimapkeun bakal némbongkeun eusi tina situs husus ieu.

**Aktip:** Anjeun bisa ngahurungkeun atawa mareuman pilihan ieu pikeun ngaktipkeun atawa nganonaktipkeun domain.

**Naha Domain Utama?:** Palanggan anjeun bisa miboga leuwih ti hiji domain anu dimapkeun pikeun tiap situs. Paké pilihan ieu pikeun milih naha ieu domain utama pikeun situs husus éta.

**Naha Aman?:** Sanajan Ultimate Multisite mariksa naha domain miboga sertipikat SSL atawa henteu saméméh ngaktipkeunana, anjeun bisa sacara manual milih pikeun ngamuat domain kalayan atawa tanpa sertipikat SSL. Catet yén lamun ramatloka henteu miboga sertipikat SSL sarta anjeun nyobian maksa ngamuatna kalayan SSL, éta bisa méré kasalahan.

### Ngamapkeun ngaran domain custom salaku pamaké Subsite

Administrator sub-situs ogé bisa ngamapkeun ngaran domain custom tina dashboard admin sub-situs maranéhna.

Mimiti, anjeun kudu mastikeun yén anjeun ngaktipkeun pilihan ieu dina setélan **Pangamapan domain**. Tingali screenshot di handap.

<!-- Screenshot teu sadia: Setélan pangamapan domain anu ngamungkinkeun pamaké sub-situs ngamapkeun domain ngaliwatan toggle Customer DNS Management -->

Anjeun ogé bisa nyetél atawa ngonfigurasi pilihan ieu dina tingkat **Pakét** atawa pilihan produk dina **Ultimate Multisite > Produk**.

![Bagian Domain Custom dina kaca édit produk](/img/config/product-custom-domains.png)

Nalika salah sahiji pilihan éta diaktipkeun sarta pamaké sub-situs diidinan pikeun ngamapkeun ngaran domain custom, pamaké sub-situs kudu ningali metabox dina kaca **Account** anu disebut **Domain**.

<!-- Screenshot teu sadia: Metabox Domain dina kaca Account sub-situs kalayan tombol Tambah Domain -->

Pamaké bisa ngaklik tombol **Tambah Domain** sarta éta bakal nembongkeun jandéla modal kalayan sababaraha parentah.

<!-- Screenshot teu sadia: Modal Tambah Domain némbongkeun parentah DNS A-record pikeun pamaké sub-situs -->

Pamaké teras bisa ngaklik **Léngkah Salajengna** sarta neruskeun pikeun nambahkeun ngaran domain custom. Maranéhna ogé bisa milih naha ieu bakal jadi domain utama atawa henteu.

<!-- Screenshot teu sadia: Formulir Tambah Domain kalayan widang ngaran domain custom jeung toggle domain utama -->

<!-- Screenshot teu sadia: Léngkah konfirmasi Tambah Domain anu micu verifikasi DNS -->

Klik **Tambah Domain** bakal ngamimitian prosés pikeun marios jeung nyokot inpormasi DNS tina domain custom.

### Ngeunaan Sinkronisasi Domain

Sinkronisasi Domain nyaéta prosés dimana Ultimate Multisite nambahkeun ngaran domain custom ka akun hosting anjeun salaku domain add-on **supaya pangamapan domain jalan**.

Sinkronisasi domain lumangsung sacara otomatis lamun panyadia hosting anjeun miboga integrasi jeung fitur pangamapan domain Ultimate Multisite. Ayeuna, panyadia hosting ieu nyaéta _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ jeung _Cpanel._

Nalika integrasi panyadia-host aktip, Ultimate Multisite ogé bisa ngantrekeun tugas nyieun DNS atawa subdomain di sisi panyadia pikeun situs anu anyar dijieun. Lamun euweuh integrasi anu ngadéngékeun tugas éta, padamelan latar bakal diliwatan pikeun ngahindarkeun éntri antrean anu teu ngalakukeun nanaon. Pamariksaan DNS jeung SSL pikeun domain anu dimapkeun tetep dijalankeun ngaliwatan prosés tahap-domain normal.

Anjeun kudu ngaktipkeun integrasi ieu dina setélan Ultimate Multisite dina tab **Integrasi**.

![Tab Integrasi dina setélan Ultimate Multisite anu némbongkeun panyadia hosting](/img/config/integrations-tab.png)

<!-- Screenshot teu sadia: Tumbu Konfigurasi panyadia hosting dina tab setélan Integrasi -->

_Catet yén lamun panyadia hosting anjeun lain salah sahiji panyadia anu disebutkeun di luhur,**anjeun kudu sacara manual nyinkronkeun atawa nambahkeun ngaran domain** ka akun hosting anjeun._
