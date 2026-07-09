---
title: تكامل Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# تكامل Cloudflare {#cloudflare-integration}

## نظرة عامة {#overview}
Cloudflare هي شبكة رائدة لتوصيل المحتوى (CDN) ومزوّد أمان يساعد على حماية المواقع وتسريعها. يتيح هذا التكامل إدارة النطاقات تلقائيًا بين Ultimate Multisite وCloudflare، خصوصًا لتثبيتات المواقع المتعددة على النطاقات الفرعية.

## الميزات {#features}
- إنشاء النطاقات الفرعية تلقائيًا في Cloudflare
- دعم النطاقات الفرعية عبر الوكيل
- إدارة سجلات DNS
- عرض محسّن لسجلات DNS في إدارة Ultimate Multisite

## المتطلبات {#requirements}
يجب تعريف الثوابت التالية في ملف `wp-config.php` لديك:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## تعليمات الإعداد {#setup-instructions}

### 1. احصل على مفتاح Cloudflare API الخاص بك {#1-get-your-cloudflare-api-key}

1. سجّل الدخول إلى Cloudflare dashboard الخاص بك
2. انتقل إلى "ملفي الشخصي" (انقر على بريدك الإلكتروني في الزاوية العلوية اليمنى)
3. اختر "API Tokens" من القائمة
4. أنشئ API token جديدًا بالأذونات التالية:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. انسخ API token الخاص بك

### 2. احصل على Zone ID الخاص بك {#2-get-your-zone-id}

1. في Cloudflare dashboard الخاص بك، اختر النطاق الذي تريد استخدامه
2. يكون Zone ID ظاهرًا في تبويب "نظرة عامة"، في الشريط الجانبي الأيمن ضمن "API"
3. انسخ Zone ID

### 3. أضف الثوابت إلى wp-config.php {#3-add-constants-to-wp-configphp}

أضف الثوابت التالية إلى ملف `wp-config.php` لديك:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. فعّل التكامل {#4-enable-the-integration}

1. في إدارة WordPress لديك، انتقل إلى Ultimate Multisite > Settings
2. انتقل إلى تبويب "Domain Mapping"
3. مرّر لأسفل إلى "Host Integrations"
4. فعّل تكامل Cloudflare
5. انقر على "Save Changes"

## كيف يعمل {#how-it-works}

### إدارة النطاقات الفرعية {#subdomain-management}

عند إنشاء موقع جديد في تثبيت مواقع متعددة على نطاق فرعي:

1. يرسل التكامل طلبًا إلى API الخاص بـ Cloudflare لإضافة سجل CNAME للنطاق الفرعي
2. يتم تكوين النطاق الفرعي ليعمل عبر وكيل Cloudflare افتراضيًا (يمكن تغيير ذلك باستخدام المرشحات)
3. عند حذف موقع، سيزيل التكامل النطاق الفرعي من Cloudflare

### عرض سجلات DNS {#dns-record-display}

يعزّز التكامل عرض سجلات DNS في إدارة Ultimate Multisite عبر:

1. جلب سجلات DNS مباشرةً من Cloudflare
2. عرض ما إذا كانت السجلات تعمل عبر الوكيل أم لا
3. إظهار معلومات إضافية حول سجلات DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (كانت تُسمى سابقًا "Cloudflare for SaaS") هي ميزة في Cloudflare تتيح لعملائك استخدام نطاقاتهم الخاصة مع SSL على شبكة المواقع المتعددة لديك. وهي النهج الموصى به لتثبيتات المواقع المتعددة ذات النطاقات المعيّنة التي تستخدم Cloudflare، لأن Cloudflare يدير إصدار شهادات SSL وتجديدها لكل نطاق مخصص تلقائيًا.

### كيف تختلف عن تكامل Cloudflare القياسي {#how-it-differs-from-the-standard-cloudflare-integration}

| | التكامل القياسي | Cloudflare Custom Hostnames |
|---|---|---|
| **الغرض** | ينشئ سجلات DNS تلقائيًا للنطاقات الفرعية | يتيح النطاقات المخصصة (المعيّنة) مع SSL المُدار بواسطة Cloudflare |
| **الأفضل لـ** | المواقع المتعددة على نطاقات فرعية | المواقع المتعددة ذات النطاقات المعيّنة |
| **SSL** | تتم معالجته بشكل منفصل | يُدار تلقائيًا بواسطة Cloudflare |

### إعداد Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. في Cloudflare dashboard الخاص بك، افتح المنطقة الخاصة بنطاقك الرئيسي.
2. انتقل إلى **SSL/TLS > Custom Hostnames**.
3. أضف أصلًا احتياطيًا يشير إلى عنوان IP الخاص بخادمك أو اسم المضيف.
4. لكل نطاق عميل معيّن في Ultimate Multisite، أضف إدخال Custom Hostname في Cloudflare. يمكنك أتمتة هذه الخطوة باستخدام Cloudflare API.
5. يصدر Cloudflare شهادات TLS ويجددها لكل اسم مضيف مخصص تلقائيًا بمجرد توجيه DNS الخاص بالعميل إلى شبكتك.

للمرجع الكامل للـ API، راجع [توثيق Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note تحديث المصطلحات
اعتبارًا من Ultimate Multisite v2.6.1، يُشار إلى هذه الميزة باسم **Cloudflare Custom Hostnames** في جميع إعدادات وتسميات plugin. استخدمت الإصدارات السابقة الاسم "Cloudflare for SaaS"، وهو اسم منتج Cloudflare الأساسي.
:::

## ملاحظات مهمة {#important-notes}

اعتبارًا من تحديثات Cloudflare الأخيرة، أصبح التوجيه عبر الوكيل باستخدام wildcard متاحًا الآن لجميع العملاء. وهذا يعني أن تكامل Cloudflare DNS القياسي أقل أهمية لتثبيتات المواقع المتعددة على النطاقات الفرعية مما كان عليه سابقًا، إذ يمكنك ببساطة إعداد سجل DNS بنمط wildcard في Cloudflare.

## استكشاف الأخطاء وإصلاحها {#troubleshooting}

### مشكلات الاتصال بـ API {#api-connection-issues}
- تحقّق من أن API token الخاص بك صحيح ولديه الأذونات اللازمة
- تأكّد من أن Zone ID الخاص بك صحيح
- تأكّد من أن Cloudflare account الخاص بك لديه الأذونات اللازمة

### لم تتم إضافة النطاق الفرعي {#subdomain-not-added}
- تحقّق من سجلات Ultimate Multisite بحثًا عن أي رسائل خطأ
- تحقّق من أن النطاق الفرعي غير مضاف مسبقًا إلى Cloudflare
- تأكّد من أن خطة Cloudflare الخاصة بك تدعم عدد سجلات DNS التي تنشئها

### مشكلات الوكيل {#proxying-issues}
- إذا كنت لا تريد أن تعمل النطاقات الفرعية عبر الوكيل، يمكنك استخدام المرشح `wu_cloudflare_should_proxy`
- قد لا تعمل بعض الميزات بشكل صحيح عند العمل عبر الوكيل (مثلًا، بعض وظائف إدارة WordPress)
- فكّر في استخدام Page Rules من Cloudflare لتجاوز التخزين المؤقت لصفحات الإدارة
