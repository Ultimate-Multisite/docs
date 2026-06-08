---
title: WP-CLI Sanggunian
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Reference

Ang Gratis AI Agent ay may kasamang `wp gratis-ai-agent` command family para sa pagsubok (benchmarking) sa agent, pamamahala ng mga kakayahan (abilities), at pagkuha ng status ng agent mula sa command line. Kailangan ng lahat ng utos na ito ang WP-CLI 2.0 o mas mataas.

## Installation

Awtomatikong ire-register ang mga WP-CLI commands kapag aktibo ang plugin. I-verify ito gamit ang:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Ipinapatakbo nito ang Agent Capabilities benchmark suite — isang hanay ng mga kumplikado, multi-step na prompts na nagpapalakas sa buong kakayahan ng agent. Gamitin ito para suriin ang performance ng model, ikumpara ang iba't ibang AI providers, o i-validate ang mga ability pack bago ito i-deploy sa production.

### Synopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options

| Option | Description |
|---|---|
| `--question=<id>` | Patakbuhin ang isang benchmark question gamit ang ID sa halip na ang buong suite |
| `--provider=<provider>` | Palitan ang naka-configure na AI provider para sa pagpapatakbo na ito (hal. `anthropic`, `openai`) |
| `--model=<model>` | Palitan ang naka-configure na model para sa pagpapatakbo na ito (hal. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format ng output: `table` (default), `json`, `csv` |
| `--save` | I-save ang mga resulta ng benchmark sa database para sa historical comparison |

### Examples

Patakbuhin ang buong benchmark suite gamit ang kasalukuyang provider at model:

```bash
wp gratis-ai-agent benchmark
```

Patakbuhin ang isang tanong lamang (`q-restaurant-website`) at i-output bilang JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Patakbuhin laban sa isang specific model at i-save ang resulta:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output

Ang benchmark ay naglalabas ng isang row bawat tanong na may mga sumusunod na column:

| Column | Description |
|---|---|
| `ID` | Identifier ng tanong |
| `Description` | Maikling buod ng scenario ng benchmark |
| `Score` | Pass/fail o numeric score (0–100) |
| `Abilities Used` | Listahan ng mga kakayahan na ginamit, pinaghihiwalay ng kuwit |
| `Tokens` | Kabuuang tokens na nagamit |
| `Duration` | Oras na lumipas (wall-clock time) sa segundo |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions

Kasama sa default suite ang:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Gumawa ng Portfolio CPT na may Project Category taxonomy at mag-register ng block pattern |
| `q-restaurant-website` | Gumawa ng kumpletong restaurant website na may menu CPT, booking form, at navigation |
| `q-dark-mode-theme` | Mag-apply ng dark-mode design preset at mag-inject ng brand colours |
| `q-nav-builder` | Gumawa ng apat na item na primary navigation menu na may nested dropdown |
| `q-options-roundtrip` | Basahin, baguhin, at ibalik ang isang set ng WordPress options |
| `q-ability-install` | Tuklasin at i-install ang pinaka-angkop na ability pack para sa isang inilarawang use case |

Ang mga karagdagang tanong ay maaaring i-register gamit ang `gratis_ai_agent_benchmark_questions` filter.

---

## `wp gratis-ai-agent abilities`

Pamamahala ng mga naka-install na abilities at ability packs.

### `wp gratis-ai-agent abilities list`

Ililista nito ang lahat ng naka-register na abilities, ang kanilang pinagmulan (core o pack), at ang kanilang kasalukuyang status.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | Format ng output: `table` (default), `json`, `csv` |

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

I-da-download at i-a-activate ang isang ability pack mula sa registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug ng ability pack, hal. `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Ididisable nito ang isang specific ability nang hindi inaalis ang pack. Kapaki-pakinabang ito para limitahan ang saklaw ng agent sa isang site.

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

Muling magpapa-enable ng isang dating na-disable na ability.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Nagpapakita ito ng kasalukuyang configuration at connectivity status ng agent.

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

Nagpapakita ito ng mga huling aktibidad ng agent mula sa debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | Ipakita ang huling N na log entries. Default: `50` |
| `--level=<level>` | I-filter ayon sa level: `info`, `warning`, `error` |
| `--ability=<ability>` | I-filter ayon sa pangalan ng ability |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

I-re-set ang state ng agent: nililinis ang injected CSS, inaalis ang mga CPT at taxonomy na na-register ng agent, i-re-set ang global styles, at pinapawalang laman ang options cache ng agent. Hindi nito inaalis ang plugin o ang mga settings nito.

```bash
wp gratis-ai-agent reset [--yes]
```

Magdagdag ng `--yes` para laktawan ang confirmation prompt.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes

Lahat ng commands ay nagtatapos sa `0` kapag matagumpay. Ang non-zero exit codes:

| Code | Meaning |
|---|---|
| `1` | General error (tingnan ang error message) |
| `2` | Provider connectivity failure |
| `3` | Ability not found |
| `4` | Benchmark question not found |
