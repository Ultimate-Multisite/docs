---
title: Catetan Parobahan Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Log Parobahan Captcha

Vérsi: 1.5.0 - Dirilis dina 2026-05-22
* Anyar: Hard-stop rate limiter — ngitung unggal GET jeung POST dina permukaan nu ditangtayungan captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) sarta ngabales ku HTTP 429, hiji header `Retry-After`, jeung tarpit sleep acak (1–5d, dibatesan teuas di 15d).
* Anyar: Setélan `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` pikeun nyaluyukeun jandéla tarpit.
* Anyar: Filter `wu_cap_rate_limit_whitelist_ip` pikeun ngabébaskeun rentang IP nu dipercaya.
* Anyar: Aksi `wu_cap_rate_limit_will_block` anu jalan langsung saméméh réspon hard-stop dikirim.
* Anyar: Detéksi IP klien anu tahan spoofing. `Captcha_Core::get_client_ip()` (sumber bebeneran pikeun konci bucket rate-limit, captcha siteverify `remoteip`, jeung hash IP statistik) ayeuna nerapkeun modél kapercayaan anu ketat: REMOTE_ADDR jadi dasar, `CF-Connecting-IP` dihargaan ngan lamun peer langsung aya dina rentang IP Cloudflare ayeuna, sarta `X-Forwarded-For` dihargaan ngan lamun peer langsung aya dina daptar trusted-proxy anu dikonfigurasi admin, kalayan leumpang ti katuhu ka kénca anu ngalewatan trusted/CF hops saméméh netepkeun IP pangunjung.
* Anyar: Setélan `cap_trust_cloudflare_headers` (standar OFF) — pilih pikeun percanten kana `CF-Connecting-IP` nalika aya di tukangeun Cloudflare. plugin ieu mawa snapshot Cloudflare CIDR bawaan sarta ngapdetna mingguan ngaliwatan wp-cron kalayan fallback bawaan lamun apdet gagal.
* Anyar: Setélan `cap_trusted_proxies` — textarea eusina CIDR atawa IP polos (hiji per baris, koméntar `#` diidinan) anu ngadaptarkeun proxy / load-balancer garis hareup anjeun sorangan. Tanpa ieu, `X-Forwarded-For` dipaliré sanajan rate limiter diaktipkeun.
* Anyar: Detéksi otomatis nalika munggaran diaktipkeun pikeun kamungkinan postur Cloudflare / proxy kalayan béwara admin saklik "Terapkeun setélan anu kadétéksi". plugin teu kungsi nimpa nilai anu geus disimpen ku anjeun; lamun patalimarga salajengna nunjukkeun config anjeun henteu deui cocog jeung kanyataan (contona Cloudflare ngarobah rentang CIDR sarta proxy CIDR anjeun ayeuna geus kolot), béwara mismatch anu teu bisa dipiceun bakal nembongkeun apdet anu disarankeun.
* Dibereskeun: Modeu invisible henteu deui sacara cicingeun nurunkeun `cap_security_level` ka FAST — tingkat anu dikonfigurasi admin dihargaan. Filter anyar `wu_cap_server_security_level` sayogi pikeun situs anu hoyong logika husus.
* Dibereskeun: Counter statistik `rate_limits_triggered` ayeuna nambahan dina unggal blok, henteu ngan dina jalur backstop langka sanggeus hasil.
* Dibereskeun: `Captcha_Core::get_client_ip()` ayeuna jadi hiji-hijina sumber bebeneran pikeun atribusi IP pangunjung di sakuliah rate limiter, panyadia captcha (reCAPTCHA + hCaptcha `siteverify`), jeung statistik — nutup véktor spoofing dimana pamundut langsung ka server asal anu mawa header `CF-Connecting-IP` palsu bakal diasupkeun ka bucket dumasar IP spoofed tibatan peer asli.
* Dibereskeun: Gerbang rate-limit checkout klasik WooCommerce ayeuna jalan dina `template_redirect` (prioritas 1) tibatan `woocommerce_before_checkout_form`. Hook tingkat formulir henteu kungsi jalan nalika karanjang kosong, jadi patalimarga flood anu henteu kungsi nambahkeun produk ngaliwatan limiter sagemblengna.
* Dibereskeun: Gerbang rate-limit pay-for-order WooCommerce ayeuna jalan dina `template_redirect` tibatan `woocommerce_before_pay_action`. Anu kadua ngan jalan sanggeus `wp_verify_nonce('woocommerce-pay')` hasil, hartina panyerang unauth (modél ancaman sabenerna) henteu kungsi memicu limiter.
* Dibereskeun: Gerbang rate-limit checkout WooCommerce Store API (blocks) ayeuna jalan dina `rest_pre_dispatch` tibatan `woocommerce_store_api_checkout_update_order_from_request`. Anu kadua ngan jalan sanggeus Store API ngesahkeun karanjang jeung widang tagihan, jadi bot unauth meunang 400 ti validator sarta henteu kungsi ngaktipkeun limiter.
* Dibereskeun: Gerbang rate-limit inline-login Ultimate Multisite ayeuna jalan dina `wu_ajax_nopriv_wu_inline_login` prioritas 1 (jeung eunteung logged-in) tibatan `wu_before_inline_login`. Anu kadua ngan jalan sanggeus `check_ajax_referer('wu_checkout')` hasil, jadi bot unauth tanpa wu_checkout nonce anu sah meunang 403 sarta henteu kungsi ngaktipkeun limiter.
* Dibereskeun: `Rate_Limiter::enforce()` ayeuna nerapkeun pangawal sakali-per-pamundut anu dikonci ku `surface|ip`, jadi hook upstream anu jalan dua kali per render (utamana `wu_setup_checkout` dina Ultimate Multisite) henteu deui ngurangan satengah ambang rate-limit éféktif.
* Dibereskeun: Gerbang permukaan rate-limit henteu deui mariksa `Captcha_Core::is_whitelisted()` (filter `wu_captcha_whitelisted`). Filter éta nandakeun "captcha geus diurus ku permukaan séjén" sarta misah tina panyalindungan flood — integrasi WooCommerce ngaitkeun éta pikeun ngalewatan captcha login WordPress nalika Woo nonce aya, anu ngocor kana itungan rate sarta ngidinan Woo POST nyingkahan limiter. Filter husus rate-limit `wu_cap_rate_limit_whitelist_ip` mangrupa hiji-hijina bypass anu ayeuna diterapkeun.

Vérsi: 1.3.2 - Dirilis dina 2026-01-27
* Dibereskeun: Widget Cap henteu karender dina formulir checkout anu ngagunakeun Elementor atawa page builder séjén
* Dibereskeun: Elemen kustom cap-widget dipiceun ku sanitasi wp_kses()
* Ningkat: Ngagunakeun eusi callable pikeun widang captcha checkout pikeun ngalewatan panyaringan HTML
* Ningkat: JavaScript disederhanakeun kalayan fallback pikeun kasus pinggir

Vérsi: 1.3.1 - Dirilis dina 2026-01-26
* Dibereskeun: Modeu invisible Cap Captcha henteu otomatis ngaréngsékeun dina formulir checkout Ultimate Multisite anu dinamis
* Ningkat: Skrip checkout Cap ayeuna ngagunakeun MutationObserver pikeun ngadeteksi widget anu dimuat sacara dinamis
* Ningkat: Ditambahkeun pencegatan tombol checkout pikeun ngadagoan token saméméh pangiriman

Version: 1.3.0 - Dileupaskeun dina 2026-01-27
* Anyar: Integrasi checkout WooCommerce Blocks jeung intersepsi fetch Store API
* Anyar: Dukungan captcha teu katingali pikeun checkout WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Anyar: Kaca setélan mandiri pikeun dipaké tanpa Ultimate Multisite
* Anyar: Jetpack Autoloader pikeun nyegah konflik dependensi
* Dibereskeun: hCaptcha henteu dirender dina checkout Ultimate Multisite dinamis (eusi dimuat ku AJAX)
* Dibereskeun: Captcha henteu nyegerkeun/direset nalika kasalahan validasi formulir lumangsung
* Dibereskeun: hCaptcha henteu némbongan dina kaca checkout WooCommerce
* Dibereskeun: Kasalahan kelas reCAPTCHA teu kapanggih (nambahkeun pustaka PHP google/recaptcha)
* Ditingkatkeun: Deteksi kasalahan ngaliwatan hooks WordPress, MutationObserver, jeung intersepsi AJAX
* Ditingkatkeun: Pedaran setélan ayeuna ngawengku URL Dashboard pikeun konci API

Version: 1.2.2 - Dileupaskeun dina 2026-01-24
* Dibereskeun: Captcha henteu dipintonkeun dina Ultimate Multisite Login Form Element (ngaran panyaring formulir teu cocog)
* Dibereskeun: HTML widget Cap dipiceun ku sanitasi wp_kses()
* Dibereskeun: Pamilih JavaScript henteu manggihan formulir anu boga garis miring dina ID unsur
* Ditambahkeun: Hook panyaring `wu_kses_allowed_html` pikeun classaddons pikeun ngalegaan tag HTML anu diidinan
* Dipiceun: Berkas JavaScript kode paéh diganti ku skrip husus panyadia

Version: 1.2.1 - Dileupaskeun dina 2026-01-23

* Dibereskeun: Validasi token Cap Captcha gagal dina lingkungan multisite (ayeuna ngagunakeun transients sa-network)
* Dibereskeun: Captcha ayeuna dirender konsisten pikeun sakabéh pamaké henteu paduli status login
* Dibereskeun: Teu cocog antara rendering captcha jeung validasi anu nyababkeun kagagalan checkout

Version: 1.2.0 - Dileupaskeun dina 2026-01-21

* Anyar: Cap Captcha - captcha proof-of-work nu di-host sorangan, diaktipkeun sacara standar nalika aktivasi
* Anyar: Perlindungan tanpa konfigurasi - aktipkeun addon sarta anjeun langsung kajaga
* Anyar: Arsitéktur panyadia captcha polimorfik pikeun éksténsibilitas anu gampang
* Anyar: Perlindungan checkout WooCommerce Store API ngalawan serangan nguji kartu
* Anyar: Dashboard ngalacak statistik anu némbongkeun tangtangan, verifikasi, jeung serangan anu diblokir
* Anyar: Prasetél tingkat kaamanan (Gancang, Sedeng, Maks) pikeun kasulitan Cap Captcha
* Anyar: Kelas dasar abstrak pikeun panyadia reCAPTCHA jeung hCaptcha
* Ditingkatkeun: Basis kode direfaktor jadi kelas panyadia modular
* Ditingkatkeun: Pamisahan tanggung jawab anu leuwih hadé jeung kelas manajer husus
* Fixed: Security improvements for $_SERVER variable sanitization
* Dibereskeun: Konfigurasi tés PHPUnit pikeun konvénsi ngaran WordPress

Version: 1.0.1 - Dileupaskeun dina 2025-09-28

* Ganti ngaran prefiks jadi ultimate-multisite; apdet domain téks; naékkeun vérsi.
