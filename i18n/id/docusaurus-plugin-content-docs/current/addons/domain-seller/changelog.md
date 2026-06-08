---
title: Catatan Perubahan Penjual Domain
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Changelog Domain Seller

Versi 1.1.0 - Dirilis pada 2026-05-08
- Fitur Baru: Pembuatan catatan DNS (add_dns_record) diimplementasikan untuk registrar ResellerClub, Enom, dan OpenSRS
- Perbaikan: Parser Catatan DNS Default sekarang mentoleransi token {DOMAIN} dan {SITE_URL}
- Perbaikan: Slug bidang checkout pemilihan domain di-namespace untuk mencegah bentrokan dengan site_url

Versi 1.0.8 - Dirilis pada 2026-05-07
- Perbaikan: Harga domain ResellerClub sekarang mengambil harga biaya langsung dari endpoint API yang benar

Versi 1.0.7 - Dirilis pada 2026-05-06
* Perbaikan: test_connection ResellerClub mengirimkan parameter tlds yang diperlukan (#224)

Versi 1.0.6 - Dirilis pada 2026-05-05
* Perbaikan: Registrasi domain ResellerClub sekarang berfungsi dengan benar dengan penanganan respons API yang ditingkatkan dan perutean penyedia yang didorong oleh registry
* Perbaikan: Peningkatan UX halaman admin Register Domain
* Dihapus: Integrasi registrar CyberPanel

Versi 1.0.5 - Dirilis pada 2026-04-02
* Fitur Baru: Integrasi registrar GoDaddy untuk registrasi dan manajemen domain
* Fitur Baru: Integrasi registrar NameSilo
* Fitur Baru: Integrasi registrar ResellerClub
* Fitur Baru: Verifikasi otomatis pengiriman domain SES saat pembelian dan pemetaan domain
* Perbaikan: Konstanta plugin Guard terhadap pendefinisian ulang di lingkungan pengujian
* Perbaikan: MySQL flags word-split dengan benar di install-wp-tests.sh

Versi 1.0.4 - Dirilis pada 2026-03-14
* **Perbaikan:** Beberapa aset CSS yang hilang
* **Perbaikan:** Kesalahan terkait tlds yang tidak tersedia

Versi 1.0.3 - Dirilis pada 2026-03-09
* **Perbaikan:** Kesalahan properti reaktif Vue (domain_option, selected_domain, domain_provider) saat menggunakan template pendaftaran lama dengan shortcode checkout
* **Perbaikan:** Ketidaksejajaran bidang input subdomain dan teks yang terlalu besar di bidang pemilihan domain checkout
* **Perbaikan:** Menyembunyikan blok pratinjau "Your URL will be" ketika bidang pemilihan domain ada

Versi 1.0.2 - Dirilis pada 2026-03-01
* **Ditingkatkan:** Menghapus pengaturan markup global dari halaman pengaturan — harga sekarang eksklusif per produk
* **Ditingkatkan:** Menambahkan tautan "Kelola Produk Domain" di halaman pengaturan untuk navigasi cepat
* **Ditingkatkan:** Deskripsi bidang dan tooltip yang lebih jelas untuk pengaturan produk domain (catch-all vs TLD-spesifik, jenis markup, harga perkenalan)
* **Ditingkatkan:** Deskripsi yang lebih baik di seluruh halaman pengaturan (cari TLD, perpanjangan, DNS, notifikasi)

Versi 1.0.1 - Dirilis pada 2026-02-27

* **Fitur Baru:** Alat impor TLD untuk manajemen harga massal
* **Fitur Baru:** Dukungan harga perkenalan untuk produk domain
* **Fitur Baru:** E2E test suite dengan Cypress
* **Fitur Baru:** Template email untuk notifikasi siklus hidup domain
* **Fitur Baru:** Bidang alamat registran di modal registrasi domain admin, diisi sebelumnya dari pengaturan
* **Fitur Baru:** Antarmuka manajemen DNS pelanggan dengan dukungan tambah, edit, dan hapus catatan
* **Fitur Baru:** Opsi checkout "Bawa domain Anda sendiri" dengan pemetaan domain otomatis
* **Fitur Baru:** Otomatis menghasilkan URL situs dari nama domain selama checkout
* **Fitur Baru:** Pengaturan nameserver dan catatan DNS default di pengaturan
* **Fitur Baru:** Detail registrasi domain dan manajemen DNS di halaman edit domain inti
* **Fitur Baru:** Wizard setup secara otomatis membuat produk domain default dengan nilai default yang masuk akal
* **Fitur Baru:** Sinkronisasi TLD harian otomatis melalui cron di semua penyedia yang dikonfigurasi
* **Fitur Baru:** Perlindungan privasi WHOIS dengan konfigurasi per produk (selalu aktif, pilihan pelanggan, atau dinonaktifkan)
* **Fitur Baru:** Kotak centang privasi WHOIS checkout dengan tampilan harga dan dukungan mode gelap
* **Fitur Baru:** Halaman admin Register Domain untuk registrasi domain manual
* **Fitur Baru:** Pembaruan plugin otomatis melalui Ultimate Multisite update server
* **Fitur Baru:** Tab filter jenis produk domain di tabel daftar produk dengan gaya lencana ungu
* **Fitur Baru:** Bidang kontak registran (nama, alamat, kota, negara bagian, kode pos, negara, telepon) di formulir checkout domain
* **Fitur Baru:** Validasi bidang registran sebelum memanggil API registrar dengan pesan kesalahan yang jelas
* **Fitur Baru:** Saluran log spesifik penyedia untuk acara registrasi domain (misalnya, domain-seller-namecheap.log)
* **Fitur Baru:** Bidang kontak registran di formulir checkout/pendaftaran utama (ditampilkan saat mendaftarkan domain)
* **Ditingkatkan:** Mengganti bidang checkout Domain Search dengan bidang Pemilihan Domain terpadu yang mendukung tab subdomain, register, dan domain yang sudah ada
* **Ditingkatkan:** Pengaturan produk domain ditampilkan secara inline di halaman edit produk melalui sistem widget inti
* **Ditingkatkan:** Info domain pelanggan terhubung ke widget pemetaan domain inti alih-alih metabox mandiri
* **Ditingkatkan:** Wizard impor TLD disederhanakan menjadi sinkronisasi satu klik dari semua penyedia
* **Ditingkatkan:** Ketersediaan domain Namecheap menggunakan panggilan API batch untuk pencarian yang lebih cepat
* **Ditingkatkan:** API harga Namecheap menggunakan parameter dan parsing respons yang benar
* **Ditingkatkan:** Penyimpanan TLD terpusat dalam satu opsi jaringan
* **Ditingkatkan:** Pencatatan aktivitas domain untuk perubahan DNS, transfer, dan penerapan konfigurasi
* **Ditingkatkan:** Sinkronisasi TLD penuh untuk OpenSRS menggunakan daftar master IANA dengan validasi batch
* **Ditingkatkan:** Sinkronisasi TLD penuh untuk Namecheap dengan permintaan API berhalaman
* **Ditingkatkan:** Mengganti kelas penyedia lama dengan pola Integration Registry
* **Ditingkatkan:** Panel pengaturan dengan konfigurasi DNS dan transfer
* **Ditingkatkan:** Nomor telepon diformat otomatis menjadi format registrar +CC.NNN
* **Ditingkatkan:** Validasi bidang telepon menghapus karakter pemformatan sebelum pengiriman
* **Ditingkatkan:** Persyaratan versi dinaikkan ke Ultimate Multisite 2.4.12 dengan pemberitahuan yang lebih jelas
* **Ditingkatkan:** Workflow CI menggunakan checkout yang tepat untuk addon dan plugin inti
* **Ditingkatkan:** prepare_registrant_info() membaca dari user meta yang disimpan checkout dengan fallback alamat penagihan
* **Diperbaiki:** AJAX pencarian domain gagal untuk pengguna yang tidak masuk selama checkout
* **Diperbaiki:** AJAX harga domain gagal untuk pengguna yang tidak masuk selama checkout
* **Diperbaiki:** Kesalahan fatal deklarasi ulang kelas Spyc saat menjalankan perintah WP-CLI
* **Diperbaiki:** Timeout API sandbox Namecheap terlalu pendek
* **Diperbaiki:** Teks tombol Select pencarian domain tidak terlihat di latar belakang hijau
* **Diperbaiki:** Registrasi domain gagal dengan kesalahan "RegistrantFirstName is Missing" karena informasi kontak yang hilang
* **Diperbaiki:** Catatan domain dibuat dengan blog_id=0 ketika situs belum ada pada saat checkout
* **Diperbaiki:** Pengaturan TLD default dikembalikan sebagai string alih-alih array yang diurai
* **Dihapus:** Halaman admin Manajemen Domain mandiri — sekarang ditangani melalui halaman domain inti

Versi 1.0.0 - Dirilis pada 2025-09-28

**Penulisan Ulang Besar untuk Ultimate Multisite v2**

* **Fitur Baru:** Penulisan ulang lengkap dengan arsitektur PHP 7.4+ modern
* **Fitur Baru:** Integrasi mulus dengan sistem checkout Ultimate Multisite v2
* **Fitur Baru:** Manajemen produk domain dengan opsi harga yang fleksibel
* **Fitur Baru:** Arsitektur dukungan penyedia domain ganda
* **Fitur Baru:** Integrasi perpanjangan otomatis dan langganan
* **Fitur Baru:** Antarmuka manajemen domain pelanggan
* **Fitur Baru:** Pemantauan dan log domain admin
* **Fitur Baru:** Dukungan kupon untuk produk domain
* **Fitur Baru:** Manajemen pengaturan komprehensif
* **Fitur Baru:** Basis kode yang mudah diperluas dan ramah pengembang
* **Ditingkatkan:** Penyedia OpenSRS diperbarui dengan dukungan fitur penuh
* **Ditingkatkan:** UI modern konsisten dengan Ultimate Multisite v2
* **Diperbaiki:** Semua kode v1 yang usang diperbarui ke standar v2
* **Dihapus:** Kompatibilitas v1 lama (perubahan yang merusak)

### Versi Sebelumnya (v1 Legacy)

### Versi 0.0.3 - 20/08/2019

* Diperbaiki: Ketidakcocokan dengan Groundhogg CRM
* Catatan: Ini adalah rilis kompatibel v1 terakhir

### Versi 0.0.2 - 07/12/2018

* Diperbaiki: Menghapus bidang Kunci Lisensi
* Diperbaiki: Tab rencana hilang ketika plugin fitur aktif
* Ditingkatkan: Menambahkan tombol lewati pada bidang pendaftaran

### Versi 0.0.1 - Rilis Awal

* Integrasi OpenSRS dasar untuk WP Ultimo v1
* Pencarian dan registrasi domain sederhana
* Izin domain berbasis rencana
