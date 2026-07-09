---
title: Riferimento WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Riferimento WP-CLI {#wp-cli-reference}

Gratis AI Agent include una famiglia di comandi `wp gratis-ai-agent` per eseguire benchmark sull'agente, gestire le sue capacità (abilities) e interrogare lo stato dell'agente direttamente dalla riga di comando. Tutti i comandi richiedono WP-CLI 2.0 o versioni successive.

## Installazione {#installation}

I comandi WP-CLI vengono registrati automaticamente quando il plugin è attivo. Puoi verificarlo con:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Esegue la suite di benchmark delle capacità dell'Agente: un insieme di prompt complessi e multi-step che mettono alla prova l'intera gamma di capacità. Usalo per valutare le prestazioni del modello, confrontare i fornitori di AI o convalidare i pacchetti di capacità prima di implementare in produzione.

### Sintassi {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opzioni {#options}

| Opzione | Descrizione |
|---|---|
| `--question=<id>` | Esegui una singola domanda di benchmark tramite ID anziché l'intera suite |
| `--provider=<provider>` | Sovrascrivi il provider AI configurato per questa esecuzione (es. `anthropic`, `openai`) |
| `--model=<model>` | Sovrascrivi il modello configurato per questa esecuzione (es. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Formato di output: `table` (predefinito), `json`, `csv` |
| `--save` | Salva i risultati del benchmark nel database per un confronto storico |

### Esempi {#examples}

Esegui l'intera suite di benchmark con il provider e il modello attuali:

```bash
wp gratis-ai-agent benchmark
```

Esegui una singola domanda (`q-restaurant-website`) e l'output in formato JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Esegui contro un modello specifico e salva i risultati:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

Il benchmark restituisce una riga per ogni domanda con le seguenti colonne:

| Colonna | Descrizione |
|---|---|
| `ID` | Identificatore della domanda |
| `Description` | Breve riepilogo dello scenario di benchmark |
| `Score` | Punteggio di superamento/fallimento o numerico (0–100) |
| `Abilities Used` | Lista separata da virgole delle capacità richiamate |
| `Tokens` | Token totali consumati |
| `Duration` | Tempo trascorso (wall-clock time) in secondi |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Domande di Benchmark {#benchmark-questions}

La suite predefinita include:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Creare un CPT Portfolio con una tassonomia Categoria Progetto e registrare un pattern di blocco |
| `q-restaurant-website` | Costruire un sito web completo per un ristorante con un CPT menu, un modulo di prenotazione e una navigazione |
| `q-dark-mode-theme` | Applicare un preset di design dark-mode e iniettare colori del brand |
| `q-nav-builder` | Creare un menu di navigazione principale di quattro elementi con un dropdown annidato |
| `q-options-roundtrip` | Leggere, modificare e ripristinare un set di opzioni di WordPress |
| `q-ability-install` | Scoprire e installare il pacchetto di capacità più appropriato per un caso d'uso descritto |

Domande aggiuntive possono essere registrate tramite il filtro `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Gestisce le capacità installate e i pacchetti di capacità.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Elenca tutte le capacità registrate, la loro fonte (core o pack) e il loro stato attuale.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opzioni**

| Opzione | Descrizione |
|---|---|
| `--format=<format>` | Formato di output: `table` (predefinito), `json`, `csv` |

**Esempio di output**

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

Scarica e attiva un pacchetto di capacità dal registro.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argomenti**

| Argomento | Descrizione |
|---|---|
| `<slug>` | Slug del plugin del pacchetto di capacità, es. `gratis-ai-agent-woocommerce` |

**Esempio**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Disabilita una capacità specifica senza rimuovere il pacchetto. Utile per limitare l'ambito dell'agente su un dato sito.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Esempio**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Riabilita una capacità precedentemente disabilitata.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Visualizza la configurazione corrente dell'agente e lo stato di connettività.

```bash
wp gratis-ai-agent status
```

**Esempio di output**

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

Visualizza le attività recenti dell'agente dal log di debug.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opzioni**

| Opzione | Descrizione |
|---|---|
| `--last=<n>` | Mostra gli ultimi N log. Predefinito `50` |
| `--level=<level>` | Filtra per livello: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtra per nome della capacità |

**Esempio**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Resetta lo stato dell'agente: cancella i CSS iniettati, rimuove i CPT e le tassonomie registrate dall'agente, resetta gli stili globali ed svuota la cache delle opzioni dell'agente. Non rimuove il plugin né le sue impostazioni.

```bash
wp gratis-ai-agent reset [--yes]
```

Aggiungi `--yes` per saltare il prompt di conferma.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Codici di Uscita {#exit-codes}

Tutti i comandi terminano con `0` in caso di successo. Codici di uscita non zero:

| Codice | Significato |
|---|---|
| `1` | Errore generale (vedi messaggio di errore) |
| `2` | Fallimento di connettività del provider |
| `3` | Capacità non trovata |
| `4` | Domanda di benchmark non trovata |
