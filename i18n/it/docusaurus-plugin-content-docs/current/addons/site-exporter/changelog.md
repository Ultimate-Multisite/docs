---
title: Registro delle modifiche di Site Exporter
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Changelog di Site Exporter

Versione: 1.0.6 - Rilasciata il 2026-05-11
* Nuovo: le esportazioni dei siti ora includono un index.php autoavviante, così lo ZIP può essere installato su un host pulito senza un’installazione separata del plugin
* Nuovo: l’esportazione della rete consente agli amministratori di esportare tutti i sottositi in un unico archivio dalla pagina di amministrazione Site Export

Versione: 1.0.5 - Rilasciata il 2026-05-05
* Correzione: aggiunto __callStatic allo stub polyfill WP_CLI per gestire metodi non mockati come get_config, evitando errori di bootstrap dei test

Versione: 1.0.4 - Rilasciata il 2025-11-25

* Correzione della compatibilità con Ultimate Multisite 2.4.

Versione: 1.0.2 - Rilasciata il 2025-09-28

* Rinominato il prefisso in ultimate-multisite; aggiornato il dominio di testo; incremento di versione.

### Versione 1.0.1 - Rilasciata il 2023-08-09

* Migliorato: ora assicura che venga ottenuto il percorso file corretto del file dell’importatore.
* Corretto: disabilitata la cache oggetti per prevenire errori durante l’importazione.
* Corretto: risolto il problema del link di download del plugin importatore non funzionante.

### Versione 1.0.0 - Rilasciata il 2022-12-23

* Corretto: popup del modulo di esportazione non caricato;
* Corretto: file Javascript non caricati nella pagina di esportazione;
* Interno: nuovo processo di build;

### Versione 1.0.0-beta.4 - Rilasciata il 2022-01-13

* Interno: aggiunti generatore di hook e filtri;
* Interno: aggiunti stub WP Ultimo per migliorare la qualità della vita degli sviluppatori;
