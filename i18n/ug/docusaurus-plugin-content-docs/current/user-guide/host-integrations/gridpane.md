---
title: GridPane bilan integratsiya
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration

## Обшумат (Overview) {#overview}
GridPane هي لوحة تحكم استضافة ووردبريس متخصصة ومصممة للمحترفين الجادين في ووردبريس. هذا التكامل يتيح المزامنة التلقائية للنطاقات وإدارة شهادات SSL بين Ultimate Multisite و GridPane.

## ویژگی‌ها (Features) {#features}
- مزامنه خودکار دامنه‌ها
- مدیریت گواهی‌های SSL
- پیکربندی خودکار ثابت SUNRISE

## پیش‌نیازها (Requirements) {#requirements}
باید کدهای زیر را در فایل `wp-config.php` خود تعریف کنید:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## دستورالعمل‌های راه‌اندازی (Setup Instructions) {#setup-instructions}

### ۱. دریافت اطلاعات API GridPane خود {#1-get-your-gridpane-api-credentials}

۱. وارد داشبورد GridPane خود شوید.
۲. به "Settings" > "API" بروید.
۳. اگر قبلاً کلید API ندارید، یک کلید API تولید کنید.
۴. کلید API خود را کپی کنید.

### ۲. دریافت شناسه سرور و سایت خود {#2-get-your-server-and-site-ids}

۱. در داشبورد GridPane خود، به بخش "Servers" (سرورها) بروید.
۲. سروری که ووردبريس چند سایت شما روی آن میزبانی شده است را انتخاب کنید.
۳. شناسه سرور (Server ID) را یادداشت کنید (که در آدرس یا صفحه جزئیات سرور قابل مشاهده است).
۴. به بخش "Sites" (سایت‌ها) بروید و سایت ووردبريس خود را انتخاب کنید.
۵. شناسه سایت (Site ID) را یادداشت کنید (که در آدرس یا صفحه جزئیات سایت قابل مشاهده است).

### ۳. اضافه کردن ثابت‌ها به wp-config.php {#3-add-constants-to-wp-configphp}

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### ۴. فعال کردن یکپارچه‌سازی (Integration) {#4-enable-the-integration}

۱. در پنل مدیریت ووردبريس خود، به Ultimate Multisite > Settings بروید.
۲. به تب "Domain Mapping" (نقشه‌برداری دامنه) بروید.
۳. به پایین اسکرول کرده و به بخش "Host Integrations" (یکپارچه‌سازی هاست) بروید.
۴. یکپارچه‌سازی GridPane را فعال کنید.
۵. روی "Save Changes" (ذخیره تغییرات) کلیک کنید.

## نحوه کارکرد (How It Works) {#how-it-works}

وقتی یک دامنه در Ultimate Multisite نقشه‌برداری می‌شود:

۱. این ادغام (integration) یک درخواست به APIِ GridPane می‌فرستد تا دامنه شما را به سایت اضافه کند.
۲. GridPane به صورت خودکار موضوع صدور گواهی SSL (SSL certificate provisioning) را مدیریت می‌کند.
۳. وقتی نگاشت دامنه (domain mapping) حذف می‌شود، این ادغام دامنه را از GridPane حذف خواهد کرد.

این ادغام همچنین ثابت SUNRISE در فایل wp-config.php شما را به صورت خودکار تنظیم می‌کند که برای کار صحیح نگاشت دامنه لازم است.

## مدیریت ثابت SUNRISE {#sunrise-constant-management}

یک ویژگی منحصر‌به‌فردِ ادغام GridPane این است که آن به طور خودکار ثابت SUNRISE در wp-config.php را برمی‌گرداند تا از تداخل با سیستم نگاشت دامنه خودِ GridPane جلوگیری کند. این کار تضمین می‌کند که هر دو سیستم بدون مشکل بتوانند با هم کار کنند.

## عیب‌یابی (Troubleshooting) {#troubleshooting}

### مشکلات اتصال API {#api-connection-issues}
- بررسی کنید که کلید API شما درست باشد.
- مطمئن شوید که شناسه سرور و سایت شما صحیح هستند.
- اطمینان حاصل کنید که حساب GridPane شما مجوزهای لازم را دارد.

### مشکلات گواهی SSL {#ssl-certificate-issues}
- ممکن است برای صدور گواهی‌های SSL توسط GridPane کمی زمان طول بکشد.
- تأیید کنید که دامنه‌های شما به درستی به آدرس IP سرور شما اشاره می‌کنند.
- تنظیمات SSL مربوط به سایت خود در GridPane را بررسی کنید.

### دامنه اضافه نشده است {#domain-not-added}
- لاگ‌های Ultimate Multisite را برای هر پیام خطایی بررسی کنید.
- تأیید کنید که دامنه قبلاً در GridPane اضافه نشده باشد.
- مطمئن شوید که رکورد‌های DNS دامنه شما به درستی پیکربندی شده‌اند.
