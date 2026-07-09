---
title: Captcha മാറ്റങ്ങൾ
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog {#captcha-changelog}

Version: 1.5.0 - Released on 2026-05-22
* New: Hard-stop rate limiter — captcha-protected surfaces-ൽ (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) നടക്കുന്ന എല്ലാ GET, POST കോളുകളും എണ്ണുകയും HTTP 429, ഒരു `Retry-After` ഹെഡർ, കൂടാതെ ക്രമരഹിതമായ ഒരു ടാർപിറ്റ് സ്ലീപ്പ് (1–5 സെക്കൻഡ്, പരമാവധി 15 സെക്കൻഡ്) എന്നിവയോടെ മറുപടി നൽകുകയും ചെയ്യുന്നു.
* New: ടാർപിറ്റ് വിൻഡോ ക്രമീകരിക്കാൻ `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` എന്നീ സെറ്റിംഗുകൾ ചേർത്തു.
* New: വിശ്വസ്തരായ IP റേഞ്ചുകൾ ഒഴിവാക്കാൻ `wu_cap_rate_limit_whitelist_ip` എന്ന ഫിൽട്ടർ ചേർത്തു.
* New: ഹാർഡ്-സ്റ്റോപ്പ് മറുപടി അയക്കുന്നതിന് തൊട്ടുമുമ്പ് പ്രവർത്തിക്കുന്ന `wu_cap_rate_limit_will_block` എന്ന ആക്ഷൻ ചേർത്തു.
* New: Spoof-resistant client-IP detection. `Captcha_Core::get_client_ip()` (rate-limit ബക്കറ്റ് കീകളുടെ, captcha siteverify-യുടെ `remoteip`, കൂടാതെ സ്റ്റാറ്റിസ്റ്റിക്സ് IP ഹാഷുകളുടെ ആധികാരിക സ്രോതസ്സ്) ഇപ്പോൾ ഒരു കർശനമായ വിശ്വാസ മാതൃക നടപ്പിലാക്കുന്നു: REMOTE_ADDR ആണ് അടിസ്ഥാനം, immediate peer ഒരു നിലവിലെ Cloudflare IP റേഞ്ചിൽ ഉള്ളപ്പോൾ മാത്രമേ `CF-Connecting-IP` അംഗീകരിക്കുകയുള്ളൂ, കൂടാതെ immediate peer അഡ്മിൻ-കോൺഫിഗർ ചെയ്ത വിശ്വസ്ത-പ്രോക്സി ലിസ്റ്റിൽ ഉള്ളപ്പോൾ മാത്രമേ `X-Forwarded-For` അംഗീകരിക്കുകയുള്ളൂ. ഇത് ഒരു വലതുവശത്തുനിന്ന് ഇടത്തോട്ട് സഞ്ചരിക്കുന്ന രീതിയാണ്, വിസിറ്റർ IP-യിൽ എത്തിച്ചേരുന്നതിന് മുമ്പ് വിശ്വസ്തമായ/CF ഹോപ്പുകൾ ഒഴിവാക്കുന്നു.
* New: `cap_trust_cloudflare_headers` സെറ്റിംഗ് (default OFF) — Cloudflare-ന് പിന്നിലായിരിക്കുമ്പോൾ `CF-Connecting-IP` വിശ്വാസ്യതയിലേക്ക് മാറാൻ ഇത് സഹായിക്കുന്നു. ഈ പ്ലഗിൻ ഒരു ബണ്ടിൽ ചെയ്ത Cloudflare CIDR സ്നാപ്‌ഷോട്ട് നൽകുന്നു, കൂടാതെ wp-cron വഴി ആഴ്ചതോറും ഇത് റിഫ്രഷ് ചെയ്യുകയും, റിഫ്രഷ് പരാജയപ്പെട്ടാൽ ബണ്ടിൽ ചെയ്ത ഫല്ലബാക്ക് സംവിധാനം ഉപയോഗിക്കുകയും ചെയ്യുന്നു.
* New: `cap_trusted_proxies` സെറ്റിംഗ് — നിങ്ങളുടെ സ്വന്തം ഫ്രണ്ട്-ലൈൻ പ്രോക്സികൾ / ലോഡ്-ബാലൻസറുകൾ ലിസ്റ്റ് ചെയ്യുന്ന CIDR-കളോ അല്ലെങ്കിൽ ബേർ IP-കളോ അടങ്ങിയ ഒരു textarea (ഓരോന്നും ഒരു വരിയിൽ, `#` കമന്റുകൾ അനുവദനീയമാണ്). ഇത് ഇല്ലെങ്കിൽ, rate limiter എനേബിൾ ചെയ്തിട്ടുണ്ടെങ്കിലും `X-Forwarded-For` അവഗണിക്കും.
* New: Cloudflare / proxy പോസ്ചർ എന്നിവയുടെ സ്വയമേവ കണ്ടെത്തൽ ആദ്യമായി നടപ്പിലാക്കി. ഇതിനായി ഒരു ക്ലിക്കിൽ "Apply detected settings" എന്ന അഡ്മി നോട്ടീസ് നൽകുന്നു. നിങ്ങളുടെ സേവ് ചെയ്ത മൂല്യങ്ങൾ പ്ലഗിൻ ഒരിക്കലും മാറ്റിസ്ഥാപിക്കില്ല; തുടർന്നുള്ള ട്രാഫിക് നിങ്ങളുടെ കോൺഫിഗറേഷൻ യാഥാർത്ഥ്യവുമായി പൊരുത്തപ്പെടുന്നില്ല എന്ന് സൂചിപ്പിക്കുകയാണെങ്കിൽ (ഉദാഹരണത്തിന്, Cloudflare CIDR റേഞ്ചുകൾ മാറിയതായും നിങ്ങളുടെ പ്രോക്സി CIDR കാലഹരണപ്പെട്ടതായും), ഒരു അപ്രത്യക്ഷമാക്കാൻ കഴിയാത്ത പൊരുത്തക്കേട് നോട്ടീസ് ശുപാർശ ചെയ്യുന്ന അപ്ഡേറ്റ് കാണിക്കുന്നു.
* Fixed: Invisible mode ഇനി `cap_security_level` നെ silently FAST ലേക്ക് കുറയ്ക്കുന്നില്ല — അഡ്മിൻ കോൺഫിഗർ ചെയ്ത ലെവൽ പാലിക്കപ്പെടുന്നു. ഇഷ്ടാനുസൃത ലോജിക് ആവശ്യമുള്ള സൈറ്റുകൾക്കായി ഒരു പുതിയ `wu_cap_server_security_level` ഫിൽട്ടർ ലഭ്യമാണ്.
* Fixed: സ്റ്റാറ്റിസ്റ്റിക്സിലെ `rate_limits_triggered` കൗണ്ടർ ഇപ്പോൾ ഓരോ ബ്ലോക്കിലും വർദ്ധിക്കുന്നു, അപൂർവമായ post-success backstop പാത്തിൽ മാത്രമല്ല.
* Fixed: `Captcha_Core::get_client_ip()` ഇപ്പോൾ rate limiter, captcha പ്രൊവൈഡർമാർ (reCAPTCHA + hCaptcha `siteverify`), കൂടാതെ സ്റ്റാറ്റിസ്റ്റിക്സ് എന്നിവയിലുടനീളം വിസിറ്റർ IP ആട്രിബ്യൂഷনের ഏക സ്രോതസ്സാണ് — ഇത് ഒരു സ്പൂഫിംഗ് വെക്റ്റർ അടച്ചു. കാരണം, ഒരു വ്യാജ `CF-Connecting-IP` ഹെഡർ വഹിച്ചുകൊണ്ട് നേരിട്ടുള്ള origin-server അഭ്യർത്ഥനകൾ, യഥാർത്ഥ peer-ന് പകരം വ്യാജ IP ഉപയോഗിച്ച് ബക്കറ്റ് ചെയ്യുമായിരുന്നു.
* Fixed: WooCommerce classic checkout rate-limit gate ഇപ്പോൾ `woocommerce_before_checkout_form`-ന് പകരം `template_redirect` (priority 1) ൽ പ്രവർത്തിക്കുന്നു. കാർട്ട് ശൂന്യമാണെങ്കിൽ ഫോം-ലെവൽ ഹുക്ക് ഒരിക്കലും പ്രവർത്തിക്കില്ല, അതിനാൽ ഉൽപ്പന്നങ്ങൾ ചേർക്കാത്ത ഫ്ലഡ് ട്രാഫിക് ലിമിറ്ററിൽ നിന്ന് പൂർണ്ണമായും ഒഴിവാക്കപ്പെട്ടിരുന്നു.
* Fixed: WooCommerce pay-for-order rate-limit gate ഇപ്പോൾ `woocommerce_before_pay_action`-ന് പകരം `template_redirect` ൽ പ്രവർത്തിക്കുന്നു. രണ്ടാമത്തേത് `wp_verify_nonce('woocommerce-pay')` വിജയിച്ചതിന് ശേഷമേ പ്രവർത്തിക്കൂ, അതായത് അംഗീകാരമില്ലാത്ത ആക്രമണകാരികൾ (യഥാർത്ഥ ഭീഷണി മാതൃക) ഒരിക്കലും ലിമിറ്ററിനെ ട്രിഗർ ചെയ്തിരുന്നില്ല.
* Fixed: WooCommerce Store API (blocks) checkout rate-limit gate ഇപ്പോൾ `woocommerce_store_api_checkout_update_order_from_request`-ന് പകരം `rest_pre_dispatch` ൽ പ്രവർത്തിക്കുന്നു. രണ്ടാമത്തേത് Store API കാർട്ട്, ബില്ലിംഗ് ഫീൽഡുകൾ എന്നിവ സാധൂകരിച്ചതിന് ശേഷമേ പ്രവർത്തിക്കൂ, അതിനാൽ അംഗീകാരമില്ലാത്ത боട്ടുകൾ ваലിഡേറ്ററിൽ നിന്ന് 400 ലഭിക്കുകയും ലിമിറ്ററിനെ ട്രിഗർ ചെയ്യാതിരിക്കുകയും ചെയ്തു.
* Fixed: Ultimate Multisite inline-login rate-limit gate ഇപ്പോൾ `wu_before_inline_login`-ന് പകരം `wu_ajax_nopriv_wu_inline_login` priority 1 ൽ (കൂടാതെ ലോഗിൻ ചെയ്ത mirror-ലും) പ്രവർത്തിക്കുന്നു. രണ്ടാമത്തേത് `check_ajax_referer('wu_checkout')` വിജയിച്ചതിന് ശേഷമേ പ്രവർത്തിക്കൂ, അതിനാൽ സാധുവായ wu_checkout nonce ഇല്ലാത്ത അംഗീകാരമില്ലാത്ത боട്ടുകൾ 403 ലഭിക്കുകയും ലിമിറ്ററിനെ ട്രിഗർ ചെയ്യാതിരിക്കുകയും ചെയ്തു.
* Fixed: `Rate_Limiter::enforce()` ഇപ്പോൾ `surface|ip` ഉപയോഗിച്ച് ഒരു തവണ-ഒരു അഭ്യർത്ഥന ഗാർഡ് പ്രയോഗിക്കുന്നു. അതിനാൽ, ഒരു റെൻഡറിംഗിൽ രണ്ടുതവണ പ്രവർത്തിക്കുന്ന അപ്സ്ട്രീം ഹുക്കുകൾ (പ്രത്യേകിച്ച് Ultimate Multisite-ലെ `wu_setup_checkout`) യഥാർത്ഥ rate-limit പരിധി പകുതിയാക്കുന്നില്ല.
* Fixed: Rate-limit surface gates ഇനി `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) എന്നിവ പരിശോധിക്കുന്നില്ല. ഈ ഫിൽട്ടർ "captcha മറ്റൊരു surface-ൽ ഇതിനകം കൈകാര്യം ചെയ്തു" എന്ന് സൂചിപ്പിക്കുന്നു, ഇത് ഫ്ലഡ് സംരക്ഷണവുമായി ബന്ധമില്ലാത്തതാണ് — WooCommerce ഇന്റഗ്രേഷൻ ഒരു Woo nonce ഉണ്ടെങ്കിൽ WordPress ലോഗിൻ captcha ഒഴിവാക്കാൻ ഇതിനെ ഹുക്ക് ചെയ്തിരുന്നു, ഇത് rate counting-ലേക്ക് വ്യാപിക്കുകയും Woo POST-കൾ ലിമിറ്ററിൽ നിന്ന് ഒഴിവാക്കപ്പെടാൻ കാരണമാവുകയും ചെയ്തു. rate-limit-നെ മാത്രം സംബന്ധിച്ച `wu_cap_rate_limit_whitelist_ip` ഫിൽട്ടർ മാത്രമാണ് ഇപ്പോൾ ബാധകമാകുന്ന ബൈപാസ്.

Version: 1.3.2 - Released on 2026-01-27
* Fixed: Elementor അല്ലെങ്കിൽ മറ്റ് പേജ് ബിൽഡറുകൾ ഉപയോഗിക്കുന്ന checkout ഫോമുകളിൽ Cap widget റെൻഡർ ചെയ്യാത്ത പ്രശ്നം പരിഹരിച്ചു.
* Fixed: wp_kses() sanitization വഴി cap-widget custom element നീക്കം ചെയ്യപ്പെടുന്ന പ്രശ്നം പരിഹരിച്ചു.
* Improved: HTML ഫിൽട്ടറിംഗ് ഒഴിവാക്കാൻ checkout captcha field-ന് callable content ഉപയോഗിക്കാൻ സാധിച്ചു.
* Improved: edge cases-കൾക്കായി fallback സഹിതം JavaScript ലളിതമാക്കി.

Version: 1.3.1 - Released on 2026-01-26
* Fixed: dynamic Ultimate Multisite checkout ഫോമുകളിൽ Cap Captcha invisible mode ഓട്ടോമാറ്റിക്കായി solve ചെയ്യാത്ത പ്രശ്നം പരിഹരിച്ചു.
* Improved: dynamic ആയി ലോഡ് ചെയ്യപ്പെടുന്ന widgets കണ്ടെത്താൻ Cap checkout script ഇപ്പോൾ MutationObserver ഉപയോഗിക്കുന്നു.
* Improved: സമർപ്പിക്കപ്പെടുന്നതിന് മുമ്പ് ടോക്കൺ ലഭിക്കാൻ checkout ബട്ടൺ Interception ചേർത്തു.

Version: 1.3.0 - Released on 2026-01-27
* New: Store API fetch interception ഉപയോഗിച്ച് WooCommerce Blocks checkout ഇന്റഗ്രേഷൻ ചേർത്തു.
* New: WooCommerce checkout-ന് Invisible captcha പിന്തുണ (hCaptcha invisible, reCAPTCHA v2 invisible, v3).
* New: Ultimate Multisite ഇല്ലാതെ ഉപയോഗിക്കാനുള്ള സ്റ്റാൻഡേലൺ സെറ്റിംഗ്സ് പേജ്.
* New: dependency conflict തടയാൻ Jetpack Autoloader.
* Fixed: dynamic Ultimate Multisite checkout-ൽ hCaptcha റെൻഡർ ചെയ്യാത്ത പ്രശ്നം പരിഹരിച്ചു (AJAX-loaded content).
* Fixed: ഫോം ваലിഡേഷൻ പിശകുകൾ സംഭവിക്കുമ്പോൾ Captcha റിഫ്രഷ്/റീസെറ്റ് ചെയ്യാത്ത പ്രശ്നം പരിഹരിച്ചു.
* Fixed: WooCommerce checkout പേജിൽ hCaptcha കാണിക്കാത്ത പ്രശ്നം പരിഹരിച്ചു.
* Fixed: reCAPTCHA class not found error (google/recaptcha PHP library ചേർത്തു).
* Improved: WordPress hooks, MutationObserver, കൂടാതെ AJAX interception വഴി പിശക് കണ്ടെത്തൽ മെച്ചപ്പെടുത്തി.
* Improved: സെറ്റിംഗ്സ് വിവരണങ്ങളിൽ API key-കൾക്കായി dashboard URLs ഉൾപ്പെടുത്തി.

Version: 1.2.2 - Released on 2026-01-24
* Fixed: Ultimate Multisite Login Form Element-ൽ Captcha കാണിക്കാത്ത പ്രശ്നം പരിഹരിച്ചു (form filter name mismatch).
* Fixed: wp_kses() sanitization വഴി Cap widget HTML നീക്കം ചെയ്യപ്പെടുന്ന പ്രശ്നം പരിഹരിച്ചു.
* Fixed: JavaScript selectors-ന് element IDs-ൽ സ്ലാഷുകൾ ഉള്ള ഫോമുകൾ കണ്ടെത്താൻ കഴിയാത്ത പ്രശ്നം പരിഹരിച്ചു.
* Added: classaddons-ന് അനുവദനീയമായ HTML ടാഗുകൾ വികസിപ്പിക്കാൻ `wu_kses_allowed_html` എന്ന ഫിൽട്ടർ ഹുക്ക്.
* Removed: Dead code JavaScript ഫയലുകൾ പ്രൊവൈഡർ-നിശ്ചിത സ്ക്രിപ്റ്റുകൾ കൊണ്ട് മാറ്റിസ്ഥാപിച്ചു.

Version: 1.2.1 - Released on 2026-01-23

* Fixed: multisite environment-ൽ Cap Captcha token validation പരാജയപ്പെടുന്ന പ്രശ്നം പരിഹരിച്ചു (ഇപ്പോൾ network-wide transients ഉപയോഗിക്കുന്നു).
* Fixed: ലോഗിൻ സ്റ്റാറ്റസ് പരിഗണിക്കാതെ എല്ലാ ഉപയോക്താക്കൾക്കും Captcha സ്ഥിരമായി റെൻഡർ ചെയ്യാൻ സാധിക്കുന്നു.
* Fixed: checkout പരാജയങ്ങൾക്ക് കാരണമായ captcha റെൻഡറിംഗും ваലിഡേഷനും തമ്മിലുള്ള പൊരുത്തക്കേട് പരിഹരിച്ചു.

Version: 1.2.0 - Released on 2026-01-21

* New: Cap Captcha - self-hosted proof-of-work captcha, activation-ൽ default ആയി പ്രവർത്തനക്ഷമമാക്കി.
* New: Zero-configuration protection - ആഡ്ഓൺ ആക്ടിവേറ്റ് ചെയ്താൽ ഉടൻ തന്നെ സംരക്ഷണം ലഭിക്കും.
* New: എളുപ്പമുള്ള വിപുലീകരണത്തിനായി Polymorphic captcha provider architecture.
* New: card testing attacks-നെതിരായ WooCommerce Store API checkout protection.
* New: challenges, verifications, കൂടാതെ ബ്ലോക്ക് ചെയ്ത ആക്രമണങ്ങൾ കാണിക്കുന്ന സ്റ്റാറ്റിസ്റ്റിക്സ് ട്രാക്കിംഗ് ഡാഷ്‌ബോർഡ്.
* New: Cap Captcha ബുദ്ധിമുട്ടിനുള്ള സെറ്റിംഗ്സ് പ്രീസെറ്റുകൾ (Fast, Medium, Max).
* New: reCAPTCHA, hCaptcha പ്രൊവൈഡർമാർക്കായി Abstract base classes.
* Improved: മൊഡുലാർ പ്രൊവൈഡർ ക്ലാസുകളായി കോഡ്ബേസ് പുനഃക്രമീകരിച്ചു.
* Improved: പ്രത്യേക മാനേജർ ക്ലാസ് ഉപയോഗിച്ച് ശ്രദ്ധയുടെ വേർതിരിക്കൽ മെച്ചപ്പെടുത്തി.
* Fixed: $_SERVER variable sanitization-നുള്ള സുരക്ഷാ മെച്ചപ്പെടുത്തലുകൾ.
* Fixed: WordPress naming conventions-നുള്ള PHPUnit test configuration.

Version: 1.0.1 - Released on 2025-09-28

* Prefix ultimate-multisite എന്ന് മാറ്റുക; text domain അപ്ഡേറ്റ് ചെയ്യുക; version വർദ്ധിപ്പിക്കുക.
