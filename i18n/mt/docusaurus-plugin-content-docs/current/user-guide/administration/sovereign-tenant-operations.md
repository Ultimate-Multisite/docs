---
title: Operazzjonijiet tal Tenant Sovran
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operazioni Tenant Sovrani

Ultimate Multisite 1.2.0 aggiunge strumenti operativi per i tenant sovrani: subsites che funzionano con il proprio database, root del filesystem e contesto di routing separati, pur rimanendo visibili dall'amministratore della rete.

Usa questa pagina quando gestisci siti clienti isolati, passaggi tra siti remoti o migrazioni che spostano un subsite standard in infrastruttura sovrana.

## Cosa cambia per gli amministratori

- **Autologin del tenant senza stato (Stateless tenant autologin)** — Gli amministratori della rete possono visitare un tenant sovrano senza dover dipendere da uno stato di sessione condiviso a lungo termine. Il token SSO è limitato allo scopo, vincolato all'origine, protetto dalla riproduzione e ha una scadenza breve.
- **Routing consapevole del sovrano (Sovereign-aware routing)** — Le reti isolate legacy e i tenant sovrani risolvono attraverso lo stesso percorso di router del sito, riducendo le differenze di bootstrap tra installazioni vecchie e nuove isolate.
- **Stato di migrazione verificato (Verified migration state)** — La verifica della migrazione controlla la fornitura degli utenti, i permessi di scrittura del database, lo stato dello svuotamento della coda (queue drain status) e l'assenza di tabelle legacy prima che un tenant venga considerato completo.
- **Smaltimento più sicuro (Safer teardown)** — Lo smaltimento dei tenant sovrani rimuove ora le credenziali in modo pulito in modo che i tenant eliminati non lascino dietro di sé accesso obsoleto al database.

## Visitare un tenant sovrano

1. Apri **Network Admin > Ultimate Multisite > Sites**.
2. Seleziona il tenant sovrano.
3. Usa **Visit (SSO)** quando disponibile invece di copiare le password o creare account admin temporanei.

Il flusso di visita crea un token di login a breve termine per quel tenant e registra l'evento SSO nel tenant audit trail. Se il pulsante fallisce, controlla che il dominio del tenant risolva all'installazione attesa e che il tenant possa raggiungere il endpoint SSO lato rete.

## Checklist operazioni sito remoto

Prima di cambiare un tenant sovrano o remoto, conferma:

- Id-domini tal-tenant jista puntat għall host li possiedi l-filesystem tal-tenant.
- L-host tal-database tal-tenant jista' jgħatti lil binding tal-host konfigurat għal installazzjoni.
- Il-komandi ta verifikazzjoni tal-migrazzjoni jmur b'mod aħjar għall-tenant.
- Il-queues ta migrazzjoni asinchrona (Async migration queues) jiġu sfumati qabel ma jitqassmu DNS jew titgħallma l-proprietà.
- L-utenti tal-admin tal-tenant kienu provvidi dwar il-migrazzjoni u jistgħu jidħol b'attra SSO.

## Il-eliminazzjoni tal-tenant soverenu (Sovereign tenants)

Il-eliminazzjoni tal-tenant soverenu hija destruktiva. Jiddeċiedi l-backup u status ta l-export ewemin fuq, u poi eliminali minn iscrint tal-gestjoni tal-sitemap. Il-flow ta teardown 1.2.0 jixalli b'mod li jgħatti d-dati tal-database tal-tenant bħala parte tal-pulitu, iżda l-administrator għandu jverifika wkoll li l-utenti tal-database u folder tal-host huma spariti meta jiddefli pannelli ta hosting esterni.

:::warning
Ma tiddelim tenant soverenu waqt li verifikazzjoni tal-migrazzjoni qed tmur jew waqt li jobs ta push asinchrona qed jkun f il-queue. Għandi b'mod li tixgħel l-verifikazzjoni biex teardown ma jiddelebx credentials li għad ikun bżojju għall-jobs li qed jkun f attesa.
:::
