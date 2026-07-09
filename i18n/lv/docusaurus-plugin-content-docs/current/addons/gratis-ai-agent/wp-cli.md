---
title: WP-CLI atsauce
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI atsauce {#wp-cli-reference}

Gratis AI Agent nodrošina `wp gratis-ai-agent` komandu saimi agenta veiktspējas testēšanai, spēju pārvaldībai un agenta statusa vaicāšanai no komandrindas. Visām komandām nepieciešams WP-CLI 2.0 vai jaunāks.

## Instalēšana {#installation}

WP-CLI komandas tiek reģistrētas automātiski, kad plugin ir aktīvs. Pārbaudiet ar:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Palaiž Agent Capabilities veiktspējas testu komplektu — sarežģītu, daudzsoļu uzvedņu kopu, kas izmanto pilnu spēju klāstu. Izmantojiet to, lai novērtētu modeļa veiktspēju, salīdzinātu AI pakalpojumu sniedzējus vai validētu spēju pakotnes pirms izvietošanas produkcijā.

### Kopsavilkums {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opcijas {#options}

| Opcija | Apraksts |
|---|---|
| `--question=<id>` | Palaist vienu veiktspējas testa jautājumu pēc ID, nevis pilnu komplektu |
| `--provider=<provider>` | Aizstāt konfigurēto AI pakalpojumu sniedzēju šim palaišanas gadījumam (piem., `anthropic`, `openai`) |
| `--model=<model>` | Aizstāt konfigurēto modeli šim palaišanas gadījumam (piem., `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Izvades formāts: `table` (noklusējums), `json`, `csv` |
| `--save` | Saglabāt veiktspējas testa rezultātus datubāzē vēsturiskai salīdzināšanai |

### Piemēri {#examples}

Palaist pilnu veiktspējas testu komplektu ar pašreizējo pakalpojumu sniedzēju un modeli:

```bash
wp gratis-ai-agent benchmark
```

Palaist vienu jautājumu (`q-restaurant-website`) un izvadīt kā JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Palaist pret konkrētu modeli un saglabāt rezultātus:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Izvade {#output}

Veiktspējas tests izvada vienu rindu katram jautājumam ar šādām kolonnām:

| Kolonna | Apraksts |
|---|---|
| `ID` | Jautājuma identifikators |
| `Description` | Īss veiktspējas testa scenārija kopsavilkums |
| `Score` | Nokārtots/nenokārtots vai skaitlisks vērtējums (0–100) |
| `Abilities Used` | Ar komatiem atdalīts izsaukto spēju saraksts |
| `Tokens` | Kopējais patērēto tokenu skaits |
| `Duration` | Faktiskais laiks sekundēs |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Veiktspējas testa jautājumi {#benchmark-questions}

Noklusējuma komplektā ietilpst:

| ID | Scenārijs |
|---|---|
| `q-portfolio-site` | Izveidot Portfolio CPT ar Project Category taksonomiju un reģistrēt bloka modeli |
| `q-restaurant-website` | Izveidot pilnu restorāna vietni ar ēdienkartes CPT, rezervācijas veidlapu un navigāciju |
| `q-dark-mode-theme` | Lietot tumšā režīma dizaina sākotnējo iestatījumu un ievietot zīmola krāsas |
| `q-nav-builder` | Izveidot četru vienumu primārās navigācijas izvēlni ar ligzdotu nolaižamo sarakstu |
| `q-options-roundtrip` | Nolasīt, modificēt un atjaunot WordPress opciju kopu |
| `q-ability-install` | Atklāt un instalēt vispiemērotāko spēju pakotni aprakstītam lietojuma gadījumam |

Papildu jautājumus var reģistrēt, izmantojot `gratis_ai_agent_benchmark_questions` filtru.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Pārvalda instalētās spējas un spēju pakotnes.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Uzskaita visas reģistrētās spējas, to avotu (kodols vai pakotne) un pašreizējo statusu.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opcijas**

| Opcija | Apraksts |
|---|---|
| `--format=<format>` | Izvades formāts: `table` (noklusējums), `json`, `csv` |

**Izvades piemērs**

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

Lejupielādē un aktivizē spēju pakotni no reģistra.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumenti**

| Arguments | Apraksts |
|---|---|
| `<slug>` | Spēju pakotnes plugin slug, piem., `gratis-ai-agent-woocommerce` |

**Piemērs**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Atspējo konkrētu spēju, nenoņemot pakotni. Noderīgi, lai ierobežotu agenta tvērumu noteiktā vietnē.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Piemērs**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Atkārtoti iespējo iepriekš atspējotu spēju.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Parāda pašreizējo agenta konfigurāciju un savienojamības statusu.

```bash
wp gratis-ai-agent status
```

**Izvades piemērs**

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

Parāda nesenu agenta aktivitāti no debug žurnāla.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opcijas**

| Opcija | Apraksts |
|---|---|
| `--last=<n>` | Rādīt pēdējos N žurnāla ierakstus. Noklusējums `50` |
| `--level=<level>` | Filtrēt pēc līmeņa: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtrēt pēc spējas nosaukuma |

**Piemērs**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Atiestata agenta stāvokli: notīra ievietoto CSS, noņem agenta reģistrētos CPT un taksonomijas, atiestata globālos stilus un iztukšo agenta opciju kešatmiņu. Nenoņem plugin vai tā iestatījumus.

```bash
wp gratis-ai-agent reset [--yes]
```

Pievienojiet `--yes`, lai izlaistu apstiprinājuma uzvedni.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Izejas kodi {#exit-codes}

Visas komandas veiksmīgas izpildes gadījumā iziet ar `0`. Izejas kodi, kas nav nulle:

| Kods | Nozīme |
|---|---|
| `1` | Vispārīga kļūda (skatiet kļūdas ziņojumu) |
| `2` | Provider savienojamības kļūme |
| `3` | Spēja nav atrasta |
| `4` | Etalona jautājums nav atrasts |
