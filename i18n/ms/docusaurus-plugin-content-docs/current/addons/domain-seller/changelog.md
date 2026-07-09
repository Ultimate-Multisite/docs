---
title: Log Perubahan Penjual Domain
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Log Perubahan Domain Seller

Versi 1.3.0 - Dikeluarkan pada 2026-06-02
- Baharu: Menambah amaran network-admin apabila baki penjual semula HostAfrica menjadi terlalu rendah
- Baharu: Menambah pemetaan automatik bagi domain yang baru didaftarkan ke tapak rangkaian
- Pembetulan: Menggunakan keperluan medan pendaftar hanya apabila mendaftarkan domain baharu
- Pembetulan: Menjadikan notis baki pemantauan boleh ditutup
- Pembetulan: Memastikan butiran bil pendaftar WooCommerce dikekalkan
- Pembetulan: Menguatkuasakan keperluan kenalan pendaftar semasa pendaftaran
- Pembetulan: Menghalang produk pendaftaran domain daripada dicipta dengan markup 0%
- Pembetulan: Mengekalkan pilihan domain dan harga melalui aliran sesi checkout
- Pembetulan: Menambah baik paparan mata wang harga domain HostAfrica
- Pembetulan: Menambah baik tingkah laku form-action checkout untuk mengelakkan ketidakpadanan query-var teras WP
- Ditambah baik: Memautkan dokumentasi konfigurasi penjual semula HostAfrica dalam panduan setup

Versi 1.2.0 - Dikeluarkan pada 2026-05-25
- Baharu: Menambah HostAfrica sebagai integrasi penjualan domain dengan sokongan checkout, wizard setup, carian, TLD/harga, pendaftaran, pembaharuan, pemindahan, nameserver, DNS, kod EPP, kunci registrar, dan perlindungan ID
- Baharu: Menambah Openprovider sebagai integrasi penjualan domain dengan sokongan harga penjual semula, pendaftaran, pembaharuan, pemindahan, nameserver, DNS, kod EPP, kunci registrar, privasi WHOIS, dan penyegerakan TLD
- Baharu: Menambah Hostinger sebagai integrasi penjualan domain menggunakan token Hostinger API yang dikongsi daripada integrasi teras untuk semakan ketersediaan, pendaftaran, kemas kini nameserver, kunci registrar, dan privasi WHOIS
- Ditambah baik: Menambah tindakan kitar hayat domain dan docblock penapis untuk panduan integrasi pembangun
- Ditambah baik: Mengemas kini metadata keserasian plugin kepada WordPress 7.0 dalam readme addon
- Ditambah baik: Mengemas kini templat perancangan yang digunakan untuk penyelarasan keluaran akan datang

Versi 1.1.0 - Dikeluarkan pada 2026-05-08
- Baharu: Penciptaan rekod DNS (add_dns_record) dilaksanakan untuk registrar ResellerClub, Enom, dan OpenSRS
- Pembetulan: Penghurai Default DNS Records kini menerima token {DOMAIN} dan {SITE_URL}
- Pembetulan: Slug medan checkout pemilihan domain diberi ruang nama untuk mengelakkan pertembungan dengan site_url

Versi 1.0.8 - Dikeluarkan pada 2026-05-07
- Pembetulan: Harga domain ResellerClub kini mendapatkan harga kos langsung daripada endpoint API yang betul

Versi 1.0.7 - Dikeluarkan pada 2026-05-06
* Pembetulan: ResellerClub test_connection menghantar parameter tlds yang diperlukan (#224)

Versi 1.0.6 - Dikeluarkan pada 2026-05-05
* Pembetulan: Pendaftaran domain ResellerClub kini berfungsi dengan betul dengan pengendalian respons API yang ditambah baik dan penghalaan penyedia dipacu registry
* Pembetulan: Penambahbaikan UX halaman admin Register Domain
* Dibuang: Integrasi registrar CyberPanel

Versi 1.0.5 - Dikeluarkan pada 2026-04-02
* Baharu: Integrasi registrar GoDaddy untuk pendaftaran dan pengurusan domain
* Baharu: Integrasi registrar NameSilo
* Baharu: Integrasi registrar ResellerClub
* Baharu: Auto-sahkan domain penghantaran SES semasa pembelian dan pemetaan domain
* Pembetulan: Lindungi pemalar plugin daripada pentakrifan semula dalam persekitaran ujian
* Pembetulan: Bendera MySQL dipecahkan kata dengan betul dalam install-wp-tests.sh

Versi 1.0.4 - Dikeluarkan pada 2026-03-14
* **Pembetulan:** Beberapa aset css yang hilang
* **Pembetulan:** Ralat berkaitan tld yang tidak tersedia

Versi 1.0.3 - Dikeluarkan pada 2026-03-09
* **Pembetulan:** Ralat sifat reaktif Vue (domain_option, selected_domain, domain_provider) apabila menggunakan templat pendaftaran lama dengan shortcode checkout
* **Pembetulan:** Ketidaksejajaran medan input subdomain dan teks terlalu besar dalam medan checkout pemilihan domain
* **Pembetulan:** Sembunyikan blok pratonton "URL anda akan menjadi" apabila medan pemilihan domain hadir

Versi 1.0.2 - Dikeluarkan pada 2026-03-01
* **Ditambah baik:** Mengalih keluar tetapan markup global daripada halaman tetapan — harga kini secara eksklusif mengikut produk
* **Ditambah baik:** Menambah pautan "Urus Produk Domain" pada halaman tetapan untuk navigasi pantas
* **Ditambah baik:** Penerangan medan dan tooltip yang lebih jelas untuk tetapan produk domain (catch-all berbanding khusus TLD, jenis markup, harga pengenalan)
* **Ditambah baik:** Penerangan yang lebih baik di seluruh halaman tetapan (cari TLD, pembaharuan, DNS, pemberitahuan)

Versi 1.0.1 - Dikeluarkan pada 2026-02-27

* **Baharu:** Alat import TLD untuk pengurusan harga secara pukal
* **Baharu:** Sokongan harga pengenalan untuk produk domain
* **Baharu:** Set ujian E2E dengan Cypress
* **Baharu:** Templat e-mel untuk pemberitahuan kitar hayat domain
* **Baharu:** Medan alamat pendaftar pada modal pendaftaran domain admin, dipraisi daripada tetapan
* **Baharu:** Antara muka pengurusan DNS pelanggan dengan sokongan tambah, sunting, dan padam rekod
* **Baharu:** Pilihan checkout "Bawa domain anda sendiri" dengan pemetaan domain automatik
* **Baharu:** Jana automatik URL laman daripada nama domain semasa checkout
* **Baharu:** Konfigurasi nameserver lalai dan rekod DNS dalam tetapan
* **Baharu:** Butiran pendaftaran domain dan pengurusan DNS pada halaman sunting domain teras
* **Baharu:** Wizard persediaan mencipta automatik produk domain lalai dengan lalai yang munasabah
* **Baharu:** Penyegerakan TLD automatik harian melalui cron merentas semua penyedia yang dikonfigurasikan
* **Baharu:** Perlindungan privasi WHOIS dengan konfigurasi per produk (sentiasa hidup, pilihan pelanggan, atau dinyahdayakan)
* **Baharu:** Kotak semak checkout privasi WHOIS dengan paparan harga dan sokongan mod gelap
* **Baharu:** Halaman admin Register Domain untuk pendaftaran domain manual
* **Baharu:** Kemas kini plugin automatik melalui pelayan kemas kini Ultimate Multisite
* **Baharu:** Tab penapis jenis produk domain dalam jadual senarai produk dengan penggayaan lencana ungu
* **Baharu:** Medan hubungan pendaftar (nama, alamat, bandar, negeri, poskod, negara, telefon) pada borang checkout domain
* **Baharu:** Pengesahan medan pendaftar sebelum memanggil API pendaftar dengan mesej ralat yang jelas
* **Baharu:** Saluran log khusus penyedia untuk acara pendaftaran domain (cth. domain-seller-namecheap.log)
* **Baharu:** Medan hubungan pendaftar pada borang checkout pendaftaran/daftar utama (dipaparkan apabila mendaftarkan domain)
* **Ditambah baik:** Menggantikan medan checkout Carian Domain dengan medan Pemilihan Domain bersatu yang menyokong tab subdomain, daftar, dan domain sedia ada
* **Ditambah baik:** Tetapan produk domain dipaparkan sebaris pada halaman sunting produk melalui sistem widget teras
* **Ditambah baik:** Maklumat domain pelanggan dihubungkan ke dalam widget pemetaan domain teras dan bukannya metabox kendiri
* **Ditambah baik:** Wizard import TLD dipermudah kepada penyegerakan satu klik daripada semua penyedia
* **Ditambah baik:** Ketersediaan domain Namecheap menggunakan panggilan API kelompok untuk carian lebih pantas
* **Ditambah baik:** API harga Namecheap menggunakan parameter dan penghuraian respons yang betul
* **Ditambah baik:** Storan TLD dipusatkan dalam satu pilihan rangkaian
* **Ditambah baik:** Pengelogan aktiviti domain untuk perubahan DNS, pemindahan, dan aplikasi konfigurasi
* **Ditambah baik:** Penyegerakan TLD penuh untuk OpenSRS menggunakan senarai induk IANA dengan pengesahan kelompok
* **Ditambah baik:** Penyegerakan TLD penuh untuk Namecheap dengan permintaan API berhalaman
* **Ditambah baik:** Menggantikan kelas penyedia legasi dengan corak Integration Registry
* **Ditambah baik:** Panel tetapan dengan konfigurasi DNS dan pemindahan
* **Ditambah baik:** Nombor telefon diformatkan secara automatik kepada format pendaftar +CC.NNN
* **Ditambah baik:** Pengesahan medan telefon menyingkirkan aksara pemformatan sebelum penyerahan
* **Ditambah baik:** Keperluan versi dinaikkan kepada Ultimate Multisite 2.4.12 dengan notis yang lebih jelas
* **Ditambah baik:** Aliran kerja CI menggunakan checkout yang betul untuk kedua-dua addon dan plugin teras
* **Ditambah baik:** prepare_registrant_info() membaca daripada meta pengguna yang disimpan checkout dengan sandaran alamat pengebilan
* **Dibetulkan:** AJAX carian domain gagal untuk pengguna yang tidak log masuk semasa checkout
* **Dibetulkan:** AJAX harga domain gagal untuk pengguna yang tidak log masuk semasa checkout
* **Dibetulkan:** Ralat fatal pengisytiharan semula kelas Spyc ketika menjalankan perintah WP-CLI
* **Dibetulkan:** Tamat masa API sandbox Namecheap terlalu pendek
* **Dibetulkan:** Teks butang Pilih carian domain tidak kelihatan pada latar belakang hijau
* **Dibetulkan:** Pendaftaran domain gagal dengan ralat "RegistrantFirstName is Missing" disebabkan maklumat hubungan yang tiada
* **Dibetulkan:** Rekod domain dicipta dengan blog_id=0 apabila laman belum wujud pada masa checkout
* **Dibetulkan:** Tetapan TLD lalai dikembalikan sebagai rentetan dan bukannya tatasusunan yang dihuraikan
* **Dialih keluar:** Halaman admin Pengurusan Domain kendiri — kini dikendalikan melalui halaman domain teras

Versi 1.0.0 - Dikeluarkan pada 2025-09-28

**Tulis Semula Utama untuk Ultimate Multisite v2**

* **Baharu:** Tulis semula lengkap dengan seni bina PHP 7.4+ moden
* **Baharu:** Integrasi lancar dengan sistem checkout Ultimate Multisite v2
* **Baharu:** Pengurusan produk domain dengan pilihan harga fleksibel
* **Baharu:** Seni bina sokongan berbilang penyedia domain
* **Baharu:** Integrasi pembaharuan automatik dan langganan
* **Baharu:** Antara muka pengurusan domain pelanggan
* **Baharu:** Pemantauan domain admin dan log
* **Baharu:** Sokongan kupon untuk produk domain
* **Baharu:** Pengurusan tetapan menyeluruh
* **Baharu:** Pangkalan kod boleh diperluas yang mesra pembangun
* **Ditambah baik:** Penyedia OpenSRS dikemas kini dengan sokongan ciri penuh
* **Ditambah baik:** UI moden yang konsisten dengan Ultimate Multisite v2
* **Dibetulkan:** Semua kod v1 lapuk dikemas kini kepada piawaian v2
* **Dialih keluar:** Keserasian v1 legasi (perubahan memecahkan keserasian)

### Versi Terdahulu (v1 Legasi)

### Versi 0.0.3 - 20/08/2019

* Dibetulkan: Ketidakserasian dengan Groundhogg CRM
* Nota: Ini ialah keluaran terakhir yang serasi dengan v1

### Versi 0.0.2 - 07/12/2018

* Dibetulkan: Medan License Key dialih keluar
* Dibetulkan: Tab pelan hilang apabila plugin ciri aktif
* Ditambah baik: Menambah butang langkau pada medan pendaftaran

### Versi 0.0.1 - Keluaran Awal

* Integrasi OpenSRS asas untuk WP Ultimo v1
* Carian dan pendaftaran domain ringkas
* Kebenaran domain berasaskan pelan
