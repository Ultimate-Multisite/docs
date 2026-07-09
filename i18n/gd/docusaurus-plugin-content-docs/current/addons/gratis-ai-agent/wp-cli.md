---
title: Iomradh WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Iomradh WP-CLI

Tha Gratis AI Agent a’ lìbhrigeadh teaghlach òrduighean `wp gratis-ai-agent` airson tomhas-coileanaidh an agent, stiùireadh chomasan, agus ceasnachadh inbhe an agent bhon loidhne-àithne. Feumaidh gach òrdugh WP-CLI 2.0 no nas àirde.

## Stàladh

Tha na h-òrduighean WP-CLI air an clàradh gu fèin-obrachail nuair a tha am plugin gnìomhach. Dearbhaich le:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Ruithidh seo seata tomhas-coileanaidh Chomasan an Agent — seata de bhrosnachaidhean iom-fhillte, ioma-cheumach a chuireas an làn raon chomasan gu feum. Cleachd seo gus coileanadh modail a mheasadh, solaraichean AI a choimeas, no pacaidean chomasan a dhearbhadh mus tèid an cur gu cinneasachadh.

### Geàrr-iomradh

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Roghainnean

| Roghainn | Tuairisgeul |
|---|---|
| `--question=<id>` | Ruith aon cheist tomhas-coileanaidh a rèir ID an àite an t-seata shlàin |
| `--provider=<provider>` | Cuir thairis an solaraiche AI a chaidh a rèiteachadh airson na ruith seo (m.e. `anthropic`, `openai`) |
| `--model=<model>` | Cuir thairis am modail a chaidh a rèiteachadh airson na ruith seo (m.e. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Fòrmat toraidh: `table` (bunaiteach), `json`, `csv` |
| `--save` | Sàbhail toraidhean an tomhais-choileanaidh dhan stòr-dàta airson coimeas eachdraidheil |

### Eisimpleirean

Ruith an seata tomhais-choileanaidh slàn leis an t-solaraiche agus am modail làithreach:

```bash
wp gratis-ai-agent benchmark
```

Ruith aon cheist (`q-restaurant-website`) agus cuir a-mach mar JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Ruith an aghaidh modail sònraichte agus sàbhail toraidhean:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Toradh

Cuiridh an tomhas-coileanaidh a-mach aon ràgh gach ceist leis na colbhan a leanas:

| Colbh | Tuairisgeul |
|---|---|
| `ID` | Aithnichear na ceiste |
| `Description` | Geàrr-chunntas goirid air suidheachadh an tomhais-choileanaidh |
| `Score` | Soirbheachadh/fàiligeadh no sgòr àireamhach (0–100) |
| `Abilities Used` | Liosta de chomasan a chaidh a ghairm, dealaichte le cromagan |
| `Tokens` | Iomlan nan tokens a chaidh a chaitheamh |
| `Duration` | Ùine a rèir a’ ghleoc ann an diogan |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Ceistean Tomhais-choileanaidh

Tha an seata bunaiteach a’ gabhail a-steach:

| ID | Suidheachadh |
|---|---|
| `q-portfolio-site` | Cruthaich CPT Pasgain-obrach le tacsonamaidh Roinn Pròiseict agus clàraich pàtran bloca |
| `q-restaurant-website` | Tog làrach-lìn taigh-bìdh iomlan le CPT clàr-bìdh, foirm glèidhidh, agus seòladh |
| `q-dark-mode-theme` | Cuir an sàs ro-shuidheachadh dealbhaidh modh-dorcha agus steall dathan branda |
| `q-nav-builder` | Cruthaich clàr-seòlaidh prìomhach le ceithir nithean agus clàr tuiteam-sìos neadaichte |
| `q-options-roundtrip` | Leugh, atharraich, agus aisig seata de roghainnean WordPress |
| `q-ability-install` | Lorg agus stàlaich am pasgan chomasan as freagarraiche airson cùis-chleachdaidh a chaidh a mhìneachadh |

Faodar ceistean a bharrachd a chlàradh tron chriathrag `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Stiùirichidh seo comasan agus pacaidean chomasan a chaidh a stàladh.

### `wp gratis-ai-agent abilities list`

Liostaichidh seo a h-uile comas clàraichte, an tùs aca (cridhe no pasgan), agus an inbhe làithreach aca.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Roghainnean**

| Roghainn | Tuairisgeul |
|---|---|
| `--format=<format>` | Fòrmat toraidh: `table` (bunaiteach), `json`, `csv` |

**Toradh eisimpleireach**

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

Luchdaichidh seo a-nuas agus cuiridh e an gnìomh pasgan chomasan bhon chlàr-lann.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argamaidean**

| Argamaid | Tuairisgeul |
|---|---|
| `<slug>` | Slug plugin a’ phacaid chomasan, m.e. `gratis-ai-agent-woocommerce` |

**Eisimpleir**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Cuiridh seo comas sònraichte à comas gun am pasgan a thoirt air falbh. Feumail airson raon-gnìomha an agent a chuingealachadh air làrach shònraichte.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Eisimpleir**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Cuiridh seo comas a chaidh a chur à comas roimhe an gnìomh a-rithist.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Seallaidh seo rèiteachadh làithreach an agent agus inbhe a’ cheangail.

```bash
wp gratis-ai-agent status
```

**Toradh eisimpleireach**

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

Seallaidh seo gnìomhachd o chionn ghoirid an agent bhon log dì-bhugachaidh.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Roghainnean**

| Roghainn | Tuairisgeul |
|---|---|
| `--last=<n>` | Seall na N inntrigidhean loga mu dheireadh. Bun-roghainn `50` |
| `--level=<level>` | Criathraich a-rèir ìre: `info`, `warning`, `error` |
| `--ability=<ability>` | Criathraich a-rèir ainm comais |

**Eisimpleir**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Ath-shuidhich staid an agent: glanaidh e CSS a chaidh a chur a-steach, bheir e air falbh CPTs agus taxonomies a chlàraich an agent, ath-shuidhichidh e stoidhlichean cruinneil, agus falamhaichidh e tasgadan roghainnean an agent. Cha toir e air falbh am plugin no na roghainnean aige.

```bash
wp gratis-ai-agent reset [--yes]
```

Cuir `--yes` ris gus leum seachad air a’ bhrosnachadh dearbhaidh.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Còdan Fàgail

Fàgaidh gach àithne le `0` ma shoirbhicheas i. Còdan fàgail neo-neoni:

| Còd | Ciall |
|---|---|
| `1` | Mearachd choitcheann (faic teachdaireachd na mearachd) |
| `2` | Fàilligeadh ceangail solaraiche |
| `3` | Cha deach comas a lorg |
| `4` | Cha deach ceist benchmark a lorg |
