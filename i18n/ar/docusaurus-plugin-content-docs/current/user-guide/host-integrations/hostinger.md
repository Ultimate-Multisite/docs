---
title: تكامل Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# تكامل Hostinger (hPanel) {#hostinger-hpanel-integration}

## نظرة عامة {#overview}

Hostinger هو مزود استضافة ويب شهير ويستخدم لوحة تحكم حديثة تسمى hPanel. يتيح لك تكامل Ultimate Multisite مع Hostinger إدارة النطاقات الفرعية والنطاقات الرئيسية تلقائيًا بين Ultimate Multisite ولوحة تحكم hPanel الخاصة بـ Hostinger، مما يسمح لك بإدارة تعيينات النطاقات والنطاقات الفرعية مباشرةً من لوحة تحكم WordPress الخاصة بك.

## الميزات {#features}

- إنشاء النطاقات الإضافية (addon domains) تلقائيًا في hPanel
- إنشاء النطاقات الفرعية تلقائيًا في hPanel (لتثبيتات المواقع المتعددة التي تعتمد على النطاقات الفرعية)
- إزالة النطاق عند حذف التعيينات
- تكامل سلس مع واجهة برمجة تطبيقات إدارة النطاقات (API) الخاصة بـ hPanel

## المتطلبات {#requirements}

لاستخدام تكامل Hostinger، تحتاج إلى ما يلي:

1. حساب Hostinger مع صلاحية الوصول إلى hPanel
2. رمز API (API token) من Hostinger
3. تعريف الثوابت التالية في ملف `wp-config.php` الخاص بك:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

اختياريًا، يمكنك أيضًا تعريف:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // نقطة نهاية API الافتراضية
```

## تعليمات الإعداد {#setup-instructions}

### 1. إنشاء رمز API الخاص بـ Hostinger {#1-generate-your-hostinger-api-token}

1. قم بتسجيل الدخول إلى حساب Hostinger الخاص بك وادخل إلى hPanel.
2. انتقل إلى **إعدادات الحساب (Account Settings)** ← **رموز API (API Tokens)**.
3. انقر على **إنشاء رمز جديد (Create New Token)**.
4. امنح الرمز اسمًا وصفيًا (مثل "Ultimate Multisite").
5. حدد الأذونات الضرورية:
   - إدارة النطاقات (Domain management)
   - إدارة النطاقات الفرعية (Subdomain management)
6. انسخ الرمز الذي تم إنشاؤه وخزنه في مكان آمن.

### 2. العثور على معرف الحساب (Account ID) {#2-find-your-account-id}

1. في hPanel، اذهب إلى **إعدادات الحساب (Account Settings)** ← **معلومات الحساب (Account Information)**.
2. سيظهر معرف الحساب (Account ID) الخاص بك في هذه الصفحة.
3. قم بنسخ هذا المعرّف وحفظه للخطوة التالية.

### 3. إضافة الثوابت إلى wp-config.php {#3-add-constants-to-wp-configphp}

أضف الثوابت التالية إلى ملف `wp-config.php` الخاص بك:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

إذا كان حساب Hostinger الخاص بك يستخدم نقطة نهاية API مختلفة، يمكنك تخصيصها:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. تفعيل التكامل {#4-enable-the-integration}

1. في لوحة تحكم WordPress الخاصة بك، اذهب إلى **Ultimate Multisite > الإعدادات (Settings)**.
2. انتقل إلى علامة التبويب **تعيين النطاقات (Domain Mapping)**.
3. مرر للأسفل حتى تصل إلى **تكاملات المضيف (Host Integrations)**.
4. قم بتفعيل تكامل **Hostinger (hPanel)**.
5. انقر على **حفظ التغييرات (Save Changes)**.

## كيف يعمل؟ {#how-it-works}

### النطاقات الإضافية (Addon Domains) {#addon-domains}

عندما تقوم بربط نطاق في Ultimate Multisite:

1. يرسل التكامل طلبًا إلى واجهة برمجة تطبيقات Hostinger لإضافة النطاق كنطاق إضافي.
2. يتم تهيئة النطاق للإشارة إلى دليل الجذر الخاص بك.
3. عند إزالة تعيين النطاق، يقوم التكامل تلقائيًا بإزالة النطاق الإضافي من hPanel.

### النطاقات الفرعية (Subdomains) {#subdomains}

بالنسبة لتثبيتات المواقع المتعددة التي تعتمد على النطاقات الفرعية، عند إنشاء موقع جديد:

1. يستخرج التكامل جزء النطاق الفرعي من النطاق الكامل.
2. يرسل طلبًا إلى واجهة برمجة تطبيقات Hostinger لإضافة النطاق الفرعي.
3. يتم تهيئة النطاق الفرعي للإشارة إلى دليل الجذر الخاص بك.

## ملاحظات هامة {#important-notes}

- يستخدم التكامل واجهة برمجة تطبيقات REST الخاصة بـ Hostinger للتواصل مع حسابك.
- يجب أن يحتوي رمز API الخاص بك على الأذونات اللازمة لإدارة النطاقات والنطاقات الفرعية.
- لا يتعامل التكامل مع إعدادات DNS؛ يجب أن تكون النطاقات مُوجهة بالفعل إلى حساب Hostinger الخاص بك.
- تتم طلبات API بشكل آمن عبر HTTPS.
- حافظ على أمان رمز API الخاص بك ولا تشاركه علنًا أبدًا.

## استكشاف الأخطاء وإصلاحها {#troubleshooting}

### مشاكل اتصال API {#api-connection-issues}

- تحقق من أن رمز API الخاص بك صحيح ولم تنتهِ صلاحيته.
- تأكد من أن معرف الحساب (Account ID) صحيح.
- تأكد من أن رمز API الخاص بك يمتلك الأذونات اللازمة لإدارة النطاقات.
- تحقق من أن حساب Hostinger الخاص بك نشط وفي حالة جيدة.

### النطاق لم تتم إضافته {#domain-not-added}

- تحقق من سجلات Ultimate Multisite بحثًا عن أي رسائل خطأ.
- تأكد من أن النطاق لم يتم إضافته بالفعل إلى حساب Hostinger الخاص بك.
- تأكد من أن حساب Hostinger الخاص بك لم يصل إلى الحد الأقصى للنطاقات الإضافية.
- أكد أن النطاق موجه بشكل صحيح إلى خوادم الأسماء (nameservers) الخاصة بـ Hostinger.

### مشاكل شهادة SSL {#ssl-certificate-issues}

- لا يتعامل التكامل مع إصدار شهادات SSL.
- عادةً ما توفر Hostinger شهادات SSL مجانية عبر AutoSSL.
- يمكنك إدارة شهادات SSL مباشرة في hPanel ضمن **SSL/TLS**.
- بدلاً من ذلك، استخدم Let's Encrypt مع ميزة AutoSSL الخاصة بـ Hostinger.

## الدعم {#support}

للحصول على مساعدة إضافية بخصوص تكامل Hostinger، يرجى الرجوع إلى:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
