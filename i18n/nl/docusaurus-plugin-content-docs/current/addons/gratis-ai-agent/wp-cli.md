---
title: WP-CLI Referentie
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Referentie

Gratis AI Agent stuurt een `wp gratis-ai-agent` command family waarmee u de agent kunt benchmarken, de beschikbare functionaliteiten kunt beheren en de status van de agent kunt opvragen vanaf de command line. Alle commando's vereisen WP-CLI 2.0 of hoger.

## Installatie {#installation}

De WP-CLI commando's worden automatisch geregistreerd wanneer het plugin actief is. Controleer dit met:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Voert de Agent Capabilities benchmark suite uit — een set complexe, meerstaps prompts die de volledige functionaliteit van de agent testen. Gebruik dit om de prestaties van het model te evalueren, AI-providers te vergelijken of functionaliteitspakketten te valideren voordat u ze in productie gebruikt.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opties {#options}

| Optie | Beschrijving |
|---|---|
| `--question=<id>` | Voer een enkele benchmarkvraag uit op basis van ID in plaats van de volledige suite |
| `--provider=<provider>` | Overruled de geconfigureerde AI-provider voor deze run (bijv. `anthropic`, `openai`) |
| `--model=<model>` | Overruled het geconfigureerde model voor deze run (bijv. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Output formaat: `table` (standaard), `json`, `csv` |
| `--save` | Sla de benchmarkresultaten op in de database voor historische vergelijking |

### Voorbeelden {#examples}

Voer de volledige benchmark suite uit met de huidige provider en het model:

```bash
wp gratis-ai-agent benchmark
```

Voer een enkele vraag (`q-restaurant-website`) uit en output als JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Voer uit tegen een specifiek model en sla de resultaten op:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

De benchmark geeft één rij per vraag weer met de volgende kolommen:

| Kolom | Beschrijving |
|---|---|
| `ID` | Vraag-identificatie |
| `Description` | Korte samenvatting van het benchmarkscenario |
| `Score` | Succes/falen of numerieke score (0–100) |
| `Abilities Used` | Komma-gescheiden lijst van ingeroepen functionaliteiten |
| `Tokens` | Totaal verbruikte tokens |
| `Duration` | Tijd in seconden |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmarkvragen {#benchmark-questions}

De standaard suite bevat:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Creëer een Portfolio CPT met een Project Category taxonomie en registreer een block pattern |
| `q-restaurant-website` | Bouw een volledige restaurantwebsite met een menu CPT, boekingsformulier en navigatie |
| `q-dark-mode-theme` | Pas een donkere thema-preset toe en injecteer merk-kleuren |
| `q-nav-builder` | Creëer een primaire navigatiemenu van vier items met een geneste dropdown |
| `q-options-roundtrip` | Lees, wijzig en herstel een set WordPress opties |
| `q-ability-install` | Ontdek en installeer het meest geschikte functionaliteitspakket voor een beschreven gebruiksscenario |

Aanvullende vragen kunnen worden geregistreerd via de `gratis_ai_agent_benchmark_questions` filter.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Beheert geïnstalleerde functionaliteiten en functionaliteitspakketten.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Lijst alle geregistreerde functionaliteiten, hun bron (core of pack) en hun huidige status.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opties**

| Optie | Beschrijving |
|---|---|
| `--format=<format>` | Output formaat: `table` (standaard), `json`, `csv` |

**Voorbeeld output**

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

Downloadt en activeert een functionaliteitspakket uit het register.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumenten**

| Argument | Beschrijving |
|---|---|
| `<slug>` | Plugin slug van het functionaliteitspakket, bijv. `gratis-ai-agent-woocommerce` |

**Voorbeeld**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Deactiveert een specifieke functionaliteit zonder het pakket te verwijderen. Handig om de reikwijdte van de agent op een bepaalde site te beperken.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Voorbeeld**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Activeert een eerder gedeactiveerde functionaliteit opnieuw.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Toont de huidige configuratie en connectiviteitsstatus van de agent.

```bash
wp gratis-ai-agent status
```

**Voorbeeld output**

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

Toont recente agentactiviteit uit het debuglog.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opties**

| Optie | Beschrijving |
|---|---|
| `--last=<n>` | Toon de laatste N log-vermeldingen. Standaard `50` |
| `--level=<level>` | Filter op niveau: `info`, `warning`, `error` |
| `--ability=<ability>` | Filter op functionaliteitsnaam |

**Voorbeeld**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Reset de agentstatus: wist ingeplugde CSS, verwijdert door de agent geregistreerde CPT's en taxonomieën, reset globale stijlen en leegt de optiecache van de agent. Verwijdert het plugin of de instellingen niet.

```bash
wp gratis-ai-agent reset [--yes]
```

Voeg `--yes` toe om de bevestigingsprompt over te slaan.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

Alle commando's verlaten met `0` bij succes. Niet-nul exit codes:

| Code | Betekenis |
|---|---|
| `1` | Algemene fout (zie foutmelding) |
| `2` | Provider connectiviteitsfout |
| `3` | Functionaliteit niet gevonden |
| `4` | Benchmarkvraag niet gevonden |
