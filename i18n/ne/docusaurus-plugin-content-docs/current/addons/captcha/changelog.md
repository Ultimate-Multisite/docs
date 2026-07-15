---
title: क्याप्चा परिवर्तन विवरण
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha परिवर्तन विवरण

संस्करण: 1.5.0 - 2026-05-22 मा जारी
* नयाँ: कडा-रोक दर सीमक — captcha-सुरक्षित सतहहरू (wp-login / दर्ता / हराएको-पासवर्ड / टिप्पणीहरू, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) मा प्रत्येक GET र POST गणना गर्छ र HTTP 429, `Retry-After` header, र अनियमित tarpit निद्रा (१–५ सेकेन्ड, १५ सेकेन्डमा कडा-सीमित) सहित जवाफ दिन्छ।
* नयाँ: tarpit विन्डो समायोजन गर्न `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` सेटिङहरू।
* नयाँ: विश्वसनीय IP दायराहरूलाई छुट दिन `wu_cap_rate_limit_whitelist_ip` filter।
* नयाँ: कडा-रोक जवाफ पठाइनुभन्दा ठीक अघि चल्ने `wu_cap_rate_limit_will_block` action।
* नयाँ: स्पूफ-प्रतिरोधी क्लाइन्ट-IP पहिचान। `Captcha_Core::get_client_ip()` (दर-सीमा बकेट कुञ्जीहरू, captcha siteverify `remoteip`, र तथ्याङ्क IP hashes का लागि सत्यको स्रोत) ले अब कडा विश्वास मोडेल लागू गर्छ: REMOTE_ADDR आधार हो, `CF-Connecting-IP` तुरुन्तको peer हालको Cloudflare IP दायराभित्र हुँदा मात्र मानिन्छ, र `X-Forwarded-For` तुरुन्तको peer admin-कन्फिगर गरिएको विश्वसनीय-proxy सूचीमा हुँदा मात्र मानिन्छ, visitor IP मा पुग्नुअघि विश्वसनीय/CF hops छोड्ने दायाँबाट-बायाँ हिँडाइ सहित।
* नयाँ: `cap_trust_cloudflare_headers` सेटिङ (पूर्वनिर्धारित OFF) — Cloudflare पछाडि हुँदा `CF-Connecting-IP` विश्वासमा opt in गर्नुहोस्। plugin ले bundled Cloudflare CIDR snapshot समावेश गरेर पठाउँछ र refresh असफल भए bundled fallback सहित wp-cron मार्फत साप्ताहिक रूपमा refresh गर्छ।
* नयाँ: `cap_trusted_proxies` सेटिङ — आफ्नै अग्र-पङ्क्तिका proxies / load-balancers सूचीबद्ध गर्ने CIDRs वा bare IPs को textarea (प्रति पङ्क्ति एक, `#` टिप्पणीहरू अनुमति)। यो बिना, दर सीमक सक्षम भए पनि `X-Forwarded-For` बेवास्ता गरिन्छ।
* नयाँ: सम्भावित Cloudflare / proxy अवस्थाको पहिलो-सक्षम auto-detection, एक-क्लिक "पत्ता लागेका सेटिङहरू लागू गर्नुहोस्" admin सूचना सहित। plugin ले तपाईंका सुरक्षित गरिएका मानहरू कहिल्यै overwrite गर्दैन; यदि पछिल्लो traffic ले तपाईंको config अब वास्तविकतासँग नमिल्ने संकेत गर्छ (जस्तै Cloudflare ले CIDR दायराहरू परिवर्तन गर्‍यो र तपाईंको proxy CIDR अब पुरानो भयो), गैर-खारेजयोग्य mismatch सूचनाले सिफारिस गरिएको update देखाउँछ।
* सुधारियो: Invisible mode ले अब `cap_security_level` लाई चुपचाप FAST मा घटाउँदैन — admin ले कन्फिगर गरेको level सम्मान गरिन्छ। bespoke logic चाहने site हरूका लागि नयाँ `wu_cap_server_security_level` filter उपलब्ध छ।
* सुधारियो: तथ्याङ्क `rate_limits_triggered` counter अब दुर्लभ post-success backstop path मा मात्र होइन, प्रत्येक block मा बढ्छ।
* सुधारियो: `Captcha_Core::get_client_ip()` अब दर सीमक, captcha providers (reCAPTCHA + hCaptcha `siteverify`), र तथ्याङ्कभरि visitor IP attribution का लागि एकल सत्यको स्रोत हो — जसले forged `CF-Connecting-IP` header बोकेका direct origin-server requests लाई वास्तविक peer को सट्टा spoofed IP द्वारा bucket गरिने spoofing vector बन्द गर्छ।
* सुधारियो: WooCommerce classic checkout rate-limit gate अब `woocommerce_before_checkout_form` को सट्टा `template_redirect` (priority 1) मा चल्छ। cart खाली हुँदा form-level hook कहिल्यै चल्दैन, त्यसैले product कहिल्यै नथप्ने flood traffic ले limiter पूर्ण रूपमा bypass गरिरहेको थियो।
* सुधारियो: WooCommerce pay-for-order rate-limit gate अब `woocommerce_before_pay_action` को सट्टा `template_redirect` मा चल्छ। पछिल्लो `wp_verify_nonce('woocommerce-pay')` सफल भएपछि मात्र चल्छ, जसको अर्थ unauth attackers (वास्तविक threat model) ले limiter कहिल्यै trigger गर्दैनथे।
* सुधारियो: WooCommerce Store API (blocks) checkout rate-limit gate अब `woocommerce_store_api_checkout_update_order_from_request` को सट्टा `rest_pre_dispatch` मा चल्छ। पछिल्लो Store API ले cart र billing fields validate गरेपछि मात्र चल्छ, त्यसैले unauth bots ले validator बाट 400 पाउँथे र limiter कहिल्यै trip गर्दैनथे।
* सुधारियो: Ultimate Multisite inline-login rate-limit gate अब `wu_before_inline_login` को सट्टा `wu_ajax_nopriv_wu_inline_login` priority 1 (र logged-in mirror) मा चल्छ। पछिल्लो `check_ajax_referer('wu_checkout')` सफल भएपछि मात्र चल्छ, त्यसैले valid wu_checkout nonce नभएका unauth bots ले 403 पाउँथे र limiter कहिल्यै trip गर्दैनथे।
* सुधारियो: `Rate_Limiter::enforce()` ले अब `surface|ip` द्वारा keyed once-per-request guard लागू गर्छ, त्यसैले प्रति render दुई पटक चल्ने upstream hooks (विशेष गरी Ultimate Multisite मा `wu_setup_checkout`) ले अब प्रभावकारी rate-limit threshold आधा गर्दैनन्।
* सुधारियो: Rate-limit surface gates ले अब `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) consult गर्दैनन्। त्यो filter ले "captcha अर्को सतहद्वारा पहिले नै handled" भन्ने संकेत गर्छ र flood protection सँग orthogonal छ — WooCommerce integration ले Woo nonce उपस्थित हुँदा WordPress login captcha skip गर्न यसमा hook गरिरहेको थियो, जुन rate counting मा फैलियो र Woo POSTs लाई limiter बाट बच्न दियो। rate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter नै अब लागू हुने एक मात्र bypass हो।

संस्करण: 1.3.2 - 2026-01-27 मा जारी
* सुधारियो: Elementor वा अन्य page builders प्रयोग गर्ने checkout forms मा Cap widget render नहुने समस्या
* सुधारियो: wp_kses() sanitization द्वारा cap-widget custom element हटाइने समस्या
* सुधारियो: HTML filtering bypass गर्न checkout captcha field का लागि callable content प्रयोग
* सुधारियो: edge cases का लागि fallback सहित JavaScript सरलीकृत

संस्करण: 1.3.1 - 2026-01-26 मा जारी
* सुधारियो: dynamic Ultimate Multisite checkout forms मा Cap Captcha invisible mode auto-solving नहुने समस्या
* सुधारियो: Cap checkout script ले अब dynamically loaded widgets पत्ता लगाउन MutationObserver प्रयोग गर्छ
* सुधारियो: submission अघि token का लागि पर्खन checkout button interception थपियो

Version: 1.3.0 - २०२६-०१-२७ मा जारी गरियो
* नयाँ: Store API fetch अवरोधनसँग WooCommerce Blocks चेकआउट एकीकरण
* नयाँ: WooCommerce चेकआउटका लागि अदृश्य captcha समर्थन (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* नयाँ: Ultimate Multisite बिना प्रयोगका लागि स्वतन्त्र सेटिङहरू पृष्ठ
* नयाँ: निर्भरता द्वन्द्व रोकथामका लागि Jetpack Autoloader
* सुधारियो: गतिशील Ultimate Multisite चेकआउटमा hCaptcha रेन्डर नभएको (AJAX-लोड गरिएको सामग्री)
* सुधारियो: फारम प्रमाणीकरण त्रुटिहरू हुँदा Captcha ताजा/रिसेट नभएको
* सुधारियो: WooCommerce चेकआउट पृष्ठमा hCaptcha नदेखिएको
* सुधारियो: reCAPTCHA class नभेटिएको त्रुटि (google/recaptcha PHP library थपियो)
* सुधारियो: WordPress hooks, MutationObserver, र AJAX अवरोधनमार्फत त्रुटि पत्ता लगाउने
* सुधारियो: सेटिङहरूका विवरणहरूले अब API keys का लागि dashboard URLs समावेश गर्छन्

Version: 1.2.2 - २०२६-०१-२४ मा जारी गरियो
* सुधारियो: Ultimate Multisite Login Form Element मा Captcha नदेखिएको (फारम फिल्टर नाम नमिलेको)
* सुधारियो: Cap widget HTML लाई wp_kses() सफाइद्वारा हटाइएको
* सुधारियो: JavaScript selectors ले element IDs मा स्ल्यास भएका फारमहरू नभेटेको
* थपियो: classaddons लाई अनुमत HTML tags विस्तार गर्न `wu_kses_allowed_html` फिल्टर hook
* हटाइयो: प्रदायक-विशिष्ट scripts द्वारा प्रतिस्थापित निष्क्रिय code JavaScript files

Version: 1.2.1 - २०२६-०१-२३ मा जारी गरियो

* सुधारियो: multisite वातावरणहरूमा Cap Captcha token प्रमाणीकरण असफल भएको (अब नेटवर्क-व्यापी transients प्रयोग गर्छ)
* सुधारियो: Captcha अब लगइन स्थितिको परवाह नगरी सबै प्रयोगकर्ताहरूका लागि निरन्तर रूपमा रेन्डर हुन्छ
* सुधारियो: captcha रेन्डरिङ र प्रमाणीकरणबीचको असंगति जसले चेकआउट असफलताहरू निम्त्याएको थियो

Version: 1.2.0 - २०२६-०१-२१ मा जारी गरियो

* नयाँ: Cap Captcha - स्व-होस्ट गरिएको proof-of-work captcha, सक्रिय गर्दा पूर्वनिर्धारित रूपमा सक्षम
* नयाँ: शून्य-कन्फिगरेसन सुरक्षा - addon सक्रिय गर्नुहोस् र तपाईं तुरुन्तै सुरक्षित हुनुहुन्छ
* नयाँ: सजिलो विस्तारयोग्यताका लागि polymorphic captcha provider संरचना
* नयाँ: कार्ड परीक्षण आक्रमणहरूविरुद्ध WooCommerce Store API चेकआउट सुरक्षा
* नयाँ: challenges, verifications, र blocked attacks देखाउने तथ्याङ्क ट्र्याकिङ dashboard
* नयाँ: Cap Captcha कठिनाइका लागि सुरक्षा स्तर presets (Fast, Medium, Max)
* नयाँ: reCAPTCHA र hCaptcha प्रदायकहरूका लागि abstract base classes
* सुधारियो: codebase लाई modular provider classes मा पुनर्संरचना गरियो
* सुधारियो: समर्पित manager class सँग सरोकारहरूको राम्रो पृथकीकरण
* Fixed: Security improvements for $_SERVER variable sanitization
* सुधारियो: WordPress नामकरण परम्पराहरूका लागि PHPUnit test configuration

Version: 1.0.1 - २०२५-०९-२८ मा जारी गरियो

* prefix लाई ultimate-multisite मा नाम परिवर्तन गर्नुहोस्; text domain अद्यावधिक गर्नुहोस्; version bump.
