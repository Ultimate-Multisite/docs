---
title: Talaan ng Pagbabago ng Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Tala ng Pagbabago ng Captcha

Bersyon: 1.5.0 - Inilabas noong 2026-05-22
* Bago: Hard-stop rate limiter — binibilang ang bawat GET at POST sa mga surface na protektado ng captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) at tumutugon gamit ang HTTP 429, isang `Retry-After` header, at isang randomized na tarpit sleep (1–5s, hard-capped sa 15s).
* Bago: Mga setting na `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` para i-tune ang tarpit window.
* Bago: `wu_cap_rate_limit_whitelist_ip` filter para i-exempt ang mga pinagkakatiwalaang IP range.
* Bago: `wu_cap_rate_limit_will_block` action na nagfa-fire kaagad bago ipadala ang hard-stop response.
* Bago: Spoof-resistant na pagtukoy ng client-IP. Ipinapatupad na ngayon ng `Captcha_Core::get_client_ip()` (ang source of truth para sa mga rate-limit bucket key, captcha siteverify `remoteip`, at mga statistics IP hash) ang isang mahigpit na trust model: REMOTE_ADDR ang floor, iginagalang lang ang `CF-Connecting-IP` kapag ang immediate peer ay nasa loob ng kasalukuyang Cloudflare IP range, at iginagalang lang ang `X-Forwarded-For` kapag ang immediate peer ay nasa admin-configured na trusted-proxy list, na may right-to-left walk na nilalaktawan ang mga trusted/CF hop bago pumirmi sa visitor IP.
* Bago: `cap_trust_cloudflare_headers` setting (default OFF) — mag-opt in sa `CF-Connecting-IP` trust kapag nasa likod ng Cloudflare. May kasamang bundled Cloudflare CIDR snapshot ang plugin at nire-refresh ito lingguhan sa pamamagitan ng wp-cron na may bundled fallback kung mabigo ang refresh.
* Bago: `cap_trusted_proxies` setting — textarea ng mga CIDR o bare IP (isa bawat linya, pinapayagan ang mga komentong `#`) na naglilista ng sarili mong front-line proxies / load-balancers. Kung wala ito, binabalewala ang `X-Forwarded-For` kahit naka-enable ang rate limiter.
* Bago: First-enable na auto-detection ng posibleng Cloudflare / proxy posture na may one-click na "Ilapat ang natukoy na mga setting" admin notice. Hindi kailanman ino-overwrite ng plugin ang iyong mga naka-save na value; kung ipinahihiwatig ng susunod na traffic na hindi na tumutugma sa realidad ang iyong config (hal. nagbago ang Cloudflare ng mga CIDR range at stale na ngayon ang iyong proxy CIDR), lalabas ang isang non-dismissable na mismatch notice na may inirerekomendang update.
* Naayos: Hindi na tahimik na dina-downgrade ng invisible mode ang `cap_security_level` sa FAST — iginagalang ang naka-configure na level ng admin. Available ang bagong `wu_cap_server_security_level` filter para sa mga site na gusto ng bespoke na logic.
* Naayos: Ang statistics `rate_limits_triggered` counter ay nag-i-increment na ngayon sa bawat block, hindi lang sa bihirang post-success backstop path.
* Naayos: Ang `Captcha_Core::get_client_ip()` na ngayon ang iisang source of truth para sa visitor IP attribution sa kabuuan ng rate limiter, mga captcha provider (reCAPTCHA + hCaptcha `siteverify`), at statistics — isinasara ang isang spoofing vector kung saan ang mga direktang origin-server request na may dalang pekeng `CF-Connecting-IP` header ay mailalagay sana sa bucket ayon sa na-spoof na IP sa halip na sa totoong peer.
* Naayos: Ang WooCommerce classic checkout rate-limit gate ay nagfa-fire na ngayon sa `template_redirect` (priority 1) sa halip na `woocommerce_before_checkout_form`. Hindi kailanman nagfa-fire ang form-level hook kapag walang laman ang cart, kaya ang flood traffic na hindi kailanman nagdaragdag ng produkto ay ganap na nakakalusot sa limiter.
* Naayos: Ang WooCommerce pay-for-order rate-limit gate ay nagfa-fire na ngayon sa `template_redirect` sa halip na `woocommerce_before_pay_action`. Nagfa-fire lang ang huli pagkatapos magtagumpay ang `wp_verify_nonce('woocommerce-pay')`, na nangangahulugang hindi kailanman na-trigger ng mga unauth attacker (ang aktuwal na threat model) ang limiter.
* Naayos: Ang WooCommerce Store API (blocks) checkout rate-limit gate ay nagfa-fire na ngayon sa `rest_pre_dispatch` sa halip na `woocommerce_store_api_checkout_update_order_from_request`. Nagfa-fire lang ang huli pagkatapos i-validate ng Store API ang cart at billing fields, kaya nakakatanggap ang mga unauth bot ng 400 mula sa validator at hindi kailanman nati-trigger ang limiter.
* Naayos: Ang Ultimate Multisite inline-login rate-limit gate ay nagfa-fire na ngayon sa `wu_ajax_nopriv_wu_inline_login` priority 1 (at ang logged-in mirror) sa halip na `wu_before_inline_login`. Nagfa-fire lang ang huli pagkatapos magtagumpay ang `check_ajax_referer('wu_checkout')`, kaya ang mga unauth bot na walang valid na wu_checkout nonce ay nakakatanggap ng 403 at hindi kailanman nati-trigger ang limiter.
* Naayos: Nag-a-apply na ngayon ang `Rate_Limiter::enforce()` ng once-per-request guard na naka-key sa `surface|ip`, kaya ang mga upstream hook na nagfa-fire nang dalawang beses bawat render (lalo na ang `wu_setup_checkout` sa Ultimate Multisite) ay hindi na hinahati sa kalahati ang epektibong rate-limit threshold.
* Naayos: Hindi na kinokonsulta ng mga rate-limit surface gate ang `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Ang filter na iyon ay nagsesenyas ng "nahawakan na ang captcha ng ibang surface" at hiwalay sa flood protection — kinakabit ito ng WooCommerce integration para laktawan ang WordPress login captcha kapag may Woo nonce, na umagos sa rate counting at nagpa-iwas sa mga Woo POST sa limiter. Ang rate-limit-specific na `wu_cap_rate_limit_whitelist_ip` filter ang tanging bypass na nalalapat ngayon.

Bersyon: 1.3.2 - Inilabas noong 2026-01-27
* Naayos: Hindi nagre-render ang Cap widget sa mga checkout form na gumagamit ng Elementor o ibang page builders
* Naayos: Natatanggal ang cap-widget custom element ng wp_kses() sanitization
* Pinahusay: Gumamit ng callable content para sa checkout captcha field upang malampasan ang HTML filtering
* Pinahusay: Pinasimpleng JavaScript na may fallback para sa mga edge case

Bersyon: 1.3.1 - Inilabas noong 2026-01-26
* Naayos: Hindi nag-a-auto-solve ang Cap Captcha invisible mode sa mga dynamic na Ultimate Multisite checkout form
* Pinahusay: Gumagamit na ngayon ang Cap checkout script ng MutationObserver para matukoy ang mga dynamically loaded widget
* Pinahusay: Nagdagdag ng checkout button interception para maghintay ng token bago ang submission

Version: 1.3.0 - Inilabas noong 2026-01-27
* Bago: Integrasyon ng WooCommerce Blocks checkout na may pagharang sa Store API fetch
* Bago: Suporta sa invisible captcha para sa WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Bago: Hiwalay na pahina ng settings para gamitin nang walang Ultimate Multisite
* Bago: Jetpack Autoloader para sa pag-iwas sa salungatan ng dependency
* Inayos: hCaptcha hindi nagre-render sa dynamic na Ultimate Multisite checkout (nilalamang na-load sa AJAX)
* Inayos: Captcha hindi nagre-refresh/nagre-reset kapag may mga error sa pagpapatunay ng form
* Inayos: hCaptcha hindi lumalabas sa pahina ng WooCommerce checkout
* Inayos: reCAPTCHA class not found error (idinagdag ang google/recaptcha PHP library)
* Pinahusay: Pagtukoy ng error sa pamamagitan ng WordPress hooks, MutationObserver, at pagharang sa AJAX
* Pinahusay: Kasama na ngayon sa mga paglalarawan ng settings ang mga dashboard URL para sa API keys

Version: 1.2.2 - Inilabas noong 2026-01-24
* Inayos: Captcha hindi lumalabas sa Ultimate Multisite Login Form Element (hindi tugma ang pangalan ng form filter)
* Inayos: Cap widget HTML natatanggal ng wp_kses() sanitization
* Inayos: JavaScript selectors hindi nakakahanap ng mga form na may slash sa element IDs
* Idinagdag: Filter hook `wu_kses_allowed_html` para sa classaddons upang palawakin ang pinapayagang HTML tags
* Inalis: Patay na code JavaScript files na pinalitan ng mga script na espesipiko sa provider

Version: 1.2.1 - Inilabas noong 2026-01-23

* Inayos: Cap Captcha token validation pumapalya sa multisite environments (gumagamit na ngayon ng network-wide transients)
* Inayos: Captcha nagre-render na ngayon nang pare-pareho para sa lahat ng user anuman ang login status
* Inayos: Hindi pagtugma sa pagitan ng captcha rendering at validation na nagdulot ng mga pagkabigo sa checkout

Version: 1.2.0 - Inilabas noong 2026-01-21

* Bago: Cap Captcha - self-hosted na proof-of-work captcha, naka-enable bilang default sa activation
* Bago: Zero-configuration na proteksiyon - i-activate ang addon at protektado ka agad
* Bago: Polymorphic na arkitektura ng captcha provider para sa madaling pagpapalawak
* Bago: Proteksiyon sa WooCommerce Store API checkout laban sa mga card testing attack
* Bago: Dashboard sa pagsubaybay ng statistics na nagpapakita ng mga challenge, verification, at na-block na attack
* Bago: Mga preset ng security level (Fast, Medium, Max) para sa hirap ng Cap Captcha
* Bago: Abstract base classes para sa reCAPTCHA at hCaptcha providers
* Pinahusay: Ni-refactor ang codebase sa mga modular na provider class
* Pinahusay: Mas mahusay na paghihiwalay ng mga responsibilidad gamit ang nakatalagang manager class
* Fixed: Security improvements for $_SERVER variable sanitization
* Inayos: PHPUnit test configuration para sa WordPress naming conventions

Version: 1.0.1 - Inilabas noong 2025-09-28

* Palitan ang prefix sa ultimate-multisite; i-update ang text domain; dagdagan ang version.
