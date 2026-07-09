---
title: Captcha Cov kev hloov tshiab
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Daim ntawv hloov tshiab Captcha {#captcha-changelog}

Version: 1.5.0 - Tso tawm rau 2026-05-22
* Tshiab: Hard-stop rate limiter — suav txhua GET thiab POST ntawm cov thaj chaw uas tiv thaiv nrog captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) thiab teb nrog HTTP 429, ib lub `Retry-After` header, thiab ib qho tarpit sleep uas randomised (1–5s, hard-capped rau 15s).
* Tshiab: Cov kev teeb tsa `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` los kho lub tarpit window.
* Tshiab: `wu_cap_rate_limit_whitelist_ip` filter los zam cov IP ranges uas ntseeg tau.
* Tshiab: `wu_cap_rate_limit_will_block` action uas khiav tam sim ua ntej xa hard-stop response.
* Tshiab: Kev txheeb client-IP uas tiv spoof. `Captcha_Core::get_client_ip()` (qhov source of truth rau rate-limit bucket keys, captcha siteverify `remoteip`, thiab statistics IP hashes) tam sim no yuam ib qho trust model nruj: REMOTE_ADDR yog lub hauv paus, `CF-Connecting-IP` tsuas raug hwm thaum tus immediate peer nyob hauv Cloudflare IP range tam sim no, thiab `X-Forwarded-For` tsuas raug hwm thaum tus immediate peer nyob hauv admin-configured trusted-proxy list, nrog kev taug ntawm sab xis mus sab laug uas hla trusted/CF hops ua ntej txiav txim rau visitor IP.
* Tshiab: `cap_trust_cloudflare_headers` setting (default OFF) — xaiv cia siab rau `CF-Connecting-IP` thaum nyob tom qab Cloudflare. Lub plugin nqa ib bundled Cloudflare CIDR snapshot thiab refresh nws txhua lub lim tiam ntawm wp-cron nrog bundled fallback yog tias refresh tsis ua tiav.
* Tshiab: `cap_trusted_proxies` setting — textarea rau CIDRs lossis bare IPs (ib kab ib qho, tso cai rau `#` comments) uas sau koj cov front-line proxies / load-balancers. Yog tsis muaj qhov no, `X-Forwarded-For` yuav raug tsis quav ntsej txawm tias rate limiter qhib lawm.
* Tshiab: Thaum qhib thawj zaug, auto-detection nrhiav tau Cloudflare / proxy posture uas yuav yog, nrog ib-nias "Siv cov settings uas pom tau" admin notice. Lub plugin yeej tsis overwrite koj cov values uas khaws tseg; yog tias traffic tom qab qhia tias koj config tsis phim qhov tseeb lawm (piv txwv Cloudflare hloov CIDR ranges thiab koj proxy CIDR tam sim no laus lawm), ib qho mismatch notice uas dismiss tsis tau yuav tshwm nrog qhov recommended update.
* Kho lawm: Invisible mode tsis silently downgrade `cap_security_level` mus rau FAST lawm — theem uas admin teeb tseg raug hwm. Muaj ib lub `wu_cap_server_security_level` filter tshiab rau cov site uas xav tau logic tshwj xeeb.
* Kho lawm: Statistics `rate_limits_triggered` counter tam sim no nce rau txhua block, tsis yog tsuas yog ntawm txoj post-success backstop path uas tsis tshua tshwm.
* Kho lawm: `Captcha_Core::get_client_ip()` tam sim no yog tib source of truth rau kev muab visitor IP attribution thoob plaws rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), thiab statistics — kaw ib qho spoofing vector uas cov direct origin-server requests uas nqa ib lub `CF-Connecting-IP` header cuav yuav tau bucketed los ntawm IP uas spoofed es tsis yog tus real peer.
* Kho lawm: WooCommerce classic checkout rate-limit gate tam sim no khiav ntawm `template_redirect` (priority 1) es tsis yog `woocommerce_before_checkout_form`. Form-level hook yeej tsis khiav thaum cart khoob, yog li flood traffic uas tsis tau ntxiv product li tau bypass limiter tag nrho.
* Kho lawm: WooCommerce pay-for-order rate-limit gate tam sim no khiav ntawm `template_redirect` es tsis yog `woocommerce_before_pay_action`. Qhov tom qab tsuas khiav tom qab `wp_verify_nonce('woocommerce-pay')` ua tiav, uas txhais tias unauth attackers (tus threat model tiag) yeej tsis trigger limiter.
* Kho lawm: WooCommerce Store API (blocks) checkout rate-limit gate tam sim no khiav ntawm `rest_pre_dispatch` es tsis yog `woocommerce_store_api_checkout_update_order_from_request`. Qhov tom qab tsuas khiav tom qab Store API validate cart thiab billing fields, yog li unauth bots tau 400 los ntawm validator thiab yeej tsis trip limiter.
* Kho lawm: Ultimate Multisite inline-login rate-limit gate tam sim no khiav ntawm `wu_ajax_nopriv_wu_inline_login` priority 1 (thiab logged-in mirror) es tsis yog `wu_before_inline_login`. Qhov tom qab tsuas khiav tom qab `check_ajax_referer('wu_checkout')` ua tiav, yog li unauth bots uas tsis muaj valid wu_checkout nonce tau 403 thiab yeej tsis trip limiter.
* Kho lawm: `Rate_Limiter::enforce()` tam sim no siv once-per-request guard uas keyed los ntawm `surface|ip`, yog li upstream hooks uas khiav ob zaug rau ib render (tshwj xeeb `wu_setup_checkout` hauv Ultimate Multisite) tsis halve effective rate-limit threshold lawm.
* Kho lawm: Rate-limit surface gates tsis consult `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) lawm. Filter ntawd qhia tias "captcha twb handled los ntawm lwm surface lawm" thiab tsis cuam tshuam rau flood protection — WooCommerce integration tau hook nws los hla WordPress login captcha thaum muaj Woo nonce, uas ntws mus rau rate counting thiab cia Woo POSTs zam limiter. Rate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter yog tib bypass uas tam sim no siv tau.

Version: 1.3.2 - Tso tawm rau 2026-01-27
* Kho lawm: Cap widget tsis render ntawm checkout forms uas siv Elementor lossis lwm page builders
* Kho lawm: cap-widget custom element raug tshem los ntawm wp_kses() sanitization
* Txhim kho: Siv callable content rau checkout captcha field kom bypass HTML filtering
* Txhim kho: Ua JavaScript yooj yim dua nrog fallback rau edge cases

Version: 1.3.1 - Tso tawm rau 2026-01-26
* Kho lawm: Cap Captcha invisible mode tsis auto-solving ntawm dynamic Ultimate Multisite checkout forms
* Txhim kho: Cap checkout script tam sim no siv MutationObserver los txheeb xyuas widgets uas loaded dynamically
* Txhim kho: Ntxiv checkout button interception kom tos token ua ntej submission

Version: 1.3.0 - Tso tawm rau 2026-01-27
* Tshiab: WooCommerce Blocks kev sib txuas checkout nrog Store API fetch interception
* Tshiab: Kev txhawb captcha uas tsis pom rau WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Tshiab: Nplooj settings nyob nws tus kheej siv tau yam tsis muaj Ultimate Multisite
* Tshiab: Jetpack Autoloader los tiv thaiv dependency sib tsoo
* Kho lawm: hCaptcha tsis render rau Ultimate Multisite checkout dynamic (cov ntsiab lus thauj los ntawm AJAX)
* Kho lawm: Captcha tsis refresh/reset thaum muaj form validation yuam kev
* Kho lawm: hCaptcha tsis tshwm rau WooCommerce checkout page
* Kho lawm: reCAPTCHA class not found error (ntxiv google/recaptcha PHP library lawm)
* Txhim kho: Kev ntes yuam kev dhau WordPress hooks, MutationObserver, thiab AJAX interception
* Txhim kho: Cov lus piav settings tam sim no muaj dashboard URLs rau API keys

Version: 1.2.2 - Tso tawm rau 2026-01-24
* Kho lawm: Captcha tsis tso tawm rau Ultimate Multisite Login Form Element (form filter name tsis phim)
* Kho lawm: Cap widget HTML raug tshem tawm los ntawm wp_kses() sanitization
* Kho lawm: JavaScript selectors nrhiav tsis tau forms uas muaj slashes hauv element IDs
* Ntxiv: Filter hook `wu_kses_allowed_html` rau classaddons kom nthuav tau allowed HTML tags
* Tshem tawm: Cov ntaub ntawv JavaScript code tuag raug hloov los ntawm scripts tshwj xeeb raws provider

Version: 1.2.1 - Tso tawm rau 2026-01-23

* Kho lawm: Cap Captcha token validation poob hauv multisite environments (tam sim no siv network-wide transients)
* Kho lawm: Captcha tam sim no render sib xws rau txhua tus neeg siv txawm login status yog li cas los xij
* Kho lawm: Kev tsis phim ntawm captcha rendering thiab validation uas ua rau checkout failures

Version: 1.2.0 - Tso tawm rau 2026-01-21

* Tshiab: Cap Captcha - captcha proof-of-work uas host tus kheej, qhib los ntawm default thaum activation
* Tshiab: Kev tiv thaiv tsis tas configure - activate addon ces koj raug tiv thaiv tam sim ntawd
* Tshiab: Polymorphic captcha provider architecture kom nthuav tau yooj yim
* Tshiab: WooCommerce Store API checkout kev tiv thaiv tawm tsam card testing attacks
* Tshiab: Dashboard taug qab statistics qhia challenges, verifications, thiab blocked attacks
* Tshiab: Security level presets (Fast, Medium, Max) rau Cap Captcha difficulty
* Tshiab: Abstract base classes rau reCAPTCHA thiab hCaptcha providers
* Txhim kho: Refactor codebase mus ua modular provider classes
* Txhim kho: Cais cov haujlwm kom zoo dua nrog manager class tshwj xeeb
* Fixed: Security improvements for $_SERVER variable sanitization
* Kho lawm: PHPUnit test configuration rau WordPress naming conventions

Version: 1.0.1 - Tso tawm rau 2025-09-28

* Hloov npe prefix mus rau ultimate-multisite; hloov text domain; nce version.
