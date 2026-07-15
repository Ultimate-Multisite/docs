---
title: WP-CLI Chirevo
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referensi yeWP-CLI

Gratis AI Agent inouya nemhuri yemirairo ye`wp gratis-ai-agent` yekuyera mashandiro eajenti, kutarisira hunyanzvi, uye kubvunza chimiro cheajenti kubva pamutsetse wemirairo. Mirairo yose inoda WP-CLI 2.0 kana yepamusoro.

## Kuisa {#installation}

Mirairo yeWP-CLI inonyoreswa otomatiki kana plugin iri kushanda. Simbisa ne:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Inomhanyisa boka rebvunzo dzeAgent Capabilities — seti yezvikumbiro zvakaoma, zvine nhanho dzakawanda zvinoedza nzvimbo yose yehunyanzvi. Shandisa izvi kuongorora mashandiro emodel, kuenzanisa vanopa AI, kana kusimbisa mapakeji ehunyanzvi usati waendesa kugadzirwa.

### Pfupiso {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Sarudzo {#options}

| Sarudzo | Tsananguro |
|---|---|
| `--question=<id>` | Mhanyisa mubvunzo mumwe chete webvunzo neID panzvimbo peboka rose |
| `--provider=<provider>` | Tsiva mupi weAI akagadziriswa pakumhanya uku (semuenzaniso `anthropic`, `openai`) |
| `--model=<model>` | Tsiva model yakagadziriswa pakumhanya uku (semuenzaniso `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Fomati yekuburitsa: `table` (default), `json`, `csv` |
| `--save` | Chengetedza zvabuda mubvunzo mudatabase kuitira kuenzanisa kwenhoroondo |

### Mienzaniso {#examples}

Mhanyisa boka rose rebvunzo nemupi uye model zvazvino:

```bash
wp gratis-ai-agent benchmark
```

Mhanyisa mubvunzo mumwe chete (`q-restaurant-website`) uye budisa seJSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Mhanyisa uchipesana nemodel yakatarwa uye chengetedza zvabuda:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Zvabuda {#output}

Bvunzo inoburitsa mutsara mumwe pamubvunzo nemakoramu anotevera:

| Koramu | Tsananguro |
|---|---|
| `ID` | Chiziviso chemubvunzo |
| `Description` | Pfupiso pfupi yemamiriro ebvunzo |
| `Score` | Kupasa/kutadza kana chibodzwa chenhamba (0–100) |
| `Abilities Used` | Rondedzero yehunyanzvi hwakashandiswa yakapatsanurwa nemakoma |
| `Tokens` | Matokens akadyiwa ose |
| `Duration` | Nguva chaiyo yakatorwa mumasekondi |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Mibvunzo yeBvunzo {#benchmark-questions}

Boka redefault rinosanganisira:

| ID | Mamiriro |
|---|---|
| `q-portfolio-site` | Gadzira Portfolio CPT ine taxonomy yeProject Category uye nyoresa block pattern |
| `q-restaurant-website` | Vaka webhusaiti yakazara yeresitorendi ine menu CPT, fomu rekubhuka, uye navigation |
| `q-dark-mode-theme` | Shandisa preset yedhizaini ye dark-mode uye isa mavara ebrand |
| `q-nav-builder` | Gadzira menyu yeprimary navigation ine zvinhu zvina ine dropdown yakaiswa mukati |
| `q-options-roundtrip` | Verenga, chinja, uye dzorera seti yesarudzo dzeWordPress |
| `q-ability-install` | Tsvaga uye isa paki yehunyanzvi yakakodzera zvikuru kune use case yakatsanangurwa |

Mibvunzo yekuwedzera inogona kunyoreswa kuburikidza nefilter ye`gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Inotarisira hunyanzvi hwakaiswa uye mapakeji ehunyanzvi.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Inonyora hunyanzvi hwose hwakanyoreswa, kwahunobva (core kana pack), uye chimiro chahwo chazvino.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Sarudzo**

| Sarudzo | Tsananguro |
|---|---|
| `--format=<format>` | Fomati yekuburitsa: `table` (default), `json`, `csv` |

**Muenzaniso wezvabuda**

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

Inodhawunirodha uye inomutsa paki yehunyanzvi kubva muregistry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Nharo**

| Nharo | Tsananguro |
|---|---|
| `<slug>` | Plugin slug yepaki yehunyanzvi, semuenzaniso `gratis-ai-agent-woocommerce` |

**Muenzaniso**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Inodzima hunyanzvi hwakati pasina kubvisa pack. Zvinobatsira pakudzora nzvimbo inobvumidzwa yeajenti pasite yakapihwa.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Muenzaniso**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Inobatidza zvakare hunyanzvi hwakambodzimwa.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Inoratidza configuration yeajenti yazvino uye chimiro chekubatana.

```bash
wp gratis-ai-agent status
```

**Muenzaniso wezvabuda**

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

Inoratidza chiitiko cheajenti chichangobva kuitika kubva mudebug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Sarudzo**

| Sarudzo | Tsananguro |
|---|---|
| `--last=<n>` | Ratidza zvinyorwa zve log zvekupedzisira N. Default `50` |
| `--level=<level>` | Sefa nenhanho: `info`, `warning`, `error` |
| `--ability=<ability>` | Sefa nezita rekugona |

**Muenzaniso**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Inodzoreredza mamiriro emumiriri: inobvisa CSS yakaiswa, inobvisa maCPTs nema taxonomies akanyoreswa nemumiriri, inodzoreredza masitayera epasi rose, uye inodurura cache yesarudzo dzemumiriri. Haibvisi chinowedzerwa kana marongero acho.

```bash
wp gratis-ai-agent reset [--yes]
```

Wedzera `--yes` kuti usvetuke chikumbiro chekusimbisa.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Makodhi eKubuda {#exit-codes}

Mirairo yose inobuda ne `0` kana yabudirira. Makodhi ekubuda asiri zero:

| Kodhi | Zvazvinoreva |
|---|---|
| `1` | Kukanganisa kwakajairika (ona meseji yekukanganisa) |
| `2` | Kukundikana kwekubatana nemupi |
| `3` | Kugona hakuna kuwanikwa |
| `4` | Mubvunzo we benchmark hauna kuwanikwa |
