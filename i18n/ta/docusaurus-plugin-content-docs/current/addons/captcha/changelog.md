---
title: Captcha மாற்றப் பதிவேடு
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog {#captcha-changelog}

Version: 1.5.0 - Released on 2026-05-22
* New: Hard-stop rate limiter — captcha-பாதுகாக்கப்பட்ட பக்கங்களில் (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) உள்ள ஒவ்வொரு GET மற்றும் POST கோரிக்கையையும் கணக்கிட்டு, HTTP 429, ஒரு `Retry-After` header, மற்றும் சீரற்ற tarpit sleep (1–5 வினாடிகள், அதிகபட்சம் 15 வினாடிகளுக்கு மேல் இருக்காது) மூலம் பதிலளிக்கும் ஒரு கடுமையான வரம்பு கட்டுப்படுத்தி.
* New: tarpit சாளரத்தை (tarpit window) சரிசெய்ய `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` அமைப்புகள் சேர்க்கப்பட்டுள்ளன.
* New: நம்பகமான IP வரம்புகளை விலக்கு அளிக்க `wu_cap_rate_limit_whitelist_ip` filter சேர்க்கப்பட்டுள்ளது.
* New: கடுமையான வரம்பு நிறுத்தப் பதில் அனுப்பப்படுவதற்குச் சற்று முன்பு இயங்கும் `wu_cap_rate_limit_will_block` action சேர்க்கப்பட்டுள்ளது.
* New: Spoof-resistant client-IP detection. `Captcha_Core::get_client_ip()` (rate-limit bucket keys, captcha siteverify `remoteip`, மற்றும் statistics IP hashes ஆகியவற்றின் உண்மை ஆதாரமாக உள்ளது) இப்போது ஒரு கடுமையான நம்பிக்கை மாதிரியை அமல்படுத்துகிறது: REMOTE_ADDR என்பது அடிப்படை அளவுகோல், `CF-Connecting-IP` என்பது உடனடி peer ஒரு தற்போதைய Cloudflare IP வரம்பிற்குள் இருக்கும்போது மட்டுமே மதிப்பிடப்படுகிறது, மற்றும் `X-Forwarded-For` என்பது உடனடி peer நிர்வாகி-அமைத்த நம்பகமான-proxy பட்டியலில் இருக்கும்போது மட்டுமே மதிப்பிடப்படுகிறது. இது வலது-இருளாய் (right-to-left) பயணித்து, நம்பகமான/CF ஹॉपஸ்களைத் தவிர்த்து, பார்வையாளரின் IP-ஐ இறுதி ஆதாரமாகக் கொள்கிறது.
* New: `cap_trust_cloudflare_headers` setting (இயல்புநிலை OFF) — Cloudflare-க்குப் பின்னால் இருக்கும்போது `CF-Connecting-IP` நம்பிக்கைக்கு விருப்பம் தெரிவிக்கலாம். இந்த plugin ஒரு bundled Cloudflare CIDR ஸ்னாப்ஷாட்டை அனுப்பும், மேலும் இந்த ஸ்னாப்ஷாட்டை வாரந்தோறும் wp-cron மூலம் புதுப்பித்து, புதுப்பிப்பு தோல்வியடைந்தால் fallback ஆதரவையும் கொண்டுள்ளது.
* New: `cap_trusted_proxies` setting — உங்கள் சொந்த முன்னணி proxy-கள் / load-balancer-களைப் பட்டியலிட CIDRs அல்லது வெறும் IP-களைக் கொண்ட ஒரு textarea (ஒவ்வொன்றும் ஒரு வரியில், `#` கருத்துகள் அனுமதிக்கப்படுகின்றன). இது இல்லாவிட்டால், rate limiter இயக்கப்பட்டிருந்தாலும் `X-Forwarded-For` புறக்கணிக்கப்படும்.
* New: Cloudflare / proxy நிலைமைக்கான தானியங்கி கண்டறிதல் முதன்முறையாகச் செயல்படுத்தப்பட்டுள்ளது. இது ஒரு கிளிக் மூலம் "Apply detected settings" என்ற நிர்வாக அறிவிப்பைக் காட்டுகிறது. உங்கள் சேமித்த மதிப்புகளை இந்த plugin ஒருபோதும் மாற்றாது; ஆனால் அடுத்தடுத்த டிராஃபிக் உங்கள் அமைப்பு இனி நிஜத்துடன் பொருந்தவில்லை என்று சுட்டிக்காட்டினால் (உதாரணமாக, Cloudflare CIDR வரம்புகளை மாற்றியுள்ளது மற்றும் உங்கள் proxy CIDR காலாவதியாகிவிட்டது), பரிந்துரைக்கப்பட்ட புதுப்பித்தலை காட்டும் ஒரு நீக்க முடியாத பொருந்தாத அறிவிப்பு தோன்றும்.
* Fixed: Invisible mode இனி `cap_security_level`-ஐ அமைதியாக FAST ஆகக் குறைக்காது — நிர்வாகி அமைத்த நிலை மதிப்புகள் கடைப்பிடிக்கப்படும். தனிப்பயன் தர்க்கம் தேவைப்படும் தளங்களுக்காக ஒரு புதிய `wu_cap_server_security_level` filter கிடைக்கிறது.
* Fixed: Statistics `rate_limits_triggered` counter இப்போது ஒவ்வொரு block-க்கும் அதிகரிக்கிறது, அரிதான post-success backstop பாதையில் மட்டுமல்ல.
* Fixed: `Captcha_Core::get_client_ip()` இப்போது rate limiter, captcha வழங்குநர்கள் (reCAPTCHA + hCaptcha `siteverify`), மற்றும் statistics ஆகியவற்றில் பார்வையாளர் IP-க்கான ஒரே உண்மை ஆதாரமாக உள்ளது — இது ஒரு spoofing vector-ஐ மூடுகிறது. ஏனெனில், forged `CF-Connecting-IP` header உடன் நேரடி origin-server கோரிக்கைகள், உண்மையான peer-க்கு பதிலாக spoofed IP மூலம் கணக்கிடப்பட்டுவிடும்.
* Fixed: WooCommerce classic checkout rate-limit gate இப்போது `woocommerce_before_checkout_form`-க்கு பதிலாக `template_redirect` (priority 1)-ல் இயங்குகிறது. ஏனெனில், காட் காலியாக இருக்கும்போது form-level hook இயங்காது, இதனால் ஒரு தயாரிப்பைச் சேர்க்காத வெள்ள டிராஃபிக் வரம்பு கட்டுப்படுத்தியை முற்றிலும் தவிர்த்துச் சென்றது.
* Fixed: WooCommerce pay-for-order rate-limit gate இப்போது `woocommerce_before_pay_action`-க்கு பதிலாக `template_redirect`-ல் இயங்குகிறது. ஏனெனில், இது `wp_verify_nonce('woocommerce-pay')` வெற்றி பெற்ற பின்னரே இயங்குகிறது, அதாவது அங்கீகரிக்கப்படாத தாக்குபவர்கள் (உண்மையான அச்சுறுத்தல் மாதிரி) ஒருபோதும் வரம்பு கட்டுப்படுத்தியைத் தூண்டவில்லை.
* Fixed: WooCommerce Store API (blocks) checkout rate-limit gate இப்போது `woocommerce_store_api_checkout_update_order_from_request`-க்கு பதிலாக `rest_pre_dispatch`-ல் இயங்குகிறது. ஏனெனில், இது Store API காட் மற்றும் billing புலங்களைச் சரிபார்க்கும் பின்னரே இயங்குகிறது, இதனால் அங்கீகரிக்கப்படாத bots validator-ல் இருந்து 400 பிழையைப் பெற்று, வரம்பு கட்டுப்படுத்தியை ஒருபோதும் தூண்டவில்லை.
* Fixed: Ultimate Multisite inline-login rate-limit gate இப்போது `wu_before_inline_login`-க்கு பதிலாக `wu_ajax_nopriv_wu_inline_login` priority 1-ல் (மற்றும் உள்நுழைந்த mirror-ல்) இயங்குகிறது. ஏனெனில், இது `check_ajax_referer('wu_checkout')` வெற்றி பெற்ற பின்னரே இயங்குகிறது, இதனால் சரியான wu_checkout nonce இல்லாத அங்கீகரிக்கப்படாத bots ஒரு 403 பிழையைப் பெற்று, வரம்பு கட்டுப்படுத்தியை ஒருபோதும் தூண்டவில்லை.
* Fixed: `Rate_Limiter::enforce()` இப்போது `surface|ip` மூலம் keyed செய்யப்பட்ட ஒரு முறை-ஒரு-கோரிக்கை பாதுகாப்பை (once-per-request guard) பயன்படுத்துகிறது. இதனால், ஒரு ரெண்டரில் இரண்டு முறை இயங்கும் மேல்நிலை hooks (குறிப்பாக Ultimate Multisite-ல் `wu_setup_checkout`) உண்மையான rate-limit வரம்பை பாதியாகக் குறைக்கவில்லை.
* Fixed: Rate-limit surface gates இனி `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) ஆகியவற்றைக் கழிக்காது. அந்த filter "captcha ஏற்கனவே வேறு surface மூலம் கையாளப்பட்டது" என்று சமிக்ஞை செய்கிறது, இது வெள்ளப் பாதுகாப்புக்கு orthogonal-ஆக உள்ளது — WooCommerce ஒருங்கிணைப்பு, ஒரு Woo nonce இருக்கும்போது WordPress login captcha-வைத் தவிர்க்க இதைப் பயன்படுத்தியது, இது rate counting-ல் கசிந்து, Woo POST-கள் வரம்பு கட்டுப்படுத்தியைத் தவிர்ப்பதற்கு வழிவகுத்தது. rate-limit-குறிப்பிட்ட `wu_cap_rate_limit_whitelist_ip` filter மட்டுமே இப்போது செயல்படும் bypass ஆகும்.

Version: 1.3.2 - Released on 2026-01-27
* Fixed: Elementor அல்லது பிற page builders பயன்படுத்தும் checkout forms-ல் Cap widget ரெண்டர் செய்யப்படவில்லை.
* Fixed: cap-widget custom element wp_kses() sanitization மூலம் நீக்கப்பட்டுவிடுகிறது.
* Improved: HTML வடிகட்டலைத் தவிர்க்க checkout captcha field-க்கு callable content பயன்படுத்தப்பட்டுள்ளது.
* Improved: Edge cases-களுக்கான fallback உடன் JavaScript எளிமைப்படுத்தப்பட்டுள்ளது.

Version: 1.3.1 - Released on 2026-01-26
* Fixed: Dynamic Ultimate Multisite checkout forms-ல் Cap Captcha invisible mode தானாகத் தீர்க்கப்படவில்லை.
* Improved: Cap checkout script இப்போது டைனமிக்காக ஏற்றப்படும் widgets-ஐ கண்டறிய MutationObserver பயன்படுத்துகிறது.
* Improved: சமர்ப்பிப்புக்கு முன் டோக்கிற்காக காத்திருக்க checkout button interception சேர்க்கப்பட்டுள்ளது.

Version: 1.3.0 - Released on 2026-01-27
* New: Store API fetch interception உடன் WooCommerce Blocks checkout ஒருங்கிணைப்பு.
* New: WooCommerce checkout-க்கு Invisible captcha ஆதரவு (hCaptcha invisible, reCAPTCHA v2 invisible, v3).
* New: Ultimate Multisite இல்லாமல் பயன்படுத்த தனித்தனி அமைப்புகள் பக்கம்.
* New: dependency conflict தடுப்புக்கு Jetpack Autoloader.
* Fixed: Dynamic Ultimate Multisite checkout-ல் hCaptcha ரெண்டர் செய்யப்படவில்லை.
* Fixed: form validation பிழைகள் ஏற்படும்போது Captcha புதுப்பிக்கப்படவில்லை/reset செய்யப்படவில்லை.
* Fixed: WooCommerce checkout பக்கத்தில் hCaptcha காட்டப்படவில்லை.
* Fixed: reCAPTCHA class not found error (google/recaptcha PHP library சேர்க்கப்பட்டது).
* Improved: WordPress hooks, MutationObserver, மற்றும் AJAX interception மூலம் பிழை கண்டறிதல்.
* Improved: Settings விளக்கங்களில் API keys க்கான dashboard URLs சேர்க்கப்பட்டுள்ளது.

Version: 1.2.2 - Released on 2026-01-24
* Fixed: Ultimate Multisite Login Form Element-ல் Captcha காட்டப்படவில்லை (form filter name mismatch).
* Fixed: Cap widget HTML wp_kses() sanitization மூலம் நீக்கப்பட்டுவிடுகிறது.
* Fixed: JavaScript selectors, element IDs-ல் slash-கள் உள்ள forms-களைக் கண்டுபிடிக்கவில்லை.
* Added: classaddons-க்கு அனுமதிக்கப்பட்ட HTML tags-களை நீட்டிக்க `wu_kses_allowed_html` filter hook சேர்க்கப்பட்டது.
* Removed: Dead code JavaScript files, provider-specific scripts மூலம் மாற்றப்பட்டது.

Version: 1.2.1 - Released on 2026-01-23

* Fixed: Multisite environments-ல் Cap Captcha token validation தோல்வியடைந்தது (இப்போது network-wide transients பயன்படுத்தப்படுகிறது).
* Fixed: login status எதுவாக இருந்தாலும் அனைத்து பயனர்களுக்கும் Captcha சீராக ரெண்டர் செய்யப்படுகிறது.
* Fixed: checkout தோல்விகளை ஏற்படுத்திய captcha rendering மற்றும் validation இடையே உள்ள பொருந்தாத தன்மை.

Version: 1.2.0 - Released on 2026-01-21

* New: Cap Captcha - self-hosted proof-of-work captcha, activation மூலம் இயல்பாக இயக்கப்படுகிறது.
* New: Zero-configuration protection - addon-ஐ செயல்படுத்தினால் உடனடியாகப் பாதுகாக்கப்படுவீர்கள்.
* New: எளிதான விரிவாக்கத்திற்காக Polymorphic captcha provider architecture.
* New: card testing attacks-க்கு எதிராக WooCommerce Store API checkout பாதுகாப்பு.
* New: சவால்கள், சரிபார்ப்புகள் மற்றும் தடுக்கப்பட்ட தாக்குதல்களைக் காட்டும் Statistics tracking dashboard.
* New: Cap Captcha கடினத்தன்மைக்கான பாதுகாப்பு நிலை முன்னமைவுகள் (Fast, Medium, Max).
* New: reCAPTCHA மற்றும் hCaptcha வழங்குநர்களுக்கான Abstract base classes.
* Improved: modular provider classes-ஆக codebase மறுசீரமைக்கப்பட்டது.
* Improved: பிரத்யேக manager class உடன் கவலைகளின் சிறந்த பிரிப்பு.
* Fixed: $_SERVER variable sanitization க்கான பாதுகாப்பு மேம்பாடுகள்.
* Fixed: WordPress naming conventions க்கான PHPUnit test configuration.

Version: 1.0.1 - Released on 2025-09-28

* Prefix-ஐ ultimate-multisite எனப் பெயர் மாற்றம்; text domain புதுப்பிக்கப்பட்டது; version bump.
