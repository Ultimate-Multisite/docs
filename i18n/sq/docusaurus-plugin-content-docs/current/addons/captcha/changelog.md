---
title: Regjistri i ndryshimeve të Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Ditari i ndryshimeve të Captcha

Versioni: 1.5.0 - Lëshuar më 2026-05-22
* E re: Kufizues shpejtësie me ndalim të plotë — numëron çdo GET dhe POST në sipërfaqet e mbrojtura me captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) dhe përgjigjet me HTTP 429, një `Retry-After` header dhe një tarpit sleep të rastësishëm (1–5s, me kufi të fortë në 15s).
* E re: Cilësimet `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` për të rregulluar dritaren tarpit.
* E re: Filtri `wu_cap_rate_limit_whitelist_ip` për të përjashtuar intervale IP të besuara.
* E re: Veprimi `wu_cap_rate_limit_will_block` që aktivizohet menjëherë përpara se të dërgohet përgjigjja e ndalimit të plotë.
* E re: Zbulim i IP-së së klientit rezistent ndaj falsifikimit. `Captcha_Core::get_client_ip()` (burimi i së vërtetës për çelësat e kovave të kufizimit të shpejtësisë, captcha siteverify `remoteip` dhe hash-et IP të statistikave) tani zbaton një model të rreptë besimi: REMOTE_ADDR është baza, `CF-Connecting-IP` respektohet vetëm kur peer-i i menjëhershëm është brenda një intervali aktual IP të Cloudflare, dhe `X-Forwarded-For` respektohet vetëm kur peer-i i menjëhershëm është në listën e proxy-ve të besuar të konfiguruar nga administratori, me një ecje nga e djathta në të majtë që anashkalon hop-et e besuara/CF përpara se të vendoset te IP-ja e vizitorit.
* E re: Cilësimi `cap_trust_cloudflare_headers` (parazgjedhja OFF) — zgjidhni besimin te `CF-Connecting-IP` kur jeni pas Cloudflare. Plugin-i vjen me një snapshot të përfshirë të CIDR-ve të Cloudflare dhe e rifreskon atë çdo javë përmes wp-cron me rezervë të përfshirë nëse rifreskimi dështon.
* E re: Cilësimi `cap_trusted_proxies` — textarea me CIDR ose IP të thjeshta (një për rresht, komentet `#` lejohen) që liston proxy-t / load-balancers tuaj të vijës së parë. Pa këtë, `X-Forwarded-For` shpërfillet edhe kur kufizuesi i shpejtësisë është i aktivizuar.
* E re: Vetëzbulim në aktivizimin e parë i gjendjes së mundshme Cloudflare / proxy me një njoftim administratori "Apliko cilësimet e zbuluara" me një klik. Plugin-i nuk i mbishkruan kurrë vlerat tuaja të ruajtura; nëse trafiku i mëvonshëm sugjeron se konfigurimi juaj nuk përputhet më me realitetin (p.sh. Cloudflare ndryshoi intervalet CIDR dhe CIDR e proxy-t tuaj tani është e vjetruar), shfaqet një njoftim mospërputhjeje që nuk mund të hiqet, me përditësimin e rekomanduar.
* Rregulluar: Modaliteti i padukshëm nuk e ul më në heshtje `cap_security_level` në FAST — niveli i konfiguruar nga administratori respektohet. Një filtër i ri `wu_cap_server_security_level` është i disponueshëm për site që duan logjikë të personalizuar.
* Rregulluar: Numëruesi i statistikave `rate_limits_triggered` tani rritet në çdo bllokim, jo vetëm në rrugën e rrallë backstop pas suksesit.
* Rregulluar: `Captcha_Core::get_client_ip()` tani është burimi i vetëm i së vërtetës për atribuimin e IP-së së vizitorit në kufizuesin e shpejtësisë, ofruesit captcha (reCAPTCHA + hCaptcha `siteverify`) dhe statistika — duke mbyllur një vektor falsifikimi ku kërkesat direkte te serveri origjinë që mbanin një `CF-Connecting-IP` header të falsifikuar do të futeshin në kovë sipas IP-së së falsifikuar në vend të peer-it real.
* Rregulluar: Porta e kufizimit të shpejtësisë për WooCommerce classic checkout tani aktivizohet në `template_redirect` (prioriteti 1) në vend të `woocommerce_before_checkout_form`. Hook-u në nivel formulari nuk aktivizohet kurrë kur shporta është bosh, kështu që trafiku flood që nuk shton kurrë një produkt e anashkalonte plotësisht kufizuesin.
* Rregulluar: Porta e kufizimit të shpejtësisë për WooCommerce pay-for-order tani aktivizohet në `template_redirect` në vend të `woocommerce_before_pay_action`. Ky i fundit aktivizohet vetëm pasi `wp_verify_nonce('woocommerce-pay')` ka sukses, që do të thotë se sulmuesit unauth (modeli real i kërcënimit) nuk e aktivizonin kurrë kufizuesin.
* Rregulluar: Porta e kufizimit të shpejtësisë për checkout-in e WooCommerce Store API (blocks) tani aktivizohet në `rest_pre_dispatch` në vend të `woocommerce_store_api_checkout_update_order_from_request`. Ky i fundit aktivizohet vetëm pasi Store API validon shportën dhe fushat e faturimit, kështu që botët unauth merrnin një 400 nga validuesi dhe nuk e aktivizonin kurrë kufizuesin.
* Rregulluar: Porta e kufizimit të shpejtësisë për inline-login të Ultimate Multisite tani aktivizohet në `wu_ajax_nopriv_wu_inline_login` prioriteti 1 (dhe pasqyrën për të kyçurit) në vend të `wu_before_inline_login`. Ky i fundit aktivizohet vetëm pasi `check_ajax_referer('wu_checkout')` ka sukses, kështu që botët unauth pa një nonce të vlefshëm wu_checkout merrnin një 403 dhe nuk e aktivizonin kurrë kufizuesin.
* Rregulluar: `Rate_Limiter::enforce()` tani aplikon një roje një herë për kërkesë, të kyçur nga `surface|ip`, kështu që hook-et upstream që aktivizohen dy herë për renderim (veçanërisht `wu_setup_checkout` në Ultimate Multisite) nuk e përgjysmojnë më pragun efektiv të kufizimit të shpejtësisë.
* Rregulluar: Portat e sipërfaqes së kufizimit të shpejtësisë nuk konsultojnë më `Captcha_Core::is_whitelisted()` (filtri `wu_captcha_whitelisted`). Ai filtër sinjalizon "captcha tashmë është trajtuar nga një sipërfaqe tjetër" dhe është ortogonal ndaj mbrojtjes nga flood — integrimi WooCommerce po e lidhte atë për të anashkaluar captcha-n e WordPress login kur ishte i pranishëm një Woo nonce, gjë që rridhte në numërimin e shpejtësisë dhe i lejonte POST-et Woo të shmangnin kufizuesin. Filtri specifik për kufizimin e shpejtësisë `wu_cap_rate_limit_whitelist_ip` është i vetmi bypass që tani aplikohet.

Versioni: 1.3.2 - Lëshuar më 2026-01-27
* Rregulluar: Cap widget nuk shfaqej në formularët checkout që përdorin Elementor ose ndërtues të tjerë faqesh
* Rregulluar: Elementi i personalizuar cap-widget hiqej nga sanitizimi wp_kses()
* Përmirësuar: Përdor përmbajtje callable për fushën captcha të checkout për të anashkaluar filtrimin HTML
* Përmirësuar: JavaScript i thjeshtuar me fallback për raste skajore

Versioni: 1.3.1 - Lëshuar më 2026-01-26
* Rregulluar: Modaliteti i padukshëm i Cap Captcha nuk zgjidhej automatikisht në formularët dinamikë të checkout të Ultimate Multisite
* Përmirësuar: Skripti i checkout i Cap tani përdor MutationObserver për të zbuluar widget-e të ngarkuara dinamikisht
* Përmirësuar: U shtua ndërprerja e butonit checkout për të pritur token-in përpara dërgimit

Version: 1.3.0 - Publikuar më 2026-01-27
* E re: Integrim i checkout të WooCommerce Blocks me përgjim të fetch të Store API
* E re: Mbështetje për captcha të padukshme për checkout të WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* E re: Faqe e pavarur e cilësimeve për përdorim pa Ultimate Multisite
* E re: Jetpack Autoloader për parandalimin e konflikteve të varësive
* Rregulluar: hCaptcha nuk shfaqej në checkout dinamik të Ultimate Multisite (përmbajtje e ngarkuar me AJAX)
* Rregulluar: Captcha nuk rifreskohej/rivendosej kur ndodhnin gabime të validimit të formularit
* Rregulluar: hCaptcha nuk shfaqej në faqen e checkout të WooCommerce
* Rregulluar: Gabim i klasës reCAPTCHA që nuk gjendej (u shtua biblioteka PHP google/recaptcha)
* Përmirësuar: Zbulimi i gabimeve përmes hook-eve të WordPress, MutationObserver dhe përgjimit AJAX
* Përmirësuar: Përshkrimet e cilësimeve tani përfshijnë URL të Dashboard për çelësat API

Version: 1.2.2 - Publikuar më 2026-01-24
* Rregulluar: Captcha nuk shfaqej në Elementin e Formularit të Hyrjes të Ultimate Multisite (mospërputhje e emrit të filtrit të formularit)
* Rregulluar: HTML-ja e widget-it Cap hiqej nga sanitizimi `wp_kses()`
* Rregulluar: Selektorët JavaScript nuk gjenin formularë me pjerrëza në ID-të e elementeve
* Shtuar: Filter hook `wu_kses_allowed_html` që classaddons të zgjerojnë tag-et HTML të lejuara
* Hequr: Skedarë JavaScript me kod të vdekur, të zëvendësuar nga skripte specifike për ofruesin

Version: 1.2.1 - Publikuar më 2026-01-23

* Rregulluar: Validimi i token-it të Cap Captcha dështonte në mjedise multisite (tani përdor transients në nivel rrjeti)
* Rregulluar: Captcha tani shfaqet në mënyrë të qëndrueshme për të gjithë përdoruesit pavarësisht statusit të hyrjes
* Rregulluar: Mospërputhje mes shfaqjes dhe validimit të captcha-s që shkaktonte dështime në checkout

Version: 1.2.0 - Publikuar më 2026-01-21

* E re: Cap Captcha - captcha proof-of-work e hostuar vetë, e aktivizuar si parazgjedhje gjatë aktivizimit
* E re: Mbrojtje me konfigurim zero - aktivizoni addon-in dhe jeni të mbrojtur menjëherë
* E re: Arkitekturë polimorfike e ofruesve të captcha-s për zgjerueshmëri të lehtë
* E re: Mbrojtje e checkout të WooCommerce Store API kundër sulmeve të testimit të kartave
* E re: Dashboard për ndjekjen e statistikave që tregon sfida, verifikime dhe sulme të bllokuara
* E re: Paracaktime të nivelit të sigurisë (Fast, Medium, Max) për vështirësinë e Cap Captcha
* E re: Klasa bazë abstrakte për ofruesit reCAPTCHA dhe hCaptcha
* Përmirësuar: Baza e kodit u ristrukturua në klasa modulare ofruesish
* Përmirësuar: Ndarje më e mirë e përgjegjësive me klasë menaxheri të dedikuar
* Fixed: Security improvements for $_SERVER variable sanitization
* Rregulluar: Konfigurimi i testeve PHPUnit për konventat e emërtimit të WordPress

Version: 1.0.1 - Publikuar më 2025-09-28

* Riemërto prefiksin në ultimate-multisite; përditëso text domain; rrit versionin.
