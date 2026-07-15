---
title: Workflow di migrazione sovrana
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow di Migrazione Sovrana

Ultimate Multisite: Multi-Tenancy 1.2.0 aggiunge gate di verifica della migrazione per spostare un sottodominio standard in infrastruttura di tenant sovrano.

## Prima di iniziare {#before-you-start}

Verifica che tu abbia:

- Un backup attuale del sito sorgente.
- L'addon Multi-Tenancy attivo.
- Il database, il filesystem root e il dominio del tenant di destinazione pronti.
- Una binding dell'host del database che corrisponda all'ambiente di destinazione.
- Accesso per eseguire comandi WP-CLI per la rete.

## Workflow consigliato {#recommended-workflow}

1. Prepara il database e il filesystem del tenant di destinazione.
2. Registra o aggiorna le impostazioni di isolamento del tenant.
3. Esegui la migrazione del tenant.
4. Provisiona o verifica gli utenti del tenant.
5. Svuota (drain) i job di migrazione asincroni.
6. Esegui la verifica della migrazione sovrana.
7. Visita il tenant con SSO.
8. Cambia DNS o routing solo dopo che la verifica è superata.

## Gate di verifica {#verification-gates}

Il workflow di verifica controlla la migrazione da diversi aspetti:

- Lo schema del tenant esiste e può essere scritto dal database del tenant.
- L'host del database configurato ha permessi validi.
- Gli utenti del tenant sono presenti e corrispondono al conteggio degli utenti installati sovrani atteso.
- La coda di push asincroni può essere svuotata con successo.
- I percorsi di dati legacy lato rete non sono più necessari per il tenant sovrano.

Tratta i fallimenti della verifica come ostacoli pre-lancio. Risolvi il problema segnalato relativo al database, utente, coda o routing, quindi esegui nuovamente la verifica prima di esporre il tenant ai clienti.

## Prima visita in produzione {#first-production-visit}

Dopo che la verifica è superata, utilizza **Visit (SSO)** dalla schermata di gestione del sito per la prima visita amministrativa. Questo conferma il routing del tenant, la gestione dei token SSO, l'origin pinning e la provisionamento degli utenti lato tenant in un unico passaggio controllato.
