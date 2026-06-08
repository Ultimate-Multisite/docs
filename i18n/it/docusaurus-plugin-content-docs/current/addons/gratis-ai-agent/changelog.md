---
title: Registro delle modifiche
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Registro delle modifiche

## 1.9.0 — Rilasciato il 2026-04-28

### Nuovo

- **Abilità `create_contact_form`** — crea un modulo di contatto utilizzando il plugin di moduli attivo (Contact Form 7, WPForms, Fluent Forms o Gravity Forms) e restituisce uno shortcode pronto per essere inserito in qualsiasi post o pagina.
- **Abilità `set_featured_image`** — assegna un'immagine in evidenza a un post o a una pagina utilizzando un ID di allegato esistente della Media Library o un URL remoto; importa automaticamente l'immagine quando viene fornito un URL.
- **Abilità `batch_create_posts`** — crea più post con una singola chiamata di abilità. Supporta gli stessi parametri di `create_post`, segnala il successo/fallimento per ogni post e dispone di una modalità opzionale `stop_on_error`.
- **Parametro `page_template`** — aggiunto a `create_post` e `update_post`. Assegna un file di template di pagina PHP (es. `page-full-width.php`) al momento della creazione o dell'aggiornamento. Passare una stringa vuota a `update_post` per tornare al default del tema.
- **Abilità di screenshot lato client** — `capture_screenshot`, `compare_screenshots` e `review_page_design`. Catturano screenshot completi o della viewport di pagine live tramite un browser headless lato server, confrontano due screenshot e forniscono una revisione del design generata dall'AI che copre layout, tipografia, colore e accessibilità.
- **Cinque agenti integrati** — Content Writer, Site Builder, Design Studio, Plugin Manager e Support Assistant. Ogni agente ha un set di strumenti dedicato, un prompt di sistema personalizzato e suggerimenti di avvio. Commutabili tramite il nuovo **Agent Picker** nell'intestazione della chat. Vedi [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — nuova scheda **Impostazioni → Feature Flags** con interruttori di controllo degli accessi (limitato agli amministratori, limitato agli amministratori di rete, accesso per abbonati, disabilitato per non membri) e opzioni di branding (nascondi l'attribuzione del footer, nome agente personalizzato, nascondi l'agent picker, usa l'icona del sito come avatar della chat). Vedi [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Ripristina ultima sessione** — il pannello di chat ricarica automaticamente la conversazione più recente all'apertura della pagina e all'apertura del widget, in modo che il contesto non venga mai perso durante la navigazione tra le pagine.
- **Link di azione plugin** — collegamenti rapidi alle Impostazioni e all'Abilities Registry ora appaiono sulla schermata **Plugin → Plugin installati** di WordPress, sotto la descrizione del plugin.

### Migliorato

- **Riprova sorgente immagine** — l'agente ora riprova tutte le sorgenti immagini gratuite configurate prima di ricorrere a un'immagine generata dall'AI in caso di fallimento del download.
- **Pannello informazioni modello** — sempre visibile nell'intestazione della chat; non è più nascosto dopo il primo messaggio.
- **Comportamento di auto-scrolling** — l'auto-scroll si interrompe quando l'utente scorre verso l'alto per leggere; appare un pulsante fluttuante **Scroll to bottom** che scompare automaticamente quando l'utente raggiunge l'ultimo messaggio.
- **UI Agent Picker** — ridisegnato come un overlay a tabella-modulo con icone per ogni agente, rendendo più facile identificare e cambiare agente a colpo d'occhio.
- **Chunk JS caricati in modo pigro (Lazy-loaded)** — il bundle JavaScript iniziale del widget di chat è ora diviso in chunk caricati in modo pigro, riducendo le dimensioni del bundle iniziale del 75-90%.
- **Ridisegno del widget di chat** — l'icona AI unificata sostituisce il precedente avatar personalizzato; è coerente con il sistema di agenti integrati.
- **Linkizzazione URL** — gli URL che appaiono nei messaggi di sistema e nelle bolle di messaggio di errore vengono ora visualizzati come link cliccabili.

### Corretto

- **Scopribilità delle abilità** — correzioni nelle descrizioni, nei riferimenti ai prompt di sistema e nell'allineamento degli spazi nomi in modo che tutte le abilità appaiano nell'elenco degli strumenti dell'agente in modo affidabile.
- **Cache dei provider** — i provider sono ora memorizzati a livello di sito tramite un contatore di versione, prevenendo problemi di provider obsoleti su reti multisite.
- **`ability_invalid_output`** — risolto in 12 gestori di abilità; tutti restituiscono risposte JSON correttamente strutturate.
- **Pipeline `pending_client_tool_calls`** — cablata end-to-end in modo che le chiamate di strumenti lato client vengano completate correttamente e restituiscano i risultati al modello.
- **Cassetti della cronologia** — i cambiamenti non reversibili sono esclusi dall'elenco di ripristino; il link **View full history** funziona ora correttamente.
- **Sistema di modifiche/ripristino** — cinque bug separati corretti e unificati sotto la nuova interfaccia di amministrazione.
- **Toast Salva Impostazioni** — la notifica snackbar appare ora in modo affidabile dopo aver cliccato su **Save Settings**.
- **Menu contestuale Cestino** — aggiunta l'opzione **Delete Permanently** in modo che gli elementi possano essere eliminati definitivamente senza lasciare la vista del cestino.
- **Modifica e reinvia** — cliccare sull'icona di modifica ora entra in modalità modifica solo per il messaggio cliccato, non per tutti i messaggi del thread.
- **Altezza del layout chat** — il pannello di chat adatta la sua altezza quando appaiono contenuti iniettati dal plugin (avvisi di amministrazione, banner) sopra la pagina, impedendo che l'area di input venga spinta fuori dallo schermo.

---

## 1.4.0 — Rilasciato il 2026-04-09

### Nuovo

- **Comando benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — esegue la suite di benchmark Agent Capabilities v1 dalla riga di comando per pipeline CI e flussi di lavoro di valutazione del modello. Supporta esecuzioni per domanda, override di provider/modello e output JSON/CSV.
- **Suite di benchmark Agent Capabilities v1** — un set strutturato di prompt complessi e multi-step che esercitano l'intera superficie delle abilità, con punteggio e report su token/durata.
- **Abilità per Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Le registrazioni persistono tra i riavvii tramite la tabella delle opzioni.
- **Abilità per Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Supporta tassonomie gerarchiche e piatte con slug di rewrite opzionali.
- **Abilità per Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Include cinque preset curati: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Abilità per Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Legge e scrive valori theme.json tramite l'API Global Styles di WordPress.
- **Abilità di gestione menu di navigazione** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Supporta menu nidificati e assegnazione di posizione del tema.
- **Abilità di gestione opzioni** — `get_option`, `set_option`, `delete_option`, `list_options`. Include un blocco lista nera di sicurezza integrato che protegge le opzioni critiche di WordPress da modifiche.
- **Abilità di registro installabili** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Scopri e attiva pacchetti di abilità distribuiti come plugin di WordPress.
- **Orchestrazione Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Piani di costruzione del sito multi-fase con scoperta di plugin, riferimenti all'output dei passaggi, tracciamento dei progressi e recupero automatico dagli errori.
- **Domanda di benchmark per sito web ristorante** (`q-restaurant-website`) — test end-to-end che copre registrazione CPT, design system, navigazione e scoperta di plugin.
- **Plugin connettore provider AI** aggiunti ai blueprint di WordPress Playground per una configurazione di sviluppo locale più rapida.

### Migliorato

- README aggiornato con la documentazione e le istruzioni di configurazione per i connettori provider AI.

### Corretto

- Risolti 25 fallimenti dei test PHPUnit sul branch `main`.
- Corretto il formato URL di rilascio GitHub in `blueprint.json`.
- Rinominazione degli ID delle attività per evitare collisioni con vecchi ID.

---

## 1.3.x

_Le note di rilascio precedenti sono mantenute nel repository del plugin._
