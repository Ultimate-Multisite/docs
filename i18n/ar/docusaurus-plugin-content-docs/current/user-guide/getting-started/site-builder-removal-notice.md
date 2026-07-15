---
title: إشعار إزالة وضع بناء الموقع
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# إشعار إزالة وضع بناء الموقع (Site Builder Mode)

**تمت إزالة وضع بناء الموقع (Site Builder mode) في الإصدار Superdav AI Agent v1.12.0.** إذا كنت تستخدم وضع بناء الموقع، فيجب عليك الانتقال إلى **وكيل المساعد في الإعداد (Setup Assistant agent)** لإنشاء القوالب وإعداد الموقع.

## ماذا حدث؟ {#what-happened}

### وضع بناء الموقع (Site Builder Mode) (القديم) {#site-builder-mode-legacy}

كان وضع بناء الموقع واجهة تعتمد على المعالجات السحرية (wizard-based interface) للقيام بما يلي:

- إنشاء المواقع من القوالب
- تهيئة الإعدادات الأساسية
- اختيار القالب (Theme)
- إعداد المحتوى الأولي

### ما الذي حل محله؟ {#what-replaced-it}

يتولى الآن **وكيل المساعد في الإعداد (Setup Assistant agent)** جميع وظائف بناء الموقع، وذلك من خلال:

- إعداد موجه ومُرشد أكثر مرونة بواسطة الوكيل (agent-guided setup)
- خيارات تخصيص القالب (Theme) أفضل
- التكامل مع عملية إعداد مُنشئ القوالب (Theme Builder onboarding)
- ذاكرة موقع مستمرة (persistent site_brief memory) للجلسات المستقبلية

## إذا كنت تستخدم وضع بناء الموقع {#if-you-were-using-site-builder-mode}

### مواقعك آمنة {#your-sites-are-safe}

- تستمر المواقع الموجودة التي تم إنشاؤها باستخدام وضع بناء الموقع في العمل
- لا يوجد فقدان للبيانات أو تعطل للموقع
- يمكنك الاستمرار في إدارة مواقعك بشكل طبيعي

### الانتقال إلى وكيل المساعد في الإعداد (Setup Assistant Agent) {#migrate-to-setup-assistant-agent}

لإعداد موقع جديد أو إجراء تغييرات على القالب، استخدم وكيل المساعد في الإعداد:

```
"Help me set up a new site"
```

أو

```
"Start the Theme Builder onboarding"
```

يوفر وكيل المساعد في الإعداد نفس الوظائف ولكن بمرونة أكبر.

## مقارنة: بناء الموقع مقابل المساعد في الإعداد {#comparison-site-builder-vs-setup-assistant}

| الميزة | بناء الموقع (Site Builder) (تمت إزالته) | المساعد في الإعداد (Setup Assistant) (الجديد) |
|---------|-----------------------------------|------------------------------------------|
| طريقة الإعداد | نموذج المعالج (Wizard form) | محادثة الوكيل (Agent conversation) |
| اختيار القالب | قوالب محددة مسبقًا | توليد مخصص (Custom generation) |
| التخصيص | خيارات محدودة | نظام تصميم كامل (Full design system) |
| موجز الموقع (Site brief) | لا يتم تخزينه | ذاكرة مستمرة (Persistent memory) |
| الجلسات المستقبلية | تكرار الإعداد | استخدام موجز الموقع المخزن (site_brief) |
| المرونة | سير عمل ثابت (Fixed workflow) | محادثة متكيفة (Adaptive conversation) |

## الانتقال إلى وكيل المساعد في الإعداد (Setup Assistant Agent) {#migrating-to-setup-assistant-agent}

### للمواقع الجديدة {#for-new-sites}

بدلاً من استخدام وضع بناء الموقع:

1. اطلب: "Help me set up a new site"
2. سيرشدك وكيل المساعد في الإعداد عبر:
   - الغرض والأهداف من الموقع
   - الجمهور المستهدف
   - هوية العلامة التجارية
   - توليد القالب (Theme generation)
   - الإعداد الأولي

### للمواقع الموجودة {#for-existing-sites}

إذا كان لديك موقع موجود تم إنشاؤه باستخدام وضع بناء الموقع:

1. يمكنك الاستمرار في استخدامه كما هو
2. لتحديث القالب، اطلب: "Redesign my site"
3. سيساعدك وكيل المساعد في الإعداد على إنشاء قالب جديد
4. تظل بيانات موقعك دون تغيير

### لتغيير القالب {#for-theme-changes}

بدلاً من اختيار القالب في وضع بناء الموقع:

1. اطلب: "Change my theme"
2. سيقوم وكيل المساعد في الإعداد بما يلي:
   - السؤال عن تفضيلات التصميم الخاصة بك
   - توليد قالب مخصص
   - تفعيله على موقعك

## الاختلافات الرئيسية {#key-differences}

### وضع بناء الموقع (Site Builder Mode) {#site-builder-mode}

```
1. Choose a template
2. Select a theme
3. Configure basic settings
4. Done
```

### وكيل المساعد في الإعداد (Setup Assistant Agent) {#setup-assistant-agent}

```
1. Describe your site's purpose
2. Define your target audience
3. Choose design preferences
4. Agent generates custom theme
5. Agent activates theme
6. Site brief stored for future sessions
```

## مزايا وكيل المساعد في الإعداد (Setup Assistant Agent) {#benefits-of-setup-assistant-agent}

### أكثر مرونة {#more-flexible}

- صف موقعك بلغة طبيعية
- احصل على توصيات مخصصة
- يتكيف مع احتياجاتك المحددة

### تخصيص أفضل {#better-customization}

- توليد القوالب المخصصة
- قرارات نظام التصميم (Design system decisions)
- رموز التصميم المستمرة (Persistent design tokens)

### ذاكرة مستمرة {#persistent-memory}

- يتم تخزين موجز الموقع (site_brief) الخاص بك
- يفهم الوكلاء المستقبليون موقعك
- لا حاجة لتكرار معلومات الإعداد

### سير عمل متكامل {#integrated-workflow}

- إعداد مُنشئ القوالب (Theme Builder onboarding)
- مهارة جماليات نظام التصميم (Design System Aesthetics skill)
- أدوات التحكم في الرؤية (Ability Visibility controls)
- كل شيء يعمل معًا بسلاسة

## استكشاف الأخطاء وإصلاحها {#troubleshooting}

### لا أجد وضع بناء الموقع (Site Builder mode) {#i-cant-find-site-builder-mode}

لقد تمت إزالة وضع بناء الموقع. استخدم وكيل المساعد في الإعداد بدلاً من ذلك:

```
"Help me set up a new site"
```

### أريد إعادة إنشاء موقع من بناء الموقع {#i-want-to-recreate-a-site-from-site-builder}

يمكنك إعادة إنشائه باستخدام وكيل المساعد في الإعداد:

1. اطلب: "Help me set up a new site"
2. صف الغرض والتصميم الأصلي لموقعك
3. سيقوم الوكيل بتوليد قالب مشابه
4. سيتم تخزين موجز الموقع (site_brief) الخاص بك للرجوع إليه في المستقبل

### موقعي القديم الذي تم إنشاؤه بواسطة بناء الموقع لا يعمل {#my-existing-site-builder-site-isnt-working}

تستمر المواقع الموجودة التي تم إنشاؤها باستخدام وضع بناء الموقع في العمل. إذا كنت تواجه مشكلات:

1. تأكد من أن القالب الخاص بك لا يزال نشطًا
2. تحقق من تمكين الإضافات (plugins) الخاصة بك
3. تحقق من سجل أخطاء WordPress
4. اتصل بالدعم إذا استمرت المشكلات

### هل ما زال بإمكاني استخدام قوالب بناء الموقع القديمة؟ {#can-i-still-use-my-old-site-builder-templates}

لم تعد قوالب بناء الموقع متاحة. ومع ذلك:

- تستمر مواقعك الحالية في العمل
- يمكنك إعادة إنشاء مواقع مماثلة باستخدام وكيل المساعد في الإعداد
- يوفر وكيل المساعد في الإعداد خيارات تخصيص أكثر

## الخطوات التالية {#next-steps}

1. **للمواقع الجديدة**: استخدم وكيل المساعد في الإعداد (Setup Assistant agent)
2. **للمواقع الموجودة**: استمر في استخدامها كما هي
3. **لتغيير القالب**: اطلب المساعدة من وكيل المساعد في الإعداد
4. **لتحسين التصميم**: استخدم مهارة جماليات نظام التصميم (Design System Aesthetics skill)

## مواضيع ذات صلة {#related-topics}

- **Theme Builder Onboarding**: إعداد مُوجّه للقوالب المخصصة
- **Setup Assistant Agent**: إعداد الموقع الموجه بواسطة الوكيل
- **Site Specification Skill**: تحديد أهداف وجمهور موقعك
- **Design System Aesthetics Skill**: تحسين الهوية البصرية لموقعك
