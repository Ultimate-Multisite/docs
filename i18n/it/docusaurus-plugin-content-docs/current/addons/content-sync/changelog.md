---
title: Registro delle modifiche di Content Sync
sidebar_position: 99
_i18n_hash: 3b44da06636d21415abe77d8cef605f3
---
# Registro delle modifiche di Content Sync

### Versione 1.1.0 - Rilasciata il 2025-12-31
* Nuovo: Supporto per la sincronizzazione di tutti i tipi di post (post, pagine, tipi di post personalizzati)
* Nuovo: Filtro per tipo di post nella fase di selezione del contenuto
* Nuovo: Fase di selezione del sito sorgente - sincronizza da qualsiasi sito, non solo dal sito principale
* Nuovo: Pre-selezione del sito figlio per i siti template
* Nuovo: Estrazione dei media da post_content per tutti i tipi di post
* Nuovo: Sincronizzazione delle tassonomie (categorie, tag, tassonomie personalizzate)
* Modificato: Rinominato da "Elementor Template Sync" a "Content Sync"
* Modificato: La fase "Select Templates" è stata rinominata in "Select Data"
* Migliorato: Il codice specifico per Elementor ora viene eseguito solo per il tipo di post elementor_library

### Versione 1.0.0 - Rilasciata il 2025-12-19
* Rilascio iniziale
* Wizard multi-step per la selezione di template e siti
* Elaborazione batch con feedback di avanzamento in tempo reale
* Sincronizzazione completa dei media con rimappatura automatica degli ID
* Integrazione delle impostazioni con Ultimate Multisite
* Supporto all'esclusione dei siti tramite impostazioni di rete
* Pulizia della cache di Elementor dopo la sincronizzazione
* Preservazione della tassonomia dei template
