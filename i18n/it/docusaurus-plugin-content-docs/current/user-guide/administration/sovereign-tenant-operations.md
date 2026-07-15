---
title: Operazioni del Tenant Sovrano
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operazioni Tenant Sovrani

Ultimate Multisite: Multi-Tenancy 1.2.0 aggiunge strumenti operativi per i tenant sovrani: sottodomini che funzionano con il proprio database, root del filesystem e contesto di routing separato, pur rimanendo visibili dall'amministratore di rete.

Usa questa pagina quando gestisci siti clienti isolati, passaggi tra siti remoti o migrazioni che spostano un sottodominio standard in infrastruttura sovrana.

## Cosa cambia per gli amministratori {#what-changes-for-administrators}

- **Autologin del tenant stateless** — Gli amministratori di rete possono visitare un tenant sovrano senza fare affidamento su uno stato di sessione condiviso a lungo termine. Il token SSO è limitato allo scopo, vincolato all'origine, protetto dalla riproduzione e ha una breve finestra di scadenza.
- **Routing consapevole del tenant sovrano** — Le reti isolate legacy e i tenant sovrani si risolvono attraverso lo stesso percorso router del sito, riducendo le differenze di bootstrap tra installazioni vecchie e nuove isolate.
- **Stato di migrazione verificato** — La verifica della migrazione controlla l'erogazione delle risorse utente, i permessi di scrittura del database, lo stato dello svuotamento della coda (queue drain) e l'assenza di tabelle legacy prima che un tenant venga considerato completo.
- **Smaltimento più sicuro** — Lo smaltimento dei tenant sovrani rimuove ora le credenziali in modo pulito in modo che i tenant eliminati non lascino dietro di sé accessi obsoleti al database.

## Visitare un tenant sovrano {#visiting-a-sovereign-tenant}

1. Apri **Network Admin > Ultimate Multisite > Sites**.
2. Seleziona il tenant sovrano.
3. Usa **Visit (SSO)** quando disponibile invece di copiare password o creare account amministrativi temporanei.

Il flusso di visita crea un token di login a breve termine per quel tenant e registra l'evento SSO nel log di audit del tenant. Se il pulsante fallisce, controlla che il dominio del tenant risolva all'installazione attesa e che il tenant possa raggiungere il endpoint SSO lato rete.

## Checklist operazioni sito remoto {#remote-site-operations-checklist}

Prima di modificare un tenant sovrano o remoto, conferma:

Il dominio del tenant punta all'host che possiede il filesystem del tenant.
L'host del database del tenant corrisponde al binding host configurato per quell'installazione.
I comandi di verifica della migrazione passano per il tenant.
Le code di migrazione asincrona vengono svuotate prima di effettuare modifiche DNS o di proprietà.
L'utente amministratore del tenant è stato provisionato durante la migrazione e può accedere tramite SSO.

## Eliminazione dei tenant sovrani {#deleting-sovereign-tenants}

Eliminare un tenant sovrano è un'operazione distruttiva. Conferma prima lo stato del backup e dell'esportazione, quindi elimina dalla schermata di gestione del sito. Il flusso di smantellamento 1.2.0 rimuove le credenziali del database del tenant come parte della pulizia, ma gli amministratori dovrebbero comunque verificare che gli utenti del database a livello di host e le cartelle siano sparite quando si utilizzano pannelli di hosting esterni.

:::warning
Non eliminare un tenant sovrano mentre la verifica della migrazione è ancora in corso o mentre sono in coda i job di push asincroni. Attendi il completamento della verifica in modo che lo smantellamento non rimuova le credenziali necessarie per i job in sospeso.
:::
