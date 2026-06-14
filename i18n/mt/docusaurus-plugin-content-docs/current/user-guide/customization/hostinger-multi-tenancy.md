---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 aggiunge una capacità di multi-tenancy di Hostinger, permettendo ai domini ospitati di partecipare alla fornitura di tenant sovrani insieme all'integrazione esistente di mappatura del dominio di Hostinger.

Usa questa capacità quando i domini dei tenant e l'infrastruttura isolata del tenant sono gestiti tramite hPanel di Hostinger.

## Note di configurazione

1. Configura l'integrazione principale di Hostinger sotto **Ultimate Multisite > Settings > Host Integrations**.
2. Conferma che il token API di Hostinger possa gestire il dominio o il sottodominio target.
3. Abilita l'addon Multi-Tenancy.
4. Configura la strategia di isolamento del tenant prima di pubblicare il tenant.
5. Esegui il workflow di verifica della migrazione prima di inviare traffico di produzione al tenant.

La capacità Hostinger utilizza la connessione condivisa di Hostinger per le operazioni lato server. Il DNS deve comunque puntare all'account Hostinger corretto e i limiti dell'account hPanel sono ancora applicabili.

## Modifiche specifiche della capacità

- I tenant sovrani possono essere creati con operazioni sul dominio a conoscenza dell'host.
- Le stringhe di host del database sulla stessa macchina vengono normalizzate prima della verifica dell'assegnazione.
- I tenant gestiti da Hostinger dovrebbero utilizzare il valore dell'host del database mostrato in hPanel, a meno che l'ambiente WordPress non richieda una sovrascrittura locale.
- Le visite SSO si basano sul fatto che il dominio del tenant risolva al tenant ospitato da Hostinger.

## Risoluzione dei problemi per i tenant Hostinger

- Se l'installazione di un tenant fallisce, verifica che il dominio sia già collegato all'account Hostinger.
- Se la verifica del database fallisce, confronta il nome utente DB del tenant, il nome del database e il binding dell'host con hPanel.
- Se **Visit (SSO)** fallisce, conferma che DNS e SSL siano attivi per il dominio del tenant.
- Se lo smontaggio lascia risorse dell'host indietro, rimuovi eventuali database, utenti o cartelle rimanenti da hPanel dopo aver confermato i backup.
