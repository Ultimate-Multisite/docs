---
title: Integrazione WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrazione WP Engine

## Panoramica
WP Engine è una piattaforma di hosting WordPress gestito premium che offre prestazioni ottimizzate, sicurezza e scalabilità per i siti WordPress. Questa integrazione consente la sincronizzazione automatica dei domini tra Ultimate Multisite e WP Engine.

## Funzionalità
- Sincronizzazione automatica dei domini
- Supporto dei sottodomini per installazioni multisito
- Integrazione senza soluzione di continuità con i sistemi esistenti di WP Engine

## Requisiti
L'integrazione rileva automaticamente se stai ospitando su WP Engine e utilizza l'API WP Engine integrata. Non è necessaria alcuna configurazione aggiuntiva se il plugin WP Engine è attivo e correttamente configurato.

Tuttavia, se hai bisogno di configurare manualmente l'integrazione, puoi definire una di queste costanti nel tuo file `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## Istruzioni di configurazione

### 1. Verifica il plugin WP Engine
Se stai ospitando su WP Engine, il plugin WP Engine dovrebbe già essere installato e attivato. Verifica che:

1. Il plugin WP Engine è attivo
2. Il file `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` esiste

### 2. Abilita l'integrazione
1. Nel tuo amministratore WordPress, vai su Ultimate Multisite > Impostazioni
2. Naviga nella scheda "Domain Mapping"
3. Scorri verso il basso fino a "Host Integrations"
4. Abilita l'integrazione WP Engine
5. Fai clic su "Save Changes"

## Come funziona

### Sincronizzazione dei domini
Quando un dominio è mappato in Ultimate Multisite:

1. L'integrazione utilizza l'API WP Engine per aggiungere il dominio alla tua installazione WP Engine
2. WP Engine gestisce la configurazione del dominio e l'emissione del certificato SSL
3. Quando una mappatura di dominio viene rimossa, l'integrazione rimuoverà il dominio da WP Engine

### Supporto dei sottodomini
Per le installazioni multisito con sottodomini:

1. L'integrazione aggiunge ogni sottodominio a WP Engine quando viene creato un nuovo sito
2. WP Engine gestisce la configurazione del sottodominio
3. Quando un sito viene eliminato, l'integrazione rimuoverà il sottodominio da WP Engine

## Note importanti

### Domini wildcard
Per le installazioni multisito con sottodomini, si consiglia di contattare il supporto WP Engine per richiedere una configurazione di dominio wildcard. Ciò consente a tutti i sottodomini di funzionare automaticamente senza dover aggiungere ciascuno individualmente.

### Certificati SSL
WP Engine gestisce automaticamente l'emissione e il rinnovo dei certificati SSL per tutti i domini aggiunti tramite questa integrazione. Non è necessaria alcuna configurazione aggiuntiva.

## Risoluzione dei problemi

### Problemi di connessione API
- Verifica che il plugin WP Engine sia attivo e correttamente configurato
- Se hai definito manualmente la chiave API, verifica che sia corretta
- Contatta il supporto WP Engine se hai problemi con l'API

### Dominio non aggiunto
- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il dominio non sia già stato aggiunto a WP Engine
- Assicurati che il tuo piano WP Engine supporti il numero di domini che stai aggiungendo

### Problemi di sottodominio
- Se i sottodomini non funzionano, contatta il supporto WP Engine per richiedere una configurazione di dominio wildcard
- Verifica che le impostazioni DNS siano correttamente configurate per il dominio principale e i sottodomini
