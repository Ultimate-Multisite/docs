---
title: Referenca za WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI referenca

Gratis AI Agent isporučuje obitelj naredbi `wp gratis-ai-agent` za benchmarking agenta, upravljanje sposobnostima i dohvaćanje statusa agenta iz naredbenog retka. Sve naredbe zahtijevaju WP-CLI 2.0 ili noviji.

## Instalacija

WP-CLI naredbe registriraju se automatski kada je plugin aktivan. Provjerite s:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Pokreće paket benchmark testova sposobnosti agenta — skup složenih, višekoračnih upita koji koriste cijelu površinu sposobnosti. Upotrijebite ovo za procjenu performansi modela, usporedbu pružatelja AI-ja ili validaciju paketa sposobnosti prije implementacije u produkciju.

### Sinopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opcije

| Option | Description |
|---|---|
| `--question=<id>` | Pokreni jedno benchmark pitanje prema ID-u umjesto cijelog paketa |
| `--provider=<provider>` | Nadjačaj konfiguriranog pružatelja AI-ja za ovo pokretanje (npr. `anthropic`, `openai`) |
| `--model=<model>` | Nadjačaj konfigurirani model za ovo pokretanje (npr. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format izlaza: `table` (zadano), `json`, `csv` |
| `--save` | Spremi benchmark rezultate u bazu podataka za povijesnu usporedbu |

### Primjeri

Pokreni cijeli benchmark paket s trenutačnim pružateljem i modelom:

```bash
wp gratis-ai-agent benchmark
```

Pokreni jedno pitanje (`q-restaurant-website`) i ispiši kao JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Pokreni s određenim modelom i spremi rezultate:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Izlaz

Benchmark ispisuje jedan redak po pitanju sa sljedećim stupcima:

| Column | Description |
|---|---|
| `ID` | Identifikator pitanja |
| `Description` | Kratki sažetak benchmark scenarija |
| `Score` | Prolaz/pad ili numerički rezultat (0–100) |
| `Abilities Used` | Popis pozvanih sposobnosti odvojenih zarezima |
| `Tokens` | Ukupan broj potrošenih tokena |
| `Duration` | Proteklo vrijeme u sekundama |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark pitanja

Zadani paket uključuje:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Izradi Portfolio CPT s taksonomijom Project Category i registriraj uzorak bloka |
| `q-restaurant-website` | Izradi potpunu web-stranicu restorana s menu CPT-om, obrascem za rezervaciju i navigacijom |
| `q-dark-mode-theme` | Primijeni dizajnersku predlošku tamnog načina rada i umetni boje brenda |
| `q-nav-builder` | Izradi primarni navigacijski izbornik s četiri stavke i ugniježđenim padajućim izbornikom |
| `q-options-roundtrip` | Pročitaj, izmijeni i vrati skup WordPress opcija |
| `q-ability-install` | Otkrij i instaliraj najprikladniji paket sposobnosti za opisani slučaj upotrebe |

Dodatna pitanja mogu se registrirati putem filtra `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Upravlja instaliranim sposobnostima i paketima sposobnosti.

### `wp gratis-ai-agent abilities list`

Navodi sve registrirane sposobnosti, njihov izvor (jezgra ili paket) i njihov trenutačni status.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opcije**

| Option | Description |
|---|---|
| `--format=<format>` | Format izlaza: `table` (zadano), `json`, `csv` |

**Primjer izlaza**

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

**Argumenti**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug paketa sposobnosti, npr. `gratis-ai-agent-woocommerce` |

**Primjer**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Onemogućuje određenu sposobnost bez uklanjanja paketa. Korisno za ograničavanje opsega agenta na određenoj web-stranici.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Primjer**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Ponovno omogućuje prethodno onemogućenu sposobnost.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Prikazuje trenutačnu konfiguraciju agenta i status povezivosti.

```bash
wp gratis-ai-agent status
```

**Primjer izlaza**

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

Prikazuje nedavnu aktivnost agenta iz debug zapisnika.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opcije**

| Opcija | Opis |
|---|---|
| `--last=<n>` | Prikaži posljednjih N unosa zapisnika. Zadano `50` |
| `--level=<level>` | Filtriraj prema razini: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtriraj prema nazivu sposobnosti |

**Primjer**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Resetira stanje agenta: čisti ubrizgani CSS, uklanja CPT-ove i taksonomije registrirane od strane agenta, resetira globalne stilove i prazni predmemoriju opcija agenta. Ne uklanja plugin ni njegove postavke.

```bash
wp gratis-ai-agent reset [--yes]
```

Dodajte `--yes` za preskakanje upita za potvrdu.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Izlazni kodovi

Sve naredbe izlaze s `0` pri uspjehu. Izlazni kodovi različiti od nule:

| Kod | Značenje |
|---|---|
| `1` | Opća pogreška (pogledajte poruku pogreške) |
| `2` | Neuspjeh povezivanja s pružateljem usluge |
| `3` | Sposobnost nije pronađena |
| `4` | Benchmark pitanje nije pronađeno |
