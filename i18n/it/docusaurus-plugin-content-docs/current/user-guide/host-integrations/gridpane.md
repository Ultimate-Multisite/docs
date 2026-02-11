---
title: Integrazione GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrazione GridPane

## Panoramica
GridPane è un pannello di controllo di hosting WordPress specializzato, progettato per professionisti seri di WordPress. Questa integrazione consente la sincronizzazione automatica dei domini e la gestione dei certificati SSL tra Ultimate Multisite e GridPane.

## Funzionalità
- Sincronizzazione automatica dei domini
- Gestione dei certificati SSL
- Configurazione automatica della costante SUNRISE

## Requisiti
Le seguenti costanti devono essere definite nel tuo file `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Istruzioni di configurazione

### 1. Ottieni le tue credenziali API GridPane

1. Accedi al tuo cruscotto GridPane
2. Vai su "Settings" > "API"
3. Genera una chiave API se non ne hai già una
4. Copia la tua chiave API

### 2. Ottieni i tuoi ID Server e Sito

1. Nel tuo cruscotto GridPane, vai su "Servers"
2. Seleziona il server dove è ospitato il tuo WordPress multisite
3. Prendi nota dell'ID del server (visibile nell'URL o nella pagina dei dettagli del server)
4. Vai su "Sites" e seleziona il tuo sito WordPress
5. Prendi nota dell'ID del sito (visibile nell'URL o nella pagina dei dettagli del sito)

### 3. Aggiungi le costanti a wp-config.php

Aggiungi le seguenti costanti al tuo file `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Abilita l'integrazione

1. Nel tuo amministratore WordPress, vai su Ultimate Multisite > Settings
2. Naviga nella scheda "Domain Mapping"
3. Scorri verso il basso fino a "Host Integrations"
4. Abilita l'integrazione GridPane
5. Clicca su "Save Changes"

## Come funziona

Quando un dominio è mappato in Ultimate Multisite:

1. L'integrazione invia una richiesta all'API di GridPane per aggiungere il dominio al tuo sito
2. GridPane gestisce automaticamente la fornitura dei certificati SSL
3. Quando una mappatura di dominio viene rimossa, l'integrazione rimuoverà il dominio da GridPane

L'integrazione gestisce anche automaticamente la costante SUNRISE nel tuo file wp-config.php, necessaria per far funzionare correttamente la mappatura dei domini.

## Gestione della costante SUNRISE

Una caratteristica unica dell'integrazione GridPane è che ripristina automaticamente la costante SUNRISE in wp-config.php per prevenire conflitti con il proprio sistema di mappatura dei domini di GridPane. Ciò garantisce che entrambi i sistemi possano funzionare insieme senza problemi.

## Risoluzione dei problemi

### Problemi di connessione API
- Verifica che la tua chiave API sia corretta
- Verifica che i tuoi ID server e sito siano corretti
- Assicurati che il tuo account GridPane abbia le autorizzazioni necessarie

### Problemi di certificato SSL
- GridPane potrebbe impiegare del tempo per emettere certificati SSL
- Verifica che i tuoi domini puntino correttamente all'indirizzo IP del tuo server
- Controlla le impostazioni SSL di GridPane per il tuo sito

### Dominio non aggiunto
- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il dominio non sia già stato aggiunto a GridPane
- Assicurati che i record DNS del tuo dominio siano configurati correttamente
