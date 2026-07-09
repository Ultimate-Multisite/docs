---
title: تنسيق باني المواقع الإصدار 2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# تنسيق منشئ المواقع v2 {#site-builder-orchestration-v2}

يُعد Site Builder Orchestration v2 (الذي تم تقديمه في Gratis AI Agent v1.4.0) المحرك الذي يشغل عملية إنشاء المواقع متعددة الخطوات. عندما تطلب من الوكيل "بناء موقع مطعم" أو "إنشاء معرض أعمال مع مدونة"، يقوم المنسق بتفكيك هذا الهدف العام إلى **خطة** منظمة، ويكتشف الـ plugins اللازمة لتنفيذها، وينفذ كل خطوة بالتتابع، ويتتبع التقدم، ويستعيد العمل تلقائيًا في حال حدوث أخطاء.

---

## كيف يعمل {#how-it-works}

### 1. إنشاء الخطة (Plan Generation) {#1-plan-generation}

عندما يتلقى الوكيل تعليمات لبناء موقع، فإنه يستدعي القدرة `create_site_plan` لإنتاج **خطة موقع** بصيغة JSON. تصف الخطة ما يلي:

- **الهدف (Goal)** — ما الذي يجب أن يفعله الموقع النهائي
- **المراحل (Phases)** — مجموعات مرتبة من الخطوات (مثل: _الإعداد_، _أنواع المحتوى_، _التصميم_، _المحتوى_)
- **الخطوات (Steps)** — استدعاءات قدرة فردية ضمن كل مرحلة
- **متطلبات الـ plugins** — الـ plugins التي يجب أن تكون نشطة لتشغيل خطوات معينة
- **الخطط الاحتياطية (Fallbacks)** — خطوات بديلة في حال فشلت خطوة أساسية

**مثال على الخطة (مختصر)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. اكتشاف الـ Plugins {#2-plugin-discovery}

قبل بدء التنفيذ، يقوم المنسق بفحص `plugin_requirements` الموجودة في الخطة ويتحقق من الـ plugins النشطة بالفعل. بالنسبة للـ plugins المفقودة، فإنه:

1. يبحث في السجل عبر `recommend_plugin` للعثور على أفضل تطابق.
2. يطلب من الوكيل تأكيد التوصية.
3. يقوم بتشغيل التثبيت إذا تمت الموافقة (أو إذا كان التثبيت التلقائي مفعلاً في الإعدادات).

فشل اكتشاف الـ plugins ليس أمرًا حاسمًا — يقوم المنسق بوضع علامة على الخطوات المتأثرة بأنها `skipped` (تخطي) ويستمر ببقية الخطة.

### 3. تنفيذ الخطة (Plan Execution) {#3-plan-execution}

يستدعي المنسق `execute_site_plan` باستخدام معرف الخطة (plan ID). يتم التنفيذ مرحلة تلو الأخرى، وخطوة تلو الأخرى:

- **مراجع الخطوات (Step references)** (`__ref:`): يمكن للخطوات الإشارة إلى المخرجات من الخطوات السابقة. في المثال أعلاه، يتم حل `__ref:create_menu.menu_id` إلى `menu_id` الذي أرجعته خطوة `create_menu`.
- **الخطوات المتوازية (Parallel steps)**: الخطوات ضمن نفس المرحلة التي لا توجد بينها تبعيات متبادلة يتم إرسالها بالتزامن عند تعيين علامة `parallel`.
- **مهلة الخطوة (Step timeout)**: لكل خطوة مهلة فردية (الافتراضي: إعداد `Ability Timeout`). يتم وضع علامة على الخطوة التي انتهت مهلتها بأنها `failed` (فاشلة) ويستمر التخطيط.

### 4. تتبع التقدم (Progress Tracking) {#4-progress-tracking}

استدعِ `get_plan_progress` في أي وقت للتحقق من حالة التنفيذ:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

يمكن لمستخدمي WP-CLI مراقبة التقدم باستخدام:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. استعادة الأخطاء (Error Recovery) {#5-error-recovery}

عندما تفشل خطوة ما، يتحقق المنسق من وجود خطوة **احتياطية (fallback)** محددة في الخطة:

- **تتوفر خطة احتياطية (Fallback available)** — يتم محاولة الخطوة الاحتياطية فورًا. إذا نجحت، يستمر التنفيذ. وإذا فشلت أيضًا، يتم وضع علامة على الخطوة بأنها `failed` ويستمر التنفيذ بالخطوة التالية.
- **لا توجد خطة احتياطية (No fallback)** — يتم وضع علامة على الخطوة بأنها `failed`. يتم تخطي الخطوات غير الحرجة؛ أما الخطوات الحرجة (المعلمة بـ `required: true`) فتوقف المرحلة الحالية وتطلق محاولة استعادة على مستوى المرحلة.

يقوم الوكيل بالإبلاغ عن جميع حالات الفشل في ملخص الخطة النهائي وقد يقترح خطوات تصحيح يدوية للأخطاء التي لا يمكن استعادتها.

---

## قدرات خطة الموقع (Site Plan Abilities) {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

تُنشئ خطة موقع منظمة من وصف هدف بلغة طبيعية.

**المعاملات (Parameters)**

| المعامل (Parameter) | النوع (Type) | مطلوب (Required) | الوصف (Description) |
|---|---|---|---|
| `goal` | string | Yes | وصف الهدف المطلوب للموقع بلغة طبيعية |
| `style` | string | No | تفضيل النمط البصري: `minimal`، `bold`، `professional`، `playful`. الافتراضي: يختار الوكيل بناءً على الهدف |
| `plugins` | array | No | slugs الـ plugins المراد تضمينها في الخطة. يضيف المنسق الـ plugins المطلوبة تلقائيًا. |
| `dry_run` | boolean | No | إذا كانت `true`، فإنه يعيد خطة JSON دون حفظها أو تنفيذها. الافتراضي `false` |

**الإرجاع (Returns)** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

يبدأ بتنفيذ خطة موقع تم إنشاؤها مسبقًا.

**المعاملات (Parameters)**

| المعامل (Parameter) | النوع (Type) | مطلوب (Required) | الوصف (Description) |
|---|---|---|---|
| `plan_id` | string | Yes | معرف الخطة المراد تنفيذها |
| `auto_install_plugins` | boolean | No | إذا كانت `true`، فإنه يقوم بتثبيت الـ plugins المطلوبة تلقائيًا دون تأكيد. الافتراضي `false` |
| `max_retries` | integer | No | عدد المرات التي يجب فيها إعادة محاولة خطوة فاشلة قبل الانتقال. الافتراضي `1` |

**الإرجاع (Returns)** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

يعيد الحالة الحالية لتنفيذ خطة الموقع.

**المعاملات (Parameters)**

| المعامل (Parameter) | النوع (Type) | مطلوب (Required) | الوصف (Description) |
|---|---|---|---|
| `plan_id` | string | Yes | معرف الخطة المراد الاستعلام عنها |

**الإرجاع (Returns)** كائن التقدم الموصوف في [تتبع التقدم](#4-تتبع-التقدم) أعلاه.

---

### `handle_plan_error` {#handleplanerror}

يحل يدويًا خطوة فاشلة ويستأنف تنفيذ الخطة من الخطوة التالية. استخدم هذا عندما لم يكن الاسترداد التلقائي ممكنًا وترغب في التدخل.

**المعاملات (Parameters)**

| المعامل (Parameter) | النوع (Type) | مطلوب (Required) | الوصف (Description) |
|---|---|---|---|
| `plan_id` | string | Yes | معرف الخطة |
| `step_id` | string | Yes | معرف الخطوة الفاشلة |
| `resolution` | string | Yes | إحدى القيم التالية: `skip` (تخطي والمتابعة)، `retry` (إعادة محاولة الخطوة فورًا)، أو `mark_done` (اعتبارها ناجحة دون إعادة التشغيل) |

**الإرجاع (Returns)** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## مقارنة v1 و v2 {#comparing-v1-and-v2}

| الميزة (Feature) | v1 | v2 |
|---|---|---|
| خطط متعددة المراحل (Multi-phase plans) | لا | نعم |
| مراجع مخرجات الخطوات (`__ref:`) | لا | نعم |
| اكتشاف الـ plugins (Plugin discovery) | يدوي | تلقائي |
| واجهة برمجة تطبيقات تتبع التقدم (Progress tracking API) | لا | نعم |
| استعادة الأخطاء (Error recovery) | فشل وتوقف | خطة احتياطية + استمرار |
| تنفيذ الخطوات المتوازية (Parallel step execution) | لا | نعم (اختياري لكل مرحلة) |
| أوامر خطة WP-CLI | لا | نعم |
| دمج Benchmark | لا | نعم (`q-restaurant-website`) |

---

## أوامر خطة WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

تُنشئ خطة موقع من وصف هدف.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

ينفذ خطة تم إنشاؤها مسبقًا.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

يعرض التقدم الحالي لخطة قيد التنفيذ أو المكتملة.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

يسرد جميع خطط المواقع (المنتظرة، قيد التقدم، والمكتملة).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

يعيد تعيين خطة فاشلة إلى حالة `pending` (معلقة) حتى يمكن إعادة تنفيذها من البداية.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
