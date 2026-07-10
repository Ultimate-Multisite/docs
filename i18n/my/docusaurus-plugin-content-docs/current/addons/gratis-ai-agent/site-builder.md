---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0 တွင် မိတ်ဆက်ခဲ့သည်) သည် အဆင့်ဆင့် ဝဘ်ဆိုဒ်တည်ဆောက်ခြင်းကို စွမ်းဆောင်ပေးသည့် အင်ဂျင်တစ်ခုဖြစ်သည်။ အကယ်၍ သင်သည် agent ကို "စားသောက်ဆိုင် ဝဘ်ဆိုဒ်တစ်ခု တည်ဆောက်ပါ" သို့မဟုတ် "ဘလော့ဂ်ပါတဲ့ ပရိုဖိုင်တွဲတစ်ခု ဖန်တီးပါ" ဟု မေးမြန်းပါက၊ ဤ orchestrator သည် ထိုအဆင့်မြင့် ရည်ရွယ်ချက်ကို စနစ်တကျ **အစီအစဉ် (plan)** အဖြစ် ခွဲခြမ်းစိတ်ဖြာပေးသည်၊ ၎င်းကို အကောင်အထည်ဖော်ရန် လိုအပ်သည့် plugins များကို ရှာဖွေပေးသည်၊ အဆင့်တစ်ခုချင်းစီကို အစဉ်လိုက် လုပ်ဆောင်ပေးသည်၊ တိုးတက်မှုကို စောင့်ကြည့်ပေးသည်၊ နှင့် အမှားများမှ ကိုယ်ပိုင် ပြန်လည်ကောင်းမွန်စေသည်။

---

## အလုပ်လုပ်ပုံ {#how-it-works}

### ၁။ အစီအစဉ် ဖန်တီးခြင်း (Plan Generation) {#1-plan-generation}

agent သည် ဝဘ်ဆိုဒ်တည်ဆောက်ရန် ညွှန်ကြားချက်တစ်ခု ရရှိသည့်အခါ၊ ၎င်းသည် JSON **site plan** တစ်ခုထုတ်ပေးရန် `create_site_plan` စွမ်းရည်ကို ခေါ်ဆိုသည်။ ဤအစီအစဉ်တွင် အောက်ပါအချက်များ ပါဝင်သည်-

- **Goal** — အပြီးသတ် ဝဘ်ဆိုဒ်က ဘာလုပ်ဆောင်သင့်သလဲ
- **Phases** — အဆင့်များ စုစည်းထားသည့် အစီအစဉ် (ဥပမာ- _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — အဆင့်တစ်ခုချင်းစီအတွင်းရှိ သီးခြား စွမ်းရည်ခေါ်ဆိုမှုများ
- **Plugin requirements** — အချို့အဆင့်များ အလုပ်လုပ်ရန် လိုအပ်သည့် plugins များ
- **Fallbacks** — အဓိကအဆင့်တစ်ခု ပျက်ကွက်ပါက အသုံးပြုနိုင်သည့် အခြားရွေးချယ်စရာ အဆင့်များ

**ဥပမာ အစီအစဉ် (အတိုချုပ်)**

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

### ၂။ Plugin ရှာဖွေခြင်း (Plugin Discovery) {#2-plugin-discovery}

အကောင်အထည်ဖော်မှု မစမီ၊ orchestrator သည် အစီအစဉ်၏ `plugin_requirements` ကို စစ်ဆေးပြီး မည်သည့် plugins များက အလုပ်လုပ်နေပြီလဲဆိုတာ စစ်ဆေးသည်။ ပျောက်ဆုံးနေသော plugins များအတွက်၊ ၎င်းသည်-

၁။ `recommend_plugin` မှတစ်ဆင့် အကောင်းဆုံး ကိုက်ညီမှုကို ရှာဖွေသည်
၂။ အကြံပြုချက်ကို အတည်ပြုရန် agent ကို မေးမြန်းသည်
၃။ ခွင့်ပြုချက်ရပါက (သို့မဟုတ် settings တွင် auto-install ကို ဖွင့်ထားပါက) တပ်ဆင်ခြင်းကို လုပ်ဆောင်ပေးသည်

Plugin ရှာဖွေမှု အမှားများသည် အကြီးအကျယ် မပြဿနာဖြစ်စေသော အရာများဖြစ်သည်။ ၎င်းသည် ထိခိုက်မှုရှိသော အဆင့်များကို `skipped` အဖြစ် မှတ်သားပြီး အစီအစဉ်၏ ကျန်အပိုင်းများကို ဆက်လက်လုပ်ဆောင်သည်။

### ၃။ အစီအစဉ် အကောင်အထည်ဖော်ခြင်း (Plan Execution) {#3-plan-execution}

orchestrator သည် plan ID ဖြင့် `execute_site_plan` ကို ခေါ်ဆိုသည်။ အကောင်အထည်ဖော်မှုသည် အဆင့်များအလိုက်၊ အဆင့်တစ်ခုချင်းစီအလိုက် ဆက်လက်လုပ်ဆောင်သည်။

- **Step references** (`__ref:` prefix) — အဆင့်များသည် ယခင်အဆင့်များမှ ထုတ်ပေးသည့် ရလဒ်များကို ကိုးကားနိုင်သည်။ အထက်ပါ ဥပမာတွင်၊ `__ref:create_menu.menu_id` ကို `create_menu` အဆင့်မှ ပြန်ပေးသည့် `menu_id` အဖြစ် ဖြေရှင်းပေးသည်။
- **Parallel steps** — အဆင့်များ တူညီသော အဆင့်အုပ်စုအတွင်းရှိပြီး အချင်းချင်း မှီခိုမှုမရှိသည့် အဆင့်များကို `parallel` flag ကို သတ်မှတ်ထားပါက တစ်ပြိုင်နက်တည်း ခွဲဝေပေးသည်။
- **Step timeout** — အဆင့်တစ်ခုစီတွင် သီးခြား အချိန်ကန့်သတ်ချက် (default: `Ability Timeout` setting) ရှိသည်။ အချိန်ကုန်သွားသော အဆင့်ကို `failed` အဖြစ် မှတ်သားပြီး အစီအစဉ်သည် ဆက်လက်လုပ်ဆောင်သည်။

### ၄။ တိုးတက်မှု ခြေရာခံခြင်း (Progress Tracking) {#4-progress-tracking}

အကောင်အထည်ဖော်မှု အခြေအနေကို စစ်ဆေးရန် မည်သည့်အချိန်မဆို `get_plan_progress` ကို ခေါ်ဆိုပါ။

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

WP-CLI အသုံးပြုသူများသည် အောက်ပါအတိုင်း တိုးတက်မှုကို စောင့်ကြည့်နိုင်သည်-

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### ၅။ အမှား ပြန်လည်ဖြေရှင်းခြင်း (Error Recovery) {#5-error-recovery}

အဆင့်တစ်ခု ပျက်ကွက်ပါက၊ orchestrator သည် အစီအစဉ်တွင် သတ်မှတ်ထားသည့် **fallback** အဆင့်ကို စစ်ဆေးသည်။

- **Fallback ရှိခြင်း** — fallback အဆင့်ကို ချက်ချင်းကြိုးစားသည်။ အကယ်၍ ၎င်းအောင်မြင်ပါက၊ အကောင်အထည်ဖော်မှုသည် ဆက်လက်လုပ်ဆောင်သည်။ ၎င်းလည်း ပျက်ကွက်ပါက၊ အဆင့်ကို `failed` အဖြစ် မှတ်သားပြီး နောက်အဆင့်ဖြင့် ဆက်လက်လုပ်ဆောင်သည်။
- **Fallback မရှိခြင်း** — အဆင့်ကို `failed` အဖြစ် မှတ်သားသည်။ အရေးမကြီးသော အဆင့်များကို ကျော်လွန်သွားသည် (skipped)။ အရေးကြီးသော အဆင့်များ (required: true ဖြင့် မှတ်သားထားသည်) သည် လက်ရှိ အဆင့်အုပ်စုကို ရပ်တန့်စေပြီး အဆင့်အုပ်စုအဆင့် ပြန်လည်ကောင်းမွန်စေရန် ကြိုးပမ်းမှုတစ်ခုကို ဖြစ်ပေါ်စေသည်။

agent သည် အမှားအားလုံးကို နောက်ဆုံး အစီအစဉ် အကျဉ်းချုပ်တွင် အစီရင်ခံပေးမည်ဖြစ်ပြီး ပြန်လည်ကောင်းမွန်စေရန် ခက်ခဲသော အမှားများအတွက် လက်ဖြင့် ပြုပြင်ရမည့် အဆင့်များကို အကြံပြုနိုင်ပါသည်။

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

သဘာဝဘာသာစကား ရည်ရွယ်ချက်ဖော်ပြချက်မှ စနစ်တကျ ဝဘ်ဆိုဒ်အစီအစဉ်ကို ဖန်တီးပေးသည်။

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | လိုချင်သော ဝဘ်ဆိုဒ်၏ သဘာဝဘာသာစကား ဖော်ပြချက် |
| `style` | string | No | ရုပ်ပိုင်းဆိုင်ရာ စတိုင် နှစ်သက်မှု: `minimal`, `bold`, `professional`, `playful`။ default: agent သည် ရည်ရွယ်ချက်အပေါ် မူတည်၍ ရွေးချယ်သည် |
| `plugins` | array | No | အစီအစဉ်တွင် ထည့်သွင်းလိုသော plugin slugs များ။ လိုအပ်သော plugins များကို orchestrator က အလိုအလျောက် ထည့်ပေးသည်။ |
| `dry_run` | boolean | No | `true` ဖြစ်ပါက၊ သိမ်းဆည်းခြင်း သို့မဟုတ် အကောင်အထည်ဖော်ခြင်းမရှိဘဲ အစီအစဉ် JSON ကို ပြန်ပေးသည်။ default `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

ယခင်က ဖန်တီးထားသော ဝဘ်ဆိုဒ်အစီအစဉ်ကို အကောင်အထည်ဖော်ခြင်းကို စတင်သည်။

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | အကောင်အထည်ဖော်မည့် အစီအစဉ် ID |
| `auto_install_plugins` | boolean | No | `true` ဖြစ်ပါက၊ အတည်ပြုချက်မလိုဘဲ လိုအပ်သော plugins များကို အလိုအလျောက် တပ်ဆင်ပေးသည်။ default `false` |
| `max_retries` | integer | No | ရှေ့ဆက်မသွားမီ ပျက်ကွက်သော အဆင့်ကို ပြန်ကြိုးစားမည့် အကြိမ်အရေအတွက်။ default `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

ဝဘ်ဆိုဒ်အစီအစဉ်၏ လက်ရှိ အကောင်အထည်ဖော်မှု အခြေအနေကို ပြန်ပေးသည်။

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | မေးမြန်းလိုသည့် Plan ID |

**Returns** အထက်ပါ [Progress Tracking](#4-progress-tracking) တွင် ဖော်ပြထားသည့် progress object ကို ပြန်ပေးသည်။

---

### `handle_plan_error` {#handleplanerror}

ပျက်ကွက်သော အဆင့်တစ်ခုကို လက်ဖြင့် ဖြေရှင်းပြီး နောက်အဆင့်မှ အစီအစဉ် အကောင်အထည်ဖော်မှုကို ပြန်လည်စတင်သည်။ အလိုအလျောက် ပြန်လည်ကောင်းမွန်စေခြင်း မဖြစ်နိုင်ဘဲ သင်ကိုယ်တိုင် ကြားဝင်ဆောင်ရွက်လိုသည့်အခါ ဤအရာကို အသုံးပြုပါ။

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | ပျက်ကွက်သော အဆင့် ID |
| `resolution` | string | Yes | `skip` (ကျော်လွန်ပြီး ဆက်လုပ်မည်), `retry` (အဆင့်ကို ချက်ချင်းပြန်ကြိုးစားမည်), သို့မဟုတ် `mark_done` (ပြန်မလုပ်ဘဲ အောင်မြင်သည်ဟု သတ်မှတ်မည်) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 နှင့် v2 နှိုင်းယှဉ်ချက် {#comparing-v1-and-v2}

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

ရည်ရွယ်ချက်ဖော်ပြချက်မှ ဝဘ်ဆိုဒ်အစီအစဉ်ကို ဖန်တီးပေးသည်။

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

ယခင်က ဖန်တီးထားသော အစီအစဉ်ကို အကောင်အထည်ဖော်သည်။

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

အကောင်အထည်ဖော်နေသော သို့မဟုတ် ပြီးစီးသွားသော အစီအစဉ်၏ လက်ရှိ တိုးတက်မှုကို ပြသသည်။

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

ဝဘ်ဆိုဒ်အစီအစဉ်အားလုံးကို (စောင့်ဆိုင်းနေသော၊ အကောင်အထည်ဖော်နေသော၊ နှင့် ပြီးစီးသော) စာရင်းပြုစုသည်။

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

ပျက်ကွက်သွားသော အစီအစဉ်ကို `pending` အဖြစ် ပြန်လည်သတ်မှတ်ပေးပြီး အစမှ ပြန်လည်အကောင်အထည်ဖော်နိုင်စေသည်။

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
