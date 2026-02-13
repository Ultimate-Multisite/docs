---
title: Registro delle modifiche dei Ticket di supporto
sidebar_position: 99
_i18n_hash: 91c4823bf40d597f272f50b6de5d3c98
---
# Registro delle modifiche dei ticket di supporto

### 1.0.2 - 2025-12-11
* Aggiunto: Funzionalità completa di visualizzazione dei ticket per l'amministratore e il frontend
* Aggiunto: Gestore AJAX per l'invio delle risposte ai ticket
* Aggiunto: Supporto per la funzionalità di risposta ai ticket con corretta gestione del modulo
* Aggiunto: Visualizzazione corretta delle notifiche per le invii e risposte ai ticket nell'amministrazione
* Aggiunto: Associazione automatica del ticket con l'utente corrente per le invii da parte del cliente
* Aggiunto: Miglioramento della sicurezza per impedire ai clienti di sovrascrivere la proprietà del ticket
* Aggiunto: Funzioni helper mancanti (wu_format_date, wu_user_can_view_ticket, ecc.)
* Aggiunto: Download e gestione corretti degli allegati di file
* Aggiunto: Sistema di notifiche email per le risposte ai ticket e i cambi di stato
* Corretto: Il modulo di risposta ai ticket ora include l'ID necessario del ticket
* Corretto: Problemi di visibilità delle notifiche nelle visualizzazioni dei ticket in amministrazione
* Corretto: Errori di sintassi nelle funzioni dei ticket di supporto
* Migliorato: Struttura del database con classi di query e schema adeguate per risposte e allegati
* Migliorato: Migrazione verso proprietà reali invece di attributi per i modelli di ticket

### 1.0.1 - 2025-09-28
* Aggiornato: Prefisso rinominato in ultimate-multisite per coerenza
* Aggiornato: Standardizzazione del dominio di testo
* Corretto: Correzioni di bug minori e miglioramenti

### 1.0.0 - 2025-09-01
* Rilascio iniziale
* Sistema completo di gestione dei ticket
* Controllo di accesso a più livelli
* Sistema di conversazione a thread
* Supporto per allegati di file
* Sistema di notifiche email
* Interfacce amministratore e cliente
* Statistiche e reportistica
