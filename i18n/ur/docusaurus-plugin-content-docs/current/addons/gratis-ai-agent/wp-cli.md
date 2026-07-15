---
title: WP-CLI Reference
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI ریفرنس

Gratis AI Agent، ایجنٹ کو Benchmarking کرنے، Abilities کو Manage کرنے، اور Command Line سے ایجنٹ کی Status کو Query کرنے کے لیے `wp gratis-ai-agent` کمانڈ فیملی فراہم کرتا ہے۔ تمام کمانڈز کے لیے WP-CLI 2.0 یا اس سے زیادہ ورژن درکار ہے۔

## Installation {#installation}

جب یہ Plugin Active ہو جاتا ہے تو WP-CLI کمانڈز خود بخود Register ہو جاتے ہیں۔ تصدیق کے لیے یہ کمانڈ چلائیں:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

یہ Agent Capabilities benchmark suite کو Run کرتا ہے — یہ پیچیدہ، کثیر مراحل کے Prompts کا ایک سیٹ ہے جو تمام Abilities کی صلاحیتوں کو استعمال کرتا ہے۔ اسے Model کی کارکردگی کا جائزہ لینے، مختلف AI Providers کا موازنہ کرنے، یا Production میں Deploy کرنے سے پہلے Ability Packs کو Validate کرنے کے لیے استعمال کریں۔

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options {#options}

| Option | Description |
|---|---|
| `--question=<id>` | پورے suite کی بجائے ID کے ذریعے ایک ہی benchmark question کو Run کرے گا |
| `--provider=<provider>` | اس Run کے لیے configured AI provider کو Override کرے گا (مثلاً: `anthropic`, `openai`) |
| `--model=<model>` | اس Run کے لیے configured model کو Override کرے گا (مثلاً: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Output کا فارمیٹ: `table` (ڈیفالٹ)، `json`، `csv` |
| `--save` | تاریخی موازنہ کے لیے benchmark کے نتائج کو Database میں Save کرے گا |

### Examples {#examples}

موجودہ provider اور model کے ساتھ پورا benchmark suite Run کرنے کے لیے:

```bash
wp gratis-ai-agent benchmark
```

ایک ہی question (`q-restaurant-website`) کو Run کرنا اور JSON کے طور پر Output لینا:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

ایک مخصوص model کے خلاف Run کرنا اور نتائج کو Save کرنا:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

benchmark ہر question کے لیے ایک Row Output کرتا ہے جس میں درج ذیل Columns ہوتے ہیں:

| Column | Description |
|---|---|
| `ID` | Question کی پہچان (identifier) |
| `Description` | benchmark scenario کا مختصر خلاصہ |
| `Score` | Pass/fail یا عددی سکور (0–100) |
| `Abilities Used` | استعمال ہونے والی Abilities کی comma-separated فہرست |
| `Tokens` | استعمال ہونے والے کل Tokens |
| `Duration` | سیکنڈز میں وقت (Wall-clock time) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions {#benchmark-questions}

ڈیفالٹ suite میں شامل ہیں:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | ایک Project Category taxonomy کے ساتھ Portfolio CPT بنانا اور ایک block pattern Register کرنا |
| `q-restaurant-website` | ایک menu CPT، booking form، اور navigation کے ساتھ مکمل ریسٹورنٹ ویب سائٹ بنانا |
| `q-dark-mode-theme` | ایک dark-mode design preset Apply کرنا اور brand colours Inject کرنا |
| `q-nav-builder` | ایک nested dropdown کے ساتھ چار آئٹم کا primary navigation menu بنانا |
| `q-options-roundtrip` | ایک سیٹ WordPress options کو پڑھنا، modify کرنا، اور restore کرنا |
| `q-ability-install` | بیان کردہ استعمال کے کیس کے لیے سب سے مناسب ability pack کو Discover اور Install کرنا |

اضافی questions کو `gratis_ai_agent_benchmark_questions` filter کے ذریعے Register کیا جا سکتا ہے۔

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

یہ installed abilities اور ability packs کو Manage کرتا ہے۔

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

یہ تمام registered abilities، ان کے source (core یا pack)، اور ان کی موجودہ status کو List کرتا ہے۔

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | Output کا فارمیٹ: `table` (ڈیفالٹ)، `json`، `csv` |

**Example output**

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

یہ registry سے ایک ability pack کو Download اور Activate کرتا ہے۔

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | ability pack کا Plugin slug، مثلاً: `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

یہ ایک مخصوص ability کو disable کرتا ہے بغیر pack کو ہٹائے۔ یہ کسی دیے گئے site پر agent کے scope کو محدود کرنے کے لیے مفید ہے۔

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Example**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

یہ پہلے سے disable کی گئی ability کو دوبارہ enable کرتا ہے۔

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

یہ موجودہ agent configuration اور connectivity status کو دکھاتا ہے۔

```bash
wp gratis-ai-agent status
```

**Example output**

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

یہ debug log سے حالیہ agent activity دکھاتا ہے۔

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | آخری N log entries دکھائے گا۔ ڈیفالٹ `50` ہے |
| `--level=<level>` | Level کے لحاظ سے فلٹر کرے گا: `info`, `warning`, `error` |
| `--ability=<ability>` | ability کے نام کے لحاظ سے فلٹر کرے گا |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

یہ agent state کو Reset کرتا ہے: injected CSS کو clear کرتا ہے، agent-registered CPTs اور taxonomies کو ہٹاتا ہے، global styles کو reset کرتا ہے، اور agent کے options cache کو خالی کرتا ہے۔ یہ Plugin یا اس کی settings کو Remove نہیں کرتا۔

```bash
wp gratis-ai-agent reset [--yes]
```

Confirmation prompt کو skip کرنے کے لیے `--yes` شامل کریں۔

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

تمام کمانڈز کامیابی پر `0` Exit Code دیتی ہیں۔ غیر صفر Exit Codes:

| Code | Meaning |
|---|---|
| `1` | عمومی غلطی (General error) (غلطی کا پیغام دیکھیں) |
| `2` | Provider connectivity failure |
| `3` | Ability not found |
| `4` | Benchmark question not found |
