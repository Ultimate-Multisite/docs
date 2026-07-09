---
title: Integrazione Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integrazione Cloudflare

## Panoramica
Cloudflare è un importante content delivery network (CDN) e provider di sicurezza che aiuta a proteggere e velocizzare i siti web. Questa integrazione abilita la gestione automatica dei domini tra Ultimate Multisite e Cloudflare, in particolare per le installazioni multisito con sottodomini.

## Funzionalità
- Creazione automatica di sottodomini in Cloudflare
- Supporto per sottodomini con proxy
- Gestione dei record DNS
- Visualizzazione migliorata dei record DNS nell’admin di Ultimate Multisite

## Requisiti
Le seguenti costanti devono essere definite nel file `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Istruzioni di configurazione

### 1. Ottieni la tua Cloudflare API Key

1. Accedi alla tua dashboard Cloudflare
2. Vai a "My Profile" (fai clic sulla tua email nell’angolo in alto a destra)
3. Seleziona "API Tokens" dal menu
4. Crea un nuovo token API con le seguenti autorizzazioni:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Copia il tuo token API

### 2. Ottieni il tuo Zone ID

1. Nella tua dashboard Cloudflare, seleziona il dominio che vuoi usare
2. Lo Zone ID è visibile nella scheda "Overview", nella barra laterale destra sotto "API"
3. Copia lo Zone ID

### 3. Aggiungi le costanti a wp-config.php

Aggiungi le seguenti costanti al tuo file `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Abilita l’integrazione

1. Nel tuo admin WordPress, vai a Ultimate Multisite > Settings
2. Vai alla scheda "Domain Mapping"
3. Scorri fino a "Host Integrations"
4. Abilita l’integrazione Cloudflare
5. Fai clic su "Save Changes"

## Come funziona

### Gestione dei sottodomini

Quando viene creato un nuovo sito in un’installazione multisito con sottodomini:

1. L’integrazione invia una richiesta all’API di Cloudflare per aggiungere un record CNAME per il sottodominio
2. Il sottodominio è configurato per passare tramite proxy attraverso Cloudflare per impostazione predefinita (questo può essere modificato con i filtri)
3. Quando un sito viene eliminato, l’integrazione rimuoverà il sottodominio da Cloudflare

### Visualizzazione dei record DNS

L’integrazione migliora la visualizzazione dei record DNS nell’admin di Ultimate Multisite:

1. Recuperando i record DNS direttamente da Cloudflare
2. Mostrando se i record sono con proxy o meno
3. Mostrando informazioni aggiuntive sui record DNS

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (in precedenza chiamato "Cloudflare for SaaS") è una funzionalità di Cloudflare che consente ai tuoi clienti di usare i propri domini con SSL sulla tua rete multisito. È l’approccio consigliato per le installazioni multisito con mappatura dei domini che usano Cloudflare, perché Cloudflare gestisce automaticamente l’emissione e il rinnovo del certificato SSL per ogni dominio personalizzato.

### In cosa differisce dall’integrazione Cloudflare standard

| | Integrazione standard | Cloudflare Custom Hostnames |
|---|---|---|
| **Scopo** | Crea automaticamente record DNS per sottodomini | Abilita domini personalizzati (mappati) con SSL gestito da Cloudflare |
| **Ideale per** | Multisito con sottodomini | Multisito con mappatura dei domini |
| **SSL** | Gestito separatamente | Gestito automaticamente da Cloudflare |

### Configurazione di Cloudflare Custom Hostnames

1. Nella tua dashboard Cloudflare, apri la zona per il tuo dominio principale.
2. Vai a **SSL/TLS > Custom Hostnames**.
3. Aggiungi un’origine di fallback che punti all’IP o all’hostname del tuo server.
4. Per ogni dominio cliente mappato in Ultimate Multisite, aggiungi una voce Custom Hostname in Cloudflare. Puoi automatizzare questo passaggio usando l’API Cloudflare.
5. Cloudflare emette e rinnova automaticamente i certificati TLS per ogni hostname personalizzato una volta che il DNS del cliente punta alla tua rete.

Per il riferimento API completo, consulta la [documentazione di Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Aggiornamento della terminologia
A partire da Ultimate Multisite v2.6.1, questa funzionalità è indicata come **Cloudflare Custom Hostnames** in tutte le impostazioni e le etichette del plugin. Le versioni precedenti usavano il nome "Cloudflare for SaaS", che è il nome del prodotto Cloudflare sottostante.
:::

## Note importanti

A seguito dei recenti aggiornamenti di Cloudflare, il proxy wildcard è ora disponibile per tutti i clienti. Questo significa che l’integrazione DNS Cloudflare standard è meno critica per le installazioni multisito con sottodomini rispetto al passato, poiché puoi semplicemente configurare un record DNS wildcard in Cloudflare.

## Risoluzione dei problemi

### Problemi di connessione API
- Verifica che il tuo token API sia corretto e disponga delle autorizzazioni necessarie
- Controlla che il tuo Zone ID sia corretto
- Assicurati che il tuo Account Cloudflare disponga delle autorizzazioni necessarie

### Sottodominio non aggiunto
- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il sottodominio non sia già stato aggiunto a Cloudflare
- Assicurati che il tuo piano Cloudflare supporti il numero di record DNS che stai creando

### Problemi di proxy
- Se non vuoi che i sottodomini passino tramite proxy, puoi usare il filtro `wu_cloudflare_should_proxy`
- Alcune funzionalità potrebbero non funzionare correttamente quando passano tramite proxy (ad es., alcune funzioni dell’admin WordPress)
- Valuta l’uso delle Page Rules di Cloudflare per bypassare la cache per le pagine di admin
