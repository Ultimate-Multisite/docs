---
title: WP-CLI ਸੰਦਰਭ
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Reference {#wp-cli-reference}

Gratis AI Agent, agent ਨੂੰ benchmark ਕਰਨ, abilities manage ਕਰਨ, ਅਤੇ command line ਤੋਂ agent status query ਕਰਨ ਲਈ `wp gratis-ai-agent` command family ਨਾਲ ਆਉਂਦਾ ਹੈ। ਸਾਰੇ commands ਲਈ WP-CLI 2.0 ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਵਰਜ਼ਨ ਦੀ ਲੋੜ ਹੈ।

## Installation {#installation}

ਜਦੋਂ plugin active ਹੋ ਜਾਂਦਾ ਹੈ ਤਾਂ WP-CLI commands ਆਪਣੇ ਆਪ register ਹੋ ਜਾਂਦੇ ਹਨ। ਇਹ verify ਕਰਨ ਲਈ:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

ਇਹ Agent Capabilities benchmark suite ਚਲਾਉਂਦਾ ਹੈ — ਇਹ complex, multi-step prompts ਦਾ ਇੱਕ set ਹੈ ਜੋ agent ਦੀ ਪੂਰੀ ability surface ਨੂੰ test ਕਰਦਾ ਹੈ। ਇਸਦੀ ਵਰਤੋਂ model performance evaluate ਕਰਨ, AI providers ਦੀ ਤੁਲਨਾ ਕਰਨ, ਜਾਂ production ਵਿੱਚ deploy ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ability packs ਨੂੰ validate ਕਰਨ ਲਈ ਕਰੋ।

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options {#options}

| Option | Description |
|---|---|
| `--question=<id>` | ਪੂਰੇ suite ਦੀ ਬਜਾਏ ID ਦੇ ਅਨੁਸਾਰ ਇੱਕ single benchmark question ਚਲਾਓ |
| `--provider=<provider>` | ਇਸ run ਲਈ configure ਕੀਤੇ AI provider ਨੂੰ override ਕਰੋ (ਉਦਾਹਰਨ ਲਈ: `anthropic`, `openai`) |
| `--model=<model>` | ਇਸ run ਲਈ configure ਕੀਤੇ model ਨੂੰ override ਕਰੋ (ਉਦਾਹਰਨ ਲਈ: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Output format: `table` (default), `json`, `csv` |
| `--save` | ਇਤਿਹਾਸਕ ਤੁਲਨਾ ਲਈ benchmark results ਨੂੰ database ਵਿੱਚ save ਕਰੋ |

### Examples {#examples}

current provider ਅਤੇ model ਨਾਲ ਪੂਰਾ benchmark suite ਚਲਾਓ:

```bash
wp gratis-ai-agent benchmark
```

ਇੱਕ single question (`q-restaurant-website`) ਚਲਾਓ ਅਤੇ JSON ਵਿੱਚ output ਕਰੋ:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

ਇੱਕ specific model ਦੇ ਖਿਲਾਫ ਚਲਾਓ ਅਤੇ results save ਕਰੋ:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

benchmark ਹਰ question ਲਈ ਇੱਕ row output ਕਰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਹੇਠ ਲਿਖੇ columns ਹੁੰਦੇ ਹਨ:

| Column | Description |
|---|---|
| `ID` | Question identifier |
| `Description` | Benchmark scenario ਦਾ ਸੰਖੇਪ ਸਾਰ |
| `Score` | Pass/fail ਜਾਂ numeric score (0–100) |
| `Abilities Used` | ਵਰਤੀਆਂ ਗਈਆਂ abilities ਦੀ comma-separated list |
| `Tokens` | ਖਪਤ ਹੋਏ total tokens |
| `Duration` | ਸੈਕਿੰਡਾਂ ਵਿੱਚ wall-clock time |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions {#benchmark-questions}

default suite ਵਿੱਚ ਇਹ ਸ਼ਾਮਲ ਹਨ:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | ਇੱਕ Project Category taxonomy ਨਾਲ Portfolio CPT ਬਣਾਉਣਾ ਅਤੇ ਇੱਕ block pattern register ਕਰਨਾ |
| `q-restaurant-website` | ਇੱਕ menu CPT, booking form, ਅਤੇ navigation ਨਾਲ ਪੂਰੀ restaurant website ਬਣਾਉਣਾ |
| `q-dark-mode-theme` | ਇੱਕ dark-mode design preset ਲਾਗੂ ਕਰਨਾ ਅਤੇ brand colours inject ਕਰਨਾ |
| `q-nav-builder` | ਇੱਕ nested dropdown ਨਾਲ ਚਾਰ-item primary navigation menu ਬਣਾਉਣਾ |
| `q-options-roundtrip` | WordPress options ਦੇ ਇੱਕ set ਨੂੰ ਪੜ੍ਹਨਾ, modify ਕਰਨਾ, ਅਤੇ restore ਕਰਨਾ |
| `q-ability-install` | ਇੱਕ describe ਕੀਤੇ use case ਲਈ ਸਭ ਤੋਂ ਢੁਕਵਾਂ ability pack ਲੱਭਣਾ ਅਤੇ install ਕਰਨਾ |

ਹੋਰ questions `gratis_ai_agent_benchmark_questions` filter ਰਾਹੀਂ register ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ।

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

install ਹੋਈ abilities ਅਤੇ ability packs ਨੂੰ manage ਕਰਦਾ ਹੈ।

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

ਸਾਰੀਆਂ registered abilities, ਉਨ੍ਹਾਂ ਦੇ source (core ਜਾਂ pack), ਅਤੇ ਉਨ੍ਹਾਂ ਦੀ current status ਨੂੰ list ਕਰਦਾ ਹੈ।

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

registry ਤੋਂ ਇੱਕ ability pack download ਕਰਦਾ ਹੈ ਅਤੇ activate ਕਰਦਾ ਹੈ।

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | ability pack ਦਾ plugin slug, ਜਿਵੇਂ ਕਿ `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

pack ਨੂੰ remove ਕੀਤੇ ਬਿਨਾਂ ਇੱਕ specific ability ਨੂੰ disable ਕਰਦਾ ਹੈ। ਇਹ ਕਿਸੇ ਦਿੱਤੇ site 'ਤੇ agent ਦੇ scope ਨੂੰ restrict ਕਰਨ ਲਈ useful ਹੈ।

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

ਇੱਕ ਪਹਿਲਾਂ disable ਹੋਈ ability ਨੂੰ re-enable ਕਰਦਾ ਹੈ।

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

current agent configuration ਅਤੇ connectivity status ਨੂੰ display ਕਰਦਾ ਹੈ।

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

debug log ਵਿੱਚੋਂ recent agent activity ਨੂੰ display ਕਰਦਾ ਹੈ।

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | ਪਿਛਲੇ N log entries ਦਿਖਾਓ। Default `50` ਹੈ |
| `--level=<level>` | level ਅਨੁਸਾਰ filter ਕਰੋ: `info`, `warning`, `error` |
| `--ability=<ability>` | ability name ਅਨੁਸਾਰ filter ਕਰੋ |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

agent state ਨੂੰ reset ਕਰਦਾ ਹੈ: inject ਕੀਤੇ CSS ਨੂੰ clear ਕਰਦਾ ਹੈ, agent-registered CPTs ਅਤੇ taxonomies ਨੂੰ remove ਕਰਦਾ ਹੈ, global styles ਨੂੰ reset ਕਰਦਾ ਹੈ, ਅਤੇ agent ਦੇ options cache ਨੂੰ empty ਕਰਦਾ ਹੈ। ਇਹ plugin ਜਾਂ ਇਸਦੀ settings ਨੂੰ remove ਨਹੀਂ ਕਰਦਾ।

```bash
wp gratis-ai-agent reset [--yes]
```

confirmation prompt ਨੂੰ skip ਕਰਨ ਲਈ `--yes` ਜੋੜੋ।

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

ਸਾਰੇ commands success 'ਤੇ `0` exit code return ਕਰਦੇ ਹਨ। Non-zero exit codes:

| Code | Meaning |
|---|---|
| `1` | General error (error message ਦੇਖੋ) |
| `2` | Provider connectivity failure |
| `3` | Ability not found |
| `4` | Benchmark question not found |
