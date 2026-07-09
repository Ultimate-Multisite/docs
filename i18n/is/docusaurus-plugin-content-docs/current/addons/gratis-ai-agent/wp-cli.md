---
title: WP-CLI tilvísun
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI tilvísun

Gratis AI Agent kemur með `wp gratis-ai-agent` skipanafjölskyldu til að keyra afkastapróf á agentinum, stjórna eiginleikum og sækja stöðu agentsins úr skipanalínu. Allar skipanir krefjast WP-CLI 2.0 eða nýrra.

## Uppsetning

WP-CLI skipanirnar eru skráðar sjálfkrafa þegar plugin er virkt. Staðfestu með:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Keyrir Agent Capabilities afkastaprófasafnið — safn flókinna, margra skrefa fyrirmæla sem reyna á allt svið eiginleika. Notaðu þetta til að meta frammistöðu líkans, bera saman AI veitendur eða staðfesta eiginleikapakka áður en þeir eru settir í framleiðslu.

### Yfirlit

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Valkostir

| Option | Description |
|---|---|
| `--question=<id>` | Keyra eina afkastaprófsspurningu eftir auðkenni í stað alls safnsins |
| `--provider=<provider>` | Hunsa stilltan AI veitanda fyrir þessa keyrslu (t.d. `anthropic`, `openai`) |
| `--model=<model>` | Hunsa stillt líkan fyrir þessa keyrslu (t.d. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Úttakssnið: `table` (sjálfgefið), `json`, `csv` |
| `--save` | Vista niðurstöður afkastaprófsins í gagnagrunninum til sögulegs samanburðar |

### Dæmi

Keyra allt afkastaprófasafnið með núverandi veitanda og líkani:

```bash
wp gratis-ai-agent benchmark
```

Keyra eina spurningu (`q-restaurant-website`) og skila sem JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Keyra gegn tilteknu líkani og vista niðurstöður:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Úttak

Afkastaprófið skilar einni röð fyrir hverja spurningu með eftirfarandi dálkum:

| Column | Description |
|---|---|
| `ID` | Auðkenni spurningar |
| `Description` | Stutt samantekt á sviðsmynd afkastaprófsins |
| `Score` | Staðist/féll eða tölulegt skor (0–100) |
| `Abilities Used` | Kommaaðskilinn listi yfir eiginleika sem voru kallaðir |
| `Tokens` | Heildarfjöldi tokens sem voru notuð |
| `Duration` | Rauntími í sekúndum |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Afkastaprófsspurningar

Sjálfgefna safnið inniheldur:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Búa til Portfolio CPT með Project Category flokkunarkerfi og skrá block pattern |
| `q-restaurant-website` | Byggja fullbúinn veitingastaðarvef með menu CPT, bókunarformi og leiðarkerfi |
| `q-dark-mode-theme` | Beita hönnunarforskrift fyrir dökka stillingu og setja inn vörumerkjaliti |
| `q-nav-builder` | Búa til fjögurra atriða aðalleiðarvalmynd með hreiðruðum fellilista |
| `q-options-roundtrip` | Lesa, breyta og endurheimta safn WordPress valkosta |
| `q-ability-install` | Finna og setja upp hentugasta eiginleikapakkann fyrir lýst notkunartilvik |

Hægt er að skrá viðbótarspurningar í gegnum `gratis_ai_agent_benchmark_questions` filterinn.

---

## `wp gratis-ai-agent abilities`

Stjórnar uppsettum eiginleikum og eiginleikapökkum.

### `wp gratis-ai-agent abilities list`

Listar alla skráða eiginleika, uppruna þeirra (kjarna eða pakka) og núverandi stöðu þeirra.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Valkostir**

| Option | Description |
|---|---|
| `--format=<format>` | Úttakssnið: `table` (sjálfgefið), `json`, `csv` |

**Dæmi um úttak**

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

Sækir og virkjar eiginleikapakka úr skránni.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Rök**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug eiginleikapakkans, t.d. `gratis-ai-agent-woocommerce` |

**Dæmi**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Gerir tiltekinn eiginleika óvirkan án þess að fjarlægja pakkann. Gagnlegt til að takmarka umfang agentsins á tilteknum vef.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Dæmi**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Virkjar aftur eiginleika sem áður var gerður óvirkur.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Sýnir núverandi stillingar agentsins og tengistöðu.

```bash
wp gratis-ai-agent status
```

**Dæmi um úttak**

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

Sýnir nýlega virkni agentsins úr villuleitarskránni.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Valkostir**

| Valkostur | Lýsing |
|---|---|
| `--last=<n>` | Sýna síðustu N loggfærslurnar. Sjálfgefið `50` |
| `--level=<level>` | Sía eftir stigi: `info`, `warning`, `error` |
| `--ability=<ability>` | Sía eftir heiti getu |

**Dæmi**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Endurstillir stöðu agents: hreinsar innsprautað CSS, fjarlægir CPT og flokkunarkerfi sem agent hefur skráð, endurstillir hnattræna stíla og tæmir valkostaskyndiminni agentsins. Fjarlægir ekki plugin eða stillingar þess.

```bash
wp gratis-ai-agent reset [--yes]
```

Bættu við `--yes` til að sleppa staðfestingarbeiðninni.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Lokakóðar

Allar skipanir skila `0` við árangur. Lokakóðar sem eru ekki núll:

| Kóði | Merking |
|---|---|
| `1` | Almenn villa (sjá villuskilaboð) |
| `2` | Tengivilla hjá þjónustuveitu |
| `3` | Geta fannst ekki |
| `4` | Viðmiðunarspurning fannst ekki |
