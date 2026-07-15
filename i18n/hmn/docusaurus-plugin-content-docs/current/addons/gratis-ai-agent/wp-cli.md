---
title: WP-CLI Phau ntawv siv
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Reference

Gratis AI Agent xa nrog ib pab command `wp gratis-ai-agent` rau kev ntsuas agent, tswj abilities, thiab nug agent status ntawm command line. Txhua command yuav tsum muaj WP-CLI 2.0 lossis siab dua.

## Kev nruab {#installation}

Cov WP-CLI commands raug sau npe cia li thaum plugin qhib lawm. Xyuas nrog:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Khiav pab benchmark rau Agent Capabilities — yog ib pawg prompts nyuaj, muaj ntau kauj ruam uas sim tag nrho thaj tsam abilities. Siv qhov no los ntsuas model performance, piv AI providers, lossis xyuas ability packs ua ntej muab tso rau production.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options {#options}

| Option | Description |
|---|---|
| `--question=<id>` | Khiav ib lo lus nug benchmark nkaus xwb raws ID hloov qhov full suite |
| `--provider=<provider>` | Hla tus AI provider uas teeb cia rau qhov kev khiav no (piv txwv `anthropic`, `openai`) |
| `--model=<model>` | Hla tus model uas teeb cia rau qhov kev khiav no (piv txwv `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Hom output: `table` (default), `json`, `csv` |
| `--save` | Khaws benchmark results rau hauv database rau kev piv yav dhau los |

### Piv txwv {#examples}

Khiav full benchmark suite nrog provider thiab model tam sim no:

```bash
wp gratis-ai-agent benchmark
```

Khiav ib lo lus nug nkaus xwb (`q-restaurant-website`) thiab tso output ua JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Khiav rau ib model tshwj xeeb thiab khaws results:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

Benchmark tso tawm ib kab rau ib lo lus nug nrog cov columns hauv qab no:

| Column | Description |
|---|---|
| `ID` | Tus cim lo lus nug |
| `Description` | Cov ntsiab lus luv ntawm benchmark scenario |
| `Score` | Dhau/poob lossis tus qhab nia lej (0–100) |
| `Abilities Used` | Daim npe abilities uas tau hu siv, cais los ntawm comma |
| `Tokens` | Tag nrho tokens uas siv |
| `Duration` | Sijhawm wall-clock hauv vib nas this |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Cov Lus Nug Benchmark {#benchmark-questions}

Default suite muaj xws li:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Tsim ib Portfolio CPT nrog Project Category taxonomy thiab sau npe ib block pattern |
| `q-restaurant-website` | Tsim ib lub website restaurant puv nrog menu CPT, booking form, thiab navigation |
| `q-dark-mode-theme` | Siv ib dark-mode design preset thiab ntxig brand colours |
| `q-nav-builder` | Tsim ib primary navigation menu muaj plaub yam nrog nested dropdown |
| `q-options-roundtrip` | Nyeem, hloov, thiab restore ib pawg WordPress options |
| `q-ability-install` | Tshawb nrhiav thiab nruab ability pack uas haum tshaj rau ib qho use case uas piav tseg |

Cov lus nug ntxiv tuaj yeem sau npe tau ntawm filter `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Tswj abilities thiab ability packs uas twb nruab lawm.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Teev tag nrho abilities uas tau sau npe, lawv qhov chaw los (core lossis pack), thiab lawv status tam sim no.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | Hom output: `table` (default), `json`, `csv` |

**Piv txwv output**

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

Rub tawm thiab qhib ib ability pack los ntawm registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug ntawm ability pack, piv txwv `gratis-ai-agent-woocommerce` |

**Piv txwv**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Tua ib ability tshwj xeeb yam tsis tshem pack tawm. Zoo siv rau kev txwv agent qhov scope ntawm ib lub site twg.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Piv txwv**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Qhib dua ib ability uas twb tau tua ua ntej lawm.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Qhia agent configuration tam sim no thiab connectivity status.

```bash
wp gratis-ai-agent status
```

**Piv txwv output**

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

Qhia agent activity tsis ntev los no ntawm debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Kev xaiv | Kev piav qhia |
|---|---|
| `--last=<n>` | Qhia N kab log entries kawg. Default `50` |
| `--level=<level>` | Lim raws level: `info`, `warning`, `error` |
| `--ability=<ability>` | Lim raws npe ability |

**Piv txwv**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Reset agent state: tshem injected CSS, tshem CPTs thiab taxonomies uas agent sau npe, reset global styles, thiab muab agent's options cache khoob. Tsis tshem plugin lossis nws cov settings.

```bash
wp gratis-ai-agent reset [--yes]
```

Ntxiv `--yes` kom hla qhov confirmation prompt.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

Txhua commands tawm `0` thaum ua tiav. Exit codes uas tsis yog zero:

| Code | Lub ntsiab |
|---|---|
| `1` | Kev yuam kev dav dav (saib error message) |
| `2` | Provider connectivity failure |
| `3` | Nrhiav tsis tau ability |
| `4` | Nrhiav tsis tau benchmark question |
