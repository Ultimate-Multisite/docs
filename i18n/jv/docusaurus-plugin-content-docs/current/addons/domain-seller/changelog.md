---
title: Cathetan Owah-owahan Panyade Domain
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Cathetan Owah-owahan Domain Seller

Versi 1.3.0 - Dirilis ing 2026-06-02
- Anyar: Nambahake pepeling network-admin nalika saldo reseller HostAfrica dadi kakehan sithik
- Anyar: Nambahake pemetaan otomatis domain sing nembe didaftar menyang situs jaringan
- Ndandani: Nerapake syarat field pendaftar mung nalika ndhaptar domain anyar
- Ndandani: Nggawe kabar saldo monitor bisa ditutup
- Ndandani: Mesthekake rincian tagihan pendaftar WooCommerce tetep dijaga
- Ndandani: Nglakokake syarat kontak pendaftar nalika registrasi
- Ndandani: Nyegah produk registrasi domain digawe nganggo markup 0%
- Ndandani: Njaga pilihan domain lan rega liwat alur sesi checkout
- Ndandani: Ningkatake tampilan mata uang rega domain HostAfrica
- Ndandani: Ningkatake prilaku form-action checkout kanggo nyegah ora cocog query-var WP-core
- Ditingkatake: Nyambungake dokumentasi konfigurasi reseller HostAfrica ing tuntunan setup

Versi 1.2.0 - Dirilis ing 2026-05-25
- Anyar: Nambahake HostAfrica minangka integrasi dodolan domain karo checkout, tuntunan setup, lookup, TLD/rega, registrasi, perpanjangan, transfer, nameserver, DNS, kode EPP, kunci registrar, lan dhukungan perlindungan ID
- Anyar: Nambahake Openprovider minangka integrasi dodolan domain karo rega reseller, registrasi, perpanjangan, transfer, nameserver, DNS, kode EPP, kunci registrar, privasi WHOIS, lan dhukungan sinkronisasi TLD
- Anyar: Nambahake Hostinger minangka integrasi dodolan domain nggunakake token Hostinger API bareng saka integrasi inti kanggo mriksa kasedhiyan, registrasi, nganyari nameserver, kunci registrar, lan privasi WHOIS
- Ditingkatake: Nambahake docblock tumindak lan filter siklus urip domain kanggo tuntunan integrasi pangembang
- Ditingkatake: Nganyari metadata kompatibilitas plugin menyang WordPress 7.0 ing readme addon
- Ditingkatake: Nganyari cithakan perencanaan sing digunakake kanggo koordinasi rilis sing bakal teka

Versi 1.1.0 - Dirilis ing 2026-05-08
- Anyar: Nggawe cathetan DNS (add_dns_record) diimplementasikake kanggo registrar ResellerClub, Enom, lan OpenSRS
- Ndandani: Parser Default DNS Records saiki bisa nampa token {DOMAIN} lan {SITE_URL}
- Ndandani: Slug field checkout pilihan domain diwenehi namespace kanggo nyegah tabrakan karo site_url

Versi 1.0.8 - Dirilis ing 2026-05-07
- Ndandani: Rega domain ResellerClub saiki njupuk rega biaya langsung saka endpoint API sing bener

Versi 1.0.7 - Dirilis ing 2026-05-06
* Ndandani: ResellerClub test_connection ngirim parameter tlds sing dibutuhake (#224)

Versi 1.0.6 - Dirilis ing 2026-05-05
* Ndandani: Registrasi domain ResellerClub saiki mlaku kanthi bener nganggo penanganan tanggapan API sing luwih apik lan routing panyedhiya adhedhasar registry
* Ndandani: Pangapikan UX kaca admin Register Domain
* Dibusak: Integrasi registrar CyberPanel

Versi 1.0.5 - Dirilis ing 2026-04-02
* Anyar: Integrasi registrar GoDaddy kanggo registrasi lan pangelolaan domain
* Anyar: Integrasi registrar NameSilo
* Anyar: Integrasi registrar ResellerClub
* Anyar: Verifikasi otomatis domain pangirim SES nalika tuku lan pemetaan domain
* Ndandani: Njaga konstanta plugin supaya ora didefinisi maneh ing lingkungan test
* Ndandani: Flag MySQL dipisah tembung kanthi bener ing install-wp-tests.sh

Versi 1.0.4 - Dirilis ing 2026-03-14
* **Ndandani:** Sawetara aset css sing ilang
* **Ndandani:** Kasalahan sing ana gandhengane karo tlds sing ora kasedhiya

Versi 1.0.3 - Dirilis ing 2026-03-09
* **Ndandani:** Kasalahan properti reaktif Vue (domain_option, selected_domain, domain_provider) nalika nggunakake cithakan signup warisan karo shortcode checkout
* **Ndandani:** Field input subdomain ora sejajar lan teks kegedhen ing field checkout pilihan domain
* **Ndandani:** Ndhelikake blok pratinjau "URL sampeyan bakal dadi" nalika field pilihan domain ana

Versi 1.0.2 - Dirilis ing 2026-03-01
* **Ditingkatake:** Mbusak setelan markup global saka kaca setelan — rega saiki khusus saben produk
* **Ditingkatake:** Nambahake tautan "Atur Produk Domain" ing kaca setelan kanggo navigasi cepet
* **Ditingkatake:** Katrangan field lan tooltip sing luwih cetha kanggo setelan produk domain (catch-all vs khusus TLD, jinis markup, rega pambuka)
* **Ditingkatake:** Katrangan sing luwih apik ing saindhenging kaca setelan (goleki TLD, perpanjangan, DNS, notifikasi)

Versi 1.0.1 - Dirilis ing 2026-02-27

* **Anyar:** Piranti impor TLD kanggo manajemen rega massal
* **Anyar:** Dhukungan rega pambuka kanggo produk domain
* **Anyar:** Rangkaian tes E2E nganggo Cypress
* **Anyar:** Cithakan email kanggo kabar siklus urip domain
* **Anyar:** Kolom alamat registrant ing modal registrasi domain admin, wis diisi luwih dhisik saka setelan
* **Anyar:** Antarmuka manajemen DNS pelanggan kanthi dhukungan nambah, nyunting, lan mbusak record
* **Anyar:** Opsi checkout "Bring your own domain" kanthi pemetaan domain otomatis
* **Anyar:** Ngasilake otomatis URL situs saka jeneng domain nalika checkout
* **Anyar:** Konfigurasi nameserver lan DNS record gawan ing setelan
* **Anyar:** Rincian registrasi domain lan manajemen DNS ing kaca sunting domain inti
* **Anyar:** Wisaya persiyapan otomatis nggawe produk domain gawan kanthi nilai gawan sing trep
* **Anyar:** Sinkronisasi TLD otomatis saben dina liwat cron ing kabeh panyedhiya sing dikonfigurasi
* **Anyar:** Perlindhungan privasi WHOIS kanthi konfigurasi saben produk (mesthi aktif, pilihan pelanggan, utawa dipateni)
* **Anyar:** Kothak centhang checkout privasi WHOIS kanthi tampilan rega lan dhukungan mode peteng
* **Anyar:** Kaca admin Register Domain kanggo registrasi domain manual
* **Anyar:** Nganyari plugin otomatis liwat server nganyari Ultimate Multisite
* **Anyar:** Tab panyaring jinis produk domain ing tabel dhaptar produk kanthi gaya badge ungu
* **Anyar:** Kolom kontak registrant (jeneng, alamat, kutha, negara bagean, kode pos, negara, telpon) ing formulir checkout domain
* **Anyar:** Validasi kolom registrant sadurunge nelpon API registrar kanthi pesen kesalahan sing cetha
* **Anyar:** Saluran log khusus panyedhiya kanggo acara registrasi domain (umpamane domain-seller-namecheap.log)
* **Anyar:** Kolom kontak registrant ing formulir checkout registrasi/daftar utama (ditampilake nalika ndhaptar domain)
* **Apik:** Ngganti kolom checkout Domain Search nganggo kolom Domain Selection terpadu sing ndhukung tab subdomain, register, lan domain sing wis ana
* **Apik:** Setelan produk domain dirender inline ing kaca sunting produk liwat sistem widget inti
* **Apik:** Info domain pelanggan nyambung menyang widget pemetaan domain inti tinimbang metabox mandiri
* **Apik:** Wisaya impor TLD disederhanakake dadi sinkronisasi siji-klik saka kabeh panyedhiya
* **Apik:** Kasedhiyan domain Namecheap nggunakake panggilan API batch kanggo telusuran luwih cepet
* **Apik:** API rega Namecheap nggunakake parameter lan parsing tanggapan sing bener
* **Apik:** Panyimpenan TLD dipusatake ing siji opsi jaringan
* **Apik:** Logging aktivitas domain kanggo owah-owahan DNS, transfer, lan penerapan konfigurasi
* **Apik:** Sinkronisasi TLD lengkap kanggo OpenSRS nggunakake dhaptar master IANA kanthi validasi batch
* **Apik:** Sinkronisasi TLD lengkap kanggo Namecheap kanthi panjaluk API paginated
* **Apik:** Ngganti kelas panyedhiya lawas nganggo pola Integration Registry
* **Apik:** Panel setelan kanthi konfigurasi DNS lan transfer
* **Apik:** Nomer telpon otomatis diformat menyang format registrar +CC.NNN
* **Apik:** Validasi kolom telpon mbusak karakter format sadurunge dikirim
* **Apik:** Syarat versi ditingkatake menyang Ultimate Multisite 2.4.12 kanthi kabar luwih cetha
* **Apik:** Alur kerja CI nggunakake checkout sing bener kanggo addon lan plugin inti
* **Apik:** prepare_registrant_info() maca saka meta pangguna sing disimpen saka checkout kanthi fallback alamat tagihan
* **Dandani:** AJAX telusuran domain gagal kanggo pangguna sing ora mlebu nalika checkout
* **Dandani:** AJAX rega domain gagal kanggo pangguna sing ora mlebu nalika checkout
* **Dandani:** Kesalahan fatal redeklarasi kelas Spyc nalika mbukak perintah WP-CLI
* **Dandani:** Timeout API sandbox Namecheap cendhak banget
* **Dandani:** Teks tombol Select telusuran domain ora katon ing latar mburi ijo
* **Dandani:** Registrasi domain gagal kanthi kesalahan "RegistrantFirstName is Missing" amarga info kontak ilang
* **Dandani:** Record domain digawe nganggo blog_id=0 nalika situs durung ana nalika wektu checkout
* **Dandani:** Setelan TLD gawan bali minangka string tinimbang array sing wis diparse
* **Dibusak:** Kaca admin Domain Management mandiri — saiki ditangani liwat kaca domain inti

Versi 1.0.0 - Dirilis ing 2025-09-28

**Tulis Ulang Gedhe kanggo Ultimate Multisite v2**

* **Anyar:** Tulis ulang lengkap nganggo arsitektur PHP 7.4+ modern
* **Anyar:** Integrasi mulus karo sistem checkout Ultimate Multisite v2
* **Anyar:** Manajemen produk domain kanthi opsi rega fleksibel
* **Anyar:** Arsitektur dhukungan pirang-pirang panyedhiya domain
* **Anyar:** Integrasi nganyari otomatis lan subscription
* **Anyar:** Antarmuka manajemen domain pelanggan
* **Anyar:** Pemantauan domain admin lan log
* **Anyar:** Dhukungan coupon kanggo produk domain
* **Anyar:** Manajemen setelan komprehensif
* **Anyar:** Codebase sing gampang diekstensi kanggo developer
* **Apik:** Panyedhiya OpenSRS dianyari kanthi dhukungan fitur lengkap
* **Apik:** UI modern sing konsisten karo Ultimate Multisite v2
* **Dandani:** Kabeh kode v1 sing deprecated dianyari menyang standar v2
* **Dibusak:** Kompatibilitas v1 lawas (owah-owahan sing ngrusak)

### Versi Sadurunge (v1 Warisan)

### Versi 0.0.3 - 20/08/2019

* Dandani: Ora kompatibel karo Groundhogg CRM
* Cathetan: Iki rilis pungkasan sing kompatibel karo v1

### Versi 0.0.2 - 07/12/2018

* Dandani: Mbusak kolom License Key
* Dandani: Tab plan ilang nalika plugin fitur aktif
* Apik: Nambah tombol skip ing kolom registrasi

### Versi 0.0.1 - Rilis Awal

* Integrasi OpenSRS dhasar kanggo WP Ultimo v1
* Telusuran lan registrasi domain prasaja
* Idin domain adhedhasar plan
