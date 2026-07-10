---
title: Referència de WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referència de WP-CLI {#wp-cli-reference}

Gratis AI Agent inclou una família de comandes `wp gratis-ai-agent` per rançar el benchmark de l'agent, gestionar les capacitats i consultar l'estat de l'agent des de la línia de comandes. Tots els comandes requereixen WP-CLI 2.0 o més.

## Instal·lació {#installation}

Les comandes de WP-CLI es registren automàticament quan el plugin està actiu. Verifiqua amb:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Executa la suite de benchmark de Capacitats de l'Agent — un conjunt de *prompts* complexos i de múltiples passos que exerciten la total superfície de capacitats. Utilitza això per avaluar el rendiment del model, comparar proveïdors d'IA o validar paquets de capacitats abans de desplegar-lo en producció.

### Sinopsi {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opcions {#options}

| Opció | Descripció |
|---|---|
| `--question=<id>` | Executa una única pregunta de benchmark per ID en lloc de la suite completa |
| `--provider=<provider>` | Sobrescreu el proveïdor d'IA configurat per a aquesta execució (ex: `anthropic`, `openai`) |
| `--model=<model>` | Sobrescreu el model configurat per a aquesta execució (ex: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format d'exposició: `table` (defecto), `json`, `csv` |
| `--save` | Guarda els resultats del benchmark a la base de dades per a comparatives històriques |

### Exemples {#examples}

Executa la suite de benchmark completa amb el proveïdor i el model actuals:

```bash
wp gratis-ai-agent benchmark
```

Executa una única pregunta (`q-restaurant-website`) i expónix-la com a JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Executa contra un model específic i guarda els resultats:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Resultats {#output}

El benchmark expón una fila per pregunta amb les columnes següents:

| Columna | Descripció |
|---|---|
| `ID` | Identificador de la pregunta |
| `Description` | Breu resum dello escenari de benchmark |
| `Score` | Pass/fail o puntuació numèrica (0–100) |
| `Abilities Used` | Llista separada per virgules de capacitats invocades |
| `Tokens` | Tokens total consumats |
| `Duration` | Temps realtat en segons |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Preguntes de Benchmark {#benchmark-questions}

La suite per defecte inclou:

| ID | Escenari |
|---|---|
| `q-portfolio-site` | Crear un CPT de Portefolial amb una taxonomia de Categoria de Projecte i registrar un patró de bloc |
| `q-restaurant-website` | Construir un full lloc web de restaurant amb un CPT de menús, formulari de reserva i navegació |
| `q-dark-mode-theme` | Aplicar un preset de disseny de mode fosco i injectar colors de marca |
| `q-nav-builder` | Crear un menú de navegació principal de quatre elements amb un desplegable anidat |
| `q-options-roundtrip` | Lecturar, modificar i restaurar un conjunt d'opcions de WordPress |
| `q-ability-install` | Descobrir i instal·lar el paquet de capacitats més adequat per a un cas d'ús descrit |

Es poden registrar preguntes addicionals mitjançant el filtre `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Gestiona les capacitats i els paquets de capacitats instal·lats.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Mostra totes les capacitats registrades, la seva font (núcle o paquet) i el seu estat actual.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opcions**

| Opció | Descripció |
|---|---|
| `--format=<format>` | Format d'exposició: `table` (defecto), `json`, `csv` |

**Exemple d'exposició**

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

Descarrega i activa un paquet de capacitats del registre.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Descripció |
|---|---|
| `<slug>` | Slug del plugin del paquet de capacitats, ex: `gratis-ai-agent-woocommerce` |

**Exemple**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Desactiva una capacitat específica sense eliminar el paquet. Útil per restringir l'àmbit de l'agent en un site donat.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Exemple**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Reactiva una capacitat deshabilitada prèviament.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Mostra la configuració actual de l'agent i l'estat de connectivitat.

```bash
wp gratis-ai-agent status
```

**Exemple d'exposició**

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

Mostra l'activitat recent de l'agent del *debug log*.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opcions**

| Opció | Descripció |
|---|---|
| `--last=<n>` | Mostra les últimes N entrades del *log*. Defecto `50` |
| `--level=<level>` | Filtrar per nivell: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtrar per nom de capacitat |

**Exemple**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Reinicia l'estat de l'agent: neteja el CSS injectat, elimina els CPTs i les taxonomies registrades per l'agent, reinicia els estils globals i empteix la memòria *cache* d'opcions de l'agent. No elimina el plugin ni les seves configuracions.

```bash
wp gratis-ai-agent reset [--yes]
```

Afegeix `--yes` per saltar el *prompt* de confirmació.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Codis d'Exèdit {#exit-codes}

Tots els comandes surten amb `0` en cas de èxit. Codis d'èxit no nuls:

| Code | Significat |
|---|---|
| `1` | Error general (veure el missatge d'error) |
| `2` | Fallida connectivitat del proveïdor |
| `3` | Capacitat no trobada |
| `4` | Pregunta de benchmark no trobada |
