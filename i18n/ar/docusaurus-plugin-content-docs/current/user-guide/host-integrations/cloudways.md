---
title: تكامل Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# تكامل Cloudways

## نظرة عامة
Cloudways هي منصة استضافة سحابية مُدارة تتيح لك نشر مواقع WordPress على مزوّدي سحابة مختلفين مثل DigitalOcean وAWS وGoogle Cloud والمزيد. يتيح هذا التكامل مزامنة النطاقات تلقائيًا وإدارة شهادات SSL بين Ultimate Multisite وCloudways.

## الميزات
- مزامنة النطاقات تلقائيًا
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

### 1. احصل على بيانات اعتماد Cloudways API الخاصة بك

1. سجّل الدخول إلى لوحة تحكم Cloudways الخاصة بك
2. انتقل إلى "Account" > "API Keys"
3. أنشئ مفتاح API إذا لم يكن لديك واحد بالفعل
4. انسخ بريدك الإلكتروني ومفتاح API

### 2. احصل على معرّفات الخادم والتطبيق الخاصة بك

1. في لوحة تحكم Cloudways الخاصة بك، انتقل إلى "Servers"
2. حدّد الخادم الذي تتم استضافة WordPress multisite الخاص بك عليه
3. يكون Server ID ظاهرًا في عنوان URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. انتقل إلى "Applications" وحدّد تطبيق WordPress الخاص بك
5. يكون App ID ظاهرًا في عنوان URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. أضف الثوابت إلى wp-config.php

أضف الثوابت التالية إلى ملف `wp-config.php` الخاص بك:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

إذا كانت لديك نطاقات **خارجية** إضافية (خارج شبكة multisite الخاصة بك) يجب أن تظل دائمًا ضمن قائمة أسماء Cloudways البديلة:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning لا تُدرج wildcard الخاص بشبكتك
لا **تُضف** `*.your-network.com` (أو أي نمط نطاق فرعي لشبكتك الخاصة) إلى
`WU_CLOUDWAYS_EXTRA_DOMAINS`. راجع [مهم — مشكلة wildcard SSL](#important--wildcard-ssl-pitfall)
أدناه لمعرفة سبب منع ذلك إصدار شهادات SSL لكل مستأجر.
:::

### 4. فعّل التكامل

1. في إدارة WordPress، انتقل إلى Ultimate Multisite > Settings
2. انتقل إلى تبويب "Domain Mapping"
3. مرّر لأسفل إلى "Host Integrations"
4. فعّل تكامل Cloudways
5. انقر على "Save Changes"

## كيف يعمل

### مزامنة النطاقات

عند ربط نطاق في Ultimate Multisite:

1. يسترجع التكامل جميع النطاقات المرتبطة حاليًا
2. يضيف النطاق الجديد إلى القائمة (مع نسخة www إذا كان ذلك مناسبًا)
3. يرسل القائمة الكاملة إلى Cloudways عبر API
4. يحدّث Cloudways أسماء النطاقات البديلة لتطبيقك

ملاحظة: تتطلب Cloudways API إرسال القائمة الكاملة للنطاقات في كل مرة، وليس مجرد إضافة نطاقات فردية أو إزالتها.

### إدارة شهادات SSL

بعد مزامنة النطاقات:

1. يتحقق التكامل من النطاقات التي لديها سجلات DNS صالحة تشير إلى خادمك
2. يرسل طلبًا إلى Cloudways لتثبيت شهادات Let's Encrypt SSL لتلك النطاقات
3. يتولى Cloudways إصدار شهادات SSL وتثبيتها

يطلب التكامل دائمًا شهادات Let's Encrypt **قياسية** (غير wildcard) من
Cloudways. إذا تم توفير نمط wildcard في `WU_CLOUDWAYS_EXTRA_DOMAINS`، تتم إزالة
`*.` البادئة قبل طلب SSL — ولا يتم أبدًا تثبيت wildcard نفسه بواسطة هذا
التكامل. لاستخدام شهادة wildcard على Cloudways سيتعيّن عليك تثبيتها
يدويًا، لكن القيام بذلك يمنع إصدار Let's Encrypt لكل نطاق للنطاقات المخصصة المرتبطة
(راجع المشكلة أدناه).

## النطاقات الإضافية

يتيح لك الثابت `WU_CLOUDWAYS_EXTRA_DOMAINS` تحديد نطاقات **خارجية** إضافية
يجب أن تظل دائمًا ضمن قائمة الأسماء البديلة لتطبيق Cloudways. استخدمه من أجل:

- نطاقات خارجية لا يديرها Ultimate Multisite (مثل موقع تسويقي منفصل يشارك تطبيق Cloudways نفسه)
- نطاقات مركونة أو مرحلية تريد إبقاءها ضمن قائمة الأسماء البديلة للتطبيق

لا **تستخدم** هذا الثابت من أجل wildcard النطاق الفرعي لشبكتك الخاصة
(مثل `*.your-network.com`). راجع مشكلة wildcard SSL أدناه.

## مهم — مشكلة Wildcard SSL

من الأخطاء الشائعة عند اتباع إعداد Cloudways الافتراضي إضافة wildcard مثل
`*.your-network.com` إلى `WU_CLOUDWAYS_EXTRA_DOMAINS`، أو تثبيت شهادة Cloudways
wildcard SSL يدويًا لذلك wildcard.

**إذا فعلت ذلك، فسيرفض Cloudways إصدار شهادات Let's Encrypt للنطاقات المخصصة
لكل مستأجر التي يربطها Ultimate Multisite.** يستبدل Cloudways شهادة
SSL النشطة على التطبيق في كل مرة، ووجود شهادة wildcard مسبقًا على
التطبيق يمنع إصدار Let's Encrypt لكل نطاق الذي يعتمد عليه التكامل.

### إعداد Cloudways SSL الموصى به لشبكة Ultimate Multisite

1. في تبويب **SSL Certificate** لتطبيق Cloudways، ثبّت شهادة **Let's Encrypt قياسية**
   تغطي فقط `your-network.com` و`www.your-network.com`
   — **وليست** wildcard.
2. لا **تضع** `*.your-network.com` (أو أي نمط نطاق فرعي لشبكتك الخاصة) في
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. خصّص هذا الثابت للنطاقات **الخارجية** فقط.
3. أنشئ wildcard النطاق الفرعي لكل مستأجر على مستوى **DNS** فقط (سجل `A` لـ
   `*.your-network.com` يشير إلى عنوان IP لخادم Cloudways الخاص بك) حتى تعمل المواقع الفرعية. يتم بعد ذلك إصدار SSL
   للنطاقات المخصصة المرتبطة الفردية تلقائيًا بواسطة التكامل
   عبر Let's Encrypt.

إذا كانت النطاقات المخصصة للمستأجرين لديك عالقة بدون SSL، فتحقق من تبويب SSL في Cloudways. إذا كانت
شهادة wildcard نشطة هناك، فأزلها، وأعد إصدار شهادة Let's Encrypt قياسية
لنطاق الشبكة الرئيسي فقط، وأزل أي إدخالات wildcard من
`WU_CLOUDWAYS_EXTRA_DOMAINS`. ثم أعد تشغيل ربط النطاق (أو انتظر العملية التالية)
وسيبدأ التكامل بإصدار شهادات لكل نطاق مرة أخرى.

## استكشاف الأخطاء وإصلاحها

### مشكلات اتصال API
- تحقق من أن بريدك الإلكتروني ومفتاح API صحيحان
- تحقق من أن معرّفات الخادم والتطبيق لديك صحيحة
- تأكد من أن حساب Cloudways لديك لديه الأذونات اللازمة

### مشكلات شهادة SSL
- يتطلب Cloudways أن تكون للنطاقات سجلات DNS صالحة تشير إلى خادمك قبل إصدار شهادات SSL
- يتحقق التكامل من سجلات DNS قبل طلب شهادات SSL
- إذا لم يتم إصدار شهادات SSL، فتحقق من أن نطاقاتك تشير بشكل صحيح إلى عنوان IP الخاص بخادمك
- **هل النطاقات المخصصة لكل مستأجر عالقة بدون SSL؟** تحقق من تبويب SSL Certificate في تطبيق Cloudways. إذا كانت شهادة wildcard (مثبتة يدويًا، أو تغطي `*.your-network.com`) نشطة، فلن يصدر Cloudways شهادات Let's Encrypt للنطاقات المخصصة المرتبطة بشكل فردي. استبدلها بشهادة Let's Encrypt قياسية تغطي نطاق الشبكة الرئيسي فقط (`your-network.com`، `www.your-network.com`) وأزل أي إدخالات wildcard من `WU_CLOUDWAYS_EXTRA_DOMAINS`. ثم أعد تشغيل ربط النطاق (أو انتظر العملية التالية) وسيطلب التكامل شهادات لكل نطاق.

### لم تتم إضافة النطاق
- تحقق من سجلات Ultimate Multisite بحثًا عن أي رسائل خطأ
- تحقق من أن النطاق غير مضاف بالفعل إلى Cloudways
- تأكد من أن خطة Cloudways تدعم عدد النطاقات التي تضيفها
