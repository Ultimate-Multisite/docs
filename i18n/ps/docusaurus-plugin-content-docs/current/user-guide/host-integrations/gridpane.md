---
title: GridPane 통합
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# دمج GridPane (GridPane Integration)

## مروری (Overview) {#overview}
GridPane یو ویआरपी پروفیشنلहरूको लागि बनाइएको एउटा विशेष वर्डप्रेस होस्टिङ कन्ट्रोल प्यानल हो। यो इन्टिग्रेशनले अल्टीमेट मल्टिसिट र GridPane बीच डोमेन सिङ्क्रनाइजेसन र SSL सर्टिफिकेट व्यवस्थापनलाई स्वचालित बनाउँछ।

## सुविधाहरू (Features) {#features}
- स्वचालित डोमेन सिङ्क्रनाइजेसन
- SSL सर्टिफिकेट व्यवस्थापन
- SUNRISE कन्स्टेन्टको स्वचालित कन्फिगरेसन

## आवश्यकताहरू (Requirements) {#requirements}
तपाईंले आफ्नो `wp-config.php` फाइलमा निम्न कन्स्टेन्टहरू परिभाषित गर्नुपर्छ:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## सेटअप निर्देशनहरू (Setup Instructions) {#setup-instructions}

### १. आफ्नो GridPane API प्रमाणहरू प्राप्त गर्नुहोस् (Get Your GridPane API Credentials) {#1-get-your-gridpane-api-credentials}

१. आफ्नो GridPane ड्यासबोर्डमा लगइन गर्नुहोस्।
२. "Settings" > "API" मा जानुहोस्।
३. यदि तपाईंसँग पहिले नै कुनै API key छैन भने एउटा API key बनाउनुहोस्।
४. आफ्नो API key कपि गर्नुहोस्।

### २. आफ्नो सर्भर र साइट ID प्राप्त गर्नुहोस् (Get Your Server and Site IDs) {#2-get-your-server-and-site-ids}

१. आफ्नो GridPane ड्यासबोर्डमा, "Servers" मा जानुहोस्।
२. जहाँ तपाईंको वर्डप्रेस मल्टिसिट होस्ट गरिएको छ त्यो सर्भर चयन गर्नुहोस्।
३. सर्भर ID नोट गर्नुहोस् (URL मा वा सर्भर विवरण पृष्ठमा देखिने)।
४. "Sites" मा जानुहोस् र आफ्नो वर्डप्रेस साइट चयन गर्नुहोस्।
५. साइट ID नोट गर्नुहोस् (URL मा वा साइट विवरण पृष्ठमा देखिने)।

### ३. wp-config.php मा कन्स्टेन्टहरू थप्नुहोस् (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

निम्न कन्स्टेन्टहरू आफ्नो `wp-config.php` फाइलमा थप्नुहोस्:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### ४. इन्टिग्रेशन सक्रिय गर्नुहोस् (Enable the Integration) {#4-enable-the-integration}

१. आफ्नो वर्डप्रेस एडमिनमा, Ultimate Multisite > Settings मा जानुहोस्।
२. "Domain Mapping" ट्याबमा जानुहोस्।
३. तल स्क्रोल गरेर "Host Integrations" मा जानुहोस्।
४. GridPane इन्टिग्रेशन सक्रिय गर्नुहोस् (Enable)।
५. "Save Changes" मा क्लिक गर्नुहोस्।

## यो कसरी काम गर्छ (How It Works) {#how-it-works}

जब अल्टीमेट मल्टिसिटमा एउटा डोमेन नक्सा गरिन्छ:

۱. این یکپارچه‌سازی درخواستێک به API دِ گراپون (GridPane) درخواستی برای اضافه کردن دامنه شما به سایت می‌فرستد.
۲. دِ گراپون به صورت خودکار مدیریت صدور گواهی SSL را انجام می‌دهد.
۳. وقتی نگاشت دامنه حذف می‌شود، این یکپارچه‌سازی دامنه را از دِ گراپون حذف خواهد کرد.

این یکپارچه‌سازی همچنین ثابت SUNRISE در فایل wp-config.php شما را به صورت خودکار مدیریت می‌کند که برای کار صحیح نگاشت دامنه لازم است.

## مدیریت ثابت SUNRISE {#sunrise-constant-management}

یک ویژگی منحصر‌به‌فرد یکپارچه‌سازی دِ گراپون این است که به طور خودکار ثابت SUNRISE در wp-config.php را برمی‌گرداند تا با سیستم نگاشت دامنه خود دِ گراپون تداخل ایجاد نشود. این کار باعث می‌شود هر دو سیستم بدون مشکل بتوانند با هم کار کنند.

## عیب‌یابی {#troubleshooting}

### مشکلات اتصال API {#api-connection-issues}
- بررسی کنید که کلید API شما درست باشد.
- مطمئن شوید که شناسه سرور و سایت شما صحیح هستند.
- اطمینان حاصل کنید که حساب دِ گراپون شما مجوزهای لازم را دارد.

### مشکلات گواهی SSL {#ssl-certificate-issues}
- ممکن است دِ گراپون برای صدور گواهی‌های SSL کمی زمان ببرد.
- تأیید کنید که دامنه‌های شما به درستی به آدرس IP سرور شما اشاره می‌کنند.
- تنظیمات SSL دِ گراپون را برای سایت خود بررسی کنید.

### دامنه اضافه نشده است {#domain-not-added}
- لاگ‌های Ultimate Multisite را برای هرگونه پیام خطا بررسی کنید.
- تأیید کنید که دامنه قبلاً در دِ گراپون اضافه نشده باشد.
- مطمئن شوید که رکورد‌های DNS دامنه شما به درستی پیکربندی شده‌اند.
