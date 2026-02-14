---
title: تكامل Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# تكامل Cloudways

## نظرة عامة
Cloudways هو منصة استضافة سحابية مُدارة تتيح لك نشر مواقع WordPress على مزودي سحابة مختلفين مثل DigitalOcean و AWS و Google Cloud والمزيد. يتيح هذا التكامل مزامنة النطاقات تلقائيًا وإدارة شهادات SSL بين Ultimate Multisite و Cloudways.

## الميزات
- المزامنة التلقائية للنطاقات
- إدارة شهادات SSL
- دعم النطاقات الإضافية
- التحقق من DNS لشهادات SSL

## المتطلبات
يجب تعريف الثوابت التالية في ملف `wp-config.php` الخاص بك:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

اختياريًا، يمكنك أيضًا تعريف:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## تعليمات الإعداد

### 1. احصل على بيانات اعتماد API الخاصة بـ Cloudways

1. سجّل الدخول إلى لوحة تحكم Cloudways الخاصة بك
2. انتقل إلى "الحساب" > "مفاتيح API"
3. أنشئ مفتاح API إذا لم يكن لديك واحد بالفعل
4. انسخ بريدك الإلكتروني ومفتاح API

### 2. احصل على معرفات الخادم والتطبيق الخاصة بك

1. في لوحة تحكم Cloudways الخاصة بك، انتقل إلى "الخوادم"
2. اختر الخادم الذي يستضيف موقع WordPress المتعدد المواقع الخاص بك
3. يظهر معرف الخادم في عنوان URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. انتقل إلى "التطبيقات" واختر تطبيق WordPress الخاص بك
5. يظهر معرف التطبيق في عنوان URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. أضف الثوابت إلى wp-config.php

أضف الثوابت التالية إلى ملف `wp-config.php` الخاص بك:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

إذا كان لديك نطاقات إضافية يجب أن تكون دائمًا مدرجة:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. فعّل التكامل

1. في لوحة تحكم WordPress الخاصة بك، انتقل إلى Ultimate Multisite > الإعدادات
2. انتقل إلى علامة التبويب "تعيين النطاق"
3. مرّر لأسفل إلى "تكاملات المضيف"
4. فعّل تكامل Cloudways
5. انقر على "حفظ التغييرات"

## كيف يعمل

### المزامنة النطاقية

عند تعيين نطاق في Ultimate Multisite:

1. يسترجع التكامل جميع النطاقات المعيّنة حاليًا
2. يضيف النطاق الجديد إلى القائمة (مع نسخة www إذا كان ذلك مناسبًا)
3. يرسل القائمة الكاملة إلى Cloudways عبر API
4. يحدث Cloudways أسماء النطاقات المستعارّة لتطبيقك

ملاحظة: يتطلب API Cloudways إرسال القائمة الكاملة للنطاقات في كل مرة، وليس فقط إضافة أو إزالة نطاقات فردية.

### إدارة شهادة SSL

بعد مزامنة النطاقات:

1. يفحص التكامل أي النطاقات لديها سجلات DNS صالحة تشير إلى خادمك
2. يرسل طلبًا إلى Cloudways لتثبيت شهادات SSL من Let's Encrypt لتلك النطاقات
3. يتولى Cloudways إصدار وتثبيت شهادة SSL

## النطاقات الإضافية

يتيح لك الثابت `WU_CLOUDWAYS_EXTRA_DOMAINS` تحديد نطاقات إضافية يجب أن تكون دائمًا مدرجة عند المزامنة مع Cloudways. هذا مفيد لـ:

- النطاقات التي لا تُدار بواسطة Ultimate Multisite
- النطاقات ذات العلامة النجمية (مثل `*.example.com`)
- نطاقات التطوير أو الاختبار

## استكشاف الأخطاء وإصلاحها

### مشكلات اتصال API

تحقق من أن بريدك الإلكتروني ومفتاح API صحيحان  
تحقق من أن معرفات الخادم والتطبيق صحيحة  
تأكد من أن حساب Cloudways لديك لديه الأذونات اللازمة

### مشكلات شهادة SSL

يطلب Cloudways أن تكون لدى النطاقات سجلات DNS صالحة تشير إلى خادمك قبل إصدار شهادات SSL  
يفحص التكامل سجلات DNS قبل طلب شهادات SSL  
إذا لم تُصدر شهادات SSL، تحقق من أن النطاقات تشير بشكل صحيح إلى عنوان IP الخاص بخادمك

### النطاق غير مضاف

تحقق من سجلات Ultimate Multisite لأي رسائل خطأ  
تحقق من أن النطاق غير مضاف بالفعل إلى Cloudways  
تأكد من أن خطة Cloudways تدعم عدد النطاقات التي تضيفها
