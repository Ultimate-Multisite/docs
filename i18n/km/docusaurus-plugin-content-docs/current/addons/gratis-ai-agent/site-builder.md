---
title: ការសម្របសម្រួលកម្មវិធីបង្កើតគេហទំព័រ v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# ការសម្របសម្រួល Site Builder v2

ការសម្របសម្រួល Site Builder v2 (បានណែនាំក្នុង Gratis AI Agent v1.4.0) គឺជា​ម៉ាស៊ីន​ដែលផ្តល់ថាមពលដល់ការបង្កើតគេហទំព័រ​ច្រើនជំហាន។ នៅពេលអ្នកស្នើឱ្យ agent "បង្កើតគេហទំព័រភោជនីយដ្ឋាន" ឬ "បង្កើត portfolio ដែលមាន blog" orchestrator នឹងបំបែកគោលដៅកម្រិតខ្ពស់នោះជា **ផែនការ** ដែលមានរចនាសម្ព័ន្ធ ស្វែងរក plugin ដែលត្រូវការ ដើម្បីបំពេញវា ប្រតិបត្តិជំហាននីមួយៗតាមលំដាប់ តាមដានវឌ្ឍនភាព និងស្តារឡើងវិញពីកំហុសដោយស្វ័យប្រវត្តិ។

---

## វាដំណើរការយ៉ាងដូចម្តេច

### 1. ការបង្កើតផែនការ

នៅពេល agent ទទួលបានសេចក្តីណែនាំសម្រាប់បង្កើតគេហទំព័រ វានឹងហៅសមត្ថភាព `create_site_plan` ដើម្បីបង្កើត **ផែនការគេហទំព័រ** ជា JSON។ ផែនការនេះពិពណ៌នាអំពី៖

- **គោលដៅ** — អ្វីដែលគេហទំព័រដែលបានបញ្ចប់គួរធ្វើ
- **ដំណាក់កាល** — ក្រុមជំហានដែលបានរៀបតាមលំដាប់ (ឧ. _ការរៀបចំ_, _ប្រភេទមាតិកា_, _ការរចនា_, _មាតិកា_)
- **ជំហាន** — ការហៅសមត្ថភាពនីមួយៗក្នុងដំណាក់កាលនីមួយៗ
- **តម្រូវការ plugin** — plugin ដែលត្រូវតែសកម្ម ដើម្បីឱ្យជំហានខ្លះដំណើរការ
- **ជម្រើសបម្រុង** — ជំហានជំនួស ប្រសិនបើជំហានចម្បងបរាជ័យ

**ឧទាហរណ៍ផែនការ (បានកាត់ឱ្យខ្លី)**

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

### 2. ការស្វែងរក Plugin

មុនពេលចាប់ផ្តើមប្រតិបត្តិ orchestrator ស្កេន `plugin_requirements` របស់ផែនការ ហើយពិនិត្យមើលថា plugin ណាខ្លះសកម្មរួចហើយ។ សម្រាប់ plugin ដែលខ្វះ វានឹង៖

1. ស្វែងរកក្នុង registry តាមរយៈ `recommend_plugin` ដើម្បីរកការផ្គូផ្គងល្អបំផុត
2. ស្នើឱ្យ agent បញ្ជាក់ការណែនាំ
3. ចាប់ផ្តើមការដំឡើង ប្រសិនបើបានអនុម័ត (ឬប្រសិនបើ auto-install ត្រូវបានបើកក្នុងការកំណត់)

ការបរាជ័យក្នុងការស្វែងរក plugin មិនធ្ងន់ធ្ងរទេ — orchestrator កំណត់ជំហានដែលរងផលប៉ះពាល់ជា `skipped` ហើយបន្តជាមួយផ្នែកដែលនៅសល់នៃផែនការ។

### 3. ការប្រតិបត្តិផែនការ

orchestrator ហៅ `execute_site_plan` ជាមួយ plan ID។ ការប្រតិបត្តិដំណើរការពីដំណាក់កាលមួយទៅដំណាក់កាលមួយ និងពីជំហានមួយទៅជំហានមួយ៖

- **ការយោងជំហាន** (បុព្វបទ `__ref:`) — ជំហានអាចយោងលទ្ធផលពីជំហានមុនៗ។ ក្នុងឧទាហរណ៍ខាងលើ `__ref:create_menu.menu_id` ត្រូវបានដោះស្រាយទៅជា `menu_id` ដែលបានត្រឡប់ដោយជំហាន `create_menu`។
- **ជំហានស្របគ្នា** — ជំហានក្នុងដំណាក់កាលដូចគ្នាដែលមិនមានភាពពឹងផ្អែកគ្នា ត្រូវបានបញ្ជូនឱ្យដំណើរការព្រមគ្នា នៅពេល flag `parallel` ត្រូវបានកំណត់។
- **ពេលវេលាផុតកំណត់របស់ជំហាន** — ជំហាននីមួយៗមានពេលវេលាផុតកំណត់ផ្ទាល់ខ្លួន (លំនាំដើម៖ ការកំណត់ `Ability Timeout`)។ ជំហានដែលផុតពេលត្រូវបានកំណត់ជា `failed` ហើយផែនការបន្តដំណើរការ។

### 4. ការតាមដានវឌ្ឍនភាព

ហៅ `get_plan_progress` នៅពេលណាក៏បាន ដើម្បីពិនិត្យស្ថានភាពប្រតិបត្តិការ៖

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

អ្នកប្រើ WP-CLI អាចតាមដានវឌ្ឍនភាពដោយ៖

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. ការស្តារកំហុស

នៅពេលជំហានមួយបរាជ័យ orchestrator ពិនិត្យរកជំហាន **ជម្រើសបម្រុង** ដែលបានកំណត់ក្នុងផែនការ៖

- **មានជម្រើសបម្រុង** — ជំហានបម្រុងត្រូវបានសាកល្បងភ្លាមៗ។ ប្រសិនបើវាជោគជ័យ ការប្រតិបត្តិបន្ត។ ប្រសិនបើវាក៏បរាជ័យផងដែរ ជំហានត្រូវបានកំណត់ជា `failed` ហើយការប្រតិបត្តិបន្តទៅជំហានបន្ទាប់។
- **គ្មានជម្រើសបម្រុង** — ជំហានត្រូវបានកំណត់ជា `failed`។ ជំហានដែលមិនសំខាន់ត្រូវបានរំលង។ ជំហានសំខាន់ៗ (បានសម្គាល់ `required: true`) នឹងបញ្ឈប់ដំណាក់កាលបច្ចុប្បន្ន ហើយចាប់ផ្តើមការស្តារកម្រិតដំណាក់កាល។

agent រាយការណ៍ការបរាជ័យទាំងអស់នៅក្នុងសេចក្តីសង្ខេបផែនការចុងក្រោយ ហើយអាចណែនាំជំហានកែសម្រួលដោយដៃ សម្រាប់កំហុសដែលមិនអាចស្តារឡើងវិញបាន។

---

## សមត្ថភាពផែនការគេហទំព័រ

### `create_site_plan`

បង្កើតផែនការគេហទំព័រដែលមានរចនាសម្ព័ន្ធ ពីការពិពណ៌នាគោលដៅជាភាសាធម្មជាតិ។

**ប៉ារ៉ាម៉ែត្រ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | ការពិពណ៌នាជាភាសាធម្មជាតិអំពីគេហទំព័រដែលចង់បាន |
| `style` | string | No | ចំណូលចិត្តរចនាប័ទ្មរូបរាង៖ `minimal`, `bold`, `professional`, `playful`។ លំនាំដើម៖ agent ជ្រើសតាមគោលដៅ |
| `plugins` | array | No | slug របស់ plugin ដែលត្រូវបញ្ចូលក្នុងផែនការ។ orchestrator បន្ថែម plugin ដែលត្រូវការដោយស្វ័យប្រវត្តិ។ |
| `dry_run` | boolean | No | ប្រសិនបើ `true` ត្រឡប់ JSON របស់ផែនការ ដោយមិនរក្សាទុក ឬប្រតិបត្តិវា។ លំនាំដើម `false` |

**ត្រឡប់** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

ចាប់ផ្តើមប្រតិបត្តិផែនការគេហទំព័រដែលបានបង្កើតពីមុន។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `plan_id` | string | បាទ/ចាស | ID នៃផែនការដែលត្រូវដំណើរការ |
| `auto_install_plugins` | boolean | ទេ | ប្រសិនបើ `true` នឹងដំឡើង plugin ដែលត្រូវការដោយស្វ័យប្រវត្តិ ដោយមិនបាច់បញ្ជាក់។ លំនាំដើម `false` |
| `max_retries` | integer | ទេ | ចំនួនដងដែលត្រូវព្យាយាមជំហានដែលបរាជ័យឡើងវិញ មុននឹងបន្តទៅមុខ។ លំនាំដើម `1` |

**ត្រឡប់** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

ត្រឡប់ស្ថានភាពដំណើរការបច្ចុប្បន្ននៃផែនការគេហទំព័រ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `plan_id` | string | បាទ/ចាស | ID ផែនការដែលត្រូវសួររក |

**ត្រឡប់** វត្ថុវឌ្ឍនភាពដែលបានពិពណ៌នានៅក្នុង [ការតាមដានវឌ្ឍនភាព](#4-progress-tracking) ខាងលើ។

---

### `handle_plan_error`

ដោះស្រាយជំហានដែលបរាជ័យដោយដៃ ហើយបន្តដំណើរការផែនការពីជំហានបន្ទាប់។ ប្រើវានៅពេលការសង្គ្រោះដោយស្វ័យប្រវត្តិមិនអាចធ្វើបាន ហើយអ្នកចង់អន្តរាគមន៍។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `plan_id` | string | បាទ/ចាស | ID ផែនការ |
| `step_id` | string | បាទ/ចាស | ID នៃជំហានដែលបរាជ័យ |
| `resolution` | string | បាទ/ចាស | មួយក្នុងចំណោម `skip` (រំលង ហើយបន្ត), `retry` (ព្យាយាមជំហានឡើងវិញភ្លាមៗ), ឬ `mark_done` (ចាត់ទុកថាជោគជ័យដោយមិនដំណើរការឡើងវិញ) |

**ត្រឡប់** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## ការប្រៀបធៀប v1 និង v2

| មុខងារ | v1 | v2 |
|---|---|---|
| ផែនការច្រើនដំណាក់កាល | ទេ | បាទ/ចាស |
| សេចក្តីយោងលទ្ធផលជំហាន (`__ref:`) | ទេ | បាទ/ចាស |
| ការរកឃើញ plugin | ដោយដៃ | ដោយស្វ័យប្រវត្តិ |
| API តាមដានវឌ្ឍនភាព | ទេ | បាទ/ចាស |
| ការសង្គ្រោះកំហុស | បរាជ័យហើយឈប់ | ជម្រើសបម្រុង + បន្ត |
| ការដំណើរការជំហានស្របគ្នា | ទេ | បាទ/ចាស (ជ្រើសបើកតាមដំណាក់កាល) |
| ពាក្យបញ្ជាផែនការ WP-CLI | ទេ | បាទ/ចាស |
| ការរួមបញ្ចូល benchmark | ទេ | បាទ/ចាស (`q-restaurant-website`) |

---

## ពាក្យបញ្ជាផែនការ WP-CLI

### `wp gratis-ai-agent plan create`

បង្កើតផែនការគេហទំព័រពីការពិពណ៌នាគោលដៅ។

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

ដំណើរការផែនការដែលបានបង្កើតពីមុន។

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

បង្ហាញវឌ្ឍនភាពបច្ចុប្បន្នសម្រាប់ផែនការដែលកំពុងដំណើរការ ឬបានបញ្ចប់។

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

រាយបញ្ជីផែនការគេហទំព័រទាំងអស់ (កំពុងរង់ចាំ កំពុងដំណើរការ និងបានបញ្ចប់)។

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

កំណត់ផែនការដែលបរាជ័យឡើងវិញទៅ `pending` ដើម្បីឱ្យអាចដំណើរការឡើងវិញពីដំបូង។

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
