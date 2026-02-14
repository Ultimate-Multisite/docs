---
title: تكامل ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# تكامل ServerPilot

## نظرة عامة
ServerPilot هو خدمة سحابية لاستضافة WordPress ومواقع PHP الأخرى على خوادم في DigitalOcean، Amazon، Google، أو أي مزود خوادم آخر. يتيح هذا التكامل مزامنة النطاقات تلقائيًا وإدارة شهادات SSL بين Ultimate Multisite وServerPilot.

## الميزات
- المزامنة التلقائية للنطاقات
- إدارة شهادات SSL مع Let's Encrypt
- تجديد SSL التلقائي

## المتطلبات
يجب تعريف الثوابت التالية في ملف `wp-config.php` الخاص بك:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## تعليمات الإعداد

### 1. الحصول على بيانات اعتماد API لـ ServerPilot

1. سجّل الدخول إلى لوحة ServerPilot الخاصة بك
2. اذهب إلى "الحساب" > "API"
3. أنشئ مفتاح API جديد إذا لم يكن لديك واحد بالفعل
4. انسخ معرف العميل (Client ID) ومفتاح API

### 2. الحصول على معرف التطبيق (App ID)

1. في لوحة ServerPilot الخاصة بك، اذهب إلى "التطبيقات" (Apps)
2. اختر التطبيق الذي يستضيف موقع WordPress المتعدد المواقع الخاص بك
3. يظهر معرف التطبيق (App ID) في عنوان URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. إضافة الثوابت إلى wp-config.php

أضف الثوابت التالية إلى ملف `wp-config.php` الخاص بك:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. تمكين التكامل

1. في لوحة تحكم WordPress، اذهب إلى Ultimate Multisite > الإعدادات
2. انتقل إلى علامة التبويب "تعيين النطاقات" (Domain Mapping)
3. مرر لأسفل إلى "تكاملات المضيف" (Host Integrations)
4. فعّل تكامل ServerPilot
5. انقر على "حفظ التغييرات" (Save Changes)

## كيف يعمل

### مزامنة النطاقات

عند تعيين نطاق في Ultimate Multisite:

1. يسترجع التكامل قائمة النطاقات الحالية من ServerPilot
2. يضيف النطاق الجديد إلى القائمة (مع نسخة www إذا كان ذلك مناسبًا)
3. يرسل القائمة المحدثة إلى ServerPilot عبر API
4. يقوم ServerPilot بتحديث قائمة النطاقات لتطبيقك

### إدارة شهادة SSL

بعد مزامنة النطاقات:

1. يفعّل التكامل تلقائيًا AutoSSL لتطبيقك
2. يتعامل ServerPilot مع إصدار وتثبيت شهادة SSL باستخدام Let's Encrypt
3. يتعامل ServerPilot أيضًا مع التجديد التلقائي لشهادات SSL

## التحقق من شهادة SSL
تم تكوين التكامل لزيادة عدد محاولات التحقق من شهادة SSL لـ ServerPilot، حيث قد يستغرق ServerPilot بعض الوقت لإصدار وتثبيت شهادات SSL. بشكل افتراضي، سيحاول حتى 5 مرات، ولكن يمكن تعديل ذلك باستخدام المرشحات.

## استكشاف الأخطاء وإصلاحها

### مشاكل الاتصال بالـ API

- تحقق من أن معرف العميل (Client ID) ومفتاح API صحيحان
- تحقق من أن معرف التطبيق (App ID) صحيح
- تأكد من أن حساب ServerPilot لديك يملك الأذونات اللازمة

### مشاكل شهادة SSL

- يتطلب ServerPilot أن يكون لدى النطاقات سجلات DNS صالحة تشير إلى خادمك قبل إصدار شهادات SSL
- إذا لم تُصدر شهادات SSL، تحقق من أن النطاقات تشير بشكل صحيح إلى عنوان IP الخاص بخادمك
- قد يستغرق ServerPilot بعض الوقت لإصدار وتثبيت شهادات SSL (عادةً 5-15 دقيقة)

### النطاق غير مضاف

- تحقق من سجلات Ultimate Multisite لأي رسائل خطأ
- تحقق من أن النطاق غير مضاف بالفعل إلى ServerPilot
- تأكد من أن خطة ServerPilot تدعم عدد النطاقات التي تقوم بإضافتها

### إزالة النطاق

- حاليًا، لا يوفر API لـ ServerPilot طريقة لإزالة نطاقات فردية
- عندما يُزال تعيين نطاق في Ultimate Multisite، سيقوم التكامل بتحديث قائمة النطاقات في ServerPilot لاستبعاد النطاق المزال
