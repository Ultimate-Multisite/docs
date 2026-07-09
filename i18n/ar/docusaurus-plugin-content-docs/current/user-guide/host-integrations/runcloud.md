---
title: تكامل RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# تكامل RunCloud {#runcloud-integration}

## نظرة عامة {#overview}
RunCloud هو منصة لإدارة الخوادم قائمة على السحابة تتيح لك نشر وإدارة تطبيقات الويب على خوادمك السحابية الخاصة بسهولة. يتيح هذا التكامل مزامنة النطاقات تلقائيًا وإدارة شهادات SSL بين Ultimate Multisite وRunCloud.

## الميزات {#features}
- المزامنة التلقائية للنطاقات
- إدارة شهادات SSL
- إزالة النطاق عند حذف الخرائط

## المتطلبات {#requirements}
يجب تعريف الثوابت التالية في ملف `wp-config.php` الخاص بك:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## تعليمات الإعداد {#setup-instructions}

### 1. احصل على بيانات اعتماد RunCloud API {#1-get-your-runcloud-api-credentials}

1. سجّل الدخول إلى لوحة تحكم RunCloud الخاصة بك
2. انتقل إلى "الملف الشخصي للمستخدم" (انقر على صورة ملفك الشخصي في الزاوية اليمنى العليا)
3. اختر "API" من القائمة
4. انقر على "Generate API Key" إذا لم يكن لديك واحد بالفعل
5. انسخ مفتاح API ومفتاح السر الخاص بك

### 2. احصل على معرفات الخادم والتطبيق {#2-get-your-server-and-app-ids}

1. في لوحة تحكم RunCloud الخاصة بك، انتقل إلى "الخوادم"
2. اختر الخادم الذي يستضيف موقع WordPress المتعدد المواقع الخاص بك
3. يظهر معرف الخادم في عنوان URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. انتقل إلى "تطبيقات الويب" واختر تطبيق WordPress الخاص بك
5. يظهر معرف التطبيق في عنوان URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. أضف الثوابت إلى wp-config.php {#3-add-constants-to-wp-configphp}

أضف الثوابت التالية إلى ملف `wp-config.php` الخاص بك:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. فعّل التكامل {#4-enable-the-integration}

1. في لوحة تحكم WordPress الخاصة بك، انتقل إلى Ultimate Multisite > الإعدادات
2. انتقل إلى علامة التبويب "خريطة النطاق"
3. مرّر لأسفل إلى "Host Integrations"
4. فعّل تكامل RunCloud
5. انقر على "Save Changes"

## كيف يعمل {#how-it-works}

عند خريطة نطاق في Ultimate Multisite:

1. يرسل التكامل طلبًا إلى API RunCloud لإضافة النطاق إلى تطبيقك
2. إذا تم إضافة النطاق بنجاح، سيعيد التكامل أيضًا نشر شهادات SSL
3. عند إزالة خريطة النطاق، سيزيل التكامل النطاق من RunCloud

بالنسبة لتثبيتات النطاق الفرعي، سيعالج التكامل تلقائيًا إنشاء النطاقات الفرعية في RunCloud عند إضافة مواقع جديدة إلى شبكتك.

## استكشاف الأخطاء وإصلاحها {#troubleshooting}

### مشكلات اتصال API {#api-connection-issues}

- تحقق من صحة بيانات اعتماد API الخاصة بك
- تحقق من صحة معرفات الخادم والتطبيق الخاصة بك
- تأكد من أن حساب RunCloud الخاص بك لديه الأذونات اللازمة

### مشكلات شهادة SSL {#ssl-certificate-issues}

- قد يستغرق RunCloud بعض الوقت لإصدار شهادات SSL
- تحقق من أن نطاقاتك تشير بشكل صحيح إلى عنوان IP الخاص بخادمك
- تحقق من إعدادات SSL RunCloud لتطبيقك

### النطاق غير مضاف {#domain-not-added}

- تحقق من سجلات Ultimate Multisite لأي رسائل خطأ
- تحقق من أن النطاق غير مضاف بالفعل إلى RunCloud
- تأكد من أن خطة RunCloud الخاصة بك تدعم نطاقات متعددة
