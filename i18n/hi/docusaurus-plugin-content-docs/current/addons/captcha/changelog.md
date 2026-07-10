---
title: कैप्चा चेंजलॉग
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog {#captcha-changelog}

Version: 1.5.0 - Released on 2026-05-22
* New: Hard-stop rate limiter — यह हर GET और POST को गिनता है जो captcha-protected surfaces (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) पर होते हैं और HTTP 429, एक `Retry-After` header, और एक रैंडमाइज़्ड टार्पिट स्लीप (1–5 सेकंड, अधिकतम 15 सेकंड) के साथ जवाब देता है।
* New: टार्पिट विंडो को ट्यून करने के लिए `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` सेटिंग्स।
* New: विश्वसनीय IP रेंज को छूट देने के लिए `wu_cap_rate_limit_whitelist_ip` फ़िल्टर।
* New: `wu_cap_rate_limit_will_block` एक्शन जो हार्ड-स्टॉप जवाब भेजे जाने से ठीक पहले ट्रिगर होता है।
* New: Spoof-resistant client-IP detection. `Captcha_Core::get_client_ip()` (जो rate-limit bucket keys, captcha siteverify `remoteip`, और statistics IP hashes का स्रोत है) अब एक सख्त विश्वास मॉडल लागू करता है: REMOTE_ADDR सबसे बुनियादी स्तर है, `CF-Connecting-IP` का सम्मान केवल तभी किया जाता है जब तत्काल पीयर (immediate peer) वर्तमान Cloudflare IP रेंज के अंदर हो, और `X-Forwarded-For` का सम्मान केवल तभी किया जाता है जब तत्काल पीयर एडमिन द्वारा कॉन्फ़िगर की गई विश्वसनीय-प्रॉक्सी सूची में हो, जिसमें एक दाएं-से-बाएं (right-to-left) जाँच शामिल है जो विश्वसनीय/CF होप्स को छोड़ देती है और फिर विज़िटर IP पर सेटल होती है।
* New: `cap_trust_cloudflare_headers` सेटिंग (डिफ़ॉल्ट रूप से OFF) — Cloudflare के पीछे होने पर `CF-Connecting-IP` पर भरोसा करने के लिए ऑप्ट-इन करें। प्लगइन एक बंडल किया हुआ Cloudflare CIDR स्नैपशॉट भेजता है और यदि रीफ़्रेश विफल हो जाता है तो बंडल किए गए फॉलबैक के साथ wp-cron के माध्यम से इसे साप्ताहिक रूप से रीफ़्रेश करता है।
* New: `cap_trusted_proxies` सेटिंग — CIDRs या सादे IP का टेक्स्टएरिया (प्रत्येक लाइन पर एक, `#` कमेंट्स की अनुमति है) जो आपके स्वयं के फ्रंट-लाइन प्रॉक्सी / लोड-बैलेंसर को सूचीबद्ध करता है। इसके बिना, `X-Forwarded-For` को अनदेखा किया जाता है, भले ही rate limiter सक्षम हो।
* New: संभावित Cloudflare / प्रॉक्सी स्थिति का पहले-समय ऑटो-डिटेक्शन, जिसमें एक क्लिक वाला "Apply detected settings" एडमिन नोटिस शामिल है। प्लगइन कभी भी आपके सहेजे गए मानों को ओवरराइट नहीं करता है; यदि बाद का ट्रैफ़िक बताता है कि आपकी कॉन्फ़िगरेशन अब वास्तविकता से मेल नहीं खाती है (उदाहरण के लिए, Cloudflare ने CIDR रेंज बदल दी है और आपका प्रॉक्सी CIDR अब पुराना है), तो एक गैर-dismissable मिसमैच नोटिस अनुशंसित अपडेट दिखाता है।
* Fixed: इनविज़िबल मोड अब चुपचाप `cap_security_level` को FAST में कम नहीं करता है — एडमिन द्वारा कॉन्फ़िगर किया गया स्तर मान्य रहता है। साइटों के लिए जो विशेष लॉजिक चाहते हैं, वहां एक नया `wu_cap_server_security_level` फ़िल्टर उपलब्ध है।
* Fixed: Statistics `rate_limits_triggered` काउंटर अब हर ब्लॉक पर बढ़ता है, न कि केवल दुर्लभ पोस्ट-सक्सेस बैकस्टॉप पाथ पर।
* Fixed: `Captcha_Core::get_client_ip()` अब rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), और statistics में विज़िटर IP एट्रीब्यूशन का एकमात्र स्रोत है — यह एक spoofing vector को बंद करता है जहां सीधे origin-server अनुरोध जिनमें एक जाली `CF-Connecting-IP` header होता, उन्हें वास्तविक पीयर के बजाय जाली IP द्वारा bucket किया जा सकता था।
* Fixed: WooCommerce classic checkout rate-limit gate अब `woocommerce_before_checkout_form` के बजाय `template_redirect` (priority 1) पर ट्रिगर होता है। फॉर्म-लेवल हुक कभी भी तब ट्रिगर नहीं होता जब कार्ट खाली होता है, इसलिए जो फ़्लड ट्रैफ़िक कभी प्रोडक्ट नहीं जोड़ता था, वह पूरी तरह से लिमिटर को बायपास कर रहा था।
* Fixed: WooCommerce pay-for-order rate-limit gate अब `woocommerce_before_pay_action` के बजाय `template_redirect` पर ट्रिगर होता है। बाद वाला केवल `wp_verify_nonce('woocommerce-pay')` सफल होने के बाद ट्रिगर होता है, जिसका मतलब है कि अनधिकृत हमलावर (वास्तविक खतरा मॉडल) कभी भी लिमिटर को ट्रिगर नहीं कर पाए।
* Fixed: WooCommerce Store API (blocks) checkout rate-limit gate अब `woocommerce_store_api_checkout_update_order_from_request` के बजाय `rest_pre_dispatch` पर ट्रिगर होता है। बाद वाला केवल Store API द्वारा कार्ट और बिलिंग फ़ील्ड को मान्य करने के बाद ट्रिगर होता है, इसलिए अनधिकृत बॉट्स को वैलिडेटर से 400 मिला और वे कभी लिमिटर को ट्रिगर नहीं कर पाए।
* Fixed: Ultimate Multisite inline-login rate-limit gate अब `wu_before_inline_login` के बजाय `wu_ajax_nopriv_wu_inline_login` priority 1 (और लॉग-इन किए गए मिरर) पर ट्रिगर होता है। बाद वाला केवल `check_ajax_referer('wu_checkout')` सफल होने के बाद ट्रिगर होता है, इसलिए बिना वैध wu_checkout nonce के अनधिकृत बॉट्स को 403 मिला और वे कभी लिमिटर को ट्रिगर नहीं कर पाए।
* Fixed: `Rate_Limiter::enforce()` अब `surface|ip` द्वारा कुंजीबद्ध (keyed) एक बार-प्रति-अनुरोध गार्ड लागू करता है, इसलिए अपस्ट्रीम हुक्स जो रेंडर प्रति दो बार ट्रिगर होते हैं (विशेष रूप से Ultimate Multisite में `wu_setup_checkout`) अब प्रभावी rate-limit थ्रेशोल्ड को आधा नहीं करते हैं।
* Fixed: Rate-limit surface gates अब `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` फ़िल्टर) का परामर्श नहीं करते हैं। वह फ़िल्टर "captcha पहले से ही किसी अन्य surface द्वारा संभाला गया है" का संकेत देता है और फ़्लड प्रोटेक्शन से अलग है — WooCommerce इंटीग्रेशन इसे एक Woo nonce मौजूद होने पर WordPress लॉगिन captcha को छोड़ने के लिए हुक कर रहा था, जिससे rate counting में गड़बड़ी हुई और Woo POSTs लिमिटर से बच गए। rate-limit-विशिष्ट `wu_cap_rate_limit_whitelist_ip` फ़िल्टर एकमात्र बाईपास है जो अब लागू होता है।

Version: 1.3.2 - Released on 2026-01-27
* Fixed: Elementor या अन्य पेज बिल्डर्स का उपयोग करने वाले checkout फॉर्म पर Cap widget रेंडर नहीं हो रहा था
* Fixed: cap-widget custom element को wp_kses() sanitization द्वारा हटा दिया जा रहा था
* Improved: HTML फ़िल्टरिंग को बायपास करने के लिए checkout captcha फ़ील्ड के लिए callable content का उपयोग किया गया
* Improved: एज केस (edge cases) के लिए फॉलबैक के साथ JavaScript को सरल बनाया गया

Version: 1.3.1 - Released on 2026-01-26
* Fixed: Cap Captcha invisible mode अब डायनामिक Ultimate Multisite checkout forms पर ऑटो-सॉल्व नहीं हो रहा था
* Improved: Cap checkout script अब डायनामिक रूप से लोड किए गए विजेट का पता लगाने के लिए MutationObserver का उपयोग करता है
* Improved: सबमिशन से पहले टोकन का इंतजार करने के लिए checkout बटन इंटरसेप्शन जोड़ा गया

Version: 1.3.0 - Released on 2026-01-27
* New: Store API fetch interception के साथ WooCommerce Blocks checkout integration
* New: WooCommerce checkout के लिए invisible captcha सपोर्ट (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* New: Ultimate Multisite के बिना उपयोग के लिए स्टैंडअलोन सेटिंग्स पेज
* New: dependency conflict prevention के लिए Jetpack Autoloader
* Fixed: hCaptcha अब डायनामिक Ultimate Multisite checkout (AJAX-loaded content) पर रेंडर नहीं हो रहा था
* Fixed: फॉर्म सत्यापन त्रुटियां होने पर Captcha रीफ़्रेश/रीसेट नहीं हो रहा था
* Fixed: hCaptcha WooCommerce checkout पेज पर नहीं दिख रहा था
* Fixed: reCAPTCHA class not found error (google/recaptcha PHP library जोड़ी गई)
* Improved: WordPress hooks, MutationObserver, और AJAX interception के माध्यम से त्रुटि का पता लगाना
* Improved: सेटिंग्स विवरण में API keys के लिए डैशबोर्ड URL शामिल किए गए

Version: 1.2.2 - Released on 2026-01-24
* Fixed: Ultimate Multisite Login Form Element पर Captcha प्रदर्शित नहीं हो रहा था (form filter name mismatch)
* Fixed: Cap widget HTML को wp_kses() sanitization द्वारा हटा दिया जा रहा था
* Fixed: JavaScript selectors एलिमेंट IDs में स्लैश वाले फॉर्म का पता नहीं लगा पा रहे थे
* Added: classaddons को अनुमत HTML टैग बढ़ाने के लिए फ़िल्टर हुक `wu_kses_allowed_html`
* Removed: मृत कोड JavaScript फ़ाइलें प्रदाता-विशिष्ट स्क्रिप्ट से बदल दी गईं

Version: 1.2.1 - Released on 2026-01-23

* Fixed: मल्टीसाइट वातावरण में Cap Captcha token validation विफल हो रहा था (अब network-wide transients का उपयोग करता है)
* Fixed: Captcha अब लॉगिन स्थिति की परवाह किए बिना सभी उपयोगकर्ताओं के लिए लगातार रेंडर होता है
* Fixed: captcha rendering और validation के बीच बेमेल के कारण checkout विफल हो रहे थे

Version: 1.2.0 - Released on 2026-01-21

* New: Cap Captcha - self-hosted proof-of-work captcha, सक्रियण पर डिफ़ॉल्ट रूप से सक्षम
* New: Zero-configuration protection - ऐडऑन सक्रिय करें और आप तुरंत सुरक्षित हो जाते हैं
* New: आसान विस्तार के लिए Polymorphic captcha provider architecture
* New: कार्ड टेस्टिंग हमलों के खिलाफ WooCommerce Store API checkout protection
* New: चुनौतियों, सत्यापन और ब्लॉक किए गए हमलों को दिखाने वाला Statistics tracking dashboard
* New: Cap Captcha कठिनाई के लिए सुरक्षा स्तर प्रीसेट (Fast, Medium, Max)
* New: reCAPTCHA और hCaptcha providers के लिए Abstract base classes
* Improved: कोडबेस को मॉड्यूलर प्रदाता कक्षाओं में पुनर्गठित किया गया
* Improved: समर्पित मैनेजर क्लास के साथ चिंताओं का बेहतर अलगाव
* Fixed: $_SERVER variable sanitization के लिए सुरक्षा सुधार
* Fixed: WordPress नामकरण परंपराओं के लिए PHPUnit test configuration

Version: 1.0.1 - Released on 2025-09-28

* Prefix को ultimate-multisite में नाम बदला; टेक्स्ट डोमेन अपडेट किया; संस्करण बढ़ाया।
