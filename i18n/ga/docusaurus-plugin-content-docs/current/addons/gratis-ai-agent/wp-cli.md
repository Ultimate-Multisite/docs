---
title: Tagairt WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Tagairt WP-CLI {#wp-cli-reference}

Tagann Gratis AI Agent le teaghlach orduithe `wp gratis-ai-agent` chun tagarmharcáil a dhéanamh ar an ngníomhaire, cumais a bhainistiú, agus stádas an ghníomhaire a fhiosrú ón líne ordaithe. Éilíonn gach ordú WP-CLI 2.0 nó níos airde.

## Suiteáil {#installation}

Cláraítear na horduithe WP-CLI go huathoibríoch nuair atá an plugin gníomhach. Fíoraigh le:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Ritheann sé sraith tagarmharcála Chumais an Ghníomhaire — tacar leideanna casta, ilchéime a chuireann dromchla iomlán na gcumas i bhfeidhm. Úsáid é seo chun feidhmíocht samhla a mheas, soláthraithe AI a chur i gcomparáid, nó pacaí cumais a bhailíochtú sula gcuirtear i dtáirgeadh iad.

### Achoimre {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Roghanna {#options}

| Rogha | Cur síos |
|---|---|
| `--question=<id>` | Rith ceist tagarmharcála amháin de réir ID in ionad na sraithe iomláine |
| `--provider=<provider>` | Sáraigh an soláthraí AI cumraithe don rith seo (m.sh. `anthropic`, `openai`) |
| `--model=<model>` | Sáraigh an tsamhail chumraithe don rith seo (m.sh. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Formáid aschuir: `table` (réamhshocrú), `json`, `csv` |
| `--save` | Sábháil torthaí an tagarmhairc sa bhunachar sonraí le haghaidh comparáide stairiúla |

### Samplaí {#examples}

Rith an tsraith tagarmharcála iomlán leis an soláthraí agus an tsamhail reatha:

```bash
wp gratis-ai-agent benchmark
```

Rith ceist amháin (`q-restaurant-website`) agus aschur mar JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Rith in aghaidh samhla ar leith agus sábháil torthaí:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Aschur {#output}

Cuireann an tagarmharc ró amháin in aghaidh na ceiste amach leis na colúin seo a leanas:

| Colún | Cur síos |
|---|---|
| `ID` | Aitheantóir ceiste |
| `Description` | Achoimre ghearr ar chás an tagarmhairc |
| `Score` | Pas/teip nó scór uimhriúil (0–100) |
| `Abilities Used` | Liosta cumas a glaodh orthu, scartha le camóga |
| `Tokens` | Líon iomlán token a ídíodh |
| `Duration` | Am clogbhalla i soicindí |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Ceisteanna Tagarmharcála {#benchmark-questions}

Áirítear sa tsraith réamhshocraithe:

| ID | Cás |
|---|---|
| `q-portfolio-site` | Cruthaigh Portfolio CPT le tacsanomaíocht Project Category agus cláraigh patrún bloc |
| `q-restaurant-website` | Tóg suíomh gréasáin bialainne iomlán le menu CPT, foirm áirithinte, agus nascleanúint |
| `q-dark-mode-theme` | Cuir réamhshocrú deartha mód dorcha i bhfeidhm agus insteall dathanna branda |
| `q-nav-builder` | Cruthaigh roghchlár príomhnascleanúna ceithre mhír le roghchlár anuas neadaithe |
| `q-options-roundtrip` | Léigh, modhnaigh, agus athchóirigh tacar roghanna WordPress |
| `q-ability-install` | Aimsigh agus suiteáil an paca cumais is oiriúnaí do chás úsáide a gcuirtear síos air |

Is féidir ceisteanna breise a chlárú tríd an scagaire `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Bainistíonn sé cumais agus pacaí cumais suiteáilte.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Liostaíonn sé na cumais chláraithe uile, a bhfoinse (croí nó paca), agus a stádas reatha.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Roghanna**

| Rogha | Cur síos |
|---|---|
| `--format=<format>` | Formáid aschuir: `table` (réamhshocrú), `json`, `csv` |

**Aschur samplach**

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

Íoslódálann agus gníomhaíonn sé paca cumais ón gclárlann.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argóintí**

| Argóint | Cur síos |
|---|---|
| `<slug>` | Slug plugin an phaca cumais, m.sh. `gratis-ai-agent-woocommerce` |

**Sampla**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Díchumasaíonn sé cumas ar leith gan an paca a bhaint. Úsáideach chun raon feidhme an ghníomhaire a shrianadh ar shuíomh ar leith.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Sampla**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Athchumasaíonn sé cumas a díchumasaíodh roimhe seo.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Taispeánann sé cumraíocht reatha an ghníomhaire agus stádas nascachta.

```bash
wp gratis-ai-agent status
```

**Aschur samplach**

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

Taispeánann sé gníomhaíocht le déanaí ón ngníomhaire ón loga dífhabhtaithe.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Roghanna**

| Rogha | Cur síos |
|---|---|
| `--last=<n>` | Taispeáin na N iontráil loga dheireanacha. Réamhshocrú `50` |
| `--level=<level>` | Scag de réir leibhéil: `info`, `warning`, `error` |
| `--ability=<ability>` | Scag de réir ainm cumais |

**Sampla**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Athshocraíonn sé staid an ghníomhaire: glanann sé CSS insteallta, baineann sé CPTs agus tacsanomaíochtaí cláraithe ag an ngníomhaire, athshocraíonn sé stíleanna domhanda, agus fholmhaíonn sé taisce roghanna an ghníomhaire. Ní bhaineann sé an breiseán ná a shocruithe.

```bash
wp gratis-ai-agent reset [--yes]
```

Cuir `--yes` leis chun an leid deimhnithe a scipeáil.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Cóid Scoir {#exit-codes}

Scoireann gach ordú le `0` ar éirigh leis. Cóid scoir neamh-nialasacha:

| Cód | Brí |
|---|---|
| `1` | Earráid ghinearálta (féach teachtaireacht earráide) |
| `2` | Teip nascachta soláthraí |
| `3` | Níor aimsíodh an cumas |
| `4` | Níor aimsíodh an cheist tagarmhairc |
