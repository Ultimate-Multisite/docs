---
title: Captcha-ŝanĝprotokolo
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Kapĉa ŝanĝprotokolo {#captcha-changelog}

Versio: 1.5.0 - Eldonita je 2026-05-22
* Nova: Strikta rapid-limigilo — kalkulas ĉiun GET kaj POST sur kapĉe protektitaj surfacoj (wp-login / register / lost-password / komentoj, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) kaj respondas per HTTP 429, `Retry-After` header, kaj hazardigita tarpit-dormo (1–5s, strikte limigita je 15s).
* Nova: agordoj `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` por agordi la tarpit-fenestron.
* Nova: filtro `wu_cap_rate_limit_whitelist_ip` por escepti fidatajn IP-intervalojn.
* Nova: ago `wu_cap_rate_limit_will_block`, kiu ekas tuj antaŭ ol la strikta haltiga respondo estas sendita.
* Nova: Klient-IP-detekto rezista al falsado. `Captcha_Core::get_client_ip()` (la aŭtoritata fonto por rapid-limigaj sitelŝlosiloj, kapĉa siteverify `remoteip`, kaj statistikaj IP-haŝoj) nun devigas striktan fidomodelon: REMOTE_ADDR estas la bazo, `CF-Connecting-IP` estas honorata nur kiam la tuja samulo estas ene de aktuala Cloudflare IP-intervalo, kaj `X-Forwarded-For` estas honorata nur kiam la tuja samulo estas en la administrante agordita listo de fidataj prokuriloj, kun dekstren-maldekstra trairo kiu preterlasas fidatajn/CF saltojn antaŭ ol fiksiĝi ĉe la vizitanta IP.
* Nova: agordo `cap_trust_cloudflare_headers` (defaŭlte OFF) — elekti fidon al `CF-Connecting-IP` kiam malantaŭ Cloudflare. La plugin inkluzivas pakitan Cloudflare CIDR-kopion kaj refreŝigas ĝin semajne per wp-cron kun pakita rezervo se la refreŝigo malsukcesas.
* Nova: agordo `cap_trusted_proxies` — tekstareo de CIDR-oj aŭ nudaj IP-oj (unu po linio, `#` komentoj permesitaj) listiganta viajn proprajn frontliniajn prokurilojn / ŝarĝ-ekvilibrigilojn. Sen ĉi tio, `X-Forwarded-For` estas ignorata eĉ kiam la rapid-limigilo estas ebligita.
* Nova: Aŭtomata detekto ĉe unua ebligo de verŝajna Cloudflare / prokurila stato kun unu-klaka administra avizo "Apliki detektitajn agordojn". La plugin neniam anstataŭigas viajn konservitajn valorojn; se posta trafiko sugestas ke via agordo ne plu kongruas kun realo (ekz. Cloudflare ŝanĝis CIDR-intervalojn kaj via prokurila CIDR nun malaktualas), nemalakceptebla malkongrua avizo montras la rekomenditan ĝisdatigon.
* Korektita: Nevidebla reĝimo ne plu silente malaltigas `cap_security_level` al FAST — la agordita nivelo de la administranto estas honorata. Nova filtro `wu_cap_server_security_level` disponeblas por retejoj kiuj volas propran logikon.
* Korektita: Statistika nombrilo `rate_limits_triggered` nun pliiĝas ĉe ĉiu blokado, ne nur ĉe la rara post-sukcesa rezerva vojo.
* Korektita: `Captcha_Core::get_client_ip()` nun estas la sola aŭtoritata fonto por vizitanta IP-atribuo tra la rapid-limigilo, kapĉaj provizantoj (reCAPTCHA + hCaptcha `siteverify`), kaj statistikoj — fermante falsadan vektoron kie rektaj petoj al origin-servilo portantaj falsitan `CF-Connecting-IP` header estus siteligitaj laŭ la falsita IP anstataŭ la reala samulo.
* Korektita: La rapid-limiga pordego de WooCommerce klasika checkout nun ekas ĉe `template_redirect` (prioritato 1) anstataŭ `woocommerce_before_checkout_form`. La formular-nivela hoko neniam ekas kiam la ĉareto estas malplena, do inunda trafiko kiu neniam aldonas produkton tute preteriris la limigilon.
* Korektita: La rapid-limiga pordego de WooCommerce pay-for-order nun ekas ĉe `template_redirect` anstataŭ `woocommerce_before_pay_action`. Ĉi-lasta ekas nur post kiam `wp_verify_nonce('woocommerce-pay')` sukcesas, kio signifas ke neaŭtentikigitaj atakantoj (la efektiva minacmodelo) neniam ekigis la limigilon.
* Korektita: La rapid-limiga pordego de WooCommerce Store API (blokoj) checkout nun ekas ĉe `rest_pre_dispatch` anstataŭ `woocommerce_store_api_checkout_update_order_from_request`. Ĉi-lasta ekas nur post kiam Store API validigas la ĉareton kaj fakturajn kampojn, do neaŭtentikigitaj robotoj ricevis 400 de la validigilo kaj neniam aktivigis la limigilon.
* Korektita: La rapid-limiga pordego de Ultimate Multisite inline-login nun ekas ĉe `wu_ajax_nopriv_wu_inline_login` prioritato 1 (kaj la ensalutinta spegulo) anstataŭ `wu_before_inline_login`. Ĉi-lasta ekas nur post kiam `check_ajax_referer('wu_checkout')` sukcesas, do neaŭtentikigitaj robotoj sen valida wu_checkout nonce ricevis 403 kaj neniam aktivigis la limigilon.
* Korektita: `Rate_Limiter::enforce()` nun aplikas unufoje-po-peta gardon ŝlositan per `surface|ip`, tiel ke kontraŭfluaj hokoj kiuj ekas dufoje po bildigo (precipe `wu_setup_checkout` en Ultimate Multisite) ne plu duonigas la efektivan rapid-limigan sojlon.
* Korektita: Rapid-limigaj surfacaj pordegoj ne plu konsultas `Captcha_Core::is_whitelisted()` (filtro `wu_captcha_whitelisted`). Tiu filtro signalas "kapĉo jam traktita de alia surfaco" kaj estas ortogonala al inunda protekto — la WooCommerce integriĝo hokis ĝin por preterlasi la WordPress ensalutan kapĉon kiam Woo nonce ĉeestis, kio elfluis en rapid-kalkuladon kaj lasis Woo POST-ojn eviti la limigilon. La rapid-limiga-specifa filtro `wu_cap_rate_limit_whitelist_ip` estas la sola pretervojo kiu nun aplikiĝas.

Versio: 1.3.2 - Eldonita je 2026-01-27
* Korektita: Cap fenestraĵo ne bildiĝis en checkout-formularoj uzantaj Elementor aŭ aliajn paĝokonstruilojn
* Korektita: propra elemento cap-widget estis forigita per wp_kses() purigado
* Plibonigita: Uzu callable enhavon por checkout-kapĉa kampo por preterpasi HTML-filtradon
* Plibonigita: Simpligita JavaScript kun rezervo por randokazoj

Versio: 1.3.1 - Eldonita je 2026-01-26
* Korektita: Cap Captcha nevidebla reĝimo ne aŭtomate solvis sin en dinamikaj Ultimate Multisite checkout-formularoj
* Plibonigita: Cap checkout-skripto nun uzas MutationObserver por detekti dinamike ŝargitajn fenestraĵojn
* Plibonigita: Aldonita checkout-butona interkapto por atendi token antaŭ sendo

Versio: 1.3.0 - Eldonita la 2026-01-27
* Nova: WooCommerce Blocks pagofina integriĝo kun Store API fetch-interkapto
* Nova: Subteno de nevidebla kapĉo por WooCommerce pagofino (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Nova: Memstara agorda paĝo por uzo sen Ultimate Multisite
* Nova: Jetpack Autoloader por prevento de dependecaj konfliktoj
* Korektita: hCaptcha ne bildiĝis ĉe dinamika Ultimate Multisite pagofino (AJAX-ŝargita enhavo)
* Korektita: Kapĉo ne refreŝiĝis/reagordiĝis kiam okazis formularaj validigaj eraroj
* Korektita: hCaptcha ne montriĝis sur WooCommerce pagofina paĝo
* Korektita: eraro de reCAPTCHA-klaso ne trovita (aldonita google/recaptcha PHP-biblioteko)
* Plibonigita: Erardetekto per WordPress hooks, MutationObserver, kaj AJAX-interkapto
* Plibonigita: Agordaj priskriboj nun inkluzivas Dashboard-URL-ojn por API-ŝlosiloj

Versio: 1.2.2 - Eldonita la 2026-01-24
* Korektita: Kapĉo ne aperis ĉe Ultimate Multisite Ensaluta Formulara Elemento (miskongruo de formulara filtra nomo)
* Korektita: HTML de Cap widget estis forigita per wp_kses()-sanitigo
* Korektita: JavaScript-elektiloj ne trovis formularojn kun oblikvoj en elementaj ID-oj
* Aldonita: Filtra hook `wu_kses_allowed_html` por classaddons etendi permesitajn HTML-etikedojn
* Forigita: Neuzata kodo JavaScript-dosieroj anstataŭigitaj per provizanto-specifaj skriptoj

Versio: 1.2.1 - Eldonita la 2026-01-23

* Korektita: Valodigo de Cap Captcha-token malsukcesis en multisite-medioj (nun uzas retvastajn transients)
* Korektita: Kapĉo nun bildiĝas konsekvence por ĉiuj uzantoj sendepende de ensaluta stato
* Korektita: Miskongruo inter kapĉa bildigo kaj validigo kiu kaŭzis pagofinajn malsukcesojn

Versio: 1.2.0 - Eldonita la 2026-01-21

* Nova: Cap Captcha - memgastigita proof-of-work kapĉo, ŝaltita defaŭlte ĉe aktivigo
* Nova: Nul-agorda protekto - aktivigu la addon kaj vi estas tuj protektita
* Nova: Polimorfa kapĉa provizanta arkitekturo por facila etendebleco
* Nova: WooCommerce Store API pagofina protekto kontraŭ kart-testaj atakoj
* Nova: Statistikspura Dashboard montranta defiojn, kontrolojn, kaj blokitajn atakojn
* Nova: Sekurecnivelaj antaŭagordoj (Rapida, Meza, Maksimuma) por Cap Captcha-malfacileco
* Nova: Abstraktaj bazaj klasoj por reCAPTCHA kaj hCaptcha-provizantoj
* Plibonigita: Refaktorita kodobazo en modulajn provizantajn klasojn
* Plibonigita: Pli bona apartigo de respondecoj kun dediĉita administranta klaso
* Fixed: Security improvements for $_SERVER variable sanitization
* Korektita: PHPUnit-testagordo por WordPress-nomkonvencioj

Versio: 1.0.1 - Eldonita la 2025-09-28

* Renomi prefikson al ultimate-multisite; ĝisdatigi tekstodomenon; versia plialtigo.
