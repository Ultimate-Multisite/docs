---
title: Referencia WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referencia WP-CLI

Gratis AI Agent obsahuje rodinu príkazov `wp gratis-ai-agent` na benchmarkovanie agenta, správu schopností a zisťovanie stavu agenta z príkazového riadka. Všetky príkazy vyžadujú WP-CLI 2.0 alebo novší.

## Inštalácia {#installation}

Príkazy WP-CLI sa zaregistrujú automaticky, keď je plugin aktívny. Overte pomocou:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Spustí benchmarkovaciu sadu Agent Capabilities — súbor komplexných, viac-krokových promptov, ktoré otestujú celý rozsah schopností. Použite ju na vyhodnotenie výkonu modelu, porovnanie poskytovateľov AI alebo overenie balíkov schopností pred nasadením do produkcie.

### Synopsa {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Možnosti {#options}

| Option | Description |
|---|---|
| `--question=<id>` | Spustiť jednu benchmarkovú otázku podľa ID namiesto celej sady |
| `--provider=<provider>` | Prepísať nakonfigurovaného poskytovateľa AI pre toto spustenie (napr. `anthropic`, `openai`) |
| `--model=<model>` | Prepísať nakonfigurovaný model pre toto spustenie (napr. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Formát výstupu: `table` (predvolené), `json`, `csv` |
| `--save` | Uložiť výsledky benchmarku do databázy na historické porovnanie |

### Príklady {#examples}

Spustite celú benchmarkovú sadu s aktuálnym poskytovateľom a modelom:

```bash
wp gratis-ai-agent benchmark
```

Spustite jednu otázku (`q-restaurant-website`) a výstup ako JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Spustite oproti konkrétnemu modelu a uložte výsledky:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Výstup {#output}

Benchmark vypíše jeden riadok na otázku s nasledujúcimi stĺpcami:

| Column | Description |
|---|---|
| `ID` | Identifikátor otázky |
| `Description` | Krátke zhrnutie benchmarkového scenára |
| `Score` | Úspech/neúspech alebo číselné skóre (0–100) |
| `Abilities Used` | Zoznam vyvolaných schopností oddelený čiarkami |
| `Tokens` | Celkový počet spotrebovaných tokenov |
| `Duration` | Skutočný čas v sekundách |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmarkové otázky {#benchmark-questions}

Predvolená sada obsahuje:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Vytvoriť Portfolio CPT s taxonómiou Project Category a zaregistrovať vzor bloku |
| `q-restaurant-website` | Vytvoriť kompletnú webovú lokalitu reštaurácie s menu CPT, rezervačným formulárom a navigáciou |
| `q-dark-mode-theme` | Použiť dizajnovú predvoľbu tmavého režimu a vložiť farby značky |
| `q-nav-builder` | Vytvoriť štvorpoložkové primárne navigačné menu s vnorenou rozbaľovacou ponukou |
| `q-options-roundtrip` | Prečítať, upraviť a obnoviť sadu možností WordPress |
| `q-ability-install` | Nájsť a nainštalovať najvhodnejší balík schopností pre opísaný prípad použitia |

Ďalšie otázky je možné zaregistrovať cez filter `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Spravuje nainštalované schopnosti a balíky schopností.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Vypíše všetky zaregistrované schopnosti, ich zdroj (jadro alebo balík) a ich aktuálny stav.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Možnosti**

| Option | Description |
|---|---|
| `--format=<format>` | Formát výstupu: `table` (predvolené), `json`, `csv` |

**Príklad výstupu**

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

Stiahne a aktivuje balík schopností z registra.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumenty**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug balíka schopností, napr. `gratis-ai-agent-woocommerce` |

**Príklad**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Zakáže konkrétnu schopnosť bez odstránenia balíka. Užitočné na obmedzenie rozsahu agenta na danej webovej lokalite.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Príklad**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Znovu povolí predtým zakázanú schopnosť.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Zobrazí aktuálnu konfiguráciu agenta a stav pripojenia.

```bash
wp gratis-ai-agent status
```

**Príklad výstupu**

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

Zobrazí nedávnu aktivitu agenta z debug logu.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Možnosti**

| Možnosť | Popis |
|---|---|
| `--last=<n>` | Zobraziť posledných N záznamov logu. Predvolené `50` |
| `--level=<level>` | Filtrovať podľa úrovne: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtrovať podľa názvu ability |

**Príklad**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Resetuje stav agenta: vymaže vložené CSS, odstráni CPT a taxonómie zaregistrované agentom, resetuje globálne štýly a vyprázdni vyrovnávaciu pamäť možností agenta. Neodstráni plugin ani jeho nastavenia.

```bash
wp gratis-ai-agent reset [--yes]
```

Pridajte `--yes`, aby ste preskočili výzvu na potvrdenie.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Kódy ukončenia {#exit-codes}

Všetky príkazy sa pri úspechu ukončia s `0`. Nenulové kódy ukončenia:

| Kód | Význam |
|---|---|
| `1` | Všeobecná chyba (pozrite si chybové hlásenie) |
| `2` | Zlyhanie pripojenia k providerovi |
| `3` | Ability sa nenašla |
| `4` | Benchmarková otázka sa nenašla |
