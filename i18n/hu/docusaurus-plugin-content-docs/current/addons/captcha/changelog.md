---
title: Captcha Changelog
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog

Verzió: 1.5.0 - Kiadása: 2026-05-22
* Új: Kemény leállású ütemkorlátozó — minden GET és POST kérést számol, amely a captcha-védett felületeken (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) érkezik. Ezt követően HTTP 429 státuszrával, egy `Retry-After` fejjel és egy véletlenszerű tarpit pihenőidővel (1–5 másodperc, maximális korlátozó 15 másodpercre) válaszol.
* Új: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` beállítások a tarpit ablak finomhangolására.
* Új: `wu_cap_rate_limit_whitelist_ip` szűrő a megbízható IP-tartományok kivételére.
* Új: `wu_cap_rate_limit_will_block` akció, amely közvetlenül a kemény leállású válasz küldése előtt fut.
* Új: Hamisításhoz ellenálló ülveleti IP-detektálás. A `Captcha_Core::get_client_ip()` (ami a rate-limit „dobozainak” kulcainak, a captcha siteverify `remoteip`-jének és a statisztikai IP-hash-jainak forrása) most szigorú bizalmi modellt alkalmaz: az `REMOTE_ADDR` az alapértelmezett érték, a `CF-Connecting-IP` csak akkor érvényes, ha az közvetlen peer egy aktuális Cloudflare IP-tartományán belül van, és az `X-Forwarded-For` csak akkor érvényes, ha a közvetlen peer az admin által konfigurált megbízható-proxy listáján szerepel. A rendszer jobbról balra haladva ellenőrzi a listát, és kihagyja a megbízható/CF hopokat, mielőtt a látogató IP-jét fogja.
* Új: `cap_trust_cloudflare_headers` beállítás (alapértelmezett OFF) — opcionális bekapcsolás a `CF-Connecting-IP` bizalmára Cloudflare mögött. A plugin tartalmaz egy Cloudflare CIDR snapshotot, amelyet hetente frissít wp-cron segítségével, és fallback mechanizmust biztosít, ha a frissítés sikertelen.
* Új: `cap_trusted_proxies` beállítás — szövegmező, amely CIDR-eket vagy egyszerű IP-eket tartalmaz (egy soronként, `#` kommentekkel), és listázza saját elsődleges proxyjait / load-balancer-eit. Ha ezt nem állítja be, az `X-Forwarded-For` figyelmen kívül marad, még akkor is, ha az ütemkorlátozó aktív.
* Új: Elsőbekapcsolt automatikus detektálás a valószínű Cloudflare / proxy állapotáról, egy kattintós "Alkalmazni a detektált beállításokat" admin értesítéssel. A plugin soha nem haladja meg a mentett értékeket; ha későbbi forgalom arra utal, hogy a konfiguráció már nem egyezik a valósággal (pl. a Cloudflare megváltoztatta a CIDR tartományait, és a proxy CIDR-je elavult), egy nem elhagyható eltérés értesítés jelenik meg, amely az ajánlott frissítést mutatja.
* Javított: Az „inviszibilis mód” már nem csökkenti csendben a `cap_security_level`-t a FAST értékre — az admin által konfigurált szintet tartja fenn. Új `wu_cap_server_security_level` szűrő elérhető azok számára, akik egyedi logikát szeretnének.
* Javított: A statisztikai `rate_limits_triggered` számlálója most minden blokkoláskor növekedik, nem csak az ritka sikeres végleges biztonsági úton.
* Javított: A `Captcha_Core::get_client_ip()` most az egyetlen igazságforrás a látogató IP-attribúciójához az ütemkorlátozó, a captcha szolgáltatók (reCAPTCHA + hCaptcha `siteverify`) és a statisztikák minden területén — ez zárja le egy hamisítási vektorot, ahol a közvetlen eredet-szerver kérései, amelyek hamis `CF-Connecting-IP` fejjel érkeztek volna, a hamis IP-vel helyett a valódi peer-rel történő „dobozzáshoz” vezethettek volna.
* Javított: A WooCommerce klasszikus checkout ütemkorlátozó kapuja most `template_redirect` akcióval (prioritás 1) fut, nem pedig `woocommerce_before_checkout_form`-on. Mivel a form szintű hook soha nem fut, ha az kosár üres, a terméket nem hozzáadó túlfogyasztó forgalom teljesen elkerülte a limitert.
* Javított: A WooCommerce pay-for-order ütemkorlátozó kapuja most `template_redirect` akcióval fut, nem pedig `woocommerce_before_pay_action`-on. Utóbbi csak akkor fut, miután sikeresen végrehajtották a `wp_verify_nonce('woocommerce-pay')` ellenőrzést, ami azt jelenti, hogy az engedély nélküli támadók (az igazi veszélyforrást) soha nem aktiválták a limitert.
* Javított: A WooCommerce Store API (blokkok) checkout ütemkorlátozó kapuja most `rest_pre_dispatch` akcióval fut, nem pedig `woocommerce_store_api_checkout_update_order_from_request`-on. Utóbbi csak akkor fut, miután a Store API validálta a kosár és a számlázási mezőket, így az engedély nélküli botok 400 hibát kaptak a validátorral, és soha nem aktiválták a limitert.
* Javított: Az Ultimate Multisite inline-login ütemkorlátozó kapuja most `wu_ajax_nopriv_wu_inline_login` akcióval fut prioritás 1-en (és a bejelentkezett tükörön), nem pedig `wu_before_inline_login`-on. Utóbbi csak akkor fut, miután sikeresen végrehajtották a `check_ajax_referer('wu_checkout')` ellenőrzést, így az engedély nélküli botok, amelyek nem rendelkeztek érvényes wu_checkout nonce-val, 403 hibát kaptak, és soha nem aktiválták a limitert.
* Javított: A `Rate_Limiter::enforce()` most alkalmaz egy egyszeri kérések védelmét, amely `surface|ip` kulcs alapján történik, így az olyan felső szintű hookok, amelyek kétszer futnak a renderelés alatt (kiemelten az Ultimate Multisite-ban a `wu_setup_checkout`), már nem csökkentik a hatékony ütemkorlátozó küszöbét.
* Javított: A rate-limit felület kapuja nem kérdez más szűrőket (`Captcha_Core::is_whitelisted()` vagy `wu_captcha_whitelisted` szűrő). Ez a szűrő azt jelzi, hogy „a captcha már egy másik felület által kezelve”, és független a túlfogyasztás elleni védekezéstől — a WooCommerce integráció ezt a szűrőt használta, hogy kihagyja a WordPress bejelentkezési captcha-ját, ha egy Woo nonce volt jelen, ami a rate-számoláshoz „szivárogott”, és lehetővé tette a Woo POST-ok számára, hogy kerüljenek a limitertől. Most csak a rate-limit-specifikus `wu_cap_rate_limit_whitelist_ip` szűrő alkalmazható kivételezésként.

Verzió: 1.3.2 - Kiadása: 2026-01-27
* Javított: A Cap widget nem renderelődik a checkout formokon Elementor vagy más oldalszerkesztővel.
* Javított: A cap-widget custom elemének eltávolításra került objektum a wp_kses() tisztítás során.
* Javított: A checkout captcha mezőhöz hívható tartalom használata az HTML szűrés elkerülésére.
* Javított: JavaScript egyszerűsítése és fallback mechanizmusok hozzáadása speciális esetekre.

Verzió: 1.3.1 - Kiadása: 2026-01-26
* Javított: A Cap Captcha „inviszibilis módja” nem automatikusan oldja meg a dinamikus Ultimate Multisite checkout formokon.
* Javított: A Cap checkout script most MutationObserver-t használ a dinamikusan betöltődő widgetek detektálására.
* Javított: A checkout gomb elvondása (interception) a token várására a küldés előtt.

Verzió: 1.3.0 - Kiadása: 2026-01-27
* Új: WooCommerce Blocks checkout integrációja a Store API fetch elvondásával.
* Új: Inviszibilis captcha támogatás a WooCommerce checkout-hoz (hCaptcha inviszibilis, reCAPTCHA v2 inviszibilis, v3).
* Új: Független beállítási oldal az Ultimate Multisite nélkül használathatóságára.
* Új: Jetpack Autoloader a függőségkonfliktus elkerülésére.
* Javított: hCaptcha nem renderelődik a dinamikus Ultimate Multisite checkout-on (AJAX-elölt tartalmat).
* Javított: A Captcha nem frissül/resetelődik, ha a form validációs hibái előfordulnak.
* Javított: hCaptcha nem látható a WooCommerce checkout oldalán.
* Javított: reCAPTCHA osztály nem található hiba ( hozzáadva google/recaptcha PHP könyvtár).
* Javított: Hiba-detektálás WordPress hook-okkal, MutationObserver-ral és AJAX elvondással.
* Javított: A beállítási leírások most tartalmazzák a dashboard URL-eket az API kulcsokhoz.

Verzió: 1.2.2 - Kiadása: 2026-01-24
* Javított: A Captcha nem jelenik meg az Ultimate Multisite Login Form Element-on (form szűrő neve nem egyezik).
* Javított: A Cap widget HTML-e eltávolításra került objektum a wp_kses() tisztítás során.
* Javított: A JavaScript selektorok nem találják a slaschokkal rendelkező elemi ID-kkel rendelkező formokat.
* Hozzáadva: `wu_kses_allowed_html` szűrő hook a classaddons számára, hogy bővíthessenek az engedélyezett HTML tagokat.
* Eltávolítva: Elhalt kódú JavaScript fájlok helyett szolgáltató-specifikus scriptek.

Verzió: 1.2.1 - Kiadása: 2026-01-23

* Javított: A Cap Captcha token validációja sikertelen a multisite környezetekben (most hálózati átmeneti adatokkal dolgozik).
* Javított: A Captcha most konzisztensen renderelődik minden felhasználónak, függetlenül a bejelentkezési státuszától.
* Javított: A captcha renderelése és validációja közötti eltérés, ami checkout sikertelenítéséhez vezetett.

Verzió: 1.2.0 - Kiadása: 2026-01-21

* Új: Cap Captcha - saját tárhelyű proof-of-work captcha, alapértelmezett bekapcsolással az aktiváláskor.
* Új: Nulla-konfigurációs védelem - aktiválja az addon-t, és azonnal védett.
* Új: Polymorf captcha szolgáltató architektúra könnyű bővíthetőség érdekében.
* Új: WooCommerce Store API checkout védelem a kártya tesztelés elleni támadások ellen.
* Új: Statisztikai nyomon követési dashboard, amely a kihívásokat, a validációkat és a blokkolt támadásokat mutatja.
* Új: Szintelő beállítások (Fast, Medium, Max) a Cap Captcha nehézsége miatt.
* Új: Abstrak alaposztályok a reCAPTCHA és hCaptcha szolgáltatók számára.
* Javított: A kódbázis refaktorirozása moduláris szolgáltató osztályokra.
* Javított: Jobb gondok szétválasztása dedikált menedżer osztály segítségével.
* Javított: Biztonsági javítások a $_SERVER változó tisztításán.
* Javított: PHPUnit tesztkonfiguráció WordPress nevetékkonvenciói szerint.

Verzió: 1.0.1 - Kiadása: 2025-09-28

* A prefix nevének ultimate-multisite-ra átnevezése; szövegdomén átírása; verzió emelése.
