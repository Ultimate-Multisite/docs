---
title: WP-CLI-Referenz
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Referenz {#wp-cli-reference}

Gratis AI Agent liwwert eng `wp gratis-ai-agent` Kommando-Famill fir den Agent ze benchmarken, Fäegkeeten ze verwalten an den Agent-Status vun der Kommandozeil ofzefroen. All Kommandoe verlaangen WP-CLI 2.0 oder méi héich.

## Installatioun {#installation}

D'WP-CLI-Kommandoe ginn automatesch registréiert, wann de Plugin aktiv ass. Iwwerpréif mat:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Féiert d'Agent-Capabilities-Benchmark-Suite aus — eng Rei vu komplexen, méistufege Prompten, déi déi komplett Fäegkeetsuewerfläch testen. Benotz dëst, fir d'Modellleeschtung ze bewäerten, AI-Provideren ze vergläichen oder Fäegkeets-Packen ze validéieren, ier se an d'Produktioun ausgerullt ginn.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Optiounen {#options}

| Optioun | Beschreiwung |
|---|---|
| `--question=<id>` | Eng eenzel Benchmark-Fro no ID ausféieren amplaz vun der kompletter Suite |
| `--provider=<provider>` | Den agestallten AI-Provider fir dëse Laf iwwerschreiwen (z. B. `anthropic`, `openai`) |
| `--model=<model>` | Dat agestallte Modell fir dëse Laf iwwerschreiwen (z. B. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Ausgabeformat: `table` (Standard), `json`, `csv` |
| `--save` | D'Benchmark-Resultater an der Datebank späichere fir historesch Vergläicher |

### Beispiller {#examples}

Déi komplett Benchmark-Suite mam aktuelle Provider a Modell ausféieren:

```bash
wp gratis-ai-agent benchmark
```

Eng eenzel Fro (`q-restaurant-website`) ausféieren an als JSON ausginn:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Géint e spezifescht Modell ausféieren an d'Resultater späicheren:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Ausgab {#output}

De Benchmark gëtt eng Zeil pro Fro mat de folgende Kolonnen aus:

| Kolonn | Beschreiwung |
|---|---|
| `ID` | Fro-Identifier |
| `Description` | Kuerz Zesummefaassung vum Benchmark-Zeenario |
| `Score` | Bestanen/net bestanen oder numeresche Score (0–100) |
| `Abilities Used` | Mat Kommae getrennte Lëscht vun opgeruffene Fäegkeeten |
| `Tokens` | Total verbrauchte Tokens |
| `Duration` | Wall-clock-Zäit a Sekonnen |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark-Froen {#benchmark-questions}

D'Standard-Suite enthält:

| ID | Zeenario |
|---|---|
| `q-portfolio-site` | E Portfolio-CPT mat enger Project-Category-Taxonomie erstellen an e Block-Muster registréieren |
| `q-restaurant-website` | Eng komplett Restaurant-Websäit mat engem Menu-CPT, Buchungsformular an Navigatioun opbauen |
| `q-dark-mode-theme` | En Dark-Mode-Design-Preset uwenden a Markefaarwen asetzen |
| `q-nav-builder` | E primäert Navigatiounsmenü mat véier Elementer an engem verschachtelten Dropdown erstellen |
| `q-options-roundtrip` | Eng Rei vu WordPress-Optioune liesen, änneren a restauréieren |
| `q-ability-install` | Dee passendste Fäegkeets-Pack fir en beschriwwene Benotzungsfall fannen an installéieren |

Zousätzlech Froe kënnen iwwer de `gratis_ai_agent_benchmark_questions`-Filter registréiert ginn.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Verwalt installéiert Fäegkeeten a Fäegkeets-Packen.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Lëscht all registréiert Fäegkeeten, hir Quell (Kär oder Pack) an hiren aktuelle Status op.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Optiounen**

| Optioun | Beschreiwung |
|---|---|
| `--format=<format>` | Ausgabeformat: `table` (Standard), `json`, `csv` |

**Beispill-Ausgab**

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

Luet e Fäegkeets-Pack aus dem Registry erof an aktivéiert en.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumenter**

| Argument | Beschreiwung |
|---|---|
| `<slug>` | Plugin-Slug vum Fäegkeets-Pack, z. B. `gratis-ai-agent-woocommerce` |

**Beispill**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Desaktivéiert eng spezifesch Fäegkeet, ouni de Pack ze läschen. Praktesch, fir den Ëmfang vum Agent op enger bestëmmter Websäit anzeschränken.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Beispill**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Aktivéiert eng virdru desaktivéiert Fäegkeet erëm.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Weist déi aktuell Agent-Konfiguratioun an de Konnektivitéitsstatus.

```bash
wp gratis-ai-agent status
```

**Beispill-Ausgab**

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

Weist rezent Agent-Aktivitéit aus dem Debug-Log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Optiounen**

| Optioun | Beschreiwung |
|---|---|
| `--last=<n>` | Weist déi lescht N Log-Anträg. Standard `50` |
| `--level=<level>` | No Niveau filteren: `info`, `warning`, `error` |
| `--ability=<ability>` | No Ability-Numm filteren |

**Beispill**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Setzt den Agent-Zoustand zeréck: läscht injizéiert CSS, läscht vum Agent registréiert CPTen an Taxonomien, setzt global Stiler zeréck, a mécht den Optiouns-Cache vum Agent eidel. Entfernt de Plugin oder seng Astellungen net.

```bash
wp gratis-ai-agent reset [--yes]
```

Füügt `--yes` derbäi, fir d'Confirmatiouns-Ufro ze iwwersprangen.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit-Coden {#exit-codes}

All Kommandoen ginn `0` bei Erfolleg zeréck. Net-null Exit-Coden:

| Code | Bedeitung |
|---|---|
| `1` | Allgemenge Feeler (kuckt d'Feelermeldung) |
| `2` | Provider-Verbindungsfeeler |
| `3` | Ability net fonnt |
| `4` | Benchmark-Fro net fonnt |
