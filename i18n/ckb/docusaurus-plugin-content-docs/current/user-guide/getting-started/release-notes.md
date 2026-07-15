---
title: تێبینی ڕەوانەکان
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# یادداشتەکانی ڕێخاندنەوە (Release Notes)

## وەرگرتنی ٢.١٣.٠ - لە ٢٠٢٦-٠٦-٠٥ {#version-2130--released-on-2026-06-05}

- نوێ: پشتگیریکردنی sovereign-tenant بۆ هەژمار کڕیار، چاپی (checkout)، بڕین، سایت، فاکچۆ (invoice)، گۆڕینی قالب و مۆبایلکردنی دۆمنەکان بە شێوەیەکی باشتر کردووە بۆ ئەوەی تۆڕەکانی تەنەنت بتوانن کڕیارەکان دەگەڕێنەوە سەر سایت سەرەکی بۆ کارە بەڕێوەبردراوەکان.
- نوێ: چاککردنی مەرجەکانی نوێکردنەوەی تایبەتمەندییەکان (renewal-credential checks) بۆ ئەندامبوونی دۆخراو، بۆ ئەوەی گیت وێیەکانی کارلۆکڵ (gateways) دەتوانن ئۆتۆماتیک ڕێکخستنی دووبارەیان بەهێز بکەن کاتێک مێژووی بڕین، سابسکرایبکردن یان توکنە فاکچۆیەکی پارێزراو نەبووە.
- نوێ: دابینکردنی چاپکردنی گەڕانەوەی (loopback publishing) بە ڕێگەی HMAC بۆ دروستکردنی سایتەکانی لە چوارچوودا، بۆ ئەوەی پڕۆسەی پێشکەشکردنی سایتەکە لە کاتی تاخیربوونی کارە پسپۆڕییەکان (background jobs) لەسەر میزبانەکان زیاتر بەردەوام بێت.
- نوێ: دابینکردنی خشتەکانی پەرەپێدەر بۆ SSO URLs، ناوچەکانی سەرەکی فۆرم چاپی، و دروستکردنی تۆمارە ڕێکخستنەکانی دۆمنەکە بە شێوەیەکی ئۆتۆماتیک.
- چاک: SSO زیاتر بەردەوامترە لەسەر دۆمنەکان کە مۆبایلکراون، سەردانەکانی کارمەندانی ناڕێک (anonymous broker visits)، خەرجکردنەوەی لاگۆوت، و تێکچوونی پەیوەندی نێوان پڕۆژەکان.
- چاک: دروستکردنی سایتەکە لە کاتی تاخیربوونی ڕێگەی چاپکردن (publish flags) بە شێوەیەکی باشتر دەبێتەوە و کڕیارەکان لەسەر شاشەی دروستکردنی سایتەکە ناتوانن لەو مارۆڤان.
- چاک: تۆمارەکانی دۆمنەکە دووبارە بۆ ناوچەکانی سەرەکی فۆرم چاپی، و کارە پسپۆڕییەکانی میزبان (host-provider background jobs) کە بەکاری نەهێنرێت کاتێک هیچ یەکگرتوویی (integration)ی چالاک نییە، لەناو دەچن.
- چاک: حاڵەتە سنووردارەکانی چاپی، بڕین، ڕێکخستنی وشەکان، پڕۆژە سەرنجڕاکێشەکان (tours)، و داشبۆردی کڕیار، زیاتر ناتوانن ڕێگری لە ڕێگەی کارکردنی ئاسایی کڕیار بکەن.
- چاک: ئیمەیڵەکانی بڵاوکردنەوە ئێستا گیرفانەکان تایبەت دەپارێزن لە کاتی بەدواداچوون، لەکاتێکدا هەڵگرتنی هەڵە فیتال (fatal errors) لە SMTP/پڕۆژەکان پاراستراوە کاتێک لیستەکانی گەڵاوت یان ڕێڕەوی ئیمەیڵەکە شکست دەدەن.
- چاک: نوێکردنەوەی ئەندامبوونی، نیشاندانی کۆتایی هاتنی کارکردن، و حاڵەتە سنووردارەکانی کۆبکەوتنی پارەکان زیاتر ڕێگری لە کاتێک دەکەن کە بە شێوەیەکی فەرمیی دەچنەوە یان شکست دەدەن.
- باشتر کردراوە: ناساندنی WordPress تا 7.0 تاقیکردنەوەی ئەنجامدار، پڕۆژەکانی Vue لە سەرچاوەکانی npm دەدرێنەوە بۆ دروستکردنی نیشانییەکان (assets)، و گۆڕینی ئەنجامدار Cypress زیاتر کار دەکات لەسەر ڕێگەی چاپی، سیستەمەکان (setup)، SSO، و گیت وێیەکانی پاراستن.

## Version 2.12.0 — Baaraye 2.12.0 — Liqetirî 2026-05-15 {#version-2120--released-on-2026-05-15}

- New: Hostinger (hPanel) wekî pênojên poshtî hewatekirine bûye bi integrasyon ji bo mapiya domèn (domain mapping).
- New: Site Exporter niha ji bo hilberîna paketên importê ji bo restorasyonên site-ê berxwedan a neteweyî bi rêbazên bêhnê.
- Fix: Emaylên BCC broadcast niha ji bo ku nefaherin adresên bîrsin, ji aliyê enotirê nefaherînî (undisclosed-recipients header) ve hatine bikaranîn.
- Fix: Rêxistina tarika bajarî (membership expiration date) li ser kaydana bi değerek ne-tarihî (non-date value) niha nahanîna wê diyar e de vê carê.
- Fix: Günberûnên membership ji Stripe niha bi rastî rabûyên taybetbûna (discounts) paşve dike bin bêy ku API-ya deleteDiscount a pirandin.
- Fix: Rêxistina SSO li ser siteyên bi mapiya domèn niha hatine keshtin ji bo parastina sikuriyeke ne-berxwedanî (infinite redirect loops).
- Fix: Selektyona wêneyê (image picker) a wizard-a set-up niha ji bo rastkirina modela daneyên pawar e.
- Fix: CLI-ya Site Exporter niha seleksiyona rast a site-ê neteweyî bi default hatine parastin.
- Improved: wp-cli-ya paketê plugin ji paketê pluginê hatine hatine hatirandin, ku ji bo kirdavên pluginê girêdaya (plugin size) kesht e.

## Version 2.11.0 — Baaraye 2.11.0 — Liqetirî 2026-05-11 {#version-2110--released-on-2026-05-11}

- New: Site exports niha paketên `index.php` bi xwe ji bo hilberîna wê ji bo ku ZIP-ê bi host-a nû bi rêbazên pluginê vekirin bêy ku plugineke cuda hatibin asta.
- New: Network export li ser mîna administratoran dikare hemû subsite'ên bi yek arşiv derxistin ji pagafay admin a Site Export.
- New: Rêzazina toggle-a plan a Site Templates niha bi çemakî (fallback chain) hatine fêrkirin, ku rastî taybetbûna template'an li ser xwediyê planên kesht e.
- New: Editore form-a checkout diyar dike de kawên ku productê bi fel a zimanî (required field) ji bo şikirtin hatibû asta.
- New: Tabê setarkirina Import/Export niha bi rastî bi parastina bi vêçeyê (scope) xwe û li ser aliyê Site Export derxistin.

## Version 2.10.0 — Baaraye 2.10.0 — Liqetirî 2026-05-05 {#version-2100--released-on-2026-05-05}

- نوێ: سیستمی ڕێنمایی (wizard) بۆ PayPal بە شێوەیەکی دەستیی لەگەڵ زانیاریی تایبەت و بەکارھێنانی OAuth بۆ گۆڕینی ئاسان و پێکەوەی گۆڕینی گۆڕایندا.
- نوێ: پلەکان (customer panel) کە پێشتر بگۆڕاو، دابەشکردنی نوی لەگەڵ کارتێکی **current-template**، تۆڕێکی بەردەوام (persistent grid)، و دغدغه **Reset current template** گرتراوە.
- چارەسەر: گۆڕینی قالب (Template switching) دوویش UI دەبێت بۆ ئەگەر AJAX شکستپێکرد.
- چارەسەر: دۆخی ڕێگەپێدان لە گۆڕینی قالب لە بەرامبەر دەستکاری نادەروستکراوەکان پارێزراوەتەوە.
- چارەسەر: زانیاریی پێشنیارکردنی پیتەکانی باج (Billing address prompt) ئێستا دەردەکەوێت کاتێک پیتەکە پڕ نییە.
- چارەسەر: ئاگاداری گۆڕینی PHP 8.1 لە نێوان null و string ڕێکخراوەتەوە.
- چارەسەر: Current lazy-loaded پێش hook ی init بۆ ڕێگرتن لە کێشەکانی کات (timing issues).
- چارەسەر: پەیتی SSO کە فیلترکراوە، لە هەموو ڕێگاکانی لاگیندا ڕەوا بوو.
- چارەسەر: هەڵبژاردنی ناسنامەی سایتێک کە پڕ نییە پارێزراوەتەوە کاتێک دەکرێت سیف کرد.

## وەرگرت 2.9.0 — لە ٢٠٢٦-٠٤-٣٠ {#version-290--released-on-2026-04-30}

- نوێ: دابەشکردن و گرتنی فایلەکان بۆ سایتێکی تەنها یەک (Single-site export and import) لە خاڵەکانی **Tools > Export & Import** زیاد کرا.
- چارەسەر: فایلە ZIP ئەڤات بە ڕێگەی endpointی دابگرتەوە کە پەیوەندی بە زانیاریی ناساندنی تایبەت هەیە.
- چارەسەر: مەترسی Injection ی SQL و کێشەکانی پرسیارکردن لە خاڵەکانی export/import کە چاوەڕوان دەکرێن، دروست کران.
- چارەسەر: سایتێکی چاوەڕوانکراو نیشانی نییە کاتێک ئەدمن بە دەستی ئیمەی کڕیەکە دەستکاری بکات.
- چارەسەر: تۆمارەکان (records) کە لە پۆلێسدا بوون و پارچەکان لە یەکەوە نەبوونی، پاککراونەوە کاتێک ئەندازیاری ئەلۆکە نییە.
- چارەسەر: پدۆڵکردنی پادینگەکانی ڕێڕەوی Settings و ئامێرەکانی گەڕان دروست کران.
- چارەسەر: سایتەکان کە چاوەڕوانکراون، ئێستا یەکەمین شت لە دۆخی All Sites دەردەکەون.
- چارەسەر: Headerی User-Agent بۆ پێشکەشکار سکرین‌شۆت (mShots) زیاد کرا بۆ ڕێگرتن لە هەڵەی 403.
- چارەسەر: پەیوەندی دوورخستنی خێرایی (Import cron schedule circular dependency) چارەسەر کران.
- چارەسەر: Tour IDs بە underscore لە کلای سیستەمی کارپێکردندا ڕێکخراونەوە.
- باشترکراو: ZipArchive ئێستا بەکار دێت لە جیاتی Alchemy/Zippy بۆ یەکگرتوویی باشتر.

## وەرگرت 2.8.0 — لە ٢٠٢٦-٠٤-٢٩ {#version-280--released-on-2026-04-29}

- نوێ: دۆپۆچکی Jumper بۆ ڕێکخستنی Other Options لە UI ی تنظیماتەکان زیاد کرا.
- نوێ: ستوونی Status بۆ لیستەکەی فۆرمەکانی checkout زیاد کرا.
- نوێ: لودای فایل loader بۆ add-on sunrise بۆ کۆنترۆڵکردنی زیاتر لە MU-plugin sunrise کرد.
- باشترکراو: هەڵبژاردنی ڕاپۆرتی هەڵە (error-reporting opt-in) لە لاپەڕەی تنظیماتەکەدا لەناوچوو.
- چارەسەر: کارتەکانی سایت لە لاپەڕەی سوپاس بۆ ئیمێجەکە — ئێستا ئامادەکردنی ئیمێج و لینکەکان بە شێوەیەکی دروست دەبن.
- چارەسەر: پێشکەشکارێنتی Screenshot لە thum.io گۆڕاو بۆ WordPress.com mShots.
- چارەسەر: ڕێکخستنی Registration و Default Role ئێستا داتای سەرەتایی دروست دەبێت لە کاتی دامەزراندن نوێ.
- چارەسەر: `get_site_url()` دوویش هەڵنات پێدات کاتێک ناوچەکە پۆرتێکی (port) لەخۆ دەگرێت.
- چارەسەر: فایلەکانی مێدیا (media files) ئێستا بە دروستی کۆپی دەکرێنەوە کاتێک ستێٹنگ `copy_media` پەتایە.
- چارەسەر: Object cache دووبارە وەک پێویست لە دوای network-activate سێت مێتا دابنێت.
- چارەسەر: ناوچەی تایبەت (Custom domain) بە شێوەیەکی ئۆتۆماتیک بۆ سەرەکی دەگۆڕدرێت لە کاتی تاییدوکردنی DNS بۆ ناوچەکانی 3 بەش.
- چارەسەر: ئەندامبوونی پاشکەوتوو (Pending membership) کاتێک پارەی منداڵەکە کۆتایی هات لە بەکارهێنان پاک دەکرێتەوە.
- چارەسەر: چاککردنی توانای وشەکان بۆ سەرنجی پۆپ-اپ یان Login دووبارە دەکات دوای ئەوەی پرسیاری inline login کاتێک لێی دەدرێت لەناوچەکەدا بەسەربردرا.
- چارەسەر: Reload کردنەوەی لاپەڕەی نامێنەکان (Infinite page reload) لە لاپەڕەی سوپاس وەستاوە کاتێک سایتەکە لە پێشدا دروستکراوە.
- چارەسەر: هەڵبژاردنی registration ی WP core بە شێوەیەکی ڕێک دەبێت لە کاتی چالاککردنی plugin و سیوڕانەوەی تنظیمات.
- چارەسەر: گۆڕینی `calculate_expiration` بۆ PHP 8.4، گۆڕینی guards (پاراشکەوت) بۆ کەناڵێکی خاڵ (Null expiration guard).
- چارەسەر: ڕێگریکردن لە تۆمارکردنی دووبارە کاتێک کڕیارەکە ئەندامێکی چالاک هەیە.
- چارەسەر: چاککردن بۆ `date_expiration` لە فۆرمەکانی checkout زیاد کرا.
- چارەسەر: دامەزراندنی سایت (Site provisioning) بەهێزتر کرا — سنوورەکان، پێداچوونەوەی ئەندامبوونی، و پڕۆمۆشنکردنی ناوچەکان.
- چارەسەر: لیبلی Status بۆ pre-install چاککردن دروست کرا بۆ NOT Activated کاتێک چاکەکە شکست دەدات.
- چارەسەر: ناوچەی checkout بەکارهێنرا بۆ لینکەکانی تاییدوکردنی ئیمێل (email verification URLs).
- چارەسەر: Login ئۆتۆماتیک دوای checkout کاتێک هیچ فیلد پۆشتابڵ (password field) نییە.
- چارەسەر: ئەندامبوونی بێ بەرامبەر (Free memberships) زیاتر کاتێک کۆتایی هات لە بەکارهێنان دەبێت — وەک ژیانێکی تەواو (lifetime) دادەنرێت.

- ڕێکخستن: گۆڕینی پورتالی وەرگرتنی ئیمایل بۆ ئەوەی سایتەکە تا کاتێک کە بەکارهێنەر ئیمای خۆی دەبینێت، نیشان بدات.
- ڕێکخستن: پەیامە سەرەکی (base path) و ڕێگاکانی ناساندنی API لە SES v2 دروستکراون.
- ڕێکخستن: هەنگاو `wu_inline_login_error` لە بلوک گرتنی پێش نیشانکردنی داواکاریەکەدا (pre-submit catch block) دەداتەوە.
