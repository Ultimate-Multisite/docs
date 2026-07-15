---
title: WP-CLI Referință
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referință WP-CLI

Gratis AI Agent oferă o familie de comenzi `wp gratis-ai-agent` pentru a realiza benchmark-uri pentru agent, pentru a gestiona abilities-urile și pentru a interoga statusul agentului direct din linia de comandă. Toate comenzile necesită WP-CLI 2.0 sau o versiune mai nouă.

## Instalare {#installation}

Comenzile WP-CLI sunt înregistrate automat când plugin-ul este activ. Verificați cu:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Rulează setul de benchmark-uri pentru Abilities-urile Agentului — un set de prompturi complexe, cu mai multe pași, care testează întreaga gamă de abilities. Folosiți acest lucru pentru a evalua performanța modelului, pentru a compara furnizorii de AI sau pentru a valida pachetele de abilities înainte de a implementa în producție.

### Sinopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opțiuni {#options}

| Opțiune | Descriere |
|---|---|
| `--question=<id>` | Rulează o singură întrebare de benchmark după ID, în loc de întregul set |
| `--provider=<provider>` | Supraîntinde furnizorul de AI configurat pentru această rulare (ex: `anthropic`, `openai`) |
| `--model=<model>` | Supraîntinde modelul configurat pentru această rulare (ex: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Formatul de ieșire: `table` (implicit), `json`, `csv` |
| `--save` | Salvează rezultatele benchmark-ului în baza de date pentru comparații istorice |

### Exemple {#examples}

Rulează întregul set de benchmark-uri cu furnizorul și modelul curent:

```bash
wp gratis-ai-agent benchmark
```

Rulează o singură întrebare (`q-restaurant-website`) și afișează ca JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Rulează împotriva unui model specific și salvează rezultatele:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Ieșiri {#output}

Benchmark-ul afișează un rând per întrebare cu următoarele coloane:

| Coloană | Descriere |
|---|---|
| `ID` | Identificatorul întrebării |
| `Description` | Rezumat scurt al scenariului de benchmark |
| `Score` | Scor de reușită/eșec sau scor numeric (0–100) |
| `Abilities Used` | Listă separată prin virgulă a abilities-urilor invocate |
| `Tokens` | Numărul total de tokens consumați |
| `Duration` | Timpul în secunde (timp real) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Întrebări de Benchmark {#benchmark-questions}

Setul implicit include:

| ID | Scenariu |
|---|---|
| `q-portfolio-site` | Crearea unui CPT de portofoliu cu o taxonomie de categorii de proiect și înregistrarea unui pattern de bloc |
| `q-restaurant-website` | Construirea unui site web complet de restaurant, cu un CPT pentru meniu, un formular de rezervare și navigare |
| `q-dark-mode-theme` | Aplicarea unui preset de design în modul întunecat și injectarea culorilor de brand |
| `q-nav-builder` | Crearea unui meniu de navigare principal cu patru elemente și un dropdown înlăuat |
| `q-options-roundtrip` | Citirea, modificarea și restaurarea unui set de opțiuni WordPress |
| `q-ability-install` | Descoperirea și instalarea pachetului de abilities cel mai potrivit pentru un caz de utilizare descris |

Întrebările suplimentare pot fi înregistrate prin filtrul `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Gestionează abilities-urile instalate și pachetele de abilities.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Listează toate abilities-urile înregistrate, sursa lor (core sau pachet) și statusul lor curent.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opțiuni**

| Opțiune | Descriere |
|---|---|
| `--format=<format>` | Formatul de ieșire: `table` (implicit), `json`, `csv` |

**Exemplu de ieșire**

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

Descarcă și activează un pachet de abilities din registru.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumente**

| Argument | Descriere |
|---|---|
| `<slug>` | Slug-ul plugin-ului al pachetului de abilities, ex: `gratis-ai-agent-woocommerce` |

**Exemplu**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Dezactivează o ability specifică fără a elimina pachetul. Este util pentru a-i limita scope-ul agentului pe un site anume.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Exemplu**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Reactivează o ability care fusese dezactivată anterior.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Afișează configurația curentă a agentului și statusul conectivității.

```bash
wp gratis-ai-agent status
```

**Exemplu de ieșire**

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

Afișează activitatea recentă a agentului din log-ul de debug.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opțiuni**

| Opțiune | Descriere |
|---|---|
| `--last=<n>` | Arată ultimele N intrări de log. Implicit `50` |
| `--level=<level>` | Filtrează după nivel: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtrează după numele ability-ului |

**Exemplu**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Resetează starea agentului: golește CSS-ul injectat, elimină CPT-urile și taxonomiele înregistrate de agent, resetează override-urile stilurilor globale și golește cache-ul opțiunilor agentului. Nu elimină plugin-ul sau setările acestuia.

```bash
wp gratis-ai-agent reset [--yes]
```

Adăugați `--yes` pentru a sări peste solicitarea de confirmare.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Coduri de Ieșire {#exit-codes}

Toate comenzile iernează `0` în cazul succesului. Codurile de ieșire non-zero:

| Cod | Semnificație |
|---|---|
| `1` | Eroare generală (consultați mesajul de eroare) |
| `2` | Eșec de conectivitate al furnizorului |
| `3` | Ability nu găsită |
| `4` | Întrebare de benchmark nu găsită |
