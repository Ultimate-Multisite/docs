---
title: مهارات مواصفات الموقع
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# مهارة تحديد مواصفات الموقع (Site Specification Skill) {#site-specification-skill}

تُعد **مهارة تحديد مواصفات الموقع** نهجًا منظمًا لجمع أهداف موقعك، وجمهورك المستهدف، وهوية علامتك التجارية. يتم تخزين هذه المعلومات في ذاكرة **site_brief** الخاصة بك، والتي تستشيرها الـ agents عبر الجلسات المختلفة لتقديم مساعدة متسقة ومدركة للسياق.

## ما هو تحديد مواصفات الموقع؟ {#what-is-site-specification}

تحديد مواصفات الموقع هو عملية توثيق ما يلي:

- **هدف الموقع**: ما يفعله موقعك ولماذا وُجد.
- **الجمهور المستهدف**: من يزور موقعك وما هي احتياجاتهم.
- **هوية العلامة التجارية**: ألوانك، ونبرة صوتك، وأسلوبك البصري.
- **أهداف العمل**: كيف يبدو النجاح لموقعك.
- **هيكل المحتوى**: كيف يتم تنظيم موقعك.

تصبح هذه المواصفات بمثابة **site_brief** الخاص بك، وهي ذاكرة دائمة تستخدمها الـ agents لفهم سياق موقعك.

## لماذا نستخدم تحديد مواصفات الموقع؟ {#why-use-site-specification}

### الاتساق عبر الجلسات {#consistency-across-sessions}

بدون site_brief، ستحتاج إلى إعادة شرح هدف موقعك في كل مرة تبدأ فيها جلسة جديدة. أما بوجوده، فإن الـ agents تفهم على الفور:

- أهداف موقعك وجمهوره.
- ألوان علامتك التجارية ونبرة صوتها.
- هيكل المحتوى الخاص بك.
- أهداف عملك التجارية.

### توصيات أفضل {#better-recommendations}

تستخدم الـ agents الـ site_brief الخاص بك لـ:

- اقتراح ميزات تتوافق مع هدف موقعك.
- التوصية بهياكل محتوى تتناسب مع أهدافك.
- اقتراح تصميمات متسقة مع علامتك التجارية.
- تجنب اقتراح ميزات غير متوافقة.

### إعداد أسرع {#faster-onboarding}

يمكن للـ agents الجديدة (أو الـ agents في جلسات جديدة) أن تصبح على اطلاع سريع من خلال قراءة الـ site_brief الخاص بك بدلاً من طرح أسئلة توضيحية.

## بدء تحديد مواصفات الموقع {#initiating-site-specification}

### أثناء إعداد Theme Builder {#during-theme-builder-onboarding}

يتم بدء مهارة تحديد مواصفات الموقع تلقائيًا أثناء **تدفق إعداد Theme Builder**. يقوم agent المساعد بالإعداد بطرح الأسئلة وبناء الـ site_brief الخاص بك.

### البدء اليدوي {#manual-initiation}

يمكنك بدء تحديد مواصفات الموقع في أي وقت:

```
"Let's define my site specification"
```

أو

```
"Help me create a site brief"
```

## عملية تحديد مواصفات الموقع {#the-site-specification-process}

### الخطوة 1: هدف الموقع {#step-1-site-purpose}

يسأل الـ agent:

```
What is your site's primary purpose?
- E-commerce store (متجر إلكتروني)
- Blog or content site (مدونة أو موقع محتوى)
- Portfolio or showcase (معرض أعمال أو محفظة)
- SaaS application (تطبيق SaaS)
- Community or forum (مجتمع أو منتدى)
- Other: [describe] (أخرى: [صف])
```

يمكنك اختيار فئة أو وصف هدفك الخاص.

### الخطوة 2: الجمهور المستهدف {#step-2-target-audience}

```
Who is your primary audience? (من هو جمهورك الأساسي؟)
- Consumers / general public (المستهلكون / عامة الجمهور)
- Business professionals (المهنيون في الأعمال)
- Developers / technical users (المطورون / المستخدمون التقنيون)
- Students / educators (الطلاب / المعلمون)
- Other: [describe] (أخرى: [صف])

What are their main needs? (ما هي احتياجاتهم الرئيسية؟)
```

### الخطوة 3: هوية العلامة التجارية {#step-3-brand-identity}

```
What are your brand colors? (ما هي ألوان علامتك التجارية؟)
- Primary color: [color picker or hex code] (اللون الأساسي: [محدد الألوان أو رمز سداسي])
- Secondary color: [color picker or hex code] (اللون الثانوي: [محدد الألوان أو رمز سداسي])
- Accent color: [optional] (لون التمييز: [اختياري])

How would you describe your brand tone? (كيف تصف نبرة علامتك التجارية؟)
- Professional / corporate (احترافي / مؤسسي)
- Creative / artistic (إبداعي / فني)
- Playful / casual (مرح / غير رسمي)
- Minimal / modern (بسيط / عصري)
- Warm / friendly (دافئ / ودود)
```

### الخطوة 4: أهداف العمل {#step-4-business-goals}

```
What does success look like for your site? (كيف يبدو النجاح لموقعك؟)
- Generate leads (توليد العملاء المحتملين)
- Sell products (بيع المنتجات)
- Build community (بناء المجتمع)
- Share knowledge (مشاركة المعرفة)
- Establish authority (تأسيس السلطة/المرجعية)
- Other: [describe] (أخرى: [صف])

What's your primary metric? (ما هو مقياسك الأساسي؟)
- Revenue (الإيرادات)
- User engagement (تفاعل المستخدم)
- Content reach (وصول المحتوى)
- Conversions (التحويلات)
- Other (أخرى)
```

### الخطوة 5: هيكل المحتوى {#step-5-content-structure}

```
How is your content organized? (كيف يتم تنظيم المحتوى الخاص بك؟)
- Flat (all content at same level) (مسطح - كل المحتوى على نفس المستوى)
- Hierarchical (categories and subcategories) (هرمي - فئات وفئات فرعية)
- Chronological (blog-style) (زمني - بأسلوب المدونة)
- Product-based (catalog) (قائم على المنتجات - كتالوج)
- Other: [describe] (أخرى: [صف])

What content types do you use? (ما هي أنواع المحتوى التي تستخدمها؟)
- Blog posts (مقالات المدونة)
- Product pages (صفحات المنتجات)
- Case studies (دراسات الحالة)
- Documentation (التوثيق)
- Videos (مقاطع الفيديو)
- Other (أخرى)
```

## ذاكرة site_brief الخاصة بك {#your-sitebrief-memory}

بعد إكمال تحديد مواصفات الموقع، يتم تخزين معلوماتك كـ **site_brief** في ذاكرة الـ agent الخاصة بك. هذا سجل منظم يحتوي على:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## عرض وتحديث site_brief الخاص بك {#viewing-and-updating-your-sitebrief}

### عرض site_brief الخاص بك {#view-your-sitebrief}

اطلب من الـ agent:

```
"Show me my site brief"
```

أو

```
"What do you know about my site?"
```

سيقوم الـ agent بعرض المواصفات المخزنة لديك.

### تحديث site_brief الخاص بك {#update-your-sitebrief}

إذا تطور موقعك، يمكنك تحديثه:

```
"Update my site brief: we're now targeting B2B customers"
```

أو

```
"Refresh my site specification"
```

سيؤدي هذا إلى إعادة تشغيل مهارة تحديد مواصفات الموقع باستخدام معلوماتك الحالية كنقطة بداية.

## كيف تستخدم الـ Agents الـ site_brief {#how-agents-use-sitebrief}

### توصيات التصميم {#design-recommendations}

عندما تطلب تغييرات في التصميم، تستشير الـ agents الـ site_brief الخاص بك:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### اقتراحات الميزات {#feature-suggestions}

تقترح الـ agents ميزات تتوافق مع أهدافك:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### هيكل المحتوى {#content-structure}

تقترح الـ agents تنظيم المحتوى بناءً على هيكلك:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## أفضل الممارسات {#best-practices}

### كن محددًا {#be-specific}

بدلاً من "جمهور عام"، صف جمهورك الفعلي:

- ✓ "Women aged 25-45, interested in sustainable fashion" (النساء بين 25 و 45 عامًا، المهتمات بالموضة المستدامة)
- ✗ "Everyone" (الجميع)

### التحديث بانتظام {#update-regularly}

مع تطور موقعك، قم بتحديث الـ site_brief الخاص بك:

- عندما تحول تركيزك إلى جمهور جديد
- عندما تضيف خطوط إنتاج جديدة
- عندما تتغير هوية علامتك التجارية
- عندما تتغير أهداف عملك التجارية

### استخدم مصطلحات متسقة {#use-consistent-terminology}

استخدم نفس المصطلحات عبر الجلسات:

- ✓ قل دائمًا "sustainable jewelry" (المجوهرات المستدامة) (وليس "eco-friendly jewelry" و "green products")
- ✓ أشر باستمرار إلى جمهورك بنفس الطريقة

### تضمين السياق {#include-context}

قدم خلفية تساعد الـ agents على فهم قراراتك:

- "نحن نستهدف المهنيين الذين يقدرون الجودة على السعر"
- "جمهورنا ملم بالتكنولوجيا ويتوقعون تصميمًا عصريًا"
- "نحن شركة ناشئة ذات تمويل ذاتي، لذا نحتاج إلى حلول فعالة من حيث التكلفة"

## العلاقة بإعداد Theme Builder {#relationship-to-theme-builder-onboarding}

تُدمج مهارة تحديد مواصفات الموقع في **تدفق إعداد Theme Builder**. عند إكمال الإعداد، يتم إنشاء الـ site_brief الخاص بك تلقائيًا بالمعلومات التي قدمتها.

يمكنك أيضًا تشغيل تحديد مواصفات الموقع بشكل مستقل إذا كنت ترغب في:

- تحسين مواصفاتك بعد الإعداد الأولي
- تحديث الـ site_brief الخاص بك مع تطور موقعك
- إنشاء مواصفات مفصلة قبل البدء في Theme Builder

## استكشاف الأخطاء وإصلاحها {#troubleshooting}

**لا يتم استخدام site_brief الخاص بي**
- تأكد من أن الـ agent لديه وصول إلى الذاكرة
- اطلب من الـ agent "recall my site brief" (تذكر الـ site_brief الخاص بي)
- تحقق من تفعيل الذاكرة في إعداداتك

**أريد البدء من جديد بـ site_brief جديد**
- اطلب من الـ agent: "Clear my site brief and start fresh" (مسح الـ site_brief الخاص بي والبدء من جديد)
- ثم قم بتشغيل تحديد مواصفات الموقع مرة أخرى

**يقدم الـ agent توصيات لا تتطابق مع site_brief الخاص بي**
- اطلب من الـ agent "review my site brief" (مراجعة الـ site_brief الخاص بي)
- قم بتحديث الـ site_brief الخاص بك إذا كان قديمًا
- قدم سياقًا إضافيًا في طلباتك

## الخطوات التالية {#next-steps}

بعد تحديد مواصفات الموقع:

1. **استخدام Theme Builder**: أنشئ قالبًا مخصصًا بناءً على الـ site_brief الخاص بك.
2. **تحسين التصميم**: استخدم مهارة Design System Aesthetics للعمل التفصيلي في التصميم.
3. **تخطيط المحتوى**: اطلب من الـ agents توصيات لهيكل المحتوى.
4. **بناء الميزات**: اطلب ميزات تتوافق مع أهداف عملك التجارية.
