---
title: WP-CLI Referencia
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Referencia {#wp-cli-reference}

A gratis AI Agent egy `wp gratis-ai-agent` parancsszekenciát biztosít, amellyel benchmarkolhatja az agentet, kezelheti képességeit, és lekérdezheti az agent állapotát a command line-on. Minden parancshez WP-CLI 2.0 vagy annál újabb verzió szükséges.

## Telepítés {#installation}

A WP-CLI parancsok automatikusan regisztrálódnak, amikor a plugin aktív. Ellenőrizze a következővel:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

A Benchmark képességek csomagját futtatja — ez egy komplex, több lépéses promptoket tartalmazó készlet, amely az összes képesség területét teszteli. Használja ezt a modell teljesítményének értékeléséhez, az AI szolgáltatók összehasonlításához, vagy a gyártásba helyezés előtt képességcsomagok validálásához.

### Szinopsiszis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opciók {#options}

| Opció | Leírás |
|---|---|
| `--question=<id>` | Egyetlen benchmark kérdés futtatása az ID alapján, nem az egész csomag. |
| `--provider=<provider>` | Áthullítja az alapértelmezett AI szolgáltatót e futtatás alkalmára (pl. `anthropic`, `openai`). |
| `--model=<model>` | Áthullítja az alapértelmezett modellt e futtatás alkalmára (pl. `claude-opus-4-6`, `gpt-4o`). |
| `--output=<format>` | Kiadási formátum: `table` (alapértelmezett), `json`, `csv`. |
| `--save` | Mentja el a benchmark eredményeit a adatbázisba történelmi összehasonlításhoz. |

### Példák {#examples}

Futtassa a teljes benchmark csomagját az aktuális szolgáltatóval és modellt használva:

```bash
wp gratis-ai-agent benchmark
```

Futtassa egyetlen kérdést (`q-restaurant-website`) és adja ki JSON formátumban:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Futtassa egy meghatározott modellt ellen, és mentse el az eredményeket:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Kiadás {#output}

A benchmark minden kérdésre egy sor adatot ad ki, a következő oszlopokkal:

| Osztály | Leírás |
|---|---|
| `ID` | Kérdés azonosítója |
| `Description` | Rövid összefoglaló a benchmark forgatókönyméről |
| `Score` | Sikert/sikertelen vagy numerikus pontszám (0–100) |
| `Abilities Used` | A hívott képességek vesszővel elválasztott listája |
| `Tokens` | Teljes feldolgozott token szám |
| `Duration` | Idő (másodpercekben) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Kérdések {#benchmark-questions}

Az alapértelmezett csomag tartalmazza:

| ID | Forgatókönyv |
|---|---|
| `q-portfolio-site` | Létrehoz egy Portfolio CPT-t címkékkel és regisztrál egy blokk mintát |
| `q-restaurant-website` | Építs egy teljes éttermi weboldalt menü CPT-vel, foglalási űrlapkal és navigációval |
| `q-dark-mode-theme` | Alkalmaz egy sötét módú dizájn előállítását és injektálja a márka színeit |
| `q-nav-builder` | Létrehoz egy négy elemű fő navigációs menüt, ne véső menüvel |
| `q-options-roundtrip` | Olvassa, módosítsa és helyreállítsa egy WordPress opciók készletét |
| `q-ability-install` | Fedezze fel és telepítse az adott felhasználási esettől függő legmegfelelőbb képességcsomagot |

További kérdéseket a `gratis_ai_agent_benchmark_questions` filter segítségével lehet regisztrálni.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Kezelíti a telepített képességeket és képességcsomagokat.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Listáz minden regisztrált képességet, forrását (core vagy csomag), és aktuális állapotát.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opciók**

| Opció | Leírás |
|---|---|
| `--format=<format>` | Kiadási formátum: `table` (alapértelmezett), `json`, `csv`. |

**Példa kiadás**

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

Letölti és aktivál egy képességcsomagot a regisztrációból.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentumok**

| Argumentum | Leírás |
|---|---|
| `<slug>` | A képességcsomag plugin slug-ja, pl. `gratis-ai-agent-woocommerce`. |

**Példa**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Inaktívítja egy meghatározott képességet anélkül, hogy eltávolítaná a csomagot. Hasznos, ha korlátozni akarja az agent működési területét egy adott oldalon.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Példa**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Újraaktiválja egy korábban inaktívított képességet.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Megjeleníti az aktuális agent konfigurációját és a kapcsolat állapotát.

```bash
wp gratis-ai-agent status
```

**Példa kiadás**

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

Megjeleníti az agent legfrissebb tevékenységét a debug logból.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opciók**

| Opció | Leírás |
|---|---|
| `--last=<n>` | Megjeleníti az utolsó N log bejegyzését. Alapértelmezett: `50`. |
| `--level=<level>` | Szűrő a szint alapján: `info`, `warning`, `error`. |
| `--ability=<ability>` | Szűrő a képesség neve alapján. |

**Példa**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Állapot visszaállítása az agent számára: törli az injektált CSS-t, eltávolítja az agent által regisztrált CPT-ket és taxónómiákat, visszaállítja a globális stílusokat, és üresíti az agent opciók cache-ját. Nem távolítja el a plugin-t vagy annak beállításait.

```bash
wp gratis-ai-agent reset [--yes]
```

Adja hozzá az `--yes` opciót, hogy kihagyja a megerősítő ablakot.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Kilépési kódok {#exit-codes}

Minden parancs sikeres esetén `0` kódot ad ki. Nem nulla kilépési kódok:

| Kód | Jelentés |
|---|---|
| `1` | Általános hiba (lásd a hibaüzenetet) |
| `2` | Szolgáltató kapcsolathiba |
| `3` | Képesség nem található |
| `4` | Benchmark kérdés nem található |
