---
title: Orchestrazione Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orchestrazione del Site Builder v2

Site Builder Orchestration v2 (introdotto in Gratis AI Agent v1.4.0) è il motore che alimenta la creazione di siti web in più fasi. Quando chiedi all'agente di "creare un sito web per un ristorante" o "creare un portfolio con un blog", l'orchestratore scompone questo obiettivo di alto livello in un **piano** strutturato, scopre i plugin necessari per adempierci, esegue ogni passaggio in sequenza, traccia i progressi e si riprende autonomamente in caso di errori.

---

## Come Funziona

### 1. Generazione del Piano

Quando l'agente riceve un'istruzione per la creazione di un sito, chiama la capacità `create_site_plan` per produrre un **piano sito** JSON. Il piano descrive:

- **Obiettivo (Goal)** — cosa dovrebbe fare il sito finito
- **Fasi (Phases)** — gruppi ordinati di passaggi (es. _Setup_, _Tipi di Contenuto_, _Design_, _Contenuto_)
- **Passaggi (Steps)** — chiamate di capacità individuali all'interno di ogni fase
- **Requisiti plugin** — i plugin che devono essere attivi affinché alcuni passaggi possano essere eseguiti
- **Fallback** — passaggi alternativi se un passaggio principale fallisce

**Esempio di piano (abbreviato)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. Scoperta dei Plugin

Prima che inizi l'esecuzione, l'orchestratore analizza i `plugin_requirements` del piano e verifica quali plugin sono già attivi. Per i plugin mancanti, esegue queste azioni:

1. Cerca nel registro tramite `recommend_plugin` la corrispondenza migliore
2. Chiede all'agente di confermare il suggerimento
3. Avvia l'installazione se approvato (o se l'auto-installazione è abilitata nelle impostazioni)

I fallimenti nella scoperta dei plugin non sono fatali: l'orchestratore marca i passaggi interessati come `skipped` (saltati) e continua con il resto del piano.

### 3. Esecuzione del Piano

L'orchestratore chiama `execute_site_plan` con l'ID del piano. L'esecuzione procede fase dopo fase, passaggio dopo passaggio:

- **Riferimenti ai passaggi** (`__ref:` prefix) — i passaggi possono fare riferimento agli output di passaggi precedenti. Nell'esempio sopra, `__ref:create_menu.menu_id` viene risolto con il `menu_id` restituito dal passaggio `create_menu`.
- **Passaggi paralleli** — i passaggi all'interno della stessa fase che non hanno interdipendenze vengono inviati contemporaneamente quando viene impostata la flag `parallel`.
- **Timeout del passaggio** — ogni passaggio ha un timeout individuale (di default: l'impostazione `Ability Timeout`). Un passaggio con timeout viene marcato `failed` (fallito) e il piano continua.

### 4. Tracciamento dei Progressi

Chiama `get_plan_progress` in qualsiasi momento per controllare lo stato di esecuzione:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

Gli utenti WP-CLI possono monitorare i progressi con:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Recupero dagli Errori

Quando un passaggio fallisce, l'orchestratore cerca un passaggio **fallback** definito nel piano:

- **Fallback disponibile** — viene tentato immediatamente il passaggio fallback. Se ha successo, l'esecuzione continua. Se fallisce anche questo, il passaggio viene marcato `failed` e l'esecuzione continua con il passaggio successivo.
- **Nessun fallback** — il passaggio viene marcato `failed`. I passaggi non critici vengono saltati; i passaggi critici (marcati `required: true`) bloccano la fase corrente e attivano un tentativo di recupero a livello di fase.

L'agente segnala tutti i fallimenti nel riepilogo finale del piano e può suggerire passaggi di rimedio manuale per errori non recuperabili.

---

## Capacità del Piano Sito

### `create_site_plan`

Genera un piano sito strutturato da una descrizione di obiettivo in linguaggio naturale.

**Parametri**

| Parametro | Tipo | Richiesto | Descrizione |
|---|---|---|---|
| `goal` | string | Sì | Descrizione in linguaggio naturale del sito web desiderato |
| `style` | string | No | Preferenza di stile visivo: `minimal`, `bold`, `professional`, `playful`. Default: l'agente sceglie in base all'obiettivo |
| `plugins` | array | No | Slug dei plugin da includere nel piano. L'orchestratore aggiunge automaticamente i plugin richiesti. |
| `dry_run` | boolean | No | Se `true`, restituisce il JSON del piano senza salvarlo o eseguirlo. Default `false` |

**Restituisce** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Inizia l'esecuzione di un piano sito precedentemente generato.

**Parametri**

| Parametro | Tipo | Richiesto | Descrizione |
|---|---|---|---|
| `plan_id` | string | Sì | ID del piano da eseguire |
| `auto_install_plugins` | boolean | No | Se `true`, installa automaticamente i plugin richiesti senza conferma. Default `false` |
| `max_retries` | integer | No | Numero di volte per riprovare un passaggio fallito prima di passare al successivo. Default `1` |

**Restituisce** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Restituisce lo stato di esecuzione corrente di un piano sito.

**Parametri**

| Parametro | Tipo | Richiesto | Descrizione |
|---|---|---|---|
| `plan_id` | string | Sì | ID del piano da interrogare |

**Restituisce** l'oggetto progress descritto in [Tracciamento dei Progressi](#4-tracciamento-dei-progressi) sopra.

---

### `handle_plan_error`

Risolve manualmente un passaggio fallito e riprende l'esecuzione del piano dal passaggio successivo. Usalo quando il recupero automatico non è stato possibile e desideri intervenire.

**Parametri**

| Parametro | Tipo | Richiesto | Descrizione |
|---|---|---|---|
| `plan_id` | string | Sì | ID del piano |
| `step_id` | string | Sì | ID del passaggio fallito |
| `resolution` | string | Sì | Uno tra `skip` (saltare e continuare), `retry` (riprovare immediatamente il passaggio), o `mark_done` (trattare come riuscito senza rieseguire) |

**Restituisce** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Confronto v1 e v2

| Funzionalità | v1 | v2 |
|---|---|---|
| Piani multi-fase | No | Sì |
| Riferimenti all'output del passaggio (`__ref:`) | No | Sì |
| Scoperta dei plugin | Manuale | Automatica |
| API di tracciamento progressi | No | Sì |
| Recupero dagli errori | Fallimento e stop | Fallback + continua |
| Esecuzione passaggi paralleli | No | Sì (opzionale per fase) |
| Comandi plan WP-CLI | No | Sì |
| Integrazione benchmark | No | Sì (`q-restaurant-website`) |

---

## Comandi Plan WP-CLI

### `wp gratis-ai-agent plan create`

Genera un piano sito da una descrizione di obiettivo.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Esegue un piano precedentemente generato.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Mostra i progressi attuali per un piano in esecuzione o completato.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Elenca tutti i piani sito (in attesa, in corso e completati).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Resetta un piano fallito a `pending` in modo che possa essere rieseguito dall'inizio.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
