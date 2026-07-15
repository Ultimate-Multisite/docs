---
title: WP-CLI Reference
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Referens

Gratis AI Agent skickar en familj av kommandon, `wp gratis-ai-agent`, för att benchmarka agenten, hantera dess förmågor och fråga om agentens status från kommandoraden. Alla kommandon kräver WP-CLI 2.0 eller högre.

## Installation {#installation}

WP-CLI-kommandona registreras automatiskt när pluginet är aktivt. Verifiera med:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Kör Agent Capabilities benchmark-sviten – en uppsättning komplexa, flerstegsfrågor som testar hela förmågeytan. Använd detta för att utvärdera modellprestanda, jämföra AI-leverantörer eller validera förmågepaket innan du driftsätter till produktion.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options {#options}

| Option | Description |
|---|---|
| `--question=<id>` | Kör en enskild benchmark-fråga via ID istället för hela sviten |
| `--provider=<provider>` | Överskriver den konfigurerade AI-leverantören för detta körning (t.ex. `anthropic`, `openai`) |
| `--model=<model>` | Överskriver den konfigurerade modellen för detta körning (t.ex. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Utdataformat: `table` (standard), `json`, `csv` |
| `--save` | Sparar benchmark-resultaten i databasen för historisk jämförelse |

### Examples {#examples}

Kör hela benchmark-sviten med den aktuella leverantören och modellen:

```bash
wp gratis-ai-agent benchmark
```

Kör en enskild fråga (`q-restaurant-website`) och output som JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Kör mot en specifik modell och spara resultaten:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

Benchmarken ger en rad per fråga med följande kolumner:

| Column | Description |
|---|---|
| `ID` | Frågeidentifierare |
| `Description` | Kort sammanfattning av benchmark-scenariot |
| `Score` | Godkänt/misslyckat eller numeriskt betyg (0–100) |
| `Abilities Used` | Kommateckensseparerad lista över använda förmågor |
| `Tokens` | Totalt antal konsumererade tokens |
| `Duration` | Tid i sekunder |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions {#benchmark-questions}

Standardpaketet inkluderar:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Skapa en Portfolio CPT med en Project Category taksonomi och registrera ett blockmönster |
| `q-restaurant-website` | Bygga en komplett restaurangwebbplats med en meny CPT, bokningsformulär och navigering |
| `q-dark-mode-theme` | Applicera ett mörkt tema-preset och injicera varumärkesfärger |
| `q-nav-builder` | Skapa en primär navigationsmeny med fyra objekt och en inbäddad rullgardinsmeny |
| `q-options-roundtrip` | Läsa, modifiera och återställa en uppsättning WordPress-alternativ |
| `q-ability-install` | Upptäcka och installera det mest lämpliga förmågepaketet för ett beskrivet användningsfall |

Ytterligare frågor kan registreras via filtret `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Hantera installerade förmågor och förmågepaket.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Listar alla registrerade förmågor, deras källa (core eller pack) och deras nuvarande status.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | Utdataformat: `table` (standard), `json`, `csv` |

**Example output**

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

Laddar ner och aktiverar ett förmågepaket från registret.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Plugin-slug för förmågepaketet, t.ex. `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Inaktiverar en specifik förmåga utan att ta bort paketet. Användbart för att begränsa agentens omfattning på en given webbplats.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Example**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Återaktiverar en tidigare inaktiverad förmåga.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Visar agentens nuvarande konfiguration och anslutningsstatus.

```bash
wp gratis-ai-agent status
```

**Example output**

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

Visar nylig agentaktivitet från debug-loggen.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | Visa de senaste N loggposterna. Standard är `50` |
| `--level=<level>` | Filtrera efter nivå: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtrera efter förmågnamn |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Återställer agentens tillstånd: rensar injicerad CSS, tar bort agentregistrerade CPT:er och taksonomier, återställer globala stilar och tömmer agentens options-cache. Tar inte bort pluginet eller dess inställningar.

```bash
wp gratis-ai-agent reset [--yes]
```

Lägg till `--yes` för att hoppa över bekräftelseprompten.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

Alla kommandon avslutas med `0` vid framgång. Icke-noll exit-koder:

| Code | Meaning |
|---|---|
| `1` | Allmänt fel (se felmeddelandet) |
| `2` | Fel vid anslutning till leverantören |
| `3` | Förmåga hittades inte |
| `4` | Benchmark-fråga hittades inte |
