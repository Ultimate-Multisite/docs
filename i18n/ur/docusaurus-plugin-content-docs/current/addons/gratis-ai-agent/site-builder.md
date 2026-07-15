---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (جو Gratis AI Agent v1.4.0 میں متعارف کرایا گیا) وہ انجن ہے جو کثیر مراحل والی ویب سائٹ بنانے کی صلاحیت فراہم کرتا ہے۔ جب آپ ایجنٹ سے "ایک ریسٹورنٹ کی ویب سائٹ بنائیں" یا "ایک بلاگ کے ساتھ پورٹفولیو بنائیں" جیسا کوئی کام کرنے کو کہتے ہیں، تو یہ آرکیسٹریٹر (orchestrator) اس بڑے مقصد کو ایک منظم **منصوبے (plan)** میں تقسیم کرتا ہے، اسے پورا کرنے کے لیے ضروری plugins کو تلاش کرتا ہے، ہر قدم کو ترتیب سے چلاتا ہے، پیش رفت کو ٹریک کرتا ہے، اور غلطیوں سے خودکار طریقے سے نکلتا ہے۔

---

## یہ کیسے کام کرتا ہے {#how-it-works}

### 1. منصوبہ بنانا (Plan Generation) {#1-plan-generation}

جب ایجنٹ کو ویب سائٹ بنانے کی ہدایت ملتی ہے، تو یہ ایک JSON **site plan** تیار کرنے کے لیے `create_site_plan` کی صلاحیت (ability) کو کال کرتا ہے۔ یہ منصوبہ مندرجہ ذیل تفصیلات بیان کرتا ہے:

- **Goal** — مکمل شدہ سائٹ کو کیا کرنا چاہیے
- **Phases** — اقدامات کے ترتیب وار گروپس (مثلاً: _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — ہر مرحلے کے اندر کی انفرادی ability calls
- **Plugin requirements** — وہ plugins جو کچھ اقدامات کے چلنے کے لیے فعال ہونے چاہئیں
- **Fallbacks** — اگر کوئی بنیادی قدم ناکام ہو جائے تو متبادل اقدامات

**مثال منصوبہ (مختصر)**

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

### 2. Plugin Discovery {#2-plugin-discovery}

عمل شروع ہونے سے پہلے، آرکیسٹریٹر منصوبے کے `plugin_requirements` کو اسکین کرتا ہے اور چیک کرتا ہے کہ کون سے plugins پہلے سے فعال ہیں۔ غائب plugins کے لیے، یہ:

1. بہترین میچ تلاش کرنے کے لیے `recommend_plugin` کے ذریعے registry میں تلاش کرتا ہے
2. ایجنٹ سے سفارش کی تصدیق کرنے کے لیے کہتا ہے
3. منظوری ملنے پر (یا اگر سیٹنگز میں auto-install فعال ہے) تنصیب (installation) شروع کرتا ہے

Plugin discovery کی ناکامی کوئی سنگین مسئلہ نہیں ہے — آرکیسٹریٹر متاثرہ اقدامات کو `skipped` کے طور پر نشان زد کرتا ہے اور منصوبے کے باقی حصوں کے ساتھ آگے بڑھتا ہے۔

### 3. Plan Execution {#3-plan-execution}

آرکیسٹریٹر plan ID کے ساتھ `execute_site_plan` کو کال کرتا ہے۔ عمل مرحلہ بہ مرحلہ، قدم بہ قدم آگے بڑھتا ہے:

- **Step references** (`__ref:` prefix) — اقدامات پچھلے اقدامات کے نتائج کا حوالہ دے سکتے ہیں۔ اوپر دی گئی مثال میں، `__ref:create_menu.menu_id` کو `create_menu` قدم سے واپس کیے گئے `menu_id` کے طور پر حل کیا جاتا ہے۔
- **Parallel steps** — ایک ہی مرحلے کے اندر وہ اقدامات جن میں آپس کی کوئی tawassuliyat (dependencies) نہیں ہیں، انہیں اس وقت ایک ساتھ (concurrently) بھیجا جاتا ہے جب `parallel` flag سیٹ ہوتا ہے۔
- **Step timeout** — ہر قدم کا اپنا ایک timeout ہوتا ہے (ڈیفالٹ: `Ability Timeout` سیٹنگ)۔ اگر کوئی قدم timeout ہو جاتا ہے تو اسے `failed` کے طور پر نشان زد کیا جاتا ہے اور منصوبہ جاری رہتا ہے۔

### 4. Progress Tracking {#4-progress-tracking}

عمل کی حیثیت چیک کرنے کے لیے کسی بھی وقت `get_plan_progress` کو کال کریں:

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

WP-CLI صارفین درج ذیل سے پیش رفت کی نگرانی کر سکتے ہیں:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Error Recovery {#5-error-recovery}

جب کوئی قدم ناکام ہوتا ہے، تو آرکیسٹریٹر منصوبے میں موجود **fallback** قدم کو چیک کرتا ہے:

- **Fallback available** — fallback قدم کو فوری طور پر آزمایا جاتا ہے۔ اگر یہ کامیاب ہو جاتا ہے، تو عمل جاری رہتا ہے۔ اگر یہ بھی ناکام ہو جاتا ہے، تو قدم کو `failed` کے طور پر نشان زد کیا جاتا ہے اور اگلے قدم کے ساتھ عمل جاری رہتا ہے۔
- **No fallback** — قدم کو `failed` کے طور پر نشان زد کیا جاتا ہے۔ غیر اہم اقدامات (non-critical steps) کو چھوڑ دیا جاتا ہے؛ اہم اقدامات (jo `required: true` سے نشان زد ہیں) موجودہ مرحلے کو روک دیتے ہیں اور ایک مرحلہ کی سطح پر بحالی کی کوشش شروع کرتے ہیں۔

ایجنٹ تمام ناکامیوں کو حتمی منصوبہ خلاصے (final plan summary) میں رپورٹ کرتا ہے اور ناقابلِ بحالی غلطیوں کے لیے دستی اصلاح کے اقدامات تجویز کر سکتا ہے۔

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

یہ ایک قدرتی زبان کے مقصد کی تفصیل سے ایک منظم site plan تیار کرتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | مطلوبہ ویب سائٹ کی قدرتی زبان میں تفصیل |
| `style` | string | No | بصری انداز کی ترجیح: `minimal`, `bold`, `professional`, `playful`۔ ڈیفالٹ: ایجنٹ مقصد کی بنیاد پر چنتا ہے |
| `plugins` | array | No | وہ plugin slugs جو منصوبے میں شامل کرنے ہیں، آرکیسٹریٹر ضروری plugins خود بخود شامل کرتا ہے۔ |
| `dry_run` | boolean | No | اگر `true` ہے، تو یہ منصوبہ JSON واپس کرتا ہے بغیر اسے محفوظ کیے یا execute کیے۔ ڈیفالٹ `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

یہ پہلے سے تیار کردہ site plan کو execute کرنا شروع کرتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | execute کرنے کے لیے plan کا ID |
| `auto_install_plugins` | boolean | No | اگر `true` ہے، تو تصدیق کے بغیر ضروری plugins کو خودکار طور پر انسٹال کرتا ہے۔ ڈیفالٹ `false` |
| `max_retries` | integer | No | آگے بڑھنے سے پہلے ناکام قدم کو دوبارہ کوشش کرنے کی تعداد۔ ڈیفالٹ `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

site plan کی موجودہ execution status واپس کرتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | پوچھ گچھ کے لیے Plan ID |

**Returns** اوپر [Progress Tracking](#4-progress-tracking) میں بیان کردہ progress object۔

---

### `handle_plan_error` {#handleplanerror}

ایک ناکام قدم کو دستی طور پر حل کرتا ہے اور اگلے قدم سے منصوبہ execution دوبارہ شروع کرتا ہے۔ اسے استعمال کریں جب خودکار بحالی ممکن نہ ہو اور آپ مداخلت کرنا چاہیں۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | ناکام قدم کا ID |
| `resolution` | string | Yes | `skip` (چھوڑ کر آگے بڑھنا)، `retry` (فوری طور پر دوبارہ کوشش کرنا)، یا `mark_done` (دوبارہ چلائے بغیر کامیاب سمجھنا) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 اور v2 کا موازنہ {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | No | Yes |
| Step output references (`__ref:`) | No | Yes |
| Plugin discovery | Manual | Automatic |
| Progress tracking API | No | Yes |
| Error recovery | Fail-and-stop | Fallback + continue |
| Parallel step execution | No | Yes (opt-in per phase) |
| WP-CLI plan commands | No | Yes |
| Benchmark integration | No | Yes (`q-restaurant-website`) |

---

## WP-CLI Plan Commands {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

ایک goal description سے site plan تیار کرتا ہے۔

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

ایک پہلے سے تیار کردہ plan کو execute کرتا ہے۔

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

ایک execute ہو رہے یا مکمل شدہ plan کے لیے موجودہ پیش رفت دکھاتا ہے۔

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

تمام site plans (pending, in-progress, اور completed) کی فہرست دکھاتا ہے۔

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

ایک ناکام plan کو `pending` پر reset کرتا ہے تاکہ اسے شروع سے دوبارہ execute کیا جا سکے۔

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
