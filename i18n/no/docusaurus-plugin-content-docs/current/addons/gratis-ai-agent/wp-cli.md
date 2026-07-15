---
title: WP-CLI Referanse
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Referanse

Gratis AI Agent leverer en kommando-familie kalt `wp gratis-ai-agent` for å benchmarke agenten, administrere evner (abilities), og spørre om agentens status fra kommandolinjen. Alle kommandoer krever WP-CLI 2.0 eller høyere.

## Installasjon {#installation}

WP-CLI-kommandoene registreres automatisk når pluginet er aktivt. Verifiser med:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Kjør Agent Capabilities benchmark suite – et sett med komplekse, flertrinnsprompter som tester hele evne-spekteret. Bruk dette for å evaluere modellytelse, sammenligne AI-leverandører, eller validere evne-pakker før utrulling i produksjon.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options {#options}

| Option | Description |
|---|---|
| `--question=<id>` | Kjør en enkelt benchmark-spørsmål etter ID i stedet for hele suite |
| `--provider=<provider>` | Overstyr den konfigurerte AI-leverandøren for dette kjøret (f.eks. `anthropic`, `openai`) |
| `--model=<model>` | Overstyr den konfigurerte modellen for dette kjøret (f.eks. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Utdataformat: `table` (standard), `json`, `csv` |
| `--save` | Lagrer benchmark-resultatene i databasen for historisk sammenligning |

### Examples {#examples}

Kjør hele benchmark-suiten med den nåværende leverandøren og modellen:

```bash
wp gratis-ai-agent benchmark
```

Kjør en enkelt spørsmål (`q-restaurant-website`) og output som JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Kjør mot en spesifikk modell og lagre resultatene:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

Benchmarken gir én rad per spørsmål med følgende kolonner:

| Column | Description |
|---|---|
| `ID` | Spørsmålsidentifikator |
| `Description` | Kort oppsummering av benchmark-scenarioet |
| `Score` | Bestått/ikke bestått eller numerisk poengsum (0–100) |
| `Abilities Used` | Kommaadskilt liste over brukte evner |
| `Tokens` | Totalt forbrukte tokens |
| `Duration` | Tid i sekund (klokketid) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions {#benchmark-questions}

Standard-suiten inkluderer:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Opprett en Portfolio CPT med en Project Category taksonomi og registrer et blokkmønster |
| `q-restaurant-website` | Bygg en fullstendig restaurantnettside med en meny CPT, bookingskjema og navigasjon |
| `q-dark-mode-theme` | Påfør et mørk-modus designpreset og injiser merkevarefarger |
| `q-nav-builder` | Opprett en primær navigasjonsmeny med fire elementer og en innebygd rullegardinmeny |
| `q-options-roundtrip` | Les, modifiser og gjenopprett et sett med WordPress-valg (options) |
| `q-ability-install` | Oppdag og installer den mest hensiktsmessige evne-pakken for et beskrevet bruksområde |

Ytterligere spørsmål kan registreres via filteret `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Administrer installerte evner og evne-pakker.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Lister alle registrerte evner, deres kilde (kjerne eller pakke), og deres nåværende status.

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

Laster ned og aktiverer en evne-pakke fra registeret.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug for evne-pakken, f.eks. `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Deaktiverer en spesifikk evne uten å fjerne pakken. Nyttig for å begrense agentens omfang på et gitt nettsted.

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

Gjenoppretter en tidligere deaktivert evne.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Viser den nåværende agentkonfigurasjonen og tilkoblingsstatusen.

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

Viser nylig agentaktivitet fra debug-loggen.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | Vis de siste N log-oppføringene. Standard er `50` |
| `--level=<level>` | Filtrer etter nivå: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtrer etter evnenavn |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Tilbakestiller agentens tilstand: tømmer injisert CSS, fjerner agent-registrerte CPT-er og taksonomier, tilbakestiller globale stiler, og tømmer agentens options cache. Fjerner ikke pluginet eller innstillingene.

```bash
wp gratis-ai-agent reset [--yes]
```

Legg til `--yes` for å hoppe over bekreftelsesprompten.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

Alle kommandoer avslutter med `0` ved suksess. Ikke-null exit-koder:

| Code | Meaning |
|---|---|
| `1` | Generell feil (se feilmelding) |
| `2` | Feil med leverandørtilkobling |
| `3` | Evne ikke funnet |
| `4` | Benchmark-spørsmål ikke funnet |
