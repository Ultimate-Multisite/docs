---
title: Ngirim Surélék jeung Siaran
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Ngirim Email jeung Siaran (v2) {#sending-emails-and-broadcasts-v2}

_**CATETAN PENTING: Artikel ieu ngarujuk kana Ultimate Multisite vérsi 2.x.**_

Ultimate Multisite hadir jeung fitur anu ngamungkinkeun anjeun komunikasi jeung palanggan anjeun ku ngirim email ka pamaké anu dituju atawa ka sakelompok pamaké, ogé ngirim béwara dina dashboard admin maranéhna pikeun nyiarkeun pangumuman

## Tambahkeun béwara admin kana dashboard palanggan anjeun ku Siaran {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Ngagunakeun fitur siaran Ultimate Multisite, anjeun bisa nambahkeun **béwara admin** kana dashboard admin subsite pamaké anjeun.

Ieu kacida mantuan lamun anjeun kudu nyieun pangumuman saperti pangropéa sistem atawa nawarkeun produk atawa jasa anyar ka pamaké anjeun anu geus aya. Kieu tampilan béwara admin dina dashboard pamaké anjeun.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Pikeun ngamimitian béwara admin, buka dashboard admin jaringan anjeun sarta dina ménu **Ultimate Multisite**, anjeun bakal manggihan pilihan **Siaran**.

![Kaca daptar Siaran dina admin Ultimate Multisite](/img/admin/broadcasts-list.png)

Anjeun ogé bisa ngédit siaran anu geus aya:

![Antarbeungeut édit siaran](/img/admin/broadcast-edit.png)

Tina kaca ieu, klik tombol **Tambah Siaran** di luhur.

Ieu bakal muka jandéla modal Tambah siaran, tempat anjeun bisa milih jinis siaran naon anu rék dikirim.

Mangga pilih **Pesen** tuluy klik tombol **Léngkah Salajengna**.

![Modal tambah siaran jeung pilihan Pesen dipilih](/img/admin/broadcast-add-message.png)

Jandéla salajengna bakal nanya ka anjeun boh **Palanggan target** atawa **Produk target**. Catet yén anjeun bisa milih leuwih ti hiji pamaké atawa leuwih ti hiji produk.

Pikeun neangan boh akun pamaké atawa produk, anjeun kudu ngamimitian ngetik kecap konci di jero widang.

Dina widang **Jinis pesen**, anjeun bisa milih warna béwara. Ieu bakal nekenkeun kagancangan pesen anjeun.

Teras anjeun bisa klik **Léngkah Salajengna**.

![Widang palanggan target, produk target jeung jinis pesen pikeun siaran Pesen](/img/admin/broadcast-message-targets.png)

Jandéla salajengna nyaéta tempat anjeun bisa ngamimitian nyusun pesen ku ngasupkeun judul jeung eusi/pesen anu rék disiarkeun ka pamaké.

![Judul pesen siaran jeung pangédit eusi dina léngkah nyusun](/img/admin/broadcast-edit.png)

Sanggeus nyieun pesen anjeun, anjeun tuluy bisa mencét tombol **Kirim**.

Sareng éta wungkul. Béwara admin kuduna langsung némbongan dina dashboard pamaké anjeun.

## Kirim email ka palanggan anjeun {#send-emails-to-your-customers}

Ngagunakeun fitur siaran Ultimate Multisite, anjeun bisa ngirim email ka pamaké anjeun. Anjeun boga pilihan pikeun ngirim email ngan ka pamaké husus atawa nargétkeun grup pamaké husus dumasar kana produk atawa rencana anu maranéhna langganan.

Pikeun ngamimitian siaran email, buka dashboard admin jaringan anjeun sarta dina ménu Ultimate Multisite, anjeun bakal manggihan pilihan Siaran.

![Kaca daptar Siaran anu dipaké minangka titik awal pikeun siaran email](/img/admin/broadcasts-list.png)

Tina kaca ieu, klik tombol **Tambah siaran** di luhur.

Ieu bakal muka jandéla modal Tambah siaran, tempat anjeun bisa milih jinis siaran naon anu rék dikirim. Mangga pilih **Email** tuluy klik tombol **Léngkah Salajengna**.

![Modal tambah siaran jeung pilihan Email dipilih](/img/admin/broadcast-add-email.png)

Jandéla salajengna bakal nanya ka anjeun boh **Palanggan target** atawa **Produ** k target. Catet yén anjeun bisa milih leuwih ti hiji pamaké atawa leuwih ti hiji produk.

Pikeun neangan boh akun pamaké atawa produk, anjeun kudu ngamimitian ngetik kecap konci di jero widang.

Sakali audién target anjeun dipilih, anjeun bisa klik **Léngkah Salajengna**.

![Pamilihan palanggan target jeung produk target pikeun siaran Email](/img/admin/broadcast-email-targets.png)

Jandéla salajengna nyaéta tempat anjeun bisa ngamimitian nyusun email ku ngasupkeun judul jeung eusi/pesen anu rék dikirim ka pamaké.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Sanggeus nyieun pesen anjeun, anjeun bisa mencét tombol **Kirim**.

Sareng kitu gampangna ngirim email ka pamaké ahir anjeun ngagunakeun fitur siaran.

## Email sistem {#system-emails}

Email sistem dina Ultimate Multisite nyaéta **béwara otomatis** anu dikirim ku sistem sanggeus tindakan tangtu saperti pendaptaran, pamayaran, pemetaan domain, jst. Email ieu bisa diédit atawa dirobah tina setélan Ultimate Multisite. Ieu ogé hadir jeung fitur anu ngamungkinkeun anjeun ngareset jeung ngimpor setélan anu geus aya tina instalasi Ultimate Multisite séjén.

### Ngareset & Ngimpor {#resetting--importing}

Vérsi Ultimate Multisite anyar, ogé add-on, bisa jeung bakal ngadaptarkeun email anyar ti mangsa ka mangsa.

Pikeun nyegah konflik jeung masalah séjénna, **kami moal nambahkeun témplat email anyar salaku Email Sistem dina instalasi anjeun sacara otomatis** , iwal lamun éta krusial pikeun jalan benerna hiji fitur tangtu.

Sanajan kitu, super admin jeung agén bisa ngimpor email anu anyar didaptarkeun ieu ngaliwatan pakakas importer. Prosés éta bakal nyieun email sistem anyar jeung eusi jeung konfigurasi tina témplat email anyar, ngamungkinkeun super admin pikeun nyieun sagala parobahan anu dipikahoyong atawa ngajaga sakumaha ayana.

#### Kumaha cara ngimpor email sistem {#how-to-import-system-emails}

Buka kaca Setélan Ultimate Multisite anjeun jeung angkat ka tab **Email**.

![Tab Email dina setélan Ultimate Multisite anu némbongkeun bagian Email Sistem](/img/config/settings-emails-tab.png)

Teras, dina sidebar, klik tombol **Saluyukeun Email Sistem**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Dina kaca Email Sistem, anjeun bakal ningali tombol aksi **Reset & Import** di luhur. Ngaklik tombol éta kuduna muka jandéla modal impor jeung reset.

![Tombol aksi Reset atawa Import dina kaca admin Email Sistem](/img/admin/system-emails-reset-import.png)

Teras, anjeun bisa ngaganti pilihan Import Emails pikeun ningali email sistem mana anu sadia pikeun diimpor.

<!-- Screenshot unavailable: Modal Reset jeung Import kalayan pilihan Import Emails dimekarkeun -->

#### Ngareset Email Sistem {#reseting-system-emails}

Dina waktos séjén, anjeun bakal sadar yén parobahan anu anjeun jieun kana hiji témplat email tangtu geus teu cocog deui pikeun anjeun sarta anjeun hoyong ngareset éta kana **kaayaan standar**.

Dina kasus kitu, anjeun boga dua pilihan: anjeun tiasa saukur ngahapus email sistem teras ngimpor deui (ngagunakeun parentah di luhur) - anu bakal mupus métrik pangiriman jeung hal-hal séjén, anu ngajadikeun métode ieu kirang dipikaresep.

Atawa anjeun tiasa nganggo **alat Reset & Import** pikeun ngareset témplat email éta.

Pikeun ngareset hiji témplat email, anjeun tiasa nuturkeun léngkah-léngkah di luhur nepi ka ngahontal alat Reset & Import, teras, hurungkeun pilihan **Reset** sarta pilih email anu anjeun hoyong reset deui kana eusi standarna.

<!-- Screenshot unavailable: Modal Reset jeung Import kalayan pilihan Reset Emails dimekarkeun -->
