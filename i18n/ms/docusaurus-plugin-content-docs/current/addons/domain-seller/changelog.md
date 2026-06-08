---
title: Log Perubahan Penjual Domain
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Log Perubahan Domain Seller

Versi 1.1.0 - Dikeluarkan pada 2026-05-08
- Baru: Penciptaan rekod DNS (add_dns_record) dilaksanakan untuk pendaftar ResellerClub, Enom, dan OpenSRS
- Pembaikan: Parser Rekod DNS Lalai kini boleh menerima token {DOMAIN} dan {SITE_URL}
- Pembaikan: Slug nama medan semakan keluar pemilihan domain kini dikemas nama (namespaced) untuk mengelakkan konflik dengan site_url

Versi 1.0.8 - Dikeluarkan pada 2026-05-07
- Pembaikan: Harga domain ResellerClub kini mengambil kos hidup dari titik akhir API yang betul

Versi 1.0.7 - Dikeluarkan pada 2026-05-06
* Pembaikan: test_connection ResellerClub menghantar parameter tlds yang diperlukan (#224)

Versi 1.0.6 - Dikeluarkan pada 2026-05-05
* Pembaikan: Pendaftaran domain ResellerClub kini berfungsi dengan betul dengan pengendalian respons API yang dipertingkatkan dan penghalaan penyedia yang didorong oleh pendaftar
* Pembaikan: Peningkatan UX halaman admin Register Domain
* Dibuang: Integrasi pendaftar CyberPanel

Versi 1.0.5 - Dikeluarkan pada 2026-04-02
* Baru: Integrasi pendaftar GoDaddy untuk pendaftaran dan pengurusan domain
* Baru: Integrasi pendaftar NameSilo
* Baru: Integrasi pendaftar ResellerClub
* Baru: Pengesahan automatik domain penghantaran SES semasa pembelian dan pemetaan domain
* Pembaikan: Pemalar plugin Guard terhadap pendefinisian semula dalam persekitaran ujian
* Pembaikan: MySQL flags word-split dengan betul dalam install-wp-tests.sh

Versi 1.0.4 - Dikeluarkan pada 2026-03-14
* **Pembaikan:** Beberapa aset css yang hilang
* **Pembaikan:** Ralat berkaitan tlds yang tidak tersedia

Versi 1.0.3 - Dikeluarkan pada 2026-03-09
* **Pembaikan:** Ralat pemalar reaktif Vue (domain_option, selected_domain, domain_provider) apabila menggunakan templat pendaftaran lama dengan shortcode semakan keluar
* **Pembaikan:** Penjajaran medan input subdomain dan teks yang terlalu besar dalam medan semakan keluar pemilihan domain
* **Pembaikan:** Sembunyikan blok pratonton "URL anda akan menjadi" apabila medan pemilihan domain ada

Versi 1.0.2 - Dikeluarkan pada 2026-03-01
* **Dipertingkatkan:** Menghapuskan tetapan markup global dari halaman tetapan — harga kini eksklusif bagi setiap produk
* **Dipertingkatkan:** Menambah pautan "Urus Produk Domain" pada halaman tetapan untuk navigasi pantas
* **Dipertingkatkan:** Penerangan medan dan alat bantu (tooltips) yang lebih jelas untuk tetapan produk domain (catch-all vs TLD-spesifik, jenis markup, harga pengenalan)
* **Dipertingkatkan:** Penerangan yang lebih baik di seluruh halaman tetapan (cari TLD, pembaharuan, DNS, pemberitahuan)

Versi 1.0.1 - Dikeluarkan pada 2026-02-27

* **Baru:** Alat import TLD untuk pengurusan harga pukal
* **Baru:** Sokongan harga pengenalan untuk produk domain
* **Baru:** Set ujian E2E dengan Cypress
* **Baru:** Templat e-mel untuk pemberitahuan kitaran hayat domain
* **Baru:** Medan alamat pendaftar pada modal pendaftaran domain admin, pra-isi dari tetapan
* **Baru:** Antaramuka pengurusan DNS pelanggan dengan sokongan tambah, edit, dan padam rekod
* **Baru:** Pilihan semakan keluar "Bawa domain anda sendiri" dengan pemetaan domain automatik
* **Baru:** Jana URL tapak secara automatik dari nama domain semasa semakan keluar
* **Baru:** Tetapan nameserver dan rekod DNS lalai dalam tetapan
* **Baru:** Butiran pendaftaran domain dan pengurusan DNS pada halaman edit domain teras
* **Baru:** Wizard persediaan mencipta produk domain lalai dengan tetapan lalai yang munasabah
* **Baru:** Sinkronisasi TLD automatik harian melalui cron merentasi semua penyedia yang dikonfigurasi
* **Baru:** Perlindungan privasi WHOIS dengan konfigurasi setiap produk (sentiasa hidup, pilihan pelanggan, atau dimatikan)
* **Baru:** Kotak semak semakan privasi WHOIS dengan paparan harga dan sokongan mod gelap
* **Baru:** Halaman admin Register Domain untuk pendaftaran domain manual
* **Baru:** Kemas kini plugin automatik melalui Ultimate Multisite update server
* **Baru:** Tab penapis jenis produk domain dalam jadual senarai produk dengan gaya lencana ungu
* **Baru:** Medan hubungan pendaftar (nama, alamat, bandar, negeri, kod pos, negara, telefon) pada borang semakan keluar domain
* **Baru:** Pengesahan medan pendaftar sebelum memanggil API pendaftar dengan mesej ralat yang jelas
* **Baru:** Saluran log khusus penyedia untuk acara pendaftaran domain (cth. domain-seller-namecheap.log)
* **Baru:** Medan hubungan pendaftar pada borang semakan keluar pendaftaran/pendaftaran utama (ditunjukkan apabila mendaftar domain)
* **Dipertingkatkan:** Menggantikan medan semakan keluar Domain Search dengan medan Pemilihan Domain bersepadu yang menyokong tab subdomain, register, dan domain sedia ada
* **Dipertingkatkan:** Tetapan produk domain dipaparkan secara dalam talian pada halaman edit produk melalui sistem widget teras
* **Dipertingkatkan:** Maklumat domain pelanggan disambungkan ke widget pemetaan domain teras dan bukannya metabox berasingan
* **Dipertingkatkan:** Wizard import TLD disederhanakan kepada sinkronisasi satu klik dari semua penyedia
* **Dipertingkatkan:** Ketersediaan domain Namecheap menggunakan panggilan API pukal untuk carian yang lebih pantas
* **Dipertingkatkan:** API harga Namecheap menggunakan parameter dan penganalisis respons yang betul
* **Dipertingkatkan:** Storan TLD berpusat dalam satu pilihan rangkaian
* **Dipertingkatkan:** Log aktiviti domain untuk perubahan DNS, pemindahan, dan aplikasi konfigurasi
* **Dipertingkatkan:** Sinkronisasi TLD penuh untuk OpenSRS menggunakan senarai induk IANA dengan pengesahan pukal
* **Dipertingkatkan:** Sinkronisasi TLD penuh untuk Namecheap dengan permintaan API berpaginasi
* **Dipertingkatkan:** Menggantikan kelas penyedia lama dengan corak Integration Registry
* **Dipertingkatkan:** Panel tetapan dengan konfigurasi DNS dan pemindahan
* **Dipertingkatkan:** Nombor telefon diformat secara automatik kepada format pendaftar +CC.NNN
* **Dipertingkatkan:** Pengesahan medan telefon membuang aksara pemformatan sebelum penghantaran
* **Dipertingkatkan:** Keperluan versi dinaikkan kepada Ultimate Multisite 2.4.12 dengan notis yang lebih jelas
* **Dipertingkatkan:** Aliran kerja CI menggunakan semakan keluar yang betul untuk plugin tambahan dan teras
* **Dipertingkatkan:** prepare_registrant_info() membaca dari meta pengguna yang disimpan semakan keluar dengan fallback alamat bil
* **Diperbaiki:** AJAX carian domain gagal untuk pengguna yang tidak log masuk semasa semakan keluar
* **Diperbaiki:** AJAX harga domain gagal untuk pengguna yang tidak log masuk semasa semakan keluar
* **Diperbaiki:** Ralat fatal pendefinisian semula kelas Spyc apabila menjalankan arahan WP-CLI
* **Diperbaiki:** Timeout API sandbox Namecheap terlalu pendek
* **Diperbaiki:** Teks butang Domain Search tidak kelihatan pada latar belakang hijau
* **Diperbaiki:** Pendaftaran domain gagal dengan ralat "RegistrantFirstName is Missing" kerana maklumat hubungan yang hilang
* **Diperbaiki:** Rekod domain dicipta dengan blog_id=0 apabila tapak belum wujud pada masa semakan keluar
* **Diperbaiki:** Tetapan TLD lalai dikembalikan sebagai string dan bukannya array yang diproses
* **Dibuang:** Halaman admin Pengurusan Domain berasingan — kini dikendalikan melalui halaman domain teras

Versi 1.0.0 - Dikeluarkan pada 2025-09-28

**Penulisan Semula Besar untuk Ultimate Multisite v2**

* **Baru:** Penulisan semula lengkap dengan seni bina PHP 7.4+ moden
* **Baru:** Integrasi lancar dengan sistem semakan keluar Ultimate Multisite v2
* **Baru:** Pengurusan produk domain dengan pilihan harga yang fleksibel
* **Baru:** Seni bina sokongan penyedia domain berganda
* **Baru:** Integrasi pembaharuan automatik dan langganan
* **Baru:** Antaramuka pengurusan domain pelanggan
* **Baru:** Pemantauan dan log domain admin
* **Baru:** Sokongan kupon untuk produk domain
* **Baru:** Pengurusan tetapan yang komprehensif
* **Baru:** Kod asas yang boleh diperluaskan mesra pembangun
* **Dipertingkatkan:** Penyedia OpenSRS dikemas kini dengan sokongan ciri penuh
* **Dipertingkatkan:** UI moden konsisten dengan Ultimate Multisite v2
* **Diperbaiki:** Semua kod v1 yang lapuk dikemas kini kepada piawaian v2
* **Dibuang:** Keserasian v1 lama (perubahan memecahkan)

### Versi Sebelumnya (v1 Lama)

### Versi 0.0.3 - 20/08/2019

* Pembaikan: Ketidakserasian dengan Groundhogg CRM
* Nota: Ini adalah keluaran v1 terakhir yang serasi

### Versi 0.0.2 - 07/12/2018

* Pembaikan: Medan Kunci Lesen dikeluarkan
* Pembaikan: Tab pelan hilang apabila plugin ciri diaktifkan
* Dipertingkatkan: Menambah butang lompat pada medan pendaftaran

### Versi 0.0.1 - Pelancaran Awal

* Integrasi OpenSRS asas untuk WP Ultimo v1
* Carian dan pendaftaran domain ringkas
* Kebenaran domain berasaskan pelan
