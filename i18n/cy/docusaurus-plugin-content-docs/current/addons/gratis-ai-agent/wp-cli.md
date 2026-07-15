---
title: Cyfeirnod WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Cyfeirnod WP-CLI

Mae Gratis AI Agent yn cynnwys teulu gorchmynion `wp gratis-ai-agent` ar gyfer meincnodi’r asiant, rheoli galluoedd, ac ymholi statws yr asiant o’r llinell orchymyn. Mae pob gorchymyn yn gofyn am WP-CLI 2.0 neu uwch.

## Gosod {#installation}

Caiff y gorchmynion WP-CLI eu cofrestru’n awtomatig pan fydd y plugin yn weithredol. Gwiriwch gyda:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Yn rhedeg cyfres feincnodi Galluoedd yr Asiant — set o ysgogiadau cymhleth, aml-gam sy’n profi wyneb llawn y galluoedd. Defnyddiwch hyn i werthuso perfformiad model, cymharu darparwyr AI, neu ddilysu pecynnau gallu cyn eu defnyddio mewn cynhyrchu.

### Crynodeb {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opsiynau {#options}

| Opsiwn | Disgrifiad |
|---|---|
| `--question=<id>` | Rhedeg un cwestiwn meincnodi yn ôl ID yn lle’r gyfres lawn |
| `--provider=<provider>` | Diystyru’r darparwr AI sydd wedi’i ffurfweddu ar gyfer y rhediad hwn (e.e. `anthropic`, `openai`) |
| `--model=<model>` | Diystyru’r model sydd wedi’i ffurfweddu ar gyfer y rhediad hwn (e.e. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Fformat allbwn: `table` (rhagosodedig), `json`, `csv` |
| `--save` | Cadw canlyniadau’r meincnod i’r gronfa ddata ar gyfer cymhariaeth hanesyddol |

### Enghreifftiau {#examples}

Rhedeg y gyfres feincnodi lawn gyda’r darparwr a’r model cyfredol:

```bash
wp gratis-ai-agent benchmark
```

Rhedeg un cwestiwn (`q-restaurant-website`) ac allbynnu fel JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Rhedeg yn erbyn model penodol a chadw canlyniadau:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Allbwn {#output}

Mae’r meincnod yn allbynnu un rhes fesul cwestiwn gyda’r colofnau canlynol:

| Colofn | Disgrifiad |
|---|---|
| `ID` | Dynodydd cwestiwn |
| `Description` | Crynodeb byr o’r senario meincnodi |
| `Score` | Llwyddo/methu neu sgôr rifiadol (0–100) |
| `Abilities Used` | Rhestr wedi’i gwahanu gan atalnodau o alluoedd a alwyd |
| `Tokens` | Cyfanswm y tocynnau a ddefnyddiwyd |
| `Duration` | Amser wal mewn eiliadau |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Cwestiynau Meincnodi {#benchmark-questions}

Mae’r gyfres ragosodedig yn cynnwys:

| ID | Senario |
|---|---|
| `q-portfolio-site` | Creu CPT Portffolio gyda thacsonomeg Categori Prosiect a chofrestru patrwm bloc |
| `q-restaurant-website` | Adeiladu gwefan bwyty lawn gyda CPT bwydlen, ffurflen archebu, a llywio |
| `q-dark-mode-theme` | Cymhwyso rhagosodiad dylunio modd tywyll a chwistrellu lliwiau brand |
| `q-nav-builder` | Creu dewislen llywio gynradd pedair eitem gyda gwymplen nythu |
| `q-options-roundtrip` | Darllen, addasu, ac adfer set o opsiynau WordPress |
| `q-ability-install` | Darganfod a gosod y pecyn gallu mwyaf priodol ar gyfer achos defnydd a ddisgrifir |

Gellir cofrestru cwestiynau ychwanegol drwy’r hidlydd `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Yn rheoli galluoedd a phecynnau gallu sydd wedi’u gosod.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Yn rhestru pob gallu cofrestredig, ei ffynhonnell (craidd neu becyn), a’i statws cyfredol.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opsiynau**

| Opsiwn | Disgrifiad |
|---|---|
| `--format=<format>` | Fformat allbwn: `table` (rhagosodedig), `json`, `csv` |

**Allbwn enghreifftiol**

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

Yn lawrlwytho ac yn actifadu pecyn gallu o’r gofrestrfa.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Dadleuon**

| Dadl | Disgrifiad |
|---|---|
| `<slug>` | Slug plugin y pecyn gallu, e.e. `gratis-ai-agent-woocommerce` |

**Enghraifft**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Yn analluogi gallu penodol heb dynnu’r pecyn. Yn ddefnyddiol ar gyfer cyfyngu cwmpas yr asiant ar safle penodol.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Enghraifft**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Yn ail-alluogi gallu a analluogwyd yn flaenorol.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Yn dangos ffurfweddiad cyfredol yr asiant a statws cysylltedd.

```bash
wp gratis-ai-agent status
```

**Allbwn enghreifftiol**

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

Yn dangos gweithgarwch diweddar yr asiant o’r log dadfygio.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opsiynau**

| Opsiwn | Disgrifiad |
|---|---|
| `--last=<n>` | Dangos y N cofnod log olaf. Diofyn `50` |
| `--level=<level>` | Hidlo yn ôl lefel: `info`, `warning`, `error` |
| `--ability=<ability>` | Hidlo yn ôl enw gallu |

**Enghraifft**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Yn ailosod cyflwr yr agent: yn clirio CSS wedi'i chwistrellu, yn dileu CPTs a thacsonomegau a gofrestrwyd gan yr agent, yn ailosod arddulliau byd-eang, ac yn gwagio cache opsiynau'r agent. Nid yw'n dileu'r plugin na'i osodiadau.

```bash
wp gratis-ai-agent reset [--yes]
```

Ychwanegwch `--yes` i hepgor y neges gadarnhau.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Codau Gadael {#exit-codes}

Mae pob gorchymyn yn gadael gyda `0` ar lwyddiant. Codau gadael nad ydynt yn sero:

| Cod | Ystyr |
|---|---|
| `1` | Gwall cyffredinol (gweler y neges wall) |
| `2` | Methiant cysylltedd provider |
| `3` | Gallu heb ei ganfod |
| `4` | Cwestiwn benchmark heb ei ganfod |
