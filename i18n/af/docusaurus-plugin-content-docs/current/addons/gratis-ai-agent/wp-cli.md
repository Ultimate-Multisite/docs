---
title: WP-CLI Verwysing
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Verwysing

Gratis AI Agent skep 'n `wp gratis-ai-agent` kommando-familie vir die benchmark van die agent, die bestuur van vermoëns, en die navraag van die agent se status vanaf die kommando-lyn. Alle kommando's vereis WP-CLI 2.0 of hoër.

## Instalering

Die WP-CLI kommando's word outomaties geregistreer wanneer die plugin aktief is. Verifieer met:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Voer die Agent Capabilities benchmark suite uit — 'n stel komplekse, meer-stappe prompts wat die volle vermoë-omvang toets. Gebruik dit om modelprestasie te evalueer, AI-verskaffers te vergelyk, of vermoë-pakkette te valideer voordat jy dit in produksie implementeer.

### Sinopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opsies

| Opsie | Beskrywing |
|---|---|
| `--question=<id>` | Voer 'n enkele benchmark-vraag by ID uit in plaas van die volledige suite |
| `--provider=<provider>` | Oorskryf die gekonfigureerde AI-verskaffer vir hierdie uitvoering (bv. `anthropic`, `openai`) |
| `--model=<model>` | Oorskryf die gekonfigureerde model vir hierdie uitvoering (bv. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Uitvoerformaat: `table` (standaard), `json`, `csv` |
| `--save` | Stoor die benchmark-resultate in die database vir historiese vergelyking |

### Voorbeelde

Voer die volledige benchmark suite uit met die huidige verskaffer en model:

```bash
wp gratis-ai-agent benchmark
```

Voer 'n enkele vraag (`q-restaurant-website`) uit en voer dit as JSON uit:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Voer uit teen 'n spesifieke model en stoor resultate:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Uitvoer

Die benchmark voer een ry per vraag uit met die volgende kolomme:

| Kolom | Beskrywing |
|---|---|
| `ID` | Vraag-identifikator |
| `Description` | Kort opsomming van die benchmark-scenario |
| `Score` | Slag/misluk of numeriese telling (0–100) |
| `Abilities Used` | Komma-afgesonderde lys van gebruikte vermoëns |
| `Tokens` | Totale gebruikte tokens |
| `Duration` | Tyd wat op die horlosie gemerk word in sekondes |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Skep 'n portfolio CPT met tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Bou 'n volledige restaurantwebwerf     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Pas 'n donker tema-preset toe           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Vrae

Die standaard suite sluit in:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Skep 'n Portfolio CPT met 'n Project Category taksonomie en registreer 'n blokpatroon |
| `q-restaurant-website` | Bou 'n volledige restaurantwebwerf met 'n menu CPT, besprekingsvorm en navigasie |
| `q-dark-mode-theme` | Pas 'n donker-modus ontwerp-preset toe en spuit handelskleure in |
| `q-nav-builder` | Skep 'n vier-item primêre navigasie-menu met 'n ingebedde dropdown |
| `q-options-roundtrip` | Lees, wysig en herstel 'n stel WordPress-opsies |
| `q-ability-install` | Ontdek en installeer die mees toepaslike vermoë-pakket vir 'n beskryfde gebruik geval |

Bykomende vrae kan via die `gratis_ai_agent_benchmark_questions` filter geregistreer word.

---

## `wp gratis-ai-agent abilities`

Bestuur geïnstalleerde vermoëns en vermoë-pakkette.

### `wp gratis-ai-agent abilities list`

Lys al geregistreerde vermoëns, hul bron (kern of pakket), en hul huidige status.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opsies**

| Opsie | Beskrywing |
|---|---|
| `--format=<format>` | Uitvoerformaat: `table` (standaard), `json`, `csv` |

**Voorbeelduitvoer**

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

Laai en aktiveer 'n vermoë-pakket uit die register.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumente**

| Argument | Beskrywing |
|---|---|
| `<slug>` | Plugin slug van die vermoë-pakket, bv. `gratis-ai-agent-woocommerce` |

**Voorbeeld**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Sukses: Gratis-ai-agent-woocommerce geïnstalleer. Het 3 vermoëns bygevoeg: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Deaktiveer 'n spesifieke vermoëns sonder om die pakket te verwyder. Dit is nuttig vir die beperking van die agent se omvang op 'n gegewe webwerf.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Voorbeeld**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Sukses: Vermoëns 'delete_post_type' gedeaktiveer.
```

---

### `wp gratis-ai-agent abilities enable`

Aktiveer 'n voorheen gedeaktiveerde vermoëns.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Toon die huidige agent-konfigurasie en konektiwiteitsstatus.

```bash
wp gratis-ai-agent status
```

**Voorbeelduitvoer**

```
Plugin Weergawe:    1.4.0
AI Verskaffer:       Anthropic
Model:             claude-sonnet-4-6
Verskaffer Status:   Verbind
Gelaaide Vermoëns:  24
Benchmark Resultate: 3 gestoorde lae (laaste: 2026-04-15)
Opsies Blokkering: 18 items
```

---

## `wp gratis-ai-agent logs`

Toon onlangse agent-aktiwiteite uit die debug-log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opsies**

| Opsie | Beskrywing |
|---|---|
| `--last=<n>` | Toon die laaste N log-inskrywings. Standaard `50` |
| `--level=<level>` | Filter volgens vlak: `info`, `warning`, `error` |
| `--ability=<ability>` | Filter volgens vermoënsnaam |

**Voorbeeld**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Reset agent-toestand: maak ingespuuite CSS skoon, verwyder agent-geregistreerde CPT's en taksonomieë, reset globale style, en maak die agent se opsies-cache leeg. Verwyder nie die plugin of sy instellings nie.

```bash
wp gratis-ai-agent reset [--yes]
```

Voeg `--yes` by om die bevestigingspromp te omseil.

```bash
wp gratis-ai-agent reset --yes
Sukses: Agent-toestand gereseteer. Skoon: 2 posgipes, 1 taksonomie, aangepaste CSS, globale style-oorname.
```

---

## Uitgangskodes

Alle kommando's verlaat `0` by sukses. Nie-nul uitgangskodes:

| Kode | Betekenis |
|---|---|
| `1` | Algemene fout (kyk na die foutboodskap) |
| `2` | Verskaffer konektiwisfout |
| `3` | Vermoëns gevind |
| `4` | Benchmark vraag gevind |
