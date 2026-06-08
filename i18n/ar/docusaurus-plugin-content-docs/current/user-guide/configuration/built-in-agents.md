---
title: وكلاء مدمجون
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# الوكلاء المدمجون (Built-in Agents)

يأتي Gratis AI Agent v1.9.0 بخمسة وكلاء مدمجين، كل وكيل منها مُعد مسبقًا بمجموعة مركزة من الأدوات، وتوجيه نظام (system prompt) مُصمم خصيصًا، واقتراحات بدء تشغيل تتناسب مع المهام الشائعة في هذا المجال. يغير التبديل بين الوكلاء ما يمكن للمساعد فعله وكيفية استجابته — وكل ذلك دون الحاجة إلى أي إعدادات من جانبك.

## ما هو الوكيل (Agent)؟

كل وكيل هو مجموعة إعدادات مُسماة تجمع بين:

- **الأدوات (Tools)** — وهي القدرات التي يُسمح للوكيل باستدعائها (على سبيل المثال، يمتلك كاتب المحتوى وصولاً إلى قدرات إنشاء المنشورات؛ ويمتلك استوديو التصميم وصولاً إلى قدرات CSS و theme.json).
- **توجيه النظام (System prompt)** — وهي التعليمات التي تحدد نبرة الوكيل وأولوياته وقيوده.
- **الاقتراحات (Suggestions)** — وهي مطالبات مُعدة مسبقًا تظهر في واجهة الدردشة لمساعدتك على البدء بسرعة.

## الوصول إلى مُحدد الوكيل (Agent Picker)

1. افتح لوحة **Gratis AI Agent** في الشريط الجانبي لإدارة WordPress.
2. انقر على **أيقونة الوكيل (agent icon)** في الزاوية العلوية اليسرى من رأس الدردشة (تتغير الأيقونة لتعكس الوكيل النشط).
3. تظهر **مُحدد الوكيل (Agent Picker)** كطبقة علوية على شكل جدول نموذج. يتم سرد كل وكيل مع أيقونته واسمه ووصف من سطر واحد.
4. انقر على صف الوكيل لتنشيطه. يتم تحديث رأس الدردشة على الفور.

يمكنك أيضًا التبديل بين الوكلاء أثناء المحادثة — حيث يصبح توجيه النظام للوكيل الجديد ساري المفعول بدءًا من الرسالة التالية.

## الوكلاء المدمجون الخمسة

### كاتب المحتوى (Content Writer)

**التركيز:** إنشاء وتحرير المنشورات والصفحات ونماذج الاتصال.

**الأدوات المتاحة:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**ما يبرع فيه:**
- صياغة ونشر منشورات المدونة بناءً على موجز أو مخطط تفصيلي.
- إنشاء دفعات من صفحات الهبوط لموقع جديد.
- بناء نماذج الاتصال والاستفسار.
- تعيين الصور المميزة للمنشورات من رابط URL أو البحث.

**اقتراحات بدء التشغيل:**
- *اكتب منشور مدونة من 500 كلمة حول فوائد موقع WordPress متعدد المواقع (multisite).*
- *أنشئ صفحة "من نحن" وصفحة "الخدمات" وصفحة "اتصل بنا" وانشرها.*
- *أضف نموذج استفسار للحجز إلى صفحة الاتصال.*

---

### مُنشئ المواقع (Site Builder)

**التركيز:** إنشاء موقع ويب متكامل من مطالبة واحدة.

**الأدوات المتاحة:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**ما يبرع فيه:**
- إنشاء خطة بناء متعددة المراحل لنوع عمل مُوصوف.
- تنفيذ كل مرحلة بشكل مستقل — الهيكل، والمحتوى، والتنقل، والتصميم.
- التعافي من الأخطاء أثناء الخطة دون الحاجة إلى تدخل يدوي.
- تثبيت الإضافات الموصى بها كجزء من البناء.
- إنشاء نماذج الاتصال مباشرة من واجهة الدردشة (Superdav AI Agent v1.10.0+).

**اقتراحات بدء التشغيل:**
- *أنشئ موقع محفظة تصوير فوتوغرافي يتضمن نوع منشور للصور، وصفحة للحجز، ونموذج اتصال.*
- *أنشئ موقع مطعم يتضمن قائمة طعام عبر الإنترنت، وساعات العمل، ونموذج استفسار لحجز طاولة.*
- *قم بإعداد موقع استشارات مستقل يتضمن صفحات خدمات، وقسم محفظة أعمال، ومدونة.*
- *أضف نموذج اتصال إلى صفحة الاتصال باستخدام مُنشئ المواقع.*

---

### استوديو التصميم (Design Studio)

**التركيز:** التخصيص البصري — الألوان، والخطوط، وCSS، وأنماط الكتل (block patterns).

**الأدوات المتاحة:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**ما يبرع فيه:**
- تطبيق الإعدادات المسبقة المسمّاة للمظهر (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog).
- الضبط الدقيق للخطوط العالمية ولوحات الألوان عبر theme.json.
- حقن CSS مخصص لتجاوزات خاصة بالعلامة التجارية.
- التقاط لقطة شاشة لصفحة ومراجعتها بحثًا عن مشكلات التصميم.

**اقتراحات بدء التشغيل:**
- *طبق الإعداد المسبق warm-editorial ثم اضبط اللون الأساسي على #2d6a4f.*
- *التقط لقطة شاشة للصفحة الرئيسية وأخبرني بما تقترح تحسينه.*
- *أنشئ نمط كتلة (block pattern) قابل لإعادة الاستخدام بخلفية صورة بعرض كامل وعنوان في المنتصف.*

---

### مدير الإضافات (Plugin Manager)

**التركيز:** اكتشاف وإضافة وإدارة إضافات WordPress.

**الأدوات المتاحة:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**ما يبرع فيه:**
- التوصية بأفضل إضافة لحالة استخدام مُوصوفة.
- تثبيت حزم القدرات (ability packs) من السجل.
- تصفح كتالوج القدرات المتاح حسب الفئة.

**اقتراحات بدء التشغيل:**
- *ما هي أفضل إضافة لـ دليل العضوية (membership directory)؟*
- *ثبّت حزمة قدرات WooCommerce.*
- *أرني جميع حزم القدرات المتاحة للتجارة الإلكترونية.*

---

### مساعد الدعم (Support Assistant)

**التركيز:** الإجابة على الأسئلة المتعلقة بمحتوى الموقع، والإعدادات، وتكوين WordPress.

**الأدوات المتاحة:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ما يبرع فيه:**
- البحث عن إعدادات وخيارات الموقع الحالية.
- شرح ما هي أنواع المنشورات والتصنيفات والقوائم المُعدة على الموقع.
- الإجابة على أسئلة "ماذا يفعل هذا الإعداد؟" عن طريق قراءة القيم الحية.
- العمل كطبقة تشخيص للقراءة فقط قبل إجراء أي تغييرات.

**اقتراحات بدء التشغيل:**
- *ما هي الإضافات والإعدادات النشطة حاليًا على هذا الموقع؟*
- *أدرج جميع أنواع المنشورات المخصصة المُسجلة على هذا الموقع.*
- *ما هي قوائم التنقل الموجودة وأين تم تعيينها؟*

---

## تخصيص الوكلاء (Customising Agents)

يمكن توسيع أو استبدال كل وكيل مدمج عبر الفلتر `gratis_ai_agent_agents`.

### إضافة توجيه نظام مخصص لوكيل موجود

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### تسجيل وكيل جديد

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

يظهر الوكيل الجديد في مُحدد الوكيل فور تشغيل الفلتر.

### إزالة وكيل مدمج

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
