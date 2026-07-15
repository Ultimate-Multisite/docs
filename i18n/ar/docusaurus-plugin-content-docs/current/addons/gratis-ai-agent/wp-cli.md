---
title: مرجع WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# مرجع WP-CLI

تطلق إضافة Gratis AI Agent مجموعة أوامر `wp gratis-ai-agent` لغرض قياس أداء الوكيل (agent)، وإدارة القدرات (abilities)، والاستعلام عن حالة الوكيل من سطر الأوامر. تتطلب جميع الأوامر استخدام WP-CLI إصدار 2.0 أو أعلى.

## التثبيت (Installation) {#installation}

يتم تسجيل أوامر WP-CLI تلقائيًا بمجرد تفعيل الإضافة. للتحقق، استخدم الأمر التالي:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

يشغّل هذا الأمر مجموعة اختبارات قياس أداء قدرات الوكيل (Agent Capabilities benchmark suite) — وهي مجموعة من المطالبات المعقدة ومتعددة الخطوات التي تختبر كامل نطاق القدرات. استخدم هذا الأمر لتقييم أداء النموذج، أو مقارنة مزودي الذكاء الاصطناعي، أو التحقق من حزم القدرات قبل نشرها في بيئة الإنتاج.

### الملخص (Synopsis) {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### الخيارات (Options) {#options}

| الخيار | الوصف |
|---|---|
| `--question=<id>` | تشغيل سؤال قياس أداء واحد باستخدام المعرّف (ID) بدلاً من المجموعة الكاملة |
| `--provider=<provider>` | تجاوز مزود الذكاء الاصطناعي المُعدّ لهذ التشغيل (مثل: `anthropic`، `openai`) |
| `--model=<model>` | تجاوز النموذج المُعدّ لهذ التشغيل (مثل: `claude-opus-4-6`، `gpt-4o`) |
| `--output=<format>` | تنسيق الإخراج: `table` (افتراضي)، `json`، `csv` |
| `--save` | حفظ نتائج الاختبار في قاعدة البيانات للمقارنة التاريخية |

### الأمثلة (Examples) {#examples}

تشغيل مجموعة الاختبارات الكاملة باستخدام المزود والنموذج الحاليين:

```bash
wp gratis-ai-agent benchmark
```

تشغيل سؤال واحد (`q-restaurant-website`) وإخراج النتائج بتنسيق JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

التشغيل مقابل نموذج محدد وحفظ النتائج:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### المخرجات (Output) {#output}

يُخرج الاختبار صفًا واحدًا لكل سؤال ويحتوي على الأعمدة التالية:

| العمود | الوصف |
|---|---|
| `ID` | مُعرّف السؤال |
| `Description` | ملخص قصير لسيناريو الاختبار |
| `Score` | درجة النجاح/الفشل أو درجة رقمية (0–100) |
| `Abilities Used` | قائمة مفصولة بفواصل بالقدرات التي تم استدعاؤها |
| `Tokens` | إجمالي الرموز المُستهلكة |
| `Duration` | الوقت المنقضي (بالثواني) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### أسئلة الاختبار (Benchmark Questions) {#benchmark-questions}

تتضمن المجموعة الافتراضية ما يلي:

| ID | السيناريو |
|---|---|
| `q-portfolio-site` | إنشاء نوع محتوى مخصص (CPT) للمحفظة مع تصنيف فئة مشروع وتسجيل نمط كتلة |
| `q-restaurant-website` | بناء موقع مطعم كامل مع نوع محتوى مخصص لقائمة الطعام، ونموذج الحجز، والتنقل |
| `q-dark-mode-theme` | تطبيق إعداد مسبق لتصميم الوضع الداكن وحقن ألوان العلامة التجارية |
| `q-nav-builder` | إنشاء قائمة تنقل رئيسية من أربعة عناصر مع قائمة منسدلة متداخلة |
| `q-options-roundtrip` | قراءة وتعديل واستعادة مجموعة من خيارات WordPress |
| `q-ability-install` | اكتشاف وتثبيت حزمة القدرات الأنسب لحالة استخدام موصوفة |

يمكن تسجيل أسئلة إضافية عبر الفلتر `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

يدير القدرات وحزم القدرات المثبتة.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

يسرد جميع القدرات المسجلة، ومصدرها (أساسي أو حزمة)، وحالتها الحالية.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**الخيارات (Options)**

| الخيار | الوصف |
|---|---|
| `--format=<format>` | تنسيق الإخراج: `table` (افتراضي)، `json`، `csv` |

**مثال على المخرجات (Example output)**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

يقوم بتنزيل وتفعيل حزمة قدرات من السجل.

```bash
wp gratis-ai-agent abilities install <slug>
```

**المُعاملات (Arguments)**

| المُعامل | الوصف |
|---|---|
| `<slug>` | مُعرّف الإضافة (slug) لحزمة القدرات، مثال: `gratis-ai-agent-woocommerce` |

**مثال (Example)**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

يعطّل قدرة معينة دون إزالة الحزمة. مفيد لتقييد نطاق عمل الوكيل في موقع معين.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**مثال (Example)**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

يعيد تفعيل قدرة كانت معطلة سابقًا.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

يعرض التكوين الحالي للوكيل وحالة الاتصال.

```bash
wp gratis-ai-agent status
```

**مثال على المخرجات (Example output)**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

يعرض نشاط الوكيل الأخير من سجل التصحيح (debug log).

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**الخيارات (Options)**

| الخيار | الوصف |
|---|---|
| `--last=<n>` | عرض آخر N إدخال في السجل. الافتراضي هو `50` |
| `--level=<level>` | التصفية حسب المستوى: `info`، `warning`، `error` |
| `--ability=<ability>` | التصفية حسب اسم القدرة |

**مثال (Example)**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

يعيد تعيين حالة الوكيل: يمسح CSS المُحقن، ويزيل أنواع المحتوى والتصنيفات المسجلة بواسطة الوكيل، ويعيد تعيين الأنماط العامة، ويفرغ ذاكرة التخزين المؤقت لخيارات الوكيل. لا يزيل الإضافة أو إعداداتها.

```bash
wp gratis-ai-agent reset [--yes]
```

أضف `--yes` لتخطي مطالبة التأكيد.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## رموز الخروج (Exit Codes) {#exit-codes}

تخرج جميع الأوامر بالرمز `0` عند النجاح. رموز الخروج غير الصفرية:

| الرمز | المعنى |
|---|---|
| `1` | خطأ عام (راجع رسالة الخطأ) |
| `2` | فشل اتصال المزود (Provider connectivity failure) |
| `3` | القدرة غير موجودة (Ability not found) |
| `4` | سؤال الاختبار غير موجود (Benchmark question not found) |
