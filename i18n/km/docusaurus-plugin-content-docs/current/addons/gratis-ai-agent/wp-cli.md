---
title: ឯកសារយោង WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# ឯកសារយោង WP-CLI {#wp-cli-reference}

Gratis AI Agent មានក្រុម command `wp gratis-ai-agent` សម្រាប់វាស់ស្ទង់សមត្ថភាព agent គ្រប់គ្រងសមត្ថភាព និងសួរស្ថានភាព agent ពីបន្ទាត់ command។ command ទាំងអស់ត្រូវការ WP-CLI 2.0 ឬខ្ពស់ជាងនេះ។

## ការដំឡើង {#installation}

command WP-CLI ត្រូវបានចុះឈ្មោះដោយស្វ័យប្រវត្តិ នៅពេលកម្មវិធីបន្ថែមសកម្ម។ ផ្ទៀងផ្ទាត់ដោយ៖

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

ដំណើរការឈុត benchmark សមត្ថភាព agent — ជាសំណុំពាក្យបញ្ជាស្មុគស្មាញច្រើនជំហាន ដែលសាកល្បងផ្ទៃសមត្ថភាពទាំងមូល។ ប្រើវាដើម្បីវាយតម្លៃប្រសិទ្ធភាព model ប្រៀបធៀបអ្នកផ្តល់ AI ឬផ្ទៀងផ្ទាត់កញ្ចប់សមត្ថភាព មុនដាក់ប្រើក្នុងផលិតកម្ម។

### សង្ខេបការប្រើប្រាស់ {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### ជម្រើស {#options}

| ជម្រើស | ការពិពណ៌នា |
|---|---|
| `--question=<id>` | ដំណើរការសំណួរ benchmark តែមួយតាម ID ជំនួសឱ្យឈុតពេញ |
| `--provider=<provider>` | ប្ដូរជំនួសអ្នកផ្តល់ AI ដែលបានកំណត់រចនាសម្ព័ន្ធ សម្រាប់ការដំណើរការនេះ (ឧ. `anthropic`, `openai`) |
| `--model=<model>` | ប្ដូរជំនួស model ដែលបានកំណត់រចនាសម្ព័ន្ធ សម្រាប់ការដំណើរការនេះ (ឧ. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | ទ្រង់ទ្រាយលទ្ធផល៖ `table` (លំនាំដើម), `json`, `csv` |
| `--save` | រក្សាទុកលទ្ធផល benchmark ទៅក្នុងមូលដ្ឋានទិន្នន័យ សម្រាប់ការប្រៀបធៀបប្រវត្តិ |

### ឧទាហរណ៍ {#examples}

ដំណើរការឈុត benchmark ពេញ ជាមួយអ្នកផ្តល់ និង model បច្ចុប្បន្ន៖

```bash
wp gratis-ai-agent benchmark
```

ដំណើរការសំណួរតែមួយ (`q-restaurant-website`) ហើយបញ្ចេញលទ្ធផលជា JSON៖

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

ដំណើរការលើ model ជាក់លាក់ ហើយរក្សាទុកលទ្ធផល៖

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### លទ្ធផល {#output}

benchmark បញ្ចេញលទ្ធផលមួយជួររៀងរាល់សំណួរ ជាមួយជួរឈរខាងក្រោម៖

| ជួរឈរ | ការពិពណ៌នា |
|---|---|
| `ID` | អត្តសញ្ញាណសំណួរ |
| `Description` | សេចក្ដីសង្ខេបខ្លីនៃសេណារីយ៉ូ benchmark |
| `Score` | ពិន្ទុជាប់/ធ្លាក់ ឬពិន្ទុជាលេខ (0–100) |
| `Abilities Used` | បញ្ជីសមត្ថភាពដែលបានហៅប្រើ បំបែកដោយសញ្ញាក្បៀស |
| `Tokens` | ចំនួន token សរុបដែលបានប្រើ |
| `Duration` | ពេលវេលាពិតជាវិនាទី |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### សំណួរ Benchmark {#benchmark-questions}

ឈុតលំនាំដើមរួមមាន៖

| ID | សេណារីយ៉ូ |
|---|---|
| `q-portfolio-site` | បង្កើត Portfolio CPT មួយ ជាមួយ taxonomy ប្រភេទគម្រោង ហើយចុះឈ្មោះលំនាំ block មួយ |
| `q-restaurant-website` | បង្កើតគេហទំព័រភោជនីយដ្ឋានពេញលេញ ជាមួយ menu CPT ទម្រង់កក់ និងការរុករក |
| `q-dark-mode-theme` | អនុវត្ត preset រចនាប័ទ្មងងឹត ហើយបញ្ចូលពណ៌ម៉ាក |
| `q-nav-builder` | បង្កើតម៉ឺនុយរុករកចម្បងមានបួនធាតុ ជាមួយ dropdown ជាន់ក្នុង |
| `q-options-roundtrip` | អាន កែប្រែ និងស្ដារសំណុំជម្រើស WordPress |
| `q-ability-install` | រកឃើញ និងដំឡើងកញ្ចប់សមត្ថភាពដែលសមស្របបំផុត សម្រាប់ករណីប្រើប្រាស់ដែលបានពិពណ៌នា |

សំណួរបន្ថែមអាចចុះឈ្មោះបានតាមរយៈ filter `gratis_ai_agent_benchmark_questions`។

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

គ្រប់គ្រងសមត្ថភាព និងកញ្ចប់សមត្ថភាពដែលបានដំឡើង។

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

បង្ហាញបញ្ជីសមត្ថភាពដែលបានចុះឈ្មោះទាំងអស់ ប្រភពរបស់វា (ស្នូល ឬកញ្ចប់) និងស្ថានភាពបច្ចុប្បន្ន។

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**ជម្រើស**

| ជម្រើស | ការពិពណ៌នា |
|---|---|
| `--format=<format>` | ទ្រង់ទ្រាយលទ្ធផល៖ `table` (លំនាំដើម), `json`, `csv` |

**ឧទាហរណ៍លទ្ធផល**

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

ទាញយក និងធ្វើឱ្យកញ្ចប់សមត្ថភាពពី registry សកម្ម។

```bash
wp gratis-ai-agent abilities install <slug>
```

**អាគុយម៉ង់**

| អាគុយម៉ង់ | ការពិពណ៌នា |
|---|---|
| `<slug>` | slug កម្មវិធីបន្ថែមនៃកញ្ចប់សមត្ថភាព ឧ. `gratis-ai-agent-woocommerce` |

**ឧទាហរណ៍**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

បិទសមត្ថភាពជាក់លាក់មួយ ដោយមិនលុបកញ្ចប់ចេញ។ វាមានប្រយោជន៍សម្រាប់កំណត់វិសាលភាពរបស់ agent លើគេហទំព័រជាក់លាក់មួយ។

```bash
wp gratis-ai-agent abilities disable <ability>
```

**ឧទាហរណ៍**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

បើកសមត្ថភាពដែលធ្លាប់បានបិទ ឱ្យសកម្មឡើងវិញ។

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

បង្ហាញការកំណត់រចនាសម្ព័ន្ធ agent បច្ចុប្បន្ន និងស្ថានភាពការតភ្ជាប់។

```bash
wp gratis-ai-agent status
```

**ឧទាហរណ៍លទ្ធផល**

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

បង្ហាញសកម្មភាពថ្មីៗរបស់ agent ពី debug log។

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**ជម្រើស**

| ជម្រើស | សេចក្ដីពិពណ៌នា |
|---|---|
| `--last=<n>` | បង្ហាញធាតុកំណត់ហេតុ N ចុងក្រោយ។ លំនាំដើម `50` |
| `--level=<level>` | ត្រងតាមកម្រិត៖ `info`, `warning`, `error` |
| `--ability=<ability>` | ត្រងតាមឈ្មោះសមត្ថភាព |

**ឧទាហរណ៍**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

កំណត់ស្ថានភាព agent ឡើងវិញ៖ សម្អាត CSS ដែលបានបញ្ចូល លុប CPTs និង taxonomies ដែល agent បានចុះបញ្ជី កំណត់រចនាប័ទ្មសកលឡើងវិញ និងសម្អាត options cache របស់ agent។ មិនលុប plugin ឬការកំណត់របស់វាទេ។

```bash
wp gratis-ai-agent reset [--yes]
```

បន្ថែម `--yes` ដើម្បីរំលងសំណួរបញ្ជាក់។

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## កូដចេញ {#exit-codes}

ពាក្យបញ្ជាទាំងអស់ចេញជា `0` នៅពេលជោគជ័យ។ កូដចេញដែលមិនមែនសូន្យ៖

| កូដ | អត្ថន័យ |
|---|---|
| `1` | កំហុសទូទៅ (មើលសារកំហុស) |
| `2` | បរាជ័យក្នុងការតភ្ជាប់ទៅអ្នកផ្តល់សេវា |
| `3` | រកមិនឃើញសមត្ថភាព |
| `4` | រកមិនឃើញសំណួរ Benchmark |
