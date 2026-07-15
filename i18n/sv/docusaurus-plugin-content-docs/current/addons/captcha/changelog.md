---
title: Captcha Ändringslogg
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog

Version: 1.5.0 - Released on 2026-05-22
* Nytt: Hard-stop rate limiter — räknar varje GET- och POST-förfrågan på captcha-skyddade ytor (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) och svarar med HTTP 429, ett `Retry-After`-huvud och en slumpmässig tarpit-sleep (1–5 sekunder, hårdgränsad till 15 sekunder).
* Nytt: Inställningarna `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` för att justera tarpit-fönstret.
* Nytt: Filtret `wu_cap_rate_limit_whitelist_ip` för att undanta betrodda IP-intervall.
* Nytt: Åtgärden `wu_cap_rate_limit_will_block` som triggas omedelbart innan hard-stop-svaret skickas.
* Nytt: Spoof-resistent client-IP-detektering. `Captcha_Core::get_client_ip()` (källan till sanning för rate-limit-hinkarnas nycklar, captcha siteverify `remoteip` och statistik IP-hashes) tillämpar nu en strikt förtroendemodell: REMOTE_ADDR är baslinjen, `CF-Connecting-IP` respekteras endast när den omedelbara peer-enheten befinner sig inom ett aktuellt Cloudflare IP-intervall, och `X-Forwarded-For` respekteras endast när den omedelbara peer-enheten finns i den administrativt konfigurerade listan över betrodda proxys, med en vänster-till-höger-genomgång som hoppar över betrodda/CF-hopp innan den fastställer besökarens IP.
* Nytt: Inställningen `cap_trust_cloudflare_headers` (standard OFF) — välj in förtroende för `CF-Connecting-IP` när du är bakom Cloudflare. Pluginet skickar med ett paketerat Cloudflare CIDR-快照 och uppdaterar det veckovis via wp-cron med ett paketerat fallback om uppdateringen misslyckas.
* Nytt: Inställningen `cap_trusted_proxies` — ett textområde för CIDR-block eller rena IP-adresser (en per rad, `#` kommentarer tillåtna) som listar dina egna front-line proxys / lastbalanserare. Utan detta ignoreras `X-Forwarded-For` även när rate limitern är aktiverad.
* Nytt: Första aktiveringen automatiskt upptäcker trolig Cloudflare / proxy-status med en "Apply detected settings"-meddelande i admin-panelen. Pluginet skriver aldrig över dina sparade värden; om efterföljande trafik antyder att din konfiguration inte längre matchar verkligheten (t.ex. att Cloudflare har ändrat CIDR-intervall och din proxy-CIDR nu är föråldrad), visas ett icke-avvisbart avvikelsemeddelande med det rekommenderade uppdateringen.
* Fixat: Invisible mode sänker inte längre tyst `cap_security_level` till FAST — den nivå som adminen konfigurerat respekteras. Ett nytt filter, `wu_cap_server_security_level`, finns tillgängligt för webbplatser som vill ha speciallogik.
* Fixat: Statistikräknaren `rate_limits_triggered` ökar nu vid varje blockering, inte bara på den sällsynta post-success backstop-vägen.
* Fixat: `Captcha_Core::get_client_ip()` är nu den enda källan till sanning för besökarens IP-tillskrivning över rate limitern, captcha-leverantörer (reCAPTCHA + hCaptcha `siteverify`) och statistik — vilket stänger ett spoofing-hål där direkta origin-server-förfrågningar med ett förfalskat `CF-Connecting-IP`-huvud skulle ha blivit räknade med den förfalskade IP:n istället för den verkliga peer-enheten.
* Fixat: WooCommerce classic checkout rate-limit gate triggas nu på `template_redirect` (prioritet 1) istället för `woocommerce_before_checkout_form`. Form-nivåns hook triggas aldrig när varukorgen är tom, så trafikflödet som aldrig lägger till en produkt kringgick helt limitern.
* Fixat: WooCommerce pay-for-order rate-limit gate triggas nu på `template_redirect` istället för `woocommerce_before_pay_action`. Det senare triggas bara efter att `wp_verify_nonce('woocommerce-pay')` lyckats, vilket innebär att oautentiserade angripare (det faktiska hotmodellen) aldrig utlöste limitern.
* Fixat: WooCommerce Store API (blocks) checkout rate-limit gate triggas nu på `rest_pre_dispatch` istället för `woocommerce_store_api_checkout_update_order_from_request`. Det senare triggas bara efter att Store API validerar varukorgen och faktureringsfälten, så oautentiserade bots fick en 400 från validatorn och utlöste aldrig limitern.
* Fixat: Ultimate Multisite inline-login rate-limit gate triggas nu på `wu_ajax_nopriv_wu_inline_login` prioritet 1 (och den inloggade spegeln) istället för `wu_before_inline_login`. Det senare triggas bara efter att `check_ajax_referer('wu_checkout')` lyckats, så oautentiserade bots utan ett giltigt wu_checkout nonce fick en 403 och utlöste aldrig limitern.
* Fixat: `Rate_Limiter::enforce()` tillämpar nu ett skydd "en gång per förfrågan" baserat på `surface|ip`, så att uppströms hooks som triggas två gånger per rendering (tydligt `wu_setup_checkout` i Ultimate Multisite) inte längre halverar den effektiva rate-limit-tröskeln.
* Fixat: Rate-limit-ytorna konsulterar inte längre `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Det filtret signalerar "captcha hanterad av en annan yta" och är ortogonalt mot flood-skydd — WooCommerce-integrationen kopplade det till att hoppa över WordPress-inloggscaptcha när ett Woo nonce var närvarande, vilket läckte in i rate-räkningen och tillät Woo POST:er att undvika limitern. Endast rate-limit-specifika filtret `wu_cap_rate_limit_whitelist_ip` är nu det enda undantaget som gäller.

Version: 1.3.2 - Released on 2026-01-27
* Fixat: Cap widget renderas inte på checkout-formulär som använder Elementor eller andra page builders
* Fixat: cap-widget custom element blir borttaget av wp_kses() sanitization
* Förbättrat: Använder callable content för captcha-fältet på checkout för att kringgå HTML-filtrering
* Förbättrat: Förenklad JavaScript med fallback för edge cases

Version: 1.3.1 - Released on 2026-01-26
* Fixat: Cap Captcha invisible mode löser inte automatiskt på dynamiska Ultimate Multisite checkout-formulär
* Förbättrat: Cap checkout script använder nu MutationObserver för att upptäcka dynamiskt laddade widgets
* Förbättrat: Lägger till avlyssning av checkout-knappen för att vänta på token innan inlämning

Version: 1.3.0 - Released on 2026-01-27
* Nytt: WooCommerce Blocks checkout integration med Store API fetch interception
* Nytt: Invisible captcha-stöd för WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Nytt: Självständig inställningssida för användning utan Ultimate Multisite
* Nytt: Jetpack Autoloader för att förhindra beroendekonflikter
* Fixat: hCaptcha renderas inte på dynamiskt Ultimate Multisite checkout (AJAX-laddat innehåll)
* Fixat: Captcha uppdateras/återställs inte när formulärvalideringsfel inträffar
* Fixat: hCaptcha visas inte på WooCommerce checkout-sidan
* Fixat: reCAPTCHA class not found error (laddade google/recaptcha PHP-biblioteket)
* Förbättrat: Feldetektering via WordPress hooks, MutationObserver och AJAX interception
* Förbättrat: Inställningsbeskrivningar inkluderar nu dashboard-URL:er för API-nycklar

Version: 1.2.2 - Released on 2026-01-24
* Fixat: Captcha visas inte på Ultimate Multisite Login Form Element (form filter name mismatch)
* Fixat: Cap widget HTML blir borttaget av wp_kses() sanitization
* Fixat: JavaScript-selektorer hittar inte formulär med snedstreck i element-ID:n
* Tillagt: Filter hook `wu_kses_allowed_html` för classaddons att utöka tillåtna HTML-taggar
* Borttaget: Döda JavaScript-filer ersatta med leverantörsspecifika scripts

Version: 1.2.1 - Released on 2026-01-23

* Fixat: Cap Captcha tokenvalidering misslyckas i multisite-miljöer (använder nu network-wide transients)
* Fixat: Captcha renderas nu konsekvent för alla användare oavsett inloggningsstatus
* Fixat: Avvikelse mellan captcha-rendering och validering som orsakade checkout-fel

Version: 1.2.0 - Released on 2026-01-21

* Nytt: Cap Captcha - självhostad proof-of-work captcha, aktiverad som standard vid aktivering
* Nytt: Zero-configuration protection - aktivera addonet och du är omedelbart skyddad
* Nytt: Polymorphic captcha provider architecture för enkel utbyggbarhet
* Nytt: WooCommerce Store API checkout protection mot card testing attacks
* Nytt: Statistikspårningsdashboard som visar utmaningar, verifieringar och blockerade attacker
* Nytt: Security level presets (Fast, Medium, Max) för Cap Captcha svårighet
* Nytt: Abstract base classes för reCAPTCHA och hCaptcha providers
* Förbättrat: Omstrukturerad kodbas till modulära provider-klasser
* Förbättrat: Bättre separation av intressen med dedikerad manager class
* Fixat: Säkerhetsförbättringar för $_SERVER-variabel sanitization
* Fixat: PHPUnit testkonfiguration för WordPress namngivningskonventioner

Version: 1.0.1 - Released on 2025-09-28

* Bytt prefix till ultimate-multisite; uppdaterade text domain; versionsökning.
