---
title: Captcha ændringslog
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Ændringslog

Version: 1.5.0 - Udgivet den 2026-05-22
* Nye funktioner: Hard-stop rate limiter — tæller hver GET og POST på CAPTCHA-beskyttede overflader (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) og svarer med HTTP 429, en `Retry-After` header, og en tilfældig tarpit sleep (1–5s, hard-capped ved 15s).
* Nye indstillinger: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` til at finjustere tarpit vinduet.
* Nye filtre: `wu_cap_rate_limit_whitelist_ip` for at undtagen tillægge betroede IP-områder.
* Nye hooks: `wu_cap_rate_limit_will_block` der udløses lige før den hard-stop respons sendes.
* Nye funktioner til spoof-resistent klient-IP detektion. `Captcha_Core::get_client_ip()` (kilden for bucket nøgler til rate-limiter, captcha siteverify `remoteip`, og statistik IP hashes) håndhæver nu en streng tillidsmodel: REMOTE_ADDR er minimumsbetingelsen, `CF-Connecting-IP` tages kun i betragtning, hvis den umiddelbare peer er inden for et aktuelt Cloudflare IP-område, og `X-Forwarded-For` tages kun i betragtning, hvis den umiddelbare peer er på din administrator-konfigurerede liste over betroede proxies, med en højre-til-ven-gang, der springer betroede/CF hops over, før den lander på besøgendes IP.
* Nye indstillinger: `cap_trust_cloudflare_headers` (standard OFF) — vælg at stole på `CF-Connecting-IP` når du er bag Cloudflare. Plugin'et leveres med et bundled Cloudflare CIDR snapshot og opdateres ugentligt via wp-cron med en bundled fallback, hvis opdateringen fejler.
* Nye indstillinger: `cap_trusted_proxies` — tekstfelt til CIDR-er eller rene IP-adresser (én per linje, `#` kommentarer tilladt) der lister dine egne frontlinje proxies / load balancere. Uden dette ignoreres `X-Forwarded-For`, selv når rate limiter er aktiveret.

* Nyt: Første aktivering af automatisk detektion af sandsynlig Cloudflare / proxy-postur med en knap "Anvend det detekterede indstillinger"-admin-meddelelse. Plugin'et overskriver aldrig dine gemte værdier; hvis efterfølgende trafik antyder, at din konfiguration ikke længere matcher virkeligheden (f.eks. Cloudflare har ændret CIDR-områder, og dit proxy-CIDR er nu forældet), vises en uafviselig mismatch-meddelelse med den anbefalede opdatering.
* Udbedret: Usynlig tilstand nedgraderer ikke længere `cap_security_level` lydløst til FAST — administratorindstillet niveau bliver respekteret. Et nyt filter, `wu_cap_server_security_level`, er nu tilgængeligt for sider, der ønsker skræddersyet logik.
* Udbedret: Statistikken `rate_limits_triggered` tæller nu op ved hver blokering, ikke kun på den sjældne post-succes backstop sti.
* Udbedret: `Captcha_Core::get_client_ip()` er nu den eneste kilde til sandheden for besøgendes IP-tildeling på tværs af rate limiteren, captcha-udbydere (reCAPTCHA + hCaptcha `siteverify`) og statistik — dette lukker en spoofing-vektor, hvor direkte anmodninger fra origin-servere med et forfalsket `CF-Connecting-IP` header ville blive placeret i den falske IP-bucket i stedet for den rigtige peer.
* Udbedret: WooCommerce classic checkout rate-limit porten udløses nu på `template_redirect` (prioritet 1) i stedet for `woocommerce_before_checkout_form`. Form-niveau-hooket udløses aldrig, når kurven er tom, så oversvømmende trafik, der aldrig tilføjede et produkt, omgåede limiteren helt.

* Fix: WooCommerce pay-for-order rate-limit gate udløses nu på `template_redirect` i stedet for `woocommerce_before_pay_action`. Sidste sidst udløser kun efter at `wp_verify_nonce('woocommerce-pay')` lykkes, hvilket betyder, at uautoriserede angribere (den faktiske trusselsmodel) aldrig har aktiveret begrænseren.
* Fix: WooCommerce Store API (blocks) checkout rate-limit gate udløses nu på `rest_pre_dispatch` i stedet for `woocommerce_store_api_checkout_update_order_from_request`. Sidste sidst udløses kun efter at Store API validerer kurven og faktureringsfelterne, så uautoriserede bots får en 400 fra validereren og aldrig rammer begrænseren.
* Fix: Ultimate Multisite inline-login rate-limit gate udløses nu på `wu_ajax_nopriv_wu_inline_login` med prioritet 1 (og den loggede spejling) i stedet for `wu_before_inline_login`. Sidste sidst udløses kun efter at `check_ajax_referer('wu_checkout')` lykkes, så uautoriserede bots uden en gyldig wu_checkout nonce får en 403 og rammer aldrig begrænseren.
* Fix: `Rate_Limiter::enforce()` anvender nu en begrænsning én gang pr. anmodning baseret på nøglen `surface|ip`, så upstream hooks, der udløses to gange per render (især `wu_setup_checkout` i Ultimate Multisite), ikke længere halverer den effektive rate-limit tærskel.

* Fixet: Rate-limit surface gates konsulterede ikke længere `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Det filter signalerer "captcha allerede håndteret af en anden overflade" og er uafhængigt af floodbeskyttelse – WooCommerce-integrationen hooked det til at springe WordPress login captcha over, når der var et Woo nonce til stede, hvilket førte til, at Woo POST's undgik limiteren. Det rate-limit-specifikke filter `wu_cap_rate_limit_whitelist_ip` er nu den eneste omgåelse, der gælder.

Version: 1.3.2 - Udgivet den 2026-01-27
* Fixet: Cap widget ikke render på checkout formularer ved brug af Elementor eller andre sidebyggere
* Fixet: cap-widget custom element blev fjernet af wp_kses() sanitering
* Forbedret: Brug af callable content til checkout captcha felt for at omgå HTML-filtrering
* Forbedret: Forenklet JavaScript med fallback til kanttilfælde

Version: 1.3.1 - Udgivet den 2026-01-26
* Fixet: Cap Captcha usynlig mode løste ikke automatisk på dynamiske Ultimate Multisite checkout formularer
* Forbedret: Cap checkout script bruger nu MutationObserver til at opdage dynamisk indlæste widgets
* Forbedret: Tilføjet interception af checkout knap for at vente på token før indsendelse

Version: 1.3.0 - Udgivet den 2026-01-27
* Nyt: WooCommerce Blocks checkout integration med afbrydelse af Store API fetch
* Nyt: Usynlig captcha understøttelse til WooCommerce checkout (hCaptcha usynlig, reCAPTCHA v2 usynlig, v3)
* Nyt: Selvstændig indstillingsside til brug uden Ultimate Multisite
* Nyt: Jetpack Autoloader til forebyggelse af afhængighedskonflikter
* Udbedret: hCaptcha vises ikke på dynamiske Ultimate Multisite checkouts (AJAX-indlæst indhold)
* Udbedret: Captcha opdateres/nulstilles ikke, når der opstår fejl i formularvalideringen
* Udbedret: hCaptcha vises ikke på WooCommerce checkout siden
* Udbedret: Fejl "reCAPTCHA class not found" (tilføjet google/recaptcha PHP-bibliotek)
* Forbedret: Fejlfinding via WordPress hooks, MutationObserver og AJAX-afbrydelse
* Forbedret: Indstillingsbeskrivelser inkluderer nu dashboard URLs for API-nøgler

Version: 1.2.2 - Udgivet den 2026-01-24
* Udbedret: Captcha vises ikke på Ultimate Multisite Login Form Element (fejl i filternavn)
* Udbedret: Cap widget HTML bliver fjernet af wp_kses() sanitering
* Udbedret: JavaScript-selektorer finder ikke formularer med skråstreg i element-ID'erne
* Tilføjet: Filter hook `wu_kses_allowed_html` for classaddons til at udvide tilladte HTML-tags
* Fjernet: Dødt kode JavaScript-filer erstattet af leverandørspecifikke scripts

Version: 1.2.1 - Udgivet den 2026-01-23

* Fixet: Cap Captcha tokenvalider fejlede i multisite-miljøer (nu bruger netværksbredde transients)
* Fixet: Captcha render nu konsekvent for alle brugere uansby loginstatus
* Fixet: Uoverensstemmelse mellem captcha rendering og validering, der forårsagede fejl ved checkout

Version: 1.2.0 - Udgivet den 2026-01-21

* Nyt: Cap Captcha - selvhostet proof-of-work captcha, aktiveret som standard ved aktivering
* Nyt: Zero-configuration beskyttelse - aktiver add-on og du er straks beskyttet
* Nyt: Polymorf captcha provider arkitektur for nem udvidbarhed
* Nyt: WooCommerce Store API checkout beskyttelse mod korttestangreb
* Nyt: Statistikdashboard, der viser udfordringer, verifikationer og blokerede angreb
* Nyt: Sikkerheds-niveau præsettings (Hurtig, Medium, Max) for Cap Captcha sværhedsgrad
* Nyt: Abstrakt baseclasses for reCAPTCHA og hCaptcha providers
* Forbedret: Omskrivning af koden til modulære provider classes
* Forbedret: Bedre adskillelse af ansvarsområder med en dedikeret manager class
* Fixet: Sikkerhedsforbedringer ved sanering af $_SERVER variabel
* Fixet: PHPUnit testkonfiguration for WordPress navngivningskonventioner

Version: 1.0.1 - Udgivet den 2025-09-28

* Navnet på præfikset ændret til ultimate-multisite; tekstdomæne opdateret; version hævet.
