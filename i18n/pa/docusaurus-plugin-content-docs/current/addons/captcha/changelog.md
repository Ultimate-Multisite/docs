---
title: Captcha ਬਦਲਾਅਾਂ ਦੀ ਸੂਚੀ
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog {#captcha-changelog}

Version: 1.5.0 - Released on 2026-05-22
* New: Hard-stop rate limiter — ਹਰ GET ਅਤੇ POST ਨੂੰ ਜੋ captcha-protected surfaces (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) 'ਤੇ ਹਿساب ਕਰਦਾ ਹੈ ਅਤੇ HTTP 429, ਇੱਕ `Retry-After` header, ਅਤੇ ਇੱਕ ਰੈਂਡਮ ਤੌਰ 'ਤੇ ਸੈਟ ਕੀਤਾ ਗਿਆ tarpit sleep (1–5s, ਜੋ 15s ਤੱਕ ਸੀਮਿਤ ਹੈ) ਨਾਲ ਜਵਾਬ ਦਿੰਦਾ ਹੈ।
* New: tarpit window ਨੂੰ ਠੀਕ ਕਰਨ ਲਈ `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ਸੈਟਿੰਗਾਂ।
* New: ਭਰੋਸੇਮੰਦ IP range ਨੂੰ ਛੋਟ ਦੇਣ ਲਈ `wu_cap_rate_limit_whitelist_ip` filter।
* New: `wu_cap_rate_limit_will_block` action ਜੋ hard-stop response ਭੇਜਣ ਤੋਂ ਤੁਰੰਤ ਪਹਿਲਾਂ ਚੱਲਦਾ ਹੈ।
* New: Spoof-resistant client-IP detection. `Captcha_Core::get_client_ip()` (rate-limit bucket keys, captcha siteverify `remoteip`, ਅਤੇ statistics IP hashes ਲਈ ਸੱਚਾ ਸਰੋਤ) ਹੁਣ ਇੱਕ ਸਖ਼ਤ ਭਰੋਸੇ ਦੇ ਮਾਡਲ ਨੂੰ ਲਾਗੂ ਕਰਦਾ ਹੈ: REMOTE_ADDR ਘੱਟੋ-ਘੱਟ ਹੈ, `CF-Connecting-IP` ਸਿਰਫ਼ ਉਦੋਂ ਸਨਮਾਨਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਜਦੋਂ ਤੁਰੰਤ peer ਇੱਕ ਮੌਜੂਦਾ Cloudflare IP range ਦੇ ਅੰਦਰ ਹੋਵੇ, ਅਤੇ `X-Forwarded-For` ਸਿਰਫ਼ ਉਦੋਂ ਸਨਮਾਨਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਜਦੋਂ ਤੁਰੰਤ peer ਐਡਮਿਨ-ਕਨਫਿਗਰੇਡ ਭਰੋਸੇਮੰਦ-proxy ਸੂਚੀ ਵਿੱਚ ਹੋਵੇ, ਜਿਸ ਵਿੱਚ ਇੱਕ ਸੱਜੇ ਤੋਂ ਖੱਬੇ ਵੱਲ ਚੱਲਣਾ ਸ਼ਾਮਲ ਹੈ ਜੋ ਭਰੋਸੇਮੰਦ/CF hops ਨੂੰ ਛੱਡ ਕੇ ਵਿਜ਼ਟਰ IP 'ਤੇ ਸਥਾਪਿਤ ਹੁੰਦਾ ਹੈ।
* New: `cap_trust_cloudflare_headers` setting (default OFF) — Cloudflare ਦੇ ਪਿੱਛੇ ਹੋਣ 'ਤੇ `CF-Connecting-IP` 'ਤੇ ਭਰੋਸਾ ਕਰਨ ਲਈ ਆਪਟ-ਇਨ ਕਰੋ। ਪਲੱਗਇਨ ਇੱਕ ਬੰਡਲ ਕੀਤਾ Cloudflare CIDR snapshot ਨਾਲ ਆਉਂਦਾ ਹੈ ਅਤੇ ਜੇ refresh失败 ਹੋ ਜਾਂਦਾ ਹੈ ਤਾਂ ਇਸਨੂੰ ਹਫ਼ਤੇ ਵਿੱਚ ਇੱਕ ਵਾਰ wp-cron ਰਾਹੀਂ refresh ਕਰਦਾ ਹੈ।
* New: `cap_trusted_proxies` setting — CIDRs ਜਾਂ ਸਿੱਧੇ IPs ਦਾ textarea (ਹਰ ਇੱਕ ਲਾਈਨ 'ਤੇ, `#` comments ਦੀ ਇਜਾਜ਼ਤ ਹੈ) ਜੋ ਤੁਹਾਡੇ ਆਪਣੇ ਫਰੰਟ-ਲਾਈਨ proxies / load-balancers ਨੂੰ ਸੂਚੀਬੱਧ ਕਰਦਾ ਹੈ। ਇਸ ਤੋਂ ਬਿਨਾਂ, `X-Forwarded-For` ਨੂੰ ਨਜ਼ਰਅੰਦਾਜ਼ ਕਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ ਭਾਵੇਂ rate limiter ਸੇਵਾਯੋਗ ਹੋਵੇ।
* New: ਸੰਭਾਵੀ Cloudflare / proxy posture ਦਾ ਪਹਿਲੀ ਵਾਰ auto-detection, ਇੱਕ-ਕਲਿੱਕ "Apply detected settings" admin notice ਨਾਲ। ਪਲੱਗਇਨ ਕਦੇ ਵੀ ਤੁਹਾਡੇ ਸੇਵ ਕੀਤੇ ਮੁੱਲਾਂ ਨੂੰ ਓਵਰਰਾਈਟ ਨਹੀਂ ਕਰਦਾ; ਜੇ ਬਾਅਦ ਦਾ ਟ੍ਰੈਫਿਕ ਸੁਝਾਅ ਦਿੰਦਾ ਹੈ ਕਿ ਤੁਹਾਡਾ config ਹੁਣ ਹਕੀਕਤ ਨਾਲ ਨਹੀਂ ਮਿਲਦਾ (ਉਦਾਹਰਨ ਲਈ, Cloudflare ਨੇ CIDR range ਬਦਲ ਦਿੱਤੇ ਹਨ ਅਤੇ ਤੁਹਾਡਾ proxy CIDR ਹੁਣ ਪੁਰਾਣਾ ਹੈ), ਤਾਂ ਇੱਕ ਨਾ-dismissable mismatch notice ਸਿਫਾਰਸ਼ ਕੀਤਾ ਗਿਆ update ਦਿਖਾਉਂਦਾ ਹੈ।
* Fixed: Invisible mode ਹੁਣ `cap_security_level` ਨੂੰ ਚੁੱਪਚਾਪ FAST 'ਤੇ ਡਾਊਨਗ੍ਰੇਡ ਨਹੀਂ ਕਰਦਾ — ਐਡਮਿਨ ਦਾ ਕਨਫਿਗਰੇਡ ਪੱਧਰ ਸਨਮਾਨਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਇੱਕ ਨਵਾਂ `wu_cap_server_security_level` filter ਉਨ੍ਹਾਂ ਸਾਈਟਾਂ ਲਈ ਉਪਲਬਧ ਹੈ ਜਿਨ੍ਹਾਂ ਨੂੰ ਖਾਸ logic ਚਾਹੀਦਾ ਹੈ।
* Fixed: Statistics `rate_limits_triggered` counter ਹੁਣ ਹਰ block 'ਤੇ ਵਧਦਾ ਹੈ, ਸਿਰਫ਼ ਘੱਟ ਹੋਣ ਵਾਲੇ post-success backstop path 'ਤੇ ਨਹੀਂ।
* Fixed: `Captcha_Core::get_client_ip()` ਹੁਣ rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), ਅਤੇ statistics ਵਿੱਚ ਵਿਜ਼ਟਰ IP attribution ਲਈ ਇੱਕੋ ਇੱਕ ਸੱਚਾ ਸਰੋਤ ਹੈ — ਇੱਕ spoofing vector ਨੂੰ ਬੰਦ ਕਰਦਾ ਹੈ ਜਿੱਥੇ ਸਿੱਧੇ origin-server requests ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਇੱਕ forged `CF-Connecting-IP` header ਸੀ, ਨੂੰ spoofed IP ਦੁਆਰਾ ਸਥਾਪਿਤ ਬਜਟ ਵਿੱਚ ਪਾ ਦਿੱਤਾ ਜਾਂਦਾ ਸੀ ਨਾ ਕਿ ਅਸਲ peer ਦੁਆਰਾ।
* Fixed: WooCommerce classic checkout rate-limit gate ਹੁਣ `woocommerce_before_checkout_form` ਦੀ ਬਜਾਏ `template_redirect` (priority 1) 'ਤੇ ਚੱਲਦਾ ਹੈ। form-level hook ਕਦੇ ਨਹੀਂ ਚੱਲਦਾ ਜਦੋਂ cart ਖਾਲੀ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਕੋਈ ਵੀ ਟ੍ਰੈਫਿਕ ਜੋ ਕਦੇ product ਨਹੀਂ ਜੋੜਦਾ ਸੀ, ਉਹ limiter ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਬਾਈਪਾਸ ਕਰ ਰਿਹਾ ਸੀ।
* Fixed: WooCommerce pay-for-order rate-limit gate ਹੁਣ `woocommerce_before_pay_action` ਦੀ ਬਜਾਏ `template_redirect` 'ਤੇ ਚੱਲਦਾ ਹੈ। ਪਹਿਲਾ ਸਿਰਫ਼ `wp_verify_nonce('woocommerce-pay')` ਸਫਲ ਹੋਣ ਤੋਂ ਬਾਅਦ ਚੱਲਦਾ ਹੈ, ਜਿਸਦਾ ਮਤਲਬ ਹੈ ਕਿ unauthorized attackers (ਅਸਲ threat model) ਨੇ ਕਦੇ limiter ਨੂੰ trigger ਨਹੀਂ ਕੀਤਾ।
* Fixed: WooCommerce Store API (blocks) checkout rate-limit gate ਹੁਣ `woocommerce_store_api_checkout_update_order_from_request` ਦੀ ਬਜਾਏ `rest_pre_dispatch` 'ਤੇ ਚੱਲਦਾ ਹੈ। ਪਹਿਲਾ ਸਿਰਫ਼ Store API ਦੁਆਰਾ cart ਅਤੇ billing fields ਨੂੰ validate ਕਰਨ ਤੋਂ ਬਾਅਦ ਚੱਲਦਾ ਹੈ, ਇਸ ਲਈ unauthorized bots ਨੂੰ validator ਤੋਂ 400 ਮਿਲਦਾ ਸੀ ਅਤੇ ਕਦੇ limiter ਨੂੰ trigger ਨਹੀਂ ਕਰਦੇ ਸਨ।
* Fixed: Ultimate Multisite inline-login rate-limit gate ਹੁਣ `wu_before_inline_login` ਦੀ ਬਜਾਏ `wu_ajax_nopriv_wu_inline_login` priority 1 'ਤੇ ਚੱਲਦਾ ਹੈ (ਅਤੇ logged-in mirror)। ਪਹਿਲਾ ਸਿਰਫ਼ `check_ajax_referer('wu_checkout')` ਸਫਲ ਹੋਣ ਤੋਂ ਬਾਅਦ ਚੱਲਦਾ ਹੈ, ਇਸ ਲਈ unauthorized bots ਜਿਨ੍ਹਾਂ ਕੋਲ ਇੱਕ valid wu_checkout nonce ਨਹੀਂ ਸੀ, ਉਨ੍ਹਾਂ ਨੂੰ 403 ਮਿਲਦਾ ਸੀ ਅਤੇ ਕਦੇ limiter ਨੂੰ trigger ਨਹੀਂ ਕਰਦੇ ਸਨ।
* Fixed: `Rate_Limiter::enforce()` ਹੁਣ `surface|ip` ਦੁਆਰਾ key ਕੀਤੇ ਇੱਕ once-per-request guard ਨੂੰ ਲਾਗੂ ਕਰਦਾ ਹੈ, ਇਸ ਲਈ upstream hooks ਜੋ render ਪ੍ਰਤੀ ਦੋ ਵਾਰ ਚੱਲਦੇ ਹਨ (ਖਾਸ ਤੌਰ 'ਤੇ Ultimate Multisite ਵਿੱਚ `wu_setup_checkout`) ਹੁਣ ਪ੍ਰਭਾਵੀ rate-limit threshold ਨੂੰ ਅੱਧਾ ਨਹੀਂ ਕਰਦੇ।
* Fixed: Rate-limit surface gates ਹੁਣ `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) ਨਾਲ ਸਲਾਹ ਨਹੀਂ ਲੈਂਦੇ। ਉਹ filter "captcha ਪਹਿਲਾਂ ਹੀ ਕਿਸੇ ਹੋਰ surface ਦੁਆਰਾ ਸੰਭਾਲਿਆ ਗਿਆ ਹੈ" ਦਾ ਸੰਕੇਤ ਦਿੰਦਾ ਹੈ ਅਤੇ flood protection ਨਾਲ ਅਲੱਗ ਹੈ — WooCommerce integration ਇਸਨੂੰ ਇੱਕ Woo nonce ਮੌਜੂਦ ਹੋਣ 'ਤੇ WordPress login captcha ਨੂੰ skip ਕਰਨ ਲਈ hook ਕਰ ਰਿਹਾ ਸੀ, ਜਿਸ ਨਾਲ rate counting ਵਿੱਚ ਗਲਤੀ ਹੋ ਗਈ ਅਤੇ Woo POSTs ਨੂੰ limiter ਤੋਂ ਬਚਾ ਦਿੱਤਾ। rate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter ਇੱਕੋ ਇੱਕ bypass ਹੈ ਜੋ ਹੁਣ ਲਾਗੂ ਹੁੰਦਾ ਹੈ।

Version: 1.3.2 - Released on 2026-01-27
* Fixed: Elementor ਜਾਂ ਹੋਰ page builders ਦੀ ਵਰਤੋਂ ਕਰਨ ਵਾਲੇ checkout forms 'ਤੇ Cap widget render ਨਹੀਂ ਹੋ ਰਿਹਾ ਸੀ
* Fixed: cap-widget custom element ਨੂੰ wp_kses() sanitization ਦੁਆਰਾ strip ਕੀਤਾ ਜਾ ਰਿਹਾ ਸੀ
* Improved: HTML filtering ਨੂੰ ਬਾਈਪਾਸ ਕਰਨ ਲਈ checkout captcha field ਲਈ callable content ਦੀ ਵਰਤੋਂ ਕੀਤੀ
* Improved: edge cases ਲਈ fallback ਨਾਲ JavaScript ਨੂੰ ਸਰਲ ਬਣਾਇਆ

Version: 1.3.1 - Released on 2026-01-26
* Fixed: Cap Captcha invisible mode dynamic Ultimate Multisite checkout forms 'ਤੇ auto-solve ਨਹੀਂ ਹੋ ਰਿਹਾ ਸੀ
* Improved: Cap checkout script ਹੁਣ dynamically load ਹੋਣ ਵਾਲੇ widgets ਦਾ detection ਕਰਨ ਲਈ MutationObserver ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ
* Improved: submission ਤੋਂ ਪਹਿਲਾਂ token ਦਾ ਇੰਤਜ਼ਾਰ ਕਰਨ ਲਈ checkout button interception ਜੋੜਿਆ

Version: 1.3.0 - Released on 2026-01-27
* New: Store API fetch interception ਨਾਲ WooCommerce Blocks checkout integration
* New: WooCommerce checkout ਲਈ Invisible captcha support (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* New: Ultimate Multisite ਤੋਂ ਬਿਨਾਂ ਵਰਤੋਂ ਲਈ stand-alone settings page
* New: dependency conflict prevention ਲਈ Jetpack Autoloader
* Fixed: dynamic Ultimate Multisite checkout (AJAX-loaded content) 'ਤੇ hCaptcha render ਨਹੀਂ ਹੋ ਰਿਹਾ ਸੀ
* Fixed: form validation errors ਹੋਣ 'ਤੇ Captcha refresh/reset ਨਹੀਂ ਹੋ ਰਿਹਾ ਸੀ
* Fixed: WooCommerce checkout page 'ਤੇ hCaptcha ਨਹੀਂ ਦਿਖ ਰਿਹਾ ਸੀ
* Fixed: reCAPTCHA class not found error (google/recaptcha PHP library ਜੋੜੀ)
* Improved: WordPress hooks, MutationObserver, ਅਤੇ AJAX interception ਰਾਹੀਂ error detection
* Improved: Settings descriptions ਵਿੱਚ API keys ਲਈ dashboard URLs ਸ਼ਾਮਲ ਕੀਤੇ

Version: 1.2.2 - Released on 2026-01-24
* Fixed: Ultimate Multisite Login Form Element 'ਤੇ Captcha ਨਹੀਂ ਦਿਖ ਰਿਹਾ ਸੀ (form filter name mismatch)
* Fixed: Cap widget HTML ਨੂੰ wp_kses() sanitization ਦੁਆਰਾ strip ਕੀਤਾ ਜਾ ਰਿਹਾ ਸੀ
* Fixed: JavaScript selectors, element IDs ਵਿੱਚ slashes ਵਾਲੇ forms ਨੂੰ ਨਹੀਂ ਲੱਭ ਰਹੇ ਸਨ
* Added: classaddons ਲਈ ਸਨਮਾਨਿਤ HTML tags ਨੂੰ ਵਧਾਉਣ ਲਈ Filter hook `wu_kses_allowed_html`
* Removed: Dead code JavaScript files ਨੂੰ provider-specific scripts ਨਾਲ ਬਦਲਿਆ

Version: 1.2.1 - Released on 2026-01-23

* Fixed: multisite environments ਵਿੱਚ Cap Captcha token validation fail ਹੋ ਰਿਹਾ ਸੀ (ਹੁਣ network-wide transients ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ)
* Fixed: Captcha ਹੁਣ login status ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਾਰੇ ਸਾਰੇ users ਲਈ ਲਗਾਤਾਰ render ਹੁੰਦਾ ਹੈ
* Fixed: captcha rendering ਅਤੇ validation ਵਿੱਚ mismatch ਕਾਰਨ checkout failures ਹੋ ਰਹੇ ਸਨ

Version: 1.2.0 - Released on 2026-01-21

* New: Cap Captcha - self-hosted proof-of-work captcha, activation 'ਤੇ default enable
* New: Zero-configuration protection - addon activate ਕਰੋ ਅਤੇ ਤੁਸੀਂ ਤੁਰੰਤ ਸੁਰੱਖਿਅਤ ਹੋ ਜਾਂਦੇ ਹੋ
* New: easy extensibility ਲਈ Polymorphic captcha provider architecture
* New: card testing attacks ਦੇ ਵਿਰੁੱਧ WooCommerce Store API checkout protection
* New: challenges, verifications, ਅਤੇ blocked attacks ਦਿਖਾਉਣ ਵਾਲਾ Statistics tracking dashboard
* New: Cap Captcha difficulty ਲਈ Security level presets (Fast, Medium, Max)
* New: reCAPTCHA ਅਤੇ hCaptcha providers ਲਈ Abstract base classes
* Improved: modular provider classes ਵਿੱਚ codebase ਨੂੰ refactor ਕੀਤਾ
* Improved: dedicated manager class ਨਾਲ concerns ਦੀ ਬਿਹਤਰ ਵੰਡ
* Fixed: $_SERVER variable sanitization ਲਈ Security improvements
* Fixed: WordPress naming conventions ਲਈ PHPUnit test configuration

Version: 1.0.1 - Released on 2025-09-28

* Prefix ਨੂੰ ultimate-multisite rename ਕੀਤਾ; text domain update ਕੀਤਾ; version bump।
