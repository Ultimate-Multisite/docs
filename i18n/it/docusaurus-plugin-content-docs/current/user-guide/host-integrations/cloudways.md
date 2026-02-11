---
title: Integrazione Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Integrazione Cloudways

## Panoramica
Cloudways è una piattaforma di hosting cloud gestito che ti consente di distribuire siti WordPress su vari provider cloud come DigitalOcean, AWS, Google Cloud e altri. Questa integrazione consente la sincronizzazione automatica dei domini e la gestione dei certificati SSL tra Ultimate Multisite e Cloudways.

## Funzionalità
- Sincronizzazione automatica dei domini
- Gestione dei certificati SSL
- Supporto per domini aggiuntivi
- Validazione DNS per i certificati SSL

## Requisiti
Le seguenti costanti devono essere definite nel tuo file `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opzionalmente, puoi anche definire:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Istruzioni di configurazione

### 1. Ottieni le credenziali API di Cloudways

1. Accedi al tuo cruscotto Cloudways
2. Vai su "Account" > "API Keys"
3. Genera una chiave API se non ne hai già una
4. Copia la tua email e la chiave API

### 2. Ottieni gli ID del server e dell'applicazione

1. Nel tuo cruscotto Cloudways, vai su "Servers"
2. Seleziona il server dove è ospitato il tuo WordPress multisite
3. L'ID del server è visibile nell'URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Vai su "Applications" e seleziona la tua applicazione WordPress
5. L'App ID è visibile nell'URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Aggiungi le costanti a wp-config.php

Aggiungi le seguenti costanti al tuo file `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Se hai domini aggiuntivi che dovrebbero essere sempre inclusi:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Abilita l'integrazione

1. Nel tuo amministratore WordPress, vai su Ultimate Multisite > Settings
2. Naviga nella scheda "Domain Mapping"
3. Scorri verso il basso fino a "Host Integrations"
4. Abilita l'integrazione Cloudways
5. Fai clic su "Save Changes"

## Come funziona

### Sincronizzazione dei domini

Quando un dominio è mappato in Ultimate Multisite:

1. L'integrazione recupera tutti i domini attualmente mappati
2. Aggiunge il nuovo dominio all'elenco (insieme a una versione www se applicabile)
3. Invia l'elenco completo a Cloudways tramite l'API
4. Cloudways aggiorna gli alias di dominio per la tua applicazione

Nota: l'API Cloudways richiede l'invio dell'elenco completo dei domini ogni volta, non solo l'aggiunta o la rimozione di domini individuali.

### Gestione dei certificati SSL

Dopo che i domini sono stati sincronizzati:

1. L'integrazione verifica quali domini hanno record DNS validi puntanti al tuo server
2. Invio una richiesta a Cloudways per installare i certificati SSL Let's Encrypt per quei domini
3. Cloudways gestisce l'emissione e l'installazione del certificato SSL

## Domini aggiuntivi

La costante `WU_CLOUDWAYS_EXTRA_DOMAINS` ti consente di specificare domini aggiuntivi che dovrebbero essere sempre inclusi durante la sincronizzazione con Cloudways. Questo è utile per:

- Domini non gestiti da Ultimate Multisite
- Domini wildcard (ad es. `*.example.com`)
- Domini di sviluppo o staging

## Risoluzione dei problemi

### Problemi di connessione API

- Verifica che la tua email e la chiave API siano corrette
- Verifica che gli ID del server e dell'applicazione siano corretti
- Assicurati che il tuo account Cloudways abbia le autorizzazioni necessarie

### Problemi con i certificati SSL

- Cloudways richiede che i domini abbiano record DNS validi puntanti al tuo server prima di emettere certificati SSL
- L'integrazione valida i record DNS prima di richiedere i certificati SSL
- Se i certificati SSL non vengono emessi, verifica che i tuoi domini puntino correttamente all'indirizzo IP del tuo server

### Dominio non aggiunto

- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il dominio non sia già stato aggiunto a Cloudways
- Assicurati che il tuo piano Cloudways supporti il numero di domini che stai aggiungendo
