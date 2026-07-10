---
title: Referenca WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referenca WP-CLI {#wp-cli-reference}

Gratis AI Agent vjen me një familje komandash `wp gratis-ai-agent` për krahasimin e performancës së agjentit, menaxhimin e aftësive dhe marrjen e statusit të agjentit nga linja e komandës. Të gjitha komandat kërkojnë WP-CLI 2.0 ose më të lartë.

## Instalimi {#installation}

Komandat WP-CLI regjistrohen automatikisht kur shtesa është aktive. Verifikojeni me:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Ekzekuton kompletin e benchmark-ut të Aftësive të Agjentit — një grup kërkesash komplekse, me shumë hapa, që ushtrojnë të gjithë sipërfaqen e aftësive. Përdoreni këtë për të vlerësuar performancën e modelit, për të krahasuar ofruesit e AI-së, ose për të validuar paketat e aftësive përpara vendosjes në prodhim.

### Përmbledhje {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opsionet {#options}

| Opsion | Përshkrimi |
|---|---|
| `--question=<id>` | Ekzekuto një pyetje të vetme benchmark sipas ID-së në vend të të gjithë kompletit |
| `--provider=<provider>` | Anashkalo ofruesin e konfiguruar të AI-së për këtë ekzekutim (p.sh. `anthropic`, `openai`) |
| `--model=<model>` | Anashkalo modelin e konfiguruar për këtë ekzekutim (p.sh. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Formati i daljes: `table` (parazgjedhje), `json`, `csv` |
| `--save` | Ruaj rezultatet e benchmark-ut në bazën e të dhënave për krahasim historik |

### Shembuj {#examples}

Ekzekuto kompletin e plotë të benchmark-ut me ofruesin dhe modelin aktual:

```bash
wp gratis-ai-agent benchmark
```

Ekzekuto një pyetje të vetme (`q-restaurant-website`) dhe shfaq daljen si JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Ekzekuto kundrejt një modeli specifik dhe ruaj rezultatet:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Dalja {#output}

Benchmark-u nxjerr një rresht për çdo pyetje me kolonat e mëposhtme:

| Kolona | Përshkrimi |
|---|---|
| `ID` | Identifikuesi i pyetjes |
| `Description` | Përmbledhje e shkurtër e skenarit të benchmark-ut |
| `Score` | Kalim/dështim ose pikëzim numerik (0–100) |
| `Abilities Used` | Listë e aftësive të thirrura, të ndara me presje |
| `Tokens` | Totali i tokens të konsumuar |
| `Duration` | Koha reale e ekzekutimit në sekonda |

```
ID                       Përshkrimi                         Pikëzimi  Aftësitë e përdorura       Tokens  Kohëzgjatja
q-portfolio-site         Krijo një CPT portofoli me etiketa 100       register_post_type, reg...  4821    18.3s
q-restaurant-website     Ndërto një website të plotë restoranti 92    create_site_plan, execut... 12430   54.1s
q-dark-mode-theme        Apliko një paravendosje theme të errët 100   apply_theme_json_preset     986     4.2s
...
```

### Pyetjet e Benchmark-ut {#benchmark-questions}

Kompleti parazgjedhje përfshin:

| ID | Skenari |
|---|---|
| `q-portfolio-site` | Krijo një Portfolio CPT me një taksonomi Project Category dhe regjistro një model blloku |
| `q-restaurant-website` | Ndërto një website të plotë restoranti me një menu CPT, formular rezervimi dhe navigim |
| `q-dark-mode-theme` | Apliko një paravendosje dizajni me modalitet të errët dhe injekto ngjyrat e brendit |
| `q-nav-builder` | Krijo një menu navigimi primar me katër elemente dhe me një dropdown të ndërthurur |
| `q-options-roundtrip` | Lexo, modifiko dhe rikthe një grup opsionesh WordPress |
| `q-ability-install` | Zbulo dhe instalo paketën më të përshtatshme të aftësive për një rast përdorimi të përshkruar |

Pyetje shtesë mund të regjistrohen përmes filtrit `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Menaxhon aftësitë e instaluara dhe paketat e aftësive.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Liston të gjitha aftësitë e regjistruara, burimin e tyre (bazë ose paketë) dhe statusin e tyre aktual.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opsionet**

| Opsion | Përshkrimi |
|---|---|
| `--format=<format>` | Formati i daljes: `table` (parazgjedhje), `json`, `csv` |

**Dalje shembull**

```
Aftësia                  Burimi                          Statusi
register_post_type        gratis-ai-agent (bazë)          aktive
list_post_types           gratis-ai-agent (bazë)          aktive
delete_post_type          gratis-ai-agent (bazë)          aktive
register_taxonomy         gratis-ai-agent (bazë)          aktive
inject_custom_css         gratis-ai-agent (bazë)          aktive
apply_theme_json_preset   gratis-ai-agent (bazë)          aktive
create_product            gratis-ai-agent-woocommerce     aktive
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Shkarkon dhe aktivizon një paketë aftësish nga regjistri.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentet**

| Argument | Përshkrimi |
|---|---|
| `<slug>` | Slug-u i shtesës së paketës së aftësive, p.sh. `gratis-ai-agent-woocommerce` |

**Shembull**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Çaktivizon një aftësi specifike pa hequr paketën. E dobishme për të kufizuar fushëveprimin e agjentit në një site të caktuar.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Shembull**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Riaktivizon një aftësi të çaktivizuar më parë.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Shfaq konfigurimin aktual të agjentit dhe statusin e lidhjes.

```bash
wp gratis-ai-agent status
```

**Dalje shembull**

```
Versioni i shtesës:  1.4.0
Ofruesi i AI-së:     Anthropic
Modeli:              claude-sonnet-4-6
Statusi i ofruesit:  I lidhur
Aftësi të ngarkuara: 24
Rezultate benchmark: 3 ekzekutime të ruajtura (i fundit: 2026-04-15)
Blocklist opsionesh: 18 zëra
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Shfaq aktivitetin e fundit të agjentit nga regjistri i debug-ut.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opsionet**

| Opsion | Përshkrim |
|---|---|
| `--last=<n>` | Shfaq N hyrjet e fundit të regjistrit. Parazgjedhja `50` |
| `--level=<level>` | Filtro sipas nivelit: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtro sipas emrit të aftësisë |

**Shembull**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Rivendos gjendjen e agjentit: pastron CSS-in e injektuar, heq CPT-të dhe taksonomitë e regjistruara nga agjenti, rivendos stilet globale dhe zbraz cache-in e opsioneve të agjentit. Nuk e heq plugin-in ose cilësimet e tij.

```bash
wp gratis-ai-agent reset [--yes]
```

Shto `--yes` për të anashkaluar kërkesën e konfirmimit.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Kodet e daljes {#exit-codes}

Të gjitha komandat dalin me `0` në rast suksesi. Kode daljeje jo-zero:

| Kod | Kuptimi |
|---|---|
| `1` | Gabim i përgjithshëm (shih mesazhin e gabimit) |
| `2` | Dështim i lidhjes me provider-in |
| `3` | Aftësia nuk u gjet |
| `4` | Pyetja e benchmark-ut nuk u gjet |
