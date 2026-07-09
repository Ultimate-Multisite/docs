---
title: تكامل GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# تكامل GridPane {#gridpane-integration}

## نظرة عامة {#overview}
GridPane هو لوحة تحكم استضافة WordPress متخصصة مصممة للمهنيين الجادين في WordPress. يتيح هذا التكامل مزامنة النطاقات تلقائيًا وإدارة شهادات SSL بين Ultimate Multisite و GridPane.

## الميزات {#features}
- المزامنة التلقائية للنطاقات
- إدارة شهادات SSL
- التكوين التلقائي للثابت SUNRISE

## المتطلبات {#requirements}
يجب تعريف الثوابت التالية في ملف `wp-config.php` الخاص بك:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## تعليمات الإعداد {#setup-instructions}

### 1. احصل على بيانات اعتماد API الخاصة بـ GridPane {#1-get-your-gridpane-api-credentials}

1. سجّل الدخول إلى لوحة معلومات GridPane الخاصة بك  
2. انتقل إلى "الإعدادات" > "API"  
3. أنشئ مفتاح API إذا لم يكن لديك واحد بالفعل  
4. انسخ مفتاح API الخاص بك  

### 2. احصل على معرفات الخادم والموقع الخاصة بك {#2-get-your-server-and-site-ids}

1. في لوحة معلومات GridPane الخاصة بك، انتقل إلى "الخوادم"  
2. اختر الخادم الذي يستضيف موقع WordPress المتعدد المواقع الخاص بك  
3. لاحظ معرف الخادم (يظهر في عنوان URL أو في صفحة تفاصيل الخادم)  
4. انتقل إلى "المواقع" واختر موقع WordPress الخاص بك  
5. لاحظ معرف الموقع (يظهر في عنوان URL أو في صفحة تفاصيل الموقع)  

### 3. أضف الثوابت إلى wp-config.php {#3-add-constants-to-wp-configphp}

أضف الثوابت التالية إلى ملف `wp-config.php` الخاص بك:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. فعّل التكامل {#4-enable-the-integration}

1. في لوحة تحكم WordPress الخاصة بك، انتقل إلى Ultimate Multisite > الإعدادات  
2. انتقل إلى علامة التبويب "تعيين النطاق"  
3. مرّر لأسفل إلى "تكاملات المضيف"  
4. فعّل تكامل GridPane  
5. انقر على "حفظ التغييرات"  

## كيف يعمل {#how-it-works}

عند تعيين نطاق في Ultimate Multisite:

1. يرسل التكامل طلبًا إلى API الخاص بـ GridPane لإضافة النطاق إلى موقعك  
2. يتعامل GridPane تلقائيًا مع توفير شهادة SSL  
3. عند إزالة تعيين نطاق، سيزيل التكامل النطاق من GridPane  

كما يتعامل التكامل تلقائيًا مع الثابت SUNRISE في ملف wp-config.php الخاص بك، وهو مطلوب لعمل تعيين النطاق بشكل صحيح.

## إدارة ثابت SUNRISE {#sunrise-constant-management}

إحدى الميزات الفريدة لتكامل GridPane هي أنه يعيد تلقائيًا الثابت SUNRISE في wp-config.php لمنع التعارض مع نظام تعيين النطاق الخاص بـ GridPane. يضمن ذلك أن يعمل كلا النظامين معًا دون مشاكل.

## استكشاف الأخطاء وإصلاحها {#troubleshooting}

### مشكلات اتصال API {#api-connection-issues}

- تحقق من أن مفتاح API الخاص بك صحيح  
- تحقق من أن معرفات الخادم والموقع الخاصة بك صحيحة  
- تأكد من أن حساب GridPane الخاص بك لديه الأذونات اللازمة  

### مشكلات شهادة SSL {#ssl-certificate-issues}

- قد يستغرق GridPane بعض الوقت لإصدار شهادات SSL  
- تحقق من أن نطاقاتك تشير بشكل صحيح إلى عنوان IP الخاص بخادمك  
- تحقق من إعدادات SSL الخاصة بـ GridPane لموقعك  

### النطاق غير مضاف {#domain-not-added}

- تحقق من سجلات Ultimate Multisite لأي رسائل خطأ  
- تحقق من أن النطاق غير مضاف بالفعل إلى GridPane  
- تأكد من أن سجلات DNS الخاصة بنطاقك مُكوّنة بشكل صحيح
