---
title: Captcha تبدیلیوں کا سجل
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog {#captcha-changelog}

**Version: 1.5.0 - Released on 2026-05-22**
* **نیا:** ہارڈ-سٹاپ ریٹ لیمٹر — یہ captcha سے محفوظ صفحات (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) پر ہر GET اور POST کو گنتا ہے اور HTTP 429، ایک `Retry-After` ہیڈر، اور ایک بے ترتیب ٹارپیٹ سلیپ (1–5 سیکنڈ، جو زیادہ سے زیادہ 15 سیکنڈ تک ہو سکتا ہے) کے ساتھ جواب دیتا ہے۔
* **نیا:** ٹارپیٹ ونڈو کو ایڈجسٹ کرنے کے لیے `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` سیٹنگز۔
* **نیا:** قابل اعتماد IP رینجز کو مستثنیٰ کرنے کے لیے `wu_cap_rate_limit_whitelist_ip` فلٹر۔
* **نیا:** `wu_cap_rate_limit_will_block` ایک ایکشن جو ہارڈ-سٹاپ جواب بھیجے جانے سے فوراً پہلے فعال ہوتا ہے۔
* **نیا:** Spoof-resistant client-IP detection۔ `Captcha_Core::get_client_ip()` (جو rate-limit bucket keys، captcha siteverify `remoteip`، اور statistics IP hashes کا اصل ذریعہ ہے) اب ایک سخت اعتماد ماڈل نافذ کرتا ہے: REMOTE_ADDR بنیادی سطح ہے، `CF-Connecting-IP` صرف اس وقت قابل احترام ہے جب فوری پیئر ایک موجودہ Cloudflare IP رینج کے اندر ہو، اور `X-Forwarded-For` صرف اس وقت قابل احترام ہے جب فوری پیئر ایڈمن-configure کردہ قابل اعتماد-proxy فہرست میں ہو۔ یہ ایک دائیں سے بائیں چلنے کا عمل ہے جو قابل اعتماد/CF ہاپس کو چھوڑ کر وزیٹر کے IP پر آ کر ٹھہرتا ہے۔
* **نیا:** `cap_trust_cloudflare_headers` سیٹنگ (ڈیفالٹ طور پر بند) — Cloudflare کے پیچھے ہونے پر `CF-Connecting-IP` پر اعتماد کرنے کے لیے آپٹ ان کریں۔ یہ پلگ ان ایک بند Cloudflare CIDR snapshot کے ساتھ آتا ہے اور اگر refresh ناکام ہو جاتا ہے تو bundled fallback کے ساتھ اسے ہفتہ وار wp-cron کے ذریعے refresh کرتا ہے۔
* **نیا:** `cap_trusted_proxies` سیٹنگ — CIDRs یا سادہ IPs کا ایک textarea (ہر لائن پر ایک، `#` کمنٹس کی اجازت ہے) جو آپ کے اپنے فرنٹ-لائن پراکسیز / لوڈ-بیلنسرز کی فہرست دیتا ہے۔ اس کے بغیر، `X-Forwarded-For` کو نظر انداز کر دیا جاتا ہے، یہاں تک کہ جب rate limiter فعال ہو۔
* **نیا:** ممکنہ Cloudflare / proxy posture کا پہلے-وقت خودکار پتہ لگانا، جس کے ساتھ ایک کلک پر "Apply detected settings" ایڈمن نوٹس ملتا ہے۔ پلگ ان کبھی بھی آپ کی محفوظ کی گئی ویلیوز کو اووررائٹ نہیں کرتا؛ اگر بعد کا ٹریفک بتاتا ہے کہ آپ کی ترتیب اب حقیقت سے مطابقت نہیں رکھتی (مثلاً Cloudflare نے CIDR رینجز تبدیل کر دیے ہیں اور آپ کا proxy CIDR اب پرانا ہے)، تو ایک ناقابل-dismiss mismatch نوٹس تجویز کردہ اپ ڈیٹ دکھاتا ہے۔
* **ٹھیک کیا:** انویزیبل موڈ اب خاموشی سے `cap_security_level` کو FAST پر کم نہیں کرتا — ایڈمن کی configure کردہ سطح کو اہمیت دی جاتی ہے۔ ایسے سائٹس کے لیے جہاں مخصوص منطق (bespoke logic) کی ضرورت ہو، ایک نیا `wu_cap_server_security_level` فلٹر دستیاب ہے۔
* **ٹھیک کیا:** Statistics `rate_limits_triggered` کا کاؤنٹر اب ہر بلاک پر بڑھتا ہے، نہ کہ صرف نایاب post-success backstop path پر۔
* **ٹھیک کیا:** `Captcha_Core::get_client_ip()` اب rate limiter، captcha providers (reCAPTCHA + hCaptcha `siteverify`)، اور statistics میں وزیٹر IP attribution کا واحد ذریعہ ہے — اس طرح ایک spoofing vector بند ہو جاتا ہے جہاں براہ راست origin-server کی درخواستیں جو ایک جعلی `CF-Connecting-IP` ہیڈر لے کر آتی تھیں، انہیں حقیقی پیئر کے بجائے جعلی IP کے ساتھ گنا جاتا۔
* **ٹھیک کیا:** WooCommerce classic checkout rate-limit gate اب `woocommerce_before_checkout_form` کے بجائے `template_redirect` (priority 1) پر فعال ہوتا ہے۔ فارم-level hook تب کبھی نہیں چلتا جب کارٹ خالی ہو، لہذا وہ فلوڈ ٹریفک جو کبھی پروڈکٹ شامل نہیں کرتی تھی، وہ مکمل طور پر لیمٹر کو بائی پاس کر رہی تھی۔
* **ٹھیک کیا:** WooCommerce pay-for-order rate-limit gate اب `woocommerce_before_pay_action` کے بجائے `template_redirect` پر فعال ہوتا ہے۔ آخری hook صرف اس وقت چلتا ہے جب `wp_verify_nonce('woocommerce-pay')` کامیاب ہو جاتا ہے، جس کا مطلب ہے کہ غیر مصدقہ حملہ آور (اصل threat model) کبھی بھی لیمٹر کو ٹرگر نہیں کر پاتے تھے۔
* **ٹھیک کیا:** WooCommerce Store API (blocks) checkout rate-limit gate اب `woocommerce_store_api_checkout_update_order_from_request` کے بجائے `rest_pre_dispatch` پر فعال ہوتا ہے۔ آخری hook صرف اس وقت چلتا ہے جب Store API کارٹ اور بلنگ فیلڈز کو validate کرتا ہے، لہذا غیر مصدقہ bots کو validator سے 400 مل جاتا تھا اور وہ کبھی لیمٹر کو ٹرپ نہیں کر پاتے تھے۔
* **ٹھیک کیا:** Ultimate Multisite inline-login rate-limit gate اب `wu_before_inline_login` کے بجائے `wu_ajax_nopriv_wu_inline_login` priority 1 (اور logged-in mirror) پر فعال ہوتا ہے۔ آخری hook صرف اس وقت چلتا ہے جب `check_ajax_referer('wu_checkout')` کامیاب ہو جاتا ہے، لہذا غیر مصدقہ bots کے پاس درست wu_checkout nonce نہ ہونے کی وجہ سے انہیں 403 مل جاتا تھا اور وہ کبھی لیمٹر کو ٹرپ نہیں کر پاتے تھے۔
* **ٹھیک کیا:** `Rate_Limiter::enforce()` اب `surface|ip` سے keyed ایک بار-فی-درخواست گارڈ لاگو کرتا ہے، لہذا upstream hooks جو رینڈر پر دو بار چلتے ہیں (خاص طور پر Ultimate Multisite میں `wu_setup_checkout`)، وہ اب مؤثر rate-limit تھریش ہولڈ کو آدھا نہیں کرتے۔
* **ٹھیک کیا:** Rate-limit surface gates اب `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` فلٹر) سے مشورہ نہیں کرتے۔ وہ فلٹر "captcha پہلے ہی کسی دوسرے surface کے ذریعے ہینڈل ہو چکا ہے" کا اشارہ دیتا ہے اور فلوڈ پروٹیکشن سے الگ ہے — WooCommerce انٹیگریشن اسے ایک Woo nonce موجود ہونے پر WordPress login captcha کو skip کرنے کے لیے hook کر رہی تھی، جس سے rate counting میں کمی ہوئی اور Woo POSTs کو لیمٹر سے بچنے دیا گیا۔ rate-limit-specific `wu_cap_rate_limit_whitelist_ip` فلٹر اب واحد بائی پاس ہے جو لاگو ہوتا ہے۔

**Version: 1.3.2 - Released on 2026-01-27**
* **ٹھیک کیا:** Elementor یا دیگر page builders استعمال کرنے والے checkout forms پر Cap widget render نہیں ہو رہا تھا۔
* **ٹھیک کیا:** cap-widget custom element کو wp_kses() sanitization کے ذریعے ختم کیا جا رہا تھا۔
* **بہتر کیا:** HTML فلٹرنگ کو بائی پاس کرنے کے لیے checkout captcha field کے لیے callable content استعمال کیا گیا۔
* **بہتر کیا:** edge cases کے لیے fallback کے ساتھ JavaScript کو سادہ بنایا گیا۔

**Version: 1.3.1 - Released on 2026-01-26**
* **ٹھیک کیا:** Dynamic Ultimate Multisite checkout forms پر Cap Captcha invisible mode خودکار طور پر حل نہیں ہو رہا تھا۔
* **بہتر کیا:** Cap checkout script اب dynamically load ہونے والے widgets کا پتہ لگانے کے لیے MutationObserver استعمال کرتا ہے۔
* **بہتر کیا:** جمع کرانے سے پہلے ٹوکن کا انتظار کرنے کے لیے checkout button interception شامل کیا گیا۔

**Version: 1.3.0 - Released on 2026-01-27**
* **نیا:** Store API fetch interception کے ساتھ WooCommerce Blocks checkout انٹیگریشن۔
* **نیا:** WooCommerce checkout کے لیے invisible captcha سپورٹ (hCaptcha invisible, reCAPTCHA v2 invisible, v3)۔
* **نیا:** Ultimate Multisite کے بغیر استعمال کے لیے اسٹینڈالون سیٹنگز پیج۔
* **نیا:** dependency conflict سے بچاؤ کے لیے Jetpack Autoloader۔
* **ٹھیک کیا:** Dynamic Ultimate Multisite checkout (AJAX-loaded content) پر hCaptcha render نہیں ہو رہا تھا۔
* **ٹھیک کیا:** فارم validation errors ہونے پر Captcha refresh/reset نہیں ہو رہا تھا۔
* **ٹھیک کیا:** WooCommerce checkout page پر hCaptcha نظر نہیں آ رہا تھا۔
* **ٹھیک کیا:** reCAPTCHA class not found error (google/recaptcha PHP library شامل کی گئی)۔
* **بہتر کیا:** WordPress hooks، MutationObserver، اور AJAX interception کے ذریعے error detection۔
* **بہتر کیا:** سیٹنگز کی تفصیلات میں API keys کے لیے dashboard URLs شامل کیے گئے۔

**Version: 1.2.2 - Released on 2026-01-24**
* **ٹھیک کیا:** Ultimate Multisite Login Form Element پر Captcha ظاہر نہیں ہو رہا تھا (form filter name mismatch)۔
* **ٹھیک کیا:** Cap widget HTML کو wp_kses() sanitization کے ذریعے ختم کیا جا رہا تھا۔
* **ٹھیک کیا:** JavaScript selectors، element IDs میں slashes والے فارمز کو نہیں ڈھونڈ پا رہے تھے۔
* **شامل کیا:** classaddons کے لیے اجازت یافتہ HTML ٹیگز کو بڑھانے کے لیے فلٹر hook `wu_kses_allowed_html`۔
* **ہٹایا:** Dead code JavaScript files کو provider-specific scripts سے تبدیل کیا گیا۔

**Version: 1.2.1 - Released on 2026-01-23**

* **ٹھیک کیا:** multisite environments میں Cap Captcha token validation ناکام ہو رہا تھا (اب network-wide transients استعمال کرتا ہے)۔
* **ٹھیک کیا:** Captcha اب لاگ ان کی حیثیت سے قطع نظر تمام صارفین کے لیے مستقل طور پر render ہوتا ہے۔
* **ٹھیک کیا:** captcha rendering اور validation میں عدم مطابقت تھی جس کی وجہ سے checkout failures ہو رہے تھے۔

**Version: 1.2.0 - Released on 2026-01-21**

* **نیا:** Cap Captcha - self-hosted proof-of-work captcha، جو activation پر ڈیفالٹ طور پر فعال ہوتا ہے۔
* **نیا:** Zero-configuration protection - addon کو فعال کریں اور آپ فوری طور پر محفوظ ہو جاتے ہیں۔
* **نیا:** آسانی سے توسیع کے لیے Polymorphic captcha provider architecture۔
* **نیا:** WooCommerce Store API checkout protection against card testing attacks۔
* **نیا:** Statistics tracking dashboard جو challenges، verifications، اور بلاک شدہ حملوں کو دکھاتا ہے۔
* **نیا:** Cap Captcha کی مشکل کے لیے security level presets (Fast, Medium, Max)۔
* **نیا:** reCAPTCHA اور hCaptcha providers کے لیے Abstract base classes۔
* **بہتر کیا:** codebase کو modular provider classes میں refactor کیا گیا۔
* **بہتر کیا:** dedicated manager class کے ساتھ concerns کی بہتر علیحدگی۔
* **ٹھیک کیا:** $_SERVER variable sanitization کے لیے security improvements۔
* **ٹھیک کیا:** WordPress naming conventions کے لیے PHPUnit test configuration۔

**Version: 1.0.1 - Released on 2025-09-28**

* Prefix کو ultimate-multisite میں rename کیا؛ text domain کو update کیا؛ version bump۔
