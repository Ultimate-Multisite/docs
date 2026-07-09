---
title: Captcha-Änderungsprotokoll
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Änderungsprotokoll

Version: 1.5.0 - Veröffentlicht am 2026-05-22
* Neu: Hard-Stop-Rate-Limiter — zählt jedes GET und POST auf Captcha-geschützten Oberflächen (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) und antwortet mit HTTP 429, einem `Retry-After` header und einem randomisierten Tarpit-Sleep (1–5 s, hart auf 15 s begrenzt).
* Neu: Einstellungen `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max`, um das Tarpit-Fenster anzupassen.
* Neu: Filter `wu_cap_rate_limit_whitelist_ip`, um vertrauenswürdige IP-Bereiche auszunehmen.
* Neu: Aktion `wu_cap_rate_limit_will_block`, die unmittelbar ausgelöst wird, bevor die Hard-Stop-Antwort gesendet wird.
* Neu: Spoofing-resistente Client-IP-Erkennung. `Captcha_Core::get_client_ip()` (die maßgebliche Quelle für Rate-Limit-Bucket-Keys, Captcha-siteverify-`remoteip` und Statistik-IP-Hashes) erzwingt nun ein striktes Vertrauensmodell: REMOTE_ADDR ist die Grundlage, `CF-Connecting-IP` wird nur berücksichtigt, wenn der unmittelbare Peer innerhalb eines aktuellen Cloudflare-IP-Bereichs liegt, und `X-Forwarded-For` wird nur berücksichtigt, wenn der unmittelbare Peer in der vom Admin konfigurierten Liste vertrauenswürdiger Proxys steht, mit einem Rechts-nach-links-Durchlauf, der vertrauenswürdige/CF-Hops überspringt, bevor die Besucher-IP festgelegt wird.
* Neu: Einstellung `cap_trust_cloudflare_headers` (standardmäßig AUS) — aktiviert Vertrauen in `CF-Connecting-IP`, wenn die Website hinter Cloudflare betrieben wird. Das Plugin liefert einen gebündelten Cloudflare-CIDR-Snapshot mit und aktualisiert ihn wöchentlich via wp-cron, mit gebündeltem Fallback, falls die Aktualisierung fehlschlägt.
* Neu: Einstellung `cap_trusted_proxies` — Textbereich mit CIDRs oder reinen IPs (eine pro Zeile, `#`-Kommentare erlaubt), der Ihre eigenen Front-Line-Proxys / Load-Balancer auflistet. Ohne dies wird `X-Forwarded-For` ignoriert, selbst wenn der Rate-Limiter aktiviert ist.
* Neu: Auto-Erkennung beim ersten Aktivieren für wahrscheinliche Cloudflare-/Proxy-Konstellation mit einem Ein-Klick-Admin-Hinweis „Erkannte Einstellungen anwenden“. Das Plugin überschreibt niemals Ihre gespeicherten Werte; wenn späterer Traffic darauf hindeutet, dass Ihre Konfiguration nicht mehr der Realität entspricht (z. B. Cloudflare hat CIDR-Bereiche geändert und Ihr Proxy-CIDR ist nun veraltet), zeigt ein nicht ausblendbarer Abweichungshinweis die empfohlene Aktualisierung an.
* Behoben: Unsichtbarer Modus stuft `cap_security_level` nicht mehr stillschweigend auf FAST herunter — die vom Admin konfigurierte Stufe wird berücksichtigt. Ein neuer Filter `wu_cap_server_security_level` ist für Websites verfügbar, die eigene Logik wünschen.
* Behoben: Statistikzähler `rate_limits_triggered` wird nun bei jedem Block erhöht, nicht nur auf dem seltenen Backstop-Pfad nach Erfolg.
* Behoben: `Captcha_Core::get_client_ip()` ist nun die einzige maßgebliche Quelle für die Zuordnung von Besucher-IPs im Rate-Limiter, bei Captcha-Anbietern (reCAPTCHA + hCaptcha `siteverify`) und in Statistiken — dadurch wird ein Spoofing-Vektor geschlossen, bei dem direkte Anfragen an den Ursprungsserver mit einem gefälschten `CF-Connecting-IP` header nach der gefälschten IP statt nach dem echten Peer gebuckettet worden wären.
* Behoben: Das Rate-Limit-Gate für den klassischen WooCommerce checkout wird nun bei `template_redirect` (Priorität 1) statt bei `woocommerce_before_checkout_form` ausgelöst. Der Hook auf Formularebene wird nie ausgelöst, wenn der Warenkorb leer ist, sodass Flood-Traffic, der nie ein Produkt hinzufügt, den Limiter vollständig umging.
* Behoben: Das Rate-Limit-Gate für WooCommerce pay-for-order wird nun bei `template_redirect` statt bei `woocommerce_before_pay_action` ausgelöst. Letzteres wird erst ausgelöst, nachdem `wp_verify_nonce('woocommerce-pay')` erfolgreich war, was bedeutet, dass nicht authentifizierte Angreifer (das tatsächliche Bedrohungsmodell) den Limiter nie auslösten.
* Behoben: Das Rate-Limit-Gate für den checkout der WooCommerce Store API (Blöcke) wird nun bei `rest_pre_dispatch` statt bei `woocommerce_store_api_checkout_update_order_from_request` ausgelöst. Letzteres wird erst ausgelöst, nachdem die Store API den Warenkorb und die Rechnungsfelder validiert hat, sodass nicht authentifizierte Bots eine 400 vom Validator erhielten und den Limiter nie auslösten.
* Behoben: Das Rate-Limit-Gate für Ultimate Multisite inline-login wird nun bei `wu_ajax_nopriv_wu_inline_login` mit Priorität 1 (und dem Mirror für angemeldete Benutzer) statt bei `wu_before_inline_login` ausgelöst. Letzteres wird erst ausgelöst, nachdem `check_ajax_referer('wu_checkout')` erfolgreich war, sodass nicht authentifizierte Bots ohne gültige wu_checkout-Nonce eine 403 erhielten und den Limiter nie auslösten.
* Behoben: `Rate_Limiter::enforce()` wendet nun einen Einmal-pro-Anfrage-Schutz an, der nach `surface|ip` geschlüsselt ist, sodass Upstream-Hooks, die zweimal pro Render ausgelöst werden (insbesondere `wu_setup_checkout` in Ultimate Multisite), den effektiven Rate-Limit-Schwellenwert nicht mehr halbieren.
* Behoben: Rate-Limit-Oberflächen-Gates konsultieren nicht mehr `Captcha_Core::is_whitelisted()` (Filter `wu_captcha_whitelisted`). Dieser Filter signalisiert „Captcha bereits von einer anderen Oberfläche behandelt“ und ist unabhängig vom Flood-Schutz — die WooCommerce-Integration hatte ihn eingebunden, um das WordPress-Login-Captcha zu überspringen, wenn eine Woo-Nonce vorhanden war, was in die Ratenzählung übergriff und Woo-POSTs den Limiter umgehen ließ. Der rate-limit-spezifische Filter `wu_cap_rate_limit_whitelist_ip` ist der einzige Bypass, der nun angewendet wird.

Version: 1.3.2 - Veröffentlicht am 2026-01-27
* Behoben: Cap-Widget wird auf checkout-Formularen mit Elementor oder anderen Page-Buildern nicht gerendert
* Behoben: Benutzerdefiniertes Element cap-widget wird durch wp_kses()-Sanitization entfernt
* Verbessert: Verwendet aufrufbaren Inhalt für das checkout-Captcha-Feld, um HTML-Filterung zu umgehen
* Verbessert: Vereinfachtes JavaScript mit Fallback für Grenzfälle

Version: 1.3.1 - Veröffentlicht am 2026-01-26
* Behoben: Unsichtbarer Modus von Cap Captcha löst sich nicht automatisch auf dynamischen Ultimate Multisite checkout-Formularen
* Verbessert: Cap-checkout-Skript verwendet nun MutationObserver, um dynamisch geladene Widgets zu erkennen
* Verbessert: Abfangen des checkout-Buttons hinzugefügt, um vor dem Absenden auf das Token zu warten

Version: 1.3.0 - Veröffentlicht am 2026-01-27
* Neu: WooCommerce Blocks Checkout-Integration mit Store API Fetch-Interception
* Neu: Unsichtbare Captcha-Unterstützung für WooCommerce Checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Neu: Eigenständige Einstellungsseite für die Verwendung ohne Ultimate Multisite
* Neu: Jetpack Autoloader zur Vermeidung von Abhängigkeitskonflikten
* Behoben: hCaptcha wurde beim dynamischen Ultimate Multisite Checkout nicht gerendert (per AJAX geladener Inhalt)
* Behoben: Captcha wurde bei Formularvalidierungsfehlern nicht aktualisiert/zurückgesetzt
* Behoben: hCaptcha wurde auf der WooCommerce Checkout-Seite nicht angezeigt
* Behoben: reCAPTCHA-Klasse-nicht-gefunden-Fehler (google/recaptcha PHP-Bibliothek hinzugefügt)
* Verbessert: Fehlererkennung über WordPress Hooks, MutationObserver und AJAX-Interception
* Verbessert: Einstellungsbeschreibungen enthalten jetzt Dashboard-URLs für API-Schlüssel

Version: 1.2.2 - Veröffentlicht am 2026-01-24
* Behoben: Captcha wurde im Ultimate Multisite Login-Formularelement nicht angezeigt (Formular-Filtername stimmte nicht überein)
* Behoben: Cap-Widget-HTML wurde durch wp_kses()-Bereinigung entfernt
* Behoben: JavaScript-Selektoren fanden Formulare mit Schrägstrichen in Element-IDs nicht
* Hinzugefügt: Filter-Hook `wu_kses_allowed_html` für classaddons, um erlaubte HTML-Tags zu erweitern
* Entfernt: Toter Code in JavaScript-Dateien durch anbieterspezifische Skripte ersetzt

Version: 1.2.1 - Veröffentlicht am 2026-01-23

* Behoben: Cap Captcha Token-Validierung schlug in Multisite-Umgebungen fehl (verwendet jetzt netzwerkweite Transients)
* Behoben: Captcha wird jetzt für alle Benutzer unabhängig vom Login-Status konsistent gerendert
* Behoben: Abweichung zwischen Captcha-Rendering und -Validierung, die Checkout-Fehler verursachte

Version: 1.2.0 - Veröffentlicht am 2026-01-21

* Neu: Cap Captcha – selbst gehostetes Proof-of-Work-Captcha, bei Aktivierung standardmäßig aktiviert
* Neu: Zero-Configuration-Schutz – aktiviere das Add-on und du bist sofort geschützt
* Neu: Polymorphe Captcha-Anbieterarchitektur für einfache Erweiterbarkeit
* Neu: WooCommerce Store API Checkout-Schutz gegen Card-Testing-Angriffe
* Neu: Statistik-Tracking-Dashboard mit Challenges, Verifizierungen und blockierten Angriffen
* Neu: Sicherheitsstufen-Voreinstellungen (Schnell, Mittel, Max) für Cap Captcha-Schwierigkeit
* Neu: Abstrakte Basisklassen für reCAPTCHA- und hCaptcha-Anbieter
* Verbessert: Codebasis in modulare Anbieterklassen umstrukturiert
* Verbessert: Bessere Trennung der Verantwortlichkeiten mit dedizierter Manager-Klasse
* Fixed: Security improvements for $_SERVER variable sanitization
* Behoben: PHPUnit-Testkonfiguration für WordPress-Namenskonventionen

Version: 1.0.1 - Veröffentlicht am 2025-09-28

* Präfix in ultimate-multisite umbenannt; Text-Domain aktualisiert; Versionsanhebung.
