---
title: كيفية تثبيت WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# كيف أقوم بتثبيت ووردبريس متعدد المواقع؟

يتيح لك ووردبريس متعدد المواقع إنشاء شبكة من المواقع على تثبيت واحد. هذه ميزة مدمجة، لكنها غير نشطة بشكل افتراضي.

:::tip
يحتوي Ultimate Multisite على **[معالج إعداد متعدد المواقع المدمج](./multisite-setup-wizard)** الذي يطوّر هذه العملية بأكملها. إذا كان Ultimate Multisite مثبتًا، نوصي باستخدام المعالج بدلاً من اتباع الخطوات اليدوية أدناه.
:::

نظرًا لأن Ultimate Multisite هو إضافة خاصة بالشبكة فقط، في هذا الدرس ستتعلم كيفية تثبيت وإعداد ووردبريس متعدد المواقع يدويًا. يستند هذا النص إلى [كيفية تثبيت وإعداد شبكة ووردبريس متعددة المواقع](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/)، من WPBeginner.

**أمور يجب الانتباه إليها قبل إنشاء شبكة متعددة المواقع الخاصة بك:**

- احصل على استضافة ووردبريس جيدة! المواقع على شبكة تشترك في نفس موارد الخادم.
- في حال كان لديك عدد قليل من المواقع مع حركة مرور منخفضة، قد تعمل الاستضافة المشتركة على ما يرام لك.
- غالبًا ما توفر **مزودو استضافة ووردبريس المدارة** Multisite من الصندوق (يُثبتون ووردبريس مع Multisite مفعّل ومُكوّن مسبقًا لك). هذا هو الحال مع WP Engine، Closte، Cloudways، إلخ. إذا لم تكن متأكدًا من ذلك مع مزود الاستضافة الخاص بك، اتصل بدعمهم قبل المتابعة مع هذا الدرس.
- من الجيد أيضًا أن تكون على دراية بتثبيت ووردبريس وتحرير الملفات باستخدام FTP.

_**مهم**_ **:** إذا كنت تقوم بإعداد شبكة متعددة المواقع على موقع ووردبريس موجود، لا تنسَ:

- إنشاء نسخة احتياطية كاملة لموقع ووردبريس الخاص بك
- إلغاء تفعيل جميع الإضافات على موقعك بالذهاب إلى صفحة الإضافات واختيار _Deactivate_ من الإجراءات المجمعة ثم النقر على _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

لتمكين Multisite، أولاً اتصل بموقعك باستخدام عميل FTP أو مدير ملفات cPanel، وافتح ملف wp-config.php لتحريره.

قبل سطر _*That’s all, stop editing! Happy blogging.*_, أضف الشيفرة التالية:

define('WP_ALLOW_MULTISITE', true);

احفظ ورفع ملف wp-config.php مرة أخرى إلى الخادم.

مع تمكين ميزة Multisite على موقعك، حان الوقت الآن لإعداد شبكتك.

اذهب إلى **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

الآن تحتاج إلى إخبار ووردبريس بنوع هيكل النطاق الذي ستستخدمه للمواقع في شبكتك: النطاقات الفرعية أم الدلائل الفرعية.

إذا اخترت النطاقات الفرعية، يجب عليك تغيير إعدادات DNS الخاصة برسم النطاقات والتأكد من إعداد _**wildcard subdomains**_ لشبكتك متعددة المواقع.

عد إلى إعداد الشبكة، أعطِ عنوانًا لشبكتك وتأكد من أن عنوان البريد الإلكتروني في بريد المسؤول الشبكي صحيح. انقر على _Install_ للمتابعة.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

أضف هذا الكود، المقدم من ووردبريس، إلى ملف _**wp-config.php**_ :

```php
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'multisite.local');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

وهذا الكود، المقدم أيضًا من ووردبريس، إلى ملف _**.htaccess**_ :

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes)._) $1 [L]
RewriteRule ^(._.php)$ $1 [L]
RewriteRule . index.php [L]
```

استخدم عميل FTP أو مدير ملفات (إذا كنت تستخدم شيئًا مثل cPanel، على سبيل المثال) لنسخ ولصق الكود في هذين الملفين.

أخيرًا، قم بتسجيل الدخول مرة أخرى إلى موقع ووردبريس للوصول إلى شبكة متعددة المواقع الخاصة بك.

من المهم اختبار والتأكد من أنك قادر على إنشاء موقع فرعي على تثبيت ووردبريس متعدد المواقع قبل تثبيت Ultimate Multisite.

لإنشاء موقع فرعي:

1. افتح لوحة تحكم موقعك wp-admin
2. انتقل إلى My Sites > Sites (/wp-admin/network/sites.php)
3. انقر على Add New في الأعلى
4. املأ جميع الحقول:
   * عنوان الموقع — لا تستخدم أبدًا “www”
   * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
   * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
   * عنوان الموقع — عنوان الموقع، يمكن تغييره لاحقًا
   * البريد الإلكتروني للمسؤول — تعيينه كمستخدم مسؤول أول للموقع الفرعي

![نموذج إضافة موقع جديد في ووردبريس متعدد المواقع](/img/admin/sites-list.png)

بعد ملء الحقول، انقر على زر "Add site". بمجرد إنشاء الموقع الفرعي الجديد، انتقل إليه للتأكد من أن الموقع الفرعي يعمل بشكل صحيح.

## المشكلات الشائعة:

### 1\. يمكنني إنشاء مواقع جديدة لكن لا يمكن الوصول إليها.

إذا اخترت النطاقات الفرعية، تحتاج أيضًا إلى إعداد wildcard subdomains لشبكتك متعددة المواقع.

للقيام بذلك، اذهب إلى لوحة تحكم حساب استضافة موقعك (مثلاً cPanel/Plesk/Direct Admin حسب مزود الاستضافة الخاص بك).

ابحث عن خيار لـ “Domains” أو “Subdomains”. في بعض لوحات التحكم يُسمَّى ذلك بـ “Domain administration”.

في حقل النطاق الفرعي، أدخل نجمة (*). ثم يجب أن يطلب منك اختيار اسم نطاق تريد إضافة النطاق الفرعي تحته.

سيتم اكتشاف جذر المستند للاسم النطاق المختار تلقائيًا. انقر على زر _Create_ أو _Save_ لإضافة النطاق الفرعي المتعدد. يجب أن تبدو الإدخال كـ “*.[mydomain.com](http://mydomain.com)”
