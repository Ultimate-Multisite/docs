---
title: Reference WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Reference WP-CLI

Gratis AI Agent poskytuje sadu příkazů `wp gratis-ai-agent` pro otestování agenta, správu schopností (abilities) a dotazování stavu agenta přímo z příkazového řádku. Všechny příkazy vyžadují WP-CLI verze 2.0 nebo vyšší.

## Instalace

Příkazy WP-CLI se zaregistrují automaticky, jakmile je plugin aktivní. Ověřte to příkazem:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Spustí testovací sadu schopností agenta (Agent Capabilities benchmark suite) — soubor komplexních, víceetápňových dotazů, které otestují celou škálu schopností. Použijte to k hodnocení výkonu modelu, porovnání AI poskytovatelů nebo validaci balíčků schopností před nasazením do produkce.

### Synopse

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Možnosti (Options)

| Option | Description |
|---|---|
| `--question=<id>` | Spustí jeden testovací dotaz podle ID namísto celé sady |
| `--provider=<provider>` | Přepíše nakonfigurovaného AI poskytovatele pro tento běh (např. `anthropic`, `openai`) |
| `--model=<model>` | Přepíše nakonfigurovaný model pro tento běh (např. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Formát výstupu: `table` (výchozí), `json`, `csv` |
| `--save` | Uloží výsledky benchmarku do databáze pro historické porovnání |

### Příklady

Spuštění celé sady benchmarků s aktuálním poskytovatelem a modelem:

```bash
wp gratis-ai-agent benchmark
```

Spuštění jednoho dotazu (`q-restaurant-website`) a výstup v formátu JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Spuštění proti konkrétnímu modelu a uložení výsledků:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Výstup

Benchmark vygeneruje jeden řádek na dotaz se sloupci:

| Column | Description |
|---|---|
| `ID` | Identifikátor dotazu |
| `Description` | Krátký souhrn scénáře benchmarku |
| `Score` | Úspěšnost/neúspěšnost nebo číselný skóre (0–100) |
| `Abilities Used` | Přehled schopností, které byly použity (oddělené čárkami) |
| `Tokens` | Celkový počet tokenů spotřebovaných |
| `Duration` | Čas v sekundách (wall-clock time) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Dotazy benchmarku

Výchozí sada zahrnuje:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Vytvoření CPT pro portfolio s taksonomií kategorií projektů a registraci vzoru bloku |
| `q-restaurant-website` | Vytvoření kompletního webu restaurace s CPT pro menu, formulářem pro rezervace a navigací |
| `q-dark-mode-theme` | Aplikace přednastaveného dark-mode designu a vložení barev značky |
| `q-nav-builder` | Vytvoření primární navigace čtyřmi položkami s vnořeným rozbalovacím menu |
| `q-options-roundtrip` | Čtení, modifikace a obnovení sady možností WordPress |
| `q-ability-install` | Objevování a instalace nejvhodnějšího balíčku schopností pro popsání použití |

Doplňkové dotazy lze registrovat pomocí filtru `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Spravuje nainstalované schopnosti a balíčky schopností.

### `wp gratis-ai-agent abilities list`

Seznam všech registrovaných schopností, jejich zdroje (základní nebo balíček) a jejich aktuální stav.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Možnosti (Options)**

| Option | Description |
|---|---|
| `--format=<format>` | Formát výstupu: `table` (výchozí), `json`, `csv` |

**Příklad výstupu**

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

Stahuje a aktivuje balíček schopností z registru.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumenty**

| Argument | Description |
|---|---|
| `<slug>` | Slug pluginu balíčku schopností, např. `gratis-ai-agent-woocommerce` |

**Příklad**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Deaktivuje konkrétní schopnost bez odstraňování balíčku. Je užitečné pro omezení rozsahu agenta na daném místě.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Příklad**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Opětovně aktivuje dříve deaktivovanou schopnost.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Zobrazí aktuální konfiguraci agenta a stav připojení.

```bash
wp gratis-ai-agent status
```

**Příklad výstupu**

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

Zobrazí récente aktivity agenta z debug logu.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Možnosti (Options)**

| Option | Description |
|---|---|
| `--last=<n>` | Zobrazí posledních N záznamů logu. Výchozí je `50` |
| `--level=<level>` | Filtrování podle úrovně: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtrování podle názvu schopnosti |

**Příklad**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Resetuje stav agenta: vyčistí vložený CSS, odstraní CPT a taksonomie registrované agentem, resetuje globální styly a vymaže cache možností agenta. Nepodstraní plugin ani jeho nastavení.

```bash
wp gratis-ai-agent reset [--yes]
```

Přidejte `--yes`, abyste přeskočili výzvu k potvrzení.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Výstupy chybových kódů (Exit Codes)

Všechny příkazy se při úspěchu ukončí kódem `0`. Ne-nula kódy ukončení:

| Code | Meaning |
|---|---|
| `1` | Obecná chyba (viz zprávu o chybě) |
| `2` | Chyba připojení poskytovatele |
| `3` | Schopnost nebyla nalezena |
| `4` | Dotaz benchmarku nebyl nalezen |
