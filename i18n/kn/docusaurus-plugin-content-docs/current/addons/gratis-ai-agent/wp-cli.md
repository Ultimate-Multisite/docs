---
title: WP-CLI Reference
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI ರೆಫರೆನ್ಸ್

Gratis AI Agent, ಏಜೆಂಟ್ ಅನ್ನು benchmark ಮಾಡಲು, ಸಾಮರ್ಥ್ಯಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಮತ್ತು command line ನಿಂದ ಏಜೆಂಟ್ ಸ್ಥಿತಿಯನ್ನು query ಮಾಡಲು `wp gratis-ai-agent` command family ಅನ್ನು ಒದಗಿಸುತ್ತದೆ. ಎಲ್ಲಾ commands ಗಳಿಗೆ WP-CLI 2.0 ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿನದರ ಅಗತ್ಯವಿದೆ.

## Installation

ಪ್ಲಗ್ಇನ್ ಆಕ್ಟಿವ್ ಆದಾಗ WP-CLI commands ಸ್ವಯಂಚಾಲಿತವಾಗಿ register ಆಗುತ್ತವೆ. ಇದನ್ನು ಪರಿಶೀಲಿಸಲು:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

ಇದು ಏಜೆಂಟ್ ಸಾಮರ್ಥ್ಯಗಳ benchmark suite ಅನ್ನು ಚಲಾಯಿಸುತ್ತದೆ — ಇದು ಸಂಪೂರ್ಣ ಸಾಮರ್ಥ್ಯದ ವ್ಯಾಪ್ತಿಯನ್ನು ಪರೀಕ್ಷಿಸುವ ಸಂಕೀರ್ಣ, ಬಹು-ಹಂತದ prompts ಗಳ ಗುಂಪಾಗಿದೆ. model performance ಅನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು, AI providers ಗಳನ್ನು ಹೋಲಿಸಲು, ಅಥವಾ production ಗೆ ನಿಯೋಜಿಸುವ ಮೊದಲು ability packs ಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ಇದನ್ನು ಬಳಸಿ.

### Synopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options

| Option | Description |
|---|---|
| `--question=<id>` | ಸಂಪೂರ್ಣ suite ಬದಲಿಗೆ ID ಮೂಲಕ ಒಂದೇ benchmark question ಅನ್ನು ಚಲಾಯಿಸಿ |
| `--provider=<provider>` | ಈ run ಗಾಗಿ ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ AI provider ಅನ್ನು ಬದಲಾಯಿಸಿ (ಉದಾಹರಣೆಗೆ: `anthropic`, `openai`) |
| `--model=<model>` | ಈ run ಗಾಗಿ ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ model ಅನ್ನು ಬದಲಾಯಿಸಿ (ಉದಾಹರಣೆಗೆ: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | output format: `table` (default), `json`, `csv` |
| `--save` | ಐತಿಹಾಸಿಕ ಹೋಲಿಕೆಗಾಗಿ benchmark ಫಲಿತಾಂಶಗಳನ್ನು database ನಲ್ಲಿ ಉಳಿಸಿ |

### Examples

ಪ್ರಸ್ತುತ provider ಮತ್ತು model ಬಳಸಿ ಸಂಪೂರ್ಣ benchmark suite ಅನ್ನು ಚಲಾಯಿಸಿ:

```bash
wp gratis-ai-agent benchmark
```

ಒಂದೇ question ಅನ್ನು (`q-restaurant-website`) ಚಲಾಯಿಸಿ ಮತ್ತು JSON ಆಗಿ output ಮಾಡಿ:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

ನಿರ್ದಿಷ್ಟ model ವಿರುದ್ಧ ಚಲಾಯಿಸಿ ಮತ್ತು ಫಲಿತಾಂಶಗಳನ್ನು ಉಳಿಸಿ:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output

benchmark ಪ್ರತಿ question ಗಾಗಿ ಒಂದು row ಅನ್ನು ಈ ಕೆಳಗಿನ columns ಗಳೊಂದಿಗೆ output ಮಾಡುತ್ತದೆ:

| Column | Description |
|---|---|
| `ID` | Question identifier |
| `Description` | benchmark scenario ನ ಸಂಕ್ಷಿಪ್ತ ಸಾರಾಂಶ |
| `Score` | Pass/fail ಅಥವಾ ಸಂಖ್ಯೆ ಸ್ಕೋರ್ (0–100) |
| `Abilities Used` | ಕರೆಯಲಾದ ಸಾಮರ್ಥ್ಯಗಳ ಕಾಮಾ-ಪ್ರತ್ಯೇಕ ಪಟ್ಟಿ |
| `Tokens` | ಒಟ್ಟು ಬಳಸಿದ tokens |
| `Duration` | ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ wall-clock ಸಮಯ |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions

default suite တွင် ಇವುಗಳು ಸೇರಿವೆ:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Project Category taxonomy ಜೊತೆಗೆ Portfolio CPT ಅನ್ನು ರಚಿಸಿ ಮತ್ತು ಒಂದು block pattern ಅನ್ನು register ಮಾಡಿ |
| `q-restaurant-website` | menu CPT, booking form, ಮತ್ತು navigation ಜೊತೆಗೆ ಸಂಪೂರ್ಣ restaurant website ಅನ್ನು ರಚಿಸಿ |
| `q-dark-mode-theme` | dark-mode design preset ಅನ್ನು ಅನ್ವಯಿಸಿ ಮತ್ತು brand colours ಅನ್ನು inject ಮಾಡಿ |
| `q-nav-builder` | nested dropdown ಜೊತೆಗೆ ನಾಲ್ಕು-ಐಟ็มದ primary navigation menu ಅನ್ನು ರಚಿಸಿ |
| `q-options-roundtrip` | WordPress options ಗಳ ಸೆಟ್ ಅನ್ನು ಓದಿ, ಮಾರ್ಪಡಿಸಿ ಮತ್ತು ಮರುಸ್ಥಾಪಿಸಿ |
| `q-ability-install` | ವಿವರಿಸಲಾದ use case ಗಾಗಿ ಅತ್ಯಂತ ಸೂಕ್ತವಾದ ability pack ಅನ್ನು ಕಂಡುಹಿಡಿ ಮತ್ತು install ಮಾಡಿ |

ಹೆಚ್ಚುವರಿ question ಗಳನ್ನು `gratis_ai_agent_benchmark_questions` filter ಮೂಲಕ register ಮಾಡಬಹುದು.

---

## `wp gratis-ai-agent abilities`

install ಆಗಿರುವ ಸಾಮರ್ಥ್ಯಗಳು (abilities) ಮತ್ತು ability packs ಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.

### `wp gratis-ai-agent abilities list`

register ಆಗಿರುವ ಎಲ್ಲಾ ಸಾಮರ್ಥ್ಯಗಳು, ಅವುಗಳ ಮೂಲ (core ಅಥವಾ pack), ಮತ್ತು ಅವುಗಳ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿಯನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | output format: `table` (default), `json`, `csv` |

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

### `wp gratis-ai-agent abilities install`

registry ನಿಂದ ability pack ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಆಕ್ಟಿವೇಟ್ ಮಾಡುತ್ತದೆ.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | ability pack ನ plugin slug, ಉದಾಹರಣೆಗೆ: `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

pack ಅನ್ನು ತೆಗೆದುಹಾಕದೆ ನಿರ್ದಿಷ್ಟ ಸಾಮರ್ಥ್ಯವನ್ನು (ability) disable ಮಾಡುತ್ತದೆ. ಇದು ಒಂದು ನಿರ್ದಿಷ್ಟ site ನಲ್ಲಿ ಏಜೆಂಟ್‌ನ ವ್ಯಾಪ್ತಿಯನ್ನು 제한 ಮಾಡಲು ಉಪಯುಕ್ತವಾಗಿದೆ.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Example**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

ಈ ಹಿಂದೆ disable ಮಾಡಿದ ಸಾಮರ್ಥ್ಯವನ್ನು ಮರು-enable ಮಾಡುತ್ತದೆ.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

ಪ್ರಸ್ತುತ ಏಜೆಂಟ್ ಕಾನ್ಫಿಗರೇಶನ್ ಮತ್ತು connectivity ಸ್ಥಿತಿಯನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.

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

## `wp gratis-ai-agent logs`

debug log ನಿಂದ ಇತ್ತೀಚಿನ ಏಜೆಂಟ್ activity ಅನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | ಕೊನೆಯ N log entries ತೋರಿಸುತ್ತದೆ. default `50` |
| `--level=<level>` | level ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ: `info`, `warning`, `error` |
| `--ability=<ability>` | ability name ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

ಏಜೆಂಟ್ ಸ್ಥಿತಿಯನ್ನು ಮರುಹೊಂದಿಸುತ್ತದೆ: inject ಮಾಡಿದ CSS ಅನ್ನು clear ಮಾಡುತ್ತದೆ, ಏಜೆಂಟ್-register ಮಾಡಿದ CPTs ಮತ್ತು taxonomies ಗಳನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ, global styles ಗಳನ್ನು reset ಮಾಡುತ್ತದೆ ಮತ್ತು ಏಜೆಂಟ್‌ನ options cache ಅನ್ನು ಖಾಲಿ ಮಾಡುತ್ತದೆ. ಇದು plugin ಅಥವಾ ಅದರ settings ಗಳನ್ನು ತೆಗೆದುಹಾಕುವುದಿಲ್ಲ.

```bash
wp gratis-ai-agent reset [--yes]
```

confirmation prompt ಅನ್ನು ಬಿಟ್ಟುಬಿಡಲು `--yes` ಅನ್ನು ಸೇರಿಸಿ.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes

ಎಲ್ಲಾ commands ಯಶಸ್ವಿಯಾದಾಗ `0` ಅನ್ನು exit ಮಾಡುತ್ತವೆ. non-zero exit codes:

| Code | Meaning |
|---|---|
| `1` | ಸಾಮಾನ್ಯ error (error message ನೋಡಿ) |
| `2` | Provider connectivity failure |
| `3` | Ability ಸಿಗಲಿಲ್ಲ (not found) |
| `4` | Benchmark question ಸಿಗಲಿಲ್ಲ (not found) |
