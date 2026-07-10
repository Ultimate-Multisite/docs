---
title: Captcha-veranderingslogboek
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha-veranderingslog {#captcha-changelog}

Version: 1.5.0 - Vrygestel op 2026-05-22
* Nuut: Hard-stop rate limiter — tel elke GET en POST op captcha-beskermde oppervlaktes (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) en antwoord met HTTP 429, ’n `Retry-After` header, en ’n ewekansige tarpit-slaap (1–5s, hard beperk tot 15s).
* Nuut: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` instellings om die tarpit-venster aan te pas.
* Nuut: `wu_cap_rate_limit_whitelist_ip` filter om vertroude IP-reekse vry te stel.
* Nuut: `wu_cap_rate_limit_will_block` action wat onmiddellik afgaan voordat die hard-stop-antwoord gestuur word.
* Nuut: Spoof-bestande kliënt-IP-bespeuring. `Captcha_Core::get_client_ip()` (die bron van waarheid vir rate-limit-emmersleutels, captcha siteverify `remoteip`, en statistiek-IP-hashes) dwing nou ’n streng vertrouensmodel af: REMOTE_ADDR is die vloer, `CF-Connecting-IP` word slegs geëer wanneer die onmiddellike peer binne ’n huidige Cloudflare IP-reeks is, en `X-Forwarded-For` word slegs geëer wanneer die onmiddellike peer in die admin-gekonfigureerde vertroude-proxy-lys is, met ’n regs-na-links deurloop wat vertroude/CF-hops oorslaan voordat dit op die besoeker-IP uitkom.
* Nuut: `cap_trust_cloudflare_headers` instelling (verstek AF) — kies in vir `CF-Connecting-IP`-vertroue wanneer agter Cloudflare. Die plugin sluit ’n gebundelde Cloudflare CIDR-momentopname in en verfris dit weekliks via wp-cron met gebundelde terugval as die verfrissing misluk.
* Nuut: `cap_trusted_proxies` instelling — textarea van CIDR’s of kaal IP’s (een per reël, `#` kommentaar toegelaat) wat jou eie front-line proxies / load-balancers lys. Sonder dit word `X-Forwarded-For` geïgnoreer selfs wanneer die rate limiter geaktiveer is.

* Nuut: Outomatiese bespeuring by eerste aktivering van waarskynlike Cloudflare- / proxy-opstelling met ’n eenklik-“Pas bespeurde instellings toe”-admin-kennisgewing. Die inprop oorskryf nooit jou gestoorde waardes nie; as daaropvolgende verkeer aandui dat jou konfigurasie nie meer met die werklikheid ooreenstem nie (bv. Cloudflare het CIDR-reekse verander en jou proxy-CIDR is nou verouderd), verskyn ’n nie-verwerpbare wanpassingskennisgewing met die aanbevole opdatering.
* Reggestel: Onsigbare modus gradeer nie meer stilweg `cap_security_level` af na FAST nie — die admin se gekonfigureerde vlak word gerespekteer. ’n Nuwe `wu_cap_server_security_level`-filter is beskikbaar vir werwe wat pasgemaakte logika wil hê.
* Reggestel: Statistiek-`rate_limits_triggered`-teller verhoog nou met elke blokkering, nie net op die seldsame nà-sukses-veiligheidsnetpad nie.
* Reggestel: `Captcha_Core::get_client_ip()` is nou die enkele bron van waarheid vir besoeker-IP-toeskrywing oor die tempobeperker, captcha-verskaffers (reCAPTCHA + hCaptcha `siteverify`) en statistiek heen — wat ’n vervalsingsvektor sluit waar direkte oorsprongbediener-versoeke met ’n vervalste `CF-Connecting-IP`-header volgens die vervalste IP in plaas van die werklike eweknie sou gegroepeer gewees het.
* Reggestel: WooCommerce klassieke betaalpunt-tempo-beperkingshek aktiveer nou op `template_redirect` (prioriteit 1) in plaas van `woocommerce_before_checkout_form`. Die vormvlak-hook aktiveer nooit wanneer die mandjie leeg is nie, dus het vloedverkeer wat nooit ’n produk byvoeg nie die beperker heeltemal omseil.

* Reggestel: WooCommerce betaal-vir-bestelling-tempolimiethek vuur nou op `template_redirect` in plaas van `woocommerce_before_pay_action`. Laasgenoemde vuur eers nadat `wp_verify_nonce('woocommerce-pay')` slaag, wat beteken ongeverifieerde aanvallers (die werklike bedreigingsmodel) het nooit die limiter geaktiveer nie.
* Reggestel: WooCommerce Store API (blocks) betaalpunt-tempolimiethek vuur nou op `rest_pre_dispatch` in plaas van `woocommerce_store_api_checkout_update_order_from_request`. Laasgenoemde vuur eers nadat Store API die mandjie- en faktuurvelde valideer, dus het ongeverifieerde bots ’n 400 van die valideerder gekry en nooit die limiter geaktiveer nie.
* Reggestel: Ultimate Multisite inline-login-tempolimiethek vuur nou op `wu_ajax_nopriv_wu_inline_login` prioriteit 1 (en die aangemelde spieël) in plaas van `wu_before_inline_login`. Laasgenoemde vuur eers nadat `check_ajax_referer('wu_checkout')` slaag, dus het ongeverifieerde bots sonder ’n geldige wu_checkout nonce ’n 403 gekry en nooit die limiter geaktiveer nie.
* Reggestel: `Rate_Limiter::enforce()` pas nou ’n een-keer-per-versoek wag toe wat deur `surface|ip` gesleutel is, sodat upstream hooks wat twee keer per weergawe vuur (veral `wu_setup_checkout` in Ultimate Multisite) nie meer die effektiewe tempolimietdrempel halveer nie.

* Reggestel: Rate-limit-oppervlakhekke raadpleeg nie meer `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) nie. Daardie filter dui aan “captcha reeds deur ’n ander oppervlak hanteer” en is ortogonaal tot vloedbeskerming — die WooCommerce-integrasie het daaraan gekoppel om die WordPress-aanmeld-captcha oor te slaan wanneer ’n Woo nonce teenwoordig was, wat in rate-telling ingesypel het en Woo POSTs die limiter laat vermy het. Die rate-limit-spesifieke `wu_cap_rate_limit_whitelist_ip` filter is die enigste omleiding wat nou geld.

Weergawe: 1.3.2 - Vrygestel op 2026-01-27
* Reggestel: Cap widget word nie op checkout-vorms gelewer wat Elementor of ander bladsybouers gebruik nie
* Reggestel: cap-widget-pasgemaakte element word deur wp_kses()-sanitisering gestroop
* Verbeter: Gebruik oproepbare inhoud vir checkout-captcha-veld om HTML-filtrering te omseil
* Verbeter: Vereenvoudigde JavaScript met terugval vir randgevalle

Weergawe: 1.3.1 - Vrygestel op 2026-01-26
* Reggestel: Cap Captcha onsigbare modus los nie outomaties op dinamiese Ultimate Multisite checkout-vorms op nie
* Verbeter: Cap checkout-skrip gebruik nou MutationObserver om dinamies gelaaide widgets op te spoor
* Verbeter: Checkout-knoppie-onderskepping bygevoeg om vir token voor indiening te wag

Weergawe: 1.3.0 - Vrygestel op 2026-01-27
* Nuut: WooCommerce Blocks-afrekenintegrasie met Store API-ophaalonderskepping
* Nuut: Onsigbare captcha-ondersteuning vir WooCommerce-afrekening (hCaptcha onsigbaar, reCAPTCHA v2 onsigbaar, v3)
* Nuut: Selfstandige instellingsbladsy vir gebruik sonder Ultimate Multisite
* Nuut: Jetpack Autoloader vir voorkoming van afhanklikheidskonflikte
* Reggestel: hCaptcha wys nie op dinamiese Ultimate Multisite-afrekening nie (AJAX-gelaaide inhoud)
* Reggestel: Captcha verfris/stel nie terug wanneer vormvalideringsfoute voorkom nie
* Reggestel: hCaptcha wys nie op WooCommerce-afrekenbladsy nie
* Reggestel: reCAPTCHA-klas nie gevind nie-fout (google/recaptcha PHP-biblioteek bygevoeg)
* Verbeter: Foutopsporing via WordPress-hooks, MutationObserver, en AJAX-onderskepping
* Verbeter: Instellingsbeskrywings sluit nou Dashboard-URL's vir API-sleutels in

Weergawe: 1.2.2 - Vrygestel op 2026-01-24
* Reggestel: Captcha wys nie op Ultimate Multisite Login Form Element nie (vormfilternaam stem nie ooreen nie)
* Reggestel: Cap widget-HTML word deur wp_kses()-sanitering verwyder
* Reggestel: JavaScript-selektors vind nie vorms met skuinsstrepe in element-ID's nie
* Bygevoeg: Filter-hook `wu_kses_allowed_html` vir classaddons om toegelate HTML-tags uit te brei
* Verwyder: Dooie kode-JavaScript-lêers vervang deur verskafferspesifieke scripts

Weergawe: 1.2.1 - Vrygestel op 2026-01-23

* Reggestel: Cap Captcha-tokenvalidering wat in multisite-omgewings misluk het (gebruik nou netwerk-wye transients)
* Reggestel: Captcha word nou konsekwent vir alle gebruikers vertoon ongeag aanmeldstatus
* Reggestel: Wanpassing tussen captcha-weergawing en validering wat checkout-mislukkings veroorsaak het

Weergawe: 1.2.0 - Vrygestel op 2026-01-21

* Nuut: Cap Captcha - self-hosted proof-of-work captcha, by verstek geaktiveer by aktivering
* Nuut: Nul-konfigurasie-beskerming - aktiveer die addon en jy is onmiddellik beskerm
* Nuut: Polimorfiese captcha-verskafferargitektuur vir maklike uitbreidbaarheid
* Nuut: WooCommerce Store API checkout-beskerming teen kaarttoetsaanvalle
* Nuut: Statistiek-nasporingsdashboard wat uitdagings, verifikasies en geblokkeerde aanvalle wys
* Nuut: Sekuriteitsvlak-voorinstellings (Vinnig, Medium, Maks) vir Cap Captcha-moeilikheidsgraad
* Nuut: Abstrakte basisklasse vir reCAPTCHA- en hCaptcha-verskaffers
* Verbeter: Kodebasis in modulêre verskafferklasse herstruktureer
* Verbeter: Beter skeiding van verantwoordelikhede met toegewyde bestuurderklas
* Fixed: Security improvements for $_SERVER variable sanitization
* Reggestel: PHPUnit-toetskonfigurasie vir WordPress-naamkonvensies

Weergawe: 1.0.1 - Vrygestel op 2025-09-28

* Hernoem prefiks na ultimate-multisite; werk teksdomein by; weergaweverhoging.
