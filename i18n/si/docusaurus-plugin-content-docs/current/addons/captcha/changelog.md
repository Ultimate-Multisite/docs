---
title: කැප්චා වෙනස්කම් ලේඛනය
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha වෙනස්කම් ලැයිස්තුව

අනුවාදය: 1.5.0 - 2026-05-22 දින නිකුත් කරන ලදී
* නව: Hard-stop rate limiter — captcha-ආරක්ෂිත මතුපිටවල් (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) මත සෑම GET සහ POST එකක්ම ගණන් කර, HTTP 429, `Retry-After` header එකක්, සහ අහඹු tarpit sleep එකක් (තත්පර 1–5, තත්පර 15 දී දැඩිව සීමා කළ) සමඟ ප්‍රතිචාර දක්වයි.
* නව: tarpit කවුළුව සකස් කිරීමට `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` සැකසුම්.
* නව: විශ්වාසනීය IP පරාස නිදහස් කිරීමට `wu_cap_rate_limit_whitelist_ip` filter.
* නව: hard-stop ප්‍රතිචාරය යැවීමටම පෙර ක්‍රියාත්මක වන `wu_cap_rate_limit_will_block` action.
* නව: ව්‍යාජකරණයට ප්‍රතිරෝධී client-IP හඳුනාගැනීම. `Captcha_Core::get_client_ip()` (rate-limit bucket keys, captcha siteverify `remoteip`, සහ සංඛ්‍යාලේඛන IP hashes සඳහා සත්‍ය මූලාශ්‍රය) දැන් දැඩි විශ්වාස ආකෘතියක් බලගන්වයි: REMOTE_ADDR පදනම වේ, `CF-Connecting-IP` ගෞරවයට ගන්නේ ක්ෂණික peer එක වත්මන් Cloudflare IP පරාසයක් තුළ ඇති විට පමණි, සහ `X-Forwarded-For` ගෞරවයට ගන්නේ ක්ෂණික peer එක admin-වින්‍යාස කළ trusted-proxy ලැයිස්තුවේ ඇති විට පමණි. එවිට අමුත්තාගේ IP මත නතර වීමට පෙර විශ්වාසනීය/CF hops මඟහරින දකුණේ සිට වමට ගමනක් සිදු කරයි.
* නව: `cap_trust_cloudflare_headers` සැකසුම (පෙරනිමිය OFF) — Cloudflare පිටුපස සිටින විට `CF-Connecting-IP` විශ්වාසයට ඇතුළත් වන්න. plugin එක සමඟ බැඳුනු Cloudflare CIDR snapshot එකක් එයි, සහ refresh අසාර්ථක වුවහොත් bundled fallback සමඟ wp-cron හරහා එය සතිපතා refresh කරයි.
* නව: `cap_trusted_proxies` සැකසුම — ඔබේම front-line proxies / load-balancers ලැයිස්තුගත කරන CIDRs හෝ සරල IPs සඳහා textarea එකක් (පේළියකට එකක්, `#` අදහස් අවසරයි). මෙය නොමැතිව, rate limiter සක්‍රීය වුවත් `X-Forwarded-For` නොසලකා හරිනු ලැබේ.
* නව: Cloudflare / proxy තත්ත්වය විය හැකි පරිදි පළමු සක්‍රීය කිරීමේ ස්වයං-හඳුනාගැනීම, එක්-ක්ලික් "හඳුනාගත් සැකසුම් යොදන්න" admin notice එකක් සමඟ. plugin එක ඔබ සුරැකි අගයන් කිසිදා උඩින් ලියන්නේ නැත; පසුව ඇති traffic ඔබේ config එක තවදුරටත් යථාර්ථයට නොගැලපෙන බව පෙන්වුවහොත් (උදා. Cloudflare CIDR පරාස වෙනස් කර ඇති අතර ඔබේ proxy CIDR දැන් පැරණි නම්), ඉවත් කළ නොහැකි mismatch notice එකක් නිර්දේශිත යාවත්කාලීනය පෙන්වයි.
* සවි කළා: Invisible mode දැන් `cap_security_level` නිහඬව FAST වෙත පහත දැමීමක් නොකරයි — admin විසින් වින්‍යාස කළ මට්ටම ගෞරවයට ගනී. අභිරුචි logic අවශ්‍ය sites සඳහා නව `wu_cap_server_security_level` filter එකක් ලබා ගත හැක.
* සවි කළා: සංඛ්‍යාලේඛන `rate_limits_triggered` counter එක දැන් දුර්ලභ post-success backstop මාර්ගයේ පමණක් නොව, සෑම block එකකදීම වැඩි වේ.
* සවි කළා: rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), සහ සංඛ්‍යාලේඛන හරහා visitor IP attribution සඳහා `Captcha_Core::get_client_ip()` දැන් එකම සත්‍ය මූලාශ්‍රයයි — ව්‍යාජ `CF-Connecting-IP` header එකක් රැගෙන එන direct origin-server requests සැබෑ peer වෙනුවට ව්‍යාජ IP එකෙන් bucket වීමට ඉඩ තිබූ spoofing vector එකක් වසා දමයි.
* සවි කළා: WooCommerce classic checkout rate-limit gate දැන් `woocommerce_before_checkout_form` වෙනුවට `template_redirect` (priority 1) මත ක්‍රියාත්මක වේ. cart එක හිස් වූ විට form-level hook කිසිදා ක්‍රියාත්මක නොවන නිසා, product එකක් කිසිදා එකතු නොකරන flood traffic එක limiter එක සම්පූර්ණයෙන් මඟහැරියේය.
* සවි කළා: WooCommerce pay-for-order rate-limit gate දැන් `woocommerce_before_pay_action` වෙනුවට `template_redirect` මත ක්‍රියාත්මක වේ. දෙවැන්න ක්‍රියාත්මක වන්නේ `wp_verify_nonce('woocommerce-pay')` සාර්ථක වූ පසු පමණක් බැවින්, unauth attackers (සැබෑ threat model එක) limiter එක කිසිදා trigger කළේ නැත.
* සවි කළා: WooCommerce Store API (blocks) checkout rate-limit gate දැන් `woocommerce_store_api_checkout_update_order_from_request` වෙනුවට `rest_pre_dispatch` මත ක්‍රියාත්මක වේ. දෙවැන්න ක්‍රියාත්මක වන්නේ Store API විසින් cart සහ billing fields වලංගු කළ පසු පමණක් බැවින්, unauth bots වලට validator වෙතින් 400 ලැබී limiter එක කිසිදා trip නොවීය.
* සවි කළා: Ultimate Multisite inline-login rate-limit gate දැන් `wu_before_inline_login` වෙනුවට `wu_ajax_nopriv_wu_inline_login` priority 1 (සහ logged-in mirror) මත ක්‍රියාත්මක වේ. දෙවැන්න ක්‍රියාත්මක වන්නේ `check_ajax_referer('wu_checkout')` සාර්ථක වූ පසු පමණක් බැවින්, වලංගු wu_checkout nonce නැති unauth bots වලට 403 ලැබී limiter එක කිසිදා trip නොවීය.
* සවි කළා: `Rate_Limiter::enforce()` දැන් `surface|ip` මඟින් key කළ once-per-request guard එකක් යොදයි, එබැවින් render එකකට දෙවරක් ක්‍රියාත්මක වන upstream hooks (විශේෂයෙන් Ultimate Multisite හි `wu_setup_checkout`) තවදුරටත් ක්‍රියාකාරී rate-limit threshold එක අඩකින් අඩු නොකරයි.
* සවි කළා: Rate-limit surface gates තවදුරටත් `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) විමසන්නේ නැත. එම filter එක "captcha දැනටමත් වෙනත් surface එකකින් හැසිරවී ඇත" යන්න සංඥා කරයි, සහ flood protection වෙතින් ස්වාධීනයි — Woo nonce එකක් තිබෙන විට WordPress login captcha මඟහැරීමට WooCommerce integration එක එයට hook වී තිබූ අතර, එය rate counting වෙත කාන්දු වී Woo POSTs වලට limiter එක මඟහැරීමට ඉඩ දුන්නේය. දැන් අදාළ වන එකම bypass එක rate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter වේ.

අනුවාදය: 1.3.2 - 2026-01-27 දින නිකුත් කරන ලදී
* සවි කළා: Elementor හෝ වෙනත් page builders භාවිත කරන checkout forms මත Cap widget render නොවීම
* සවි කළා: wp_kses() sanitization මඟින් cap-widget custom element ඉවත් වීම
* වැඩිදියුණු කළා: HTML filtering මඟහැරීමට checkout captcha field සඳහා callable content භාවිත කරන්න
* වැඩිදියුණු කළා: edge cases සඳහා fallback සමඟ JavaScript සරල කළා

අනුවාදය: 1.3.1 - 2026-01-26 දින නිකුත් කරන ලදී
* සවි කළා: dynamic Ultimate Multisite checkout forms මත Cap Captcha invisible mode ස්වයංක්‍රීයව විසඳා නොගැනීම
* වැඩිදියුණු කළා: Cap checkout script දැන් dynamically loaded widgets හඳුනාගැනීමට MutationObserver භාවිත කරයි
* වැඩිදියුණු කළා: submission ට පෙර token සඳහා රැඳී සිටීමට checkout button interception එක් කළා

Version: 1.3.0 - 2026-01-27 නිකුත් කරන ලදී
* නව: Store API ලබාගැනීම අතුරුග්‍රහණය සමඟ WooCommerce Blocks checkout ඒකාබද්ධ කිරීම
* නව: WooCommerce checkout සඳහා නොපෙනෙන captcha සහාය (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* නව: Ultimate Multisite නොමැතිව භාවිතය සඳහා ස්වාධීන සැකසුම් පිටුව
* නව: අනුරූපතා ගැටුම් වැළැක්වීම සඳහා Jetpack Autoloader
* නිවැරදි කළා: ගතික Ultimate Multisite checkout මත hCaptcha නොපෙන්වීම (AJAX-loaded content)
* නිවැරදි කළා: ආකෘති සත්‍යාපන දෝෂ සිදුවන විට Captcha නැවුම්/යළි සැකසීම නොවීම
* නිවැරදි කළා: WooCommerce checkout පිටුවේ hCaptcha නොපෙන්වීම
* නිවැරදි කළා: reCAPTCHA class සොයාගත නොහැකි දෝෂය (google/recaptcha PHP පුස්තකාලය එක් කරන ලදී)
* වැඩිදියුණු කළා: WordPress hooks, MutationObserver, සහ AJAX අතුරුග්‍රහණය හරහා දෝෂ හඳුනාගැනීම
* වැඩිදියුණු කළා: සැකසුම් විස්තරවල දැන් API keys සඳහා Dashboard URL ඇතුළත් වේ

Version: 1.2.2 - 2026-01-24 නිකුත් කරන ලදී
* නිවැරදි කළා: Ultimate Multisite Login Form Element මත Captcha නොපෙන්වීම (form filter නාම නොගැලපීම)
* නිවැරදි කළා: wp_kses() පිරිසිදුකරණයෙන් Cap widget HTML ඉවත් වීම
* නිවැරදි කළා: element IDs තුළ slash ඇති ආකෘති JavaScript selectors විසින් සොයා නොගැනීම
* එක් කළා: අවසර ලත් HTML ටැග් දිගු කිරීමට classaddons සඳහා `wu_kses_allowed_html` filter hook
* ඉවත් කළා: provider-specific scripts මඟින් ප්‍රතිස්ථාපනය කළ භාවිතයෙන් ඉවත් JavaScript ගොනු

Version: 1.2.1 - 2026-01-23 නිකුත් කරන ලදී

* නිවැරදි කළා: multisite පරිසරවල Cap Captcha token සත්‍යාපනය අසාර්ථක වීම (දැන් ජාලය පුරා transients භාවිතා කරයි)
* නිවැරදි කළා: පිවිසුම් තත්ත්වය කෙසේ වුවත් සියලු පරිශීලකයින් සඳහා Captcha දැන් සංගතව පෙන්වෙයි
* නිවැරදි කළා: checkout අසාර්ථක වීමට හේතු වූ captcha පෙන්වීම හා සත්‍යාපනය අතර නොගැලපීම

Version: 1.2.0 - 2026-01-21 නිකුත් කරන ලදී

* නව: Cap Captcha - ස්වයං-සත්කාරක proof-of-work captcha, සක්‍රිය කිරීමේදී පෙරනිමියෙන් සක්‍රීයයි
* නව: ශූන්‍ය-වින්‍යාස ආරක්ෂාව - addon එක සක්‍රිය කරන්න, ඔබ වහාම ආරක්ෂිතයි
* නව: පහසු දිගුකිරීම සඳහා බහුරූපී captcha provider ව්‍යුහය
* නව: card testing attacks වලට එරෙහිව WooCommerce Store API checkout ආරක්ෂාව
* නව: අභියෝග, සත්‍යාපන, සහ අවහිර කළ ප්‍රහාර පෙන්වන සංඛ්‍යාලේඛන අනුගමන Dashboard
* නව: Cap Captcha දුෂ්කරතාව සඳහා ආරක්ෂක මට්ටම් පෙරසැකසුම් (වේගවත්, මධ්‍යම, උපරිම)
* නව: reCAPTCHA සහ hCaptcha providers සඳහා සාමාන්‍ය මූලික classes
* වැඩිදියුණු කළා: කේත පදනම modular provider classes බවට නැවත සකස් කරන ලදී
* වැඩිදියුණු කළා: කැපවූ manager class සමඟ වගකීම් වඩා හොඳින් වෙන් කිරීම
* Fixed: Security improvements for $_SERVER variable sanitization
* නිවැරදි කළා: WordPress නම් කිරීමේ සම්මුති සඳහා PHPUnit පරීක්ෂණ වින්‍යාසය

Version: 1.0.1 - 2025-09-28 නිකුත් කරන ලදී

* prefix එක ultimate-multisite ලෙස නැවත නම් කරන්න; text domain යාවත්කාලීන කරන්න; version bump.
