---
title: Mwongozo wa WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Rejeleo la WP-CLI

Gratis AI Agent inatuma amani ya amri ya `wp gratis-ai-agent` kwa ajili ya kupima uwezo wa agent, kusimamia uwezo (abilities), na kuuliza hali ya agent kutoka kwenye command line. Amri zote zinahitaji WP-CLI 2.0 au zaidi.

## Usakinishaji (Installation)

Amri za WP-CLI zinajisajili kiotomatiki wakati plugin inapoanzishwa. Thibitisha kwa kutumia:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Inaendesha seti ya kupima uwezo wa Agent — ni seti ya maelekezo magumu na ya hatua nyingi ambayo yanajaribu uwezo wote. Tumia hili kutathmini utendaji wa mfumo (model), kulinganisha watoa huduma wa AI, au kuthibitisha vifurushi vya uwezo kabla ya kuweka kwenye mfumo halisi (production).

### Muhtasari (Synopsis)

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Chaguo (Options)

| Chaguo | Maelezo |
|---|---|
| `--question=<id>` | Endesha swali moja la kupima kwa kutumia ID badala ya seti nzima |
| `--provider=<provider>` | Badilisha watoa huduma wa AI walioainishwa kwa ajili ya run hii (mfano: `anthropic`, `openai`) |
| `--model=<model>` | Badilisha mfumo (model) uliowekwa kwa ajili ya run hii (mfano: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Muundo wa matokeo: `table` (kawaida), `json`, `csv` |
| `--save` | Hifadhi matokeo ya kupima kwenye database kwa ajili ya kulinganisha kihistoria |

### Mifano (Examples)

Endesha seti nzima ya kupima kwa kutumia watoa huduma na mfumo wa sasa:

```bash
wp gratis-ai-agent benchmark
```

Endesha swali moja (`q-restaurant-website`) na toa matokeo kama JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Endesha kwa kutumia mfumo maalum na kuhifadhi matokeo:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Matokeo (Output)

Kupima hutoa safu moja kwa kila swali na safu zifuatazo:

| Safu (Column) | Maelezo |
|---|---|
| `ID` | Kitambulisho cha swali |
| `Description` | Muhtasari mfupi wa hali ya kupima |
| `Score` | Kupita/kikosa au alama ya namba (0–100) |
| `Abilities Used` | Orodha iliyotenganishwa kwa koma ya uwezo ulioitumika |
| `Tokens` | Jumla ya tokens zilizotumika |
| `Duration` | Muda uliopita kwa saa (seconds) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Maswali ya Kupima (Benchmark Questions)

Seti ya kawaida inajumuisha:

| ID | Hali (Scenario) |
|---|---|
| `q-portfolio-site` | Kuunda CPT ya Portfolio na taxonomy ya Project Category na kujisajili block pattern |
| `q-restaurant-website` | Kuunda tovuti kamili ya mgahawa na CPT ya menu, fomu ya kukufunga, na navigation |
| `q-dark-mode-theme` | Kutumia mipangilio ya muundo wa hali ya giza na kuingiza rangi za chapa |
| `q-nav-builder` | Kuunda menyu kuu ya vitu vinne na orodha ndogo iliyo ndani |
| `q-options-roundtrip` | Kusoma, kubadilisha, na kurejesha seti ya options za WordPress |
| `q-ability-install` | Kugundua na kusakinisha vifurushi vya uwezo vinavyofaa zaidi kwa matumizi yaliyoelezwa |

Maswali zaidi yanaweza kujisajili kupitia filter ya `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Inasimamia uwezo vilivyosakinishwa na vifurushi vya uwezo.

### `wp gratis-ai-agent abilities list`

Inorodhesha uwezo wote zilizosajiliwa, chanzo chao (core au pack), na hali yao ya sasa.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Chaguo (Options)**

| Chaguo | Maelezo |
|---|---|
| `--format=<format>` | Muundo wa matokeo: `table` (kawaida), `json`, `csv` |

**Mfano wa matokeo**

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

Inapakua na kuwezesha vifurushi vya uwezo kutoka kwenye registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Vipengele (Arguments)**

| Kipengele | Maelezo |
|---|---|
| `<slug>` | Slug ya plugin ya vifurushi vya uwezo, mfano: `gratis-ai-agent-woocommerce` |

**Mfano**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Inazimisha uwezo maalum bila kuondoa kifurushi. Inafaa kwa kuzuia uwezo wa agent kwenye tovuti fulani.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Mfano**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Inuwezesha tena uwezo uliozimishwa hapo awali.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Inaonyesha mipangilio ya sasa ya agent na hali ya muunganisho.

```bash
wp gratis-ai-agent status
```

**Mfano wa matokeo**

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

Inaonyesha shughuli za hivi karibuni za agent kutoka kwenye log ya debug.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Chaguo (Options)**

| Chaguo | Maelezo |
|---|---|
| `--last=<n>` | Onyesha ncha N za log. Kawaida `50` |
| `--level=<level>` | Chuja kwa kiwango: `info`, `warning`, `error` |
| `--ability=<ability>` | Chuja kwa jina la uwezo |

**Mfano**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Inarejesha hali ya agent: inafuta CSS iliyoingizwa, inaondoa CPTs na taxonomies zilizosajiliwa na agent, inarejesha mipangilio ya global styles, na inafuta cache ya options ya agent. Haiondii plugin au mipangilio yake.

```bash
wp gratis-ai-agent reset [--yes]
```

Ongeza `--yes` ili kukwepa kuulizwa idhini.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Vitengo vya Kutoka (Exit Codes)

Amri zote zinatoka `0` kwa mafanikio. Vitengo vya kutoka visivyo sifuri:

| Code | Maana |
|---|---|
| `1` | Hitilafu kwa ujumla (angalia ujumbe wa hitilafu) |
| `2` | Kushindwa kwa muunganisho wa Provider |
| `3` | Uwezo haukupatikana |
| `4` | Swali la kupima halikupatikana |
