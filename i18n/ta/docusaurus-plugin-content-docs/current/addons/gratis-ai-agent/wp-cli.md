---
title: WP-CLI குறிப்பு
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI குறிப்புப் பக்கம்

Gratis AI Agent, ஒரு `wp gratis-ai-agent` command family-ஐ வழங்குகிறது. இதை command line-ல் பயன்படுத்தி, agent-ஐ benchmark செய்ய, அதன் abilities-ஐ manage செய்ய, மற்றும் agent-இன் status-ஐ query செய்ய முடியும். அனைத்து commands-க்கும் WP-CLI 2.0 அல்லது அதற்கு மேல் தேவை.

## Installation {#installation}

இந்த WP-CLI commands, plugin active செய்யப்பட்டவுடன் தானாகவே register செய்யப்படும். இதைச் சரிபார்க்க:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

இது Agent Capabilities benchmark suite-ஐ இயக்கும். இது, agent-இன் முழு ability surface-ஐ சோதிக்கும் வகையில் வடிவமைக்கப்பட்ட, சிக்கலான, பல-படி prompt-களின் தொகுப்பாகும். model-இன் performance-ஐ மதிப்பிடுவதற்கும், வெவ்வேறு AI providers-களை ஒப்பிடுவதற்கும், அல்லது production-ல் deploy செய்வதற்கு முன் ability packs-ஐ validate செய்வதற்கும் இதை பயன்படுத்தலாம்.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options {#options}

| Option | Description |
|---|---|
| `--question=<id>` | முழு suite-க்கு பதிலாக, ID மூலம் ஒரு single benchmark question-ஐ இயக்கவும் |
| `--provider=<provider>` | இந்த run-க்கு config செய்யப்பட்ட AI provider-ஐ மாற்றவும் (உதாரணமாக: `anthropic`, `openai`) |
| `--model=<model>` | இந்த run-க்கு config செய்யப்பட்ட model-ஐ மாற்றவும் (உதாரணமாக: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Output format: `table` (default), `json`, `csv` |
| `--save` | வரலாற்று ஒப்பீட்டிற்காக benchmark முடிவுகளை database-ல் சேமிக்கவும் |

### Examples {#examples}

தற்போதைய provider மற்றும் model உடன் முழு benchmark suite-ஐ இயக்க:

```bash
wp gratis-ai-agent benchmark
```

ஒரு single question-ஐ (`q-restaurant-website`) இயக்கி, JSON ஆக output செய்யவும்:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

ஒரு குறிப்பிட்ட model-க்கு எதிராக run செய்து, முடிவுகளைச் சேமிக்கவும்:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

benchmark ஆனது, பின்வரும் columns-உடன், ஒவ்வொரு question-க்கும் ஒரு row-ஐ வெளியிடும்:

| Column | Description |
|---|---|
| `ID` | Question identifier |
| `Description` | Benchmark scenario-இன் சுருக்கமான விளக்கம் |
| `Score` | Pass/fail அல்லது numeric score (0–100) |
| `Abilities Used` | பயன்படுத்தப்பட்ட abilities-களின் comma-separated list |
| `Tokens` | பயன்படுத்தப்பட்ட மொத்த tokens |
| `Duration` | வினாடிகளில் wall-clock time |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions {#benchmark-questions}

default suite-ல் பின்வருவன அடங்கும்:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Project Category taxonomy உடன் ஒரு Portfolio CPT-ஐ உருவாக்கி, ஒரு block pattern-ஐ register செய்தல் |
| `q-restaurant-website` | ஒரு menu CPT, booking form மற்றும் navigation உடன் முழு restaurant website-ஐ உருவாக்குதல் |
| `q-dark-mode-theme` | ஒரு dark-mode design preset-ஐப் பயன்படுத்துதல் மற்றும் brand colours-களைச் செருகுதல் |
| `q-nav-builder` | ஒரு nested dropdown உடன் நான்கு-item primary navigation menu-ஐ உருவாக்குதல் |
| `q-options-roundtrip` | ஒரு set of WordPress options-ஐப் படித்து, மாற்றி, மீட்டமைத்தல் |
| `q-ability-install` | விவரிக்கப்பட்ட use case-க்கு மிகவும் பொருத்தமான ability pack-ஐக் கண்டறிந்து நிறுவுதல் |

கூடுதல் கேள்விகள் `gratis_ai_agent_benchmark_questions` filter மூலம் register செய்யப்படலாம்.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

இது நிறுவப்பட்ட abilities மற்றும் ability packs-ஐ manage செய்கிறது.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

பதிவு செய்யப்பட்ட அனைத்து abilities-களையும், அவற்றின் source (core அல்லது pack), மற்றும் அவற்றின் தற்போதைய status-ஐ பட்டியலிடுகிறது.

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

இது registry-ல் இருந்து ஒரு ability pack-ஐ download செய்து activate செய்கிறது.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | ability pack-இன் plugin slug, எ.கா: `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

ஒரு குறிப்பிட்ட ability-ஐ pack-ஐ நீக்காமல் disable செய்கிறது. ஒரு குறிப்பிட்ட site-ல் agent-இன் scope-ஐ கட்டுப்படுத்த இது பயனுள்ளதாக இருக்கும்.

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

முன்பு disable செய்யப்பட்ட ability-ஐ மீண்டும் enable செய்கிறது.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

தற்போதைய agent configuration மற்றும் connectivity status-ஐ காட்டுகிறது.

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

debug log-ல் இருந்து சமீபத்திய agent activity-ஐ காட்டுகிறது.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | கடைசி N log entries-ஐக் காட்டவும். default `50` |
| `--level=<level>` | level மூலம் filter செய்யவும்: `info`, `warning`, `error` |
| `--ability=<ability>` | ability name மூலம் filter செய்யவும் |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

agent state-ஐ reset செய்கிறது: செருகப்பட்ட CSS-ஐ நீக்குகிறது, agent-ஆல் register செய்யப்பட்ட CPTs மற்றும் taxonomies-ஐ நீக்குகிறது, global styles-ஐ reset செய்கிறது, மற்றும் agent-இன் options cache-ஐ காலியாக்குகிறது. இது plugin-ஐ அல்லது அதன் settings-ஐ நீக்காது.

```bash
wp gratis-ai-agent reset [--yes]
```

confirmation prompt-ஐ தவிர்க்க `--yes` சேர்க்கவும்.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

அனைத்து commands-களும் வெற்றிகரமாக இருந்தால் `0` என exit செய்யும். பூஜ்ஜியமற்ற exit codes:

| Code | Meaning |
|---|---|
| `1` | பொதுவான பிழை (error message பார்க்கவும்) |
| `2` | Provider connectivity failure |
| `3` | Ability not found |
| `4` | Benchmark question not found |
