---
title: Catatan Perubahan Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Catatan Perubahan Captcha

Versi: 1.5.0 - Dirilis pada 2026-05-22
* Baru: Pembatas laju (rate limiter) hard-stop — menghitung setiap GET dan POST pada permukaan yang dilindungi captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) dan membalas dengan HTTP 429, header `Retry-After`, dan tidur tarpit yang diacak (1–5 detik, maksimal 15 detik).
* Baru: Pengaturan `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` untuk menyesuaikan jendela tarpit.
* Baru: Filter `wu_cap_rate_limit_whitelist_ip` untuk mengecualikan rentang IP tepercaya.
* Baru: Aksi `wu_cap_rate_limit_will_block` yang dipicu tepat sebelum respons hard-stop dikirim.
* Baru: Deteksi client-IP yang tahan terhadap spoofing. `Captcha_Core::get_client_ip()` (sumber kebenaran untuk kunci bucket rate-limit, captcha siteverify `remoteip`, dan hash IP statistik) kini menerapkan model kepercayaan yang ketat: `REMOTE_ADDR` adalah batas bawah, `CF-Connecting-IP` hanya dihormati jika peer langsung berada di dalam rentang IP Cloudflare saat ini, dan `X-Forwarded-For` hanya dihormati jika peer langsung berada di daftar proxy tepercaya yang dikonfigurasi di admin, dengan penelusuran dari kanan ke kiri yang melewati hop tepercaya/CF sebelum menetap pada IP pengunjung.
* Baru: Pengaturan `cap_trust_cloudflare_headers` (default MATI) — memilih untuk mempercayai `CF-Connecting-IP` saat berada di belakang Cloudflare. Plugin ini menyertakan snapshot Cloudflare CIDR yang dikemas dan menyegarkannya setiap minggu melalui wp-cron dengan fallback yang dikemas jika penyegaran gagal.
* Baru: Pengaturan `cap_trusted_proxies` — area teks (textarea) CIDR atau IP mentah (satu per baris, komentar `#` diizinkan) yang mencantumkan proxy / load-balancer garis depan Anda sendiri. Tanpa ini, `X-Forwarded-For` diabaikan bahkan ketika rate limiter diaktifkan.
* Baru: Deteksi otomatis pertama kali untuk postur Cloudflare / proxy yang mungkin dengan pemberitahuan admin "Terapkan pengaturan terdeteksi" sekali klik. Plugin ini tidak pernah menimpa nilai yang Anda simpan; jika lalu lintas berikutnya menunjukkan bahwa konfigurasi Anda tidak lagi sesuai dengan kenyataan (misalnya, Cloudflare mengubah rentang CIDR dan CIDR proxy Anda sekarang usang), pemberitahuan ketidakcocokan yang tidak dapat diabaikan akan menampilkan pembaruan yang direkomendasikan.
* Diperbaiki: Mode tak terlihat tidak lagi secara diam-diam menurunkan `cap_security_level` ke FAST — tingkat yang dikonfigurasi admin dihormati. Filter `wu_cap_server_security_level` baru tersedia untuk situs yang menginginkan logika khusus.
* Diperbaiki: Penghitung statistik `rate_limits_triggered` kini bertambah pada setiap pemblokiran, tidak hanya pada jalur backstop pasca-sukses yang jarang terjadi.
* Diperbaiki: `Captcha_Core::get_client_ip()` kini menjadi satu-satunya sumber kebenaran untuk atribusi IP pengunjung di seluruh rate limiter, penyedia captcha (reCAPTCHA + hCaptcha `siteverify`), dan statistik — menutup vektor spoofing di mana permintaan server asal langsung yang membawa header `CF-Connecting-IP` palsu akan dihitung bucket-nya menggunakan IP palsu alih-alih peer yang sebenarnya.
* Diperbaiki: Gerbang rate-limit checkout klasik WooCommerce kini dipicu pada `template_redirect` (prioritas 1) alih-alih `woocommerce_before_checkout_form`. Hook tingkat formulir tidak pernah dipicu ketika keranjang kosong, sehingga lalu lintas banjir yang tidak pernah menambahkan produk melewati limiter sepenuhnya.
* Diperbaiki: Gerbang rate-limit pay-for-order WooCommerce kini dipicu pada `template_redirect` alih-alih `woocommerce_before_pay_action`. Yang terakhir hanya dipicu setelah `wp_verify_nonce('woocommerce-pay')` berhasil, yang berarti penyerang tanpa otorisasi (model ancaman sebenarnya) tidak pernah memicu limiter.
* Diperbaiki: Gerbang rate-limit checkout WooCommerce Store API (blok) kini dipicu pada `rest_pre_dispatch` alih-alih `woocommerce_store_api_checkout_update_order_from_request`. Yang terakhir hanya dipicu setelah Store API memvalidasi keranjang dan bidang penagihan, sehingga bot tanpa otorisasi mendapatkan 400 dari validator dan tidak pernah memicu limiter.
* Diperbaiki: Gerbang rate-limit inline-login Ultimate Multisite kini dipicu pada `wu_ajax_nopriv_wu_inline_login` prioritas 1 (dan cermin yang masuk) alih-alih `wu_before_inline_login`. Yang terakhir hanya dipicu setelah `check_ajax_referer('wu_checkout')` berhasil, sehingga bot tanpa otorisasi tanpa nonce wu_checkout yang valid mendapatkan 403 dan tidak pernah memicu limiter.
* Diperbaiki: `Rate_Limiter::enforce()` kini menerapkan pelindung sekali per permintaan yang dikunci berdasarkan `surface|ip`, sehingga hook hulu yang dipicu dua kali per render (terutama `wu_setup_checkout` di Ultimate Multisite) tidak lagi mengurangi separuh ambang batas rate-limit yang efektif.
* Diperbaiki: Gerbang permukaan rate-limit tidak lagi berkonsultasi dengan `Captcha_Core::is_whitelisted()` (filter `wu_captcha_whitelisted`). Filter itu memberi sinyal "captcha sudah ditangani oleh permukaan lain" dan ortogonal terhadap perlindungan banjir — integrasi WooCommerce menghubungkannya untuk melewati captcha login WordPress ketika nonce Woo ada, yang bocor ke penghitungan laju dan membiarkan POST Woo menghindari limiter. Filter `wu_cap_rate_limit_whitelist_ip` yang spesifik untuk rate-limit adalah satu-satunya bypass yang berlaku sekarang.

Versi: 1.3.2 - Dirilis pada 2026-01-27
* Diperbaiki: Widget Cap tidak merender pada formulir checkout menggunakan Elementor atau page builder lainnya
* Diperbaiki: Elemen kustom cap-widget dihapus oleh sanitasi wp_kses()
* Ditingkatkan: Menggunakan konten yang dapat dipanggil (callable content) untuk bidang captcha checkout guna melewati pemfilteran HTML
* Ditingkatkan: JavaScript disederhanakan dengan fallback untuk kasus tepi

Versi: 1.3.1 - Dirilis pada 2026-01-26
* Diperbaiki: Mode captcha tak terlihat tidak lagi otomatis menyelesaikan pada formulir checkout Ultimate Multisite yang dinamis
* Ditingkatkan: Skrip checkout Cap kini menggunakan MutationObserver untuk mendeteksi widget yang dimuat secara dinamis
* Ditingkatkan: Menambahkan intersepsi tombol checkout untuk menunggu token sebelum pengiriman

Versi: 1.3.0 - Dirilis pada 2026-01-27
* Baru: Integrasi checkout WooCommerce Blocks dengan intersepsi pengambilan Store API
* Baru: Dukungan captcha tak terlihat untuk checkout WooCommerce (hCaptcha tak terlihat, reCAPTCHA v2 tak terlihat, v3)
* Baru: Halaman pengaturan mandiri untuk digunakan tanpa Ultimate Multisite
* Baru: Jetpack Autoloader untuk pencegahan konflik dependensi
* Diperbaiki: hCaptcha tidak merender pada checkout Ultimate Multisite yang dinamis (konten AJAX-loaded)
* Diperbaiki: Captcha tidak menyegarkan/mereset ketika terjadi kesalahan validasi formulir
* Diperbaiki: hCaptcha tidak ditampilkan pada halaman checkout WooCommerce
* Diperbaiki: Error kelas reCAPTCHA tidak ditemukan (menambahkan pustaka PHP google/recaptcha)
* Ditingkatkan: Deteksi kesalahan melalui hook WordPress, MutationObserver, dan intersepsi AJAX
* Ditingkatkan: Deskripsi pengaturan kini menyertakan URL dashboard untuk kunci API

Versi: 1.2.2 - Dirilis pada 2026-01-24
* Diperbaiki: Captcha tidak ditampilkan pada Ultimate Multisite Login Form Element (nama ketidakcocokan filter)
* Diperbaiki: HTML widget Cap dihapus oleh sanitasi wp_kses()
* Diperbaiki: Selector JavaScript tidak menemukan formulir dengan garis miring di ID elemen
* Ditambahkan: Hook filter `wu_kses_allowed_html` untuk classaddons memperluas tag HTML yang diizinkan
* Dihapus: File JavaScript kode mati diganti dengan skrip spesifik penyedia

Versi: 1.2.1 - Dirilis pada 2026-01-23

* Diperbaiki: Validasi token Captcha gagal di lingkungan multisite (kini menggunakan transients jaringan luas)
* Diperbaiki: Captcha kini merender secara konsisten untuk semua pengguna terlepas dari status login
* Diperbaiki: Ketidakcocokan antara rendering dan validasi captcha yang menyebabkan kegagalan checkout

Versi: 1.2.0 - Dirilis pada 2026-01-21

* Baru: Cap Captcha - captcha proof-of-work mandiri, diaktifkan secara default saat aktivasi
* Baru: Perlindungan zero-configuration - aktifkan addon dan Anda langsung terlindungi
* Baru: Arsitektur penyedia captcha polimorfik untuk kemudahan ekstensi
* Baru: Perlindungan checkout WooCommerce Store API terhadap serangan pengujian kartu
* Baru: Dashboard pelacakan statistik yang menunjukkan tantangan, verifikasi, dan serangan yang diblokir
* Baru: Preset tingkat keamanan (Fast, Medium, Max) untuk kesulitan Cap Captcha
* Baru: Kelas dasar abstrak untuk penyedia reCAPTCHA dan hCaptcha
* Ditingkatkan: Basis kode dirombak menjadi kelas penyedia modular
* Ditingkatkan: Pemisahan kekhawatiran yang lebih baik dengan kelas manajer khusus
* Diperbaiki: Peningkatan keamanan untuk sanitasi variabel $_SERVER
* Diperbaiki: Konfigurasi pengujian PHPUnit untuk konvensi penamaan WordPress

Versi: 1.0.1 - Dirilis pada 2025-09-28

* Mengganti awalan menjadi ultimate-multisite; memperbarui domain teks; peningkatan versi.
