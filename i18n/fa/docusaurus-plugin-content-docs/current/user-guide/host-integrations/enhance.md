---
title: تقویت یکپارچه‌سازی پنل کنترل
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# یکپارچه‌سازی با کنترل پنل Enhance

## نمای کلی
Enhance یک کنترل پنل مدرن است که قابلیت‌های قدرتمندی برای اتوماسیون و مدیریت هاست ارائه می‌دهد. این یکپارچه‌سازی امکان همگام‌سازی خودکار دامنه و مدیریت گواهی SSL را بین Ultimate Multisite و کنترل پنل Enhance فراهم می‌کند.

**بحث مرتبط:** برای نکات انجمن و اطلاعات بیشتر، [بحث #265 در GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) را ببینید.

## ویژگی‌ها
- همگام‌سازی خودکار دامنه هنگام mapping دامنه‌ها در Ultimate Multisite
- صدور خودکار گواهی SSL از طریق LetsEncrypt پس از resolve شدن DNS
- پشتیبانی از subdomain برای شبکه‌هایی که در حالت subdomain اجرا می‌شوند
- حذف دامنه هنگام پاک شدن mapping‌ها
- تست اتصال برای بررسی اعتبار API credentials

## پیش‌نیازها

### پیش‌نیازهای سیستم
- کنترل پنل Enhance نصب شده و قابل دسترسی
- نصب WordPress Multisite که روی سرور Enhance میزبانی شده یا به آن متصل است
- وب‌سرور Apache (Enhance در حال حاضر از تنظیمات Apache پشتیبانی می‌کند؛ LiteSpeed Enterprise با هزینه کمتر در دسترس است)

### دسترسی API
برای ایجاد توکن‌های API باید دسترسی مدیریتی به کنترل پنل Enhance داشته باشید.

## دریافت اطلاعات API

### ۱. ایجاد توکن API

1. به عنوان مدیر وارد کنترل پنل Enhance شوید
2. روی **Settings** در منوی ناوبری کلیک کنید
3. به **Access Tokens** بروید
4. روی **Create Token** کلیک کنید
5. یک نام توصیفی برای توکن بگذارید (مثلاً "Ultimate Multisite Integration")
6. نقش **System Administrator** را اختصاص دهید
7. برای تاریخ انقضا:
   - خالی بگذارید اگر می‌خواهید توکن هرگز منقضی نشود
   - یا یک تاریخ انقضای مشخص برای امنیت بیشتر تعیین کنید
8. روی **Create** کلیک کنید

پس از ایجاد، **Access Token** و **Organization ID** شما نمایش داده می‌شود. **فوراً این‌ها را ذخیره کنید** چون توکن فقط یک‌بار نشان داده می‌شود.

### ۲. دریافت Organization ID

Organization ID در صفحه Access Tokens در یک کادر اطلاعاتی آبی با برچسب "Org ID: {your_id}" نمایش داده می‌شود.

Organization ID یک UUID با فرمت مشابه این است: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

همچنین می‌توانید Organization ID یک مشتری را به این روش پیدا کنید:
1. به صفحه **Customers** بروید
2. روی **Manage customer** برای مشتری مورد نظر کلیک کنید
3. به URL نگاه کنید - Organization ID همان کاراکترهای الفبایی-عددی بعد از `/customers/` است

### ۳. دریافت Server ID

برای پیدا کردن Server ID (که برای عملیات دامنه لازم است):

1. در کنترل پنل Enhance، به **Servers** بروید
2. روی سروری که WordPress شما روی آن اجرا می‌شود کلیک کنید
3. Server ID (با فرمت UUID) در URL یا جزئیات سرور قابل مشاهده است
4. همچنین می‌توانید از API برای لیست کردن سرورها استفاده کنید:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID از فرمت UUID پیروی می‌کند: `00000000-0000-0000-0000-000000000000`

### ۴. دریافت URL API

URL API شما همان URL کنترل پنل Enhance است که `/api/` به آن اضافه شده:

```
https://your-enhance-panel.com/api/
```

**مهم:** مسیر `/api/` الزامی است. اشتباهات رایج شامل:
- استفاده از دامنه بدون `/api/`
- استفاده از HTTP به جای HTTPS (HTTPS برای امنیت الزامی است)

## پیکربندی

### ثابت‌های الزامی

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
// یکپارچه‌سازی با کنترل پنل Enhance
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### راه‌اندازی از طریق ویزارد یکپارچه‌سازی

1. در پنل مدیریت WordPress، به **Ultimate Multisite** > **Settings** بروید
2. به تب **Integrations** بروید
3. **Enhance Control Panel Integration** را پیدا کنید و روی **Configuration** کلیک کنید
4. ویزارد شما را در مراحل راه‌اندازی راهنمایی می‌کند:
   - **مرحله ۱:** معرفی و نمای کلی ویژگی‌ها
   - **مرحله ۲:** وارد کردن اطلاعات API (توکن، URL API، Server ID)
   - **مرحله ۳:** تست اتصال
   - **مرحله ۴:** بررسی و فعال‌سازی

می‌توانید انتخاب کنید:
- اجازه دهید ویزارد ثابت‌ها را به‌صورت خودکار به فایل `wp-config.php` تزریق کند
- تعریف ثابت‌ها را کپی کرده و به‌صورت دستی اضافه کنید

## پیکربندی‌های اضافی WordPress

بر اساس بازخورد انجمن ([بحث #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265))، ممکن است نیاز به پیکربندی این تنظیمات اضافی داشته باشید:

### پیکربندی .htaccess

اگر با domain mapping مشکل دارید:
1. فایل `.htaccess` اصلی Enhance را حذف کنید
2. آن را با فایل `.htaccess` استاندارد WordPress Multisite جایگزین کنید

### ثابت‌های Cookie

این ثابت‌ها را به `wp-config.php` اضافه کنید تا مدیریت صحیح cookie در دامنه‌های map شده تضمین شود:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## نحوه کار

### وقتی یک دامنه Map می‌شود

1. کاربر یک دامنه سفارشی را در Ultimate Multisite map می‌کند (یا یک سایت جدید در حالت subdomain ایجاد می‌شود)
2. یکپارچه‌سازی یک درخواست POST به API Enhance ارسال می‌کند: `/servers/{server_id}/domains`
3. Enhance دامنه را به پیکربندی سرور شما اضافه می‌کند
4. وقتی DNS به سرور شما resolve می‌شود، Enhance به‌صورت خودکار یک گواهی SSL از طریق LetsEncrypt صادر می‌کند
5. دامنه با HTTPS فعال می‌شود

### وقتی یک دامنه حذف می‌شود

1. یک domain mapping در Ultimate Multisite حذف می‌شود
2. یکپارچه‌سازی از Enhance برای پیدا کردن ID دامنه پرس‌وجو می‌کند
3. یک درخواست DELETE به این آدرس ارسال می‌شود: `/servers/{server_id}/domains/{domain_id}`
4. Enhance دامنه را از پیکربندی سرور شما حذف می‌کند

### بررسی DNS و SSL

Ultimate Multisite شامل بررسی داخلی DNS و SSL است:
- می‌توانید فاصله بررسی را در **Domain Mapping Settings** پیکربندی کنید (پیش‌فرض: ۳۰۰ ثانیه/۵ دقیقه)
- سیستم انتشار DNS را قبل از فعال علامت‌گذاری کردن دامنه بررسی می‌کند
- اعتبار گواهی SSL به‌صورت خودکار بررسی می‌شود
- Enhance صدور SSL را به‌صورت خودکار انجام می‌دهد، بنابراین پیکربندی دستی SSL نیاز نیست

## تأیید راه‌اندازی

### تست اتصال

1. در ویزارد یکپارچه‌سازی، از مرحله **Test Connection** استفاده کنید
2. افزونه سعی می‌کند دامنه‌های روی سرور شما را لیست کند
3. یک پیام موفقیت تأیید می‌کند که:
   - اطلاعات API صحیح است
   - URL API قابل دسترسی است
   - Server ID معتبر است
   - مجوزها به‌درستی تنظیم شده‌اند

### پس از Map کردن یک دامنه

1. یک دامنه تست در Ultimate Multisite map کنید
2. لاگ‌های Ultimate Multisite را بررسی کنید (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. در کنترل پنل Enhance بررسی کنید که دامنه اضافه شده است:
   - به **Servers** > **Your Server** > **Domains** بروید
   - دامنه جدید باید در لیست ظاهر شود
4. پس از انتشار DNS، بررسی کنید که SSL به‌صورت خودکار صادر شده است

## عیب‌یابی

### مشکلات اتصال API

**خطا: "Failed to connect to Enhance API"**
- بررسی کنید که `WU_ENHANCE_API_URL` شامل `/api/` در انتها باشد
- مطمئن شوید که از HTTPS استفاده می‌کنید، نه HTTP
- بررسی کنید که پنل Enhance از سرور WordPress شما قابل دسترسی باشد
- مطمئن شوید که قوانین فایروال اتصال را مسدود نکرده‌اند

**خطا: "Enhance API Token not found"**
- مطمئن شوید که `WU_ENHANCE_API_TOKEN` در `wp-config.php` تعریف شده است
- بررسی کنید که توکن در Enhance حذف یا منقضی نشده باشد
- غلط‌های تایپی در مقدار توکن را بررسی کنید

**خطا: "Server ID is not configured"**
- بررسی کنید که `WU_ENHANCE_SERVER_ID` در `wp-config.php` تعریف شده است
- مطمئن شوید که Server ID با فرمت UUID معتبر باشد
- تأیید کنید که سرور در پنل Enhance شما وجود دارد

### دامنه اضافه نشده

**لاگ‌ها را بررسی کنید:**
1. به **Ultimate Multisite** > **Logs** بروید
2. بر اساس **integration-enhance** فیلتر کنید
3. به دنبال پیام‌های خطا که مشکل را نشان می‌دهند بگردید

**دلایل رایج:**
- فرمت نام دامنه نامعتبر
- دامنه از قبل در Enhance وجود دارد
- مجوزهای API ناکافی (مطمئن شوید توکن نقش System Administrator دارد)
- Server ID با سرور واقعی در Enhance مطابقت ندارد

### مشکلات گواهی SSL

**SSL صادر نمی‌شود:**
- بررسی کنید که DNS به آدرس IP سرور شما اشاره می‌کند
- بررسی کنید که دامنه به‌درستی resolve می‌شود: `nslookup yourdomain.com`
- Enhance نیاز دارد که DNS قبل از صدور SSL resolve شود
- صدور SSL معمولاً ۵ تا ۱۰ دقیقه پس از انتشار DNS طول می‌کشد
- لاگ‌های کنترل پنل Enhance را برای خطاهای مربوط به SSL بررسی کنید

**عیب‌یابی دستی SSL در Enhance:**
1. به **Servers** > **Your Server** > **Domains** بروید
2. دامنه خود را پیدا کنید و وضعیت SSL آن را بررسی کنید
3. در صورت نیاز می‌توانید صدور SSL را به‌صورت دستی فعال کنید

### فاصله بررسی DNS

اگر فعال‌سازی دامنه‌ها یا گواهی‌های SSL بیش از حد طول می‌کشد:
1. به **Ultimate Multisite** > **Settings** > **Domain Mapping** بروید
2. تنظیم **DNS Check Interval** را پیدا کنید
3. از مقدار پیش‌فرض ۳۰۰ ثانیه به مقدار کمتر تغییر دهید (حداقل: ۱۰ ثانیه)
4. **توجه:** فواصل کمتر یعنی بررسی‌های مکررتر اما بار سرور بیشتر

### خطاهای احراز هویت

**خطاهای HTTP 401/403:**
- توکن API خود را در Enhance مجدداً ایجاد کنید
- بررسی کنید که توکن نقش **System Administrator** داشته باشد
- بررسی کنید که توکن منقضی نشده باشد
- مطمئن شوید که از Organization ID صحیح استفاده می‌کنید (گرچه معمولاً در URL نیاز نیست)

### تحلیل لاگ

ثبت جزئیات بیشتر را فعال کنید:
```php
// به wp-config.php برای دیباگ بهتر اضافه کنید
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

سپس لاگ‌ها را در این مکان‌ها بررسی کنید:
- لاگ‌های Ultimate Multisite: **Ultimate Multisite** > **Logs**
- لاگ دیباگ WordPress: `wp-content/debug.log`
- لاگ‌های پنل Enhance: در رابط مدیریت Enhance در دسترس است

## مرجع API

### احراز هویت
تمام درخواست‌های API از احراز هویت Bearer token استفاده می‌کنند:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoint‌های پرکاربرد

**لیست سرورها:**
```
GET /servers
```

**لیست دامنه‌های روی یک سرور:**
```
GET /servers/{server_id}/domains
```

**افزودن یک دامنه:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**حذف یک دامنه:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### مستندات کامل API
مستندات کامل API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## بهترین روش‌ها

### امنیت
- **هرگز توکن‌های API را در version control کامیت نکنید**
- توکن‌ها را در `wp-config.php` ذخیره کنید که باید از Git مستثنی شود
- از توکن‌ها با مجوزهای مناسب استفاده کنید (System Administrator برای یکپارچه‌سازی کامل)
- برای محیط‌های production تاریخ انقضا تنظیم کنید
- توکن‌ها را به‌صورت دوره‌ای تغییر دهید

### کارایی
- از فاصله بررسی DNS پیش‌فرض (۳۰۰ ثانیه) استفاده کنید تا از تماس‌های بیش از حد API جلوگیری شود
- منابع سرور Enhance را هنگام اجرای عملیات دامنه در مقیاس بزرگ نظارت کنید
- اگر دامنه‌های زیادی را همزمان map می‌کنید، افزودن دامنه‌ها را پراکنده کنید

### نظارت
- به‌طور منظم لاگ‌های Ultimate Multisite را برای خطاهای یکپارچه‌سازی بررسی کنید
- نظارت بر افزودن‌های ناموفق دامنه را راه‌اندازی کنید
- بررسی کنید که گواهی‌های SSL به‌درستی صادر می‌شوند
- ظرفیت سرور Enhance و محدودیت‌های دامنه را زیر نظر داشته باشید

## منابع اضافی

- **مستندات رسمی Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **مستندات API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **انجمن Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **بحث GitHub:** [Issue #265 - نکات یکپارچه‌سازی Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **راهنمای Domain Mapping Ultimate Multisite:** صفحه ویکی "How to Configure Domain Mapping v2" را ببینید

## پشتیبانی

اگر با مشکلی مواجه شدید:
1. بخش عیب‌یابی بالا را بررسی کنید
2. لاگ‌های Ultimate Multisite را مرور کنید
3. با [بحث‌های GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) مشورت کنید
4. برای مشکلات مربوط به پنل، با پشتیبانی Enhance تماس بگیرید
5. یک بحث جدید با لاگ‌های خطای دقیق برای کمک انجمن ایجاد کنید

## یادداشت‌ها

- این یکپارچه‌سازی فقط alias‌های دامنه را مدیریت می‌کند؛ Enhance به‌صورت خودکار SSL را مدیریت می‌کند
- یکپارچه‌سازی هم از domain mapping‌های سفارشی و هم از سایت‌های مبتنی بر subdomain پشتیبانی می‌کند
- ایجاد خودکار subdomain www در تنظیمات Domain Mapping قابل پیکربندی است
- Enhance در حال حاضر از تنظیمات Apache پشتیبانی می‌کند (LiteSpeed Enterprise در دسترس است)
- حذف دامنه از Ultimate Multisite، دامنه را از Enhance حذف می‌کند اما ممکن است گواهی‌های SSL مرتبط فوراً حذف نشوند
