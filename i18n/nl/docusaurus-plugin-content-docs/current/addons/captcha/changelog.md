---
title: Captcha-changelog
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha-wijzigingslog

Versie: 1.5.0 - Uitgebracht op 2026-05-22
* Nieuw: Snelheidsbegrenzer met harde stop — telt elke GET en POST op met captcha beschermde oppervlakken (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) en antwoordt met HTTP 429, een `Retry-After` header en een willekeurige tarpit-slaap (1–5s, hard begrensd op 15s).
* Nieuw: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` instellingen om het tarpit-venster af te stemmen.
* Nieuw: `wu_cap_rate_limit_whitelist_ip` filter om vertrouwde IP-bereiken vrij te stellen.
* Nieuw: `wu_cap_rate_limit_will_block` actie die onmiddellijk afgaat voordat de harde-stoprespons wordt verzonden.
* Nieuw: Spoofbestendige client-IP-detectie. `Captcha_Core::get_client_ip()` (de bron van waarheid voor bucket-sleutels van snelheidslimieten, captcha siteverify `remoteip` en statistiek-IP-hashes) dwingt nu een strikt vertrouwensmodel af: REMOTE_ADDR is de basis, `CF-Connecting-IP` wordt alleen gehonoreerd wanneer de directe peer binnen een actueel Cloudflare-IP-bereik valt, en `X-Forwarded-For` wordt alleen gehonoreerd wanneer de directe peer in de door de beheerder geconfigureerde lijst met vertrouwde proxy's staat, met een wandeling van rechts naar links die vertrouwde/CF-hops overslaat voordat het bezoekers-IP wordt vastgesteld.
* Nieuw: `cap_trust_cloudflare_headers` instelling (standaard UIT) — kies ervoor om `CF-Connecting-IP` te vertrouwen wanneer je achter Cloudflare zit. De plugin levert een meegeleverde Cloudflare CIDR-snapshot en vernieuwt deze wekelijks via wp-cron met meegeleverde fallback als het vernieuwen mislukt.
* Nieuw: `cap_trusted_proxies` instelling — tekstgebied met CIDR's of kale IP's (één per regel, `#` reacties toegestaan) met je eigen front-line proxy's / load-balancers. Zonder dit wordt `X-Forwarded-For` genegeerd, zelfs wanneer de snelheidsbegrenzer is ingeschakeld.
* Nieuw: Automatische detectie bij eerste inschakeling van waarschijnlijke Cloudflare-/proxyhouding met een beheerdermelding "Gedetecteerde instellingen toepassen" met één klik. De plugin overschrijft nooit je opgeslagen waarden; als later verkeer suggereert dat je configuratie niet langer overeenkomt met de werkelijkheid (bijv. Cloudflare heeft CIDR-bereiken gewijzigd en je proxy-CIDR is nu verouderd), verschijnt er een niet-wegklikbare mismatchmelding met de aanbevolen update.
* Opgelost: Onzichtbare modus verlaagt `cap_security_level` niet langer stilzwijgend naar FAST — het door de beheerder geconfigureerde niveau wordt gehonoreerd. Een nieuw `wu_cap_server_security_level` filter is beschikbaar voor sites die maatwerklogica willen.
* Opgelost: Statistiekenteller `rate_limits_triggered` wordt nu bij elke blokkade verhoogd, niet alleen op het zeldzame backstop-pad na succes.
* Opgelost: `Captcha_Core::get_client_ip()` is nu de enige bron van waarheid voor bezoekers-IP-toeschrijving binnen de snelheidsbegrenzer, captcha-providers (reCAPTCHA + hCaptcha `siteverify`) en statistieken — dit sluit een spoofingvector waarbij directe aanvragen naar de origin-server met een vervalste `CF-Connecting-IP` header zouden zijn gebucket op het vervalste IP in plaats van de echte peer.
* Opgelost: De WooCommerce klassieke afreken-snelheidslimietpoort gaat nu af op `template_redirect` (prioriteit 1) in plaats van `woocommerce_before_checkout_form`. De hook op formulierniveau gaat nooit af wanneer de winkelwagen leeg is, dus floodverkeer dat nooit een product toevoegt, omzeilde de begrenzer volledig.
* Opgelost: De WooCommerce betalen-voor-bestelling-snelheidslimietpoort gaat nu af op `template_redirect` in plaats van `woocommerce_before_pay_action`. Die laatste gaat alleen af nadat `wp_verify_nonce('woocommerce-pay')` slaagt, wat betekent dat unauth aanvallers (het daadwerkelijke dreigingsmodel) de begrenzer nooit activeerden.
* Opgelost: De WooCommerce Store API (blokken) afreken-snelheidslimietpoort gaat nu af op `rest_pre_dispatch` in plaats van `woocommerce_store_api_checkout_update_order_from_request`. Die laatste gaat pas af nadat Store API de winkelwagen- en factuurvelden valideert, dus unauth bots kregen een 400 van de validator en activeerden de begrenzer nooit.
* Opgelost: De Ultimate Multisite inline-login-snelheidslimietpoort gaat nu af op `wu_ajax_nopriv_wu_inline_login` prioriteit 1 (en de ingelogde spiegel) in plaats van `wu_before_inline_login`. Die laatste gaat alleen af nadat `check_ajax_referer('wu_checkout')` slaagt, dus unauth bots zonder geldige wu_checkout nonce kregen een 403 en activeerden de begrenzer nooit.
* Opgelost: `Rate_Limiter::enforce()` past nu een bewaker eenmaal per aanvraag toe, gesleuteld op `surface|ip`, zodat upstream hooks die twee keer per render afgaan (met name `wu_setup_checkout` in Ultimate Multisite) de effectieve snelheidslimietdrempel niet langer halveren.
* Opgelost: Snelheidslimiet-oppervlakpoorten raadplegen niet langer `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Dat filter signaleert "captcha al afgehandeld door een ander oppervlak" en staat los van floodbescherming — de WooCommerce integratie hookte erop om de WordPress login-captcha over te slaan wanneer een Woo nonce aanwezig was, wat doorwerkte in snelheidstellingen en Woo POSTs de begrenzer liet ontwijken. Het snelheidslimietspecifieke `wu_cap_rate_limit_whitelist_ip` filter is de enige omzeiling die nu van toepassing is.

Versie: 1.3.2 - Uitgebracht op 2026-01-27
* Opgelost: Cap-widget werd niet weergegeven op afrekenformulieren die Elementor of andere paginabouwers gebruiken
* Opgelost: cap-widget aangepast element werd gestript door wp_kses()-sanitisatie
* Verbeterd: Gebruik aanroepbare inhoud voor het afreken-captchaveld om HTML-filtering te omzeilen
* Verbeterd: Vereenvoudigde JavaScript met fallback voor randgevallen

Versie: 1.3.1 - Uitgebracht op 2026-01-26
* Opgelost: Cap Captcha onzichtbare modus loste niet automatisch op bij dynamische Ultimate Multisite afrekenformulieren
* Verbeterd: Cap-afrekenscript gebruikt nu MutationObserver om dynamisch geladen widgets te detecteren
* Verbeterd: Afrekenknopinterceptie toegevoegd om op token te wachten vóór verzending

Version: 1.3.0 - Uitgebracht op 2026-01-27
* Nieuw: WooCommerce Blocks checkout-integratie met Store API fetch-onderschepping
* Nieuw: Ondersteuning voor onzichtbare captcha voor WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Nieuw: Zelfstandige instellingenpagina voor gebruik zonder Ultimate Multisite
* Nieuw: Jetpack Autoloader voor preventie van dependency-conflicten
* Opgelost: hCaptcha werd niet gerenderd op dynamische Ultimate Multisite checkout (via AJAX geladen content)
* Opgelost: Captcha werd niet vernieuwd/gereset wanneer formulier-validatiefouten optreden
* Opgelost: hCaptcha werd niet weergegeven op WooCommerce checkout-pagina
* Opgelost: reCAPTCHA class not found-fout (google/recaptcha PHP-bibliotheek toegevoegd)
* Verbeterd: Foutdetectie via WordPress hooks, MutationObserver en AJAX-onderschepping
* Verbeterd: Instellingenbeschrijvingen bevatten nu dashboard-URL's voor API keys

Version: 1.2.2 - Uitgebracht op 2026-01-24
* Opgelost: Captcha werd niet weergegeven op Ultimate Multisite Login Form Element (mismatch in formulier-filternaam)
* Opgelost: Cap-widget-HTML werd verwijderd door wp_kses()-sanitization
* Opgelost: JavaScript-selectors vonden geen formulieren met schuine strepen in element-ID's
* Toegevoegd: Filter hook `wu_kses_allowed_html` voor classaddons om toegestane HTML-tags uit te breiden
* Verwijderd: Dode-code JavaScript-bestanden vervangen door provider-specifieke scripts

Version: 1.2.1 - Uitgebracht op 2026-01-23

* Opgelost: Cap Captcha-tokenvalidatie mislukte in multisite-omgevingen (gebruikt nu netwerkbrede transients)
* Opgelost: Captcha wordt nu consistent gerenderd voor alle gebruikers, ongeacht inlogstatus
* Opgelost: Mismatch tussen captcha-rendering en validatie die checkout-fouten veroorzaakte

Version: 1.2.0 - Uitgebracht op 2026-01-21

* Nieuw: Cap Captcha - zelfgehoste proof-of-work-captcha, standaard ingeschakeld bij activering
* Nieuw: Zero-configuration bescherming - activeer de addon en je bent direct beschermd
* Nieuw: Polymorfe captcha-providerarchitectuur voor eenvoudige uitbreidbaarheid
* Nieuw: WooCommerce Store API checkout-bescherming tegen card-testing-aanvallen
* Nieuw: Statistiekentracking-dashboard met challenges, verificaties en geblokkeerde aanvallen
* Nieuw: Voorinstellingen voor beveiligingsniveau (Snel, Medium, Max) voor Cap Captcha-moeilijkheid
* Nieuw: Abstracte basisklassen voor reCAPTCHA- en hCaptcha-providers
* Verbeterd: Codebase gerefactord naar modulaire providerklassen
* Verbeterd: Betere scheiding van verantwoordelijkheden met speciale manager class
* Fixed: Security improvements for $_SERVER variable sanitization
* Opgelost: PHPUnit-testconfiguratie voor WordPress-naamgevingsconventies

Version: 1.0.1 - Uitgebracht op 2025-09-28

* Prefix hernoemd naar ultimate-multisite; text domain bijgewerkt; versieverhoging.
