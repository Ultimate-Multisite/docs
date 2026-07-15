---
title: Referenza WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referenza WP-CLI

Gratis AI Agent jiġi b’familja ta’ commands `wp gratis-ai-agent` għall-benchmarking tal-agent, il-ġestjoni tal-abbiltajiet, u l-mistoqsija dwar l-istatus tal-agent mil-linja tal-command. Il-commands kollha jeħtieġu WP-CLI 2.0 jew ogħla.

## Installazzjoni {#installation}

Il-commands WP-CLI jiġu rreġistrati awtomatikament meta l-plugin ikun attiv. Ivverifika b’:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Iħaddem is-suite ta’ benchmark tal-Kapaċitajiet tal-Agent — sett ta’ prompts kumplessi u b’diversi passi li jeżerċitaw il-wiċċ sħiħ tal-abbiltajiet. Uża dan biex tevalwa l-prestazzjoni tal-mudell, tqabbel providers tal-AI, jew tivvalida packs ta’ abbiltajiet qabel ma tużahom fil-produzzjoni.

### Sinossi {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Għażliet {#options}

| Għażla | Deskrizzjoni |
|---|---|
| `--question=<id>` | Ħaddem mistoqsija waħda tal-benchmark skont l-ID minflok is-suite sħiħa |
| `--provider=<provider>` | Ibdel il-provider tal-AI kkonfigurat għal din it-tħaddima (eż. `anthropic`, `openai`) |
| `--model=<model>` | Ibdel il-mudell ikkonfigurat għal din it-tħaddima (eż. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format tal-output: `table` (default), `json`, `csv` |
| `--save` | Issejvja r-riżultati tal-benchmark fid-database għal tqabbil storiku |

### Eżempji {#examples}

Ħaddem is-suite sħiħa tal-benchmark bil-provider u l-mudell attwali:

```bash
wp gratis-ai-agent benchmark
```

Ħaddem mistoqsija waħda (`q-restaurant-website`) u oħroġha bħala JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Ħaddem kontra mudell speċifiku u ssejvja r-riżultati:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

Il-benchmark joħroġ ringiela waħda għal kull mistoqsija bil-kolonni li ġejjin:

| Kolonna | Deskrizzjoni |
|---|---|
| `ID` | Identifikatur tal-mistoqsija |
| `Description` | Sommarju qasir tax-xenarju tal-benchmark |
| `Score` | Għadda/falla jew punteġġ numeriku (0–100) |
| `Abilities Used` | Lista separata b’virgoli tal-abbiltajiet imsejħa |
| `Tokens` | Tokens totali kkunsmati |
| `Duration` | Ħin elapsed f’sekondi |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Mistoqsijiet tal-Benchmark {#benchmark-questions}

Is-suite default tinkludi:

| ID | Xenarju |
|---|---|
| `q-portfolio-site` | Oħloq CPT Portfolio b’tassonomija Project Category u rreġistra mudell ta’ block |
| `q-restaurant-website` | Ibni sit web sħiħ għal ristorant b’CPT tal-menu, formola ta’ booking, u navigazzjoni |
| `q-dark-mode-theme` | Applika preset ta’ disinn dark-mode u daħħal il-kuluri tal-brand |
| `q-nav-builder` | Oħloq menu ta’ navigazzjoni primarja b’erba’ items b’dropdown imbejjet |
| `q-options-roundtrip` | Aqra, immodifika, u rrestawra sett ta’ għażliet WordPress |
| `q-ability-install` | Skopri u installa l-aktar pack ta’ abbiltajiet xieraq għal każ ta’ użu deskritt |

Mistoqsijiet addizzjonali jistgħu jiġu rreġistrati permezz tal-filter `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Jiġġestixxi abbiltajiet installati u packs ta’ abbiltajiet.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Jelenka l-abbiltajiet irreġistrati kollha, is-sors tagħhom (core jew pack), u l-istatus attwali tagħhom.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Għażliet**

| Għażla | Deskrizzjoni |
|---|---|
| `--format=<format>` | Format tal-output: `table` (default), `json`, `csv` |

**Output ta’ eżempju**

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

Iniżżel u jattiva pack ta’ abbiltajiet mir-registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumenti**

| Argument | Deskrizzjoni |
|---|---|
| `<slug>` | Slug tal-plugin tal-pack ta’ abbiltajiet, eż. `gratis-ai-agent-woocommerce` |

**Eżempju**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Jiddiżattiva abbiltà speċifika mingħajr ma jneħħi l-pack. Utli biex tillimita l-ambitu tal-agent fuq sit partikolari.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Eżempju**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Jerġa’ jattiva abbiltà li kienet ġiet diżattivata qabel.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Juri l-konfigurazzjoni attwali tal-agent u l-istatus tal-konnettività.

```bash
wp gratis-ai-agent status
```

**Output ta’ eżempju**

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

Juri attività reċenti tal-agent mid-debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Għażliet**

| Għażla | Deskrizzjoni |
|---|---|
| `--last=<n>` | Uri l-aħħar N entrati tal-log. Default `50` |
| `--level=<level>` | Iffiltra skont il-livell: `info`, `warning`, `error` |
| `--ability=<ability>` | Iffiltra skont l-isem tal-abbiltà |

**Eżempju**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Jerġa’ jistabbilixxi l-istat tal-agent: ineħħi s-CSS injettat, ineħħi s-CPTs u t-taxonomies irreġistrati mill-agent, jerġa’ jistabbilixxi l-istili globali, u jbattal il-cache tal-għażliet tal-agent. Ma jneħħix il-plugin jew is-settings tiegħu.

```bash
wp gratis-ai-agent reset [--yes]
```

Żid `--yes` biex taqbeż il-mistoqsija ta’ konferma.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Kodiċijiet tal-Ħruġ {#exit-codes}

Il-kmandi kollha joħorġu `0` meta jirnexxu. Kodiċijiet tal-ħruġ mhux żero:

| Kodiċi | Tifsira |
|---|---|
| `1` | Żball ġenerali (ara l-messaġġ tal-iżball) |
| `2` | Falliment fil-konnettività tal-provider |
| `3` | Abbiltà ma nstabitx |
| `4` | Mistoqsija tal-benchmark ma nstabitx |
