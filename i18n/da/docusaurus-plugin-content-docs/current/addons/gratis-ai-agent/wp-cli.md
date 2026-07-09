---
title: WP-CLI-reference
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI-reference

Gratis AI Agent leveres med en `wp gratis-ai-agent`-kommandofamilie til benchmarking af agenten, håndtering af evner og forespørgsel på agentstatus fra kommandolinjen. Alle kommandoer kræver WP-CLI 2.0 eller nyere.

## Installation

WP-CLI-kommandoerne registreres automatisk, når pluginet er aktivt. Bekræft med:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Kører Agent Capabilities benchmark-suiten — et sæt komplekse prompts i flere trin, der afprøver hele evnefladen. Brug dette til at evaluere modelydelse, sammenligne AI-udbydere eller validere evnepakker, før de udrulles til produktion.

### Synopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Valgmuligheder

| Valgmulighed | Beskrivelse |
|---|---|
| `--question=<id>` | Kør et enkelt benchmark-spørgsmål efter ID i stedet for hele suiten |
| `--provider=<provider>` | Tilsidesæt den konfigurerede AI-udbyder for denne kørsel (f.eks. `anthropic`, `openai`) |
| `--model=<model>` | Tilsidesæt den konfigurerede model for denne kørsel (f.eks. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Outputformat: `table` (standard), `json`, `csv` |
| `--save` | Gem benchmark-resultaterne i databasen til historisk sammenligning |

### Eksempler

Kør den fulde benchmark-suite med den aktuelle udbyder og model:

```bash
wp gratis-ai-agent benchmark
```

Kør et enkelt spørgsmål (`q-restaurant-website`) og output som JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Kør mod en bestemt model, og gem resultater:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output

Benchmarken outputter én række pr. spørgsmål med følgende kolonner:

| Kolonne | Beskrivelse |
|---|---|
| `ID` | Spørgsmålsidentifikator |
| `Description` | Kort opsummering af benchmark-scenariet |
| `Score` | Bestået/ikke bestået eller numerisk score (0–100) |
| `Abilities Used` | Kommasepareret liste over påkaldte evner |
| `Tokens` | Samlede forbrugte tokens |
| `Duration` | Vægur-tid i sekunder |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark-spørgsmål

Standardsuiten inkluderer:

| ID | Scenarie |
|---|---|
| `q-portfolio-site` | Opret en Portfolio CPT med en Project Category-taksonomi, og registrer et blokmønster |
| `q-restaurant-website` | Byg et komplet restaurantwebsite med en menu-CPT, bookingformular og navigation |
| `q-dark-mode-theme` | Anvend en designforudindstilling til dark mode, og injicer brandfarver |
| `q-nav-builder` | Opret en primær navigationsmenu med fire punkter og en indlejret dropdown |
| `q-options-roundtrip` | Læs, modificer og gendan et sæt WordPress-indstillinger |
| `q-ability-install` | Find og installer den mest passende evnepakke til et beskrevet anvendelsestilfælde |

Yderligere spørgsmål kan registreres via filteret `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Håndterer installerede evner og evnepakker.

### `wp gratis-ai-agent abilities list`

Viser alle registrerede evner, deres kilde (kerne eller pakke) og deres aktuelle status.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Valgmuligheder**

| Valgmulighed | Beskrivelse |
|---|---|
| `--format=<format>` | Outputformat: `table` (standard), `json`, `csv` |

**Eksempeloutput**

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

Downloader og aktiverer en evnepakke fra registreringsdatabasen.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumenter**

| Argument | Beskrivelse |
|---|---|
| `<slug>` | Plugin-slug for evnepakken, f.eks. `gratis-ai-agent-woocommerce` |

**Eksempel**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Deaktiverer en bestemt evne uden at fjerne pakken. Nyttigt til at begrænse agentens omfang på et givet site.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Eksempel**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Genaktiverer en tidligere deaktiveret evne.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Viser den aktuelle agentkonfiguration og forbindelsesstatus.

```bash
wp gratis-ai-agent status
```

**Eksempeloutput**

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

Viser seneste agentaktivitet fra debug-loggen.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Valgmuligheder**

| Valgmulighed | Beskrivelse |
|---|---|
| `--last=<n>` | Vis de sidste N logposter. Standard `50` |
| `--level=<level>` | Filtrér efter niveau: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtrér efter ability-navn |

**Eksempel**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Nulstiller agenttilstand: rydder injiceret CSS, fjerner agent-registrerede CPT'er og taksonomier, nulstiller globale styles og tømmer agentens options-cache. Fjerner ikke plugin eller dets indstillinger.

```bash
wp gratis-ai-agent reset [--yes]
```

Tilføj `--yes` for at springe bekræftelsesprompten over.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes

Alle kommandoer afsluttes med `0` ved succes. Ikke-nul exit codes:

| Kode | Betydning |
|---|---|
| `1` | Generel fejl (se fejlmeddelelse) |
| `2` | Fejl i provider-forbindelse |
| `3` | Ability ikke fundet |
| `4` | Benchmark-spørgsmål ikke fundet |
