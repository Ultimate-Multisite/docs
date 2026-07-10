---
title: Agenti integrati
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agent integrati {#built-in-agents}

Gratis AI Agent v1.9.0 include cinque agent integrati, ciascuno preconfigurato con un set mirato di strumenti, un prompt di sistema personalizzato e suggerimenti iniziali adatti alle attività comuni in quell’area. Passare da un agent all’altro cambia ciò che l’assistente può fare e come risponde — senza alcuna configurazione da parte tua. Superdav AI Agent v1.18.0 può aggiungere a questi flussi di lavoro strumenti consapevoli della pianificazione, record di promemoria, gate di approvazione e notifiche SMS quando le relative integrazioni sono configurate.

## Che cos’è un Agent? {#what-is-an-agent}

Ogni agent è un profilo di configurazione con nome che combina:

- **Strumenti** — le capacità che l’agent è autorizzato a invocare (ad es. un Content Writer ha accesso alle capacità di creazione di articoli; un Design Studio ha accesso alle capacità CSS e theme.json)
- **Prompt di sistema** — istruzioni che definiscono tono, priorità e vincoli dell’agent
- **Suggerimenti** — prompt pre-scritti mostrati nell’interfaccia chat per aiutarti a iniziare rapidamente

## Accesso all’Agent Picker {#accessing-the-agent-picker}

1. Apri il pannello **Gratis AI Agent** nella barra laterale di amministrazione di WordPress.
2. Fai clic sull’**icona dell’agent** in alto a sinistra nell’intestazione della chat (l’icona cambia per riflettere l’agent attivo).
3. L’**Agent Picker** si apre come overlay con tabella-modulo. Ogni agent è elencato con la sua icona, il nome e una descrizione di una riga.
4. Fai clic su una riga dell’agent per attivarlo. L’intestazione della chat si aggiorna immediatamente.

Puoi anche cambiare agent a metà conversazione — il prompt di sistema del nuovo agent ha effetto dal messaggio successivo.

## I cinque agent integrati {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Focus:** Creazione e modifica di articoli, pagine e moduli di contatto.

**Strumenti disponibili:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Con le integrazioni di Superdav AI Agent v1.18.0 abilitate, il contesto del calendario configurato, i gate di approvazione, i promemoria e gli strumenti di notifica SMS possono essere disponibili anche per i flussi di lavoro approvati.

**Cosa fa bene:**
- Bozze e pubblicazione di post del blog da un brief o una scaletta
- Creazione in batch di landing page per un nuovo sito
- Creazione di moduli di contatto e di richiesta informazioni
- Impostazione di immagini in evidenza sugli articoli da un URL o da una ricerca
- Bozze di messaggi di follow-up per eventi dal contesto configurato di Google Calendar, quindi pausa per l’approvazione prima dell’invio delle notifiche

**Suggerimenti iniziali:**
- *Scrivi un post del blog di 500 parole sui vantaggi del multisite WordPress.*
- *Crea una pagina Chi siamo, Servizi e Contatti e pubblicale.*
- *Aggiungi un modulo di richiesta prenotazione alla pagina Contatti.*
- *Prepara una bozza di promemoria per i partecipanti all’evento configurato in calendario di domani e attendi l’approvazione prima di inviarlo.*

---

### Site Builder {#site-builder}

**Focus:** Creazione di siti web end-to-end da un singolo prompt.

**Strumenti disponibili:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Con Superdav AI Agent v1.18.0, gli strumenti configurati per servizi gestiti, approvazione, promemoria, calendario e SMS possono essere disponibili dove gli amministratori li abilitano.

**Cosa fa bene:**
- Generazione di un piano di creazione del sito in più fasi per un tipo di attività descritto
- Esecuzione autonoma di ogni fase — struttura, contenuti, navigazione, design
- Recupero dagli errori a metà piano senza richiedere intervento manuale
- Installazione di plugin consigliati come parte della creazione
- Creazione di moduli di contatto direttamente dall’interfaccia chat (Superdav AI Agent v1.10.0+)
- Coordinamento dei promemoria di lancio o dei follow-up dei partecipanti senza notifiche duplicate quando i gate di approvazione e i record di promemoria sono abilitati

**Suggerimenti iniziali:**
- *Crea un sito portfolio fotografico con un tipo di articolo galleria, una pagina di prenotazione e un modulo di contatto.*
- *Crea un sito web per ristorante con un menu online, orari di apertura e un modulo di richiesta prenotazione tavolo.*
- *Configura un sito per consulenza freelance con pagine di servizi, una sezione portfolio e un blog.*
- *Aggiungi un modulo di contatto alla pagina Contatti usando il site builder.*
- *Dopo l’approvazione della checklist di lancio del sito, invia un promemoria SMS al contatto stakeholder configurato.*

---

### Design Studio {#design-studio}

**Focus:** Personalizzazione visiva — colori, tipografia, CSS e pattern di blocchi.

**Strumenti disponibili:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Cosa fa bene:**
- Applicazione di preset di tema con nome (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Rifinitura della tipografia globale e delle palette di colori tramite theme.json
- Inserimento di CSS personalizzato per override specifici del brand
- Acquisizione di uno screenshot di una pagina e revisione per problemi di design

**Suggerimenti iniziali:**
- *Applica il preset warm-editorial e poi imposta il colore primario su #2d6a4f.*
- *Fai uno screenshot della homepage e dimmi cosa miglioreresti.*
- *Crea un pattern di blocco hero riutilizzabile con un’immagine di sfondo a tutta larghezza e un titolo centrato.*

### Plugin Manager {#plugin-manager}

**Focus:** Scoperta, installazione e gestione dei plugin WordPress.

**Strumenti disponibili:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Cosa fa bene:**
- Consigliare il miglior plugin per un caso d’uso descritto
- Installare pacchetti di capacità dal registry
- Sfogliare il catalogo delle capacità disponibili per categoria

**Suggerimenti iniziali:**
- *Qual è il miglior plugin per una directory membership?*
- *Installa il pacchetto di capacità WooCommerce.*
- *Mostrami tutti i pacchetti di capacità ecommerce disponibili.*

---

### Support Assistant {#support-assistant}

**Focus:** Rispondere a domande sui contenuti del sito, sulle impostazioni e sulla configurazione WordPress.

**Strumenti disponibili:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Cosa fa bene:**
- Cercare impostazioni e opzioni attuali del sito
- Spiegare quali tipi di post, tassonomie e menu sono configurati sul sito
- Rispondere a domande come "a cosa serve questa impostazione?" leggendo i valori live
- Fungere da livello diagnostico in sola lettura prima di apportare modifiche

**Suggerimenti iniziali:**
- *Quali plugin e impostazioni sono attualmente attivi su questo sito?*
- *Elenca tutti i tipi di post personalizzati registrati su questo sito.*
- *Quali menu di navigazione esistono e dove sono assegnati?*

---

## Integrazioni di automazione Superdav {#superdav-automation-integrations}

Quando le integrazioni di Superdav AI Agent v1.18.0 sono configurate, gli agenti integrati possono partecipare a workflow di automazione più sicuri e consapevoli della pianificazione:

- **Gli strumenti di lettura di Google Calendar** consentono agli agenti di ispezionare calendari ed eventi configurati prima di preparare lavoro di follow-up.
- **La mappatura di contatti e partecipanti** aiuta ad associare i partecipanti agli eventi agli utenti WordPress o a contatti noti.
- **I gate di approvazione umana** mettono in pausa le azioni sensibili finché un utente autorizzato non le esamina e le conferma.
- **I record di promemoria** impediscono notifiche duplicate quando i job pianificati vengono ritentati o ripetuti.
- **Le notifiche SMS TextBee** inviano messaggi di testo configurati solo quando le credenziali SMS e le autorizzazioni del workflow sono abilitate.

Workflow consigliato: chiedi all'agente di preparare il messaggio o l'azione, esamina il prompt di approvazione, quindi consenti la ripresa dell'azione approvata. Per i promemoria ricorrenti, mantieni abilitata la deduplicazione dei promemoria in modo che lo stesso evento o contatto non venga notificato ripetutamente.

---

## Personalizzazione degli agenti {#customising-agents}

Ogni agente integrato può essere esteso o sostituito tramite il filtro `gratis_ai_agent_agents`.

### Aggiunta di un prompt di sistema personalizzato a un agente esistente {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrazione di un nuovo agente {#registering-a-new-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Il nuovo agente appare nel selettore degli agenti immediatamente dopo l'esecuzione del filtro.

### Rimozione di un agente integrato {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
