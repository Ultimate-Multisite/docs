---
title: WP-CLI ماخذ
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI ماخذ

Gratis AI Agent د `wp gratis-ai-agent` قوماندو کورنۍ وړاندې کوي، چې د agent د بنچمارک کولو، وړتیاوو د مدیریت، او له قوماندې کرښې څخه د agent حالت پوښتلو لپاره ده. ټولې قوماندې WP-CLI 2.0 یا تر هغه لوړې نسخې ته اړتیا لري.

## نصب

د WP-CLI قوماندې په اتومات ډول ثبتېږي کله چې plugin فعال وي. په دې سره یې تایید کړئ:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

د Agent Capabilities بنچمارک ټولګه چلوي — د پېچلو، څو-پړاویزو promptونو یوه مجموعه چې د وړتیا بشپړ سطحه ازموي. دا د model د کړنې ارزولو، د AI برابروونکو پرتله کولو، یا production ته له ځای پر ځای کولو مخکې د وړتیا packs د تایید لپاره وکاروئ.

### لنډیز

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### اختیارونه

| اختیار | تشریح |
|---|---|
| `--question=<id>` | د بشپړې ټولګې پر ځای د ID له مخې یوه یوازینۍ بنچمارک پوښتنه وچلوئ |
| `--provider=<provider>` | د دې چلولو لپاره تنظیم شوی AI برابرونکی بدل کړئ (لکه `anthropic`, `openai`) |
| `--model=<model>` | د دې چلولو لپاره تنظیم شوی model بدل کړئ (لکه `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | د وتنې بڼه: `table` (اصلي)، `json`, `csv` |
| `--save` | د تاریخي پرتله کولو لپاره د بنچمارک پایلې database ته خوندي کړئ |

### بېلګې

د اوسني برابروونکي او model سره بشپړه بنچمارک ټولګه وچلوئ:

```bash
wp gratis-ai-agent benchmark
```

یوه یوازینۍ پوښتنه (`q-restaurant-website`) وچلوئ او وتنه د JSON په توګه ورکړئ:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

د ځانګړي model پر وړاندې وچلوئ او پایلې خوندي کړئ:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### وتنه

بنچمارک د هرې پوښتنې لپاره یو کتار د لاندې ستنو سره ورکوي:

| ستن | تشریح |
|---|---|
| `ID` | د پوښتنې پېژندونکی |
| `Description` | د بنچمارک سناریو لنډیز |
| `Score` | بریا/ناکامي یا عددي نمره (0–100) |
| `Abilities Used` | د کارول شوو وړتیاوو په کامه جلا شوی لېست |
| `Tokens` | ټول مصرف شوي tokens |
| `Duration` | په ثانیو کې د دیوالي-ساعت وخت |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### د بنچمارک پوښتنې

اصلي ټولګه پکې شاملوي:

| ID | سناریو |
|---|---|
| `q-portfolio-site` | د Project Category taxonomy سره یو Portfolio CPT جوړ کړئ او یو block pattern ثبت کړئ |
| `q-restaurant-website` | د menu CPT، booking form، او navigation سره یو بشپړ restaurant ویب‌سایټ جوړ کړئ |
| `q-dark-mode-theme` | د dark-mode ډیزاین preset پلي کړئ او د نښې رنګونه دننه کړئ |
| `q-nav-builder` | د nested dropdown سره د څلورو توکو primary navigation menu جوړ کړئ |
| `q-options-roundtrip` | د WordPress اختیارونو یوه مجموعه ولولئ، بدله کړئ، او بېرته راواړوئ |
| `q-ability-install` | د تشریح شوې کارونې قضیې لپاره تر ټولو مناسب وړتیا pack ومومئ او نصب یې کړئ |

اضافي پوښتنې د `gratis_ai_agent_benchmark_questions` filter له لارې ثبتېدلی شي.

---

## `wp gratis-ai-agent abilities`

نصب شوې وړتیاوې او وړتیا packs مدیریت کوي.

### `wp gratis-ai-agent abilities list`

ټولې ثبت شوې وړتیاوې، د هغوی سرچینه (core یا pack)، او د هغوی اوسنی حالت لېست کوي.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**اختیارونه**

| اختیار | تشریح |
|---|---|
| `--format=<format>` | د وتنې بڼه: `table` (اصلي)، `json`, `csv` |

**د وتنې بېلګه**

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

### `wp gratis-ai-agent abilities install`

له registry څخه یو وړتیا pack ښکته کوي او فعالوي.

```bash
wp gratis-ai-agent abilities install <slug>
```

**ارګومانونه**

| ارګومان | تشریح |
|---|---|
| `<slug>` | د وړتیا pack د plugin slug، لکه `gratis-ai-agent-woocommerce` |

**بېلګه**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

یوه ځانګړې وړتیا د pack له لرې کولو پرته غیرفعالوي. په ورکړل شوي سایټ کې د agent د ساحې محدودولو لپاره ګټوره ده.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**بېلګه**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

یوه مخکې غیرفعاله شوې وړتیا بیا فعالوي.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

د agent اوسنی تنظیمات او د نښلېدو حالت ښکاره کوي.

```bash
wp gratis-ai-agent status
```

**د وتنې بېلګه**

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

## `wp gratis-ai-agent logs`

له debug log څخه د agent وروستۍ کړنې ښکاره کوي.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**اختیارونه**

| غوراوی | تشریح |
|---|---|
| `--last=<n>` | وروستي N لاګ ننوتنې وښایئ. تلواله `50` |
| `--level=<level>` | د کچې له مخې چاڼ کړئ: `info`, `warning`, `error` |
| `--ability=<ability>` | د وړتیا د نوم له مخې چاڼ کړئ |

**بېلګه**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

د agent حالت بیا تنظیموي: داخل شوی CSS پاکوي، د agent-ثبت شوي CPTs او taxonomies لرې کوي، نړیوال سبکونه بیا تنظیموي، او د agent د غوراویو زېرمه تشوي. plugin یا د هغه امستنې نه لرې کوي.

```bash
wp gratis-ai-agent reset [--yes]
```

د تایید پوښتنې د پرېښودو لپاره `--yes` ورزیات کړئ.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## د وتلو کوډونه

ټول commandونه د بریا پر مهال له `0` سره وځي. غیر صفر د وتلو کوډونه:

| کوډ | مانا |
|---|---|
| `1` | عمومي تېروتنه (د تېروتنې پیغام وګورئ) |
| `2` | د Provider د نښلونې ناکامي |
| `3` | وړتیا ونه موندل شوه |
| `4` | د Benchmark پوښتنه ونه موندل شوه |
