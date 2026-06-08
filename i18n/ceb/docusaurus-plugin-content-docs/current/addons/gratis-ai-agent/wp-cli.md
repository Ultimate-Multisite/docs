---
title: WP-CLI Sanggunian
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Sanggunian

Ang Gratis AI Agent naghatag og usa ka pamilya sa mga command nga `wp gratis-ai-agent` para sa pag-benchmark sa agent, pagdumala sa iyang mga abilidad (abilities), ug pagpangutana sa kahimtang sa agent gikan sa command line. Kinahanglan ang tanang command nga WP-CLI 2.0 o mas taas pa.

## Installation

Ang mga command sa WP-CLI awtomatikong irehistro kung aktibo ang plugin. Pagkumpirma gamit kini:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Nagpadagan kini sa Agent Capabilities benchmark suite — usa ka set sa komplikado, multi-step nga mga prompts nga nag-ehersisyo sa tibuok abilidad surface. Gamita kini aron masusi ang performance sa model, pagtandi sa mga AI provider, o pag-validate sa ability packs sa dili pa i-deploy sa production.

### Synopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options

| Option | Description |
|---|---|
| `--question=<id>` | Pagpadagan og usa ka benchmark question gamit ang ID imbes nga ang tibuok suite |
| `--provider=<provider>` | I-override ang gitakdang AI provider alang niining pagpadagan (e.g., `anthropic`, `openai`) |
| `--model=<model>` | I-override ang gitakdang model alang niining pagpadagan (e.g., `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format sa output: `table` (default), `json`, `csv` |
| `--save` | I-save ang mga resulta sa benchmark ngadto sa database alang sa historical comparison |

### Examples

Pagpadagan sa tibuok benchmark suite gamit ang kasamtangang provider ug model:

```bash
wp gratis-ai-agent benchmark
```

Pagpadagan og usa ka question (`q-restaurant-website`) ug output isip JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Pagpadagan batok sa usa ka specific model ug i-save ang mga resulta:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output

Ang benchmark nagpagawas og usa ka row matag question nga adunay mosunod nga columns:

| Column | Description |
|---|---|
| `ID` | Question identifier |
| `Description` | Mubo nga summary sa benchmark scenario |
| `Score` | Pass/fail o numeric score (0–100) |
| `Abilities Used` | Listahan nga nagahiwalay og comma sa mga abilidad nga gigamit |
| `Tokens` | Kinatibuk-an nga tokens nga nakonsumo |
| `Duration` | Oras nga milabay (wall-clock time) sa segundo |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions

Ang default suite naglakip sa:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Paghimo og Portfolio CPT nga adunay Project Category taxonomy ug pagrehistro og block pattern |
| `q-restaurant-website` | Paghimo og tibuok restaurant website nga adunay menu CPT, booking form, ug navigation |
| `q-dark-mode-theme` | Pagbutang og dark-mode design preset ug pag-inject sa brand colours |
| `q-nav-builder` | Paghimo og upat ka item primary navigation menu nga adunay nested dropdown |
| `q-options-roundtrip` | Pagbasa, pag-modify, ug pagpabalik (restore) sa usa ka set sa WordPress options |
| `q-ability-install` | Pagtuklas ug pag-install sa labing angay nga ability pack alang sa gihulagway nga use case |

Ang dugang nga mga questions mahimong irehistro pinaagi sa `gratis_ai_agent_benchmark_questions` filter.

---

## `wp gratis-ai-agent abilities`

Nagdumala kini sa gi-install nga mga abilidad ug ability packs.

### `wp gratis-ai-agent abilities list`

Nilista ang tanang narehistro nga abilidad, ang ilang tinubdan (core o pack), ug ang ilang kasamtangang status.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | Format sa output: `table` (default), `json`, `csv` |

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

Nagdownload ug nag-activate og ability pack gikan sa registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug sa ability pack, e.g., `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Nag-disable og specific ability nga dili makawala sa pack. Maayo kini aron limitahan ang scope sa agent sa usa ka site.

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

Nagpabalik og pag-enable sa usa ka ability nga kaniadto na-disable.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Nagpakita kini sa kasamtangang configuration sa agent ug connectivity status.

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

Nagpakita kini sa bag-ong kalihokan sa agent gikan sa debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | Pagpakita sa miaging N ka mga entry sa log. Default `50` |
| `--level=<level>` | Filter base sa level: `info`, `warning`, `error` |
| `--ability=<ability>` | Filter base sa ngalan sa abilidad |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Nag-reset sa state sa agent: naglimpyo sa gi-inject nga CSS, nakuha ang mga CPT ug taxonomies nga narehistro sa agent, nag-reset sa global styles, ug nagpakaulo (empty) sa options cache sa agent. Dili kini makawala sa plugin o sa iyang settings.

```bash
wp gratis-ai-agent reset [--yes]
```

Idugang ang `--yes` aron malikayan ang confirmation prompt.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes

Ang tanang command mo-exit og `0` kung malampuson. Ang dili zero nga exit codes:

| Code | Meaning |
|---|---|
| `1` | General error (tan-awa ang mensahe sa sayop) |
| `2` | Provider connectivity failure |
| `3` | Ability not found |
| `4` | Benchmark question not found |
