---
title: تعيين ثابت شروق الشمس على Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# تعيين ثابت Sunrise إلى true على Closte

بعض مزودي الاستضافة يقومون بقفل wp-config.php لأسباب أمنية. هذا يعني أن Ultimate Multisite لا يمكنه تعديل الملف تلقائيًا لإضافة الثوابت اللازمة لتفعيل خريطة النطاق وغيرها من الميزات. Closte هو أحد هذه المزودين.

## على لوحة تحكم Closte

أولاً، [تسجيل الدخول إلى حسابك في Closte](https://app.closte.com/)، انقر على عنصر قائمة المواقع، ثم انقر على رابط لوحة التحكم في الموقع الذي تعمل عليه حاليًا:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

ستظهر لك عددًا من عناصر القائمة الجديدة على الجانب الأيسر من الشاشة. انتقل إلى صفحة **الإعدادات** باستخدام تلك القائمة:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

ثم، في صفحة **الإعدادات**، ابحث عن علامة التبويب WP-Config، ثم حقل "محتوى wp-config.php الإضافي" في تلك التبويب:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

في سياق تثبيت Ultimate Multisite، ستحتاج إلى إضافة ثابت Sunrise إلى ذلك الحقل. ببساطة أضف سطرًا جديدًا والصق السطر أدناه. بعد ذلك، انقر على زر **حفظ الكل**.

define('SUNRISE', true);

هذا كل شيء، أنت جاهز. عد إلى معالج تثبيت Ultimate Multisite وأعد تحميل الصفحة لمتابعة العملية.
