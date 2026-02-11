---
title: Integrazione Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integrazione

## Panoramica
Closte è una piattaforma di hosting WordPress gestita costruita sull'infrastruttura Google Cloud. Questa integrazione consente la sincronizzazione automatica dei domini e la gestione dei certificati SSL tra Ultimate Multisite e Closte.

## Funzionalità
- Sincronizzazione automatica dei domini
- Gestione dei certificati SSL
- Supporto per domini wildcard
- Nessuna configurazione necessaria se si esegue su Closte

## Requisiti
La seguente costante deve essere definita nel tuo file `wp-config.php` se stai usando Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Questa costante è tipicamente già definita se stai ospitando su Closte.

## Istruzioni di configurazione

### 1. Verifica la tua chiave API Closte
Se stai ospitando su Closte, la costante `CLOSTE_CLIENT_API_KEY` dovrebbe già essere definita nel tuo file `wp-config.php`. Puoi verificarlo controllando il tuo file `wp-config.php`.

### 2. Abilita l'integrazione
1. Nel tuo amministratore WordPress, vai su Ultimate Multisite > Impostazioni
2. Naviga alla scheda "Domain Mapping"
3. Scorri verso il basso fino a "Host Integrations"
4. Abilita l'integrazione Closte
5. Fai clic su 'Salva modifiche'

## Come funziona
Quando un dominio è mappato in Ultimate Multisite:

1. L'integrazione invia una richiesta all'API di Closte per aggiungere il dominio alla tua applicazione
2. Closte gestisce automaticamente la fornitura del certificato SSL
3. Quando una mappatura di dominio viene rimossa, l'integrazione rimuoverà il dominio da Closte

L'integrazione funziona anche con l'impostazione dell'intervallo di verifica DNS in Ultimate Multisite, consentendoti di configurare con quale frequenza il sistema verifica la propagazione DNS e l'emissione del certificato SSL.

## Creazione del record di dominio
Questa integrazione garantisce che quando un sito viene creato o duplicato, un record di dominio venga creato automaticamente. Questo è particolarmente importante per l'integrazione Closte, poiché la creazione del record di dominio attiva l'API di Closte per creare il dominio e il certificato SSL.

## Risoluzione dei problemi

### Problemi di connessione API
- Verifica che la tua chiave API Closte sia corretta
- Assicurati che il tuo account Closte abbia le autorizzazioni necessarie

### Problemi di certificato SSL
- Closte può impiegare del tempo per emettere certificati SSL (di solito 5-10 minuti)
- Verifica che i tuoi domini puntino correttamente all'indirizzo IP del server Closte
- Controlla i record DNS del tuo dominio per assicurarti che siano configurati correttamente

### Dominio non aggiunto
- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il dominio non sia già stato aggiunto a Closte
- Assicurati che i record DNS del tuo dominio siano configurati correttamente

### Intervallo di verifica DNS
- Se i certificati SSL impiegano troppo tempo per essere emessi, puoi regolare l'intervallo di verifica DNS nelle impostazioni di Domain Mapping
- L'intervallo predefinito è di 300 secondi (5 minuti), ma puoi impostarlo a 10 secondi per verifiche più rapide durante i test
