---
title: Captcha Cathetan Owah-owahan
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Cathetan Owah-owahan Captcha {#captcha-changelog}

Versi: 1.5.0 - Diluncuraké ing 2026-05-22
* Anyar: Pambates laju hard-stop — ngitung saben GET lan POST ing lumah sing dilindhungi captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) lan mbales nganggo HTTP 429, irah-irahan `Retry-After`, lan turu tarpit sing diacak (1–5s, diwatesi atos nganti 15s).
* Anyar: Setelan `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` kanggo nyetel jendhela tarpit.
* Anyar: Filter `wu_cap_rate_limit_whitelist_ip` kanggo ngecualèkaké rentang IP sing dipercaya.
* Anyar: Tindakan `wu_cap_rate_limit_will_block` sing murub pas sadurungé tanggapan hard-stop dikirim.
* Anyar: Deteksi IP client sing tahan spoof. `Captcha_Core::get_client_ip()` (sumber bebener kanggo kunci ember wates-laju, captcha siteverify `remoteip`, lan hash IP statistik) saiki ngetrapaké model kapercayan sing ketat: REMOTE_ADDR dadi lantai, `CF-Connecting-IP` diajeni mung nalika peer langsung ana ing rentang IP Cloudflare saiki, lan `X-Forwarded-For` diajeni mung nalika peer langsung ana ing dhaptar proxy dipercaya sing dikonfigurasi admin, nganggo mlaku saka tengen menyang kiwa sing ngliwati hop dipercaya/CF sadurungé netepaké IP pengunjung.
* Anyar: Setelan `cap_trust_cloudflare_headers` (gawan OFF) — milih mlebu marang kapercayan `CF-Connecting-IP` nalika ana ing mburi Cloudflare. Plugin nggawa snapshot CIDR Cloudflare sing dibundel lan nyegeraké saben minggu liwat wp-cron nganggo fallback bundelan yen panyegaran gagal.
* Anyar: Setelan `cap_trusted_proxies` — textarea CIDR utawa IP polos (siji saben baris, komentar `#` diidini) sing nyathet proxy / load-balancer garis ngarep duwèkmu. Tanpa iki, `X-Forwarded-For` diabaikaké sanajan pambates laju diaktifaké.
* Anyar: Deteksi otomatis nalika kapisan diaktifaké kanggo posisi Cloudflare / proxy sing mungkin, nganggo kabar admin "Terapaké setelan sing dideteksi" siji klik. Plugin ora tau nimpa nilai sing wis koksimpen; yen lalu lintas sabanjuré nuduhaké config-mu wis ora cocog karo kasunyatan (umpamané Cloudflare ngganti rentang CIDR lan CIDR proxy-mu saiki wis lawas), kabar ora cocog sing ora bisa dibuwang bakal nampilaké pembaruan sing disaranaké.
* Didandani: Mode ora katon ora maneh kanthi meneng-meneng ngedhunaké `cap_security_level` dadi FAST — level sing dikonfigurasi admin diajeni. Filter `wu_cap_server_security_level` anyar kasedhiya kanggo site sing pengin logika khusus.
* Didandani: Counter statistik `rate_limits_triggered` saiki nambah ing saben blok, ora mung ing jalur backstop sawisé sukses sing langka.
* Didandani: `Captcha_Core::get_client_ip()` saiki dadi siji-sijiné sumber bebener kanggo atribusi IP pengunjung ing pambates laju, panyedhiya captcha (reCAPTCHA + hCaptcha `siteverify`), lan statistik — nutup vektor spoofing ing ngendi panyuwunan langsung menyang server asal sing nggawa irah-irahan `CF-Connecting-IP` palsu bakal dilebokaké ember adhedhasar IP palsu tinimbang peer nyata.
* Didandani: Gerbang wates-laju checkout klasik WooCommerce saiki murub ing `template_redirect` (prioritas 1) tinimbang `woocommerce_before_checkout_form`. Hook tingkat formulir ora tau murub nalika kranjang kosong, mula lalu lintas banjir sing ora tau nambah product ngliwati pambates kanthi sakabèhé.
* Didandani: Gerbang wates-laju pay-for-order WooCommerce saiki murub ing `template_redirect` tinimbang `woocommerce_before_pay_action`. Sing pungkasan mung murub sawisé `wp_verify_nonce('woocommerce-pay')` sukses, sing tegesé panyerang unauth (model ancaman nyata) ora tau micu pambates.
* Didandani: Gerbang wates-laju checkout WooCommerce Store API (blocks) saiki murub ing `rest_pre_dispatch` tinimbang `woocommerce_store_api_checkout_update_order_from_request`. Sing pungkasan mung murub sawisé Store API ngesahaké kranjang lan field tagihan, mula bot unauth éntuk 400 saka validator lan ora tau nyandung pambates.
* Didandani: Gerbang wates-laju inline-login Ultimate Multisite saiki murub ing `wu_ajax_nopriv_wu_inline_login` prioritas 1 (lan pangilon kanggo sing wis mlebu) tinimbang `wu_before_inline_login`. Sing pungkasan mung murub sawisé `check_ajax_referer('wu_checkout')` sukses, mula bot unauth tanpa nonce wu_checkout sing sah éntuk 403 lan ora tau nyandung pambates.
* Didandani: `Rate_Limiter::enforce()` saiki ngetrapaké penjaga sapisan saben panyuwunan sing dikunci nganggo `surface|ip`, mula hook hulu sing murub kaping pindho saben render (utamané `wu_setup_checkout` ing Ultimate Multisite) ora maneh nyuda separo ambang wates-laju efektif.
* Didandani: Gerbang lumah wates-laju ora maneh takon `Captcha_Core::is_whitelisted()` (filter `wu_captcha_whitelisted`). Filter kuwi menehi sinyal "captcha wis ditangani déning lumah liya" lan ora gegandhengan karo pangayoman banjir — integrasi WooCommerce nge-hook kuwi kanggo ngliwati captcha login WordPress nalika nonce Woo ana, sing banjur mleber menyang pangetungan laju lan ngidini POST Woo ngindhari pambates. Filter khusus wates-laju `wu_cap_rate_limit_whitelist_ip` iku siji-sijiné bypass sing saiki ditrapaké.

Versi: 1.3.2 - Diluncuraké ing 2026-01-27
* Didandani: Widget Cap ora dirender ing formulir checkout sing nganggo Elementor utawa page builder liya
* Didandani: Elemen kustom cap-widget dicopot déning sanitasi wp_kses()
* Ditingkataké: Nggunakké isi callable kanggo field captcha checkout supaya ngliwati panyaringan HTML
* Ditingkataké: JavaScript disederhanakaké nganggo fallback kanggo kasus pinggir

Versi: 1.3.1 - Diluncuraké ing 2026-01-26
* Didandani: Mode ora katon Cap Captcha ora ngrampungaké otomatis ing formulir checkout Ultimate Multisite sing dinamis
* Ditingkataké: Skrip checkout Cap saiki nganggo MutationObserver kanggo ndeteksi widget sing dimuat sacara dinamis
* Ditingkataké: Nambah intersepsi tombol checkout kanggo ngentèni token sadurungé pengajuan

Versi: 1.3.0 - Dirilis tanggal 2026-01-27
* Anyar: Integrasi checkout WooCommerce Blocks karo panyegatan fetch Store API
* Anyar: Dhukungan captcha ora katon kanggo checkout WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Anyar: Kaca setelan mandiri kanggo digunakake tanpa Ultimate Multisite
* Anyar: Jetpack Autoloader kanggo nyegah konflik dependensi
* Didandani: hCaptcha ora katon ing checkout Ultimate Multisite dinamis (konten sing dimuat AJAX)
* Didandani: Captcha ora seger maneh/direset nalika ana kaluputan validasi formulir
* Didandani: hCaptcha ora katon ing kaca checkout WooCommerce
* Didandani: Kaluputan kelas reCAPTCHA ora ditemokake (nambahake pustaka PHP google/recaptcha)
* Ditambah apik: Deteksi kaluputan liwat hook WordPress, MutationObserver, lan panyegatan AJAX
* Ditambah apik: Katrangan setelan saiki kalebu URL dashboard kanggo API keys

Versi: 1.2.2 - Dirilis tanggal 2026-01-24
* Didandani: Captcha ora katon ing Ultimate Multisite Login Form Element (jeneng panyaring formulir ora cocog)
* Didandani: HTML widget Cap dibusak dening sanitasi wp_kses()
* Didandani: Pamilih JavaScript ora nemokake formulir sing nduweni garis miring ing ID unsur
* Ditambahake: Filter hook `wu_kses_allowed_html` kanggo classaddons supaya bisa nggedhekake tag HTML sing diidini
* Dibusak: Berkas JavaScript kode mati diganti dening skrip khusus panyedhiya

Versi: 1.2.1 - Dirilis tanggal 2026-01-23

* Didandani: Validasi token Cap Captcha gagal ing lingkungan multisite (saiki nggunakake transient sak jaringan)
* Didandani: Captcha saiki dirender kanthi konsisten kanggo kabeh pangguna tanpa preduli status login
* Didandani: Ora cocog antarane rendering captcha lan validasi sing nyebabake kegagalan checkout

Versi: 1.2.0 - Dirilis tanggal 2026-01-21

* Anyar: Cap Captcha - captcha proof-of-work sing di-host dhewe, diuripake kanthi gawan nalika aktivasi
* Anyar: Proteksi tanpa konfigurasi - aktifake addon lan sampeyan langsung dilindhungi
* Anyar: Arsitektur panyedhiya captcha polimorfik kanggo gampang digedhekake
* Anyar: Proteksi checkout WooCommerce Store API marang serangan uji kertu
* Anyar: Dashboard pelacakan statistik sing nuduhake tantangan, verifikasi, lan serangan sing diblokir
* Anyar: Prasetel tingkat keamanan (Fast, Medium, Max) kanggo kangelan Cap Captcha
* Anyar: Kelas dhasar abstrak kanggo panyedhiya reCAPTCHA lan hCaptcha
* Ditambah apik: Codebase direfaktor dadi kelas panyedhiya modular
* Ditambah apik: Pemisahan tanggung jawab luwih apik nganggo kelas manager khusus
* Fixed: Security improvements for $_SERVER variable sanitization
* Didandani: Konfigurasi tes PHPUnit kanggo konvensi penamaan WordPress

Versi: 1.0.1 - Dirilis tanggal 2025-09-28

* Ganti jeneng prefiks dadi ultimate-multisite; nganyari text domain; mundhakake versi.
