---
title: Captcha ପରିବର୍ତ୍ତନ ତାଲିକା
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha ପରିବର୍ତ୍ତନ ତାଲିକା {#captcha-changelog}

ସଂସ୍କରଣ: 1.5.0 - 2026-05-22 ରେ ମୁକ୍ତିଲାଭ
* ନୂଆ: କଠୋର-ବନ୍ଦ ହାର ସୀମାକାରୀ — captcha-ସୁରକ୍ଷିତ ସ୍ଥାନଗୁଡ଼ିକରେ ପ୍ରତ୍ୟେକ GET ଓ POST ଗଣେ (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ଏବଂ HTTP 429, ଏକ `Retry-After` header, ଓ ଯାଦୃଚ୍ଛିକ tarpit sleep (1–5s, 15s ରେ କଠୋର ଭାବେ ସୀମିତ) ସହିତ ଉତ୍ତର ଦିଏ।
* ନୂଆ: tarpit ଅବଧି ସମଯୋଜନ ପାଇଁ `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ସେଟିଂ।
* ନୂଆ: ଭରସାଯୋଗ୍ୟ IP ରେଞ୍ଜଗୁଡ଼ିକୁ ଛାଡ଼ ଦେବା ପାଇଁ `wu_cap_rate_limit_whitelist_ip` filter।
* ନୂଆ: କଠୋର-ବନ୍ଦ ଉତ୍ତର ପଠାଯିବାର ଠିକ୍ ପୂର୍ବରୁ ଚାଲୁହେଉଥିବା `wu_cap_rate_limit_will_block` action।
* ନୂଆ: ଛଦ୍ମବେଶ-ପ୍ରତିରୋଧୀ client-IP ଚିହ୍ନଟ। `Captcha_Core::get_client_ip()` (rate-limit bucket keys, captcha siteverify `remoteip`, ଓ ପରିସଂଖ୍ୟାନ IP hashes ପାଇଁ ସତ୍ୟର ମୂଳ ସ୍ରୋତ) ଏବେ ଏକ କଠୋର ଭରସା ମଡେଲ୍ ବାଧ୍ୟତାମୂଳକ କରେ: REMOTE_ADDR ହେଉଛି ମୂଳ ସୀମା, `CF-Connecting-IP` କେବଳ ତତ୍କ୍ଷଣାତ୍ peer ବର୍ତ୍ତମାନର Cloudflare IP ରେଞ୍ଜ ମଧ୍ୟରେ ଥିଲେ ମାନ୍ୟ ହୁଏ, ଏବଂ `X-Forwarded-For` କେବଳ ତତ୍କ୍ଷଣାତ୍ peer admin-ବିନ୍ୟାସିତ trusted-proxy ତାଲିକାରେ ଥିଲେ ମାନ୍ୟ ହୁଏ, ଯେଉଁଠି visitor IP ନିର୍ଣ୍ଣୟ ପୂର୍ବରୁ ଡାହାଣରୁ ବାମକୁ ଯାଇ trusted/CF hops ଛାଡ଼ାଯାଏ।
* ନୂଆ: `cap_trust_cloudflare_headers` ସେଟିଂ (ଡିଫଲ୍ଟ OFF) — Cloudflare ପଛରେ ଥିଲେ `CF-Connecting-IP` ଭରସାକୁ ଚୟନ କରନ୍ତୁ। plugin ଏକ bundled Cloudflare CIDR snapshot ସହିତ ଆସେ ଏବଂ refresh ବିଫଳ ହେଲେ bundled fallback ସହିତ wp-cron ମାଧ୍ୟମରେ ସାପ୍ତାହିକ ଭାବେ ଏହାକୁ refresh କରେ।
* ନୂଆ: `cap_trusted_proxies` ସେଟିଂ — CIDR କିମ୍ବା ସରଳ IP ଗୁଡ଼ିକର textarea (ପ୍ରତି ଲାଇନ୍‌ରେ ଗୋଟିଏ, `#` ଟିପ୍ପଣୀ ଅନୁମତ) ଯେଉଁଥିରେ ଆପଣଙ୍କ ନିଜ front-line proxies / load-balancers ତାଲିକାଭୁକ୍ତ ହୁଏ। ଏହା ଛାଡ଼ା, rate limiter ସକ୍ରିୟ ଥିଲେ ମଧ୍ୟ `X-Forwarded-For` ଅଣଦେଖା ହୁଏ।
* ନୂଆ: ସମ୍ଭାବ୍ୟ Cloudflare / proxy ଅବସ୍ଥାର ପ୍ରଥମ-ସକ୍ରିୟ auto-detection, ଏକ-କ୍ଲିକ୍ "ଚିହ୍ନଟ ସେଟିଂ ଲାଗୁ କରନ୍ତୁ" admin ସୂଚନା ସହିତ। plugin କେବେ ମଧ୍ୟ ଆପଣଙ୍କ ସଞ୍ଚିତ ମୂଲ୍ୟଗୁଡ଼ିକୁ overwrite କରେନାହିଁ; ପରବର୍ତ୍ତୀ traffic ଯଦି ଦର୍ଶାଏ ଯେ ଆପଣଙ୍କ config ବାସ୍ତବତା ସହିତ ଆଉ ମେଳ ଖାଉନାହିଁ (ଯଥା Cloudflare CIDR ରେଞ୍ଜ ବଦଳିଲା ଏବଂ ଆପଣଙ୍କ proxy CIDR ଏବେ ପୁରୁଣା), ତେବେ ସୁପାରିଶିତ update ସହିତ ଏକ ଅପସାରଣ-ଅଯୋଗ୍ୟ mismatch ସୂଚନା ଦେଖାଯାଏ।
* ସୁଧାରାଗଲା: Invisible mode ଆଉ ନିରବରେ `cap_security_level` କୁ FAST କୁ ନିମ୍ନ କରେନାହିଁ — admin ଦ୍ୱାରା ବିନ୍ୟାସିତ level କୁ ମାନ୍ୟ କରାଯାଏ। ନିଜସ୍ୱ logic ଚାହୁଁଥିବା ସାଇଟ୍‌ଗୁଡ଼ିକ ପାଇଁ ଏକ ନୂଆ `wu_cap_server_security_level` filter ଉପଲବ୍ଧ।
* ସୁଧାରାଗଲା: ପରିସଂଖ୍ୟାନ `rate_limits_triggered` counter ଏବେ କେବଳ ଦୁର୍ଲଭ post-success backstop path ରେ ନୁହେଁ, ପ୍ରତ୍ୟେକ block ରେ ବଢ଼େ।
* ସୁଧାରାଗଲା: `Captcha_Core::get_client_ip()` ଏବେ rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), ଓ ପରିସଂଖ୍ୟାନ ସାରାରେ visitor IP attribution ପାଇଁ ଏକମାତ୍ର ସତ୍ୟ ସ୍ରୋତ — ଏହା ଏକ spoofing vector ବନ୍ଦ କରେ, ଯେଉଁଠି ଜାଲି `CF-Connecting-IP` header ବୋକିଥିବା ସିଧା origin-server requests ଗୁଡ଼ିକ real peer ପରିବର୍ତ୍ତେ spoofed IP ଦ୍ୱାରା bucketed ହୋଇଥାନ୍ତା।
* ସୁଧାରାଗଲା: WooCommerce classic checkout rate-limit gate ଏବେ `woocommerce_before_checkout_form` ପରିବର୍ତ୍ତେ `template_redirect` (priority 1) ରେ ଚାଲୁହୁଏ। cart ଖାଲି ଥିଲେ form-level hook କେବେ ଚାଲୁହୁଏନାହିଁ, ସେହିପାଇଁ କୌଣସି product ଯୋଗ ନକରୁଥିବା flood traffic ସମ୍ପୂର୍ଣ୍ଣ limiter କୁ ଏଡ଼ାଇ ଯାଉଥିଲା।
* ସୁଧାରାଗଲା: WooCommerce pay-for-order rate-limit gate ଏବେ `woocommerce_before_pay_action` ପରିବର୍ତ୍ତେ `template_redirect` ରେ ଚାଲୁହୁଏ। ପରବର୍ତ୍ତୀଟି କେବଳ `wp_verify_nonce('woocommerce-pay')` ସଫଳ ହେବା ପରେ ଚାଲୁହୁଏ, ଅର୍ଥାତ୍ unauth attackers (ବାସ୍ତବ threat model) limiter କୁ କେବେ trigger କରୁନଥିଲେ।
* ସୁଧାରାଗଲା: WooCommerce Store API (blocks) checkout rate-limit gate ଏବେ `woocommerce_store_api_checkout_update_order_from_request` ପରିବର୍ତ୍ତେ `rest_pre_dispatch` ରେ ଚାଲୁହୁଏ। ପରବର୍ତ୍ତୀଟି କେବଳ Store API cart ଓ billing fields validate କରିବା ପରେ ଚାଲୁହୁଏ, ସେହିପାଇଁ unauth bots validator ଠାରୁ 400 ପାଉଥିଲେ ଏବଂ limiter କୁ କେବେ trip କରୁନଥିଲେ।
* ସୁଧାରାଗଲା: Ultimate Multisite inline-login rate-limit gate ଏବେ `wu_before_inline_login` ପରିବର୍ତ୍ତେ `wu_ajax_nopriv_wu_inline_login` priority 1 (ଏବଂ logged-in mirror) ରେ ଚାଲୁହୁଏ। ପରବର୍ତ୍ତୀଟି କେବଳ `check_ajax_referer('wu_checkout')` ସଫଳ ହେବା ପରେ ଚାଲୁହୁଏ, ସେହିପାଇଁ ବୈଧ wu_checkout nonce ନଥିବା unauth bots 403 ପାଉଥିଲେ ଏବଂ limiter କୁ କେବେ trip କରୁନଥିଲେ।
* ସୁଧାରାଗଲା: `Rate_Limiter::enforce()` ଏବେ `surface|ip` ଦ୍ୱାରା keyed ଥିବା ପ୍ରତି-request ଗୋଟିଏ guard ଲାଗୁ କରେ, ସେହିପାଇଁ ପ୍ରତି render ରେ ଦୁଇଥର ଚାଲୁହେଉଥିବା upstream hooks (ବିଶେଷକରି Ultimate Multisite ରେ `wu_setup_checkout`) ଆଉ କାର୍ଯ୍ୟକାରୀ rate-limit threshold କୁ ଅର୍ଧେକ କରେନାହିଁ।
* ସୁଧାରାଗଲା: Rate-limit surface gates ଆଉ `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) ସହ ପରାମର୍ଶ କରେନାହିଁ। ସେହି filter "captcha ଅନ୍ୟ surface ଦ୍ୱାରା ପୂର୍ବରୁ handled" ବୋଲି ସୂଚାଏ ଏବଂ flood protection ସହିତ ସ୍ୱାଧୀନ — WooCommerce integration, Woo nonce ଥିଲେ WordPress login captcha skip କରିବା ପାଇଁ ଏହାକୁ hook କରୁଥିଲା, ଯାହା rate counting କୁ ପ୍ରଭାବିତ କରି Woo POSTs କୁ limiter ଏଡ଼ାଇବାକୁ ଦେଉଥିଲା। rate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter ହିଁ ଏବେ ଲାଗୁଥିବା ଏକମାତ୍ର bypass।

ସଂସ୍କରଣ: 1.3.2 - 2026-01-27 ରେ ମୁକ୍ତିଲାଭ
* ସୁଧାରାଗଲା: Elementor କିମ୍ବା ଅନ୍ୟ page builders ବ୍ୟବହାର କରୁଥିବା checkout forms ରେ Cap widget render ହେଉନଥିଲା
* ସୁଧାରାଗଲା: wp_kses() sanitization ଦ୍ୱାରା cap-widget custom element କାଟି ଦିଆଯାଉଥିଲା
* ଉନ୍ନତ: HTML filtering ଏଡ଼ାଇବାକୁ checkout captcha field ପାଇଁ callable content ବ୍ୟବହାର କରନ୍ତୁ
* ଉନ୍ନତ: edge cases ପାଇଁ fallback ସହିତ JavaScript ସରଳ କରାଗଲା

ସଂସ୍କରଣ: 1.3.1 - 2026-01-26 ରେ ମୁକ୍ତିଲାଭ
* ସୁଧାରାଗଲା: Cap Captcha invisible mode ଡାଇନାମିକ୍ Ultimate Multisite checkout forms ରେ auto-solving କରୁନଥିଲା
* ଉନ୍ନତ: Cap checkout script ଏବେ dynamically loaded widgets ଚିହ୍ନଟ କରିବାକୁ MutationObserver ବ୍ୟବହାର କରେ
* ଉନ୍ନତ: submission ପୂର୍ବରୁ token ପାଇଁ ଅପେକ୍ଷା କରିବାକୁ checkout button interception ଯୋଗ କରାଗଲା

Version: 1.3.0 - 2026-01-27 ରେ ପ୍ରକାଶିତ
* ନୂଆ: WooCommerce Blocks checkout ସହ Store API fetch interception ଏକୀକରଣ
* ନୂଆ: WooCommerce checkout ପାଇଁ ଅଦୃଶ୍ୟ captcha ସମର୍ଥନ (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* ନୂଆ: Ultimate Multisite ବିନା ବ୍ୟବହାର ପାଇଁ ସ୍ୱତନ୍ତ୍ର settings page
* ନୂଆ: dependency conflict prevention ପାଇଁ Jetpack Autoloader
* ଠିକ୍ କରାଗଲା: dynamic Ultimate Multisite checkout ରେ hCaptcha rendering ହେଉନଥିଲା (AJAX-loaded content)
* ଠିକ୍ କରାଗଲା: form validation errors ହେଲେ Captcha refresh/reset ହେଉନଥିଲା
* ଠିକ୍ କରାଗଲା: WooCommerce checkout page ରେ hCaptcha ଦେଖାଯାଉନଥିଲା
* ଠିକ୍ କରାଗଲା: reCAPTCHA class not found error (google/recaptcha PHP library ଯୋଡ଼ାଗଲା)
* ଉନ୍ନତ: WordPress hooks, MutationObserver, ଏବଂ AJAX interception ମାଧ୍ୟମରେ error detection
* ଉନ୍ନତ: settings descriptions ଏବେ API keys ପାଇଁ dashboard URLs ସମ୍ମିଳିତ କରେ

Version: 1.2.2 - 2026-01-24 ରେ ପ୍ରକାଶିତ
* ଠିକ୍ କରାଗଲା: Ultimate Multisite Login Form Element ରେ Captcha ଦେଖାଯାଉନଥିଲା (form filter name mismatch)
* ଠିକ୍ କରାଗଲା: wp_kses() sanitization ଦ୍ୱାରା Cap widget HTML ହଟାଯାଉଥିଲା
* ଠିକ୍ କରାଗଲା: element IDs ରେ slashes ଥିବା forms କୁ JavaScript selectors ଖୋଜିପାରୁନଥିଲା
* ଯୋଡ଼ାଗଲା: ଅନୁମୋଦିତ HTML tags ବିସ୍ତାର କରିବା ପାଇଁ classaddons ପାଇଁ filter hook `wu_kses_allowed_html`
* ହଟାଗଲା: provider-specific scripts ଦ୍ୱାରା ପରିବର୍ତ୍ତିତ dead code JavaScript files

Version: 1.2.1 - 2026-01-23 ରେ ପ୍ରକାଶିତ

* ଠିକ୍ କରାଗଲା: multisite environments ରେ Cap Captcha token validation ବିଫଳ ହେଉଥିଲା (ଏବେ network-wide transients ବ୍ୟବହାର କରେ)
* ଠିକ୍ କରାଗଲା: login status ଯାହାହେଉ, Captcha ଏବେ ସମସ୍ତ users ପାଇଁ ସମାନ ଭାବରେ render ହୁଏ
* ଠିକ୍ କରାଗଲା: captcha rendering ଏବଂ validation ମଧ୍ୟରେ mismatch, ଯାହାରେ checkout failures ହେଉଥିଲା

Version: 1.2.0 - 2026-01-21 ରେ ପ୍ରକାଶିତ

* ନୂଆ: Cap Captcha - self-hosted proof-of-work captcha, activation ସମୟରେ default ଭାବେ enabled
* ନୂଆ: Zero-configuration protection - addon କୁ activate କରନ୍ତୁ ଏବଂ ଆପଣ ସତେଜ ସୁରକ୍ଷିତ
* ନୂଆ: ସହଜ extensibility ପାଇଁ polymorphic captcha provider architecture
* ନୂଆ: card testing attacks ବିରୋଧରେ WooCommerce Store API checkout protection
* ନୂଆ: challenges, verifications, ଏବଂ blocked attacks ଦେଖାଉଥିବା statistics tracking dashboard
* ନୂଆ: Cap Captcha difficulty ପାଇଁ security level presets (Fast, Medium, Max)
* ନୂଆ: reCAPTCHA ଏବଂ hCaptcha providers ପାଇଁ abstract base classes
* ଉନ୍ନତ: modular provider classes ରେ codebase refactor କରାଗଲା
* ଉନ୍ନତ: dedicated manager class ସହ concerns ର ଭଲ separation
* Fixed: Security improvements for $_SERVER variable sanitization
* ଠିକ୍ କରାଗଲା: WordPress naming conventions ପାଇଁ PHPUnit test configuration

Version: 1.0.1 - 2025-09-28 ରେ ପ୍ରକାଶିତ

* prefix କୁ ultimate-multisite କରି ନାମ ବଦଳାନ୍ତୁ; text domain ଅଦ୍ୟତନ କରନ୍ତୁ; version bump.
