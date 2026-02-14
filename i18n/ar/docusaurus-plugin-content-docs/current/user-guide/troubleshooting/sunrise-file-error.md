---
title: خطأ في ملف Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# خطأ عند تثبيت ملف Sunrise

ملف sunrise.php هو ملف خاص يبحث عنه WordPress أثناء عملية التمهيد. لكي يتمكن WordPress من اكتشاف ملف sunrise.php، يجب أن يكون موجودًا داخل مجلد **wp-content**.

عند تفعيل Ultimate Multisite والمرور عبر معالج الإعداد مثل الذي يظهر في لقطة الشاشة، يحاول Ultimate Multisite نسخ ملف sunrise.php الخاص بنا إلى مجلد wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

في أغلب الأحيان، نجحنا في نسخ الملف بنجاح وتعمل كل شيء. ومع ذلك، إذا لم يتم إعداد شيء بشكل صحيح (مثل أذونات المجلد)، قد تواجه سيناريو لا يستطيع فيه Ultimate Multisite نسخ الملف.

إذا قرأت رسالة الخطأ التي يعرضها Ultimo، سترى أن هذا هو بالضبط ما حدث هنا: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

لإصلاح ذلك، يمكنك ببساطة نسخ ملف sunrise.php داخل مجلد إضافة wp-ultimo ولصقه في مجلد wp-content الخاص بك. بعد ذلك، أعد تحميل صفحة المعالج ويجب أن تمر جميع الفحوصات.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder -->

في أي حال، قد يستدعي ذلك فحصًا عامًا لأذونات المجلدات لتجنب حدوث مشاكل في المستقبل (ليس فقط مع Ultimate Multisite ولكن مع الإضافات والقوالب الأخرى أيضًا).

أداة **Health Check** التي هي جزء من WordPress (يمكنك الوصول إليها عبر لوحة تحكم موقعك الرئيسي **admin panel > Tools > Health Check**) قادرة على إخبارك إذا كانت أذونات المجلدات لديك مُضبوطة بقيم قد تسبب مشاكل مع WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
