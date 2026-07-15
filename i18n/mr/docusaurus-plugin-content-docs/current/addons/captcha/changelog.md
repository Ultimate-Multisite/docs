---
title: Captcha बदलांची नोंद
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog

**Version: 1.5.0 - Released on 2026-05-22**
* **New:** Hard-stop rate limiter — हा दर मर्यादा नियंत्रक (rate limiter) `captcha`-संरक्षित पृष्ठे (उदा. wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) वरील प्रत्येक GET आणि POST विनंती मोजतो आणि HTTP 429, एक `Retry-After` हेडर, आणि एक यादृच्छिक 'टारपिट स्लीप' (1–5 सेकंद, जास्तीत जास्त 15 सेकंद) सह प्रतिसाद देतो.
* **New:** टार्पिट विंडो (tarpit window) समायोजित करण्यासाठी `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` सेटिंग्ज जोडली.
* **New:** विश्वसनीय IP रेंज वगळण्यासाठी `wu_cap_rate_limit_whitelist_ip` फिल्टर जोडला.
* **New:** `wu_cap_rate_limit_will_block` नावाचे एक action जोडले आहे, जे हार्ड-स्टॉप प्रतिसाद पाठवण्यापूर्वी लगेच ट्रिगर होते.
* **New:** Spoof-resistant client-IP detection. `Captcha_Core::get_client_ip()` (जे rate-limit bucket keys, captcha siteverify `remoteip`, आणि statistics IP hashes साठी सत्य स्रोत आहे) आता कठोर विश्वास मॉडेल (strict trust model) लागू करतो: REMOTE_ADDR हा पाया आहे, `CF-Connecting-IP` तेव्हाच मानला जातो जेव्हा तात्काळ पीअर (immediate peer) सध्याच्या Cloudflare IP रेंजमध्ये असतो, आणि `X-Forwarded-For` तेव्हाच मानला जातो जेव्हा तात्काळ पीअर admin-configured trusted-proxy यादीमध्ये असतो, ज्यामध्ये विश्वासू/CF हॉप्स वगळून उजवीकडून डावीकडे तपासणी केली जाते आणि नंतर वापरकर्त्याचा IP निश्चित केला जातो.
* **New:** `cap_trust_cloudflare_headers` सेटिंग (डीफॉल्ट OFF) — Cloudflare च्या मागे असताना `CF-Connecting-IP` च्या विश्वासासाठी पर्याय (opt into) उपलब्ध. प्लगइनमध्ये Cloudflare CIDR चा एक बंडल केलेला स्नॅपशॉट (snapshot) आहे आणि तो refresh करण्यासाठी wp-cron चा वापर करते, तसेच refresh अयशस्वी झाल्यास बंडल केलेला fallback उपलब्ध आहे.
* **New:** `cap_trusted_proxies` सेटिंग — तुमच्या स्वतःच्या फ्रंट-लाइन प्रॉक्सी / लोड-बॅलन्सरची CIDRs किंवा साध्या IP ची यादी (प्रत्येक ओळीत एक, `#` कमेंट्सला परवानगी आहे) देण्यासाठी एक textarea. हे नसेल, तर rate limiter सक्षम असतानाही `X-Forwarded-For` ला दुर्लक्षित केले जाईल.
* **New:** संभाव्य Cloudflare / प्रॉक्सी स्थितीचे (posture) स्वयंचलित शोध (auto-detection) पहिल्यांदा सक्षम करण्याची सुविधा, ज्यामध्ये एक-क्लिक "Apply detected settings" admin notice आहे. प्लगइन कधीही तुमच्या सेव्ह केलेल्या मूल्यांवर ओव्हरराईट करत नाही; जर नंतरचा ट्रॅफिक सूचित करतो की तुमची कॉन्फिगरेशन आता वास्तवाशी जुळत नाही (उदा. Cloudflare ने CIDR रेंज बदलल्या आणि तुमचा प्रॉक्सी CIDR आता जुना झाला आहे), तर एक न काढता येणारा (non-dismissable) मिसमॅच notice शिफारस केलेले अपडेट दर्शवतो.
* **Fixed:** Invisible mode आता आपोआप `cap_security_level` ला FAST मध्ये कमी करत नाही — admin ने कॉन्फिगर केलेला स्तर पाळला जातो. ज्या साइट्सना खास लॉजिक हवे आहे त्यांच्यासाठी एक नवीन `wu_cap_server_security_level` फिल्टर उपलब्ध आहे.
* **Fixed:** Statistics मधील `rate_limits_triggered` काउंटर आता प्रत्येक ब्लॉकवर वाढतो, केवळ दुर्मिळ 'पोस्ट-सक्सेस बॅकस्टॉप पाथ' वर नाही.
* **Fixed:** `Captcha_Core::get_client_ip()` आता rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), आणि statistics साठी वापरकर्त्याच्या IP च्या निश्चित स्रोताचे (single source of truth) कार्य करते — यामुळे एक spoofing vector बंद झाला आहे, जिथे थेट origin-server विनंत्या ज्यामध्ये बनावट `CF-Connecting-IP` हेडर होते, त्या वास्तविक पीअरऐवजी बनावट IP ने bucket केल्या जात होत्या.
* **Fixed:** WooCommerce classic checkout rate-limit gate आता `woocommerce_before_checkout_form` ऐवजी `template_redirect` (प्राधान्य 1) वर ट्रिगर होतो. फॉर्म-स्तरीय hook तेव्हा कधीच ट्रिगर होत नाही जेव्हा कार्ट रिकामी असते, त्यामुळे जी फ्लड ट्रॅफिक कधीच उत्पादन जोडत नाही, ती limiter ला पूर्णपणे बायपास करत होती.
* **Fixed:** WooCommerce pay-for-order rate-limit gate आता `woocommerce_before_pay_action` ऐवजी `template_redirect` वर ट्रिगर होतो. दुसरे (latter) फक्त `wp_verify_nonce('woocommerce-pay')` यशस्वी झाल्यावर ट्रिगर होते, याचा अर्थ असा की अनधिकृत हल्लेखोर (वास्तविक धोका) कधीच limiter ला ट्रिगर करू शकत नव्हते.
* **Fixed:** WooCommerce Store API (blocks) checkout rate-limit gate आता `woocommerce_store_api_checkout_update_order_from_request` ऐवजी `rest_pre_dispatch` वर ट्रिगर होतो. दुसरे (latter) फक्त Store API ने कार्ट आणि बिलिंग फील्ड्स प्रमाणित (validate) केल्यानंतर ट्रिगर होते, त्यामुळे अनधिकृत बॉट्सला व्हॅलिडेटरकडून 400 मिळाला आणि ते कधीच limiter ला ट्रिगर करू शकले नाहीत.
* **Fixed:** Ultimate Multisite inline-login rate-limit gate आता `wu_before_inline_login` ऐवजी `wu_ajax_nopriv_wu_inline_login` प्राधान्य 1 वर (आणि लॉग-इन केलेल्या मिररवर) ट्रिगर होतो. दुसरे (latter) फक्त `check_ajax_referer('wu_checkout')` यशस्वी झाल्यावर ट्रिगर होते, त्यामुळे वैध wu_checkout nonce नसलेले अनधिकृत बॉट्सला 403 मिळाला आणि ते कधीच limiter ला ट्रिगर करू शकले नाहीत.
* **Fixed:** `Rate_Limiter::enforce()` आता `surface|ip` ने की (key) केलेले एकदा-प्रति-विनंती (once-per-request) गार्ड लागू करतो, त्यामुळे upstream hooks जे रेंडरमध्ये दोनदा ट्रिगर होतात (उदा. Ultimate Multisite मध्ये `wu_setup_checkout`) ते आता प्रभावी rate-limit थ्रेशोल्डला अर्धे करत नाहीत.
* **Fixed:** Rate-limit surface gates आता `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) चा सल्ला घेत नाहीत. तो फिल्टर "captcha आधीच दुसऱ्या surface द्वारे हाताळला गेला आहे" असा संकेत देतो आणि तो फ्लड प्रोटेक्शनला लंबकोणीय (orthogonal) आहे — WooCommerce integration ने ते वापरून Woo nonce उपस्थित असताना WordPress login captcha वगळत होते, ज्यामुळे rate counting मध्ये त्रुटी आली आणि Woo POSTs limiter ला टाळू शकले. आता rate-limit-विशिष्ट `wu_cap_rate_limit_whitelist_ip` फिल्टर हा एकमेव बायपास आहे जो लागू होतो.

**Version: 1.3.2 - Released on 2026-01-27**
* **Fixed:** Elementor किंवा इतर page builders वापरणाऱ्या checkout forms वर Cap widget render होत नव्हता.
* **Fixed:** cap-widget custom element wp_kses() sanitization द्वारे काढून टाकला जात होता.
* **Improved:** HTML filtering बायपास करण्यासाठी checkout captcha field साठी callable content चा वापर केला.
* **Improved:** एज केससाठी (edge cases) JavaScript सोपे केले आणि fallback जोडले.

**Version: 1.3.1 - Released on 2026-01-26**
* **Fixed:** Dynamic Ultimate Multisite checkout forms वर Cap Captcha invisible mode आपोआप solve होत नव्हता.
* **Improved:** Cap checkout script आता dynamically loaded widgets शोधण्यासाठी MutationObserver वापरतो.
* **Improved:** सबमिशनपूर्वी टोकनची प्रतीक्षा करण्यासाठी checkout button interception जोडले.

**Version: 1.3.0 - Released on 2026-01-27**
* **New:** Store API fetch interception सह WooCommerce Blocks checkout integration.
* **New:** WooCommerce checkout साठी Invisible captcha सपोर्ट (hCaptcha invisible, reCAPTCHA v2 invisible, v3).
* **New:** Ultimate Multisite शिवाय वापरण्यासाठी स्वतंत्र सेटिंग्ज पेज.
* **New:** dependency conflict प्रतिबंधासाठी Jetpack Autoloader.
* **Fixed:** Dynamic Ultimate Multisite checkout (AJAX-loaded content) वर hCaptcha render होत नव्हता.
* **Fixed:** फॉर्म व्हॅलिडेशन त्रुटी (errors) झाल्यावर Captcha refresh/reset होत नव्हता.
* **Fixed:** WooCommerce checkout page वर hCaptcha दिसत नव्हता.
* **Fixed:** reCAPTCHA class not found error (google/recaptcha PHP library जोडली).
* **Improved:** WordPress hooks, MutationObserver, आणि AJAX interception द्वारे त्रुटी शोधणे.
* **Improved:** सेटिंग्ज वर्णनांमध्ये API keys साठी dashboard URLs समाविष्ट केले.

**Version: 1.2.2 - Released on 2026-01-24**
* **Fixed:** Ultimate Multisite Login Form Element वर Captcha प्रदर्शित होत नव्हता (form filter name mismatch).
* **Fixed:** Cap widget HTML wp_kses() sanitization द्वारे काढून टाकला जात होता.
* **Fixed:** JavaScript selectors ला element IDs मध्ये स्लॅश (slashes) असलेल्या forms सापडत नव्हते.
* **Added:** classaddons ला परवानगी असलेले HTML टॅग वाढवण्यासाठी फिल्टर hook `wu_kses_allowed_html`.
* **Removed:** Dead code JavaScript files काढून टाकले आणि त्याऐवजी provider-specific scripts वापरले.

**Version: 1.2.1 - Released on 2026-01-23**

* **Fixed:** Multisite environments मध्ये Cap Captcha token validation अयशस्वी होत होते (आता network-wide transients वापरतो).
* **Fixed:** लॉगिन स्थिती काहीही असली तरी सर्व वापरकर्त्यांसाठी Captcha सातत्याने render होतो.
* **Fixed:** captcha rendering आणि validation मध्ये विसंगतीमुळे checkout failures होत होते.

**Version: 1.2.0 - Released on 2026-01-21**

* **New:** Cap Captcha - self-hosted proof-of-work captcha, सक्रिय झाल्यावर डीफॉल्टनुसार सक्षम.
* **New:** Zero-configuration protection - addon सक्रिय करा आणि तुम्ही त्वरित संरक्षित झालात.
* **New:** सहज विस्तारक्षमतेसाठी Polymorphic captcha provider architecture.
* **New:** कार्ड टेस्टिंग हल्ल्यांविरुद्ध WooCommerce Store API checkout protection.
* **New:** आव्हाने (challenges), पडताळणी (verifications), आणि ब्लॉक झालेले हल्ले दाखवणारे Statistics tracking dashboard.
* **New:** Cap Captcha कठीणतेसाठी सुरक्षा स्तर प्रीसेट (Fast, Medium, Max).
* **New:** reCAPTCHA आणि hCaptcha providers साठी Abstract base classes.
* **Improved:** codebase ला modular provider classes मध्ये refactor केले.
* **Improved:** समर्पित manager class सह जबाबदाऱ्यांचे चांगले विभाजन (better separation of concerns).
* **Fixed:** $_SERVER variable sanitization साठी सुरक्षा सुधारणा.
* **Fixed:** WordPress naming conventions साठी PHPUnit test configuration.

**Version: 1.0.1 - Released on 2025-09-28**

* Prefix rename करून ultimate-multisite केले; text domain अपडेट केला; version bump.
