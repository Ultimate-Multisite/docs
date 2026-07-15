---
title: إنشاء قائمة
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# إنشاء قائمة

تتيح قدرة **إنشاء قائمة** إنشاء قوائم تنقل (navigation menus) لمنصة WordPress، مع دعم تسميات تنقل مميزة ومختلفة عن عناوين الصفحات.

## نظرة عامة {#overview}

توسع هذه القدرة وظيفة إنشاء القوائم القياسية بإضافة إمكانية تحديد مُعامل (parameter) يسمى `navigation_label`. يتيح لك ذلك إنشاء قوائم تكون فيها التسمية المعروضة في شريط التنقل مختلفة عن عنوان الصفحة، مما يوفر مرونة أكبر في هيكل الموقع وتجربة المستخدم.

## المعاملات (Parameters) {#parameters}

| المعامل (Parameter) | النوع (Type) | مطلوب (Required) | الوصف (Description) |
|-----------|------|----------|-------------|
| `name` | string | Yes | اسم القائمة، مثال: `Primary Navigation` |
| `location` | string | No | موقع القالب (Theme location) الذي سيتم تعيين هذه القائمة إليه، مثال: `primary` |
| `navigation_label` | string | No | التسمية التي ستظهر في شريط التنقل (مختلفة عن عنوان الصفحة) |

## قيمة الإرجاع (Return Value) {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## تسمية التنقل مقابل عنوان الصفحة {#navigation-label-vs-page-title}

يتيح لك مُعامل `navigation_label` فصل اسم القائمة الداخلي عن التسمية المعروضة للمستخدمين:

- **`name`** — المعرّف الداخلي للقائمة الذي تستخدمه WordPress (مثال: "Primary Navigation")
- **`navigation_label`** — التسمية المعروضة لزوار الموقع في شريط التنقل (مثال: "Main Menu")

يكون هذا مفيدًا عندما:
- يختلف نظام التسمية الداخلي الخاص بك عن التسميات الظاهرة للمستخدمين
- تريد تسميات أقصر في شريط التنقل مما هي عليه في لوحة التحكم (admin panel)
- تحتاج إلى دعم لغات متعددة بتفاوت في أطوال التسميات
- تقوم بإنشاء قوائم لمناطق أو مجموعات مستخدمين محددة

## أمثلة الاستخدام {#usage-examples}

### المثال 1: قائمة بسيطة بتسمية تنقل {#example-1-simple-menu-with-navigation-label}

**المُدخل (Prompt):**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**النتيجة:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### المثال 2: قائمة لموقع قالب محدد {#example-2-menu-for-specific-theme-location}

**المُدخل (Prompt):**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**النتيجة:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## التكامل مع مُنشئ القوالب (Theme Builder) {#integration-with-theme-builder}

عند استخدام مُنشئ القوالب (Theme Builder)، تقوم قدرة إنشاء القائمة بما يلي:

1. الكشف التلقائي عن مواقع القوائم المتاحة في القالب
2. إنشاء قوائم بتسميات تنقل مناسبة لتصميمك
3. تعيين القوائم لمواقع القوالب الصحيحة
4. دعم إضافة عناصر القائمة بعد الإنشاء

## القدرات ذات الصلة {#related-abilities}

- **`add_menu_item`** — إضافة عناصر إلى قائمة موجودة
- **`update_menu`** — إعادة تسمية قائمة أو إعادة تعيينها لموقع قالب
- **`delete_menu`** — إزالة قائمة من موقعك

## أفضل الممارسات {#best-practices}

- **استخدم تسميات تنقل واضحة** — حافظ على التسميات موجزة ووصفية للمستخدمين
- **مطابقة مواقع القوالب** — قم بتعيين القوائم لموقع القالب الصحيح لعرضها بشكل سليم
- **تخطيط هيكل القائمة** — قرر التسلسل الهرمي لقائمتك قبل إنشاء العناصر
- **اختبار الاستجابة (Responsiveness)** — تحقق من عرض القوائم بشكل صحيح على الأجهزة المحمولة
- **توطين التسميات (Localize labels)** — استخدم تسميات تنقل مختلفة لإصدارات اللغات المختلفة

## القيود {#limitations}

- تسميات التنقل هي للعرض فقط؛ ولا يزال اسم `name` الداخلي يُستخدم لتحديد WordPress
- دعم القوالب يختلف؛ ليست كل القوالب تدعم جميع مواقع القوائم
- يجب إضافة عناصر القائمة بشكل منفصل بعد إنشاء القائمة
- يتطلب تغيير تسمية التنقل تحديث القائمة

## القدرات ذات الصلة {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — إنشاء شعارات لرأس موقعك
- [Validate Palette Contrast](./validate-palette-contrast.md) — ضمان أن تكون مخططات الألوان سهلة الوصول
