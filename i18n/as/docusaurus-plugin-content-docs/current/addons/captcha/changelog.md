---
title: Captchaৰ পৰিৱৰ্তনৰ তালিকা
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog {#captcha-changelog}

Version: 1.5.0 - Released on 2026-05-22
* New: Hard-stop rate limiter — captcha-protected surfaces (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ত GET আৰু POST দুয়োটা গণনা কৰে আৰু HTTP 429, এটা `Retry-After` header, আৰু এটা random tarpit sleep (১–৫s, যাৰ সর্বোচ্চ সীমা ১৫s) লৈ উত্তৰ দিয়ে।
* New: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` settings যোগ কৰা হ'ল যাতে tarpit window টি টুন কৰিব পাৰি।
* New: `wu_cap_rate_limit_whitelist_ip` filter যোগ কৰা হ'ল যাতে বিশ্বাস কৰা IP range সমূহক বাদ দিয়া যায়।
* New: `wu_cap_rate_limit_will_block` action যোগ কৰা হ'ল যিটো hard-stop response পঠোৱাৰ ঠিক আগতে ট্ৰিগাৰ হয়।
* New: Spoof-resistant client-IP detection। `Captcha_Core::get_client_ip()` (rate-limit bucket key-ৰ উৎস, captcha siteverify `remoteip`, আৰু statistics IP hash-ৰ উৎস) এতিয়া এটা কঠোৰ বিশ্বাস মডেল বলবৎ কৰে: REMOTE_ADDR হৈছে আধাৰ, `CF-Connecting-IP` কেৱহে তাৎক্ষণিক peer-এ Cloudflare IP range-ৰ ভিতৰত থাকিলেহে মান্যতা দিয়ে, আৰু `X-Forwarded-For` কেৱহে তাৎক্ষণিক peer-এ admin-configured trusted-proxy list-ত থাকিলেহে মান্যতা দিয়ে। ইয়াৰ লগত এটা right-to-left walk কৰা হয় যিয়ে trusted/CF hops ক এৰি দিয়ে আৰু তাৰ পাছত visitor IP-ত স্থিত হয়।
* New: `cap_trust_cloudflare_headers` setting (default OFF) — Cloudflare-ৰ পাছত থকা সময়ত `CF-Connecting-IP` বিশ্বাস কৰিবলৈ অপ্ট-ইন কৰক। এই plugin-এ এটা bundled Cloudflare CIDR snapshot লৈ আহে আৰু refresh কৰিবলৈ wp-cron ব্যৱহাৰ কৰে, আৰু যদি refresh কৰাত কোনো সমস্যা হয় তেন্তে fallback ব্যৱস্থা থাকে।
* New: `cap_trusted_proxies` setting — এটা textarea য'ত CIDR বা খালি IP (এটা প্ৰতিটো লাইনে, `#` comments অনুমোদিত) তালিকাভুক্ত কৰিব পাৰি, যি আপোনাৰ নিজৰ front-line proxies / load-balancers হ'ব। ইয়াৰ অবিহনে, rate limiter সক্ষম কৰা হৈ থকা সময়তো `X-Forwarded-For` উপেক্ষা কৰা হয়।
* New: সম্ভাব্য Cloudflare / proxy posture-ৰ বাবে প্ৰথমবাৰৰ বাবে auto-detection। এটা এক-ক্লিক "Apply detected settings" admin notice দিয়ে। plugin-এ কেতিয়াও আপোনাৰ সেভ কৰা মানবোৰ ওপৰত লিখি নপৰে; যদি পাছৰ traffic-এ সূচায় যে আপোনাৰ কনফিগাৰেচনয়ে এতিয়াও বাস্তৱতাৰ সৈতে মিল নাই (উদাহৰণস্বৰূপে Cloudflare-এ CIDR range সলনি কৰিছে আৰু আপোনাৰ proxy CIDR এতিয়া পুৰণি হৈ গৈছে), তেন্তে এটা non-dismissable mismatch notice দি সোধা আপডেটটো দেখুৱায়।
* Fixed: Invisible mode এ আৰু `cap_security_level` लाई silently FAST লৈ নামাই নপৰে — admin-এ কনফিগাৰ কৰা level টো মান্যতা পায়। এটা নতুন `wu_cap_server_security_level` filter উপলব্ধ হ'ল সেইবোৰ সাইটৰ বাবে যিয়ে নিজা logic ৰাখিব বিচাৰে।
* Fixed: Statistics `rate_limits_triggered` counter এতিয়া প্ৰতিটো block-ত বৃদ্ধি পায়, কেৱল rare post-success backstop path ত নহয়।
* Fixed: `Captcha_Core::get_client_ip()` এতিয়া rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), আৰু statistics ত visitor IP attribution-ৰ বাবে একমাত্ৰ উৎস। ই এটা spoofing vector বন্ধ কৰে য'ত direct origin-server request-এ এটা forged `CF-Connecting-IP` header লৈ আহিছিল আৰু সেয়েহে real peer-ৰ সলনি spoofed IP-ৰ দ্বাৰা bucket কৰা হৈছিল।
* Fixed: WooCommerce classic checkout rate-limit gate এতিয়া `woocommerce_before_checkout_form` ৰ সলনি `template_redirect` (priority 1) ত ট্ৰিগাৰ হয়। form-level hook টো কেতিয়াও ট্ৰিগাৰ নহয় যেতিয়া cart খালি থাকে, সেয়েহে যি flood traffic-এ কোনো product যোগ কৰে নাছিল, সেয়েহে limiter-ক সম্পূৰ্ণৰূপে বাইপাস কৰিছিল।
* Fixed: WooCommerce pay-for-order rate-limit gate এতিয়া `woocommerce_before_pay_action` ৰ সলনি `template_redirect` ত ট্ৰিগাৰ হয়। पछिल्लो hook টো কেৱহে `wp_verify_nonce('woocommerce-pay')` সফল হোৱাৰ পাছত ট্ৰিগাৰ হয়, যাৰ অৰ্থ হ'ল যে unauthorized attacker (আসল threat model) এ কেতিয়াও limiter ট্ৰিগাৰ কৰা নাছিল।
* Fixed: WooCommerce Store API (blocks) checkout rate-limit gate এতিয়া `woocommerce_store_api_checkout_update_order_from_request` ৰ সলনি `rest_pre_dispatch` ত ট্ৰিগাৰ হয়। पछिल्लो hook টো কেৱহে Store API-এ cart আৰু billing field validate কৰাৰ পাছত ট্ৰিগাৰ হয়, সেয়েহে unauthorized bots-এ validator-ৰ পৰা 400 পাইছিল আৰু কেতিয়াও limiter ট্ৰিগাৰ কৰা নাছিল।
* Fixed: Ultimate Multisite inline-login rate-limit gate এতিয়া `wu_before_inline_login` ৰ সলনি `wu_ajax_nopriv_wu_inline_login` priority 1 ত ট্ৰিগাৰ হয় (আৰু logged-in mirror)। पछिल्लो hook টো কেৱহে `check_ajax_referer('wu_checkout')` সফল হোৱাৰ পাছত ট্ৰিগাৰ হয়, সেয়েহে unauthorized bots-এ valid wu_checkout nonce নথকাৰ বাবে 403 পাইছিল আৰু কেতিয়াও limiter ট্ৰিগাৰ কৰা নাছিল।
* Fixed: `Rate_Limiter::enforce()` এতিয়া `surface|ip` দ্বাৰা keyed এটা once-per-request guard ব্যৱহাৰ কৰে, সেয়েহে upstream hooks যিটো render কৰাত দুবাৰ ট্ৰিগাৰ হয় (বিশেষকৈ Ultimate Multisite-ত `wu_setup_checkout`), সেয়েহে effective rate-limit threshold-ক আধা কৰে নাপৰে।
* Fixed: Rate-limit surface gates এতিয়া `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) লৈ পৰামৰ্শ নকৰে। এই filter টো "captcha আন এটা surface-এ ইতিমধ্যে handle কৰা হৈছে" বুলি সূচায় আৰু flood protection-ৰ সৈতে সম্পৰ্কহীন। WooCommerce integration-এ ইয়াক এটা hook কৰিছিল যাতে Woo nonce উপলব্ধ থাকিলে WordPress login captcha skip কৰা যায়, যাৰ ফলত rate counting-ত সমস্যা হৈছিল আৰু Woo POSTs-এ limiter-ক এৰাই যাব পাৰিছিল। এতিয়া rate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter টোহে বাইপাস কৰে।

Version: 1.3.2 - Released on 2026-01-27
* Fixed: Elementor বা আন page builders ব্যৱহাৰ কৰা checkout forms ত Cap widget render নহয়।
* Fixed: cap-widget custom element-ক wp_kses() sanitization এৰে strip কৰা হৈছিল।
* Improved: HTML filtering বাইপাস কৰিবলৈ checkout captcha field-ৰ বাবে callable content ব্যৱহাৰ কৰা হ'ল।
* Improved: edge cases-ৰ বাবে fallback লৈ JavaScript সরল কৰা হ'ল।

Version: 1.3.1 - Released on 2026-01-26
* Fixed: Dynamic Ultimate Multisite checkout forms ত Cap Captcha invisible mode auto-solve নহয়।
* Improved: Cap checkout script এতিয়া dynamically load হোৱা widget-ক detect কৰিবলৈ MutationObserver ব্যৱহাৰ কৰে।
* Improved: submission কৰাৰ আগতে token অপেক্ষা কৰিবলৈ checkout button interception যোগ কৰা হ'ল।

Version: 1.3.0 - Released on 2026-01-27
* New: Store API fetch interception লৈ WooCommerce Blocks checkout integration।
* New: WooCommerce checkout-ৰ বাবে Invisible captcha support (hCaptcha invisible, reCAPTCHA v2 invisible, v3)।
* New: Ultimate Multisite অবিহনে ব্যৱহাৰ কৰিবলৈ standalone settings page।
* New: dependency conflict নিবাৰণৰ বাবে Jetpack Autoloader।
* Fixed: Dynamic Ultimate Multisite checkout (AJAX-loaded content) ত hCaptcha render নহয়।
* Fixed: form validation error হোৱাৰ সময়ত Captcha refresh/reset নহয়।
* Fixed: WooCommerce checkout page ত hCaptcha দেখুৱাবলৈ।
* Fixed: reCAPTCHA class not found error (google/recaptcha PHP library যোগ কৰা হ'ল)।
* Improved: WordPress hooks, MutationObserver, আৰু AJAX interception লৈ error detection।
* Improved: Settings description-ত API key-ৰ বাবে dashboard URLs যোগ কৰা হ'ল।

Version: 1.2.2 - Released on 2026-01-24
* Fixed: Ultimate Multisite Login Form Element ত Captcha দেখুৱাবলৈ (form filter name mismatch)।
* Fixed: Cap widget HTML-ক wp_kses() sanitization এৰে strip কৰা হৈছিল।
* Fixed: JavaScript selectors-এ element ID-ত slash থকা forms পাওঁনি।
* Added: classaddons-ক অনুমোদিত HTML tag বঢ়াবলৈ filter hook `wu_kses_allowed_html`।
* Removed: Dead code JavaScript files-ক provider-specific scripts লৈ সলনি কৰা হ'ল।

Version: 1.2.1 - Released on 2026-01-23

* Fixed: Multisite environment-ত Cap Captcha token validation সফল নহয় (এতিয়া network-wide transients ব্যৱহাৰ কৰে)।
* Fixed: Login status কিবা হ'ব পাৰে, সকলো ব্যৱহাৰকাৰীৰ বাবে Captcha consistent ভাবে render কৰে।
* Fixed: captcha rendering আৰু validation-ৰ মাজৰ mismatch-এ checkout failure কৰাইছিল।

Version: 1.2.0 - Released on 2026-01-21

* New: Cap Captcha - self-hosted proof-of-work captcha, activation-ত default ভাবে সক্ষম।
* New: Zero-configuration protection - addon activate কৰক আৰু আপুনি তৎক্ষণাত protected।
* New: Polymorphic captcha provider architecture, যিটো সহজে extend কৰিব পাৰি।
* New: WooCommerce Store API checkout-এ card testing attacks ৰ বিৰুদ্ধে protection।
* New: Statistics tracking dashboard য'ত challenges, verifications, আৰু blocked attacks দেখুৱায়।
* New: Cap Captcha difficulty-ৰ বাবে security level presets (Fast, Medium, Max)।
* New: reCAPTCHA আৰু hCaptcha providers-ৰ বাবে abstract base classes।
* Improved: codebase-ক modular provider classes ত refactor কৰা হ'ল।
* Improved: dedicated manager class লৈ concerns-ৰ ভাল বিভাজন।
* Fixed: $_SERVER variable sanitization-ৰ বাবে security improvement।
* Fixed: WordPress naming conventions-ৰ বাবে PHPUnit test configuration।

Version: 1.0.1 - Released on 2025-09-28

* Prefix rename কৰি ultimate-multisite কৰা হ'ল; text domain update কৰা হ'ল; version bump।
