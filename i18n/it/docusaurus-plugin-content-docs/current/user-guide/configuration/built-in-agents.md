---
title: Agenti integrati
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agent Integrati

Gratis AI Agent v1.9.0 include cinque agenti integrati, ognuno preconfigurato con un set di strumenti mirati, un prompt di sistema personalizzato e suggerimenti iniziali adatti ai compiti più comuni di quell'area. Passare da un agente all'altro cambia ciò che l'assistente può fare e come risponde, senza che tu debba configurare nulla.

## Cos'è un Agente?

Ogni agente è un profilo di configurazione nominato che combina:

- **Strumenti (Tools)** — le capacità che l'agente può utilizzare (ad esempio, un Content Writer ha accesso alle capacità di creazione di post; uno Design Studio ha accesso alle capacità CSS e theme.json)
- **Prompt di sistema (System prompt)** — istruzioni che definiscono il tono, le priorità e i vincoli dell'agente
- **Suggerimenti (Suggestions)** — prompt pre-scritti visualizzati nell'interfaccia chat per aiutarti a iniziare rapidamente

## Accesso al Selettore Agenti (Agent Picker)

1. Apri il pannello **Gratis AI Agent** nella barra laterale di amministrazione di WordPress.
2. Clicca sull'**icona agente** nell'angolo in alto a sinistra dell'intestazione della chat (l'icona cambia per riflettere l'agente attivo).
3. Si apre il **Selettore Agenti (Agent Picker)** come un overlay a tabella-modulo. Ogni agente è elencato con la sua icona, nome e una breve descrizione.
4. Clicca su una riga agente per attivarlo. L'intestazione della chat si aggiorna immediatamente.

Puoi anche cambiare agente nel mezzo di una conversazione: il prompt di sistema del nuovo agente avrà effetto dal messaggio successivo.

## I Cinque Agenti Integrati

### Content Writer (Scrittore di Contenuti)

**Focus:** Creazione e modifica di post, pagine e moduli di contatto.

**Strumenti disponibili:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Cosa fa bene:**
- Redigere e pubblicare articoli di blog da un breve riassunto o un'outline
- Creare lotti di pagine di atterraggio per un nuovo sito
- Costruire moduli di contatto e richieste
- Impostare immagini in evidenza sui post da un URL o tramite ricerca

**Suggerimenti iniziali:**
- *Scrivi un articolo di blog di 500 parole sui benefici di WordPress multisite.*
- *Crea e pubblica una pagina "Chi Siamo", una pagina "Servizi" e una pagina "Contatti".*
- *Aggiungi un modulo di richiesta di prenotazione alla pagina Contatti.*

---

### Site Builder (Costruttore di Siti)

**Focus:** Creazione di siti web dall'inizio alla fine, partendo da un singolo prompt.

**Strumenti disponibili:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Cosa fa bene:**
- Generare un piano di costruzione del sito multi-fase per un tipo di attività descritto
- Eseguire ogni fase in modo autonomo: struttura, contenuti, navigazione, design
- Recuperare da errori nel mezzo del piano senza richiedere interventi manuali
- Installare plugin raccomandati come parte della costruzione
- Creare moduli di contatto direttamente dall'interfaccia chat (Superdav AI Agent v1.10.0+)

**Suggerimenti iniziali:**
- *Costruisci un sito portfolio fotografico con un tipo di post galleria, una pagina di prenotazione e un modulo di contatto.*
- *Crea un sito web per un ristorante con un menu online, orari di apertura e un modulo di richiesta per prenotazioni.*
- *Imposta un sito di consulenza freelance con pagine di servizi, una sezione portfolio e un blog.*
- *Aggiungi un modulo di contatto alla pagina Contatti usando il costruttore di siti.*

---

### Design Studio (Studio di Design)

**Focus:** Personalizzazione visiva — colori, tipografia, CSS e pattern di blocco.

**Strumenti disponibili:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Cosa fa bene:**
- Applicare preset di tema nominati (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Regolare la tipografia e le palette di colori globali tramite theme.json
- Iniettare CSS personalizzato per override specifici del brand
- Scattare uno screenshot di una pagina e rivederlo per problemi di design

**Suggerimenti iniziali:**
- *Applica il preset warm-editorial e poi imposta il colore primario su #2d6a4f.*
- *Scatta uno screenshot della homepage e dimmi cosa miglioreresti.*
- *Crea un pattern di blocco hero riutilizzabile con un'immagine di sfondo a larghezza intera e un titolo centrato.*

---

### Plugin Manager (Gestore Plugin)

**Focus:** Scoprire, installare e gestire i plugin di WordPress.

**Strumenti disponibili:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Cosa fa bene:**
- Raccomandare il miglior plugin per un caso d'uso descritto
- Installare pacchetti di capacità dal registro
- Navigare nel catalogo di capacità disponibili per categoria

**Suggerimenti iniziali:**
- *Qual è il miglior plugin per un elenco di membri (membership directory)?*
- *Installa il pacchetto di capacità WooCommerce.*
- *Mostrami tutti i pacchetti di capacità e-commerce disponibili.*

---

### Support Assistant (Assistente di Supporto)

**Focus:** Rispondere a domande sui contenuti del sito, sulle impostazioni e sulla configurazione di WordPress.

**Strumenti disponibili:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Cosa fa bene:**
- Cercare le impostazioni e le opzioni attuali del sito
- Spiegare quali tipi di post, tassonomie e menu sono configurati sul sito
- Rispondere a domande come "cosa fa questa impostazione?" leggendo i valori live
- Funzionare come un livello diagnostico solo di lettura prima di apportare modifiche

**Suggerimenti iniziali:**
- *Quali plugin e impostazioni sono attualmente attivi su questo sito?*
- *Elenca tutti i tipi di post personalizzati registrati su questo sito.*
- *Quali menu di navigazione esistono e dove sono assegnati?*

---

## Personalizzare gli Agenti

Ogni agente integrato può essere esteso o sostituito tramite il filtro `gratis_ai_agent_agents`.

### Aggiungere un prompt di sistema personalizzato a un agente esistente

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrare un nuovo agente

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

Il nuovo agente appare nel Selettore Agenti immediatamente dopo l'esecuzione del filtro.

### Rimuovere un agente integrato

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
