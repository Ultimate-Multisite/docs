---
title: قدرات مُنشئ القوالب
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# إمكانيات مُنشئ القوالب: إنشاء وتفعيل قوالب الكتل (Block Themes) {#theme-builder-abilities-scaffold-and-activate-block-themes}

تقدم Superdav AI Agent v1.12.0 إمكانيتين قويتين تسمحان لك بإنشاء ونشر قوالب كتل (block themes) مخصصة مباشرة من واجهة الدردشة.

## نظرة عامة {#overview}

تُمكّن إمكانيتا **scaffold-block-theme** و **activate-theme** الوكلاء (agents) من:
- إنشاء قوالب كتل كاملة وجاهزة للإنتاج بناءً على مواصفاتك.
- تفعيل القوالب تلقائيًا على موقعك دون تدخل يدوي.
- بناء هويات بصرية متماسكة من خلال قرارات تصميم موجهة.

## إنشاء الهيكل الأساسي لقالب الكتل (Scaffold Block Theme) {#scaffold-block-theme}

تُنشئ إمكانية **scaffold-block-theme** قالب كتل WordPress جديد بهيكل كامل للقالب، بما في ذلك:

- إعدادات `theme.json` مع رموز التصميم (design tokens).
- ملفات قوالب الكتل (Block template files) للتخطيطات الشائعة.
- أنماط وتنوعات الكتل المخصصة.
- بيانات وصف القالب ودعماته (Theme metadata and support declarations).

### كيفية الاستدعاء {#how-to-invoke}

في محادثتك مع Superdav AI Agent، يمكنك طلب إنشاء القالب:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

سيقوم الوكيل بما يلي:
1. جمع تفضيلات التصميم الخاصة بك من خلال المحادثة.
2. إنشاء هيكل القالب الكامل.
3. إنشاء جميع ملفات القالب الضرورية.
4. تجهيز القالب للتفعيل.

### المخرجات المتوقعة {#expected-output}

عند تنفيذ الإمكانية بنجاح، سترى:

- تأكيد بأن الهيكل الأساسي للقالب قد تم إنشاؤه.
- اسم وموقع القالب.
- ملخص برموز التصميم المطبقة (الألوان، الطباعة، التباعد).
- حالة جاهزية التفعيل.

مثال على المخرجات:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## تفعيل القالب (Activate Theme) {#activate-theme}

تُغيّر إمكانية **activate-theme** موقعك إلى قالب كتل تم إنشاؤه حديثًا أو قالب موجود بالفعل.

### كيفية الاستدعاء {#how-to-invoke-1}

بعد إنشاء الهيكل الأساسي للقالب، يمكنك تفعيله على الفور:

```
"Activate the Modern Agency theme"
```

أو تفعيل أي قالب موجود:

```
"Switch to the Twentytwentyfour theme"
```

### المخرجات المتوقعة {#expected-output-1}

عند نجاح التفعيل:

- تأكيد القالب النشط.
- اسم القالب السابق (للمرجع).
- عنوان URL للموقع حيث أصبح القالب حيًا الآن.
- أي ملاحظات إعداد خاصة بالقالب.

مثال على المخرجات:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## سير العمل: الإنشاء والتفعيل {#workflow-scaffold-and-activate}

يجمع سير العمل النموذجي بين الإمكانيتين:

1. **طلب إنشاء القالب**: "Create a block theme for my SaaS landing page" (أنشئ قالب كتل لصفحة هبوط تطبيق SaaS الخاص بي).
2. **يقوم الوكيل بإنشاء الهيكل الأساسي للقالب**: ينشئ الملفات ورموز التصميم.
3. **المراجعة والتنقيح**: مناقشة تغييرات التصميم إذا لزم الأمر.
4. **التفعيل**: "Activate the theme now" (فعّل القالب الآن).
5. **التحقق**: زيارة موقعك للتأكد من أن التصميم الجديد حي.

## رموز التصميم والتخصيص (Design Tokens and Customization) {#design-tokens-and-customization}

تستخدم القوالب التي يتم إنشاؤها رموز تصميم WordPress (عبر `theme.json`) لتحديد:

- **الألوان**: الأساسي (Primary)، الثانوي (Secondary)، اللمسة (Accent)، لوحة الألوان المحايدة (Neutral palette).
- **الطباعة**: عائلات الخطوط، الأحجام، الأوزان، ارتفاعات الأسطر.
- **التباعد**: حشوات (Padding)، هوامش (Margin)، مقاييس الفجوات (Gap scales).
- **الحدود**: رموز نصف القطر والعرض.
- **الظلال**: مستويات الارتفاع (Elevation levels).

تتم مركزة هذه الرموز في ملف `theme.json`، مما يسهل تعديل نظام التصميم بالكامل من ملف واحد.

## القيود والملاحظات {#limitations-and-notes}

- يتم إنشاء القوالب في المسار `/wp-content/themes/` ويجب أن تتبع اصطلاحات تسمية WordPress.
- يتطلب التفعيل أذونات مناسبة على موقع WordPress الخاص بك.
- الكود المخصص بلغة PHP في القوالب يكون بسيطًا؛ استخدم الإضافات (plugins) للوظائف المعقدة.
- تعمل قوالب الكتل بشكل أفضل مع WordPress 5.9 والإصدارات الأحدث.

## استكشاف الأخطاء وإصلاحها (Troubleshooting) {#troubleshooting}

**القالب لا يظهر بعد الإنشاء الأساسي**
- تحقق من وجود دليل القالب وأنه يمتلك الأذونات الصحيحة.
- تأكد من أن `theme.json` هو JSON صالح.
- تأكد من أن اسم القالب لا يتعارض مع القوالب الموجودة.

**فشل التفعيل**
- تأكد من أن لديك أذونات المسؤول (administrator permissions).
- تحقق من أن دليل القالب قابل للقراءة بواسطة WordPress.
- راجع سجل أخطاء WordPress للحصول على التفاصيل.

**رموز التصميم لا يتم تطبيقها**
- تحقق من أن بناء جملة `theme.json` صحيح.
- امسح أي إضافات للتخزين المؤقت (caching plugins).
- تأكد من أن إصدار WordPress الخاص بك يدعم الرموز التي تستخدمها.

## الخطوات التالية {#next-steps}

بعد تفعيل القالب، يمكنك:
- استخدام مهارة **Design System Aesthetics** لتنقيح الطباعة والألوان والتباعد.
- تخصيص أنماط الكتل الفردية من خلال محرر كتل WordPress.
- إضافة CSS مخصص في ملف `style.css` الخاص بالقالب.
- إنشاء قوالب كتل مخصصة لأنواع الصفحات المحددة.
