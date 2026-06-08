---
title: Pagbag-o sa Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Pagbag-o sa Captcha

Version: 1.5.0 - Gi-release niadtong 2026-05-22
* Bag-o: Hard-stop rate limiter — Gihitung ang matag GET ug POST sa mga pahilayo nga protektado sa captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ug mohatag og HTTP 429, usa ka `Retry-After` header, ug random sleep nga tarpit (1–5s, dili molapas sa 15s).
* Bag-o: Mga setting nga `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` aron ma-tune ang tarpit window.
* Bag-o: Filter nga `wu_cap_rate_limit_whitelist_ip` aron mapahimutang og eksepsyon sa mga gisaligan nga IP range.
* Bag-o: Action nga `wu_cap_rate_limit_will_block` nga mo-trigger pagadiilis dayon sa pagpadala sa hard-stop response.
* Bag-o: Client-IP detection nga resistant sa spoofing. Ang `Captcha_Core::get_client_ip()` (ang tinubdan sa kamatuoran alang sa rate-limit bucket keys, captcha siteverify `remoteip`, ug statistics IP hashes) karon nagpatuman og estriktong modelo sa pagsalig: Ang REMOTE_ADDR mao ang basehan, `CF-Connecting-IP` gisaligan lang kung ang immediate peer anaa sulod sa kasamtangang Cloudflare IP range, ug `X-Forwarded-For` gisaligan lang kung ang immediate peer naa sa admin-configured trusted-proxy list, pinaagi sa paglakaw gikan sa tuol paingon sa tuo nga magpabaya sa mga trusted/CF hops una mo-settle sa IP sa bisita.
* Bag-o: Setting nga `cap_trust_cloudflare_headers` (default OFF) — Pagpili sa pagsalig sa `CF-Connecting-IP` kung naa sa Cloudflare. Ang plugin nagdala og bundled Cloudflare CIDR snapshot ug gi-refresh kini matag semana pinaagi sa wp-cron uban ang bundled fallback kon mapakyas ang refresh.
* Bag-o: Setting nga `cap_trusted_proxies` — textarea sa mga CIDRs o bare IPs (usa kada linya, `#` comments gitugot) naglista sa imong kaugalingon nga front-line proxies / load-balancers. Kung walay kini, ang `X-Forwarded-For` gibalewala bisan pa kon naka-enable ang rate limiter.
* Bag-o: Unang pag-detect awtomatiko sa posibleng Cloudflare / proxy posture uban sa usa ka one-click nga "Apply detected settings" admin notice. Ang plugin dili gayud mag-overwrite sa imong na-save nga mga values; kon ang mosunod nga traffic nagpasabot nga ang imong config wala na magka-match sa kamatuoran (pananglitan, giusab sa Cloudflare ang CIDR ranges ug ang imong proxy CIDR kay daan na), usa ka non-dismissable mismatch notice ang mohatag sa girekomendar nga update.
* Naayo: Ang invisible mode dili na mapahimo og silent downgrade sa `cap_security_level` ngadto sa FAST — ang level nga gipili sa admin maoy gisunod. Usa ka bag-ong `wu_cap_server_security_level` filter nga magamit alang sa mga site nga nangandoy og bespoke logic.
* Naayo: Ang statistics `rate_limits_triggered` counter karon mo-increment sa matag block, dili lang sa rare post-success backstop path.
* Naayo: Ang `Captcha_Core::get_client_ip()` mao na karon ang bugtong tinubdan sa kamatuoran alang sa pag-atribute sa IP sa bisita sa tibuok rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), ug statistics — gipagsira kini ang usa ka spoofing vector diin ang direct origin-server requests nga nagdala og forged `CF-Connecting-IP` header mahimong ma-bucket sa spoofed IP imbis sa tinuod nga peer.
* Naayo: Ang WooCommerce classic checkout rate-limit gate karon mo-trigger sa `template_redirect` (priority 1) imbis pa sa `woocommerce_before_checkout_form`. Ang form-level hook dili gayud mo-trigger kon walay laman ang cart, busa ang flood traffic nga wala makdugang produkto milapas sa limiter.
* Naayo: Ang WooCommerce pay-for-order rate-limit gate karon mo-trigger sa `template_redirect` imbis pa sa `woocommerce_before_pay_action`. Kining ulahi lang mo-trigger pagkahuman magmalampuson ang `wp_verify_nonce('woocommerce-pay')`, nga nagpasabot nga ang mga unauth attackers (ang tinuod nga threat model) wala gayud makapa-trigger sa limiter.
* Naayo: Ang WooCommerce Store API (blocks) checkout rate-limit gate karon mo-trigger sa `rest_pre_dispatch` imbis pa sa `woocommerce_store_api_checkout_update_order_from_request`. Kining ulahi lang mo-trigger pagkahuman i-validate sa Store API ang cart ug billing fields, busa ang unauth bots nakakuha og 400 gikan sa validator ug wala gayud makapa-trip sa limiter.
* Naayo: Ang Ultimate Multisite inline-login rate-limit gate karon mo-trigger sa `wu_ajax_nopriv_wu_inline_login` priority 1 (ug ang logged-in mirror) imbis pa sa `wu_before_inline_login`. Kining ulahi lang mo-trigger pagkahuman magmalampuson ang `check_ajax_referer('wu_checkout')`, busa ang unauth bots nga walay balido nga wu_checkout nonce nakakuha og 403 ug wala gayud makapa-trip sa limiter.
* Naayo: Ang `Rate_Limiter::enforce()` karon nagtanyag og once-per-request guard nga gi-key pinaagi sa `surface|ip`, busa ang upstream hooks nga mo-trigger duha ka beses kada render (labi na ang `wu_setup_checkout` sa Ultimate Multisite) dili na makapahinlo sa effective rate-limit threshold.
* Naayo: Ang mga rate-limit surface gates dili na magkonsulta sa `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Kining filter nagpasabot og "captcha gi-handle na sa laing surface" ug orthogonal kini sa flood protection — ang WooCommerce integration naggamit niini aron malikayan ang WordPress login captcha kon naa'y Woo nonce, nga mi-leak ngadto sa rate counting ug nagtugot sa mga Woo POSTs nga molapas sa limiter. Ang `wu_cap_rate_limit_whitelist_ip` filter nga specific sa rate-limit mao ra ang bypass nga mo-apply karon.

Version: 1.3.2 - Gi-release niadtong 2026-01-27
* Naayo: Ang Cap widget dili na mag-render sa checkout forms nga naggamit og Elementor o ubang page builders
* Naayo: Ang cap-widget custom element gi-strip na sa wp_kses() sanitization
* Gi-improve: Paggamit og callable content alang sa captcha field sa checkout aron malikayan ang HTML filtering
* Gi-improve: Gipasimple ang JavaScript uban ang fallback para sa mga edge cases

Version: 1.3.1 - Gi-release niadtong 2026-01-26
* Naayo: Ang Cap Captcha invisible mode dili na mag-auto-solve sa dynamic Ultimate Multisite checkout forms
* Gi-improve: Ang Cap checkout script karon naggamit og MutationObserver aron ma-detect ang dynamically loaded widgets
* Gi-improve: Gipadugang ang checkout button interception aron maghulat alang sa token una sa pag-submit

Version: 1.3.0 - Gi-release niadtong 2026-01-27
* Bag-o: WooCommerce Blocks checkout integration uban sa Store API fetch interception
* Bag-o: Invisible captcha support para sa WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Bag-o: Standalone settings page alang sa paggamit nga walay Ultimate Multisite
* Bag-o: Jetpack Autoloader aron malikayan ang dependency conflict
* Naayo: hCaptcha dili na mag-render sa dynamic Ultimate Multisite checkout (AJAX-loaded content)
* Naayo: Ang Captcha wala na mo-refresh/reset kon adunay form validation errors
* Naayo: hCaptcha dili na makita sa WooCommerce checkout page
* Naayo: Error nga 'reCAPTCHA class not found' (gidugang ang google/recaptcha PHP library)
* Gi-improve: Pag-detect og error pinaagi sa WordPress hooks, MutationObserver, ug AJAX interception
* Gi-improve: Ang mga deskripsyon sa settings karon naglakip na og dashboard URLs alang sa API keys

Version: 1.2.2 - Gi-release niadtong 2026-01-24
* Naayo: Ang Captcha dili na magpakita sa Ultimate Multisite Login Form Element (form filter name mismatch)
* Naayo: Ang Cap widget HTML gi-strip pa gihapon sa wp_kses() sanitization
* Naayo: Ang JavaScript selectors wala na makakita og forms nga adunay slashes sa element IDs
* Gidugang: Filter hook `wu_kses_allowed_html` alang sa classaddons aron mapalapad ang gitugot nga HTML tags
* Gibawas: Mga dead code JavaScript files gipuli sa provider-specific scripts

Version: 1.2.1 - Gi-release niadtong 2026-01-23

* Naayo: Ang Cap Captcha token validation dili na magmalampuson sa multisite environments (karon naggamit og network-wide transients)
* Naayo: Ang Captcha karon nag-render nga consistent alang sa tanang users bisan unsa pa ang login status
* Naayo: Pagkalain tali sa captcha rendering ug validation nga nakapahinabo og checkout failures

Version: 1.2.0 - Gi-release niadtong 2026-01-21

* Bag-o: Cap Captcha - self-hosted proof-of-work captcha, naka-enable by default sa activation
* Bag-o: Zero-configuration protection - i-activate lang ang addon ug protektado ka dayon
* Bag-o: Polymorphic captcha provider architecture alang sa sayon nga pagpalapad (extensibility)
* Bag-o: WooCommerce Store API checkout protection batok sa card testing attacks
* Bag-o: Statistics tracking dashboard nga nagpakita og challenges, verifications, ug na-block nga attacks
* Bag-o: Security level presets (Fast, Medium, Max) alang sa kalisud sa Cap Captcha
* Bag-o: Abstract base classes para sa reCAPTCHA ug hCaptcha providers
* Gi-improve: Girestructure ang codebase ngadto sa modular provider classes
* Gi-improve: Mas maayo nga pagbulag sa concerns uban sa dedicated manager class
* Naayo: Security improvements alang sa $_SERVER variable sanitization
* Naayo: PHPUnit test configuration para sa WordPress naming conventions

Version: 1.0.1 - Gi-release niadtong 2025-09-28

* Gitawag og ultimate-multisite ang prefix; gi-update ang text domain; version bump.
