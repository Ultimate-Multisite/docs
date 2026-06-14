---
title: Ƙara haɗin wajen Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# باشقايان ديال تكامل لوحة التحكم

## نظرة عامة
Enhance هي لوحة تحكم حديثة كتوفر إمكانيات قوية لأتمتة وإدارة الاستضافة. هاد التكامل كيسمح بالمزامنة التلقائية للنطاقات (domains) وإدارة شهادات SSL بين Ultimate Multisite و Enhance Control Panel.

**نقاش ذي الصلة:** شوف [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) باش تشوف نصائح المجتمع ومعلومات إضافية.

## الميزات
- مزامنة تلقائية للنطاقات ملي تكون النطاقات مربوطة (mapped) في Ultimate Multisite
- توفير شهادات SSL تلقائي عن طريق LetsEncrypt ملي يتم حل DNS
- دعم النطاقات الفرعية (subdomain support) للشبكات اللي خدامة بنمط النطاق الفرعي
- إزالة النطاق ملي تتم حذف الربطات (mappings)
- اختبار الاتصال باش تتأكد من صحة بيانات الـ API

## المتطلبات

### متطلبات النظام
- لوحة تحكم Enhance Control Panel تكون مثبتة ومتاحة
- تثبيت WordPress Multisite يكون مستضاف على خادم Enhance أو متصل به
- خادم ويب Apache (Enhance كيدعم إعدادات Apache حالياً؛ LiteSpeed Enterprise متوفر بثمن مخفض)

### الوصول إلى الـ API
خاصك تكون عندك صلاحيات المسؤول (administrator access) في Enhance Control Panel باش تصنع رموز الـ API (API tokens).

## الحصول على بيانات الـ API ديالك

### 1. إنشاء رمز API (Create an API Token)

1. سجل الدخول للوحة تحكم Enhance Control Panel بصلاحية مسؤول
2. اضغط على **Settings** في قائمة التنقل (navigation menu)
3. توجه إلى **Access Tokens**
4. اضغط على **Create Token**
5. أعطِ الرمز اسم وصفي (مثلاً: "Ultimate Multisite Integration")
6. خصص الدور **System Administrator**
7. بالنسبة لتاريخ الانتهاء:
   - اتركها فارغة إذا كنت بغيتي الرمز ما يخلصش أبداً
   - أو حدد تاريخ انتهاء معين لأغراض الأمان
8. اضغط على **Create**

بعد ایجاد، **Access Token** و **Organization ID** شما نمایش داده خواهد شد. لطفاً این موارد را فوراً ذخیره کنید زیرا توکن فقط یک بار نمایش داده می‌شود.

### ۲. دریافت Organization ID (شناسه سازمان)

Organization ID در صفحه Access Tokens در یک جعبه اطلاعاتی آبی با عنوان "Org ID: {your_id}" نمایش داده می‌شود.

Organization ID یک UUID فرمت شده به این شکل است: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

شما همچنین می‌توانید Organization ID مشتری را با انجام مراحل زیر پیدا کنید:
۱. به صفحه **Customers** بروید
۲. روی **Manage customer** برای مشتری مربوطه کلیک کنید
۳. به آدرس (URL) نگاه کنید - Organization ID حروف الفبایی بعد از `/customers/` است.

### ۳. دریافت Server ID (شناسه سرور)

برای پیدا کردن Server ID خود (که برای عملیات دامنه لازم است):

۱. در Enhance Control Panel، به بخش **Servers** بروید
۲. روی سروری که نصب وردپرس شما روی آن اجرا می‌شود کلیک کنید
۳. Server ID (در قالب UUID) در آدرس یا جزئیات سرور قابل مشاهده خواهد بود
۴. به طور alternatve، می‌توانید از API برای لیست کردن سرورها استفاده کنید:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID از فرمت UUID زیر پیروی می‌کند: `00000000-0000-0000-0000-000000000000`

### ۴. دریافت API URL (آدرس API)

API URL شما آدرس Enhance Control Panel با اضافه کردن `/api/` به آن است:

```
https://your-enhance-panel.com/api/
```

**مهم:** مسیر `/api/` الزامی است. اشتباهات رایج شامل موارد زیر است:
- استفاده فقط از دامنه بدون `/api/`
- استفاده از HTTP به جای HTTPS (برای امنیت نیاز به HTTPS دارید)

## پیکربندی

### ثابت‌های مورد نیاز

ثابت‌های زیر را در فایل `wp-config.php` خود اضافه کنید:

# شمول دادن با پنل کنترلی (Enhance Control Panel Integration)

```php
// افزایش یکپارچگی پنل کنترل
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### راه‌اندازی از طریق راهنمای یکپارچه‌سازی (Setup via Integration Wizard)

۱. در پنل مدیریت وردپرس خود، به مسیر **Ultimate Multisite** > **Settings** بروید.
۲. به تب **Integrations** (یکپارچه‌سازی‌ها) بروید.
۳. **Enhance Control Panel Integration** را پیدا کرده و روی **Configuration** کلیک کنید.
۴. راهنما شما را در مراحل تنظیمات هدایت می‌کند:
   - **مرحله ۱:** معرفی و مروری بر ویژگی‌ها
   - **مرحله ۲:** وارد کردن اطلاعات API خود (توکن، آدرس API، شناسه سرور)
   - **مرحله ۳:** تست اتصال
   - **مرحله ۴:** مرور نهایی و فعال‌سازی

شما می‌توانید یکی از این دو کار را انجام دهید:
- اجازه دهید راهنما به صورت خودکار این ثابت‌ها (constants) را در فایل `wp-config.php` شما قرار دهد.
- تعریف‌های ثابت را کپی کرده و آن‌ها را دستی اضافه کنید.

## تنظیمات اضافی وردپرس (Additional WordPress Configuration)

بر اساس بازخورد جامعه کاربری ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265))، ممکن است نیاز داشته باشید این تنظیمات اضافی را پیکربندی کنید:

### تنظیمات فایل .htaccess

اگر با نگاشت دامنه (domain mapping) مشکلی داشتید:
۱. فایل `.htaccess` اصلی Enhance را حذف کنید.
۲. آن را با فایل استاندارد `.htaccess` وردپرس Multisite جایگزین کنید.

### ثابت‌های کوکی (Cookie Constants)

این ثابت‌ها را به `wp-config.php` اضافه کنید تا مدیریت صحیح کوکی‌ها در دامنه‌های نگاشت شده تضمین شود:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## نحوه کارکرد (How It Works)

### وقتی یک دامنه نگاشت می‌شود (When a Domain is Mapped)

1. کاربر در Ultimate Multisite (یا زیردامنه حالت ایجاد شده) یک دامنه سفارشی را نگاشت می‌کند
2. این ادغام (integration) یک درخواست POST به APIِ Enhance می‌فرستد: `/servers/{server_id}/domains`
3. Enhance آن دامنه را به تنظیمات سرور شما اضافه می‌کند
4. وقتی DNS به سرور شما اشاره می‌کند، Enhance به طور خودکار یک گواهی SSL از طریق LetsEncrypt فراهم می‌کند
5. دامنه با HTTPS فعال می‌شود

### زمانی که یک دامنه حذف می‌شود

1. یک نگاشت دامنه در Ultimate Multisite حذف می‌شود
2. این ادغام (integration) از Enhance پرس‌وجو می‌کند تا شناسه دامنه را پیدا کند
3. یک درخواست DELETE به آدرس زیر ارسال می‌شود: `/servers/{server_id}/domains/{domain_id}`
4. Enhance آن دامنه را از تنظیمات سرور شما حذف می‌کند

### بررسی DNS و SSL

Ultimate Multisite شامل بررسی‌های داخلی برای DNS و SSL است:
- می‌توانید فاصله زمانی بررسی (check interval) را در **Domain Mapping Settings** تنظیم کنید (پیش‌فرض: 300 ثانیه/5 دقیقه)
- سیستم قبل از علامت‌گذاری یک دامنه به عنوان فعال، انتشار DNS را تأیید می‌کند
- اعتبار گواهی SSL به صورت خودکار بررسی می‌شود
- Enhance مدیریت فراهم کردن SSL را به صورت خودکار انجام می‌دهد، بنابراین تنظیم دستی SSL لازم نیست

## تأیید تنظیمات

### تست اتصال

1. در Wizard ادغام (Integration Wizard)، از مرحله **Test Connection** استفاده کنید
2. پلاگین سعی می‌کند دامنه‌های سرور شما را فهرست کند
3. یک پیام موفقیت تأیید می‌کند:
   - اعتبارنامه‌های API صحیح هستند
   - آدرس API قابل دسترسی است
   - شناسه سرور معتبر است
   - مجوزها به درستی تنظیم شده‌اند

### بعد از نگاشت یک دامنه

1. یک دامنه آزمایشی را در Ultimate Multisite نگاشت کنید
2. لاگ‌های Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**) را بررسی کنید
3. در پنل کنترل Enhance تأیید کنید که دامنه اضافه شده است:
   - به **Servers** > **Your Server** > **Domains** بروید
   - دامنه جدید باید در لیست ظاهر شود
4. هنگامی که DNS منتشر شد، تأیید کنید که SSL به صورت خودکار فراهم شده است

## Maganar da Matala (Troubleshooting)

### Matsalolin Ha Sambungan API (API Connection Issues)

**Kuskure: "Failed to connect to Enhance API"**
- Ka tabbata `WU_ENHANCE_API_URL` a cikin `/api/` a ƙarshe yake.
- Ka tabbatar kana amfani da HTTPS, ba HTTP ba.
- Ka bincika cewa ana iya samun panel ɗin Enhance daga server ɗinka na WordPress.
- Ka tabbatar babu wata ƙa'idar firewall da ke hana wannan haɗin.

**Kuskure: "Enhance API Token not found"**
- Ka tabbatar `WU_ENHANCE_API_TOKEN` an rubuta shi a cikin `wp-config.php`.
- Ka bincika cewa ba a shafa ko ya ƙare ba token ɗin a Enhance.
- Ka bincika wata kuskuren rubutu (typo) a cikin yadda aka rubuta worthin token.

**Kuskure: "Server ID is not configured"**
- Ka tabbatar `WU_ENHANCE_SERVER_ID` an rubuta shi a cikin `wp-config.php`.
- Ka tabbatar Server ID yana da format na UUID mai inganci.
- Ka tabbatar wajen server ya kasance a panel ɗin Enhance.

### Ba A ƙara Domain (Domain Not Added)

**Ka bincika logs:**
1. Zuwa **Ultimate Multisite** > **Logs**
2. Ka fassara da **integration-enhance**
3. Ka nemo saƙonnin kuskure wanda ke nuna matsalar.

**Dalilan yau da sauti (Common causes):**
- Format na sunan domain ba shi da inganci.
- Domain ya kasance a Enhance.
- Ba a samu amincewa sosai ga API (ka tabbatar token yana da matsayin System Administrator).
- Server ID bai yi daidai ba tare da server ɗin gaske a Enhance ba.

### Matsalolin Sertifika na SSL (SSL Certificate Issues)

**Ba a samar da SSL:**
- Ka tabbatar DNS yana nuna IP ɗin server ɗinka.
- Ka bincika cewa domain ya yi gyara inganci: `nslookup yourdomain.com`
- Enhance tana buƙatar DNS ta gyara kafin za ta samar da SSL.
- Samar da SSL yawanci tana 5-10 minti bayan DNS ya wuce (propagation).
- Ka bincika logs na Enhance Control Panel don kuskuren da suka shafi SSL.

**Gyaran SSL a hannun kai a Enhance:**
1. Zuwa **Servers** > **Your Server** > **Domains**
2. Ka nemo domain ɗinka kuma ka bincika yanayin SSL-sai shi.
3. Za ka iya ƙara samun SSL a hannun kai idan ya kamata.

### Takaratayar Binciken DNS (DNS Check Interval)

Idan samfurin ko SSL certificates suna da yawa na fara aiki:
1. Zuwa **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Nemo wannan siffar **DNS Check Interval** (Wannan shi ne lokacin da ake bincika DNS)
3. Canza daga ƙaramin lamba na 300 seconds zuwa wani ƙarami (kamar aini: 10 seconds)
4. **Gargaɗi:** Lokacin da ka rage wannan lamba yana nufin ana bincika shi da yawa, amma hakan zai iya ƙara aiki ga server.

### Kuskuren Samun Bayan Aiki (Authentication Errors)

**Kuskuren HTTP 401/403:**
- Sake samar da API token ɗinka a Enhance
- Ka tabbatar cewa wannan token yana da rolin **System Administrator**
- Ka bincika ko wani lokacin token ya ƙare
- Ka tabbatar kana amfani da Organization ID da ya dace (ko da yake ba a bukata shi ne a URL ba)

### Bincike na Logs (Log Analysis)

Ka samar da logs masu faɗi:
```php
// Ka ƙara wannan a wp-config.php don inganta bincike
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Sannan ka bincika logs a wuraren da suka dace:
- Logs na Ultimate Multisite: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Logs na panel Enhance: Ana bayarwa a cikin interface na admin na Enhance

## Bayanai na API (API Reference)

### Samun Bayan Aiki (Authentication)
Dukiyar buƙatun API suna amfani da Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Wurin Amfani da Kowa (Common Endpoints Used)

**Lissafin Servers:**
```
GET /servers
```

**Lissafin Domains a Turaren Server ɗin:**
```
GET /servers/{server_id}/domains
```

**Ƙara Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Kashe Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Bayanai na API na Tsafi (Full API Documentation)
Bayanai na API na cikakken tsari: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Amfani da Shawara Na Musamman (Best Practices)

### Tsaro
- **Kada ba ka saka API tokens zuwa cikin version control ba**
- Ajiye tokens a `wp-config.php` wanda ya kamata a cire shi daga Git
- Yi amfani da tokens da suka dace da iyakoki (System Administrator don cikakken haɗi)
- Saka lokutan ƙarewa na token ga muhallin production
- Awaƙa su yi girma kullum

### Inganci (Performance)
- Yi amfani da tsarin binciken DNS na asali (300 seconds) don kawo ƙarin kuɗin haɗi ba tare da yawa ba
- Bincika ƙarfin kayan aiki na server Enhance lokacin da kake gudanar da ayyukan domain masu girma
- Ka yi la'akari da tsare-tsaren ƙara domain idan kana mappers da dama wani lokaci

### Bincike (Monitoring)
- A gwada log ɗin Ultimate Multisite kullum don rashin haɗi na haɗin kai
- Saka tsarin bincike ga rashin saka domain
- Ka tabbatar cewa sertifika na SSL suna aiki daidai
- Ka kula da ƙarfin server Enhance da iyakoki na domain

## Kayayyakin Tambayar (Additional Resources)

- **Dokumentaccen Asali na Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentaccen API na Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Babban Labarin al'umma na Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Tattaunawar GitHub:** [Issue #265 - Shaidar Haɗin Enhace](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Gaihoton Ultimate Multisite na Saka Domain:** Ka gani shafin wiki "Yadda Ake Tsare Domain Mapping v2"

## Tallafi (Support)

Idan ka fuskanci matsaloli:
1. Bincika sassa ta magance matsalar a sama
2. Bude log ɗin Ultimate Multisite
3. Ka yi magana da [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Ka tuntuɓi tallafin Enhance don matsaloli na panel
5. Ka ƙirƙiri sabon tattaunawa tare da log na matsalar sosai don taimako daga al'umma

## Bayanai (Notes)

Wannan haɗin yana gudanar da alias na domain kawai; Enhance tana gudanar da SSL ko'ina ta zahiri.
Wannan haɗin yana samun tallafi ga mappin domain na musamman (custom domain mappings) da kuma wuraren site-based (subdomain-based sites).
Za ka iya tsara samar da www subdomain a zahiri ta hanyar sanya shi a cikin cài đặt na Domain Mapping.
Enhance tana tallafawa tsarin Apache (LiteSpeed Enterprise akwai) a yanzu.
Kada ka cire domain daga Ultimate Multisite, zai cire domain daga Enhance amma ba zai shafa ko'ina SSL da aka haɗa shi nan take ba.
