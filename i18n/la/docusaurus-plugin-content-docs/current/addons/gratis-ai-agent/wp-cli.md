---
title: WP-CLI Referentia
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Relatio {#wp-cli-reference}

Gratis AI Agent familiam mandatorum `wp gratis-ai-agent` praebet ad agentem aestimandum, facultates administrandas, et statum agentis ex linea mandatorum interrogandum. Omnia mandata WP-CLI 2.0 aut superiorem requirunt.

## Installatio {#installation}

Mandata WP-CLI automatice registrantur cum plugin activum est. Comproba per:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Currit seriem probationum Facultatum Agentis — congeriem monitorum complexorum, plurium graduum, quae totam superficiem facultatum exercent. Hoc utere ad aestimandam efficaciam exemplaris, conferendos provisores AI, aut sarcinas facultatum comprobandas antequam in productionem explicentur.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Optiones {#options}

| Optio | Descriptio |
|---|---|
| `--question=<id>` | Curre unam quaestionem probationis per ID loco totius seriei |
| `--provider=<provider>` | Provisorem AI configuratum pro hoc cursu superpone (ex. `anthropic`, `openai`) |
| `--model=<model>` | Exemplar configuratum pro hoc cursu superpone (ex. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Forma output: `table` (praedefinita), `json`, `csv` |
| `--save` | Serva eventus probationis in datorum basi ad comparationem historicam |

### Exempla {#examples}

Curre plenam seriem probationum cum provisore et exemplari currentibus:

```bash
wp gratis-ai-agent benchmark
```

Curre unam quaestionem (`q-restaurant-website`) et ede ut JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Curre contra certum exemplar et serva eventus:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

Probatio unam lineam pro unaquaque quaestione edit cum sequentibus columnis:

| Columna | Descriptio |
|---|---|
| `ID` | Identificator quaestionis |
| `Description` | Brevis synopsis scaenarii probationis |
| `Score` | Transitus/defectus aut nota numerica (0–100) |
| `Abilities Used` | Index facultatum invocatarum commatibus separatus |
| `Tokens` | Summa tokenum consumptorum |
| `Duration` | Tempus horologii in secundis |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Quaestiones Probationis {#benchmark-questions}

Series praedefinita includit:

| ID | Scaenarium |
|---|---|
| `q-portfolio-site` | Crea Portfolio CPT cum taxonomia Categoriae Projecti et registra exemplar blocorum |
| `q-restaurant-website` | Aedifica plenum situs interretialis popinae cum menu CPT, forma reservationis, et navigatione |
| `q-dark-mode-theme` | Applica praescriptum consilium modi obscuri et insere colores notae |
| `q-nav-builder` | Crea tabulam navigationis primariae quattuor elementorum cum indice demisso innixo |
| `q-options-roundtrip` | Lege, modifica, et restitue congeriem optionum WordPress |
| `q-ability-install` | Reperi et institue aptissimam sarcinam facultatum pro casu usus descripto |

Quaestiones additae per filtrum `gratis_ai_agent_benchmark_questions` registrari possunt.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Administrat facultates institutas et sarcinas facultatum.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Enumerat omnes facultates registratas, earum fontem (nucleum aut sarcinam), et statum currentem.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Optiones**

| Optio | Descriptio |
|---|---|
| `--format=<format>` | Forma output: `table` (praedefinita), `json`, `csv` |

**Exemplum output**

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

Deponit et activat sarcinam facultatum ex registro.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumenta**

| Argumentum | Descriptio |
|---|---|
| `<slug>` | Slug plugin sarcinae facultatum, ex. `gratis-ai-agent-woocommerce` |

**Exemplum**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Inactivat certam facultatem sine sarcina removenda. Utile est ad ambitum agentis in dato situ restringendum.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Exemplum**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Iterum activat facultatem antea inactivatam.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Ostendit configurationem agentis currentem et statum connexionis.

```bash
wp gratis-ai-agent status
```

**Exemplum output**

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

Ostendit recentem agentis actionem ex registro debug.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Optiones**

| Optio | Descriptio |
|---|---|
| `--last=<n>` | Ostende ultimas N annotationes actorum. Praedefinitum `50` |
| `--level=<level>` | Filtra secundum gradum: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtra secundum nomen facultatis |

**Exemplum**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Statum agentis reponit: CSS insertum purgat, CPTs et taxonomias ab agente registratas removet, stilos globales reponit, et cache optionum agentis evacuat. Additamentum aut eius occasus non removet.

```bash
wp gratis-ai-agent reset [--yes]
```

Adde `--yes` ut interrogationem confirmationis praetermittas.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Codices Exitūs {#exit-codes}

Omnia mandata cum successu exeunt `0`. Codices exitūs non-nulli:

| Codex | Sensus |
|---|---|
| `1` | Error generalis (vide nuntium erroris) |
| `2` | Defectus coniunctionis provisoris |
| `3` | Facultas non inventa |
| `4` | Quaestio mensurae comparativae non inventa |
