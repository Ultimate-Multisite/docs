---
title: Pembaruan Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Log Perubahan Captcha

Versi: 1.5.0 - Dikeluarkan pada 2026-05-22
* Baharu: Had kadar hentian keras (Hard-stop rate limiter) — mengira setiap GET dan POST pada permukaan yang dilindungi captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) dan membalas dengan HTTP 429, header `Retry-After`, dan jeda tarpit rawak (1–5 saat, dihadkan keras pada 15 saat).
* Baharu: Tetapan `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` untuk melaraskan tempoh jeda tarpit.
* Baharu: Filter `wu_cap_rate_limit_whitelist_ip` untuk mengecualikan julat IP yang dipercayai.
* Baharu: Tindakan `wu_cap_rate_limit_will_block` yang dipicu serta-merta sebelum respons hentian keras dihantar.
* Baharu: Pengesanan client-IP tahan pemalsuan (Spoof-resistant). `Captcha_Core::get_client_ip()` (sumber kebenaran untuk kunci bakul had kadar, captcha siteverify `remoteip`, dan hash IP statistik) kini menguatkuasakan model kepercayaan yang ketat: `REMOTE_ADDR` adalah asas, `CF-Connecting-IP` hanya dihormati apabila rakan sebaya serta-merta berada di dalam julat IP Cloudflare semasa, dan `X-Forwarded-For` hanya dihormati apabila rakan sebaya serta-merta berada dalam senarai proxy dipercayai yang dikonfigurasi oleh pentadbir, dengan berjalan dari kanan ke kiri yang melangkau hop yang dipercayai/CF sebelum menetap pada IP pelawat.
* Baharu: Tetapan `cap_trust_cloudflare_headers` (lalai MATI) — pilihan untuk mempercayai `CF-Connecting-IP` apabila berada di belakang Cloudflare. Plugin ini membekalkan tangkapan (snapshot) CIDR Cloudflare yang dibundel dan menyegarkannya setiap minggu melalui wp-cron dengan sandaran terbundel jika penyegaran gagal.
* Baharu: Tetapan `cap_trusted_proxies` — kawasan teks (textarea) CIDR atau IP kosong (satu setiap baris, komen `#` dibenarkan) menyenaraikan proxy / load-balancer barisan hadapan anda sendiri. Tanpa ini, `X-Forwarded-For` diabaikan walaupun had kadar diaktifkan.
* Baharu: Pengesanan auto pertama untuk postur Cloudflare / proxy yang mungkin dengan notis pentadbir "Guna tetapan yang dikesan" sekali klik. Plugin ini tidak pernah menimpa nilai yang disimpan; jika trafik seterusnya menunjukkan konfigurasi anda tidak lagi sepadan dengan realiti (cth., Cloudflare telah menukar julat CIDR dan CIDR proxy anda kini lapuk), notis ketidakpadanan yang tidak boleh ditutup akan muncul dengan kemas kini yang disyorkan.
* Diperbaiki: Mod tidak kelihatan tidak lagi menurunkan `cap_security_level` secara senyap kepada FAST — tahap yang dikonfigurasi oleh pentadbir dihormati. Filter `wu_cap_server_security_level` baharu tersedia untuk tapak yang mahukan logik tersuai.
* Diperbaiki: Pengira statistik `rate_limits_triggered` kini meningkat pada setiap blok, bukan hanya pada laluan sandaran selepas kejayaan yang jarang berlaku.
* Diperbaiki: `Captcha_Core::get_client_ip()` kini merupakan sumber kebenaran tunggal untuk pengatribusian IP pelawat merentasi had kadar, penyedia captcha (reCAPTCHA + hCaptcha `siteverify`), dan statistik — menutup vektor pemalsuan di mana permintaan pelayan asal langsung yang membawa header `CF-Connecting-IP` yang dipalsukan akan dikira bakul oleh IP yang dipalsukan dan bukannya rakan sebaya sebenar.
* Diperbaiki: Gerbang had kadar checkout klasik WooCommerce kini dipicu pada `template_redirect` (keutamaan 1) dan bukannya `woocommerce_before_checkout_form`. Hook pada peringkat borang tidak pernah dipicu apabila troli kosong, jadi trafik banjir yang tidak pernah menambah produk telah memintas had kadar sepenuhnya.
* Diperbaiki: Gerbang had kadar bayar-untuk-pesanan WooCommerce kini dipicu pada `template_redirect` dan bukannya `woocommerce_before_pay_action`. Yang terakhir hanya dipicu selepas `wp_verify_nonce('woocommerce-pay')` berjaya, yang bermakna penyerang tanpa kebenaran (model ancaman sebenar) tidak pernah mencetuskan had kadar.
* Diperbaiki: Gerbang had kadar checkout WooCommerce Store API (blok) kini dipicu pada `rest_pre_dispatch` dan bukannya `woocommerce_store_api_checkout_update_order_from_request`. Yang terakhir hanya dipicu selepas Store API mengesahkan medan troli dan bil, jadi bot tanpa kebenaran mendapat 400 daripada pengesah dan tidak pernah mencetuskan had kadar.
* Diperbaiki: Gerbang had kadar inline-login Ultimate Multisite kini dipicu pada `wu_ajax_nopriv_wu_inline_login` keutamaan 1 (dan cermin log masuk) dan bukannya `wu_before_inline_login`. Yang terakhir hanya dipicu selepas `check_ajax_referer('wu_checkout')` berjaya, jadi bot tanpa kebenaran tanpa nonce wu_checkout yang sah mendapat 403 dan tidak pernah mencetuskan had kadar.
* Diperbaiki: `Rate_Limiter::enforce()` kini menggunakan pengawal sekali bagi setiap permintaan yang dikunci oleh `surface|ip`, jadi hook hulu yang dipicu dua kali bagi setiap render (terutamanya `wu_setup_checkout` dalam Ultimate Multisite) tidak lagi mengurangkan separuh ambang had kadar yang berkesan.
* Diperbaiki: Gerbang permukaan had kadar tidak lagi merujuk `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Filter itu memberi isyarat "captcha sudah ditangani oleh permukaan lain" dan adalah ortogonal kepada perlindungan banjir — integrasi WooCommerce telah menyambungkannya untuk melangkau captcha login WordPress apabila nonce Woo ada, yang bocor ke pengiraan kadar dan membenarkan POST Woo mengelak had kadar. Hanya filter `wu_cap_rate_limit_whitelist_ip` khusus had kadar yang kini terpakai.

Versi: 1.3.2 - Dikeluarkan pada 2026-01-27
* Diperbaiki: Widget cap tidak merender pada borang checkout menggunakan Elementor atau pembina halaman lain.
* Diperbaiki: Elemen kustom cap-widget dikeluarkan oleh sanitasi wp_kses().
* Diperbaiki: Menggunakan kandungan boleh dipanggil (callable content) untuk medan captcha checkout bagi memintas penapisan HTML.
* Diperbaiki: JavaScript disederhanakan dengan sandaran untuk kes-kes tepi.

Versi: 1.3.1 - Dikeluarkan pada 2026-01-26
* Diperbaiki: Mod captcha tidak kelihatan tidak lagi menyelesaikan secara automatik pada borang checkout Ultimate Multisite yang dinamik.
* Diperbaiki: Skrip checkout cap kini menggunakan MutationObserver untuk mengesan widget yang dimuatkan secara dinamik.
* Diperbaiki: Menambah intersep butang checkout untuk menunggu token sebelum penghantaran.

Versi: 1.3.0 - Dikeluarkan pada 2026-01-27
* Baharu: Integrasi checkout WooCommerce Blocks dengan intersep pengambilan Store API.
* Baharu: Sokongan captcha tidak kelihatan untuk checkout WooCommerce (hCaptcha tidak kelihatan, reCAPTCHA v2 tidak kelihatan, v3).
* Baharu: Halaman tetapan mandiri untuk digunakan tanpa Ultimate Multisite.
* Baharu: Jetpack Autoloader untuk pencegahan konflik kebergantungan.
* Diperbaiki: hCaptcha tidak merender pada checkout Ultimate Multisite yang dinamik (kandungan AJAX-dimuatkan).
* Diperbaiki: Captcha tidak menyegarkan/reset apabila ralat pengesahan borang berlaku.
* Diperbaiki: hCaptcha tidak dipaparkan pada halaman checkout WooCommerce.
* Diperbaiki: ralat kelas reCAPTCHA tidak ditemui (menambah perpustakaan PHP google/recaptcha).
* Diperbaiki: Pengesanan ralat melalui hook WordPress, MutationObserver, dan intersep AJAX.
* Diperbaiki: Penerangan tetapan kini termasuk URL dashboard untuk kunci API.

Versi: 1.2.2 - Dikeluarkan pada 2026-01-24
* Diperbaiki: Captcha tidak dipaparkan pada Elemen Borang Login Ultimate Multisite (nama ketidakpadanan filter).
* Diperbaiki: HTML widget cap dikeluarkan oleh sanitasi wp_kses().
* Diperbaiki: Pemilih JavaScript tidak menemui borang dengan garis condong dalam ID elemen.
* Ditambah: Hook filter `wu_kses_allowed_html` untuk classaddons bagi memperluaskan tag HTML yang dibenarkan.
* Dibuang: Fail JavaScript kod mati digantikan oleh skrip khusus penyedia.

Versi: 1.2.1 - Dikeluarkan pada 2026-01-23

* Diperbaiki: Pengesahan token Captcha gagal dalam persekitaran multisite (kini menggunakan transients seluruh rangkaian).
* Diperbaiki: Captcha kini merender secara konsisten untuk semua pengguna tanpa mengira status log masuk.
* Diperbaiki: Ketidakpadanan antara rendering dan pengesahan captcha yang menyebabkan kegagalan checkout.

Versi: 1.2.0 - Dikeluarkan pada 2026-01-21

* Baharu: Cap Captcha - captcha bukti kerja (proof-of-work) yang dihoskan sendiri, diaktifkan secara lalai semasa pengaktifan.
* Baharu: Perlindungan konfigurasi sifar - aktifkan addon dan anda dilindungi serta-merta.
* Baharu: Seni bina penyedia captcha polimorfik untuk kebolehluasan yang mudah.
* Baharu: Perlindungan checkout WooCommerce Store API terhadap serangan ujian kad.
* Baharu: Dashboard penjejakan statistik menunjukkan cabaran, pengesahan, dan serangan yang diblokir.
* Baharu: Tetapan pratetap tahap keselamatan (Fast, Medium, Max) untuk kesukaran Cap Captcha.
* Baharu: Kelas asas abstrak untuk penyedia reCAPTCHA dan hCaptcha.
* Diperbaiki: Kod asas disusun semula ke dalam kelas penyedia modular.
* Diperbaiki: Pemisahan kebimbangan yang lebih baik dengan kelas pengurus khusus.
* Diperbaiki: Peningkatan keselamatan untuk sanitasi pembolehubah $_SERVER.
* Diperbaiki: Konfigurasi ujian PHPUnit untuk konvensyen penamaan WordPress.

Versi: 1.0.1 - Dikeluarkan pada 2025-09-28

* Tukar awalan kepada ultimate-multisite; kemas kini domain teks; peningkatan versi.
