---
title: "Captcha Changelog"
sidebar_position: 99
---

# Captcha Changelog

Version: 1.5.0 - Released on 2026-05-22
* New: Hard-stop rate limiter — counts every GET and POST on captcha-protected surfaces (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) and replies with HTTP 429, a `Retry-After` header, and a randomised tarpit sleep (1–5s, hard-capped at 15s).
* New: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` settings to tune the tarpit window.
* New: `wu_cap_rate_limit_whitelist_ip` filter to exempt trusted IP ranges.
* New: `wu_cap_rate_limit_will_block` action that fires immediately before the hard-stop response is sent.
* New: Spoof-resistant client-IP detection. `Captcha_Core::get_client_ip()` (the source of truth for rate-limit bucket keys, captcha siteverify `remoteip`, and statistics IP hashes) now enforces a strict trust model: REMOTE_ADDR is the floor, `CF-Connecting-IP` is honoured only when the immediate peer is inside a current Cloudflare IP range, and `X-Forwarded-For` is honoured only when the immediate peer is in the admin-configured trusted-proxy list, with a right-to-left walk that skips trusted/CF hops before settling on the visitor IP.
* New: `cap_trust_cloudflare_headers` setting (default OFF) — opt into `CF-Connecting-IP` trust when behind Cloudflare. The plugin ships a bundled Cloudflare CIDR snapshot and refreshes it weekly via wp-cron with bundled fallback if the refresh fails.
* New: `cap_trusted_proxies` setting — textarea of CIDRs or bare IPs (one per line, `#` comments allowed) listing your own front-line proxies / load-balancers. Without this, `X-Forwarded-For` is ignored even when the rate limiter is enabled.
* New: First-enable auto-detection of likely Cloudflare / proxy posture with a one-click "Apply detected settings" admin notice. The plugin never overwrites your saved values; if subsequent traffic suggests your config no longer matches reality (e.g. Cloudflare changed CIDR ranges and your proxy CIDR is now stale), a non-dismissable mismatch notice surfaces the recommended update.
* Fixed: Invisible mode no longer silently downgrades `cap_security_level` to FAST — the admin's configured level is honoured. A new `wu_cap_server_security_level` filter is available for sites that want bespoke logic.
* Fixed: Statistics `rate_limits_triggered` counter now increments on every block, not only on the rare post-success backstop path.
* Fixed: `Captcha_Core::get_client_ip()` is now the single source of truth for visitor IP attribution across the rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), and statistics — closing a spoofing vector where direct origin-server requests carrying a forged `CF-Connecting-IP` header would have been bucketed by the spoofed IP instead of the real peer.
* Fixed: WooCommerce classic checkout rate-limit gate now fires on `template_redirect` (priority 1) instead of `woocommerce_before_checkout_form`. The form-level hook never fires when the cart is empty, so flood traffic that never adds a product was bypassing the limiter entirely.
* Fixed: WooCommerce pay-for-order rate-limit gate now fires on `template_redirect` instead of `woocommerce_before_pay_action`. The latter only fires after `wp_verify_nonce('woocommerce-pay')` succeeds, which means unauth attackers (the actual threat model) never triggered the limiter.
* Fixed: WooCommerce Store API (blocks) checkout rate-limit gate now fires on `rest_pre_dispatch` instead of `woocommerce_store_api_checkout_update_order_from_request`. The latter only fires after Store API validates the cart and billing fields, so unauth bots got a 400 from the validator and never tripped the limiter.
* Fixed: Ultimate Multisite inline-login rate-limit gate now fires on `wu_ajax_nopriv_wu_inline_login` priority 1 (and the logged-in mirror) instead of `wu_before_inline_login`. The latter only fires after `check_ajax_referer('wu_checkout')` succeeds, so unauth bots without a valid wu_checkout nonce got a 403 and never tripped the limiter.
* Fixed: `Rate_Limiter::enforce()` now applies a once-per-request guard keyed by `surface|ip`, so upstream hooks that fire twice per render (notably `wu_setup_checkout` in Ultimate Multisite) no longer halve the effective rate-limit threshold.
* Fixed: Rate-limit surface gates no longer consult `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). That filter signals "captcha already handled by another surface" and is orthogonal to flood protection — the WooCommerce integration was hooking it to skip the WordPress login captcha when a Woo nonce was present, which bled into rate counting and let Woo POSTs avoid the limiter. The rate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter is the only bypass that now applies.

Version: 1.3.2 - Released on 2026-01-27
* Fixed: Cap widget not rendering on checkout forms using Elementor or other page builders
* Fixed: cap-widget custom element being stripped by wp_kses() sanitization
* Improved: Use callable content for checkout captcha field to bypass HTML filtering
* Improved: Simplified JavaScript with fallback for edge cases

Version: 1.3.1 - Released on 2026-01-26
* Fixed: Cap Captcha invisible mode not auto-solving on dynamic Ultimate Multisite checkout forms
* Improved: Cap checkout script now uses MutationObserver to detect dynamically loaded widgets
* Improved: Added checkout button interception to wait for token before submission

Version: 1.3.0 - Released on 2026-01-27
* New: WooCommerce Blocks checkout integration with Store API fetch interception
* New: Invisible captcha support for WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* New: Standalone settings page for use without Ultimate Multisite
* New: Jetpack Autoloader for dependency conflict prevention
* Fixed: hCaptcha not rendering on dynamic Ultimate Multisite checkout (AJAX-loaded content)
* Fixed: Captcha not refreshing/resetting when form validation errors occur
* Fixed: hCaptcha not showing on WooCommerce checkout page
* Fixed: reCAPTCHA class not found error (added google/recaptcha PHP library)
* Improved: Error detection via WordPress hooks, MutationObserver, and AJAX interception
* Improved: Settings descriptions now include dashboard URLs for API keys

Version: 1.2.2 - Released on 2026-01-24
* Fixed: Captcha not displaying on Ultimate Multisite Login Form Element (form filter name mismatch)
* Fixed: Cap widget HTML being stripped by wp_kses() sanitization
* Fixed: JavaScript selectors not finding forms with slashes in element IDs
* Added: Filter hook `wu_kses_allowed_html` for classaddons to extend allowed HTML tags
* Removed: Dead code JavaScript files replaced by provider-specific scripts

Version: 1.2.1 - Released on 2026-01-23

* Fixed: Cap Captcha token validation failing in multisite environments (now uses network-wide transients)
* Fixed: Captcha now renders consistently for all users regardless of login status
* Fixed: Mismatch between captcha rendering and validation that caused checkout failures

Version: 1.2.0 - Released on 2026-01-21

* New: Cap Captcha - self-hosted proof-of-work captcha, enabled by default on activation
* New: Zero-configuration protection - activate the addon and you're protected immediately
* New: Polymorphic captcha provider architecture for easy extensibility
* New: WooCommerce Store API checkout protection against card testing attacks
* New: Statistics tracking dashboard showing challenges, verifications, and blocked attacks
* New: Security level presets (Fast, Medium, Max) for Cap Captcha difficulty
* New: Abstract base classes for reCAPTCHA and hCaptcha providers
* Improved: Refactored codebase into modular provider classes
* Improved: Better separation of concerns with dedicated manager class
* Fixed: Security improvements for $_SERVER variable sanitization
* Fixed: PHPUnit test configuration for WordPress naming conventions

Version: 1.0.1 - Released on 2025-09-28

* Rename prefix to ultimate-multisite; update text domain; version bump.
