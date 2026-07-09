---
title: Log Parobahan Penjual Domain
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Catetan Parobahan Domain Seller {#domain-seller-changelog}

Vérsi 1.3.0 - Dileupaskeun dina 2026-06-02
- Anyar: Nambahkeun pépéling network-admin nalika saldo reseller HostAfrica jadi teuing handap
- Anyar: Nambahkeun mapping otomatis pikeun domain nu kakara didaptarkeun ka situs jaringan
- Perbaikan: Sarat widang registrant diterapkeun ngan nalika ngadaptarkeun domain anyar
- Perbaikan: Ngajadikeun bewara monitor saldo bisa dipiceun
- Perbaikan: Mastikeun wincikan tagihan registrant WooCommerce tetep dijaga
- Perbaikan: Ngalarapkeun sarat kontak registrant nalika pendaptaran
- Perbaikan: Nyegah produk pendaptaran domain dijieun ku markup 0%
- Perbaikan: Ngajaga pilihan domain jeung harga ngaliwatan alur sési checkout
- Perbaikan: Ningkatkeun tampilan mata uang harga domain HostAfrica
- Perbaikan: Ningkatkeun paripolah form-action checkout pikeun nyegah teu cocogna query-var WP-core
- Ditingkatkeun: Ngaitkeun dokuméntasi konfigurasi reseller HostAfrica dina pituduh setup

Vérsi 1.2.0 - Dileupaskeun dina 2026-05-25
- Anyar: Nambahkeun HostAfrica minangka integrasi ngajual domain kalayan dukungan checkout, setup wizard, lookup, TLD/harga, pendaptaran, pembaruan, transfer, nameserver, DNS, kode EPP, registrar lock, jeung panyalindungan ID
- Anyar: Nambahkeun Openprovider minangka integrasi ngajual domain kalayan dukungan harga reseller, pendaptaran, pembaruan, transfer, nameserver, DNS, kode EPP, registrar lock, privasi WHOIS, jeung sinkronisasi TLD
- Anyar: Nambahkeun Hostinger minangka integrasi ngajual domain maké token Hostinger API babarengan tina integrasi inti pikeun pamariksaan kasadiaan, pendaptaran, apdet nameserver, registrar lock, jeung privasi WHOIS
- Ditingkatkeun: Nambahkeun docblock aksi jeung filter siklus hirup domain pikeun pituduh integrasi pamekar
- Ditingkatkeun: Ngapdet metadata kasaluyuan plugin ka WordPress 7.0 dina readme addon
- Ditingkatkeun: Ngapdet témplat perencanaan nu dipaké pikeun koordinasi rilis nu bakal datang

Vérsi 1.1.0 - Dileupaskeun dina 2026-05-08
- Anyar: Nyieun rékaman DNS (add_dns_record) dilaksanakeun pikeun registrar ResellerClub, Enom, jeung OpenSRS
- Perbaikan: Parser Rékaman DNS standar ayeuna bisa narima token {DOMAIN} jeung {SITE_URL}
- Perbaikan: Slug widang checkout pilihan domain dibéré namespace pikeun nyegah tabrakan jeung site_url

Vérsi 1.0.8 - Dileupaskeun dina 2026-05-07
- Perbaikan: Harga domain ResellerClub ayeuna nyokot harga biaya langsung tina endpoint API nu bener

Vérsi 1.0.7 - Dileupaskeun dina 2026-05-06
* Perbaikan: ResellerClub test_connection ngirim parameter tlds nu diperlukeun (#224)

Vérsi 1.0.6 - Dileupaskeun dina 2026-05-05
* Perbaikan: Pendaptaran domain ResellerClub ayeuna jalan leres kalayan pananganan réspon API nu ditingkatkeun jeung routing panyadia dumasar registry
* Perbaikan: Ningkatkeun UX kaca admin Register Domain
* Dipupus: Integrasi registrar CyberPanel

Vérsi 1.0.5 - Dileupaskeun dina 2026-04-02
* Anyar: Integrasi registrar GoDaddy pikeun pendaptaran jeung pangelolaan domain
* Anyar: Integrasi registrar NameSilo
* Anyar: Integrasi registrar ResellerClub
* Anyar: Auto-verify domain pangirim SES nalika meuli jeung mapping domain
* Perbaikan: Ngajaga konstanta plugin tina redefinisi dina lingkungan tés
* Perbaikan: Flag MySQL word-split leres dina install-wp-tests.sh

Vérsi 1.0.4 - Dileupaskeun dina 2026-03-14
* **Perbaikan:** Sababaraha aset css nu leungit
* **Perbaikan:** Kasalahan patali jeung tlds nu teu sadia

Vérsi 1.0.3 - Dileupaskeun dina 2026-03-09
* **Perbaikan:** Kasalahan properti réaktif Vue (domain_option, selected_domain, domain_provider) nalika maké témplat signup warisan jeung shortcode checkout
* **Perbaikan:** Widang input subdomain teu sajajar jeung téks kaleuleuwihi gedé dina widang checkout pilihan domain
* **Perbaikan:** Sumputkeun blok preview "Your URL will be" nalika widang pilihan domain aya

Vérsi 1.0.2 - Dileupaskeun dina 2026-03-01
* **Ditingkatkeun:** Ngahapus setélan markup global tina kaca setélan — harga ayeuna éksklusif per-produk
* **Ditingkatkeun:** Nambahkeun tautan "Manage Domain Products" dina kaca setélan pikeun navigasi gancang
* **Ditingkatkeun:** Déskripsi widang jeung tooltip nu leuwih écés pikeun setélan produk domain (catch-all vs husus TLD, jinis markup, harga bubuka)
* **Ditingkatkeun:** Déskripsi nu leuwih hadé sapanjang kaca setélan (néangan TLD, pembaruan, DNS, béwara)

Vérsi 1.0.1 - Dileupaskeun dina 2026-02-27

* **Anyar:** Alat impor TLD pikeun ngokolakeun harga sacara masal
* **Anyar:** Pangrojong harga bubuka pikeun produk domain
* **Anyar:** Runtuyan tés E2E nganggo Cypress
* **Anyar:** Citakan email pikeun béwara siklus hirup domain
* **Anyar:** Widang alamat registrant dina modal pendaptaran domain admin, tos dieusian ti setélan
* **Anyar:** Antarmuka ngokolakeun DNS palanggan kalayan pangrojong nambah, ngédit, jeung mupus rékaman
* **Anyar:** Pilihan checkout "Bring your own domain" kalayan pemetaan domain otomatis
* **Anyar:** Ngahasilkeun otomatis URL situs tina ngaran domain nalika checkout
* **Anyar:** Konfigurasi nameserver jeung rékaman DNS baku dina setélan
* **Anyar:** Rincian pendaptaran domain jeung ngokolakeun DNS dina kaca édit domain inti
* **Anyar:** Wizard setup otomatis nyieun produk domain baku kalayan standar anu merenah
* **Anyar:** Sinkronisasi TLD otomatis harian via cron di sakuliah sadaya panyadia anu dikonfigurasi
* **Anyar:** Panyalindungan privasi WHOIS kalayan konfigurasi per-produk (salawasna hurung, pilihan palanggan, atawa dinonaktipkeun)
* **Anyar:** Kotak centang privasi WHOIS dina checkout kalayan tampilan harga jeung pangrojong modeu poék
* **Anyar:** Kaca admin Register Domain pikeun pendaptaran domain manual
* **Anyar:** Apdet plugin otomatis via server apdet Ultimate Multisite
* **Anyar:** Tab saringan jinis produk domain dina tabel daptar produk kalayan gaya badge ungu
* **Anyar:** Widang kontak registrant (ngaran, alamat, kota, nagara bagian, kode pos, nagara, telepon) dina formulir checkout domain
* **Anyar:** Validasi widang registrant saméméh nelepon API registrar kalayan pesen kasalahan anu écés
* **Anyar:** Kanal log husus panyadia pikeun kajadian pendaptaran domain (mis. domain-seller-namecheap.log)
* **Anyar:** Widang kontak registrant dina formulir checkout pendaptaran/signup utama (ditémbongkeun nalika ngadaptarkeun domain)
* **Dironjatkeun:** Ngaganti widang checkout Domain Search ku widang Domain Selection ngahiji anu ngarojong tab subdomain, ngadaptar, jeung domain anu geus aya
* **Dironjatkeun:** Setélan produk domain dirender inline dina kaca édit produk via sistem widget inti
* **Dironjatkeun:** Inpormasi domain palanggan nyambung kana widget pemetaan domain inti tibatan metabox mandiri
* **Dironjatkeun:** Wizard impor TLD disederhanakeun jadi sinkronisasi sakali klik ti sadaya panyadia
* **Dironjatkeun:** Kasadiaan domain Namecheap ngagunakeun panggero API batch pikeun pilarian leuwih gancang
* **Dironjatkeun:** API harga Namecheap ngagunakeun parameter jeung parsing réspon anu bener
* **Dironjatkeun:** Panyimpenan TLD dipuseurkeun dina hiji pilihan jaringan
* **Dironjatkeun:** Pencatetan kagiatan domain pikeun parobahan DNS, transfer, jeung panerapan konfigurasi
* **Dironjatkeun:** Sinkronisasi TLD pinuh pikeun OpenSRS nganggo daptar master IANA kalayan validasi batch
* **Dironjatkeun:** Sinkronisasi TLD pinuh pikeun Namecheap kalayan pamundut API berpaginasi
* **Dironjatkeun:** Ngaganti kelas panyadia warisan ku pola Integration Registry
* **Dironjatkeun:** Panel setélan kalayan konfigurasi DNS jeung transfer
* **Dironjatkeun:** Nomer telepon otomatis diformat kana format registrar +CC.NNN
* **Dironjatkeun:** Validasi widang telepon ngaleungitkeun karakter format saméméh dikirim
* **Dironjatkeun:** Sarat vérsi ditingkatkeun ka Ultimate Multisite 2.4.12 kalayan béwara anu leuwih écés
* **Dironjatkeun:** Alur kerja CI ngagunakeun checkout anu luyu pikeun addon jeung plugin inti
* **Dironjatkeun:** prepare_registrant_info() maca tina méta pamaké anu disimpen checkout kalayan cadangan alamat tagihan
* **Dibereskeun:** AJAX pilarian domain gagal pikeun pamaké anu teu asup log nalika checkout
* **Dibereskeun:** AJAX harga domain gagal pikeun pamaké anu teu asup log nalika checkout
* **Dibereskeun:** Kasalahan fatal deklarasi ulang kelas Spyc nalika ngajalankeun paréntah WP-CLI
* **Dibereskeun:** Timeout API sandbox Namecheap teuing pondok
* **Dibereskeun:** Téks tombol Select dina pilarian domain teu katingali dina latar héjo
* **Dibereskeun:** Pendaptaran domain gagal kalayan kasalahan "RegistrantFirstName is Missing" alatan inpormasi kontak leungit
* **Dibereskeun:** Rékaman domain dijieun kalayan blog_id=0 nalika situs can aya dina waktos checkout
* **Dibereskeun:** Setélan TLD baku balik salaku string tibatan array anu geus diparse
* **Dipiceun:** Kaca admin Domain Management mandiri — ayeuna diurus ngaliwatan kaca domain inti

Vérsi 1.0.0 - Dirilis dina 2025-09-28

**Tulisan Ulang Gedé pikeun Ultimate Multisite v2**

* **Anyar:** Tulisan ulang lengkep kalayan arsitéktur PHP 7.4+ modern
* **Anyar:** Integrasi mulus jeung sistem checkout Ultimate Multisite v2
* **Anyar:** Ngokolakeun produk domain kalayan pilihan harga anu fleksibel
* **Anyar:** Arsitéktur pangrojong sababaraha panyadia domain
* **Anyar:** Integrasi perpanjangan otomatis jeung langganan
* **Anyar:** Antarmuka ngokolakeun domain palanggan
* **Anyar:** Pangawasan domain admin jeung log
* **Anyar:** Pangrojong kupon pikeun produk domain
* **Anyar:** Ngokolakeun setélan komprehensif
* **Anyar:** Codebase anu éksténsibel jeung ramah pamekar
* **Dironjatkeun:** Panyadia OpenSRS diropéa kalayan pangrojong fitur pinuh
* **Dironjatkeun:** UI modern anu konsisten jeung Ultimate Multisite v2
* **Dibereskeun:** Sadaya kode v1 anu deprecated diropéa kana standar v2
* **Dipiceun:** Kasaluyuan v1 warisan (parobahan anu megatkeun)

### Vérsi Saméméhna (v1 Warisan) {#previous-versions-v1-legacy}

### Vérsi 0.0.3 - 20/08/2019 {#version-003---20082019}

* Dibereskeun: Teu cocog jeung Groundhogg CRM
* Catetan: Ieu téh rilis panungtung anu cocog jeung v1

### Vérsi 0.0.2 - 07/12/2018 {#version-002---07122018}

* Dibereskeun: Ngaleungitkeun widang License Key
* Dibereskeun: Tab rencana leungit nalika plugin fitur aktip
* Dironjatkeun: Nambihan tombol lewatan dina widang pendaptaran

### Vérsi 0.0.1 - Rilis Mimiti {#version-001---initial-release}

* Integrasi OpenSRS dasar pikeun WP Ultimo v1
* Pilarian jeung pendaptaran domain basajan
* Idin domain dumasar rencana
