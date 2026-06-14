---
title: Integracja CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integration CyberPanel

Evîlî ev nasîma ku diyar kirin a Ultimate Multisite CyberPanel ji bo şêweyek virtual host (virtual host) bi avotomatî afêmkirin û hatina wê derketin (delete) li CyberPanel, bi taybetmendiyeke optional ji bo daxastkirina SSL bi avotomatî (auto-SSL) bi Let's Encrypt, ramana.

## Ew çi dike?

- Dema ku yek domên (domain) di Ultimate Multisite de diyar kirin, ev integration API yê CyberPanelê ji bo afêmkirina virtual host ji bo wê domên e.
- Dema ku diyar kirina domên hatine derketin, ev integration API ye ji bo derketina virtual host bersivî wê dike.
- Dema ku auto-SSL aktife ye, ev integration hatine vekirin (trigger) ji bo derketina sertifikata Let's Encrypt rastî piştî ku virtual hostê afêm kirin.
- Bi taybetmendiyeke optional, alias-a `www.` hatine afêmkirin/derketin li gorî setarkirina "Auto-create www subdomain" (Avotomatî afêmkirina domênkê www) di setarkiriyên Domain Mapping de.

## Pêşkinîyên lazîk

- Yek instance yê CyberPanel ku bi awayî karê (running) ye (v2.3 an ji beriya wê hatine rajanîn), ku ji servera WordPress ya we re daxwîn e.
- Yek veb-sayt (website) ku di CyberPanel de hewce ye û li berê, root ya network-a WordPress ya te peyda dike. Ev integration virtual hostên nû li ser vê serverê hatine pênase.
- Mergandina API yê CyberPanel aktife ye. Authentication ji bo wê bi carê xal û şifreya admin a CyberPanel ya te têna.
- Rekordên DNS yên domênên diyar kirin, pirre, gelekî, ji bo ku auto-SSL sertifikata rastî derkatin, pirre, ji bo li berê piştî ku angoşa servera te ye.

## Pêşwendiyên lazîk

Pêşten, ev constants di dosyaya `wp-config.php` de hatine vekirin:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Bi taybetmendiyeke optional, tu dikarin jî vekirin:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — SSL-i-d (Let's Encrypt) SSL nakon krijja domèn
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Ji bi fer certificate-a SSL ji bo xwestena

## Ramana yênin (Setup Instructions)

### 1. Aktivekirina API-ya CyberPanel

1. Binê sistên kontrolkerî CyberPanel wek administrator login bikin.
2. Ragin **Security** > **SSL** û ji kerê xwe vekirin ku SSL li ser xwe ya CyberPanel jî aktife ye (bi destpêkê ji bo xwestkirina API-yên amane).
3. API-ya CyberPanel bi default li `https://your-server-ip:8090/api/` hene. Nîşaneyek nîşanê ne hene ku wê aktife bike – ji bo karê administrator, ew bi default aktife ye.

### 2. Eşayên constant (Constants) li wp-config.php zêde bikin

Eşayên constant yên lê hatine ji kerê xwe li dosyaya `wp-config.php` berî linya `/* That's all, stop editing! */` zêde bikin:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ji bo aktiva kirina auto-SSL (rêveya min):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktivekirina Entegrasyonê

1. Di admin-a network-a WordPress wekî Ultimate Multisite de, ragin **Ultimate Multisite** > **Settings**.
2. Ragin berî tab-a **Domain Mapping**.
3. Ji bo le berê ji **Host Integrations** bişorê.
4. Entegrasyona **CyberPanel** aktife bike.
5. **Save Changes** (Guhê gelek).

### 4. Teyakkaza kirina Pêrevjê (Verify Connectivity)

Ji bo tayassirkirina pêkirdin, ji kerê xwe ji test-a pênase ya li ser settings wizard-ê bikaranîn:
```

١. به **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** بروید.
٢. روی **Test Connection** کلیک کنید.
٣. یک پیام موفقیت تأیید می‌کند که پلاگین می‌تواند به APIِ CyberPanel دسترسی پیدا کند و با موفقیت احراز هویت شود.

## چطور کار می‌کند

### Domain Mapping (نقشه‌برداری دامنه)

وقتی یک دامنه در Ultimate Multisite نگاشت می‌شود:

١. این ادغام یک درخواست `POST` به مسیر `/api/createWebsite` روی میزبان CyberPanel شما ارسال می‌کند.
٢. CyberPanel یک هاست مجازی جدید برای دامنه تحت بسته پیکربندی شده ایجاد می‌کند.
٣. ریشه سند (document root) طوری تنظیم می‌شود که به ریشه شبکه وردپرس شما اشاره کند.
٤. وقتی نگاشت دامنه حذف می‌شود، این ادغام از `/api/deleteWebsite` برای پاکسازی هاست مجازی استفاده می‌کند.

### Auto-SSL (خودکار SSL)

وقتی `WU_CYBERPANEL_AUTO_SSL` برابر با `true` باشد:

١. پس از ایجاد هاست مجازی، این ادغام برای دامنه از مسیر `/api/issueSSL` درخواست می‌کند.
٢. CyberPanel یک گواهی Let's Encrypt را با چالش ACME HTTP-01 درخواست می‌کند.
٣. CyberPanel قبل از انقضا، گواهی را به صورت خودکار تمدید می‌کند.

> **مهم:** باید DNS کاملاً برای آدرس IP سرور شما منتشر شده باشد تا Let's Encrypt بتواند دامنه را تأیید کند. اگر صدور SSL بلافاصله پس از نگاشت با شکست مواجه شد، منتظر انتشار DNS بمانید و سپس از داشبورد CyberPanel در بخش **SSL** > **Manage SSL** دوباره درخواست SSL دهید.

### www Subdomain (زیردامنه www)

اگر **Auto-create www subdomain** در تنظیمات Domain Mapping شما فعال باشد، این ادغام یک نام مستعار هاست مجازی برای `www.<domain>` نیز ایجاد می‌کند و وقتی Auto-SSL روشن است، گواهی را که هم شامل نسخه اصلی (apex) و هم نسخه www باشد، صادر می‌کند.

### Email Forwarders (پریدن ایمیل‌ها)

کاتێک افزونه [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) فعال بێت، CyberPanel دەتوانێت بۆ کڕیارەکان ئیمێلی ڕێگامکردنی (email forwarders) بەکاربهێنێت. ئەم فۆردەرانە پەیامەکان لەسەر نێوانیە یەک دوای ناو دۆمەینی (domain address) دەڕێژێت بۆ ناوێکی دیکە، بەبێ ئەوەی مۆڵبەیک (mailbox)ێکی تەواو دروست بکرێت، کە ئەمەش بۆ ئالیزەکان وەک `info@customer-domain.test` یان `support@customer-domain.test` باشە.

پێش ئەوەی فۆردەر بۆ کڕیارەکان چالاک بکەیت:

1. دڵنیابە کە ئەو دیاریکراوانەی سەرەوە لە CyberPanel ڕێکخراون و تاقیکردنەوەی پەیوەندی (connection test) سەرکەوتوو بێت.
2. سیستەمی پڕۆڤایدر ئیمێلی CyberPanel لە تنظیمات افزاونەکەدا چالاک بکەیت.
3. دڵنیابە کە ناو دۆمەینی کڕیارەکە پێش دروستکردنی فۆردەرەکە لە CyberPanel هەیە.
4. یەک فۆردەر تاقیکردنەوە دروست بکە و پەیامێک لە ڕێگەی ئەو فۆردەرەوە بنێری، پێش ئەوەی تایبەتمەندییەکە لە پلانی پڕۆدۆکشندا داواکاریت بکەیت.

ئەگەر دروستکردنی فۆردەر شکستپێکرد، یەکەم لۆگەکانی چالاکی Ultimate Multisite بەدوای چاکبینی بگەڕێ، پاشان دڵنیا بە CyberPanel بێت کە ناو سەرچاوەکە هەیە و ئەوەی بەکارهێنەری API ئەو ڕێکارە بۆ بەڕێوەبردنی ئیمیل (email-management permissions) دەستووبوون.

## ئاماژەکانی گرنگ

| Constant | پێویستە | پێشنیارکراو | وەسفکردن |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | بێ لێ ڕەت (Yes) | — | لینکێکی تەواوە بۆ نمونهی CyberPanel یەکەت لەوانەیە پۆرتێک هەبێت، وەک `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | بێ لێ ڕەت (Yes) | — | ناوی بەڕێوەبەری CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | بێ لێ ڕەت (Yes) | — | وشەی بایۆسەری بەڕێوەبەری CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | بێ لێ ڕەت (Yes) | `Default` | پڕۆژەی میزبینی CyberPanel کە بۆ میزبانە وێبسووڵانە نوێیەکان دیاری دەکرێت |
| `WU_CYBERPANEL_AUTO_SSL` | ناهێت (No) | `true` | دوای دروستکردنی دۆمەین، سێرتیسڵی Let's Encrypt دروست بکەیت |
| `WU_CYBERPANEL_PHP_VERSION` | ناهێت (No) | `PHP 8.2` | پێکهاتەی PHP بۆ میزبانە وێبسووڵانە نوێیەکان (دەبێت لەگەڵ ئەو کۆنسێپتەی CyberPanel دامەزراوە بێت) |
| `WU_CYBERPANEL_EMAIL` | ناهێت (No) | — | ئیمێلی پەیوەندیدار بۆ تۆمارکردنی سێرتیسڵی SSL |

API ی CyberPanel تکیه د پرسیار سشن-پایز توکن (session-based token authentication) د کاروي. این ادغام به طور خودکار توکن ترلاسه کولو په هر API call کې مدیریت کوي.
د مدیر حساب یې په CyberPanel باید حق تولید او حذف ویبسایتونو لري.
CyberPanel په پیشټه پورې په پورت `8090` کې چليږي. که سرور Ihr له فایروال کاروي، ډاغه اطمینان وکړئ چې دا پورت له سرور د WordPress اپلیکیشن сървър څخه رامنځته کیږي.
این ادغام رکودونو (DNS records) مدیریت نه کوي. تاسو باید د د دامنه DNS خپل سرور IP ته اشاره کړئ تر دې وړاندې چې په Ultimate Multisite کې یې مَپ کړئ.
که تاسو OpenLiteSpeed (OLS) کاروئ، وروسته له بدلونونو په وर्चुअल هاست کې، یو نرم ریستارت (graceful restart) خودکار کیږي. هیڅ manuāli مداخلې نه دي اړین.

## مشکلي حلول (Troubleshooting)

### API Connection Refused (پاسخ ورکړل د API اتصال)

- ډاغه وګورئ چې پورت `8090` په خپل سرور فایروال کې खुڵه ده.
- ډاغه کیکړئ چې `WU_CYBERPANEL_HOST` ارزښت شامل پروتوکول (مثلاً `https://`) او پورت صحیح دی.
- وګورئ چې د CyberPanel SSL سند هم صالح دی؛ ځینې خود-سایګن سندونه TLS verification ناکامۍ لامل کیي могат. یوازې په اعتمادمنو خصوصي شبکې περιئنتونو کې `WU_CYBERPANEL_VERIFY_SSL` ته `false` تنظیم کړئ.

### Authentication Errors (تاییدولو غلطۍ)

- ډاغه کیکړئ چې ستاسو `WU_CYBERPANEL_USERNAME` او `WU_CYBERPANEL_PASSWORD` صحیح دي، خو مستقیم په CyberPanel کې لاگ او ورسره وکړئ.
- که تکرار شوي ناکام لاګ کولو کوششونه وکړل شي، CyberPanel حسابونو ته لاک کوي. که لاکआउटونه پیښی شي، CyberPanel کې **Security** > **Brute Force Monitor** وګورئ.

### Domain Not Created (دامنه نه جوړه شوې)

- د Ultimate Multisite فعالیت لوګ (**Ultimate Multisite** > **Activity Logs**) لپاره په API غلطي پیغامونو وګورئ.
- ډاغه کیکړئ چې په `WU_CYBERPANEL_PACKAGE` کې تعریف شوی پېकेज په CyberPanel کې شته دی (**Packages** > **List Packages**).
- ډاغه اطمینان ورکړئ چې دامنه پیل شوي ویبسایت په CyberPanel کې نه وي — د دوپل ویبسایت جوړول له غلطي پیغام سره پای ته ورشي کیږي.

### SSL Certificate Not Issued (SSL سند ورکړل نه شوې)

- تایید کنید DNS به طور کامل پخش شده است: دستور `dig +short your-domain.com` باید آدرس IP سرور شما را برگرداند.
- Let's Encrypt محدودیت نرخ (rate limits) اعمال می‌کند. اگر اخیراً چندین گواهی برای یک دامنه مشابه صادر کرده‌اید، قبل از تلاش مجدد صبر کنید.
- برای جزئیات شکست در صدور گواهی، لاگ‌های SSL را در بخش **Logs** > **Error Logs** در CyberPanel بررسی کنید.
- به عنوان یک راه حل جایگزین، می‌توانید SSL را به صورت دستی از CyberPanel صادر کنید: **SSL** > **Manage SSL** > دامنه مورد نظر را انتخاب کنید > **Issue SSL**.

## منابع

- مستند API CyberPanel: https://docs.cyberpanel.net/docs/category/api
- مدیریت SSL در CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- محدودیت‌های نرخ Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
