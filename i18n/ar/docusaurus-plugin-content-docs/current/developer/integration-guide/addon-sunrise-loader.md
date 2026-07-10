---
title: إضافة محمل ملفات شروق
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# محمل ملفات Sunrise للإضافات {#addon-sunrise-file-loader}

يضيف Ultimate Multisite 2.8.0 مُحمّل امتدادات Sunrise للإضافات (add-ons) والتكاملات المخصصة لـ MU-plugin التي تحتاج إلى العمل أثناء مرحلة الإقلاع (bootstrapping) في WordPress دون الحاجة إلى تعديل ملف `wp-content/sunrise.php` المُنشأ.

## متى تستخدمه {#when-to-use-it}

استخدم امتداد Sunrise عندما يتطلب تكاملك أن يعمل قبل تحميل الإضافات العادية، مثل توجيه النطاقات المخصصة، أو معالجة الطلبات الخاصة بالمضيف، أو تعديلات مبكرة على تهيئة الشبكة (network bootstrap).

بالنسبة للتكاملات العادية، يفضل استخدام إضافات WordPress العادية، أو إضافات MU-plugins، أو الخطافات (hooks) الموثقة في Ultimate Multisite. يعمل كود Sunrise في وقت مبكر جداً، ويجب أن يبقى صغيراً، دفاعياً، ومستقلاً عن التبعيات (dependency-free).

## اصطلاح تسمية الملفات {#file-naming-convention}

أنشئ ملف PHP باسم `sunrise.php` داخل دليل إضافة (addon directory) يبدأ اسمه بـ `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

يقوم المُحمّل بمسح دليل الإضافات (plugins directory) بحثاً عن هذا النمط:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

يتم تحميل الملفات المطابقة بترتيب أبجدي حسب مسار الإضافة.

## مكان وضع الملف {#where-to-place-the-file}

ضع الملف في الدليل الجذر (root directory) للإضافة التي تمتلك سلوك Sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

يتم حل المسح بالنسبة إلى `WP_CONTENT_DIR`، وليس القيمة الحالية لـ `WP_PLUGIN_DIR`. هذا يحافظ على استقرار الاكتشاف عندما يقوم تعدد المستأجرين (multi-tenancy) أو أي كود تهيئة مبكر آخر بتغيير ثوابت دليل الإضافات أثناء مرحلة Sunrise.

لا تقم بتعديل ملف `wp-content/sunrise.php` المُنشأ مباشرة. يسمح لك المُحمّل بتوسيع سلوك Sunrise المخصص دون الحاجة إلى تفريغ (forking) ملف Sunrise الأساسي الذي يقوم Ultimate Multisite بتثبيته وتحديثه.

## الخطافات والفلاتر المتاحة {#hooks-and-filters-available}

تعمل ملفات Sunrise للإضافات بعد تحميل تعيين النطاقات (domain mapping) الخاص بـ Ultimate Multisite وقبل أن يقوم WordPress بتشغيل `ms_loaded`. في هذه المرحلة، يمكن لملف Sunrise:

- قراءة أو تجاوز المتغيرات `$current_site` و `$current_blog`؛
- الوصول إلى `$wpdb` بعد تحميل تهيئة قاعدة البيانات؛
- تعريف ثوابت وقت Sunrise مثل `BLOG_ID_CURRENT_SITE` عند الحاجة؛
- قراءة حالة مُساعد Sunrise الخاصة بـ Ultimate Multisite، بما في ذلك حالة التوجيه المستخدمة في تكاملات تعدد المستأجرين.

يقوم Ultimate Multisite بتشغيل `wu_sunrise_loaded` بعد الانتهاء من مُحمّل Sunrise الخاص به. استخدم هذا الإجراء (action) للكود الذي يجب أن يعمل بعد اكتمال تهيئة Sunrise ولكنه لا يزال يتبع دورة حياة Sunrise.

استدعِ فقط الدوال التي تم تحميلها بالفعل في مرحلة Sunrise. تجنب العمل الثقيل على قاعدة البيانات، أو عرض القوالب (template rendering)، أو طلبات HTTP، أو أي كود يفترض أن ترتيب تحميل الإضافات العادي قد اكتمل.

## مثال بسيط {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

بعد نشر الملف، قم بتحميل نطاق مُعيّن (mapped domain) وعنوان موقع رئيسي غير مُعيّن (unmapped main-site URL) للتأكد من أن كلا المسارين لا يزالان يمران بعملية الإقلاع بشكل صحيح.
