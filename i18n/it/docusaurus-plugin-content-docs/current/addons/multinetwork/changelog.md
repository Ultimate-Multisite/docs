---
title: Registro delle modifiche Multi-Network
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Changelog Multi-Network {#multi-network-changelog}

### 1.3.0 {#130}
* Nuovo: anteprima dei template di rete — sfoglia e visualizza in anteprima i template di rete con un pannello live prima dell’acquisto.
* Nuovo: selettore di template di rete al checkout — i clienti possono selezionare un template di rete durante il flusso di checkout di registrazione.
* Nuovo: SSO con magic link tra reti — i clienti possono accedere alle sotto-reti senza interruzioni tramite autenticazione con magic link.
* Nuovo: clonazione dei media di rete — i media del sito vengono duplicati correttamente quando si clonano reti da un template.
* Correzione: la clonazione della rete ora funziona senza l’addon multi-tenancy; i privilegi di super admin vengono riassegnati dopo la clonazione.
* Correzione: la creazione della rete ora è compatibile con WooCommerce e tutti i gateway di pagamento.
* Correzione: il numero di porta ora è incluso nella generazione del dominio di fallback.
* Correzione: il CSS del selettore di template è stato spostato in un foglio di stile accodato per una corretta resa su tutti i temi.
* Correzione: protezione contro la chiave `network_id` non definita nell’ambito della query del sito.
* Correzione: il controllo dei permessi di rete prima del cambio di contesto previene errori nelle proprietà della tabella `wpdb`.

### 1.0.4 {#104}
* Correzione: creazione di una nuova rete.
* Correzione: rendering dei menu.

### 1.0.3 {#103}
* Aggiornato a Plugin Update Checker v5
* Aggiunti header moderni per plugin WordPress
* Migliorata la compatibilità con le versioni più recenti di WordPress

### 1.0.2 {#102}
* Correzioni di bug e miglioramenti delle prestazioni
* Isolamento della rete migliorato

### 1.0.0 {#100}
* Rilascio iniziale
* Funzionalità multinetwork di base
* Integrazione con Multisite Ultimate
