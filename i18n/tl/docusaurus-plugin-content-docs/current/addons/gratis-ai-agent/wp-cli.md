---
title: Sanggunian ng WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Sanggunian ng WP-CLI {#wp-cli-reference}

Ang Gratis AI Agent ay may kasamang pamilya ng command na `wp gratis-ai-agent` para sa pag-benchmark ng agent, pamamahala ng mga kakayahan, at pagtatanong ng status ng agent mula sa command line. Lahat ng command ay nangangailangan ng WP-CLI 2.0 o mas mataas.

## Pag-install {#installation}

Awtomatikong nirerehistro ang mga WP-CLI command kapag aktibo ang plugin. Beripikahin gamit ang:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Pinapatakbo ang benchmark suite ng Mga Kakayahan ng Agent — isang hanay ng kumplikado at maraming-hakbang na prompt na sumusubok sa buong saklaw ng kakayahan. Gamitin ito para suriin ang pagganap ng model, paghambingin ang mga AI provider, o patunayan ang mga ability pack bago i-deploy sa production.

### Buod {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Mga Opsyon {#options}

| Opsyon | Paglalarawan |
|---|---|
| `--question=<id>` | Magpatakbo ng iisang benchmark question ayon sa ID sa halip na ang buong suite |
| `--provider=<provider>` | I-override ang naka-configure na AI provider para sa run na ito (hal. `anthropic`, `openai`) |
| `--model=<model>` | I-override ang naka-configure na model para sa run na ito (hal. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format ng output: `table` (default), `json`, `csv` |
| `--save` | I-save ang mga resulta ng benchmark sa database para sa makasaysayang paghahambing |

### Mga Halimbawa {#examples}

Patakbuhin ang buong benchmark suite gamit ang kasalukuyang provider at model:

```bash
wp gratis-ai-agent benchmark
```

Magpatakbo ng iisang question (`q-restaurant-website`) at ilabas bilang JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Patakbuhin laban sa partikular na model at i-save ang mga resulta:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

Naglalabas ang benchmark ng isang row kada question na may sumusunod na mga column:

| Column | Paglalarawan |
|---|---|
| `ID` | Identifier ng question |
| `Description` | Maikling buod ng benchmark scenario |
| `Score` | Pass/fail o numerikong score (0–100) |
| `Abilities Used` | Listahan ng mga kakayahang tinawag, pinaghihiwalay ng kuwit |
| `Tokens` | Kabuuang token na nakonsumo |
| `Duration` | Wall-clock na oras sa segundo |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Mga Benchmark Question {#benchmark-questions}

Kasama sa default suite ang:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Gumawa ng Portfolio CPT na may taxonomy na Project Category at magrehistro ng block pattern |
| `q-restaurant-website` | Bumuo ng buong website ng restaurant na may menu CPT, booking form, at navigation |
| `q-dark-mode-theme` | Maglapat ng dark-mode na design preset at magpasok ng mga kulay ng brand |
| `q-nav-builder` | Gumawa ng primary navigation menu na may apat na item at nested dropdown |
| `q-options-roundtrip` | Basahin, baguhin, at ibalik ang isang set ng mga opsyon sa WordPress |
| `q-ability-install` | Tuklasin at i-install ang pinakanababagay na ability pack para sa inilarawang use case |

Maaaring magrehistro ng karagdagang mga question sa pamamagitan ng filter na `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Pinamamahalaan ang mga naka-install na kakayahan at ability pack.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Inililista ang lahat ng nakarehistrong kakayahan, ang pinagmulan ng mga ito (core o pack), at ang kasalukuyang status ng mga ito.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Mga Opsyon**

| Opsyon | Paglalarawan |
|---|---|
| `--format=<format>` | Format ng output: `table` (default), `json`, `csv` |

**Halimbawang output**

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

Dina-download at ina-activate ang isang ability pack mula sa registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Mga Argumento**

| Argumento | Paglalarawan |
|---|---|
| `<slug>` | Plugin slug ng ability pack, hal. `gratis-ai-agent-woocommerce` |

**Halimbawa**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Dini-disable ang partikular na kakayahan nang hindi inaalis ang pack. Kapaki-pakinabang para limitahan ang saklaw ng agent sa isang ibinigay na site.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Halimbawa**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Muling ini-enable ang dating na-disable na kakayahan.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Ipinapakita ang kasalukuyang configuration ng agent at status ng connectivity.

```bash
wp gratis-ai-agent status
```

**Halimbawang output**

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

Ipinapakita ang kamakailang aktibidad ng agent mula sa debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Mga Opsyon**

| Opsyon | Paglalarawan |
|---|---|
| `--last=<n>` | Ipakita ang huling N entry ng log. Default `50` |
| `--level=<level>` | I-filter ayon sa level: `info`, `warning`, `error` |
| `--ability=<ability>` | I-filter ayon sa pangalan ng ability |

**Halimbawa**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Nire-reset ang estado ng agent: nililinis ang na-inject na CSS, inaalis ang mga CPT at taxonomy na nairehistro ng agent, nire-reset ang global styles, at inaalisan ng laman ang options cache ng agent. Hindi nito inaalis ang plugin o ang mga setting nito.

```bash
wp gratis-ai-agent reset [--yes]
```

Idagdag ang `--yes` upang laktawan ang prompt ng kumpirmasyon.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Mga Exit Code {#exit-codes}

Lahat ng command ay nag-e-exit ng `0` kapag matagumpay. Mga non-zero exit code:

| Code | Kahulugan |
|---|---|
| `1` | Pangkalahatang error (tingnan ang mensahe ng error) |
| `2` | Pagkabigo sa connectivity ng provider |
| `3` | Hindi natagpuan ang ability |
| `4` | Hindi natagpuan ang tanong sa benchmark |
