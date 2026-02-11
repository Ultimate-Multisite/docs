---
title: Integrazione Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Integrazione Cloudflare

## Panoramica
Cloudflare è una rete di distribuzione dei contenuti (CDN) e un provider di sicurezza leader che aiuta a proteggere e accelerare i siti web. Questa integrazione consente la gestione automatica dei domini tra Ultimate Multisite e Cloudflare, in particolare per le installazioni multisito con sottodomini.

## Funzionalità
- Creazione automatica di sottodomini in Cloudflare
- Supporto per sottodomini in proxy
- Gestione dei record DNS
- Visualizzazione migliorata dei record DNS nell'amministrazione di Ultimate Multisite

## Requisiti
Le seguenti costanti devono essere definite nel tuo file `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Istruzioni di configurazione

### 1. Ottieni la tua chiave API Cloudflare

1. Accedi al tuo cruscotto Cloudflare
2. Vai su "Il mio profilo" (clicca sulla tua email nell'angolo in alto a destra)
3. Seleziona "Token API" dal menu
4. Crea un nuovo token API con le seguenti autorizzazioni:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Copia il tuo token API

### 2. Ottieni il tuo ID di zona

1. Nel tuo cruscotto Cloudflare, seleziona il dominio che desideri utilizzare
2. L'ID di zona è visibile nella scheda "Panoramica", nella barra laterale destra sotto "API"
3. Copia l'ID di zona

### 3. Aggiungi le costanti a wp-config.php

Aggiungi le seguenti costanti al tuo file `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Abilita l'integrazione

1. Nell'amministrazione di WordPress, vai su Ultimate Multisite > Settings
2. Naviga alla scheda "Domain Mapping"
3. Scorri verso il basso fino a "Host Integrations"
4. Abilita l'integrazione Cloudflare
5. Fai clic su "Save Changes"

## Come funziona

### Gestione dei sottodomini

Quando viene creato un nuovo sito in un'installazione multisito con sottodominio:

1. L'integrazione invia una richiesta all'API di Cloudflare per aggiungere un record CNAME per il sottodominio
2. Il sottodominio è configurato per essere proxyato tramite Cloudflare per impostazione predefinita (può essere modificato con filtri)
3. Quando un sito viene eliminato, l'integrazione rimuove il sottodominio da Cloudflare

### Visualizzazione dei record DNS

L'integrazione migliora la visualizzazione dei record DNS nell'amministrazione di Ultimate Multisite:

1. Recupera i record DNS direttamente da Cloudflare
2. Mostra se i record sono proxyati o meno
3. Mostra informazioni aggiuntive sui record DNS

## Note importanti

Con gli ultimi aggiornamenti di Cloudflare, il proxy wildcard è ora disponibile per tutti i clienti. Ciò significa che l'integrazione Cloudflare è meno critica per le installazioni multisito con sottodominio rispetto al passato, poiché è possibile impostare semplicemente un record DNS wildcard in Cloudflare.

## Risoluzione dei problemi

### Problemi di connessione API
- Verifica che il tuo token API sia corretto e abbia le autorizzazioni necessarie
- Controlla che l'ID di zona sia corretto
- Assicurati che il tuo account Cloudflare abbia le autorizzazioni necessarie

### Sottodominio non aggiunto
- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il sottodominio non sia già stato aggiunto a Cloudflare
- Assicurati che il tuo piano Cloudflare supporti il numero di record DNS che stai creando

### Problemi di proxy
- Se non vuoi che i sottodomini siano proxyati, puoi usare il filtro `wu_cloudflare_should_proxy`
- Alcune funzionalità potrebbero non funzionare correttamente quando sono proxyate (es. alcune funzioni di amministrazione di WordPress)
- Considera di usare le Page Rules di Cloudflare per bypassare la cache per le pagine di amministrazione
