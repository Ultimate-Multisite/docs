---
title: Integrazione ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integration

## Panoramica
ServerPilot è un servizio cloud per l'hosting di WordPress e altri siti PHP su server di DigitalOcean, Amazon, Google o qualsiasi altro provider di server. Questa integrazione consente la sincronizzazione automatica dei domini e la gestione dei certificati SSL tra Ultimate Multisite e ServerPilot.

## Funzionalità
- Sincronizzazione automatica dei domini
- Gestione dei certificati SSL con Let's Encrypt
- Rinnovo automatico degli SSL

## Requisiti
Le seguenti costanti devono essere definite nel tuo file `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Istruzioni di configurazione

### 1. Ottieni le credenziali API di ServerPilot

1. Accedi alla tua dashboard di ServerPilot
2. Vai su "Account" > "API"
3. Crea una nuova chiave API se non ne hai già una
4. Copia il tuo Client ID e la tua API Key

### 2. Ottieni il tuo App ID

1. Nella tua dashboard di ServerPilot, vai su "Apps"
2. Seleziona l'app in cui è ospitato il tuo WordPress multisite
3. L'App ID è visibile nell'URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Aggiungi le costanti a wp-config.php

Aggiungi le seguenti costanti al tuo file `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Abilita l'integrazione

1. Nella tua amministrazione di WordPress, vai su Ultimate Multisite > Settings
2. Naviga nella scheda "Domain Mapping"
3. Scorri verso il basso fino a "Host Integrations"
4. Abilita l'integrazione ServerPilot
5. Clicca su "Save Changes"

## Come funziona

### Sincronizzazione dei domini

Quando un dominio è mappato in Ultimate Multisite:

1. L'integrazione recupera l'elenco corrente dei domini da ServerPilot
2. Aggiunge il nuovo dominio all'elenco (inclusa una versione www se applicabile)
3. Invia l'elenco aggiornato a ServerPilot tramite l'API
4. ServerPilot aggiorna l'elenco dei domini per la tua applicazione

### Gestione dei certificati SSL

Dopo che i domini sono stati sincronizzati:

1. L'integrazione abilita automaticamente AutoSSL per la tua applicazione
2. ServerPilot gestisce l'emissione e l'installazione del certificato SSL utilizzando Let's Encrypt
3. ServerPilot gestisce anche il rinnovo automatico dei certificati SSL

## Verifica del certificato SSL

L'integrazione è configurata per aumentare il numero di tentativi di verifica del certificato SSL per ServerPilot, poiché potrebbe richiedere del tempo per ServerPilot emettere e installare i certificati SSL. Per impostazione predefinita, tenterà fino a 5 volte, ma questo può essere regolato utilizzando i filtri.

## Risoluzione dei problemi

### Problemi di connessione API

- Verifica che il tuo Client ID e la tua API Key siano corretti
- Verifica che il tuo App ID sia corretto
- Assicurati che il tuo account ServerPilot abbia le autorizzazioni necessarie

### Problemi con i certificati SSL

- ServerPilot richiede che i domini abbiano record DNS validi puntanti al tuo server prima di emettere certificati SSL
- Se i certificati SSL non vengono emessi, verifica che i tuoi domini puntino correttamente all'indirizzo IP del tuo server
- Potrebbe richiedere del tempo per ServerPilot emettere e installare i certificati SSL (di solito 5-15 minuti)

### Dominio non aggiunto

- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il dominio non sia già stato aggiunto a ServerPilot
- Assicurati che il tuo piano ServerPilot supporti il numero di domini che stai aggiungendo

### Rimozione del dominio

- Attualmente, l'API di ServerPilot non fornisce un modo per rimuovere domini individuali
- Quando una mappatura di dominio viene rimossa in Ultimate Multisite, l'integrazione aggiornerà l'elenco dei domini in ServerPilot per escludere il dominio rimosso
