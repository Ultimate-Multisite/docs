---
title: Registro delle modifiche dei ticket di supporto
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Registro delle modifiche dei ticket di supporto

### 1.0.4 - 2026-05-05
* Migliorato: Rimossa la directory vendor/ dal tracciamento Git (già coperta da .gitignore), riducendo le dimensioni del repository
* Migliorato: Testato fino a WordPress 7.0

### 1.0.3 - 2026-05-01
* Correzione: Accetta valori nulli nei setter del modello di ticket annullabili
* Correzione: Archivia tutti i ticket in tabelle globali a livello di rete per un corretto supporto multisite
* Correzione: Nasconde i campi dello staff e corregge il reindirizzamento a pagina vuota nel modulo cliente per nuovo ticket
* Correzione: Sostituisce le chiamate add_meta() non definite con il corretto update_meta() per l'archiviazione dei metadati
* Correzione: Sostituisce il controllo della capability non registrata con il corretto wu_view_all_support_tickets
* Correzione: Aggiunge gli handler AJAX mancanti per stato del ticket, assegnazione e azioni di modifica rapida
* Correzione: Corregge il nome del metodo per il rilevamento della risposta dello staff nelle viste dei ticket
* Correzione: Consolida gli handler di risposta duplicati e allinea i nomi delle azioni nonce
* Correzione: Aggiunge la vista frontend mancante per lo shortcode [wu_submit_ticket]
* Correzione: Aggiunge la colonna user_id mancante e corregge il metodo Support_Ticket::get_user_id()
* Correzione: Rimuove le virgolette doppie extra nel tag option del filtro priorità
* Correzione: Aggiunge il pannello di gestione dei ticket nell'amministrazione di rete per i super admin
* Migliorato: Consolida il CSS di amministrazione in un singolo foglio di stile esterno
* Migliorato: Rimuove il sottomenu Settings dal menu di amministrazione del subsite
* Migliorato: Carica condizionalmente gli asset frontend solo sulle pagine dei ticket di supporto
* Migliorato: Salta l'autoloader del plugin quando l'autoloader root di Bedrock ha già caricato le dipendenze

### 1.0.2 - 2025-12-11
* Aggiunto: Funzionalità completa di visualizzazione dei ticket per admin e frontend
* Aggiunto: Handler AJAX per l'invio delle risposte ai ticket
* Aggiunto: Supporto per la funzionalità di risposta ai ticket con corretta gestione del modulo
* Aggiunto: Visualizzazione corretta degli avvisi per invii di ticket e risposte nell'admin
* Aggiunto: Associazione automatica del ticket con l'utente corrente per invii autonomi dei clienti
* Aggiunto: Miglioramento della sicurezza per impedire ai clienti di sovrascrivere la proprietà del ticket
* Aggiunto: Funzioni helper mancanti (wu_format_date, wu_user_can_view_ticket, ecc.)
* Aggiunto: Download e gestione corretti degli allegati
* Aggiunto: Sistema di notifiche email per risposte ai ticket e modifiche di stato
* Corretto: Il modulo di risposta al ticket ora include l'ID ticket necessario
* Corretto: Problemi di visibilità degli avvisi nelle viste dei ticket in admin
* Corretto: Errori di sintassi nelle funzioni dei ticket di supporto
* Migliorato: Struttura del database con classi di query e schema corrette per risposte e allegati
* Migliorato: Migrazione a proprietà reali invece di attributi per i modelli di ticket

### 1.0.1 - 2025-09-28
* Aggiornato: Rinominato il prefisso in ultimate-multisite per coerenza
* Aggiornato: Standardizzazione del dominio di testo
* Corretto: Correzioni di bug minori e miglioramenti

### 1.0.0 - 2025-09-01
* Rilascio iniziale
* Sistema completo di gestione dei ticket
* Controllo degli accessi multilivello
* Sistema di conversazioni in thread
* Supporto per allegati
* Sistema di notifiche email
* Interfacce admin e cliente
* Statistiche e reportistica
