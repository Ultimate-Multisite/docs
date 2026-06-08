---
title: WP-CLI Reference
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Reference

Gratis AI Agent koristi skup komandi `wp gratis-ai-agent` za testiranje agenta, upravljanje sposobnostima i provjeru statusa agenta iz komandne linije. Sve komande zahtijevaju WP-CLI verziju 2.0 ili noviju.

## Installation

Komande WP-CLI automatski se registriraju kada je plugin aktivan. Provjerite sljedećim:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Pokreće kompletnu seriju testiranja sposobnosti agenta (Agent Capabilities benchmark suite) — skup složenih, višestepenitih promptova koji testiraju sve dostupne sposobnosti. Koristite ovo za evaluaciju performansi modela, usporedbu AI provajdera ili validaciju paketa sposobnosti prije implementacije u produkciji.

### Synopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options

| Option | Description |
|---|---|
| `--question=<id>` | Pokreće samo jednu testnu sposobnost po ID-u, umjesto cijelog paketa |
| `--provider=<provider>` | Prekida (override) konfigurisanog AI provajdera za ovaj rad (npr. `anthropic`, `openai`) |
| `--model=<model>` | Prekida (override) konfigurirani model za ovaj rad (npr. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format izlaza: `table` (podrazumevano), `json`, `csv` |
| `--save` | Čuva rezultate testiranja u bazi podataka radi istorijskog poređenja |

### Examples

Pokrenite kompletnu seriju testiranja sa trenutnim provajderom i modelom:

```bash
wp gratis-ai-agent benchmark
```

Pokrenite jednu sposobnost (`q-restaurant-website`) i izlaz u JSON formatu:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Pokrenite testiranje protiv specifičnog modela i sačuvajte rezultate:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output

Testiranje prikazuje jedan red po sposobnosti sa sljedećim kolonama:

| Column | Description |
|---|---|
| `ID` | Identifikator sposobnosti |
| `Description` | Kratak sažetak scenarija testiranja |
| `Score` | Prošao/nije prošao ili numerički rezultat (0–100) |
| `Abilities Used` | Lista sposobnosti, razdvojena zarezima, koje su korištene |
| `Tokens` | Ukupan broj tokena potrošenih |
| `Duration` | Vrijeme u sekundama (wall-clock time) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions

Podrazumevani paket uključuje:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Kreiranje Portfolio CPT-a sa taksonomijom Project Category i registracija block pattern-a |
| `q-restaurant-website` | Izgradnja kompletnog restoranskog web-sajta sa CPT-om za meni, formularom za rezervaciju i navigacijom |
| `q-dark-mode-theme` | Primjena predloška tamnog izgleda i ubacivanje brand boja |
| `q-nav-builder` | Kreiranje glavnog navigacionog menija od četiri stavke sa ugniježđenim padajućim izbornikom |
| `q-options-roundtrip` | Čitanje, modifikacija i vraćanje skupa WordPress opcija |
| `q-ability-install` | Otkrivanje i instaliranje najprikladnijeg paketa sposobnosti za opisani slučaj upotrebe |

Dodatne sposobnosti se mogu registrovati putem filtera `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Upravlja instaliranim sposobnostima i paketima sposobnosti.

### `wp gratis-ai-agent abilities list`

Prikazuje sve registrovane sposobnosti, njihov izvor (core ili paket) i njihov trenutni status.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | Format izlaza: `table` (podrazumevano), `json`, `csv` |

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

### `wp gratis-ai-agent abilities install`

Preuzima i aktivira paket sposobnosti iz registra.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug paketa sposobnosti, npr. `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Deaktivira određenu sposobnost bez uklanjanja paketa. Korisno je za ograničavanje dometa agenta na određenoj lokaciji.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Example**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Ponovo aktivira prethodno deaktiviranu sposobnost.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Prikazuje trenutnu konfiguraciju agenta i status konektivnosti.

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

## `wp gratis-ai-agent logs`

Prikazuje nedavne aktivnosti agenta iz debug loga.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | Prikazuje zadnjih N log unosa. Podrazumevano `50` |
| `--level=<level>` | Filtriranje po nivou: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtriranje po imenu sposobnosti |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Resetuje stanje agenta: briše ubaceni CSS, uklanja CPT-ove i taksonomije registrovane od strane agenta, resetuje globalne stilove i prazni cache opcija agenta. Ne uklanja plugin niti njegove postavke.

```bash
wp gratis-ai-agent reset [--yes]
```

Dodajte `--yes` da preskočite prozor za potvrdu.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes

Sve komande izlaze sa kodom `0` pri uspjehu. Ne-nulti kodovi izlaza:

| Code | Meaning |
|---|---|
| `1` | Opšta greška (vidjeti poruku o grešci) |
| `2` | Greška konektivnosti provajdera |
| `3` | Sposobnost nije pronađena |
| `4` | Sposobnost testiranja nije pronađena |
