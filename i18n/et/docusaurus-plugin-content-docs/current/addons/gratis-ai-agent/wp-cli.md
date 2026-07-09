---
title: WP-CLI viide
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI viide

Gratis AI Agent sisaldab käsuperekonda `wp gratis-ai-agent` agendi jõudluse võrdlustestimiseks, võimekuste haldamiseks ja agendi oleku pärimiseks käsurealt. Kõik käsud nõuavad WP-CLI versiooni 2.0 või uuemat.

## Paigaldamine

WP-CLI käsud registreeritakse automaatselt, kui plugin on aktiivne. Kontrolli käsuga:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Käivitab Agent Capabilities võrdlustestide komplekti — kogumi keerukaid, mitmesammulisi viipasid, mis kasutavad kogu võimekuste ulatust. Kasuta seda mudeli jõudluse hindamiseks, AI pakkujate võrdlemiseks või võimekuste pakkide valideerimiseks enne tootmiskeskkonda juurutamist.

### Ülevaade

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Valikud

| Valik | Kirjeldus |
|---|---|
| `--question=<id>` | Käivita kogu komplekti asemel üks võrdlustesti küsimus ID järgi |
| `--provider=<provider>` | Alista selle käivituse jaoks seadistatud AI pakkuja (nt `anthropic`, `openai`) |
| `--model=<model>` | Alista selle käivituse jaoks seadistatud mudel (nt `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Väljundvorming: `table` (vaikimisi), `json`, `csv` |
| `--save` | Salvesta võrdlustesti tulemused andmebaasi ajalooliseks võrdluseks |

### Näited

Käivita kogu võrdlustestide komplekt praeguse pakkuja ja mudeliga:

```bash
wp gratis-ai-agent benchmark
```

Käivita üks küsimus (`q-restaurant-website`) ja väljasta JSON-ina:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Käivita konkreetse mudeli vastu ja salvesta tulemused:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Väljund

Võrdlustest väljastab iga küsimuse kohta ühe rea järgmiste veergudega:

| Veerg | Kirjeldus |
|---|---|
| `ID` | Küsimuse identifikaator |
| `Description` | Võrdlustesti stsenaariumi lühikokkuvõte |
| `Score` | Läbitud/ebaõnnestunud või numbriline skoor (0–100) |
| `Abilities Used` | Komadega eraldatud loend kasutatud võimekustest |
| `Tokens` | Kokku tarbitud tokenid |
| `Duration` | Kestus sekundites reaalajas |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Võrdlustesti küsimused

Vaikekomplekt sisaldab:

| ID | Stsenaarium |
|---|---|
| `q-portfolio-site` | Loo Portfolio CPT koos Project Category taksonoomiaga ja registreeri plokimuster |
| `q-restaurant-website` | Ehita täielik restorani veebisait koos menüü CPT, broneerimisvormi ja navigeerimisega |
| `q-dark-mode-theme` | Rakenda tumeda režiimi kujunduse eelseadistus ja lisa brändivärvid |
| `q-nav-builder` | Loo nelja üksusega peamine navigeerimismenüü koos pesastatud rippmenüüga |
| `q-options-roundtrip` | Loe, muuda ja taasta WordPressi valikute kogum |
| `q-ability-install` | Leia ja paigalda kirjeldatud kasutusjuhu jaoks sobivaim võimekuste pakk |

Lisaküsimusi saab registreerida filtri `gratis_ai_agent_benchmark_questions` kaudu.

---

## `wp gratis-ai-agent abilities`

Haldab paigaldatud võimekusi ja võimekuste pakke.

### `wp gratis-ai-agent abilities list`

Loetleb kõik registreeritud võimekused, nende allika (tuum või pakk) ja praeguse oleku.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Valikud**

| Valik | Kirjeldus |
|---|---|
| `--format=<format>` | Väljundvorming: `table` (vaikimisi), `json`, `csv` |

**Näidisväljund**

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

Laadib registrist alla ja aktiveerib võimekuste paki.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumendid**

| Argument | Kirjeldus |
|---|---|
| `<slug>` | Võimekuste paki plugina slug, nt `gratis-ai-agent-woocommerce` |

**Näide**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Keelab konkreetse võimekuse ilma pakki eemaldamata. Kasulik agendi ulatuse piiramiseks konkreetsel saidil.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Näide**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Lubab uuesti varem keelatud võimekuse.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Kuvab praeguse agendi konfiguratsiooni ja ühenduvuse oleku.

```bash
wp gratis-ai-agent status
```

**Näidisväljund**

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

Kuvab viimase aja agendi tegevuse silumislogist.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Valikud**

| Valik | Kirjeldus |
|---|---|
| `--last=<n>` | Kuva viimased N logikirjet. Vaikimisi `50` |
| `--level=<level>` | Filtreeri taseme järgi: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtreeri võime nime järgi |

**Näide**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Lähtestab agendi oleku: tühjendab sisestatud CSS-i, eemaldab agendi registreeritud CPT-d ja taksonoomiad, lähtestab globaalsed stiilid ning tühjendab agendi valikute vahemälu. Ei eemalda pistikprogrammi ega selle seadeid.

```bash
wp gratis-ai-agent reset [--yes]
```

Lisa `--yes`, et kinnitusküsimus vahele jätta.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Väljumiskoodid

Kõik käsud väljuvad õnnestumise korral koodiga `0`. Nullist erinevad väljumiskoodid:

| Kood | Tähendus |
|---|---|
| `1` | Üldine viga (vt veateadet) |
| `2` | Teenusepakkujaga ühenduse loomise tõrge |
| `3` | Võimet ei leitud |
| `4` | Võrdlustesti küsimust ei leitud |
