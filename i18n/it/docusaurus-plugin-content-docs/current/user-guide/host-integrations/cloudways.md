---
title: Integrazione Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrazione Cloudways

## Panoramica {#overview}
Cloudways è una piattaforma di hosting cloud gestito che ti consente di distribuire siti WordPress su vari provider cloud come DigitalOcean, AWS, Google Cloud e altri. Questa integrazione abilita la sincronizzazione automatica dei domini e la gestione dei certificati SSL tra Ultimate Multisite e Cloudways.

## Funzionalità {#features}
- Sincronizzazione automatica dei domini
- Gestione dei certificati SSL
- Supporto per domini extra
- Validazione DNS per i certificati SSL

## Requisiti {#requirements}
Le seguenti costanti devono essere definite nel tuo file `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Facoltativamente, puoi anche definire:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Istruzioni di configurazione {#setup-instructions}

### 1. Ottieni le tue credenziali API Cloudways {#1-get-your-cloudways-api-credentials}

1. Accedi al tuo Dashboard Cloudways
2. Vai su "Account" > "Chiavi API"
3. Genera una chiave API se non ne hai già una
4. Copia la tua email e la chiave API

### 2. Ottieni gli ID del server e dell'applicazione {#2-get-your-server-and-application-ids}

1. Nel tuo Dashboard Cloudways, vai su "Server"
2. Seleziona il server su cui è ospitato il tuo multisito WordPress
3. Il Server ID è visibile nell'URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Vai su "Applicazioni" e seleziona la tua applicazione WordPress
5. L'App ID è visibile nell'URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Aggiungi le costanti a wp-config.php {#3-add-constants-to-wp-configphp}

Aggiungi le seguenti costanti al tuo file `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Se hai domini **esterni** aggiuntivi (al di fuori della tua rete multisito) che devono essere sempre mantenuti nell'elenco degli alias Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Non includere il wildcard della tua rete
**Non** aggiungere `*.your-network.com` (o qualsiasi pattern di sottodominio della tua rete) a
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Vedi [Importante — insidia SSL wildcard](#important--wildcard-ssl-pitfall)
qui sotto per capire perché questo impedisce l'emissione di certificati SSL per singolo tenant.
:::

### 4. Abilita l'integrazione {#4-enable-the-integration}

1. Nell'amministrazione WordPress, vai su Ultimate Multisite > Impostazioni
2. Vai alla scheda "Mappatura domini"
3. Scorri verso il basso fino a "Integrazioni host"
4. Abilita l'integrazione Cloudways
5. Fai clic su "Salva modifiche"

## Come funziona {#how-it-works}

### Sincronizzazione dei domini {#domain-syncing}

Quando un dominio viene mappato in Ultimate Multisite:

1. L'integrazione recupera tutti i domini attualmente mappati
2. Aggiunge il nuovo dominio all'elenco (insieme a una versione www, se applicabile)
3. Invia l'elenco completo a Cloudways tramite l'API
4. Cloudways aggiorna gli alias di dominio per la tua applicazione

Nota: l'API Cloudways richiede di inviare ogni volta l'elenco completo dei domini, non solo di aggiungere o rimuovere singoli domini.

### Gestione dei certificati SSL {#ssl-certificate-management}

Dopo la sincronizzazione dei domini:

1. L'integrazione controlla quali domini hanno record DNS validi che puntano al tuo server
2. Invia una richiesta a Cloudways per installare certificati SSL Let's Encrypt per quei domini
3. Cloudways gestisce l'emissione e l'installazione dei certificati SSL

L'integrazione richiede sempre certificati Let's Encrypt **standard** (non wildcard) da
Cloudways. Se viene fornito un pattern wildcard in `WU_CLOUDWAYS_EXTRA_DOMAINS`, il prefisso
`*.` viene rimosso prima della richiesta SSL — il wildcard stesso non viene mai installato da questa
integrazione. Per usare un certificato wildcard su Cloudways dovresti installarlo
manualmente, ma farlo blocca l'emissione Let's Encrypt per dominio per i domini personalizzati mappati
(vedi l'insidia qui sotto).

## Domini extra {#extra-domains}

La costante `WU_CLOUDWAYS_EXTRA_DOMAINS` ti consente di specificare domini **esterni**
aggiuntivi che devono essere sempre mantenuti nell'elenco degli alias dell'applicazione Cloudways. Usala per:

- Domini esterni che non sono gestiti da Ultimate Multisite (ad es. un sito di marketing separato che condivide la stessa applicazione Cloudways)
- Domini parcheggiati o di staging che vuoi mantenere nell'elenco degli alias dell'applicazione

**Non** usare questa costante per il wildcard di sottodominio della tua rete
(ad es. `*.your-network.com`). Vedi l'insidia SSL wildcard qui sotto.

## Importante — insidia SSL wildcard {#important--wildcard-ssl-pitfall}

Un errore comune quando si segue la configurazione predefinita di Cloudways è aggiungere un wildcard come
`*.your-network.com` a `WU_CLOUDWAYS_EXTRA_DOMAINS`, oppure installare manualmente un certificato SSL
wildcard Cloudways per quel wildcard.

**Se lo fai, Cloudways rifiuterà di emettere certificati Let's Encrypt per i
domini personalizzati per singolo tenant che Ultimate Multisite mappa.** Cloudways sostituisce il certificato
SSL attivo sull'applicazione ogni volta, e un certificato wildcard preesistente
sull'applicazione blocca l'emissione Let's Encrypt per dominio su cui si basa l'integrazione.

### Configurazione SSL Cloudways consigliata per una rete Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Nella scheda **Certificato SSL** dell'applicazione Cloudways, installa un **certificato
   Let's Encrypt standard** che copra solo `your-network.com` e `www.your-network.com`
   — **non** un wildcard.
2. **Non** inserire `*.your-network.com` (o qualsiasi pattern di sottodominio della tua rete) in
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Riserva quella costante solo ai domini **esterni**.
3. Crea il wildcard di sottodominio per singolo tenant solo a livello **DNS** (un record `A` per
   `*.your-network.com` che punta all'IP del tuo server Cloudways) così i sottositi si risolvono. L'SSL
   per i singoli domini personalizzati mappati viene quindi emesso automaticamente dall'integrazione
   tramite Let's Encrypt.

Se i domini personalizzati dei tuoi tenant sono bloccati senza SSL, controlla la scheda SSL di Cloudways. Se lì è attivo un certificato
wildcard, rimuovilo, riemetti un certificato Let's Encrypt standard
solo per il dominio principale della rete e rimuovi eventuali voci wildcard da
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Poi riattiva un mapping del dominio (o attendi il prossimo)
e l’integrazione ricomincerà a emettere certificati per-dominio.

## Risoluzione dei problemi {#troubleshooting}

### Problemi di connessione API {#api-connection-issues}
- Verifica che la tua email e la chiave API siano corrette
- Controlla che gli ID del tuo server e dell’applicazione siano corretti
- Assicurati che il tuo Account Cloudways disponga delle autorizzazioni necessarie

### Problemi con i certificati SSL {#ssl-certificate-issues}
- Cloudways richiede che i domini abbiano record DNS validi che puntano al tuo server prima di emettere certificati SSL
- L’integrazione convalida i record DNS prima di richiedere certificati SSL
- Se i certificati SSL non vengono emessi, controlla che i tuoi domini puntino correttamente all’indirizzo IP del tuo server
- **Domini personalizzati per tenant bloccati senza SSL?** Controlla la scheda Certificato SSL dell’applicazione Cloudways. Se è attivo un certificato wildcard (installato manualmente o che copre `*.your-network.com`), Cloudways non emetterà certificati Let's Encrypt per domini personalizzati mappati singolarmente. Sostituiscilo con un certificato Let's Encrypt standard che copra solo il dominio principale della rete (`your-network.com`, `www.your-network.com`) e rimuovi eventuali voci wildcard da `WU_CLOUDWAYS_EXTRA_DOMAINS`. Poi riattiva un mapping del dominio (o attendi il prossimo) e l’integrazione richiederà certificati per-dominio.

### Dominio non aggiunto {#domain-not-added}
- Controlla i log di Ultimate Multisite per eventuali messaggi di errore
- Verifica che il dominio non sia già stato aggiunto a Cloudways
- Assicurati che il tuo piano Cloudways supporti il numero di domini che stai aggiungendo
