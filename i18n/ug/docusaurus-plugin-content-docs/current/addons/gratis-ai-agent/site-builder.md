---
title: بېكەت قۇرغۇچنى ماسلاشتۇرۇپ باشقۇرۇش v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# تور بېكەت قۇرغۇچنى ماسلاشتۇرۇپ باشقۇرۇش v2

تور بېكەت قۇرغۇچنى ماسلاشتۇرۇپ باشقۇرۇش v2 (Gratis AI Agent v1.4.0 دا تونۇشتۇرۇلغان) كۆپ باسقۇچلۇق تور بېكەت قۇرۇشنى ھەرىكەتلەندۈرىدىغان ماتوردۇر. سىز ۋاكالەتچىدىن "ئاشخانا تور بېكىتى قۇرۇپ بەر" ياكى "بىلوگى بار پورتفوليو قۇرۇپ بەر" دەپ سورىغاندا، ماسلاشتۇرغۇچ بۇ يۇقىرى دەرىجىلىك نىشاننى قۇرۇلمىلىق **پىلان**غا پارچىلايدۇ، ئۇنى ئەمەلگە ئاشۇرۇشقا كېرەكلىك plugin لارنى بايقايدۇ، ھەر بىر باسقۇچنى تەرتىپ بويىچە ئىجرا قىلىدۇ، ئىلگىرىلەشنى ئىزلايدۇ ۋە خاتالىقلاردىن ئۆزلۈكىدىن ئەسلىگە كېلىدۇ.

---

## ئۇ قانداق ئىشلەيدۇ

### 1. پىلان ھاسىل قىلىش

ۋاكالەتچى تور بېكەت قۇرۇش كۆرسەتمىسىنى تاپشۇرۇۋالغاندا، JSON **تور بېكەت پىلانى** ھاسىل قىلىش ئۈچۈن `create_site_plan` ئىقتىدارىنى چاقىرىدۇ. پىلان تۆۋەندىكىلەرنى تەسۋىرلەيدۇ:

- **نىشان** — تاماملانغان تور بېكەت نېمە قىلىشى كېرەك
- **باسقۇچلار** — تەرتىپلەنگەن قەدەم گۇرۇپپىلىرى (مەسىلەن _تەڭشەش_, _مەزمۇن تۈرلىرى_, _لايىھە_, _مەزمۇن_)
- **قەدەملەر** — ھەر بىر باسقۇچ ئىچىدىكى ئايرىم ئىقتىدار چاقىرىشلىرى
- **Plugin تەلەپلىرى** — مەلۇم قەدەملەرنىڭ ئىجرا بولۇشى ئۈچۈن ئاكتىپ بولۇشى كېرەك بولغان plugin لار
- **زاپاس تاللاشلار** — ئاساسىي قەدەم مەغلۇپ بولسا ئىشلىتىلىدىغان باشقا قەدەملەر

**مىسال پىلان (قىسقارتىلغان)**

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

### 2. Plugin بايقاش

ئىجرا باشلىنىشتىن بۇرۇن، ماسلاشتۇرغۇچ پىلاننىڭ `plugin_requirements` نى تەكشۈرۈپ، قايسى plugin لارنىڭ ئاللىقاچان ئاكتىپ ئىكەنلىكىنى تەكشۈرىدۇ. كەم بولغان plugin لار ئۈچۈن، ئۇ:

1. ئەڭ ياخشى ماس كېلىدىغاننى تېپىش ئۈچۈن `recommend_plugin` ئارقىلىق تىزىملىكنى ئىزدەيدۇ
2. تەۋسىيەنى جەزملەشتۈرۈش ئۈچۈن ۋاكالەتچىگە ئەسكەرتىش بېرىدۇ
3. تەستىقلانسا (ياكى تەڭشەكلەردە ئاپتوماتىك ئورنىتىش قوزغىتىلغان بولسا) ئورنىتىشنى قوزغىتىدۇ

Plugin بايقاش مەغلۇبىيەتلىرى ئەجەللىك ئەمەس — ماسلاشتۇرغۇچ تەسىرگە ئۇچرىغان قەدەملەرنى `skipped` دەپ بەلگىلەپ، پىلاننىڭ قالغان قىسمى بىلەن داۋاملىشىدۇ.

### 3. پىلان ئىجرا قىلىش

ماسلاشتۇرغۇچ پىلان ID سى بىلەن `execute_site_plan` نى چاقىرىدۇ. ئىجرا باسقۇچمۇ-باسقۇچ، قەدەممۇ-قەدەم داۋاملىشىدۇ:

- **قەدەم نەقىللىرى** (`__ref:` ئالدى قوشۇلغۇچىسى) — قەدەملەر ئالدىنقى قەدەملەرنىڭ چىقىرىشلىرىنى نەقىل قىلالايدۇ. يۇقىرىدىكى مىسالدا، `__ref:create_menu.menu_id` بولسا `create_menu` قەدىمى قايتۇرغان `menu_id` غا ھەل قىلىنىدۇ.
- **پاراللېل قەدەملەر** — ئوخشاش باسقۇچ ئىچىدىكى ئۆزئارا تايىنىشچانلىقى يوق قەدەملەر `parallel` بايرىقى تەڭشەلگەندە بىرلا ۋاقىتتا يوللىنىدۇ.
- **قەدەم ۋاقىت چېكى** — ھەر بىر قەدەمنىڭ ئايرىم ۋاقىت چېكى بار (كۆڭۈلدىكى: `Ability Timeout` تەڭشىكى). ۋاقتى ئېشىپ كەتكەن قەدەم `failed` دەپ بەلگىلىنىدۇ ۋە پىلان داۋاملىشىدۇ.

### 4. ئىلگىرىلەشنى ئىزلاش

ئىجرا ھالىتىنى تەكشۈرۈش ئۈچۈن خالىغان ۋاقىتتا `get_plan_progress` نى چاقىرىڭ:

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

WP-CLI ئىشلەتكۈچىلەر ئىلگىرىلەشنى تۆۋەندىكىچە كۆزىتىپ تۇرالايدۇ:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. خاتالىقتىن ئەسلىگە كېلىش

بىر قەدەم مەغلۇپ بولغاندا، ماسلاشتۇرغۇچ پىلاندا بېكىتىلگەن **زاپاس** قەدەمنىڭ بار-يوقلۇقىنى تەكشۈرىدۇ:

- **زاپاس تاللاش بار** — زاپاس قەدەم دەرھال سىنىلىدۇ. ئەگەر ئۇ مۇۋەپپەقىيەتلىك بولسا، ئىجرا داۋاملىشىدۇ. ئەگەر ئۇمۇ مەغلۇپ بولسا، قەدەم `failed` دەپ بەلگىلىنىدۇ ۋە ئىجرا كېيىنكى قەدەم بىلەن داۋاملىشىدۇ.
- **زاپاس تاللاش يوق** — قەدەم `failed` دەپ بەلگىلىنىدۇ. مۇھىم بولمىغان قەدەملەر ئاتلاپ كېتىلىدۇ؛ مۇھىم قەدەملەر (`required: true` دەپ بەلگىلەنگەن) نۆۋەتتىكى باسقۇچنى توختىتىپ، باسقۇچ دەرىجىلىك ئەسلىگە كېلىش ئۇرۇنۇشىنى قوزغىتىدۇ.

ۋاكالەتچى بارلىق مەغلۇبىيەتلەرنى ئاخىرقى پىلان خۇلاسىسىدە دوكلات قىلىدۇ ۋە ئەسلىگە كەلتۈرگىلى بولمايدىغان خاتالىقلار ئۈچۈن قولدا تۈزىتىش قەدەملىرىنى تەۋسىيە قىلىشى مۇمكىن.

---

## تور بېكەت پىلانى ئىقتىدارلىرى

### `create_site_plan`

تەبىئىي تىلدىكى نىشان تەسۋىرىدىن قۇرۇلمىلىق تور بېكەت پىلانى ھاسىل قىلىدۇ.

**پارامېتىرلار**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | ئارزۇ قىلىنغان تور بېكەتنىڭ تەبىئىي تىلدىكى تەسۋىرى |
| `style` | string | No | كۆرۈنۈش ئۇسلۇبى مايىللىقى: `minimal`, `bold`, `professional`, `playful`. كۆڭۈلدىكى: ۋاكالەتچى نىشانغا ئاساسەن تاللايدۇ |
| `plugins` | array | No | پىلانغا كىرگۈزۈلىدىغان plugin slug لىرى. ماسلاشتۇرغۇچ لازىملىق plugin لارنى ئاپتوماتىك قوشىدۇ. |
| `dry_run` | boolean | No | ئەگەر `true` بولسا، پىلان JSON نى ساقلىماي ياكى ئىجرا قىلماي قايتۇرىدۇ. كۆڭۈلدىكى `false` |

**قايتۇرىدۇ** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

ئىلگىرى ھاسىل قىلىنغان تور بېكەت پىلانىنى ئىجرا قىلىشنى باشلايدۇ.

**پارامېتىرلار**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ئىجرا قىلىنىدىغان پىلاننىڭ ID سى |
| `auto_install_plugins` | boolean | No | ئەگەر `true` بولسا، زۆرۈر plugin لارنى جەزملەشتۈرمەيلا ئاپتوماتىك ئورنىتىدۇ. كۆڭۈلدىكى قىممەت `false` |
| `max_retries` | integer | No | مەغلۇپ بولغان بىر قەدەمنى داۋاملاشتۇرۇشتىن بۇرۇن قايتا سىناش قېتىم سانى. كۆڭۈلدىكى قىممەت `1` |

**قايتۇرىدۇ** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

بىر بېكەت پىلانىنىڭ نۆۋەتتىكى ئىجرا ھالىتىنى قايتۇرىدۇ.

**پارامېتىرلار**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | سۈرۈشتۈرىدىغان پىلان ID سى |

**قايتۇرىدۇ** يۇقىرىدىكى [ئىلگىرىلەشنى ئىز قوغلاش](#4-progress-tracking) دا تەسۋىرلەنگەن ئىلگىرىلەش ئوبيېكتىنى.

---

### `handle_plan_error`

مەغلۇپ بولغان بىر قەدەمنى قولدا ھەل قىلىپ، پىلان ئىجراسىنى كېيىنكى قەدەمدىن باشلاپ داۋاملاشتۇرىدۇ. ئاپتوماتىك ئەسلىگە كەلتۈرۈش مۇمكىن بولمىغاندا ۋە ئۆزىڭىز ئارىلىشىشنى خالىغاندا بۇنى ئىشلىتىڭ.

**پارامېتىرلار**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | پىلان ID سى |
| `step_id` | string | Yes | مەغلۇپ بولغان قەدەمنىڭ ID سى |
| `resolution` | string | Yes | `skip` (ئاتلاپ داۋاملاشتۇرۇش)، `retry` (قەدەمنى دەرھال قايتا سىناش)، ياكى `mark_done` (قايتا ئىجرا قىلماي مۇۋەپپەقىيەتلىك دەپ قاراش) نىڭ بىرى |

**قايتۇرىدۇ** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 بىلەن v2 نى سېلىشتۇرۇش

| ئىقتىدار | v1 | v2 |
|---|---|---|
| كۆپ باسقۇچلۇق پىلانلار | ياق | ھەئە |
| قەدەم چىقىرىش نەتىجىسى پايدىلىنىشلىرى (`__ref:`) | ياق | ھەئە |
| Plugin بايقاش | قولدا | ئاپتوماتىك |
| ئىلگىرىلەشنى ئىز قوغلاش API | ياق | ھەئە |
| خاتالىقتىن ئەسلىگە كەلتۈرۈش | مەغلۇپ بولۇپ توختاش | زاپاس ئۇسۇل + داۋاملاشتۇرۇش |
| پاراللېل قەدەم ئىجرا قىلىش | ياق | ھەئە (ھەر باسقۇچتا تاللاپ ئېچىش) |
| WP-CLI پىلان بۇيرۇقلىرى | ياق | ھەئە |
| Benchmark بىرلەشتۈرۈش | ياق | ھەئە (`q-restaurant-website`) |

---

## WP-CLI پىلان بۇيرۇقلىرى

### `wp gratis-ai-agent plan create`

نىشان تەسۋىرىدىن بىر بېكەت پىلانى ھاسىل قىلىدۇ.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

ئىلگىرى ھاسىل قىلىنغان پىلاننى ئىجرا قىلىدۇ.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

ئىجرا قىلىنىۋاتقان ياكى تاماملانغان پىلاننىڭ نۆۋەتتىكى ئىلگىرىلەشىنى كۆرسىتىدۇ.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

بارلىق بېكەت پىلانلىرىنى (كۈتۈۋاتقان، ئىجرا قىلىنىۋاتقان ۋە تاماملانغان) تىزىپ كۆرسىتىدۇ.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

مەغلۇپ بولغان پىلاننى باشتىن قايتا ئىجرا قىلغىلى بولسۇن دەپ `pending` ھالىتىگە قايتا تەڭشەيدۇ.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
