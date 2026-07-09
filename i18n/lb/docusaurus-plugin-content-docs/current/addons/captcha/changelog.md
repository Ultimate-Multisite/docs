---
title: Captcha-Ännerungsprotokoll
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha-Ännerungsprotokoll {#captcha-changelog}

Version: 1.5.0 - Verëffentlecht den 2026-05-22
* Nei: Hard-stop Rate-Limiter — zielt all GET an POST op captcha-geschützte Flächen (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) a äntwert mat HTTP 429, engem `Retry-After`-Header, an enger zoufälleg tarpit-Schlofpaus (1–5s, haart op 15s limitéiert).
* Nei: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max`-Astellunge fir d'tarpit-Fënster unzepassen.
* Nei: `wu_cap_rate_limit_whitelist_ip`-Filter fir vertrauenswierdeg IP-Beräicher auszeschléissen.
* Nei: `wu_cap_rate_limit_will_block`-Aktioun, déi direkt ausgeléist gëtt, ier d'Hard-stop-Äntwert geschéckt gëtt.
* Nei: Spoof-resistent Client-IP-Erkennung. `Captcha_Core::get_client_ip()` (d'Quell vun der Wourecht fir Rate-Limit-Bucket-Schlësselen, captcha siteverify `remoteip`, a Statistik-IP-Hashes) erzwingt elo e strenge Vertrauensmodell: REMOTE_ADDR ass d'Basis, `CF-Connecting-IP` gëtt nëmmen akzeptéiert, wann den direkte Peer an engem aktuelle Cloudflare-IP-Beräich ass, an `X-Forwarded-For` gëtt nëmmen akzeptéiert, wann den direkte Peer an der vum Admin konfiguréiert vertrauenswierdeger Proxy-Lëscht ass, mat engem Spadséiergang vu riets no lénks, deen vertrauenswierdeg/CF-Hops iwwerspréngt, ier en op der Visiteur-IP landen.
* Nei: `cap_trust_cloudflare_headers`-Astellung (Standard OFF) — optéiert an d'Vertraue vu `CF-Connecting-IP`, wann Dir hannert Cloudflare sidd. De Plugin liwwert eng gebündelt Cloudflare-CIDR-Snapshot mat an aktualiséiert se wöchentlech iwwer wp-cron mat gebündeltem Fallback, wann d'Aktualiséierung feeltschléit.
* Nei: `cap_trusted_proxies`-Astellung — Textberäich vu CIDRen oder blanken IPen (eng pro Zeil, `#`-Kommentarer erlaabt), deen Är eege Front-line-Proxien / Load-Balanceren oplëscht. Ouni dëst gëtt `X-Forwarded-For` ignoréiert, och wann de Rate-Limiter aktivéiert ass.
* Nei: Auto-Erkennung beim éischten Aktivéiere vu méiglecher Cloudflare- / Proxy-Konfiguratioun mat engem Een-Klick-"Erkannt Astellungen uwenden"-Admin-Hiwäis. De Plugin iwwerschreift ni Är gespäichert Wäerter; wann uschléissende Verkéier drop hiweist, datt Är Konfiguratioun net méi mat der Realitéit iwwerstëmmt (z. B. Cloudflare huet CIDR-Beräicher geännert an Äre Proxy-CIDR ass elo vereelzt), erschéngt en net-wechklickbare Mismatch-Hiwäis mat der empfohlener Aktualiséierung.
* Gefléckt: Invisible-Modus degradéiert `cap_security_level` net méi roueg op FAST — den Niveau, deen den Admin konfiguréiert huet, gëtt respektéiert. En neien `wu_cap_server_security_level`-Filter ass verfügbar fir Siten, déi eegestänneg Logik wëllen.
* Gefléckt: Statistik-`rate_limits_triggered`-Compteur gëtt elo bei all Block erhéicht, net nëmmen um rare Post-success-Backstop-Wee.
* Gefléckt: `Captcha_Core::get_client_ip()` ass elo déi eenzeg Quell vun der Wourecht fir d'Attributioun vun der Visiteur-IP iwwer de Rate-Limiter, captcha-Ubidder (reCAPTCHA + hCaptcha `siteverify`), a Statistiken — domat gëtt e Spoofing-Vecteur zougemaach, bei deem direkt Origin-Server-Ufroe mat engem gefälschte `CF-Connecting-IP`-Header no der gefälschter IP amplaz no dem richtege Peer an e Bucket gesat gi wieren.
* Gefléckt: WooCommerce classic checkout Rate-Limit-Paart gëtt elo op `template_redirect` (Prioritéit 1) ausgeléist amplaz op `woocommerce_before_checkout_form`. De Formulaire-Niveau-Hook gëtt ni ausgeléist, wann de Wuerekuerf eidel ass, soudatt Flood-Verkéier, deen ni e Produkt bäifüügt, de Limiter komplett ëmgaangen ass.
* Gefléckt: WooCommerce pay-for-order Rate-Limit-Paart gëtt elo op `template_redirect` ausgeléist amplaz op `woocommerce_before_pay_action`. Dee leschten gëtt eréischt ausgeléist, nodeems `wp_verify_nonce('woocommerce-pay')` erfollegräich war, wat bedeit, datt unauth-Ugräifer (den eigentleche Bedroungsmodell) de Limiter ni ausgeléist hunn.
* Gefléckt: WooCommerce Store API (Blocks) checkout Rate-Limit-Paart gëtt elo op `rest_pre_dispatch` ausgeléist amplaz op `woocommerce_store_api_checkout_update_order_from_request`. Dee leschten gëtt eréischt ausgeléist, nodeems Store API de Wuerekuerf an d'Rechnungsfelder validéiert huet, soudatt unauth-Botten e 400 vum Validator kruten an de Limiter ni ausgeléist hunn.
* Gefléckt: Ultimate Multisite inline-login Rate-Limit-Paart gëtt elo op `wu_ajax_nopriv_wu_inline_login` Prioritéit 1 (an dem ageloggte Spigel) ausgeléist amplaz op `wu_before_inline_login`. Dee leschten gëtt eréischt ausgeléist, nodeems `check_ajax_referer('wu_checkout')` erfollegräich war, soudatt unauth-Botten ouni gültege wu_checkout-Nonce e 403 kruten an de Limiter ni ausgeléist hunn.
* Gefléckt: `Rate_Limiter::enforce()` applizéiert elo eng eemol-pro-Ufro-Ofsécherung mat Schlëssel no `surface|ip`, soudatt upstream Hooks, déi zweemol pro Render ausgeléist ginn (besonnesch `wu_setup_checkout` an Ultimate Multisite), de effektive Rate-Limit-Schwellwäert net méi halbéieren.
* Gefléckt: Rate-Limit-Fläche-Paarten consultéieren net méi `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted`-Filter). Dee Filter signaliséiert "captcha scho vun enger anerer Fläch behandelt" an ass orthogonal zum Flood-Schutz — d'WooCommerce-Integratioun huet en ugehaakt, fir de WordPress Login-Captcha z'iwwersprangen, wann e Woo-Nonce present war, wat an d'Rate-Ziele gerannt ass an Woo POSTen erlaabt huet, de Limiter ze vermeiden. De Rate-Limit-spezifesche `wu_cap_rate_limit_whitelist_ip`-Filter ass deen eenzege Bypass, deen elo gëllt.

Version: 1.3.2 - Verëffentlecht den 2026-01-27
* Gefléckt: Cap-Widget gouf net op checkout-Formulairen ugewisen, déi Elementor oder aner Säite-Builder benotzen
* Gefléckt: cap-widget-Custom-Element gouf duerch wp_kses()-Sanitiséierung ewechgestrach
* Verbessert: Callable Inhalt fir checkout-captcha-Feld benotzen, fir HTML-Filterung z'ëmgoen
* Verbessert: Vereinfacht JavaScript mat Fallback fir Randfäll

Version: 1.3.1 - Verëffentlecht den 2026-01-26
* Gefléckt: Cap Captcha Invisible-Modus huet sech net automatesch op dynameschen Ultimate Multisite checkout-Formulairen geléist
* Verbessert: Cap checkout-Skript benotzt elo MutationObserver, fir dynamesch geluede Widgets z'erkennen
* Verbessert: checkout-Knäppchen-Interceptioun bäigefüügt, fir virum Ofschécken op den Token ze waarden

Versioun: 1.3.0 - Verëffentlecht den 2026-01-27
* Nei: WooCommerce Blocks Checkout-Integratioun mat Store API Fetch-Interceptioun
* Nei: Ënnerstëtzung fir onsichtbare Captcha fir WooCommerce Checkout (hCaptcha onsichtbar, reCAPTCHA v2 onsichtbar, v3)
* Nei: Eegestänneg Astellungssäit fir d'Benotzung ouni Ultimate Multisite
* Nei: Jetpack Autoloader fir d'Vermeidung vu Konflikter mat Ofhängegkeeten
* Behuewen: hCaptcha gouf net beim dynameschen Ultimate Multisite Checkout ugewisen (AJAX-geluedenen Inhalt)
* Behuewen: Captcha gouf net aktualiséiert/zréckgesat, wann Formulaire-Validatiounsfeeler opgetruede sinn
* Behuewen: hCaptcha gouf net op der WooCommerce Checkout-Säit ugewisen
* Behuewen: reCAPTCHA Klass-net-fonnt-Feeler (google/recaptcha PHP-Bibliothéik dobäigesat)
* Verbessert: Feelererkennung iwwer WordPress Hooks, MutationObserver an AJAX-Interceptioun
* Verbessert: Astellungsbeschreiwungen enthalen elo Dashboard-URLen fir API-Schlësselen

Versioun: 1.2.2 - Verëffentlecht den 2026-01-24
* Behuewen: Captcha gouf net um Ultimate Multisite Login Form Element ugewisen (Formulaire-Filter-Numm huet net gepasst)
* Behuewen: Cap-Widget-HTML gouf duerch wp_kses()-Sanéierung ewechgeholl
* Behuewen: JavaScript-Selektore hunn keng Formulairë mat Schréigstrécher an Element-IDe fonnt
* Dobäigesat: Filter-Hook `wu_kses_allowed_html` fir classaddons, fir erlaabt HTML-Tags ze erweideren
* Ewechgeholl: Doudege Code JavaScript-Fichieren duerch provider-spezifesch Scripten ersat

Versioun: 1.2.1 - Verëffentlecht den 2026-01-23

* Behuewen: Cap Captcha Token-Validatioun huet a Multisite-Ëmfeld net funktionéiert (benotzt elo netzwierk-wäit Transienten)
* Behuewen: Captcha gëtt elo konsequent fir all Benotzer ugewisen, onofhängeg vum Login-Status
* Behuewen: Ënnerscheed tëscht Captcha-Rendering a Validatioun, deen Checkout-Feeler verursaacht huet

Versioun: 1.2.0 - Verëffentlecht den 2026-01-21

* Nei: Cap Captcha - selwer gehoste Proof-of-Work-Captcha, standardméisseg bei der Aktivéierung aktivéiert
* Nei: Null-Konfiguratioun-Schutz - aktivéiert den Addon an Dir sidd direkt geschützt
* Nei: Polymorph Captcha-Provider-Architektur fir einfach Erweiderbarkeet
* Nei: WooCommerce Store API Checkout-Schutz géint Card-Testing-Attacken
* Nei: Statistik-Tracking-Dashboard, dat Erausfuerderungen, Verifizéierungen a blockéiert Attacke weist
* Nei: Sécherheetsniveau-Virastellungen (Séier, Mëttel, Max) fir Cap Captcha-Schwieregkeet
* Nei: Abstrakt Basisklasse fir reCAPTCHA- an hCaptcha-Provider
* Verbessert: Codebasis a modular Provider-Klassen ëmstrukturéiert
* Verbessert: Besser Trennung vun de Responsabilitéite mat dedizéierter Manager-Klass
* Fixed: Security improvements for $_SERVER variable sanitization
* Behuewen: PHPUnit-Testkonfiguratioun fir WordPress-Nummkonventiounen

Versioun: 1.0.1 - Verëffentlecht den 2025-09-28

* Prefix op ultimate-multisite ëmbenennen; Text-Domain aktualiséieren; Versioun erhéijen.
