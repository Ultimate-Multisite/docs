---
title: Captcha endringslogg
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Endringslogg

Versjon: 1.5.0 - Utgitt 2026-05-22
* Nytt: Hard-stopp ratebegrenser — teller alle GET- og POST-forespørsler på captcha-beskyttede sider (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) og svarer med HTTP 429, et `Retry-After`-header, og en tilfeldig tarpit-pause (1–5 sekunder, med et hardt tak på 15 sekunder).
* Nytt: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` innstillinger for å justere tarpit-vinduet.
* Nytt: `wu_cap_rate_limit_whitelist_ip` filter for å unnta betrodde IP-områder.
* Nytt: `wu_cap_rate_limit_will_block` action som utløses umiddelbart før hard-stopp-svaret sendes.
* Nytt: Spoof-resistent deteksjon av klient-IP. `Captcha_Core::get_client_ip()` (kilden til sannhet for rate-limit-bøtte-nøkler, captcha siteverify `remoteip`, og statistikk IP-hasher) håndhever nå en streng tillitsmodell: REMOTE_ADDR er gulvet, `CF-Connecting-IP` respekteres bare når den umiddelbare peer-en er inne i et gjeldende Cloudflare IP-område, og `X-Forwarded-For` respekteres bare når den umiddelbare peer-en er i den admin-konfigurerte trusted-proxy-listen, med en venstre-til-høyre-gjennomgang som hopper over betrodde/CF-hopp før den lander på besøkendes IP.
* Nytt: `cap_trust_cloudflare_headers` innstilling (standard AV) — velg å stole på `CF-Connecting-IP` når du er bak Cloudflare. Pluginet inkluderer et bundlet Cloudflare CIDR-øyeblikksbilde og oppdaterer det ukentlig via wp-cron med et bundlet fallback dersom oppdateringen feiler.
* Nytt: `cap_trusted_proxies` innstilling — et textarea for CIDR-er eller rene IP-adresser (én per linje, `#` kommentarer tillatt) som lister opp dine egne front-line proxyer / last-balansere. Uten dette ignoreres `X-Forwarded-For` selv når ratebegrenseren er aktivert.
* Nytt: Automatisk deteksjon av sannsynlig Cloudflare / proxy-oppsett ved første aktivering, med en "Bruk detekterte innstillinger"-admin-varsel med ett klikk. Pluginet overskriver aldri dine lagrede verdier; hvis påfølgende trafikk antyder at konfigurasjonen din ikke lenger samsvarer med virkeligheten (f.eks. at Cloudflare har endret CIDR-områder og din proxy-CIDR nå er utdatert), vises et ikke-avvisbart avviksvarsel med anbefalt oppdatering.
* Rettet: Usynlig modus nedgraderer ikke lenger stille `cap_security_level` til FAST — adminens konfigurerte nivå blir respektert. Et nytt `wu_cap_server_security_level` filter er tilgjengelig for nettsteder som ønsker skreddersydd logikk.
* Rettet: Statistikk-telleren `rate_limits_triggered` øker nå ved hver blokkering, ikke bare på den sjeldne post-suksess backstop-veien.
* Rettet: `Captcha_Core::get_client_ip()` er nå den eneste kilden til sannhet for besøkendes IP-tilskrivning på tvers av ratebegrenseren, captcha-leverandører (reCAPTCHA + hCaptcha `siteverify`), og statistikk — dette lukker et spoofing-vektor der direkte origin-server-forespørsler med et forfalsket `CF-Connecting-IP`-header ville blitt gruppert etter den forfalskede IP-en i stedet for den virkelige peer-en.
* Rettet: WooCommerce klassisk checkout rate-limit gate utløses nå på `template_redirect` (prioritet 1) i stedet for `woocommerce_before_checkout_form`. Form-nivå hooken utløses aldri når handlekurven er tom, så trafikk som aldri legger til et produkt, omgikk begrensningen fullstendig.
* Rettet: WooCommerce pay-for-order rate-limit gate utløses nå på `template_redirect` i stedet for `woocommerce_before_pay_action`. Sistnevnte utløses først etter at `wp_verify_nonce('woocommerce-pay')` lykkes, noe som betyr at uautoriserte angripere (det faktiske trusselbildet) aldri utløste begrensningen.
* Rettet: WooCommerce Store API (blocks) checkout rate-limit gate utløses nå på `rest_pre_dispatch` i stedet for `woocommerce_store_api_checkout_update_order_from_request`. Sistnevnte utløses bare etter at Store API validerer handlekurv- og faktureringsfeltene, så uautoriserte bots fikk en 400 fra validator og utløste aldri begrensningen.
* Rettet: Ultimate Multisite inline-login rate-limit gate utløses nå på `wu_ajax_nopriv_wu_inline_login` prioritet 1 (og den innloggede speilingen) i stedet for `wu_before_inline_login`. Sistnevnte utløses bare etter at `check_ajax_referer('wu_checkout')` lykkes, så uautoriserte bots uten et gyldig wu_checkout nonce fikk en 403 og utløste aldri begrensningen.
* Rettet: `Rate_Limiter::enforce()` anvender nå en "én gang per forespørsel"-beskyttelse nøklet etter `surface|ip`, slik at upstream hooks som utløses to ganger per gjengivelse (spesielt `wu_setup_checkout` i Ultimate Multisite) ikke lenger halverer den effektive rate-limit-terskelen.
* Rettet: Rate-limit-overflate-porter konsulterer ikke lenger `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Dette filteret signaliserer "captcha håndtert av en annen overflate" og er ortogonalt til flomvern — WooCommerce-integrasjonen hooket det til for å hoppe over WordPress-påloggings-captcha når et Woo nonce var til stede, noe som førte til at rate-tellingen ble påvirket og lot Woo POST-er unngå begrensningen. Det rate-limit-spesifikke `wu_cap_rate_limit_whitelist_ip` filteret er den eneste omgåelsen som nå gjelder.

Versjon: 1.3.2 - Utgitt 2026-01-27
* Rettet: Cap widget vises ikke på checkout-skjemaer som bruker Elementor eller andre page builders
* Rettet: cap-widget custom element blir fjernet av wp_kses() sanitering
* Forbedret: Bruk av kallbar innhold for captcha-felt på checkout for å omgå HTML-filtrering
* Forbedret: Forenklet JavaScript med fallback for kanttilfeller

Versjon: 1.3.1 - Utgitt 2026-01-26
* Rettet: Cap Captcha usynlig modus løser ikke lenger automatisk på dynamiske Ultimate Multisite checkout-skjemaer
* Forbedret: Cap checkout-skriptet bruker nå MutationObserver for å oppdage dynamisk lastede widgets
* Forbedret: Lagt til avskjæring av checkout-knappen for å vente på token før innsending

Versjon: 1.3.0 - Utgitt 2026-01-27
* Nytt: WooCommerce Blocks checkout-integrasjon med Store API fetch interception
* Nytt: Usynlig captcha-støtte for WooCommerce checkout (hCaptcha usynlig, reCAPTCHA v2 usynlig, v3)
* Nytt: Egen innstillingsside for bruk uten Ultimate Multisite
* Nytt: Jetpack Autoloader for å forhindre avhengighetskonflikter
* Rettet: hCaptcha vises ikke på dynamisk Ultimate Multisite checkout (AJAX-lastet innhold)
* Rettet: Captcha oppdateres/tilbakestilles ikke når det oppstår feil ved skjema-validering
* Rettet: hCaptcha vises ikke på WooCommerce checkout-side
* Rettet: reCAPTCHA class not found error (lagt til google/recaptcha PHP-bibliotek)
* Forbedret: Feildeteksjon via WordPress hooks, MutationObserver og AJAX interception
* Forbedret: Innstillingsbeskrivelser inkluderer nå dashboard-URL-er for API-nøkler

Versjon: 1.2.2 - Utgitt 2026-01-24
* Rettet: Captcha vises ikke på Ultimate Multisite Login Form Element (form filter name mismatch)
* Rettet: Cap widget HTML blir fjernet av wp_kses() sanitering
* Rettet: JavaScript-selektorer finner ikke skjemaer med skråstreker i element-ID-er
* Lagt til: Filter hook `wu_kses_allowed_html` for classaddons for å utvide tillatte HTML-tagger
* Fjernet: Døde kode JavaScript-filer erstattet med leverandørspesifikke skript

Versjon: 1.2.1 - Utgitt 2026-01-23

* Rettet: Cap Captcha token-validering feiler i multisite-miljøer (bruker nå nettverksomfattende transients)
* Rettet: Captcha vises nå konsistent for alle brukere uavhengig av påloggingsstatus
* Rettet: Mismatch mellom captcha-gjengivelse og validering som forårsaket checkout-feil

Versjon: 1.2.0 - Utgitt 2026-01-21

* Nytt: Cap Captcha - selvhostet proof-of-work captcha, aktivert som standard ved aktivering
* Nytt: Null-konfigurasjonsbeskyttelse - aktiver addonet og du er umiddelbart beskyttet
* Nytt: Polymorf captcha-leverandørarkitektur for enkel utvidbarhet
* Nytt: WooCommerce Store API checkout-beskyttelse mot korttestingangrep
* Nytt: Statistikksporingsdashboard som viser utfordringer, verifiseringer og blokkerte angrep
* Nytt: Sikkerhetsnivå-presets (Fast, Medium, Max) for Cap Captcha vanskelighetsgrad
* Nytt: Abstrakt baseklasser for reCAPTCHA og hCaptcha-leverandører
* Forbedret: Omskrev kodebasen til modulære leverandørklasser
* Forbedret: Bedre separasjon av bekymringer med dedikert manager-klasse
* Rettet: Sikkerhetsforbedringer for $_SERVER variabel-sanering
* Rettet: PHPUnit testkonfigurasjon for WordPress navnekonvensjoner

Versjon: 1.0.1 - Utgitt 2025-09-28

* Endret prefiks til ultimate-multisite; oppdaterte tekstdomene; versjonsøkning.
