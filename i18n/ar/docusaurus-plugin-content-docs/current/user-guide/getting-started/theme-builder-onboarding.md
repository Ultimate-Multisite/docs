---
title: مسار إعداد مُنشئ القوالب
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# مسار إعداد Theme Builder

يقدم Superdav AI Agent v1.12.0 **مسار إعداد Theme Builder** مُوجَّهًا يساعدك على إنشاء قالب (Theme) مخصص بالاعتماد على نظام الكتل (block theme) أثناء إعدادك الأولي. يحل هذا المسار محل وضع Site Builder القديم بنهج أكثر مرونة يعتمد على المساعد الذكي (agent-assisted).

## ما هو مسار إعداد Theme Builder؟ {#what-is-the-theme-builder-onboarding-flow}

مسار إعداد Theme Builder هو معالج إعداد تفاعلي يقوم بما يلي:

- يوجهك خلال قرارات التصميم (الألوان، الطباعة، التخطيط).
- يلتقط تفضيلات الهوية البصرية لموقعك.
- يولد قالب كتل مخصصًا ومصممًا خصيصًا لتلبية احتياجاتك.
- يقوم بتفعيل القالب تلقائيًا عند الانتهاء.

يعمل هذا المسار بواسطة **وكيل Setup Assistant**، الذي يطرح أسئلة توضيحية ويبني القالب الخاص بك بشكل تدريجي.

## بدء إعداد Theme Builder {#starting-the-theme-builder-onboarding}

### الإعداد عند التشغيل الأول {#first-run-setup}

عند تشغيل Superdav AI Agent لأول مرة على تثبيت WordPress جديد، سترى:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

اختر **"Build a custom theme"** للدخول إلى مسار إعداد Theme Builder.

### التفعيل اليدوي {#manual-activation}

يمكنك أيضًا بدء إعداد Theme Builder في أي وقت عن طريق طلب:

```
"Start the Theme Builder onboarding"
```

أو

```
"Help me create a custom theme"
```

## خطوات الإعداد {#the-onboarding-steps}

### الخطوة 1: اختيار الوضع (Mode Selection) {#step-1-mode-selection}

يسألك وكيل Setup Assistant عن تفضيلك:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

يوصى بـ **الوضع الموجه (Guided mode)** لمعظم المستخدمين؛ حيث يقدم الوكيل توصيات تصميمية بناءً على مجال عملك وأهدافك.

### الخطوة 2: تحديد مواصفات الموقع (Site Specification) {#step-2-site-specification}

سيُطلب منك معلومات حول موقعك:

- **الغرض من الموقع**: التجارة الإلكترونية، المدونة، معرض الأعمال (portfolio)، SaaS، إلخ.
- **الجمهور المستهدف**: من هم زوارك؟
- **ألوان العلامة التجارية**: الألوان الأساسية والثانوية (أو "لست متأكدًا").
- **النبرة (Tone)**: احترافي، إبداعي، مرح، بسيط، إلخ.

يتم تخزين هذه المعلومات في ذاكرة **site_brief** الخاصة بموقعك، والتي يستشيرها الوكيل في الجلسات المستقبلية.

### الخطوة 3: قرارات نظام التصميم (Design System Decisions) {#step-3-design-system-decisions}

يوجهك الوكيل خلال اختيار رموز التصميم (design tokens):

- **الطباعة (Typography)**: عائلة الخط (serif, sans-serif, monospace) ومقياس الحجم.
- **لوحة الألوان (Color palette)**: الألوان الأساسية، والثانوية، والتمييز، والألوان المحايدة.
- **المسافات (Spacing)**: تخطيطات مدمجة، عادية، أو واسعة.
- **الحركة (Motion)**: الرسوم المتحركة والانتقالات (إذا رغبت في ذلك).

### الخطوة 4: توليد القالب (Theme Generation) {#step-4-theme-generation}

يقوم وكيل Setup Assistant بإنشاء هيكل قالب الكتل المخصص الخاص بك، ويشمل:

- `theme.json` الذي يحتوي على جميع رموز التصميم الخاصة بك.
- قوالب الكتل للتخطيطات الشائعة (الصفحة الرئيسية، المدونة، الاتصال).
- أنماط كتل مخصصة تتوافق مع نظام التصميم الخاص بك.
- بيانات وصف القالب (metadata) وتصريحات دعم WordPress.

### الخطوة 5: التفعيل والتحقق (Activation and Verification) {#step-5-activation-and-verification}

يتم تفعيل القالب تلقائيًا، وسترى:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

يمكنك بعد ذلك زيارة موقعك للتحقق من أن القالب يعرض بشكل صحيح.

## مواصفات الموقع وذاكرة site_brief {#site-specification-and-sitebrief-memory}

أثناء عملية الإعداد، يلتقط الوكيل مواصفات موقعك في فئة ذاكرة **site_brief**. ويشمل ذلك:

- الغرض والأهداف من الموقع.
- الجمهور المستهدف.
- ألوان ونبرة العلامة التجارية.
- تفضيلات التصميم.
- هيكل المحتوى.

### أهمية site_brief {#why-sitebrief-matters}

في الجلسات المستقبلية، يستشير الوكيل الـ site_brief الخاص بك من أجل:

- الحفاظ على اتساق التصميم عبر التغييرات.
- اقتراح ميزات تتوافق مع غرض موقعك.
- تقديم توصيات واعية بالسياق.
- تجنب تكرار أسئلة الإعداد.

### عرض site_brief الخاص بك {#viewing-your-sitebrief}

يمكنك أن تطلب من الوكيل:

```
"Show me my site brief"
```

أو

```
"What do you know about my site?"
```

سيقوم الوكيل بعرض مواصفات موقعك المخزنة.

## التخصيص بعد الإعداد {#customizing-after-onboarding}

بعد اكتمال مسار إعداد Theme Builder، يمكنك:

### استخدام مهارة جماليات نظام التصميم (Design System Aesthetics Skill) {#use-the-design-system-aesthetics-skill}

اطلب تحسينات تصميمية:

```
"Refine the typography to be more modern"
```

أو

```
"Adjust the color palette to be warmer"
```

تساعدك **مهارة جماليات نظام التصميم** في إجراء تحديثات تصميمية مستهدفة.

### تعديل theme.json مباشرة {#edit-themejson-directly}

للمستخدمين المتقدمين، قم بتعديل `/wp-content/themes/[theme-name]/theme.json` لتعديل:

- رموز الألوان (Color tokens).
- مقاييس الطباعة (Typography scales).
- قيم المسافات (Spacing values).
- تعريفات الحدود والظلال (Border and shadow definitions).

### إنشاء قوالب كتل مخصصة (Custom Block Templates) {#create-custom-block-templates}

استخدم محرر كتل WordPress لإنشاء قوالب مخصصة لـ:

- تخطيطات الصفحة الرئيسية.
- صفحات تدوينات المدونة.
- صفحات المنتجات.
- نماذج الاتصال.

## مقارنة: الإعداد القديم مقابل الإعداد الجديد {#comparison-old-vs-new-onboarding}

| الميزة | Site Builder (القديم) | Theme Builder (الجديد) |
|---------|----------------------|---------------------|
| طريقة الإعداد | نموذج قائم على المعالجات (Wizard-based form) | محادثة موجهة بالوكيل (Agent-guided conversation) |
| توليد القالب | قوالب محدودة | هيكلة مخصصة (Custom scaffolding) |
| رموز التصميم | إدخال يدوي | قرارات موجهة |
| المرونة | خيارات ثابتة | قابل للتخصيص |
| التحديثات المستقبلية | لا يتم الرجوع إليها | يتم تخزينها في site_brief |

## استكشاف الأخطاء وإصلاحها (Troubleshooting) {#troubleshooting}

**لم يكتمل مسار الإعداد:**
- أعد تشغيل المسار: "Start the Theme Builder onboarding"
- تأكد من تحديث تثبيت WordPress الخاص بك.
- تحقق من تفعيل وكيل Setup Assistant.

**لا يتم استخدام site_brief الخاص بي:**
- تأكد من أن الوكيل لديه صلاحية الوصول إلى الذاكرة (memory).
- اطلب من الوكيل "recall my site brief" (تذكر موقعي).
- تحقق من تفعيل الذاكرة في إعداداتك.

**القالب المُولَّد لا يتطابق مع تفضيلاتي:**
- استخدم مهارة جماليات نظام التصميم لتنقيحه.
- اطلب من الوكيل "regenerate the theme with [specific changes]" (إعادة توليد القالب بالتغييرات [المحددة]).
- قم بتعديل theme.json مباشرة للتحكم الدقيق.

## الخطوات التالية {#next-steps}

بعد إكمال إعداد Theme Builder:

1. **التحقق من موقعك**: قم بزيارة موقعك لرؤية القالب الجديد.
2. **تنقيح التصميم**: استخدم مهارة Design System Aesthetics لإجراء التعديلات.
3. **إضافة المحتوى**: ابدأ ببناء محتوى موقعك.
4. **استكشاف القدرات**: تعرّف على قدرات الوكيل الأخرى مثل scaffold-block-theme و activate-theme.
