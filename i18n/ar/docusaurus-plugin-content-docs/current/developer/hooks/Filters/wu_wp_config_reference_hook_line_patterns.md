---
id: wu_wp_config_reference_hook_line_patterns
title: تصفية - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# عامل التصفية: wu_wp_config_reference_hook_line_patterns

نحن نتحقق من ثلاث أنماط عند محاولة معرفة أين يمكننا حقن ثوابتنا:

1. نبحث عن تعريف متغير $table_prefix؛
2. نبحث عن تعريفات أكثر تعقيدًا لـ $table_prefix - تلك التي تستخدم متغيرات البيئة، على سبيل المثال؛
3. إذا لم تكن متاحة، نبحث عن تعليق 'Happy Publishing'؛
4. إذا لم تكن كذلك أيضًا، نبحث عن بداية الملف.

المفتاح يمثل النمط والقيمة تمثل عدد الأسطر التي يجب إضافتها.  
يمكن تمرير عدد سطور سالب لكتابة قبل السطر الموجود، بدلاً من الكتابة بعده.

### المصدر

تم تعريفه في [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) في السطر 143
