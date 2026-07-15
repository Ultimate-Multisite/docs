---
title: مهارة جماليات نظام التصميم
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# مهارة جماليات نظام التصميم

تُعد **مهارة جماليات نظام التصميم (Design System Aesthetics skill)** منهجًا إرشاديًا لتنقيح الهوية البصرية لموقعك. فهي تساعدك على اتخاذ قرارات متسقة بشأن عناصر الطباعة، والألوان، والتباعد، ورموز الحركة (motion tokens) التي تحدد نظام التصميم الخاص بك.

## ما هي جماليات نظام التصميم؟ {#what-is-design-system-aesthetics}

جماليات نظام التصميم هي مهارة منظمة تغطي الجوانب التالية:

- **الطباعة (Typography)**: عائلات الخطوط، والأحجام، والأوزان، وارتفاعات الأسطر.
- **الألوان (Color)**: لوحات الألوان الأساسية، والثانوية، والتمييز، والمحايدة.
- **التباعد (Spacing)**: مقاييس الحشو (Padding)، والهامش (Margin)، والفجوات (Gap).
- **الحدود (Borders)**: رموز نصف القطر والعرض.
- **الظلال (Shadows)**: رموز الارتفاع والعمق.
- **الحركة (Motion)**: الرسوم المتحركة والانتقالات.

يتم تسجيل هذه القرارات في ملف `theme.json` الخاص بقالبك، مما يخلق نظامًا بصريًا متماسكًا.

## لماذا نستخدم جماليات نظام التصميم؟ {#why-use-design-system-aesthetics}

### الاتساق (Consistency) {#consistency}

يضمن نظام التصميم ما يلي:

- استخدام جميع النصوص على مقياس طباعة موحد.
- استخدام الألوان بشكل متسق في جميع أنحاء موقعك.
- اتباع التباعد لنمط يمكن التنبؤ به.
- أن تبدو الرسوم المتحركة موحدة.

### الكفاءة (Efficiency) {#efficiency}

بدلاً من اتخاذ قرارات التصميم صفحة تلو الأخرى، يمكنك:

- تحديد الرموز (tokens) مرة واحدة.
- تطبيقها في كل مكان.
- تحديثها عالميًا بتغيير قيمة واحدة.

### المرونة (Flexibility) {#flexibility}

يمكنك:

- تعديل نظام التصميم بالكامل بسرعة.
- التجربة مع جماليات مختلفة.
- الحفاظ على اتساق العلامة التجارية أثناء التطور.

## تشغيل مهارة جماليات نظام التصميم {#triggering-the-design-system-aesthetics-skill}

### التفعيل اليدوي {#manual-activation}

يمكنك بدء المهارة في أي وقت:

```
"Help me refine my design system"
```

أو

```
"Let's improve my site's aesthetics"
```

أو

```
"Guide me through design system decisions"
```

### الاقتراحات التلقائية {#automatic-suggestions}

قد يقترح الوكلاء استخدام المهارة عندما:

- تطلب تغييرات في التصميم.
- تطلب إعادة تصميم "عصرية" أو "احترافية".
- ترغب في تحسين الاتساق البصري.
- تستعد لإطلاق موقعك.

## عملية جماليات نظام التصميم {#the-design-system-aesthetics-process}

### الخطوة 1: الطباعة (Typography) {#step-1-typography}

يسأل الوكيل عن خيارات الخطوط المفضلة لديك:

```
What's your preferred typography style?
- Serif (traditional, elegant)
- Sans-serif (modern, clean)
- Monospace (technical, code-focused)

For your heading font:
- Do you want a distinct heading font, or use the same as body text?
- Preference: bold, elegant, playful, minimal?

For your body font:
- Readability is key. Do you prefer:
  - Larger, more spacious text
  - Compact, efficient text
  - Standard sizing
```

ثم يحدد الوكيل ما يلي:

- **خط العناوين (Heading font)**: الخط الأساسي للعناوين والرؤوس.
- **خط النص الأساسي (Body font)**: الخط المستخدم للفقرات والنص الأساسي.
- **خط أحادي المسافة (Monospace font)**: الخط المستخدم للتعليمات البرمجية والمحتوى التقني.
- **مقياس الحجم (Size scale)**: أحجام محددة مسبقًا (صغير، أساسي، كبير، XL، إلخ).
- **مقياس الوزن (Weight scale)**: أوزان الخطوط (عادي، متوسط، عريض، إلخ).
- **ارتفاع السطر (Line height)**: التباعد بين الأسطر لضمان سهولة القراءة.

### الخطوة 2: لوحة الألوان (Color Palette) {#step-2-color-palette}

```
Let's define your color palette.

Primary color (your brand color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Secondary color (supporting color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Accent color (highlights and CTAs):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Neutral palette (grays for text, borders, backgrounds):
- Light: [color]
- Medium: [color]
- Dark: [color]
```

ينشئ الوكيل لوحة ألوان كاملة تشمل:

- الألوان الأساسية والثانوية وألوان التمييز.
- درجات الرمادي المحايدة (الفاتح، المتوسط، الداكن).
- الألوان الدلالية (النجاح، التحذير، الخطأ).
- حالات التحويم (Hover) والحالة النشطة (Active).

### الخطوة 3: التباعد (Spacing) {#step-3-spacing}

```
How much breathing room do you want?

Spacing scale preference:
- Compact (tight, efficient layouts)
- Normal (balanced spacing)
- Spacious (generous whitespace)

This affects:
- Padding inside buttons and cards
- Margins between sections
- Gap between grid items
```

يحدد الوكيل رموز التباعد:

- الوحدة الأساسية (عادة 4 بكسل أو 8 بكسل).
- المقياس: xs, sm, md, lg, xl, 2xl.
- قيم محددة للحشو، والهامش، والفجوة.

### الخطوة 4: الحدود والظلال (Borders and Shadows) {#step-4-borders-and-shadows}

```
Visual depth and definition:

Border radius preference:
- Sharp (no rounding)
- Subtle (small radius)
- Rounded (medium radius)
- Very rounded (large radius)

Shadow depth:
- Flat (no shadows)
- Subtle (light shadows)
- Pronounced (strong shadows)
```

ينشئ الوكيل:

- رموز نصف قطر الحدود (للأزرار، البطاقات، حقول الإدخال).
- رموز الظلال لمستويات الارتفاع.
- رموز عرض الحدود.

### الخطوة 5: الحركة والرسوم المتحركة (Motion and Animation) {#step-5-motion-and-animation}

```
How should your site feel when interactive?

Animation preference:
- Minimal (no animations)
- Subtle (gentle transitions)
- Playful (noticeable animations)

Specific animations:
- Page transitions: fade, slide, or none?
- Button hover: scale, color change, or both?
- Loading states: spinner, skeleton, or progress bar?
```

يحدد الوكيل:

- مدد الانتقال (سريع، عادي، بطيء).
- دوال التخفيف (ease-in, ease-out, ease-in-out).
- إطارات مفتاحية للرسوم المتحركة للتفاعلات الشائعة.

## تطبيق جماليات نظام التصميم {#applying-design-system-aesthetics}

### التطبيق التلقائي {#automatic-application}

بعد إكمال المهارة، يقوم الوكيل بما يلي:

1. تحديث ملف `theme.json` الخاص بقالبك بجميع الرموز (tokens).
2. تطبيق نظام التصميم على القالب النشط.
3. إعادة إنشاء أنماط الكتل (block styles) لتتوافق مع النظام الجديد.
4. تفعيل القالب المحدث.

### التطبيق اليدوي {#manual-application}

يمكنك أيضًا تعديل `theme.json` مباشرة:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## عرض نظام التصميم الخاص بك {#viewing-your-design-system}

### سؤال الوكيل {#ask-the-agent}

```
"Show me my design system"
```

أو

```
"What are my current design tokens?"
```

سيعرض الوكيل الطباعة والألوان والتباعد والرموز الأخرى الخاصة بك.

### عرض theme.json {#view-themejson}

افتح `/wp-content/themes/[theme-name]/theme.json` في محرر نصوص لرؤية تعريفات الرموز الخام.

## تحديث نظام التصميم الخاص بك {#updating-your-design-system}

### التحديثات السريعة {#quick-updates}

اطلب من الوكيل تغييرات محددة:

```
"Make the primary color darker"
```

أو

```
"Increase the spacing scale by 20%"
```

أو

```
"Change the heading font to a serif"
```

### إعادة التصميم الكاملة {#full-redesign}

أعد تشغيل مهارة جماليات نظام التصميم:

```
"Let's redesign my entire design system"
```

سيقودك هذا مرة أخرى عبر جميع القرارات، بدءًا من قيمك الحالية.

### التحديثات الجزئية {#partial-updates}

تحديث جوانب محددة:

```
"Just update the color palette, keep everything else"
```

## أفضل ممارسات نظام التصميم {#design-system-best-practices}

### الاتساق {#consistency-1}

- استخدم نفس الرموز (tokens) في كل مكان.
- لا تنشئ ألوانًا أو أحجامًا لمرة واحدة.
- ارجع إلى الرموز بدلاً من كتابة القيم بشكل ثابت (hardcoding).

### التسمية (Naming) {#naming}

استخدم أسماء واضحة ودلالية:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### قابلية التوسع (Scalability) {#scalability}

صمم نظامك ليتوسع:

- استخدم الوحدات النسبية (rem, em) بدلاً من البكسل.
- أنشئ مقاييس (scales) (xs, sm, md, lg, xl) بدلاً من القيم العشوائية.
- خطط للإضافات المستقبلية.

### التوثيق (Documentation) {#documentation}

وثّق نظام التصميم الخاص بك:

- سبب اختيارك لألوان معينة.
- متى يجب استخدام كل رمز (token).
- الاستثناءات والحالات الطرفية.

## أنماط نظام التصميم الشائعة {#common-design-system-patterns}

### الحد الأدنى العصري (Modern Minimalist) {#modern-minimalist}

- طباعة Sans-serif (Inter, Helvetica).
- لوحة ألوان محدودة (2-3 ألوان).
- تباعد وفير.
- ظلال خفيفة.
- رسوم متحركة سلسة وسريعة.

### دافئ وودود (Warm and Friendly) {#warm-and-friendly}

- مزيج من خطوط Serif و Sans-serif.
- لوحة ألوان دافئة (البرتقالي، الرمادي الدافئ).
- زوايا مستديرة.
- ظلال ناعمة.
- رسوم متحركة مرحة.

### احترافي للشركات (Professional Corporate) {#professional-corporate}

- خط Sans-serif نظيف (Roboto, Open Sans).
- لوحة ألوان محايدة مع لون تمييز.
- تباعد منظم.
- ظلال بسيطة.
- انتقالات خفيفة.

### إبداعي وجريء (Creative and Bold) {#creative-and-bold}

- طباعة مميزة.
- لوحة ألوان جريئة.
- تباعد متنوع.
- ظلال قوية.
- رسوم متحركة ملحوظة.

## استكشاف الأخطاء وإصلاحها (Troubleshooting) {#troubleshooting}

**تغييرات نظام التصميم الخاصة بي لا تظهر**
- مسح ذاكرة التخزين المؤقت للمتصفح.
- إعادة بناء موقعك إذا كنت تستخدم مولدًا ثابتًا (static generator).
- تحقق من أن `theme.json` هو JSON صالح.
- تأكد من أن القالب نشط.

**تبدو الألوان مختلفة على الصفحات المختلفة**
- تحقق من وجود CSS متعارض في الإضافات (plugins).
- تأكد من أن جميع الصفحات تستخدم نفس القالب.
- مسح أي إضافات للتخزين المؤقت (caching plugins).

**أريد العودة إلى نظام تصميم سابق**
- اسأل الوكيل: "Show me my design system history" (أرني تاريخ نظام التصميم الخاص بي).
- قم بتعديل `theme.json` يدويًا إلى القيم السابقة.
- أعد تشغيل المهارة بخيارات مختلفة.

## الخطوات التالية {#next-steps}

بعد تحديد نظام التصميم الخاص بك:

1. **مراجعة موقعك**: قم بزيارة موقعك لرؤية التصميم الجديد.
2. **التحسين أكثر**: قم بإجراء تعديلات باستخدام المهارة مرة أخرى.
3. **إنشاء القوالب**: قم ببناء قوالب كتل مخصصة باستخدام رموز التصميم الخاصة بك.
4. **التوثيق**: شارك نظام التصميم الخاص بك مع أعضاء الفريق.
