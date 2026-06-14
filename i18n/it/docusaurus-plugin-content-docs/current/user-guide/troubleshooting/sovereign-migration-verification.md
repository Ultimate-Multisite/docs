---
title: Verifica della migrazione sovrana
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifica Migrazione Sovrana

Ultimate Multisite: Multi-Tenancy 1.2.0 include comandi di verifica WP-CLI per le migrazioni dei tenant sovrani. Usali quando una migrazione del tenant, una visita SSO o un'installazione isolata non si comporta come previsto.

## Comandi da eseguire

Esegui la verifica dall'installazione WordPress sulla rete:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Usa l'ID del sito per il tenant che stai migrando. Il primo comando controlla che il tenant non dipenda più dai dati legacy lato rete. Il secondo comando verifica che i job di sovereign push possano elaborarsi e svuotarsi (drain).

## Errori comuni

### I permessi del database non corrispondono all'host

Se la verifica riporta errori sui permessi o sull'utente scrittore, controlla l'host del database configurato. `localhost`, `127.0.0.1` e il nome di un servizio container sono host MySQL dei permessi diversi. Aggiorna il binding dell'host del tenant o i permessi del database, quindi riesegui la verifica.

### Le installazioni Bedrock o locali non riescono a connettersi

Le installazioni Bedrock e quelle tramite socket locale potrebbero riportare il database come `localhost` mentre l'esecuzione si connette tramite un indirizzo normalizzato. La versione 1.2.0 normalizza le stringhe host sulla stessa macchina, ma gli override host personalizzati possono ancora entrare in conflitto con i permessi del database.

### La coda di push asincrona non viene svuotata (drain)

Se `verify-sovereign-push` non termina, controlla Action Scheduler o l'esecutore asincrono configurato. Pulisci i job falliti solo dopo aver confermato che siano sicuri da riprovare o scartare.

### Il numero di utenti del tenant è errato

La migrazione dovrebbe provisionare gli utenti per il tenant sovrano. Se manca l'utente installato atteso, riesegui il passaggio di provisioning degli utenti prima di riprovare l'SSO.

### La visita SSO viene rifiutata

L'autolink di un inquilino senza stato (stateless tenant autologin) richiede che il dominio dell'inquilino, il origin pin, lo scopo del token, il nonce e la scadenza siano tutti coerenti. Assicurati che l'URL dell'inquilino sia corretto e che il tentativo di accesso avvenga poco dopo aver generato la visita SSO.

## Quando riprovare

Ripeti la verifica dopo ogni modifica infrastrutturale. Non cambiare il traffico di produzione, non eliminare i dati sorgente o rimuovere le credenziali di migrazione finché tutte le verifiche siano state superate con successo.
