---
title: Registro delle modifiche dei piani a consumo
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Changelog dei piani a consumo

Versione 1.1.0 - Rilasciata il 2026-05-05
- Nuovo: fatturazione dei token AI per i sottositi multisito — monitora e fattura l'utilizzo dei token AI nei siti dei clienti con tariffe per token configurabili
- Nuovo: applicazione dei connettori ricostruita con rilevamento dinamico dei limiti e write-through, garantendo precisione in tempo reale su tutti i connettori
- Correzione: gli aggiornamenti delle tabelle del database sono ora correttamente allineati con le definizioni dello schema BerlinDB, prevenendo errori di aggiornamento nelle nuove installazioni
- Correzione: le callback di aggiornamento del database sono state convertite nel formato corretto, risolvendo errori di aggiornamento silenziosi
- Correzione: i valori frazionari sono ora accettati nel campo di input AI Usage Overage Markup
- Correzione: risolti errori fatali e problemi di doppia inizializzazione al caricamento del plugin
- Migliorato: aggiunto lo script npm check-env in modo che gli ambienti di sviluppo si autoconfigurino al primo avvio

### 1.0.3 {#103}
* Aggiornato a Plugin Update Checker v5
* Aggiunti header moderni per plugin WordPress
* Migliorata la compatibilità con le versioni più recenti di WordPress
* Migliorate le prestazioni del monitoraggio dell'utilizzo

### 1.0.2 {#102}
* Correzioni di bug e miglioramenti delle prestazioni
* Migliorata la reportistica sull'utilizzo

### 1.0.0 {#100}
* Rilascio iniziale
* Funzionalità principale di fatturazione a consumo
* Monitoraggio dell'utilizzo e calcolo delle eccedenze
* Generazione automatica delle fatture
