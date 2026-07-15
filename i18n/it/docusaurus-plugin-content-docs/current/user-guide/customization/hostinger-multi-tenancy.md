---
title: Multi-tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy Hostinger

Ultimate Multisite: Multi-Tenancy 1.2.0 aggiunge una funzionalità di multi-tenancy di Hostinger in modo che i domini ospitati possano partecipare alla provisioning dei tenant sovrani, affiancando l'integrazione esistente per il mapping dei domini Hostinger.

Utilizza questa funzionalità quando i domini dei tenant e le infrastrutture isolate dei tenant sono gestiti tramite hPanel di Hostinger.

## Note di configurazione {#setup-notes}

1. Configura l'integrazione principale di Hostinger sotto **Ultimate Multisite > Settings > Host Integrations**.
2. Conferma che il token API di Hostinger possa gestire il dominio o il sottodominio target.
3. Abilita l'addon Multi-Tenancy.
4. Configura la strategia di isolamento del tenant prima di pubblicare il tenant.
5. Esegui il workflow di verifica della migrazione prima di inviare traffico di produzione al tenant.

La funzionalità Hostinger utilizza la connessione condivisa di Hostinger per le operazioni lato host. Il DNS deve comunque puntare all'account Hostinger corretto e i limiti dell'account hPanel sono ancora applicabili.

## Modifiche specifiche della funzionalità {#capability-specific-changes}

- I tenant sovrani possono essere creati con operazioni sul dominio a conoscenza del host.
- Le stringhe di host del database sulla stessa macchina vengono normalizzate prima della verifica dei permessi.
- I tenant gestiti da Hostinger dovrebbero utilizzare il valore dell'host del database mostrato in hPanel, a meno che l'ambiente WordPress non richieda una sovrascrittura locale.
- Le visite SSO si basano sul fatto che il dominio del tenant risolva al tenant ospitato da Hostinger.

## Risoluzione problemi per i tenant Hostinger {#troubleshooting-hostinger-tenants}

- Se l'installazione di un tenant fallisce, verifica che il dominio sia già associato all'account Hostinger.
- Se la verifica del database fallisce, confronta il nome utente del DB del tenant, il nome del database e il binding dell'host con hPanel.
- Se **Visit (SSO)** fallisce, conferma che DNS e SSL siano attivi per il dominio del tenant.
- Se lo smontaggio lascia risorse host inutilizzate, rimuovi eventuali database, utenti o cartelle rimanenti da hPanel dopo aver confermato i backup.
