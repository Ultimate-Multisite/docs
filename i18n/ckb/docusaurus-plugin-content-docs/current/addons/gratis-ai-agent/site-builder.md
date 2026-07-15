---
title: ئۆرکێستراسیۆنی Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# ڕێکخستنی Site Builder v2

ڕێکخستنی Site Builder v2 (کە لە Gratis AI Agent v1.4.0 ناسێندرا) ئەو بزوێنەرەیە کە دروستکردنی ماڵپەڕی چەند-هەنگاوە بەهێز دەکات. کاتێک داوا لە agent دەکەیت "ماڵپەڕێکی چێشتخانە دروست بکە" یان "پۆرتفۆلیۆیەک لەگەڵ بڵاگێک دروست بکە"، orchestrator ئەو ئامانجە گشتییە دەشکێنێت بۆ **پلان**ێکی ڕێکخراو، ئەو pluginانە دەدۆزێتەوە کە بۆ جێبەجێکردنی پێویستن، هەر هەنگاوێک بە ڕیز جێبەجێ دەکات، پێشکەوتن بەدوادا دەچێت، و بە شێوەیەکی خۆکارانە لە هەڵەکان چاک دەبێتەوە.

---

## چۆن کار دەکات {#how-it-works}

### 1. دروستکردنی پلان {#1-plan-generation}

کاتێک agent ڕێنماییەکی دروستکردنی ماڵپەڕ وەردەگرێت، بانگی توانای `create_site_plan` دەکات بۆ بەرهەمهێنانی **پلانی ماڵپەڕ**ێکی JSON. پلانەکە باس دەکات:

- **ئامانج** — ماڵپەڕی تەواوبوو دەبێت چی بکات
- **قۆناغەکان** — کۆمەڵە هەنگاوی ڕیزکراو (بۆ نموونە _ڕێکخستن_, _جۆرەکانی ناوەڕۆک_, _دیزاین_, _ناوەڕۆک_)
- **هەنگاوەکان** — بانگەکانی توانای تاکەکەسی لە ناو هەر قۆناغێکدا
- **پێداویستییەکانی Plugin** — ئەو pluginانەی دەبێت چالاک بن بۆ ئەوەی هەنگاوە دیاریکراوەکان کار بکەن
- **جێگرەوەکان** — هەنگاوی جێگرەوە ئەگەر هەنگاوی سەرەکی شکستی هێنا

**نموونەی پلان (کورتکراوە)**

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

### 2. دۆزینەوەی Plugin {#2-plugin-discovery}

پێش ئەوەی جێبەجێکردن دەست پێ بکات، orchestrator پشکنینی `plugin_requirements`ی پلانەکە دەکات و دەپشکنێت کام pluginان پێشتر چالاکن. بۆ pluginە ونبووەکان، ئەمانە دەکات:

1. لە ڕێگەی `recommend_plugin`ەوە لە تۆمارگەکە دەگەڕێت بۆ باشترین هاوتا
2. داوا لە agent دەکات پەسەندکردنی پێشنیارەکە پشتڕاست بکاتەوە
3. ئەگەر پەسەند کرا (یان ئەگەر دامەزراندنی خۆکار لە ڕێکخستنەکاندا چالاک بێت) دامەزراندن دەست پێ دەکات

شکستهێنانی دۆزینەوەی Plugin کوشندە نییە — orchestrator هەنگاوە کاریگەرکراوەکان وەک `skipped` نیشان دەدات و لەگەڵ بەشی ماوەی پلانەکە بەردەوام دەبێت.

### 3. جێبەجێکردنی پلان {#3-plan-execution}

orchestrator بانگی `execute_site_plan` دەکات بە ناسنامەی پلانەکە. جێبەجێکردن قۆناغ-بە-قۆناغ، هەنگاو-بە-هەنگاو بەردەوام دەبێت:

- **ئاماژەکانی هەنگاو** (پێشگری `__ref:`) — هەنگاوەکان دەتوانن ئاماژە بە دەرچووی هەنگاوە پێشووترەکان بکەن. لە نموونەکەی سەرەوەدا، `__ref:create_menu.menu_id` دەکرێتە ئەو `menu_id`یەی کە لە هەنگاوی `create_menu` گەڕێندراوەتەوە.
- **هەنگاوە هاوکاتەکان** — هەنگاوەکانی ناو هەمان قۆناغ کە هیچ پێکەوەبەستراوی نێوانیان نییە، کاتێک ئاڵای `parallel` دانراوە بە هاوکاتی دەنێردرێن.
- **کاتی تەواوبوونی هەنگاو** — هەر هەنگاوێک کاتی تەواوبوونی تایبەتی هەیە (بنەڕەت: ڕێکخستنی `Ability Timeout`). هەنگاوێک کە کاتی تەواو بێت وەک `failed` نیشان دەدرێت و پلانەکە بەردەوام دەبێت.

### 4. بەدواداچوونی پێشکەوتن {#4-progress-tracking}

لە هەر کاتێکدا بانگی `get_plan_progress` بکە بۆ پشکنینی دۆخی جێبەجێکردن:

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

بەکارهێنەرانی WP-CLI دەتوانن بەدواداچوونی پێشکەوتن بکەن بە:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. چاکبوونەوە لە هەڵە {#5-error-recovery}

کاتێک هەنگاوێک شکست دەهێنێت، orchestrator دەپشکنێت بۆ هەنگاوی **جێگرەوە** کە لە پلانەکەدا پێناسە کراوە:

- **جێگرەوە بەردەستە** — هەنگاوی جێگرەوە دەستبەجێ تاقی دەکرێتەوە. ئەگەر سەرکەوتوو بوو، جێبەجێکردن بەردەوام دەبێت. ئەگەر ئەویش شکستی هێنا، هەنگاوەکە وەک `failed` نیشان دەدرێت و جێبەجێکردن لەگەڵ هەنگاوی داهاتوو بەردەوام دەبێت.
- **هیچ جێگرەوەیەک نییە** — هەنگاوەکە وەک `failed` نیشان دەدرێت. هەنگاوە ناپێویستە سەرەکییەکان تێپەڕ دەکرێن؛ هەنگاوە گرنگەکان (کە بە `required: true` نیشان کراون) قۆناغی ئێستا ڕادەگرن و هەوڵێکی چاکبوونەوە لە ئاستی قۆناغدا دەست پێ دەکەن.

agent هەموو شکستەکان لە پوختەی کۆتایی پلانەکەدا ڕاپۆرت دەکات و لەوانەیە هەنگاوی چارەسەری دەستی پێشنیار بکات بۆ هەڵەی چاکنەبووەوە.

---

## تواناکانی پلانی ماڵپەڕ {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

پلانی ماڵپەڕێکی ڕێکخراو لە وەسفی ئامانجێکی زمانی سروشتی دروست دەکات.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | وەسفی زمانی سروشتی بۆ ماڵپەڕی خوازراو |
| `style` | string | No | پەسەندی شێوازی بینراو: `minimal`, `bold`, `professional`, `playful`. بنەڕەت: agent بە پێی ئامانجەکە هەڵدەبژێرێت |
| `plugins` | array | No | slugەکانی Plugin بۆ گرتنەوە لە پلانەکەدا. orchestrator pluginە پێویستەکان بە شێوەی خۆکار زیاد دەکات. |
| `dry_run` | boolean | No | ئەگەر `true` بێت، JSONی پلانەکە دەگەڕێنێتەوە بەبێ پاشەکەوتکردن یان جێبەجێکردنی. بنەڕەت `false` |

**دەگەڕێنێتەوە** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

دەست بە جێبەجێکردنی پلانی ماڵپەڕێکی پێشتر دروستکراو دەکات.

**پارامێتەرەکان**

| پارامێتەر | جۆر | پێویستە | وەسف |
|---|---|---|---|
| `plan_id` | string | بەڵێ | ناسنامەی ئەو پلانەی کە دەبێت جێبەجێ بکرێت |
| `auto_install_plugins` | boolean | نەخێر | ئەگەر `true` بێت، پێوەکراوە پێویستەکان بە شێوەیەکی خۆکارانە و بێ پشتڕاستکردنەوە دادەمەزرێنێت. بنەڕەت `false` |
| `max_retries` | integer | نەخێر | ژمارەی ئەو جارەی هەوڵ دەدرێتەوە بۆ هەنگاوێکی سەرنەکەوتوو پێش ئەوەی بچێتە پێشەوە. بنەڕەت `1` |

**دەگەڕێنێتەوە** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

دۆخی ئێستای جێبەجێکردنی پلانی ماڵپەڕێک دەگەڕێنێتەوە.

**پارامێتەرەکان**

| پارامێتەر | جۆر | پێویستە | وەسف |
|---|---|---|---|
| `plan_id` | string | بەڵێ | ناسنامەی پلان بۆ پرسیارکردن |

**دەگەڕێنێتەوە** ئەو ئامانجی پێشکەوتنەی کە لە [بەدواداچوونی پێشکەوتن](#4-progress-tracking) لەسەرەوە باسکراوە.

---

### `handle_plan_error` {#handleplanerror}

هەنگاوێکی سەرنەکەوتوو بە دەستی چارەسەر دەکات و جێبەجێکردنی پلان لە هەنگاوی دواترەوە دەست پێدەکاتەوە. ئەمە بەکاربهێنە کاتێک چاکبوونەوەی خۆکارانە نەکرابوو و دەتەوێت دەستێوەردان بکەیت.

**پارامێتەرەکان**

| پارامێتەر | جۆر | پێویستە | وەسف |
|---|---|---|---|
| `plan_id` | string | بەڵێ | ناسنامەی پلان |
| `step_id` | string | بەڵێ | ناسنامەی هەنگاوە سەرنەکەوتووەکە |
| `resolution` | string | بەڵێ | یەکێک لە `skip` (تێپەڕاندن و بەردەوامبوون)، `retry` (دەستبەجێ هەنگاوەکە دووبارە هەوڵبدەوە)، یان `mark_done` (وەک سەرکەوتوو مامەڵەی لەگەڵ بکە بێ دووبارە جێبەجێکردنەوە) |

**دەگەڕێنێتەوە** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## بەراوردکردنی v1 و v2 {#comparing-v1-and-v2}

| تایبەتمەندی | v1 | v2 |
|---|---|---|
| پلانە چەند-قۆناغییەکان | نەخێر | بەڵێ |
| ئاماژەکانی دەرچوونی هەنگاو (`__ref:`) | نەخێر | بەڵێ |
| دۆزینەوەی پێوەکراو | دەستی | خۆکار |
| APIـی بەدواداچوونی پێشکەوتن | نەخێر | بەڵێ |
| چاکبوونەوەی هەڵە | سەرنەکەوتن-و-وەستان | جێگرەوە + بەردەوامبوون |
| جێبەجێکردنی هەنگاوە هاوتەریبەکان | نەخێر | بەڵێ (بە هەڵبژاردن بۆ هەر قۆناغێک) |
| فەرمانەکانی پلانی WP-CLI | نەخێر | بەڵێ |
| یەکخستنی پێوانە | نەخێر | بەڵێ (`q-restaurant-website`) |

---

## فەرمانەکانی پلانی WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

پلانێکی ماڵپەڕ لە وەسفی ئامانجێکەوە دروست دەکات.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

پلانێکی پێشتر دروستکراو جێبەجێ دەکات.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

پێشکەوتنی ئێستای پلانێکی لە جێبەجێکردن یان تەواوبوو نیشان دەدات.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

هەموو پلانەکانی ماڵپەڕ لیست دەکات (چاوەڕوان، لە پێشکەوتندان، و تەواوبوو).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

پلانێکی سەرنەکەوتوو دەگەڕێنێتەوە بۆ `pending` بۆ ئەوەی بتوانرێت لە سەرەتاوە دووبارە جێبەجێ بکرێت.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
