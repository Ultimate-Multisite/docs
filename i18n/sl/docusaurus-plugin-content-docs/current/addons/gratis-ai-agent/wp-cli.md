---
title: Referenca WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI referenca {#wp-cli-reference}

Gratis AI Agent vključuje družino ukazov `wp gratis-ai-agent` za primerjalno testiranje agenta, upravljanje zmožnosti in poizvedovanje o stanju agenta iz ukazne vrstice. Vsi ukazi zahtevajo WP-CLI 2.0 ali novejši.

## Namestitev {#installation}

Ukazi WP-CLI se samodejno registrirajo, ko je plugin aktiven. Preverite z:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Zažene zbirko primerjalnih testov Agent Capabilities — nabor kompleksnih večkorakovnih pozivov, ki preizkusijo celotno površino zmožnosti. Uporabite to za ocenjevanje zmogljivosti modela, primerjavo ponudnikov AI ali preverjanje paketov zmožnosti pred uvedbo v produkcijo.

### Povzetek {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Možnosti {#options}

| Možnost | Opis |
|---|---|
| `--question=<id>` | Zaženi eno vprašanje primerjalnega testa po ID-ju namesto celotne zbirke |
| `--provider=<provider>` | Prepiši konfiguriranega ponudnika AI za ta zagon (npr. `anthropic`, `openai`) |
| `--model=<model>` | Prepiši konfigurirani model za ta zagon (npr. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Oblika izpisa: `table` (privzeto), `json`, `csv` |
| `--save` | Shrani rezultate primerjalnega testa v podatkovno zbirko za zgodovinsko primerjavo |

### Primeri {#examples}

Zaženi celotno zbirko primerjalnih testov s trenutnim ponudnikom in modelom:

```bash
wp gratis-ai-agent benchmark
```

Zaženi eno vprašanje (`q-restaurant-website`) in izpiši kot JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Zaženi proti določenemu modelu in shrani rezultate:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Izhod {#output}

Primerjalni test izpiše eno vrstico na vprašanje z naslednjimi stolpci:

| Stolpec | Opis |
|---|---|
| `ID` | Identifikator vprašanja |
| `Description` | Kratek povzetek scenarija primerjalnega testa |
| `Score` | Uspešno/neuspešno ali številčna ocena (0–100) |
| `Abilities Used` | Z vejicami ločen seznam priklicanih zmožnosti |
| `Tokens` | Skupno porabljeni tokeni |
| `Duration` | Dejanski čas v sekundah |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Vprašanja primerjalnega testa {#benchmark-questions}

Privzeta zbirka vključuje:

| ID | Scenarij |
|---|---|
| `q-portfolio-site` | Ustvari Portfolio CPT s taksonomijo Project Category in registriraj vzorec bloka |
| `q-restaurant-website` | Zgradi celotno restavracijsko spletno mesto z menijem CPT, obrazcem za rezervacije in navigacijo |
| `q-dark-mode-theme` | Uporabi oblikovno prednastavitev temnega načina in vstavi barve znamke |
| `q-nav-builder` | Ustvari primarni navigacijski meni s štirimi elementi in ugnezdenim spustnim menijem |
| `q-options-roundtrip` | Preberi, spremeni in obnovi nabor možnosti WordPress |
| `q-ability-install` | Odkrij in namesti najprimernejši paket zmožnosti za opisani primer uporabe |

Dodatna vprašanja je mogoče registrirati prek filtra `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Upravlja nameščene zmožnosti in pakete zmožnosti.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Prikaže vse registrirane zmožnosti, njihov vir (jedro ali paket) in njihovo trenutno stanje.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Možnosti**

| Možnost | Opis |
|---|---|
| `--format=<format>` | Oblika izpisa: `table` (privzeto), `json`, `csv` |

**Primer izpisa**

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

Prenese in aktivira paket zmožnosti iz registra.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumenti**

| Argument | Opis |
|---|---|
| `<slug>` | Plugin slug paketa zmožnosti, npr. `gratis-ai-agent-woocommerce` |

**Primer**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Onemogoči določeno zmožnost brez odstranitve paketa. Uporabno za omejevanje obsega agenta na danem spletnem mestu.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Primer**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Znova omogoči prej onemogočeno zmožnost.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Prikaže trenutno konfiguracijo agenta in stanje povezljivosti.

```bash
wp gratis-ai-agent status
```

**Primer izpisa**

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

Prikaže nedavno dejavnost agenta iz dnevnika za odpravljanje napak.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Možnosti**

| Možnost | Opis |
|---|---|
| `--last=<n>` | Prikaži zadnjih N vnosov dnevnika. Privzeto `50` |
| `--level=<level>` | Filtriraj po ravni: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtriraj po imenu sposobnosti |

**Primer**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Ponastavi stanje agenta: počisti vstavljeni CSS, odstrani CPT-je in taksonomije, ki jih je registriral agent, ponastavi globalne sloge in izprazni predpomnilnik možnosti agenta. Ne odstrani vtičnika ali njegovih nastavitev.

```bash
wp gratis-ai-agent reset [--yes]
```

Dodajte `--yes`, da preskočite poziv za potrditev.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Izhodne kode {#exit-codes}

Vsi ukazi se ob uspehu končajo z `0`. Izhodne kode, ki niso ničelne:

| Koda | Pomen |
|---|---|
| `1` | Splošna napaka (glejte sporočilo o napaki) |
| `2` | Napaka povezljivosti ponudnika |
| `3` | Sposobnost ni najdena |
| `4` | Vprašanje za benchmark ni najdeno |
