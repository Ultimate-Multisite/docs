---
title: Fanovozan-kevitra WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Reference

Gratis AI Agent dia mitondra fianakaviana baiko `wp gratis-ai-agent` ho an’ny benchmarking ny agent, fitantanana abilities, ary fakana ny satan’ny agent avy amin’ny command line. Ny baiko rehetra dia mitaky WP-CLI 2.0 na ambony kokoa.

## Fametrahana {#installation}

Ny baiko WP-CLI dia voasoratra ho azy rehefa mavitrika ny plugin. Hamarino amin’ny:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Mampandeha ny andiana benchmark Agent Capabilities — fitambarana prompts sarotra sy misy dingana maro izay mampiasa ny velaran’ny ability manontolo. Ampiasao ity hanombanana ny fahombiazan’ny model, hampitahana AI providers, na hanamarinana ability packs alohan’ny hampidirana azy amin’ny production.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Safidy {#options}

| Option | Description |
|---|---|
| `--question=<id>` | Alefaso fanontaniana benchmark tokana amin’ny alalan’ny ID fa tsy ny andiany manontolo |
| `--provider=<provider>` | Soloy ny AI provider voarindra ho an’ity fampandehanana ity (oh: `anthropic`, `openai`) |
| `--model=<model>` | Soloy ny model voarindra ho an’ity fampandehanana ity (oh: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Endrika output: `table` (default), `json`, `csv` |
| `--save` | Tehirizo ao amin’ny database ny vokatra benchmark ho an’ny fampitahana ara-tantara |

### Ohatra {#examples}

Alefaso ny andiana benchmark manontolo miaraka amin’ny provider sy model ankehitriny:

```bash
wp gratis-ai-agent benchmark
```

Alefaso fanontaniana tokana (`q-restaurant-website`) ary avoahy ho JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Alefaso amin’ny model voafaritra ary tehirizo ny vokatra:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

Ny benchmark dia mamoaka andalana iray isaky ny fanontaniana miaraka amin’ireto tsanganana manaraka ireto:

| Column | Description |
|---|---|
| `ID` | Famantarana ny fanontaniana |
| `Description` | Famintinana fohy ny toe-javatra benchmark |
| `Score` | Isa pass/fail na isa nomerika (0–100) |
| `Abilities Used` | Lisitra abilities nantsoina, sarahina amin’ny faingo |
| `Tokens` | Tontalin’ny tokens lany |
| `Duration` | Fotoana wall-clock amin’ny segondra |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Fanontaniana Benchmark {#benchmark-questions}

Ny andiany default dia ahitana:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Mamorona Portfolio CPT miaraka amin’ny taxonomy Project Category ary manoratra block pattern |
| `q-restaurant-website` | Manangana tranonkala restaurant feno miaraka amin’ny menu CPT, booking form, ary navigation |
| `q-dark-mode-theme` | Mampihatra preset famolavolana dark-mode ary mampiditra lokon’ny marika |
| `q-nav-builder` | Mamorona menu primary navigation misy singa efatra miaraka amin’ny dropdown misy ambaratonga |
| `q-options-roundtrip` | Mamaky, manova, ary mamerina andiana WordPress options |
| `q-ability-install` | Mahita sy mametraka ny ability pack mety indrindra ho an’ny use case voafaritra |

Afaka soratana amin’ny alalan’ny filter `gratis_ai_agent_benchmark_questions` ny fanontaniana fanampiny.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Mitantana abilities sy ability packs napetraka.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Mitanisa ny abilities rehetra voasoratra, ny loharanony (core na pack), ary ny satany ankehitriny.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Safidy**

| Option | Description |
|---|---|
| `--format=<format>` | Endrika output: `table` (default), `json`, `csv` |

**Ohatra output**

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

Misintona sy mampavitrika ability pack avy amin’ny registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug an’ny ability pack, oh: `gratis-ai-agent-woocommerce` |

**Ohatra**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Manafoana ability voafaritra iray nefa tsy manala ny pack. Ilaina amin’ny famerana ny sahan’ny agent amin’ny site iray.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Ohatra**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Mamerina mampavitrika ability efa nofoanana teo aloha.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Mampiseho ny fandrindrana agent ankehitriny sy ny satan’ny connectivity.

```bash
wp gratis-ai-agent status
```

**Ohatra output**

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

Mampiseho ny asan’ny agent vao haingana avy amin’ny debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Safidy**

| Safidy | Famaritana |
|---|---|
| `--last=<n>` | Asehoy ireo fidirana log N farany. Default `50` |
| `--level=<level>` | Sivano araka ny ambaratonga: `info`, `warning`, `error` |
| `--ability=<ability>` | Sivano araka ny anaran'ny ability |

**Ohatra**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Mamerina ny toetry ny agent: mamafa ny CSS nampidirina, manala ireo CPT sy taxonomy nosoratan'ny agent, mamerina ny styles maneran-tany, ary manafoana ny cache safidin'ny agent. Tsy manala ny plugin na ny settings-ny.

```bash
wp gratis-ai-agent reset [--yes]
```

Ampio `--yes` mba hitsipahana ny fangatahana fanamafisana.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Kaody Fivoahana {#exit-codes}

Ny baiko rehetra dia mivoaka `0` rehefa mahomby. Kaody fivoahana tsy aotra:

| Kaody | Heviny |
|---|---|
| `1` | Hadisoana ankapobeny (jereo ny hafatra hadisoana) |
| `2` | Tsy fahombiazan'ny fifandraisana amin'ny provider |
| `3` | Tsy hita ny ability |
| `4` | Tsy hita ny fanontaniana benchmark |
