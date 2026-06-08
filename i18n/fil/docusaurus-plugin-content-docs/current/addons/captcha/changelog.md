---
title: Pagbabago sa Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog

Version: 1.5.0 - Released on 2026-05-22
* New: Hard-stop rate limiter — nagbibilang na ngayon ng bawat GET at POST sa mga pahina na pinoprotektahan ng captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) at nagre-reply ng HTTP 429, isang `Retry-After` header, at isang random na pagpapabagal (tarpit sleep) (1–5s, may maximum na 15s).
* New: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` settings para ma-tune ang window ng tarpit.
* New: `wu_cap_rate_limit_whitelist_ip` filter para makapag-exempt ng mga pinagkakatiwalaang IP range.
* New: `wu_cap_rate_limit_will_block` action na tumatakbo kaagad bago ipadala ang hard-stop response.
* New: Client-IP detection na hindi madaling dayain (spoof-resistant). Ang `Captcha_Core::get_client_ip()` (ang pinagmumulan ng katotohanan para sa mga susi ng rate-limit bucket, captcha siteverify `remoteip`, at statistics IP hashes) ay nagpapatupad na ngayon ng mahigpit na modelo ng pagtitiwala: Ang `REMOTE_ADDR` ang basehan, ang `CF-Connecting-IP` ay kinikilala lamang kapag ang kaagad na peer ay nasa kasalukuyang Cloudflare IP range, at ang `X-Forwarded-For` ay kinikilala lamang kapag ang kaagad na peer ay nasa listahan ng trusted-proxy na naka-configure sa admin, na may paglalakbay mula kanan patungong kaliwa na tumatalon sa mga trusted/CF hops bago mag-settle sa IP ng bisita.
* New: `cap_trust_cloudflare_headers` setting (default OFF) — opsyon na magtiwala sa `CF-Connecting-IP` kapag nasa likod ng Cloudflare. Nagdadala ang plugin ng isang naka-bundle na Cloudflare CIDR snapshot at ina-refresh ito linggu-linggo via wp-cron na may naka-bundle na fallback kung mabigo ang refresh.
* New: `cap_trusted_proxies` setting — textarea ng mga CIDR o bare IPs (isa bawat linya, pinapayagan ang `#` comments) na naglilista ng sarili mong front-line proxies / load-balancers. Kung wala ito, hindi ginagamit ang `X-Forwarded-For` kahit na naka-enable ang rate limiter.
* New: Unang-beses na auto-detection ng posibleng Cloudflare / proxy posture na may isang-click na "Apply detected settings" admin notice. Hindi kailanman binabago ng plugin ang iyong na-save na values; kung ang susunod na traffic ay nagpapahiwatig na hindi na tugma ang iyong config sa kasalukuyang sitwasyon (halimbawa, nagbago ang Cloudflare CIDR ranges at luma na ang iyong proxy CIDR), may lalabas na hindi ma-dismiss na notice na nagrerekomenda ng update.
* Fixed: Ang invisible mode ay hindi na tahimik na ibinababa ang `cap_security_level` sa FAST — ang level na naka-configure ng admin ang ginagamit. May bagong `wu_cap_server_security_level` filter para sa mga site na gustong magkaroon ng sariling logic.
* Fixed: Ang counter na `rate_limits_triggered` sa Statistics ay nag-iincrement na ngayon sa bawat block, hindi lang sa bihira na post-success backstop path.
* Fixed: Ang `Captcha_Core::get_client_ip()` ay ngayon ang iisang pinagmulan ng katotohanan para sa pagtukoy ng IP ng bisita sa buong rate limiter, mga captcha provider (reCAPTCHA + hCaptcha `siteverify`), at statistics — isinasara nito ang isang spoofing vector kung saan ang mga direktang origin-server requests na may pekeng `CF-Connecting-IP` header ay maaaring ma-bucket ng pekeng IP sa halip na ng tunay na peer.
* Fixed: Ang rate-limit gate para sa classic checkout ng WooCommerce ay tumatakbo na ngayon sa `template_redirect` (priority 1) sa halip na `woocommerce_before_checkout_form`. Ang form-level hook ay hindi kailanman tumatakbo kapag walang laman ang cart, kaya ang flood traffic na hindi nagdadagdag ng produkto ay nakakalampas sa limiter.
* Fixed: Ang rate-limit gate para sa pay-for-order ng WooCommerce ay tumatakbo na ngayon sa `template_redirect` sa halip na `woocommerce_before_pay_action`. Ang huli ay tumatakbo lamang pagkatapos maging matagumpay ang `wp_verify_nonce('woocommerce-pay')`, na nangangahulugang ang mga hindi awtorisadong attacker (ang aktwal na threat model) ay hindi kailanman nag-trigger ng limiter.
* Fixed: Ang rate-limit gate para sa WooCommerce Store API (blocks) checkout ay tumatakbo na ngayon sa `rest_pre_dispatch` sa halip na `woocommerce_store_api_checkout_update_order_from_request`. Ang huli ay tumatakbo lamang pagkatapos i-validate ng Store API ang cart at billing fields, kaya ang mga hindi awtorisadong bot ay nakakuha ng 400 mula sa validator at hindi kailanman nag-trip ng limiter.
* Fixed: Ang rate-limit gate para sa Ultimate Multisite inline-login ay tumatakbo na ngayon sa `wu_ajax_nopriv_wu_inline_login` priority 1 (at ang logged-in mirror) sa halip na `wu_before_inline_login`. Ang huli ay tumatakbo lamang pagkatapos maging matagumpay ang `check_ajax_referer('wu_checkout')`, kaya ang mga hindi awtorisadong bot na walang valid wu_checkout nonce ay nakakuha ng 403 at hindi kailanman nag-trip ng limiter.
* Fixed: Ang `Rate_Limiter::enforce()` ay naglalapat na ngayon ng isang once-per-request guard na naka-key sa `surface|ip`, kaya ang mga upstream hooks na tumatakbo nang dalawang beses bawat render (kapansin-pansin ang `wu_setup_checkout` sa Ultimate Multisite) ay hindi na nagpapababa sa epektibong rate-limit threshold.
* Fixed: Ang mga rate-limit surface gate ay hindi na kumukonsulta sa `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Ang filter na iyon ay nagpapahiwatig na "captcha ay naproseso na ng ibang surface" at ito ay hiwalay sa flood protection — ang WooCommerce integration ay ikinonekta ito para laktawan ang WordPress login captcha kapag may Woo nonce, na nagdulot ng pagbaba sa rate counting at nagpahintulot sa mga Woo POST na makalampas sa limiter. Ang `wu_cap_rate_limit_whitelist_ip` filter na partikular sa rate-limit ang tanging bypass na gumagana ngayon.

Version: 1.3.2 - Released on 2026-01-27
* Fixed: Hindi nagre-render ang Cap widget sa mga checkout form na gumagamit ng Elementor o iba pang page builders
* Fixed: Ang custom element ng cap-widget ay tinatanggal ng wp_kses() sanitization
* Improved: Gumamit ng callable content para sa captcha field sa checkout upang makaiwas sa HTML filtering
* Improved: Pinasimple ang JavaScript na may fallback para sa mga edge case

Version: 1.3.1 - Released on 2026-01-26
* Fixed: Ang invisible mode ng Cap Captcha ay hindi na awtomatikong nagso-solve sa dynamic Ultimate Multisite checkout forms
* Improved: Ang Cap checkout script ay gumagamit na ngayon ng MutationObserver para matukoy ang mga dynamic na na-load na widgets
* Improved: Nagdagdag ng checkout button interception para maghintay ng token bago mag-submit

Version: 1.3.0 - Released on 2026-01-27
* New: WooCommerce Blocks checkout integration na may Store API fetch interception
* New: Invisible captcha support para sa WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* New: Standalone settings page para magamit nang walang Ultimate Multisite
* New: Jetpack Autoloader para maiwasan ang dependency conflict
* Fixed: Hindi nagre-render ang hCaptcha sa dynamic Ultimate Multisite checkout (AJAX-loaded content)
* Fixed: Hindi nagre-refresh/nagre-reset ang Captcha kapag nagkaroon ng form validation errors
* Fixed: Hindi nagpapakita ang hCaptcha sa WooCommerce checkout page
* Fixed: Error na 'reCAPTCHA class not found' (nagdagdag ng google/recaptcha PHP library)
* Improved: Pag-detect ng error sa pamamagitan ng WordPress hooks, MutationObserver, at AJAX interception
* Improved: Ang mga deskripsyon ng settings ay naglalaman na ngayon ng dashboard URLs para sa mga API keys

Version: 1.2.2 - Released on 2026-01-24
* Fixed: Hindi nagpapakita ang Captcha sa Ultimate Multisite Login Form Element (maling pangalan ng form filter)
* Fixed: Ang HTML ng Cap widget ay tinatanggal ng wp_kses() sanitization
* Fixed: Ang JavaScript selectors ay hindi makahanap ng mga form na may slash sa element IDs
* Added: Filter hook `wu_kses_allowed_html` para sa classaddons para palawakin ang mga pinapayagang HTML tags
* Removed: Mga dead code JavaScript files na pinalitan ng provider-specific scripts

Version: 1.2.1 - Released on 2026-01-23

* Fixed: Pagkabigo ng Cap Captcha token validation sa multisite environments (gumagamit na ngayon ng network-wide transients)
* Fixed: Ang Captcha ay nagre-render na ngayon nang pare-pareho para sa lahat ng user anuman ang status ng login
* Fixed: Pagkakaiba sa pagitan ng captcha rendering at validation na nagdulot ng mga pagkabigo sa checkout

Version: 1.2.0 - Released on 2026-01-21

* New: Cap Captcha - self-hosted proof-of-work captcha, naka-enable by default sa activation
* New: Zero-configuration protection - i-activate lang ang addon at protektado ka agad
* New: Polymorphic captcha provider architecture para sa madaling pagpapalawak
* New: WooCommerce Store API checkout protection laban sa card testing attacks
* New: Statistics tracking dashboard na nagpapakita ng mga challenge, verifications, at mga na-block na attacks
* New: Security level presets (Fast, Medium, Max) para sa hirap ng Cap Captcha
* New: Abstract base classes para sa reCAPTCHA at hCaptcha providers
* Improved: Inayos ang codebase sa modular provider classes
* Improved: Mas magandang paghihiwalay ng concerns sa dedicated manager class
* Fixed: Pagpapabuti ng seguridad para sa $_SERVER variable sanitization
* Fixed: PHPUnit test configuration para sa WordPress naming conventions

Version: 1.0.1 - Released on 2025-09-28

* Binago ang prefix sa ultimate-multisite; in-update ang text domain; version bump.
