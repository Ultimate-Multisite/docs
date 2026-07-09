---
title: Catatan Perubahan Penjual Domain
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Changelog Domain Seller

Versi 1.3.0 - Dirilis pada 2026-06-02
- Baru: Menambahkan peringatan network-admin saat saldo reseller HostAfrica menjadi terlalu rendah
- Baru: Menambahkan pemetaan otomatis domain yang baru didaftarkan ke situs jaringan
- Perbaikan: Menerapkan persyaratan kolom registrant hanya saat mendaftarkan domain baru
- Perbaikan: Membuat pemberitahuan monitor saldo dapat ditutup
- Perbaikan: Memastikan detail penagihan registrant WooCommerce tetap dipertahankan
- Perbaikan: Menerapkan persyaratan kontak registrant selama pendaftaran
- Perbaikan: Mencegah produk pendaftaran domain dibuat dengan markup 0%
- Perbaikan: Mempertahankan pilihan domain dan harga melalui alur sesi checkout
- Perbaikan: Meningkatkan tampilan mata uang harga domain HostAfrica
- Perbaikan: Meningkatkan perilaku form-action checkout untuk mencegah ketidakcocokan query-var inti WP
- Ditingkatkan: Menautkan dokumentasi konfigurasi reseller HostAfrica dalam panduan setup

Versi 1.2.0 - Dirilis pada 2026-05-25
- Baru: Menambahkan HostAfrica sebagai integrasi penjualan domain dengan dukungan checkout, wizard setup, pencarian, TLD/harga, pendaftaran, perpanjangan, transfer, nameserver, DNS, kode EPP, kunci registrar, dan perlindungan ID
- Baru: Menambahkan Openprovider sebagai integrasi penjualan domain dengan dukungan harga reseller, pendaftaran, perpanjangan, transfer, nameserver, DNS, kode EPP, kunci registrar, privasi WHOIS, dan sinkronisasi TLD
- Baru: Menambahkan Hostinger sebagai integrasi penjualan domain menggunakan token API Hostinger bersama dari integrasi inti untuk pemeriksaan ketersediaan, pendaftaran, pembaruan nameserver, kunci registrar, dan privasi WHOIS
- Ditingkatkan: Menambahkan docblock action dan filter siklus hidup domain untuk panduan integrasi developer
- Ditingkatkan: Memperbarui metadata kompatibilitas plugin ke WordPress 7.0 di readme addon
- Ditingkatkan: Memperbarui template perencanaan yang digunakan untuk koordinasi rilis mendatang

Versi 1.1.0 - Dirilis pada 2026-05-08
- Baru: Pembuatan catatan DNS (add_dns_record) diimplementasikan untuk registrar ResellerClub, Enom, dan OpenSRS
- Perbaikan: Parser Catatan DNS bawaan sekarang menoleransi token {DOMAIN} dan {SITE_URL}
- Perbaikan: Slug kolom checkout pemilihan domain diberi namespace untuk mencegah benturan dengan site_url

Versi 1.0.8 - Dirilis pada 2026-05-07
- Perbaikan: Harga domain ResellerClub sekarang mengambil harga biaya live dari endpoint API yang benar

Versi 1.0.7 - Dirilis pada 2026-05-06
* Perbaikan: ResellerClub test_connection mengirim parameter tlds yang diperlukan (#224)

Versi 1.0.6 - Dirilis pada 2026-05-05
* Perbaikan: Pendaftaran domain ResellerClub sekarang bekerja dengan benar dengan penanganan respons API yang ditingkatkan dan perutean penyedia berbasis registry
* Perbaikan: Peningkatan UX halaman admin Register Domain
* Dihapus: Integrasi registrar CyberPanel

Versi 1.0.5 - Dirilis pada 2026-04-02
* Baru: Integrasi registrar GoDaddy untuk pendaftaran dan pengelolaan domain
* Baru: Integrasi registrar NameSilo
* Baru: Integrasi registrar ResellerClub
* Baru: Verifikasi otomatis domain pengiriman SES saat pembelian dan pemetaan domain
* Perbaikan: Melindungi konstanta plugin dari pendefinisian ulang di lingkungan pengujian
* Perbaikan: Flag MySQL dipisah-kata dengan benar di install-wp-tests.sh

Versi 1.0.4 - Dirilis pada 2026-03-14
* **Perbaikan:** Beberapa aset css yang hilang
* **Perbaikan:** Error terkait tlds yang tidak tersedia

Versi 1.0.3 - Dirilis pada 2026-03-09
* **Perbaikan:** Error properti reaktif Vue (domain_option, selected_domain, domain_provider) saat menggunakan template pendaftaran lama dengan shortcode checkout
* **Perbaikan:** Ketidaksejajaran kolom input subdomain dan teks yang terlalu besar di kolom checkout pemilihan domain
* **Perbaikan:** Sembunyikan blok pratinjau "URL Anda akan menjadi" saat kolom pemilihan domain hadir

Versi 1.0.2 - Dirilis pada 2026-03-01
* **Ditingkatkan:** Menghapus pengaturan markup global dari halaman pengaturan — harga sekarang khusus per produk secara eksklusif
* **Ditingkatkan:** Menambahkan tautan "Kelola Produk Domain" di halaman pengaturan untuk navigasi cepat
* **Ditingkatkan:** Deskripsi kolom dan tooltip yang lebih jelas untuk pengaturan produk domain (catch-all vs khusus TLD, jenis markup, harga pengantar)
* **Ditingkatkan:** Deskripsi yang lebih baik di seluruh halaman pengaturan (pencarian TLD, perpanjangan, DNS, notifikasi)

Versi 1.0.1 - Dirilis pada 2026-02-27

* **Baru:** Alat impor TLD untuk manajemen harga massal
* **Baru:** Dukungan harga perkenalan untuk produk domain
* **Baru:** Rangkaian pengujian E2E dengan Cypress
* **Baru:** Template email untuk notifikasi siklus hidup domain
* **Baru:** Kolom alamat pendaftar pada modal pendaftaran domain admin, diisi otomatis dari pengaturan
* **Baru:** Antarmuka manajemen DNS pelanggan dengan dukungan tambah, edit, dan hapus record
* **Baru:** Opsi checkout "Bring your own domain" dengan pemetaan domain otomatis
* **Baru:** Buat otomatis URL situs dari nama domain saat checkout
* **Baru:** Konfigurasi nameserver default dan record DNS di pengaturan
* **Baru:** Detail pendaftaran domain dan manajemen DNS pada halaman edit domain inti
* **Baru:** Wizard pengaturan membuat otomatis produk domain default dengan nilai default yang masuk akal
* **Baru:** Sinkronisasi TLD otomatis harian melalui cron di semua penyedia yang dikonfigurasi
* **Baru:** Perlindungan privasi WHOIS dengan konfigurasi per produk (selalu aktif, pilihan pelanggan, atau dinonaktifkan)
* **Baru:** Checkbox checkout privasi WHOIS dengan tampilan harga dan dukungan mode gelap
* **Baru:** Halaman admin Register Domain untuk pendaftaran domain manual
* **Baru:** Pembaruan plugin otomatis melalui server pembaruan Ultimate Multisite
* **Baru:** Tab filter jenis produk domain di tabel daftar produk dengan gaya badge ungu
* **Baru:** Kolom kontak pendaftar (nama, alamat, kota, provinsi, kode pos, negara, telepon) pada formulir checkout domain
* **Baru:** Validasi kolom pendaftar sebelum memanggil API registrar dengan pesan kesalahan yang jelas
* **Baru:** Kanal log khusus penyedia untuk peristiwa pendaftaran domain (mis. domain-seller-namecheap.log)
* **Baru:** Kolom kontak pendaftar pada formulir checkout pendaftaran/signup utama (ditampilkan saat mendaftarkan domain)
* **Ditingkatkan:** Mengganti kolom checkout Domain Search dengan kolom Domain Selection terpadu yang mendukung tab subdomain, register, dan domain yang sudah ada
* **Ditingkatkan:** Pengaturan produk domain dirender inline pada halaman edit produk melalui sistem widget inti
* **Ditingkatkan:** Info domain pelanggan terhubung ke widget pemetaan domain inti alih-alih metabox mandiri
* **Ditingkatkan:** Wizard impor TLD disederhanakan menjadi sinkronisasi sekali klik dari semua penyedia
* **Ditingkatkan:** Ketersediaan domain Namecheap menggunakan panggilan API batch untuk pencarian lebih cepat
* **Ditingkatkan:** API harga Namecheap menggunakan parameter dan parsing respons yang benar
* **Ditingkatkan:** Penyimpanan TLD dipusatkan dalam satu opsi jaringan
* **Ditingkatkan:** Pencatatan aktivitas domain untuk perubahan DNS, transfer, dan penerapan konfigurasi
* **Ditingkatkan:** Sinkronisasi TLD penuh untuk OpenSRS menggunakan daftar master IANA dengan validasi batch
* **Ditingkatkan:** Sinkronisasi TLD penuh untuk Namecheap dengan permintaan API berpaginasi
* **Ditingkatkan:** Mengganti kelas penyedia lama dengan pola Integration Registry
* **Ditingkatkan:** Panel pengaturan dengan konfigurasi DNS dan transfer
* **Ditingkatkan:** Nomor telepon diformat otomatis ke format registrar +CC.NNN
* **Ditingkatkan:** Validasi kolom telepon menghapus karakter pemformatan sebelum pengiriman
* **Ditingkatkan:** Persyaratan versi dinaikkan ke Ultimate Multisite 2.4.12 dengan pemberitahuan yang lebih jelas
* **Ditingkatkan:** Alur kerja CI menggunakan checkout yang tepat untuk addon dan plugin inti
* **Ditingkatkan:** prepare_registrant_info() membaca dari meta pengguna yang disimpan checkout dengan fallback alamat penagihan
* **Diperbaiki:** AJAX pencarian domain gagal untuk pengguna yang belum login selama checkout
* **Diperbaiki:** AJAX harga domain gagal untuk pengguna yang belum login selama checkout
* **Diperbaiki:** Kesalahan fatal redeklarasi kelas Spyc saat menjalankan perintah WP-CLI
* **Diperbaiki:** Timeout API sandbox Namecheap terlalu singkat
* **Diperbaiki:** Teks tombol Select pencarian domain tidak terlihat pada latar belakang hijau
* **Diperbaiki:** Pendaftaran domain gagal dengan kesalahan "RegistrantFirstName is Missing" karena info kontak tidak ada
* **Diperbaiki:** Record domain dibuat dengan blog_id=0 saat situs belum ada pada waktu checkout
* **Diperbaiki:** Pengaturan TLD default dikembalikan sebagai string alih-alih array yang sudah diparsing
* **Dihapus:** Halaman admin Domain Management mandiri — sekarang ditangani melalui halaman domain inti

Versi 1.0.0 - Dirilis pada 2025-09-28

**Penulisan Ulang Besar untuk Ultimate Multisite v2**

* **Baru:** Penulisan ulang lengkap dengan arsitektur PHP 7.4+ modern
* **Baru:** Integrasi mulus dengan sistem checkout Ultimate Multisite v2
* **Baru:** Manajemen produk domain dengan opsi harga fleksibel
* **Baru:** Arsitektur dukungan beberapa penyedia domain
* **Baru:** Integrasi perpanjangan otomatis dan langganan
* **Baru:** Antarmuka manajemen domain pelanggan
* **Baru:** Pemantauan dan log domain admin
* **Baru:** Dukungan kupon untuk produk domain
* **Baru:** Manajemen pengaturan komprehensif
* **Baru:** Codebase yang dapat diperluas dan ramah pengembang
* **Ditingkatkan:** Penyedia OpenSRS diperbarui dengan dukungan fitur lengkap
* **Ditingkatkan:** UI modern yang konsisten dengan Ultimate Multisite v2
* **Diperbaiki:** Semua kode v1 yang sudah usang diperbarui ke standar v2
* **Dihapus:** Kompatibilitas v1 lama (perubahan yang memutus kompatibilitas)

### Versi Sebelumnya (v1 Lama)

### Versi 0.0.3 - 20/08/2019

* Diperbaiki: Ketidakcocokan dengan Groundhogg CRM
* Catatan: Ini adalah rilis terakhir yang kompatibel dengan v1

### Versi 0.0.2 - 07/12/2018

* Diperbaiki: Menghapus kolom License Key
* Diperbaiki: Tab paket hilang saat plugin fitur aktif
* Ditingkatkan: Menambahkan tombol lewati pada kolom pendaftaran

### Versi 0.0.1 - Rilis Awal

* Integrasi OpenSRS dasar untuk WP Ultimo v1
* Pencarian dan pendaftaran domain sederhana
* Izin domain berbasis paket
