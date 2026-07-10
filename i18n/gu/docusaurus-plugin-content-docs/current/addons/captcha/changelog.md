---
title: Captcha ફેરફારની નોંધ
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog {#captcha-changelog}

Version: 1.5.0 - Released on 2026-05-22
* New: Hard-stop rate limiter — જે captcha-protected surfaces (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) પર દરેક GET અને POST ની ગણતરી કરે છે અને HTTP 429, એક `Retry-After` header, અને એક રેન્ડમાઇઝ્ડ tarpit sleep (1–5s, જે 15s સુધી મર્યાદિત છે) સાથે જવાબ આપે છે.
* New: tarpit window ને ટ્યુન કરવા માટે `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` સેટિંગ્સ.
* New: વિશ્વસનીય IP રેન્જને મુક્તિ આપવા માટે `wu_cap_rate_limit_whitelist_ip` filter.
* New: `wu_cap_rate_limit_will_block` action જે hard-stop response મોકલવામાં આવે તે પહેલા તરત જ ટ્રિગર થાય છે.
* New: Spoof-resistant client-IP detection. `Captcha_Core::get_client_ip()` (જે rate-limit bucket keys, captcha siteverify `remoteip`, અને statistics IP hashes માટે સત્યનો સ્ત્રોત છે) હવે એક કડક વિશ્વાસ મોડેલ લાગુ કરે છે: REMOTE_ADDR એ પાયો છે, `CF-Connecting-IP` ત્યારે જ માન્ય છે જ્યારે તાત્કાલિક peer વર્તમાન Cloudflare IP range માં હોય, અને `X-Forwarded-For` ત્યારે જ માન્ય છે જ્યારે તાત્કાલિક peer એડમિન-configured trusted-proxy list માં હોય, જેમાં એક જમણેથી ડાબેની ચાલ (right-to-left walk) હોય છે જે વિશ્વસનીય/CF hops ને છોડીને વિઝિટર IP પર સ્થપાય છે.
* New: `cap_trust_cloudflare_headers` setting (default OFF) — Cloudflare ની પાછળ હો ત્યારે `CF-Connecting-IP` માં વિશ્વાસ કરવા માટે ઓપ્ટ-ઇન કરો. પ્લગઇન એક બંડલ્ડ Cloudflare CIDR snapshot સાથે આવે છે અને જો refresh નિષ્ફળ જાય તો બંડલ્ડ fallback સાથે wp-cron દ્વારા તેને સાપ્તાહિક રીતે refresh કરે છે.
* New: `cap_trusted_proxies` setting — CIDRs અથવા ખાલી IPs (એક પ્રતિ લાઇન, `#` કોમેન્ટ્સની મંજૂરી છે) નું textarea જે તમારા પોતાના ફ્રન્ટ-લાઇન પ્રોક્સી / લોડ-બેલેન્સર્સની યાદી આપે છે. તેના વિના, rate limiter સક્ષમ હોવા છતાં `X-Forwarded-For` ને અવગણવામાં આવે છે.
* New: સંભવિત Cloudflare / proxy posture નું પ્રથમ-સક્ષમ સ્વચાલિત detection, જેમાં એક-ક્લિક "Apply detected settings" એડમિન નોટિસ હોય છે. પ્લગઇન ક્યારેય તમારા સેવ કરેલા મૂલ્યોને ઓવરરાઇટ નથી કરતું; જો પછીનો ટ્રાફિક સૂચવે છે કે તમારી config હવે વાસ્તવિકતા સાથે મેળ ખાતી નથી (દા.ત. Cloudflare એ CIDR રેન્જ બદલી દીધા છે અને તમારો proxy CIDR હવે જૂનો છે), તો એક નકારી ન શકાય તેવી mismatch નોટિસ ભલામણ કરેલ અપડેટ દર્શાવે છે.
* Fixed: Invisible mode હવે આપમેળે `cap_security_level` ને FAST માં ઘટાડતો નથી — એડમિન દ્વારા કન્ફિગર કરેલ સ્તર માન્ય છે. જે સાઇટ્સને કસ્ટમ logic જોઈતું હોય તેમના માટે એક નવો `wu_cap_server_security_level` filter ઉપલબ્ધ છે.
* Fixed: Statistics `rate_limits_triggered` counter હવે દરેક બ્લોક પર વધે છે, માત્ર દુર્લભ post-success backstop path પર નહીં.
* Fixed: `Captcha_Core::get_client_ip()` હવે rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), અને statistics માં વિઝિટર IP attribution માટે એકમાત્ર સત્યનો સ્ત્રોત છે — આનાથી એક spoofing vector બંધ થાય છે જ્યાં forged `CF-Connecting-IP` header ધરાવતા direct origin-server requests ને spoofed IP દ્વારા bucket કરવામાં આવતા હતા તેના બદલે વાસ્તવિક peer દ્વારા.
* Fixed: WooCommerce classic checkout rate-limit gate હવે `woocommerce_before_checkout_form` ને બદલે `template_redirect` (priority 1) પર ટ્રિગર થાય છે. ફોર્મ-level hook ત્યારે ક્યારેય ટ્રિગર થતો નથી જ્યારે cart ખાલી હોય, તેથી જે ટ્રાફિકમાં કોઈ product ઉમેરવામાં ન આવ્યું હોય તે limiter ને સંપૂર્ણપણે બાયપાસ કરી રહ્યું હતું.
* Fixed: WooCommerce pay-for-order rate-limit gate હવે `woocommerce_before_pay_action` ને બદલે `template_redirect` પર ટ્રિગર થાય છે. બીજું ફક્ત `wp_verify_nonce('woocommerce-pay')` સફળ થયા પછી જ ટ્રિગર થાય છે, જેનો અર્થ છે કે અનધિકૃત હુમલાખોરો (actual threat model) ક્યારેય limiter ને ટ્રિગર કરી શકતા ન હતા.
* Fixed: WooCommerce Store API (blocks) checkout rate-limit gate હવે `woocommerce_store_api_checkout_update_order_from_request` ને બદલે `rest_pre_dispatch` પર ટ્રિગર થાય છે. બીજું ફક્ત Store API દ્વારા cart અને billing fields માન્ય કર્યા પછી જ ટ્રિગર થાય છે, તેથી અનધિકૃત bots ને validator તરફથી 400 મળતું હતું અને ક્યારેય limiter ને ટ્રિપ નહોતા કરી શકતા.
* Fixed: Ultimate Multisite inline-login rate-limit gate હવે `wu_before_inline_login` ને બદલે `wu_ajax_nopriv_wu_inline_login` priority 1 (અને logged-in mirror) પર ટ્રિગર થાય છે. બીજું ફક્ત `check_ajax_referer('wu_checkout')` સફળ થયા પછી જ ટ્રિગર થાય છે, તેથી કોઈ માન્ય wu_checkout nonce વગરના અનધિકૃત bots ને 403 મળતું હતું અને ક્યારેય limiter ને ટ્રિપ નહોતા કરી શકતા.
* Fixed: `Rate_Limiter::enforce()` હવે `surface|ip` દ્વારા keyed એક સમયે-પ્રતિ-request guard લાગુ કરે છે, જેથી upstream hooks જે દરેક render પર બે વાર ટ્રિગર થાય છે (ખાસ કરીને Ultimate Multisite માં `wu_setup_checkout`), તે અસરકારક rate-limit threshold ને અડધું ન કરે.
* Fixed: Rate-limit surface gates હવે `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) નો સંદર્ભ લેતા નથી. તે filter "captcha અન્ય surface દ્વારા પહેલેથી હેન્ડલ થઈ ગયું છે" સંકેત આપે છે અને flood protection થી સ્વતંત્ર છે — WooCommerce integration એ તેને એક નહોંગ તરીકે hook કર્યું હતું જેથી Woo nonce હાજર હોય ત્યારે WordPress login captcha ને સ્કીપ કરી શકાય, જે rate counting માં ભળી ગયું અને Woo POSTs ને limiter થી બચાવવા દીધા. rate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter એ એકમાત્ર bypass છે જે હવે લાગુ પડે છે.

Version: 1.3.2 - Released on 2026-01-27
* Fixed: Elementor અથવા અન્ય page builders નો ઉપયોગ કરીને checkout forms પર Cap widget રેન્ડર ન થતું હતું.
* Fixed: cap-widget custom element wp_kses() sanitization દ્વારા સ્ટ્રીપ થઈ રહ્યું હતું.
* Improved: HTML filtering ને બાયપાસ કરવા માટે checkout captcha field માટે callable content નો ઉપયોગ.
* Improved: edge cases માટે fallback સાથે JavaScript નું સરળીકરણ.

Version: 1.3.1 - Released on 2026-01-26
* Fixed: Dynamic Ultimate Multisite checkout forms પર Cap Captcha invisible mode આપમેળે solve થતો ન હતો.
* Improved: Cap checkout script હવે dynamically loaded widgets ને detect કરવા માટે MutationObserver નો ઉપયોગ કરે છે.
* Improved: submission પહેલા token ની રાહ જોવા માટે checkout button interception ઉમેર્યું.

Version: 1.3.0 - Released on 2026-01-27
* New: Store API fetch interception સાથે WooCommerce Blocks checkout integration.
* New: WooCommerce checkout માટે invisible captcha support (hCaptcha invisible, reCAPTCHA v2 invisible, v3).
* New: Ultimate Multisite વિના ઉપયોગ માટે સ્વતંત્ર (Standalone) settings page.
* New: dependency conflict prevention માટે Jetpack Autoloader.
* Fixed: Dynamic Ultimate Multisite checkout (AJAX-loaded content) પર hCaptcha રેન્ડર ન થતું હતું.
* Fixed: form validation errors થવા પર Captcha refresh/reset થતું ન હતું.
* Fixed: WooCommerce checkout page પર hCaptcha દેખાતું ન હતું.
* Fixed: reCAPTCHA class not found error (google/recaptcha PHP library ઉમેરવામાં આવી).
* Improved: WordPress hooks, MutationObserver, અને AJAX interception દ્વારા error detection.
* Improved: Settings descriptions માં API keys માટે dashboard URLs શામેલ છે.

Version: 1.2.2 - Released on 2026-01-24
* Fixed: Ultimate Multisite Login Form Element પર Captcha પ્રદર્શિત ન થતું હતું (form filter name mismatch).
* Fixed: Cap widget HTML wp_kses() sanitization દ્વારા સ્ટ્રીપ થઈ રહ્યું હતું.
* Fixed: JavaScript selectors એ element IDs માં slashes વાળા forms ને શોધી શકતા ન હતા.
* Added: classaddons ને માન્ય HTML tags વધારવા માટે Filter hook `wu_kses_allowed_html`.
* Removed: Dead code JavaScript files ને provider-specific scripts દ્વારા બદલવામાં આવ્યા.

Version: 1.2.1 - Released on 2026-01-23

* Fixed: multisite environments માં Cap Captcha token validation નિષ્ફળ થતું હતું (હવે network-wide transients નો ઉપયોગ કરે છે).
* Fixed: Captcha હવે લોગિન સ્ટેટસને ધ્યાનમાં લીધા વિના તમામ વપરાશકર્તાઓ માટે સુસંગત રીતે રેન્ડર થાય છે.
* Fixed: captcha rendering અને validation વચ્ચેનો mismatch જે checkout failures નું કારણ બનતો હતો.

Version: 1.2.0 - Released on 2026-01-21

* New: Cap Captcha - self-hosted proof-of-work captcha, activation પર default રીતે સક્ષમ.
* New: Zero-configuration protection - addon activate કરો અને તમે તરત જ સુરક્ષિત છો.
* New: સરળ extensibility માટે Polymorphic captcha provider architecture.
* New: card testing attacks સામે WooCommerce Store API checkout protection.
* New: challenges, verifications, અને blocked attacks દર્શાવતું Statistics tracking dashboard.
* New: Cap Captcha difficulty માટે Security level presets (Fast, Medium, Max).
* New: reCAPTCHA અને hCaptcha providers માટે Abstract base classes.
* Improved: modular provider classes માં codebase નું refactoring.
* Improved: dedicated manager class સાથે concerns નું વધુ સારું વિભાજન.
* Fixed: $_SERVER variable sanitization માટે Security improvements.
* Fixed: WordPress naming conventions માટે PHPUnit test configuration.

Version: 1.0.1 - Released on 2025-09-28

* Prefix ને ultimate-multisite માં rename કર્યો; text domain અપડેટ કર્યો; version bump.
