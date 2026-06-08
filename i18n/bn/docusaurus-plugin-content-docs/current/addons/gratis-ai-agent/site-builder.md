---
title: সাইট বিল্ডার অর্কেস্ট্রেশন v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (যা Gratis AI Agent v1.4.0-এ চালু হয়েছে) হলো সেই ইঞ্জিন যা মাল্টি-স্টেপ ওয়েবসাইট তৈরির প্রক্রিয়াকে শক্তি যোগায়। যখন আপনি এজেন্টকে "একটি রেস্টুরেন্টের ওয়েবসাইট তৈরি করতে" বা "একটি ব্লগের সাথে পোর্টফোলিও তৈরি করতে" বলেন, তখন এই অর্কেস্ট্রেটর উচ্চ-স্তরের লক্ষ্যটিকে একটি কাঠামোগত **পরিকল্পনায় (plan)** ভেঙে দেয়, এটি পূরণের জন্য প্রয়োজনীয় প্লাগইনগুলি খুঁজে বের করে, প্রতিটি ধাপকে ক্রমানুসারে কার্যকর করে, অগ্রগতি ট্র্যাক করে এবং স্বয়ংক্রিয়ভাবে ত্রুটি থেকে পুনরুদ্ধার করে।

---

## এটি কীভাবে কাজ করে

### ১. পরিকল্পনা তৈরি (Plan Generation)

যখন এজেন্ট কোনো সাইট-বিল্ডিং নির্দেশ পায়, তখন এটি একটি JSON **সাইট প্ল্যান** তৈরি করার জন্য `create_site_plan` ক্ষমতাটি (ability) কল করে। এই প্ল্যানটি নিম্নলিখিত বিষয়গুলি বর্ণনা করে:

- **Goal** — চূড়ান্ত সাইটটি কী করবে
- **Phases** — ধাপগুলির ক্রমানুসারে সাজানো গ্রুপ (যেমন: _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — প্রতিটি পর্যায়ে স্বতন্ত্র ক্ষমতা কল (individual ability calls)
- **Plugin requirements** — নির্দিষ্ট ধাপগুলি চালানোর জন্য যে প্লাগইনগুলি সক্রিয় থাকা আবশ্যক
- **Fallbacks** — যদি একটি প্রাথমিক ধাপ ব্যর্থ হয়, তবে বিকল্প ধাপ

**উদাহরণ প্ল্যান (সংক্ষিপ্ত)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "একটি অনলাইন মেনু, বুকিং ফর্ম এবং কন্টাক্ট পেজ সহ একটি রেস্টুরেন্টের ওয়েবসাইট তৈরি করা",
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
    { "slug": "contact-form-7", "reason": "বুকিং এবং কন্টাক্ট ফর্মের জন্য প্রয়োজন" }
  ]
}
```

### ২. প্লাগইন আবিষ্কার (Plugin Discovery)

কার্যকর করা শুরু করার আগে, অর্কেস্ট্রেটর প্ল্যানের `plugin_requirements` স্ক্যান করে এবং পরীক্ষা করে যে কোন প্লাগইনগুলি ইতিমধ্যেই সক্রিয় আছে। যে প্লাগইনগুলি অনুপস্থিত, তার জন্য এটি:

১. সেরা মিল খুঁজে বের করতে `recommend_plugin` এর মাধ্যমে রেজিস্ট্রি অনুসন্ধান করে
২. সুপারিশটি নিশ্চিত করার জন্য এজেন্টকে অনুরোধ করে
৩. অনুমোদন পেলে ইনস্টলেশন শুরু করে (অথবা সেটিংসে auto-install চালু থাকলে)

প্লাগইন আবিষ্কার ব্যর্থ হলে তা কোনো বড় সমস্যা নয় — অর্কেস্ট্রেটর প্রভাবিত ধাপগুলিকে `skipped` হিসাবে চিহ্নিত করে এবং প্ল্যানের বাকি অংশ নিয়ে এগিয়ে যায়।

### ৩. প্ল্যান কার্যকর করা (Plan Execution)

অরকেস্ট্রেটর প্ল্যান আইডি দিয়ে `execute_site_plan` কল করে। কার্যকর করা পর্যায় ধরে, ধাপ ধরে এগিয়ে যায়:

- **Step references** (`__ref:` প্রিফিক্স) — ধাপগুলি পূর্ববর্তী ধাপগুলির আউটপুটকে রেফারেন্স করতে পারে। উপরের উদাহরণে, `__ref:create_menu.menu_id` কে `create_menu` ধাপ দ্বারা ফেরত আসা `menu_id` দিয়ে সমাধান করা হয়।
- **Parallel steps** — একই পর্যায়ের মধ্যে থাকা যে ধাপগুলির মধ্যে কোনো আন্তঃনির্ভরশীলতা নেই, সেগুলিকে `parallel` ফ্ল্যাগ সেট করা থাকলে সমান্তরালভাবে (concurrently) পাঠানো হয়।
- **Step timeout** — প্রতিটি ধাপের নিজস্ব টাইমআউট থাকে (ডিফল্ট: `Ability Timeout` সেটিং)। কোনো ধাপ টাইমআউট হলে তা `failed` হিসাবে চিহ্নিত হয় এবং প্ল্যানটি চলতে থাকে।

### ৪. অগ্রগতি ট্র্যাকিং (Progress Tracking)

কার্যকর করার স্থিতি পরীক্ষা করতে যেকোনো সময় `get_plan_progress` কল করুন:

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

WP-CLI ব্যবহারকারীরা নিম্নলিখিত কমান্ড দিয়ে অগ্রগতি পর্যবেক্ষণ করতে পারে:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### ৫. ত্রুটি পুনরুদ্ধার (Error Recovery)

যখন কোনো ধাপ ব্যর্থ হয়, তখন অর্কেস্ট্রেটর প্ল্যানে সংজ্ঞায়িত একটি **fallback** ধাপ আছে কিনা তা পরীক্ষা করে:

- **Fallback available** — ফলব্যাক ধাপটি অবিলম্বে চেষ্টা করা হয়। যদি এটি সফল হয়, তবে কার্যকর করা চলতে থাকে। যদি এটিও ব্যর্থ হয়, তবে ধাপটি `failed` হিসাবে চিহ্নিত হয় এবং পরবর্তী ধাপ নিয়ে কার্যকর করা চলতে থাকে।
- **No fallback** — ধাপটি `failed` হিসাবে চিহ্নিত হয়। যে ধাপগুলি অত্যাবশ্যক নয় (non-critical), সেগুলিকে এড়িয়ে যাওয়া হয়; কিন্তু যে ধাপগুলি অত্যাবশ্যক (required: true) তা বর্তমান পর্যায়টি থামিয়ে দেয় এবং একটি পর্যায়-স্তরের পুনরুদ্ধারের চেষ্টা শুরু করে।

এজেন্ট চূড়ান্ত প্ল্যান সারাংশে সমস্ত ব্যর্থতা রিপোর্ট করে এবং পুনরুদ্ধার করা যায় না এমন ত্রুটির জন্য ম্যানুয়াল প্রতিকারমূলক পদক্ষেপের পরামর্শ দিতে পারে।

---

## Site Plan Abilities

### `create_site_plan`

একটি প্রাকৃতিক ভাষা লক্ষ্য বর্ণনা থেকে একটি কাঠামোগত সাইট প্ল্যান তৈরি করে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | কাঙ্ক্ষিত ওয়েবসাইট সম্পর্কে প্রাকৃতিক ভাষার বর্ণনা |
| `style` | string | No | ভিজ্যুয়াল স্টাইল পছন্দ: `minimal`, `bold`, `professional`, `playful`। ডিফল্ট: এজেন্ট লক্ষ্য অনুযায়ী বেছে নেয় |
| `plugins` | array | No | প্ল্যানে অন্তর্ভুক্ত করার জন্য প্লাগইন স্ল্যাগ। অর্কেস্ট্রেটর স্বয়ংক্রিয়ভাবে প্রয়োজনীয় প্লাগইন যোগ করে। |
| `dry_run` | boolean | No | যদি `true` হয়, তবে এটি কোনো কিছু সেভ বা কার্যকর না করে প্ল্যান JSON ফেরত দেবে। ডিফল্ট `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

পূর্বে তৈরি করা সাইট প্ল্যান কার্যকর করা শুরু করে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | কার্যকর করার জন্য প্ল্যান আইডি |
| `auto_install_plugins` | boolean | No | যদি `true` হয়, তবে নিশ্চিতকরণ ছাড়াই প্রয়োজনীয় প্লাগইনগুলি স্বয়ংক্রিয়ভাবে ইনস্টল করে। ডিফল্ট `false` |
| `max_retries` | integer | No | এগিয়ে যাওয়ার আগে একটি ব্যর্থ ধাপ কতবার পুনরায় চেষ্টা করা হবে। ডিফল্ট `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

একটি সাইট প্ল্যানের বর্তমান কার্যকর করার স্থিতি ফেরত দেয়।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | যে প্ল্যানটি কোয়েরি করতে হবে তার আইডি |

**Returns** উপরে [Progress Tracking](#4-progress-tracking) এ বর্ণিত অগ্রগতি অবজেক্ট।

---

### `handle_plan_error`

ম্যানুয়ালি একটি ব্যর্থ ধাপ সমাধান করে এবং পরবর্তী ধাপ থেকে প্ল্যান কার্যকর করা পুনরায় শুরু করে। এটি ব্যবহার করুন যখন স্বয়ংক্রিয় পুনরুদ্ধার সম্ভব না হয় এবং আপনি হস্তক্ষেপ করতে চান।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | প্ল্যান আইডি |
| `step_id` | string | Yes | ব্যর্থ ধাপের আইডি |
| `resolution` | string | Yes | `skip` (এড়িয়ে গিয়ে চালিয়ে যাওয়া), `retry` (অবিলম্বে ধাপটি পুনরায় চেষ্টা করা), বা `mark_done` (পুনরায় না চালিয়ে সফল হিসাবে গণ্য করা) এর মধ্যে একটি |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 এবং v2 এর তুলনা

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

একটি লক্ষ্য বর্ণনা থেকে একটি সাইট প্ল্যান তৈরি করে।

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

পূর্বে তৈরি করা একটি প্ল্যান কার্যকর করে।

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

একটি কার্যকর করা বা সম্পন্ন হওয়া প্ল্যানের বর্তমান অগ্রগতি দেখায়।

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

সমস্ত সাইট প্ল্যান তালিকাভুক্ত করে (pending, in-progress, এবং completed)।

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

একটি ব্যর্থ প্ল্যানকে `pending` এ রিসেট করে যাতে এটি শুরু থেকে পুনরায় কার্যকর করা যায়।

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
