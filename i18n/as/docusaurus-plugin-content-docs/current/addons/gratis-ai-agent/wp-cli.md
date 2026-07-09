---
title: WP-CLI Reference
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Reference {#wp-cli-reference}

Gratis AI Agent-এ `wp gratis-ai-agent` নামক এটা command family আগবঢ়াইছে। ইয়াৰ ব্যৱহাৰক (agent) benchmark কৰিবলৈ, ইয়াৰ ক্ষমতা (abilities) ব্যৱস্থাপনা কৰিবলৈ, আৰু command lineৰ পৰা agent-ৰ status জানিবলৈ ব্যৱহাৰ কৰা যায়। সকলো command-ৰ বাবে WP-CLI ২.০ বা তাৰ অধিক প্ৰয়োজন।

## Installation {#installation}

এই WP-CLI command সমূহ plugin active হোৱাৰ লগে লগে স্বয়ংক্রিয়ভাৱে register হৈ যায়। তলত দিয়া command-এ verify কৰিব পাৰিব:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

এইটো Agent Capabilities benchmark suite run কৰে — যিটো এটা জটিল, বহু-ধাপৰ prompt-ৰ set। ইয়াৰ দ্বাৰা agent-ৰ সম্পূৰ্ণ ক্ষমতাৰ পৰীক্ষা কৰা হয়। এইটো ব্যৱহাৰ কৰক model-ৰ performance মূল্যায়ন কৰিবলৈ, বিভিন্ন AI provider-ৰ সৈতে তুলনা কৰিবলৈ, বা production-ত deploy কৰাৰ আগতে ability pack-সমূহ validate কৰিবলৈ।

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options {#options}

| Option | Description |
|---|---|
| `--question=<id>` | সম্পূৰ্ণ suite-ৰ সলনি ID অনুসৰি এটা single benchmark question run কৰিবলৈ |
| `--provider=<provider>` | এই run-ৰ বাবে configure কৰা AI provider-ক override কৰিবলৈ (উদাহৰণস্বৰূপে, `anthropic`, `openai`) |
| `--model=<model>` | এই run-ৰ বাবে configure কৰা model-ক override কৰিবলৈ (উদাহৰণস্বৰূপে, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Output format: `table` (default), `json`, `csv` |
| `--save` | ঐতিহাসিক তুলনাৰ বাবে benchmark result-সমূহ database-ত save কৰিবলৈ |

### Examples {#examples}

current provider আৰু model ব্যৱহাৰ কৰি সম্পূৰ্ণ benchmark suite run কৰিবলৈ:

```bash
wp gratis-ai-agent benchmark
```

এটা single question (`q-restaurant-website`) run কৰি JSON হিচাপে output ল'বলৈ:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

এটা specific model-ৰ বিৰুদ্ধে run কৰি result save কৰিবলৈ:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

benchmark-এ প্ৰতিটো question-ৰ বাবে এটা row output কৰে, য'ত তলত দিয়া column সমূহ থাকে:

| Column | Description |
|---|---|
| `ID` | Question identifier |
| `Description` | Benchmark scenario-ৰ এটা চমু সাৰাংশ |
| `Score` | Pass/fail বা numeric score (0–100) |
| `Abilities Used` | ব্যৱহৃত abilities-ৰ comma-separated list |
| `Tokens` | মুঠ tokens ব্যৱহৃত |
| `Duration` | second-ত wall-clock time |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions {#benchmark-questions}

default suite-ত তলত দিয়া question সমূহ অন্তৰ্ভুক্ত:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | এটা Project Category taxonomy লৈ এটা Portfolio CPT create কৰা আৰু এটা block pattern register কৰা |
| `q-restaurant-website` | এটা menu CPT, booking form, আৰু navigation লৈ এটা সম্পূৰ্ণ restaurant website build কৰা |
| `q-dark-mode-theme` | এটা dark-mode design preset apply কৰা আৰু brand colours inject কৰা |
| `q-nav-builder` | এটা nested dropdown লৈ এটা চাৰি-item primary navigation menu create কৰা |
| `q-options-roundtrip` | এটা set of WordPress options read, modify, আৰু restore কৰা |
| `q-ability-install` | এটা describe কৰা use case-ৰ বাবে আটাইতকৈ উপযুক্ত ability pack-টো discover আৰু install কৰা |

অতিরিক্ত question সমূহ `gratis_ai_agent_benchmark_questions` filter-ৰ জৰিয়তে register কৰিব পাৰি।

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

install কৰা abilities আৰু ability pack-সমূহ ব্যৱস্থাপনা কৰে।

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

register কৰা সকলো abilities, তাৰ source (core নে pack), আৰু তাৰ current status list কৰে।

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | Output format: `table` (default), `json`, `csv` |

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

registry ካৰ পৰা এটা ability pack ডাউনলোড কৰি activate কৰে।

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | ability pack-ৰ plugin slug, উদাহৰণস্বৰূপে, `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

এটা specific ability disable কৰে, কিন্তু pack-টো remove নকৰে। এটা given site-ত agent-ৰ scope সীমিত কৰিবলৈ ই ব্যৱহাৰিক।

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

আগে disable কৰা ability-টো পুনৰ enable কৰে।

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

current agent configuration আৰু connectivity status display কৰে।

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

debug log ካৰ পৰা recent agent activity display কৰে।

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | শেষ N log entry দেখুৱাব। default `50` |
| `--level=<level>` | level অনুসৰি filter কৰিব: `info`, `warning`, `error` |
| `--ability=<ability>` | ability name অনুসৰি filter কৰিব |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

agent state reset কৰে: inject কৰা CSS clear কৰে, agent-registered CPTs আৰু taxonomies remove কৰে, global styles reset কৰে, আৰু agent-ৰ options cache খালি কৰে। ই plugin বা ইয়াৰ settings remove নকৰে।

```bash
wp gratis-ai-agent reset [--yes]
```

confirmation prompt skip কৰিবলৈ `--yes` যোগ কৰক।

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

সকলো command success হোৱাৰ লগে লগে `0` exit কৰে। Non-zero exit code:

| Code | Meaning |
|---|---|
| `1` | General error (error message চাওক) |
| `2` | Provider connectivity failure |
| `3` | Ability not found |
| `4` | Benchmark question not found |
