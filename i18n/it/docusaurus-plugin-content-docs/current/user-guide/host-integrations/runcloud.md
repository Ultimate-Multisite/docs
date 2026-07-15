---
title: Integrazione RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrazione RunCloud

## Panoramica {#overview}
RunCloud è una piattaforma di gestione server basata su cloud che ti consente di distribuire e gestire facilmente applicazioni web sui tuoi server cloud. Questa integrazione consente la sincronizzazione automatica dei domini e la gestione dei certificati SSL tra Ultimate Multisite e RunCloud.

## Funzionalità {#features}
- Sincronizzazione automatica dei domini
- Gestione dei certificati SSL
- Rimozione del dominio quando le mappature vengono eliminate

## Requisiti {#requirements}
Le seguenti costanti devono essere definite nel tuo file `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Istruzioni di configurazione {#setup-instructions}

### 1. Ottieni le tue credenziali API RunCloud {#1-get-your-runcloud-api-credentials}

1. Accedi al tuo cruscotto RunCloud
2. Vai su "User Profile" (clicca sulla tua foto del profilo nell'angolo in alto a destra)
3. Seleziona "API" dal menu
4. Clicca su "Generate API Key" se non ne hai già una
5. Copia la tua API Key e l'API Secret

### 2. Ottieni i tuoi ID Server e App {#2-get-your-server-and-app-ids}

1. Nel tuo cruscotto RunCloud, vai su "Servers"
2. Seleziona il server dove è ospitato il tuo WordPress multisite
3. L'ID del server è visibile nell'URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Vai su "Web Applications" e seleziona la tua applicazione WordPress
5. L'ID dell'app è visibile nell'URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Aggiungi le costanti a wp-config.php {#3-add-constants-to-wp-configphp}

Aggiungi le seguenti costanti al tuo file `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Abilita l'integrazione {#4-enable-the-integration}

1. Nel tuo amministratore WordPress, vai su Ultimate Multisite > Settings
2. Naviga nella scheda "Domain Mapping"
3. Scorri verso il basso fino a "Host Integrations"
4. Abilita l'integrazione RunCloud
5. Clicca su "Save Changes"

## Come funziona {#how-it-works}

Quando un dominio è mappato in Ultimate Multisite:

1. L'integrazione invia una richiesta all'API di RunCloud per aggiungere il dominio alla tua applicazione
2. Se il dominio viene aggiunto con successo, l'integrazione rielencherà anche i certificati SSL
3. Quando una mappatura di dominio viene rimossa, l'integrazione rimuoverà il dominio da RunCloud

Per le installazioni di sottodominio, l'integrazione gestirà automaticamente la creazione di sottodomini in RunCloud quando nuovi siti vengono aggiunti alla tua rete.

## Risoluzione dei problemi {#troubleshooting}

### Problemi di connessione API {#api-connection-issues}
- Verifica che le tue credenziali API siano corrette
- Verifica che i tuoi ID server e app siano corretti
- Assicurati che il tuo account RunCloud abbia le autorizzazioni necessarie

### Problemi di certificato SSL {#ssl-certificate-issues}
- RunCloud potrebbe impiegare del tempo per emettere i certificati SSL
- Verifica che i tuoi domini puntino correttamente all'indirizzo IP del tuo server
- Controlla le impostazioni SSL di RunCloud per la tua applicazione

### Dominio non aggiunto {#domain-not-added}
- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il dominio non sia già stato aggiunto a RunCloud
- Assicurati che il tuo piano RunCloud supporti più domini
