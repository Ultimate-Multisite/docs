---
title: Site Builder Samanvaya v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0 मा परिचय কৰা) হৈছে বহু-ধাপৰ ওয়েবসাইট নিৰ্মাণক শক্তি যোগোৱা ইঞ্জিন। যেতিয়া আপুনি এজেণ্টক "এটা ресторанৰ ওয়েবসাইট বনাওক" বা "এটা ব্লগ সহ প’ৰ্টফলিও বনাওক" বুলি ক’লে, তেতিয়া এই অৰকেষ্ট্ৰেটৰ (orchestrator) সেই উচ্চ-স্তৰৰ লক্ষ্যটো এটা সুসংগঠিত **প্ৰিকল্পনা (plan)** ত ভাঙি দিয়ে, ইয়াক পূৰণ কৰিবলৈ প্ৰয়োজনীয় প্লাগইনবোৰ বিচাৰি উলিয়ায়, প্ৰতিটো পদক্ষেপ ক্ৰম অনুসৰি কাৰ্যকৰী কৰে, প্ৰগতিৰ মটৱা কৰে, আৰু নিজে নিজে ভুল শুধৰাই আগুৱাই যায়।

---

## ই কেনেকৈ কাম কৰে

### ১. প্ৰিকল্পনা সৃষ্টি (Plan Generation)

এজেণ্টে ওয়েবসাইট বনাउने কোনো নিৰ্দেশনা পোৱাৰ লগে লগে, ই এটা JSON **সাইট প্ৰিকল্পনা (site plan)** তৈয়াৰ কৰিবলৈ `create_site_plan` ক্ষমতাটো (ability) কল কৰে। এই প্ৰিকল্পনালিয়ে তলত দিয়া বিষয়বোৰ বৰ্ণনা কৰে:

- **লক্ষ্য (Goal)** — শেষ হোৱা সাইটটোৱে কি কৰিব লাগে
- **ধাপাবলি (Phases)** — ক্ৰম অনুসৰি থকা পদক্ষেপৰ গোট (উদাহৰণস্বৰূপে, _Setup_, _Content Types_, _Design_, _Content_)
- **পদক্ষেপ (Steps)** — প্ৰতিটো ধাপে থকা একক ক্ষমতা কল (individual ability calls)
- **প্লাগইনৰ প্ৰয়োজনীয়তা (Plugin requirements)** — কিছুমান পদক্ষেপ চলিবলৈ যি প্লাগইনবোৰ সক্ৰিয় থাকিব লাগিব
- **বিকল্প পথ (Fallbacks)** — যদি এটা প্ৰাথমিক পদক্ষেপ বিফল হয়, তেন্তে বিকল্প পদক্ষেপসমূহ

**উদাহৰণৰ প্ৰিকল্পনা (সংক্ষিপ্ত)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "অনলাইন মেনু, বুকিং ফৰ্ম আৰু যোগাযোগ পৃষ্ঠা সহ এটা ресторанৰ ওয়েবসাইট বনাওক",
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
    { "slug": "contact-form-7", "reason": "বুকিং আৰু যোগাযোগ ফৰ্মৰ বাবে প্ৰয়োজনীয়" }
  ]
}
```

### ২. প্লাগইনৰ আৱিষ্কাৰ (Plugin Discovery)

কাৰ্যকৰী কৰাৰ আগতে, অৰকেষ্ট্ৰেটৰে প্ৰিকল্পনাৰ `plugin_requirements` স্কেন কৰে আৰু কোন প্লাগইনবোৰ ইতিমধ্যে সক্ৰিয় আছে, সেয়া পৰীক্ষা কৰে। যদি কোনো প্লাগইন নাই, তেন্তে ই:

১. `recommend_plugin` ব্যৱস্থাৰ জৰিয়তে আটাইতকৈ উপযুক্ত প্লাগইনটো বিচাৰে
২. এজেণ্টক সেই নিৰ্দেশনাটো নিশ্চিত কৰিবলৈ কয়
৩. অনুমোদন কৰিলে প্লাগইনটো ইনষ্টল কৰে (অথবা যদি সেটিংছত auto-install সক্ষম কৰা থাকে)

প্লাগইন আৱিষ্কাৰত কোনো সমস্যা হ'লেও ই কোনো ডাঙৰ সমস্যা নহয় — অৰকেষ্ট্ৰেটৰে প্ৰভাৱিত পদক্ষেপবোৰক `skipped` বুলি চিহ্নিত কৰি প্ৰিকল্পনাৰ বাকী অংশৰে আগুৱাই যায়।

### ৩. প্ৰিকল্পনা কাৰ্যকৰী কৰা (Plan Execution)

অৰকেষ্ট্ৰেটৰে প্ৰিকল্পনা ID লৈ `execute_site_plan` কল কৰে। কাৰ্য্যনিৰ্বাহ ধাপে ধাপে, পদক্ষেপ অনুসৰি আগুৱাই যায়:

- **পদক্ষেপৰ প্ৰেৰ্শ্ৰেণ (Step references)** (`__ref:` প্ৰিফিক্স) — পদক্ষেপসমূহে পূৰ্বৰ পদক্ষেপৰ আউটপুটক উল্লেখ কৰিব পাৰে। ওপৰৰ উদাহৰণত, `__ref:create_menu.menu_id` ক `create_menu` পদক্ষেপৰ দ্বাৰা ঘূৰি অনা `menu_id` লৈ সমাধান কৰা হয়।
- **সমান্তৰ পদক্ষেপ (Parallel steps)** — এটা ধাপে থকা এনে পদক্ষেপসমূহ যিবোৰৰ মাজত কোনো আন্তঃ-পৰস্পৰ নিৰ্ভৰশীলতা নাই, সেইবোৰ `parallel` ফ্লাগ সেট কৰিলে একে সময়তে কাৰ্যকৰী কৰা হয়।
- **পদক্ষেপৰ সময়সীমা (Step timeout)** — প্ৰতিটো পদক্ষেপৰ এটা ব্যক্তিগত সময়সীমা থাকে (ডিফল্ট: `Ability Timeout` সেটিং)। সময়সীমা ভঙা পদক্ষেপটো `failed` বুলি চিহ্নিত হয় আৰু প্ৰিকল্পনালিয়ে আগুৱাই যায়।

### ৪. প্ৰগতিৰ মটৱা (Progress Tracking)

কাৰোবাৰকও কাৰ্য্যনিৰ্বাহৰ স্থিতি পৰীক্ষা কৰিবলৈ `get_plan_progress` কল কৰক:

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

WP-CLI ব্যৱহাৰকাৰীসকলে তলৰ ব্যৱস্থাৰে প্ৰগতি নিৰীক্ষণ কৰিব পাৰে:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### ৫. ভুল শুধৰাই আগুৱাকোৱা (Error Recovery)

যদি কোনো পদক্ষেপ বিফল হয়, তেন্তে অৰকেষ্ট্ৰেটৰে প্ৰিকল্পনাত সংজ্ঞায়িত এটা **বিকল্প পথ (fallback)** পদক্ষেপ আছে নে নাই, সেয়া পৰীক্ষা কৰে:

- **বিকল্প পথ উপলব্ধ (Fallback available)** — বিকল্প পথ পদক্ষেপটো তৎক্ষণাত চেষ্টা কৰা হয়। যদি ই সফল হয়, তেন্তে কাৰ্য্যনিৰ্বাহ অব্যাহত থাকে। যদি ইও বিফল হয়, তেন্তে পদক্ষেপটো `failed` বুলি চিহ্নিত হয় আৰু পৰৱৰ্তী পদক্ষেপৰে কাৰ্য্যনিৰ্বাহ অব্যাহত থাকে।
- **বিকল্প পথ নাই (No fallback)** — পদক্ষেপটো `failed` বুলি চিহ্নিত হয়। ন-প্ৰয়োজনীয় পদক্ষেপবোৰক এৰাই যায়; কিন্তু অতি প্ৰয়োজনীয় পদক্ষেপবোৰক (যি `required: true` বুলি চিহ্নিত কৰা হৈছে) বৰ্তমানৰ ধাপাবলিটো বন্ধ কৰি ধাপাবলি-স্তৰৰ পুনৰ্যুত্থান (phase-level recovery attempt) ট্ৰigger কৰে।

এজেণ্টে চূড়ান্ত প্ৰিকল্পনাৰ সাৰাংশত সকলো বিফলতা প্ৰতিবেদন কৰে আৰু পুনৰুদ্ধাৰ কৰিব নোৱাৰা ভুলসমূহৰ বাবে মানৱ হস্তক্ষেপৰ বাবে ব্যৱস্থা ল'বলৈ পৰামৰ্শ দিব পাৰে।

---

## Site Plan Abilities

### `create_site_plan`

এটা সাধাৰণ ভাষাৰ লক্ষ্য বৰ্ণনাৰ পৰা এটা সুসংগঠিত সাইট প্ৰিকল্পনা সৃষ্টি কৰে।

**পৰামৰ্শ (Parameters)**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | কাৰণীয় ওয়েবসাইটৰ সাধাৰণ ভাষাৰ বৰ্ণনা |
| `style` | string | No | দৃশ্যমান শৈলীৰ পছন্দ: `minimal`, `bold`, `professional`, `playful`। ডিফল্ট: এজেণ্টে লক্ষ্যৰ ওপৰত ভিত্তি কৰি বাছি লয় |
| `plugins` | array | No | প্ৰিকল্পনাত অন্তৰ্ভুক্ত কৰিবলগীয়া প্লাগইনৰ slugs। অৰকেষ্ট্ৰেটৰে প্ৰয়োজনীয় প্লাগইনবোৰ স্বয়ংক্রিয়ভাৱে যোগ কৰে। |
| `dry_run` | boolean | No | যদি `true` হয়, তেন্তে সেৱন কৰা বা কাৰ্যকৰী নকৰাকৈ প্ৰিকল্পনা JSON টো ঘূৰি দিয়ে। ডিফল্ট `false` |

**ফলাফল (Returns)** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

পূৰ্বে সৃষ্টি কৰা এটা সাইট প্ৰিকল্পনা কাৰ্যকৰী কৰিবলৈ আৰম্ভ কৰে।

**পৰামৰ্শ (Parameters)**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | কাৰ্য্যনিৰ্বাহ কৰিবলগীয়া প্ৰিকল্পনাৰ ID |
| `auto_install_plugins` | boolean | No | যদি `true` হয়, তেন্তে নিশ্চিতকৰণ নোহোৱাকৈ প্ৰয়োজনীয় প্লাগইনবোৰ স্বয়ংক্রিয়ভাৱে ইনষ্টল কৰে। ডিফল্ট `false` |
| `max_retries` | integer | No | আগুৱাই যোৱাৰ আগতে বিফল হোৱা পদক্ষেপটো কেইবাটাও সময়লৈ পুনৰ চেষ্টা কৰিব লাগে। ডিফল্ট `1` |

**ফলাফল (Returns)** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

এটা সাইট প্ৰিকল্পনাৰ বৰ্তমানৰ কাৰ্য্যনিৰ্বাহৰ স্থিতি ঘূৰি দিয়ে।

**পৰামৰ্শ (Parameters)**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | কোৱাৰ বাবে প্ৰিকল্পনা ID |

**ফলাফল (Returns)** ওপৰত দিয়া [Progress Tracking](#4-progress-tracking) ত বৰ্ণনা কৰা প্ৰগতি বস্তু (progress object)।

---

### `handle_plan_error`

এটা বিফল পদক্ষেপক হাতেৰে সমাধান কৰি প্ৰিকল্পনাৰ কাৰ্য্যনিৰ্বাহ পৰৱৰ্তী পদক্ষেপৰ পৰা পুনৰ আৰম্ভ কৰে। এইটো ব্যৱহাৰ কৰক যেতিয়া স্বয়ংক্রিয় পুনৰুদ্ধাৰ সম্ভৱ নহয় আৰু আপুনি হস্তক্ষেপ কৰিব বিচাৰে।

**পৰামৰ্শ (Parameters)**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | প্ৰিকল্পনা ID |
| `step_id` | string | Yes | বিফল হোৱা পদক্ষেপৰ ID |
| `resolution` | string | Yes | `skip` (এৰাই যোৱা আৰু আগুৱাই যোৱা), `retry` (পদক্ষেপটো তৎক্ষণাত পুনৰ চেষ্টা কৰা), বা `mark_done` (পুনৰ কাৰ্য্যনিৰ্বাহ নকৰাকৈ সফল বুলি গণ্য কৰা) |

**ফলাফল (Returns)** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 আৰু v2 ৰ তুলনা

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

## WP-CLI Plan Commands

### `wp gratis-ai-agent plan create`

এটা লক্ষ্য বৰ্ণনাৰ পৰা এটা সাইট প্ৰিকল্পনা সৃষ্টি কৰে।

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

পূৰ্বে সৃষ্টি কৰা এটা প্ৰিকল্পনা কাৰ্যকৰী কৰে।

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

কাৰ্য্যনিৰ্বাহ কৰা বা সম্পূৰ্ণ হোৱা প্ৰিকল্পনাৰ বৰ্তমানৰ প্ৰগতি দেখুৱায়।

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

সকলো সাইট প্ৰিকল্পনা (pending, in-progress, আৰু completed) তালিকাভুক্ত কৰে।

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

এটা বিফল হোৱা প্ৰিকল্পনাক `pending` লৈ পুনৰ সেট কৰে যাতে ইয়াক আৰম্ভৰ পৰা পুনৰ কাৰ্য্যনিৰ্বাহ কৰিব পাৰি।

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
