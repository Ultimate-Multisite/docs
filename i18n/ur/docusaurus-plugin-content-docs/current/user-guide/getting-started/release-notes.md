---
title: ریلیز نوٹس
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# ریلیز نوٹس {#release-notes}

## Version 2.13.0 — 2026-06-05 کو ریلیز کیا گیا {#version-2130--released-on-2026-06-05}

- نیا: customer Account، checkout، billing، سائٹ، invoice، template switching، اور domain mapping فلو کے لیے sovereign-tenant سپورٹ شامل کی گئی تاکہ tenant networks منظم کارروائیوں کے لیے customers کو مرکزی سائٹ پر واپس بھیج سکیں۔
- نیا: recurring memberships کے لیے renewal-credential checks شامل کیے گئے تاکہ gateways محفوظ شدہ billing agreement، subscription، یا vault token غائب ہونے پر auto-renewal کو غیر فعال کر سکیں۔
- نیا: pending site creation کے لیے HMAC-verified loopback publishing شامل کی گئی تاکہ ان hosts پر checkout-to-site provisioning زیادہ قابلِ اعتماد ہو جہاں background jobs تاخیر کا شکار ہوتے ہیں۔
- نیا: SSO URLs، checkout-form base domains، اور خودکار domain-record creation کے لیے developer extension points شامل کیے گئے۔
- درستگی: SSO mapped domains، anonymous broker visits، logout، اور cross-plugin dependency conflicts میں زیادہ قابلِ اعتماد ہے۔
- درستگی: Pending site creation اب پرانے publish flags سے بحال ہو جاتی ہے اور customers کو site-creation screen پر پھنسے رہنے سے بچاتی ہے۔
- درستگی: shared checkout-form base domains کے لیے domain records اب نہیں بنائے جاتے، اور جب کوئی integration فعال نہ ہو تو غیر استعمال شدہ host-provider background jobs چھوڑ دیے جاتے ہیں۔
- درستگی: Checkout، billing address، password reset، email verification، template switching، tours، اور customer Dashboard کے edge cases اب معمول کے customer flows کو بلاک نہیں کرتے۔
- درستگی: Broadcast emails اب recipients کو نجی رکھتے ہیں جبکہ recipient lists یا mail transports ناکام ہونے پر SMTP/plugin fatal errors سے بچتے ہیں۔
- درستگی: Membership renewals، expiration display، اور payment collection کے edge cases اب فوری expirations، crashes، یا مطلوبہ payments چھوٹنے سے بچتے ہیں۔
- بہتر کیا گیا: WordPress compatibility کو 7.0 تک ٹیسٹ کیا گیا ہے، production Vue assets کو npm sources سے دوبارہ بنایا گیا ہے، اور Cypress end-to-end coverage اب مزید checkout، setup، SSO، اور gateway flows کو آزماتی ہے۔

## Version 2.12.0 — 2026-05-15 کو ریلیز کیا گیا {#version-2120--released-on-2026-05-15}

- نیا: Hostinger (hPanel) کو domain mapping integration کے ساتھ supported host provider کے طور پر شامل کیا گیا
- نیا: Site Exporter اب streamlined network-wide site restoration کے لیے network import bundles کو سنبھالتا ہے
- درستگی: BCC broadcast emails اب recipient addresses ظاہر ہونے سے بچانے کے لیے undisclosed-recipients header استعمال کرتے ہیں
- درستگی: non-date value کے ساتھ محفوظ کرتے وقت membership expiration date اب خراب نہیں ہوتی
- درستگی: Stripe membership updates اب deprecated deleteDiscount API کو call کیے بغیر discounts کو درست طور پر صاف کرتی ہیں
- درستگی: domain-mapped sites پر SSO redirects اب infinite redirect loops روکنے کے لیے محدود کر دیے گئے ہیں
- درستگی: Setup wizard image picker selection اب underlying data model کو درست طور پر update کرتی ہے
- درستگی: Site Exporter CLI اب درست default network site selection کو برقرار رکھتا ہے
- بہتر کیا گیا: plugin package سے bundled wp-cli ہٹا دیا گیا، جس سے plugin size کم ہوا

## Version 2.11.0 — 2026-05-11 کو ریلیز کیا گیا {#version-2110--released-on-2026-05-11}

- نیا: Site exports اب ایک self-booting `index.php` شامل کرتے ہیں تاکہ ZIP کو separate plugin install کے بغیر fresh host پر install کیا جا سکے۔
- نیا: Network export administrators کو Site Export admin page سے ایک single archive میں تمام subsites export کرنے دیتا ہے۔
- نیا: Allow Site Templates plan toggle اب fallback chain کے ذریعے نافذ ہوتا ہے، plan limits کے لیے template availability کو درست طور پر محدود کرتا ہے۔
- نیا: Checkout form editor اس وقت خبردار کرتا ہے جب کوئی product required field configured کیے بغیر شامل کیا جائے۔
- نیا: Import/Export settings tab اب اپنے scope کو واضح طور پر بیان کرتا ہے اور براہِ راست Site Export tool سے link کرتا ہے۔

## Version 2.10.0 — 2026-05-05 کو ریلیز کیا گیا {#version-2100--released-on-2026-05-05}

- نیا: seamless gateway configuration کے لیے OAuth flag gate کے ساتھ manual credential entry کے لیے PayPal guided setup wizard۔
- نیا: Template switch customer panel کو current-template card، persistent grid، اور **موجودہ template reset کریں** button کے ساتھ دوبارہ design کیا گیا۔
- درستگی: AJAX failure پر Template switching اب UI کو hang نہیں کرتی۔
- درستگی: Template switching permission states کو unauthorized access کے خلاف محفوظ کیا گیا۔
- درستگی: Site override inputs کو save کرنے سے پہلے validate کیا گیا۔
- درستگی: address empty ہونے پر billing address prompt اب دکھایا جاتا ہے۔
- درستگی: PHP 8.1 null-to-string deprecation notices حل کر دیے گئے۔
- درستگی: timing issues روکنے کے لیے Currents کو init hook سے پہلے lazy-loaded کیا گیا۔
- درستگی: تمام login flows میں filtered SSO path کا احترام کیا گیا۔
- درستگی: Blank site identity options save پر برقرار رکھے گئے۔

## Version 2.9.0 — 2026-04-30 کو ریلیز کیا گیا {#version-290--released-on-2026-04-30}

- نیا: Single-site export اور import کو **Tools > Export & Import** کے تحت شامل کیا گیا۔
- درستگی: Export ZIP files اب authenticated download endpoint کے ذریعے فراہم کی جاتی ہیں۔
- درستگی: pending export/import queries میں SQL injection risk اور query issues درست کیے گئے۔
- درستگی: جب admin customer email کو manually verify کرتا ہے تو Pending site published نہیں ہوتی۔
- درستگی: membership missing ہونے پر orphaned pending_site records صاف کیے گئے۔
- درستگی: Settings nav padding اور search anchor navigation درست کیے گئے۔
- درستگی: Pending sites اب All Sites view میں پہلے دکھائی جاتی ہیں۔
- درستگی: 403 errors روکنے کے لیے Screenshot provider (mShots) User-Agent header شامل کیا گیا۔
- درستگی: Import cron schedule circular dependency حل کر دی گئی۔
- درستگی: Tour IDs کو user settings keys میں underscores پر normalise کیا گیا۔
- بہتر کیا گیا: بہتر compatibility کے لیے Alchemy/Zippy کے بجائے اب ZipArchive استعمال کیا جاتا ہے۔

## Version 2.8.0 — 2026-04-29 {#version-280--released-on-2026-04-29}

- نیا: Other Options سیٹنگز UI میں Enable Jumper ٹوگل شامل کیا گیا۔
- نیا: Checkout فارمز کی فہرست کے ٹیبل میں اسٹیٹس کالم شامل کیا گیا۔
- نیا: کسٹم MU-plugin sunrise ایکسٹینشنز کے لیے Addon sunrise فائل لوڈر۔
- بہتر: سیٹنگز صفحے سے error-reporting opt-in سیٹنگ ہٹا دی گئی۔
- درستگی: Thank-you صفحے کا سائٹ کارڈ — تصویر اب محدود ہے اور لنکس درست انداز میں اسٹائل کیے گئے ہیں۔
- درستگی: Screenshot provider کو thum.io سے WordPress.com mShots پر تبدیل کیا گیا۔
- درستگی: Enable Registration اور Default Role اب fresh install پر درست ڈیفالٹس سیٹ کرتے ہیں۔
- درستگی: `get_site_url()` اب اس وقت خالی واپس نہیں کرتا جب ڈومین میں پورٹ شامل ہو۔
- درستگی: Clone میڈیا فائلیں اب درست طور پر کاپی ہوتی ہیں جب `copy_media` سیٹنگ خالی ہو۔
- درستگی: network-activate sitemeta write کے بعد object cache درست طور پر invalidated ہوتا ہے۔
- درستگی: DNS verification پر 3-part domains کے لیے کسٹم ڈومین خودکار طور پر primary میں promote ہو گیا۔
- درستگی: expired payment صاف کیے جانے پر pending membership منسوخ کر دی گئی۔
- درستگی: inline login prompt بند کرنے کے بعد password strength checker دوبارہ bind کیا گیا۔
- درستگی: جب سائٹ پہلے ہی بن چکی ہو تو thank-you صفحے پر infinite page reload روک دیا گیا۔
- درستگی: plugin activation اور settings save پر WP core registration option synced ہو گیا۔
- درستگی: PHP 8.4 compatibility کے لیے `calculate_expiration` میں null expiration guard شامل کیا گیا۔
- درستگی: جب customer کے پاس پہلے ہی active membership ہو تو duplicate signups بلاک کر دیے گئے۔
- درستگی: checkout میں `date_expiration` کے لیے null check شامل کیا گیا۔
- درستگی: سائٹ provisioning کو مضبوط بنایا گیا — limitations، membership inference، domain promotion۔
- درستگی: pre-install check status label کو check ناکام ہونے پر NOT Activated میں درست کیا گیا۔
- درستگی: email verification URLs کے لیے checkout domain استعمال کیا گیا۔
- درستگی: جب password field موجود نہ ہو تو checkout کے بعد auto-login۔
- درستگی: Free memberships اب expire نہیں ہوتیں — lifetime کے طور پر برتا گیا۔
- درستگی: Email verification gate سائٹ publish کو اس وقت تک روکے رکھتا ہے جب تک customer email verify نہ کرے۔
- درستگی: SES v2 API endpoint base path اور identity route درست کیے گئے۔
- درستگی: `wu_inline_login_error` hook کو pre-submit catch block میں emitted کیا گیا۔
