---
title: WP-CLI Reference
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI রেফারেন্স

Gratis AI Agent ব্যবহার করার জন্য `wp gratis-ai-agent` কমান্ড ফ্যামিলিটি দেওয়া হয়েছে। এটি ব্যবহার করে আপনি কমান্ড লাইন থেকে এজেন্টকে পরীক্ষা করতে, এর ক্ষমতা (abilities) পরিচালনা করতে এবং এজেন্টের বর্তমান অবস্থা জানতে পারবেন। সমস্ত কমান্ডের জন্য WP-CLI ২.০ বা তার বেশি সংস্করণ প্রয়োজন।

## ইনস্টলেশন {#installation}

প্লাগইনটি সক্রিয় করার সাথে সাথে WP-CLI কমান্ডগুলি স্বয়ংক্রিয়ভাবে রেজিস্টার হয়ে যায়। এটি যাচাই করতে নিচের কমান্ডটি ব্যবহার করুন:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

এটি এজেন্ট ক্যাপাবিলিটি বেঞ্চমার্ক স্যুট (Agent Capabilities benchmark suite) চালায়। এটি এমন এক সেট জটিল, বহু-ধাপের প্রম্পট যা এজেন্টের সমস্ত ক্ষমতা পরীক্ষা করে। মডেলের পারফরম্যান্স মূল্যায়ন করতে, বিভিন্ন AI প্রোভাইডারের মধ্যে তুলনা করতে, বা প্রোডাকশনে ব্যবহারের আগে ক্ষমতা প্যাকগুলি যাচাই করতে এটি ব্যবহার করুন।

### সংক্ষিপ্ত বিবরণ (Synopsis) {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### অপশনসমূহ (Options) {#options}

| অপশন | বিবরণ |
|---|---|
| `--question=<id>` | পুরো স্যুট চালানোর পরিবর্তে আইডি ব্যবহার করে একটি একক বেঞ্চমার্ক প্রশ্ন চালান |
| `--provider=<provider>` | এই রানের জন্য কনফিগার করা AI প্রোভাইডারকে ওভাররাইড করুন (যেমন: `anthropic`, `openai`) |
| `--model=<model>` | এই রানের জন্য কনফিগার করা মডেলকে ওভাররাইড করুন (যেমন: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | আউটপুট ফরম্যাট: `table` (ডিফল্ট), `json`, `csv` |
| `--save` | ঐতিহাসিক তুলনার জন্য বেঞ্চমার্ক ফলাফল ডেটাবেসে সংরক্ষণ করুন |

### উদাহরণ (Examples) {#examples}

বর্তমান প্রোভাইডার এবং মডেল ব্যবহার করে সম্পূর্ণ বেঞ্চমার্ক স্যুটটি চালান:

```bash
wp gratis-ai-agent benchmark
```

একটি একক প্রশ্ন (`q-restaurant-website`) চালান এবং আউটপুট JSON ফরম্যাটে নিন:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

একটি নির্দিষ্ট মডেলের বিরুদ্ধে এবং ফলাফল সংরক্ষণ করতে চালান:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### আউটপুট (Output) {#output}

বেঞ্চমার্কটি প্রতিটি প্রশ্নের জন্য একটি করে সারি (row) আউটপুট করে, যেখানে নিম্নলিখিত কলামগুলি থাকে:

| কলাম | বিবরণ |
|---|---|
| `ID` | প্রশ্ন শনাক্তকারী (Question identifier) |
| `Description` | বেঞ্চমার্ক পরিস্থিতির সংক্ষিপ্ত সারসংক্ষেপ |
| `Score` | পাস/ফেল বা সংখ্যাগত স্কোর (০–১০০) |
| `Abilities Used` | ব্যবহৃত ক্ষমতাগুলির কমা-বিচ্ছেদ করা তালিকা |
| `Tokens` | মোট ব্যবহৃত টোকেন সংখ্যা |
| `Duration` | সেকেন্ডে সময় (Wall-clock time) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### বেঞ্চমার্ক প্রশ্নসমূহ (Benchmark Questions) {#benchmark-questions}

ডিফল্ট স্যুটটিতে নিম্নলিখিত প্রশ্নগুলি অন্তর্ভুক্ত:

| ID | পরিস্থিতি (Scenario) |
|---|---|
| `q-portfolio-site` | একটি প্রজেক্ট ক্যাটাগরি ট্যাক্সোনমি সহ একটি পোর্টফোলিও CPT তৈরি করা এবং একটি ব্লক প্যাটার্ন রেজিস্টার করা |
| `q-restaurant-website` | একটি মেনু CPT, বুকিং ফর্ম এবং নেভিগেশন সহ একটি সম্পূর্ণ রেস্টুরেন্ট ওয়েবসাইট তৈরি করা |
| `q-dark-mode-theme` | একটি ডার্ক-মোড ডিজাইন প্রিসেট প্রয়োগ করা এবং ব্র্যান্ডের রঙ ইনজেক্ট করা |
| `q-nav-builder` | একটি নেস্টেড ড্রপডাউন সহ চারটি আইটেমের প্রাথমিক নেভিগেশন মেনু তৈরি করা |
| `q-options-roundtrip` | কিছু ওয়ার্ডপ্রেস অপশন পড়া, পরিবর্তন করা এবং পুনরুদ্ধার করা |
| `q-ability-install` | বর্ণিত ব্যবহারের ক্ষেত্রে সবচেয়ে উপযুক্ত ক্ষমতা প্যাকটি খুঁজে বের করা এবং ইনস্টল করা |

অতিরিক্ত প্রশ্নগুলি `gratis_ai_agent_benchmark_questions` ফিল্টারের মাধ্যমে রেজিস্টার করা যেতে পারে।

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

ইনস্টল করা ক্ষমতা এবং ক্ষমতা প্যাকগুলি পরিচালনা করে।

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

রেজিস্টার্ড সমস্ত ক্ষমতা, তাদের উৎস (core নাকি pack), এবং তাদের বর্তমান স্থিতি তালিকাভুক্ত করে।

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**অপশনসমূহ (Options)**

| অপশন | বিবরণ |
|---|---|
| `--format=<format>` | আউটপুট ফরম্যাট: `table` (ডিফল্ট), `json`, `csv` |

**উদাহরণ আউটপুট (Example output)**

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

রেজিস্ট্রি থেকে একটি ক্ষমতা প্যাক ডাউনলোড করে সক্রিয় করে।

```bash
wp gratis-ai-agent abilities install <slug>
```

**আর্গুমেন্টসমূহ (Arguments)**

| আর্গুমেন্ট | বিবরণ |
|---|---|
| `<slug>` | ক্ষমতা প্যাকের প্লাগইন স্ল্যাগ, যেমন: `gratis-ai-agent-woocommerce` |

**উদাহরণ (Example)**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

প্যাকটি সরিয়ে না দিয়ে একটি নির্দিষ্ট ক্ষমতা নিষ্ক্রিয় করে দেয়। এটি কোনো নির্দিষ্ট সাইটে এজেন্টের পরিধি সীমিত করার জন্য উপযোগী।

```bash
wp gratis-ai-agent abilities disable <ability>
```

**উদাহরণ (Example)**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

আগে থেকে নিষ্ক্রিয় করা একটি ক্ষমতা পুনরায় সক্রিয় করে।

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

বর্তমান এজেন্ট কনফিগারেশন এবং কানেক্টিভিটি স্থিতি প্রদর্শন করে।

```bash
wp gratis-ai-agent status
```

**উদাহরণ আউটপুট (Example output)**

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

ডিবাগ লগ থেকে সাম্প্রতিক এজেন্টের কার্যকলাপ প্রদর্শন করে।

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**অপশনসমূহ (Options)**

| অপশন | বিবরণ |
|---|---|
| `--last=<n>` | শেষ N সংখ্যক লগ এন্ট্রি দেখায়। ডিফল্ট: `50` |
| `--level=<level>` | লেভেল অনুসারে ফিল্টার করুন: `info`, `warning`, `error` |
| `--ability=<ability>` | ক্ষমতা (ability) নাম অনুসারে ফিল্টার করুন |

**উদাহরণ (Example)**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

এজেন্টের অবস্থা রিসেট করে: ইনজেক্ট করা CSS পরিষ্কার করে, এজেন্ট দ্বারা রেজিস্টার করা CPT এবং ট্যাক্সোনমি সরিয়ে দেয়, গ্লোবাল স্টাইল রিসেট করে এবং এজেন্টের অপশন ক্যাশে খালি করে। এটি প্লাগইন বা এর সেটিংস সরিয়ে দেয় না।

```bash
wp gratis-ai-agent reset [--yes]
```

কনফার্মেশন প্রম্পট এড়িয়ে যেতে `--yes` যোগ করুন।

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## এক্সিট কোড (Exit Codes) {#exit-codes}

সমস্ত কমান্ড সফল হলে `0` এক্সিট করে। নন-জিরো এক্সিট কোডগুলি:

| কোড | অর্থ |
|---|---|
| `1` | সাধারণ ত্রুটি (ত্রুটি বার্তায় দেখুন) |
| `2` | প্রোভাইডার কানেক্টিভিটি ব্যর্থতা |
| `3` | ক্ষমতা খুঁজে পাওয়া যায়নি (Ability not found) |
| `4` | বেঞ্চমার্ক প্রশ্ন খুঁজে পাওয়া যায়নি (Benchmark question not found) |
