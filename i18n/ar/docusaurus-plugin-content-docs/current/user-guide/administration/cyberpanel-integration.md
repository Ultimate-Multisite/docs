---
title: تكامل CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# تكامل CyberPanel

يشرح هذا الدليل كيفية إعداد تكامل Ultimate Multisite مع CyberPanel بحيث يتم إضافة (وإزالة) النطاقات المحددة في شبكتك تلقائيًا كمضيفات افتراضية (virtual hosts) في CyberPanel، مع إمكانية التوفير التلقائي لشهادات SSL عبر Let's Encrypt.

## ماذا يفعل {#what-it-does}

- عندما يتم تعيين نطاق في Ultimate Multisite، يقوم التكامل باستدعاء واجهة برمجة تطبيقات (API) الخاصة بـ CyberPanel لإنشاء مضيف افتراضي لهذا النطاق.
- عند إزالة تعيين النطاق، يستدعي التكامل واجهة برمجة التطبيقات لحذف المضيف الافتراضي المقابل.
- عند تفعيل التوفير التلقائي لشهادات SSL (auto-SSL)، يقوم التكامل بتشغيل إصدار شهادة Let's Encrypt فور إنشاء المضيف الافتراضي.
- يضيف/يزيل اختياريًا اسم النطاق البديل `www.` اعتمادًا على إعداد "Auto-create www subdomain" في إعدادات تعيين النطاق (Domain Mapping).

## المتطلبات الأساسية {#prerequisites}

- وجود مثيل (instance) عامل لـ CyberPanel (يُوصى بالإصدار v2.3 أو أحدث) يمكن الوصول إليه من خادم WordPress الخاص بك.
- وجود موقع ويب حالي في CyberPanel يخدم بالفعل جذر شبكة WordPress الخاصة بك. يقوم التكامل بإرفاق المضيفات الافتراضية الجديدة بهذا الخادم.
- تفعيل الوصول إلى واجهة برمجة تطبيقات CyberPanel (CyberPanel API). يستخدم المصادقة اسم المستخدم وكلمة المرور الخاصة بمسؤول CyberPanel الخاص بك.
- يجب أن تكون سجلات DNS الخاصة بالنطاقات المحددة تشير بالفعل إلى عنوان IP الخاص بخادمك قبل أن يتمكن التوفير التلقائي لشهادات SSL من إصدار شهادة صالحة.

## المتطلبات {#requirements}

يجب تعريف الثوابت التالية في ملف `wp-config.php` الخاص بك:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

اختياريًا، يمكنك أيضًا تعريف ما يلي:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // الافتراضي: true — إصدار شهادة SSL من Let's Encrypt بعد إنشاء النطاق
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // الافتراضي: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // يستخدم لجهة الاتصال بشهادة SSL
```

## تعليمات الإعداد {#setup-instructions}

### 1. تفعيل واجهة برمجة تطبيقات CyberPanel {#1-enable-the-cyberpanel-api}

1. سجل الدخول إلى لوحة تحكم CyberPanel الخاصة بك كمسؤول.
2. اذهب إلى **Security** > **SSL** وتأكد من أن SSL نشط على واجهة CyberPanel نفسها (وهذا مطلوب لاستدعاءات API الآمنة).
3. واجهة برمجة تطبيقات CyberPanel متاحة افتراضيًا على `https://your-server-ip:8090/api/`. لا توجد خطوات إضافية مطلوبة لتفعيلها — فهي مفعلة افتراضيًا لمستخدمي المسؤول.

### 2. إضافة الثوابت إلى wp-config.php {#2-add-constants-to-wp-configphp}

أضف الثوابت التالية إلى ملف `wp-config.php` الخاص بك قبل السطر `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

لتفعيل التوفير التلقائي لشهادات SSL (مُوصى به):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. تفعيل التكامل {#3-enable-the-integration}

1. في لوحة تحكم مسؤول شبكة WordPress، اذهب إلى **Ultimate Multisite** > **Settings**.
2. انتقل إلى علامة التبويب **Domain Mapping**.
3. مرر للأسفل حتى تصل إلى **Host Integrations**.
4. قم بتفعيل تكامل **CyberPanel**.
5. انقر على **Save Changes**.

### 4. التحقق من الاتصال {#4-verify-connectivity}

استخدم اختبار الاتصال المدمج في معالج الإعدادات:

1. اذهب إلى **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. انقر على **Test Connection**.
3. تؤكد رسالة النجاح أن المكوّن (plugin) يمكنه الوصول إلى واجهة برمجة تطبيقات CyberPanel والمصادقة بشكل صحيح.

## كيف يعمل {#how-it-works}

### تعيين النطاق (Domain Mapping) {#domain-mapping}

عند تعيين نطاق في Ultimate Multisite:

1. يرسل التكامل طلب `POST` إلى `/api/createWebsite` على مضيف CyberPanel الخاص بك.
2. يقوم CyberPanel بإنشاء مضيف افتراضي جديد للنطاق ضمن الحزمة المحددة.
3. يتم تعيين جذر المستند (document root) للإشارة إلى دليل جذر شبكة WordPress الخاص بك.
4. عند إزالة تعيين النطاق، يستدعي التكامل `/api/deleteWebsite` لتنظيف المضيف الافتراضي.

### التوفير التلقائي لشهادات SSL (Auto-SSL) {#auto-ssl}

عندما تكون قيمة `WU_CYBERPANEL_AUTO_SSL` هي `true`:

1. بعد إنشاء المضيف الافتراضي، يستدعي التكامل `/api/issueSSL` الخاص بالنطاق.
2. يطلب CyberPanel شهادة Let's Encrypt باستخدام تحدي ACME HTTP-01.
3. يتم تجديد الشهادة تلقائيًا بواسطة CyberPanel قبل انتهاء صلاحيتها.

> **مهم:** يجب أن يكون انتشار سجل DNS كاملاً إلى عنوان IP الخاص بخادمك قبل أن يتمكن Let's Encrypt من التحقق من النطاق. إذا فشل إصدار SSL مباشرة بعد التعيين، انتظر حتى يكتمل انتشار DNS وأعد تشغيل SSL من لوحة تحكم CyberPanel تحت **SSL** > **Manage SSL**.

### النطاق البديل www (www Subdomain) {#www-subdomain}

إذا كان خيار **Auto-create www subdomain** مُفعّلاً في إعدادات تعيين النطاق، يقوم التكامل أيضًا بإنشاء اسم مضيف افتراضي بديل لـ `www.<domain>`، وعند تفعيل التوفير التلقائي لشهادات SSL، فإنه يصدر شهادة تغطي كلًا من النطاق الرئيسي (apex) والنطاق البديل www.

### إعادة توجيه البريد الإلكتروني (Email Forwarders) {#email-forwarders}

عندما يكون المكوّن [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) نشطًا، يمكن لـ CyberPanel أيضًا توفير إعادة توجيه بريد إلكتروني للعملاء. تقوم أجهزة إعادة التوجيه بتوجيه الرسائل الواردة من عنوان نطاق إلى صندوق بريد آخر دون إنشاء صندوق بريد كامل، وهو أمر مفيد لأسماء مستعارة مثل `info@customer-domain.test` أو `support@customer-domain.test`.

قبل تفعيل أجهزة إعادة التوجيه للعملاء:

1. تأكد من تكوين ثوابت CyberPanel المذكورة أعلاه وأن اختبار الاتصال ينجح.
2. قم بتفعيل مزود البريد الإلكتروني الخاص بـ CyberPanel في إعدادات المكوّن Emails.
3. تأكد من أن النطاق الخاص بالعميل موجود بالفعل في CyberPanel قبل إنشاء جهاز إعادة التوجيه.
4. أنشئ جهاز إعادة توجيه تجريبي وأرسل رسالة عبره قبل تقديم الميزة في خطط الإنتاج.

إذا فشل إنشاء جهاز إعادة التوجيه، تحقق أولاً من سجلات نشاط Ultimate Multisite، ثم تأكد في CyberPanel من وجود النطاق المصدر وأن مستخدم API لديه أذونات إدارة البريد الإلكتروني.

## مرجع التكوين {#configuration-reference}

| الثابت (Constant) | مطلوب | الافتراضي | الوصف |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | نعم | — | عنوان URL الكامل لمثيل CyberPanel الخاص بك بما في ذلك المنفذ، مثال: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | نعم | — | اسم مستخدم مسؤول CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | نعم | — | كلمة مرور مسؤول CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | نعم | `Default` | حزمة الاستضافة في CyberPanel التي سيتم تعيينها للمضيفات الافتراضية الجديدة |
| `WU_CYBERPANEL_AUTO_SSL` | لا | `true` | إصدار شهادة SSL من Let's Encrypt بعد إنشاء النطاق |
| `WU_CYBERPANEL_PHP_VERSION` | لا | `PHP 8.2` | إصدار PHP للمضيفات الافتراضية الجديدة (يجب أن يتطابق مع الإصدار المثبت في CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | لا | — | البريد الإلكتروني الخاص بالاتصال لتسجيل شهادة SSL |

## ملاحظات هامة {#important-notes}

- تستخدم واجهة برمجة تطبيقات CyberPanel المصادقة القائمة على الرموز (token authentication). يتولى التكامل الحصول على الرمز تلقائيًا في كل استدعاء لواجهة برمجة التطبيقات.
- يجب أن يمتلك حساب مسؤول CyberPanel الخاص بك أذونات إنشاء وحذف المواقع الإلكترونية.
- يعمل CyberPanel افتراضيًا على المنفذ `8090`. إذا كان خادمك يستخدم جدار حماية (firewall)، فتأكد من أن هذا المنفذ متاح من خادم تطبيق WordPress.
- لا يدير التكامل سجلات DNS. يجب عليك توجيه سجلات DNS الخاصة بالنطاق إلى عنوان IP الخاص بخادمك قبل تعيين النطاق في Ultimate Multisite.
- إذا كنت تستخدم OpenLiteSpeed (OLS)، فسيتم تشغيل إعادة تشغيل سلسة (graceful restart) تلقائيًا بعد تغييرات المضيف الافتراضي. لا يلزم أي تدخل يدوي.

## استكشاف الأخطاء وإصلاحها {#troubleshooting}

### رفض اتصال واجهة برمجة التطبيقات (API Connection Refused) {#api-connection-refused}

- تحقق من أن المنفذ `8090` مفتوح في جدار حماية الخادم الخاص بك.
- تأكد من أن قيمة `WU_CYBERPANEL_HOST` تتضمن البروتوكول الصحيح (`https://`) والمنفذ.
- تحقق من أن شهادة SSL الخاصة بـ CyberPanel صالحة؛ فقد تتسبب الشهادات الموقعة ذاتيًا (self-signed certificates) في فشل التحقق من TLS. قم بتعيين `WU_CYBERPANEL_VERIFY_SSL` إلى `false` فقط في بيئات الشبكة الخاصة الموثوقة.

### أخطاء المصادقة (Authentication Errors) {#authentication-errors}

- تأكد من أن `WU_CYBERPANEL_USERNAME` و `WU_CYBERPANEL_PASSWORD` صحيحان عن طريق تسجيل الدخول إلى CyberPanel مباشرة.
- يقوم CyberPanel بقفل الحسابات بعد محاولات تسجيل الدخول الفاشلة المتكررة. تحقق من **Security** > **Brute Force Monitor** في CyberPanel إذا حدثت حالات قفل.

### لم يتم إنشاء النطاق (Domain Not Created) {#domain-not-created}

- تحقق من سجل نشاط Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) بحثًا عن رسائل خطأ واجهة برمجة التطبيقات.
- تأكد من أن الحزمة المحددة في `WU_CYBERPANEL_PACKAGE` موجودة في CyberPanel (**Packages** > **List Packages**).
- تأكد من أن النطاق غير مسجل بالفعل كموقع ويب في CyberPanel — يؤدي إنشاء موقع ويب مكرر إلى خطأ.

### لم يتم إصدار شهادة SSL (SSL Certificate Not Issued) {#ssl-certificate-not-issued}

- تأكد من أن سجل DNS قد انتشر بالكامل: يجب أن يُرجع الأمر `dig +short your-domain.com` عنوان IP الخاص بخادمك.
- يفرض Let's Encrypt حدودًا للمعدل (rate limits). إذا كنت قد أصدرت عدة شهادات مؤخرًا لنفس النطاق، انتظر قبل المحاولة مرة أخرى.
- تحقق من سجلات SSL في CyberPanel تحت **Logs** > **Error Logs** للحصول على تفاصيل حول فشل إصدار الشهادة.
- كحل بديل، يمكنك إصدار SSL يدويًا من CyberPanel: **SSL** > **Manage SSL** > تحديد النطاق > **Issue SSL**.

## المراجع {#references}

- وثائق واجهة برمجة تطبيقات CyberPanel: https://docs.cyberpanel.net/docs/category/api
- إدارة SSL في CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- حدود معدل Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
